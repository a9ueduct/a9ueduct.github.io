
#pragma glslify: snoise2 = require(glsl-noise/simplex/2d)
#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)

uniform vec2 resolution;

uniform float time;
uniform vec3 color;
uniform float offset, darkness;

uniform sampler2D textureGrid;

varying vec2 vUv;

void main() {
    vec2 uv = (vUv - vec2(0.5)) * vec2(offset);
    vec3 col = mix(color, vec3(1.0 - darkness), dot(uv, uv));
    // col = texture2D(textureGrid, vUv).rgb;
    gl_FragColor = vec4(col, 1);
}
