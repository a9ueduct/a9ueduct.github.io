
import dat from "../lib/dat.gui.min";

import "../lib/threejs/postprocessing/EffectComposer";
import "../lib/threejs/shaders/CopyShader";
import "../lib/threejs/postprocessing/RenderPass";
import "../lib/threejs/postprocessing/ShaderPass";
import "../lib/threejs/postprocessing/SavePass";
import "../lib/threejs/postprocessing/MaskPass";
import "../lib/threejs/controls/TrackballControls";

import BackgroundPass from "./background";
import CompositePass from "./composite";
import ParticleSystem from "./particle";
import Hypershape from "./hypershape";

export default class Sketch extends THREE.EventDispatcher {

    constructor(dom) {
        super();

        this.clock = new THREE.Clock()
        this.frame = 0;

        this.updaters = [];

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: dom
        });
        this.renderer.setClearColor(new THREE.Color("rgb(0, 0, 0)"));

        this.setupScene();
        this.setupComposer();
        // this.system.material.uniforms.textureEnv.value = this.background.backbuffer.texture;
        this.system.material.uniforms.textureEnv.value = this.composite.backbuffer.texture;

        window.addEventListener("resize", (e) => {
            this.resize();
        });

        window.addEventListener("mousemove", (e) => {
            let mx = e.clientX, my = e.clientY;
            this.interact(mx, my);
        });

        let loop = (time) => {
            this.loop(time);
            requestAnimationFrame(loop);
        };
        this.resize();
        requestAnimationFrame(loop);
    }

    interact(mx, my) {
        var vector = new THREE.Vector3(
            (mx / window.innerWidth ) * 2 - 1,
            - (my / window.innerHeight ) * 2 + 1,
            0.5
        );
        vector.unproject(this.camera);

        let dir = vector.sub(this.camera.position).normalize();
        let distance = - this.camera.position.z / dir.z;
        let p = this.camera.position.clone().add(dir.multiplyScalar(distance));
        this.system.interact(p);
    }

    setupScene() {
        this.scene = new THREE.Scene();

        let w = window.innerWidth, h = window.innerHeight;

        this.camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
        this.camera.position.set(0, 0, 10.75);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        // let helper = new THREE.CameraHelper(this.camera);
        // this.scene.add(helper);

        let shape = new Hypershape();
        shape.scale.set(2, 2, 2);
        this.updaters.push(shape);
        this.scene.add(shape);

        this.overlay = new THREE.Scene();

        this.system = new ParticleSystem(this.renderer, {});
        this.overlay.add(this.system);
        this.updaters.push(this.system);

        // this.debugTexture(this.system.texturePosition);

        const gui = new dat.GUI();
        gui.add(this.system.material.uniforms.displacement, "value").min(0.0).max(0.5).step(0.01).name("displacement");
        gui.add(this.system.material.uniforms.refractionRatio, "value").min(0.0).max(3.0).name("ratio");
        gui.add(this.system.material.uniforms.fresnelBias, "value").min(0.0).max(0.5).name("bias");
        gui.add(this.system.material.uniforms.fresnelPower, "value").min(0.0).max(3.0).name("power");
        gui.add(this.system.material.uniforms.fresnelScale, "value").min(0.0).max(3.0).name("scale");
    }

    debugTexture(texture, width = 10, height = 10) {
        let plane = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1, 1, 1),
            new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide
            })
        );
        plane.scale.set(width, height, 1);
        this.scene.add(plane);

        return plane;
    }

    setupComposer() {
        let w = window.innerWidth, h = window.innerHeight;

        const background = new BackgroundPass();
        this.background = background;

        const rpass = new THREE.RenderPass(this.scene, this.camera);
        rpass.clear = false; rpass.clearDepth = true;

        this.composite = new CompositePass({
            backbuffer: true
        });
        // this.composite.clear = false; this.composite.clearDepth = true;
        this.updaters.push(this.composite);

        const overlay = new THREE.RenderPass(this.overlay, this.camera);
        overlay.clear = false; overlay.clearDepth = true;

        let composite2 = new CompositePass({
            backbuffer: false
        });

        this.composer = new THREE.EffectComposer(this.renderer);
        this.composer.addPass(background);
        this.composer.addPass(rpass);
        this.composer.addPass(this.composite);
        this.composer.addPass(overlay);
        this.composer.addPass(composite2);

        const passes = this.composer.passes;
        passes[passes.length - 1].renderToScreen = true;

        this.composer.setSize(w, h);
    }

    loop(time) {
        let dt = this.clock.getDelta();
        this.update(Math.min(dt, 0.1), this.clock.elapsedTime);
        this.render();
    }

    update(dt, time) {
        this.updaters.forEach((updater) => {
            updater.update(dt, time, this.frame);
        });

        this.frame++;
    }

    render() {
        // this.renderer.render(this.scene, this.camera);
        this.composer.render();
    }

    resize () {
        let w = window.innerWidth, h = window.innerHeight;
        this.renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
        this.renderer.setSize(w, h);

        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.composer.setSize(w, h);

        this.system.resize(w, h);
    }

}
