
export default class BackgroundPass extends THREE.ShaderPass {

    constructor(options) {
        options = options || {};

        super({
            uniforms: {
                time: { type: "f", value: 0.0 },
                resolution: { type: "v2", value: new THREE.Vector2(512, 512) },
                color: { type: "c", value: new THREE.Color(0x253759) },
                darkness: { type: "f", value: 1.0 },
                offset: { type: "f", value: 1.5 },
                textureGrid: { type: "t", value: null }
            },
            vertexShader: require("../../shaders/posteffects/kernel.vert"),
            fragmentShader: require("../../shaders/posteffects/background.frag")
        });

        const width = this.material.uniforms.resolution.x;
        const height = this.material.uniforms.resolution.y;
        // this.backbuffer = new THREE.WebGLRenderTarget(width, height, {});

        this.loadTexture("/textures/grid.jpg");
    }

    setSize(width, height) {
        super.setSize(width, height);
        // this.backbuffer.setSize(width, height);
        this.material.uniforms.resolution.value = new THREE.Vector2(width, height);
    }

    update(dt, t, frame) {
        this.material.uniforms.time.value = t;
        if(frame % 2 == 0) {
            this.material.uniforms.noiseOffset.value.set(Math.random(), Math.random());
        }
    }

    render(renderer, writeBuffer, readBuffer, delta, maskActive) {
        super.render(renderer, writeBuffer, readBuffer, delta, maskActive);

        // renderer.render(this.scene, this.camera, this.backbuffer, false);
    }

    loadTexture(path) {
        let loader = new THREE.TextureLoader();
        loader.load(path, (texture) => {
            this.material.uniforms.textureGrid.value = texture;
        });
    } 

}
