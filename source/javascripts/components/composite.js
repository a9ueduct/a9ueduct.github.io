
export default class CompositePass extends THREE.ShaderPass {

    constructor(options) {
        options = options || {};

        super({
            uniforms: {
                time: { type: "f", value: 0.0 },
                resolution: { type: "v2", value: new THREE.Vector2(512, 512) },
                tDiffuse: { type: "t", value: null },
                noiseOffset: { type: "v2", value: new THREE.Vector2(0, 0) }
            },
            vertexShader: require("../../shaders/posteffects/kernel.vert"),
            fragmentShader: require("../../shaders/posteffects/composite.frag")
        });

        if(options.backbuffer) {
            const width = this.material.uniforms.resolution.x;
            const height = this.material.uniforms.resolution.y;
            this.backbuffer = new THREE.WebGLRenderTarget(width, height, {});
        }
    }

	setSize(width, height) {
        super.setSize(width, height);
        this.material.uniforms.resolution.value = new THREE.Vector2(width, height);
        if(this.backbuffer) {
            this.backbuffer.setSize(width, height);
        }
    }

    update(dt, t, frame) {
        this.material.uniforms.time.value = t;
        if(frame % 2 == 0) {
            this.material.uniforms.noiseOffset.value.set(Math.random(), Math.random());
        }
    }

    render(renderer, writeBuffer, readBuffer, delta, maskActive) {
        super.render(renderer, writeBuffer, readBuffer, delta, maskActive);
        if(this.backbuffer) {
            renderer.render(this.scene, this.camera, this.backbuffer, this.clear);
        }
    }

}
