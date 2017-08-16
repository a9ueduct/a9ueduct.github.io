
export default class Hypershape extends THREE.Mesh {

    constructor() {

        super(
            new THREE.IcosahedronGeometry(1, 1),
            new THREE.RawShaderMaterial({
                vertexShader: require("../../shaders/hypershape/hypershape.vert"),
                fragmentShader: require("../../shaders/hypershape/hypershape.frag"),
                uniforms: {
                    time: { type: "f", value: 0 },
                    speed: { type: "f", value: 0.25 },
                    scale: { type: "v3", value: new THREE.Vector3(3, 3, 3) },
                    intensity: { type: "v3", value: new THREE.Vector3(2, 2, 2) },
                },
                side: THREE.DoubleSide
            })
        );

        this.acceleration = 1.0;
    }

    update(dt, time, frame) {
        this.acceleration = Math.max(1, this.acceleration * 0.9);
        this.material.uniforms.time.value += dt * this.acceleration;

        if(Math.random() < 0.02) {
            this.acceleration = 10.0;
        }

        this.rotation.set(time, time, 0);
    }

}
