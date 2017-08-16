
#pragma glslify: random = require(glsl-random)
#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)

uniform float time;
uniform vec2 resolution;
uniform sampler2D tDiffuse;

uniform vec2 noiseOffset;

varying vec2 vUv;

void main() {
    vec4 color = texture2D(tDiffuse, vUv);

    float whiteNoise = random(vUv + noiseOffset);
    color.rgb *= vec3(1. - whiteNoise * 0.15);
    
    gl_FragColor = color;
}
