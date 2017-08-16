
import GPUComputationRenderer from "../lib/threejs/GPUComputationRenderer";
import Noise from "../lib/perlin";

const build = (count = 64, size = 1) => {
    let geometry = new THREE.BufferGeometry();

    let vertices = [];
    let uv = [], uv2 = [];

    let inv = 1 / count;
    for(let y = 0; y < count; y++) {
        for(let x = 0; x < count; x++) {
            let u = x * inv;
            let v = y * inv;

            vertices.push(x, y, 0); // lt
            uv.push(u, v);
            uv2.push(0, 0);

            vertices.push(x + size, y, 0); // rt
            uv.push(u, v);
            uv2.push(1, 0);

            vertices.push(x + size, y + size, 0); // rb
            uv.push(u, v);
            uv2.push(1, 1);

            vertices.push(x, y + size, 0); // lb
            uv.push(u, v);
            uv2.push(0, 1);
        }
    }

    let indices = [];
    let len = vertices.length / 3;
    for(let i = 0; i < len; i += 4) {
        let a = i, b = i + 1, c = i + 2, d = i + 3;
        indices.push(a, c, b);
        indices.push(d, c, a);
    }

	geometry.setIndex(indices);
	geometry.addAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
	geometry.addAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
	geometry.addAttribute("uv2", new THREE.Float32BufferAttribute(uv2, 2));

    return geometry;
};

export default class ParticleSystem extends THREE.Mesh {

    constructor(renderer, options) {
        options = options || {};

        const count = options.count || 32;
        const geometry = build(count, 1);

        super(
            geometry,
            new THREE.RawShaderMaterial({
                vertexShader : options.vertexShader || require("../../shaders/particle/render/particle.vert"),
                fragmentShader : options.fragmentShader || require("../../shaders/particle/render/particle.frag"),
                uniforms : THREE.UniformsUtils.merge([
                    {
                        texturePosition: { type: "t", value: null },
                        textureVelocity: { type: "t", value: null },
                        textureEnv: { type: "t", value: null },
                        size: { type: "f", value: 0.5 },
                        alpha: { type: "f", value: 0.75 },
                        displacement: { type: "f", value: 0.1 },
                        refractionRatio: { type: "f", value: 0.85 },
                        fresnelBias: { type: "f", value: 0.113 },
                        fresnelPower: { type: "f", value: 2.6 },
                        fresnelScale: { type: "f", value: 0.68 },
                        resolution: { type: "v4", value: new THREE.Vector4(512, 512, 1/512, 1/512) }
                    },
                    options.uniforms
                ]),
                side: THREE.DoubleSide,
                transparent: true,
                depthTest: false
                // blending: THREE.AdditiveBlending
            })
        );
        this.frustumCulled = false;

        this.setup(renderer, count, options);

        this.material.uniforms.texturePosition.value = this.texturePosition;
        this.material.uniforms.textureVelocity.value = this.textureVelocity;
        // this.material.uniforms.textureEnv.value = options.env;
    }

    setup(renderer, count, options) {
        options = options || {};

        this.gpuCompute = new GPUComputationRenderer(count, count, renderer);
        let pos = this.gpuCompute.createTexture();
        let vel = this.gpuCompute.createTexture();

        const position = options.position || require("../../shaders/particle/update/position.frag");
        const velocity = options.position || require("../../shaders/particle/update/velocity.frag");

        this.posVar = this.gpuCompute.addVariable("texturePosition", position, vel, options);
        this.velVar = this.gpuCompute.addVariable("textureVelocity", velocity, pos, options);

        this.gpuCompute.setVariableDependencies(this.velVar, [this.velVar, this.posVar]);
        this.gpuCompute.setVariableDependencies(this.posVar, [this.velVar, this.posVar]);
        this.gpuCompute.init();

        this.uniforms = {
            mode: this.addUniform([this.posVar, this.velVar], "mode", { type:"i", value: 0 }),
            dt: this.addUniform([this.posVar, this.velVar], "dt", { type:"f", value: 0.0 }),
            time: this.addUniform([this.posVar, this.velVar], "time", { type:"f", value: 0.0 }),
            emitter: this.addUniform([this.posVar], "emitter", { type:"v3", value: new THREE.Vector3(0, 0, 0) }),
            radius: this.addUniform([this.posVar], "radius", { type:"f", value: options.radius || 10.0 }),
            boundsMin: this.addUniform([this.posVar], "boundsMin", { type:"v3", value: options.boundsMin || new THREE.Vector3(-15, -10, -20) }),
            boundsMax: this.addUniform([this.posVar], "boundsMax", { type:"v3", value: options.boundsMax || new THREE.Vector3(15, 8, 0) }),
            decay: this.addUniform([this.posVar], "decay", { type:"f", value: 0.1 }),
            point: this.addUniform([this.velVar], "point", { type:"v3", value: new THREE.Vector3(0, 0, 0) }),
            force: this.addUniform([this.velVar], "force", { type:"f", value: 0.0 }),
            speed: this.addUniform([this.velVar], "speed", { type:"f", value: 1.5 }),
            noise: this.addUniform([this.velVar], "noise", { type:"f", value: 1.0 }),
        };
        this.update(0, 0);

        this.uniforms.mode.value = 1;
    }

    addUniform(variables, key, uniform) {
        variables.forEach((variable) => {
            variable.material.uniforms[key] = uniform;
        });
        return uniform;
    }

    update(dt, time) {
        this.uniforms.dt.value = dt;
        this.uniforms.time.value = time;
        this.uniforms.force.value *= 0.95;

        this.gpuCompute.compute();
    }

    interact(world) {
        const local = this.worldToLocal(world);
        this.uniforms.point.value = local;
        this.uniforms.force.value = 0.5;
    }

    resize(width, height) {
        this.material.uniforms.resolution.value.set(width, height, 1/width, 1/height);
    }

    get texturePosition() {
        return this.gpuCompute.getCurrentRenderTarget(this.posVar).texture;
    }

    get textureVelocity() {
        return this.gpuCompute.getCurrentRenderTarget(this.velVar).texture;
    }

}
