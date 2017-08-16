precision mediump float;
precision mediump int;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

uniform float time, speed;
uniform vec3 scale, intensity;

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

varying vec3 vPosition;

void main() {
    vec3 pos = position.xyz;
    float n = snoise3(pos * scale + vec3(0.0, time * speed, 0.0));
    pos += normal * n * intensity;
    vPosition = pos;
    gl_Position = projectionMatrix * (modelViewMatrix * vec4(pos, 1.0));
}
