precision mediump float;
precision mediump int;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;

uniform sampler2D texturePosition, textureVelocity;
uniform float size;

attribute vec3 position;
attribute vec2 uv;

varying vec3 vWorld;

void main() {
    vec4 pos = texture2D(texturePosition, uv);

    vec4 mvPosition = (modelViewMatrix * vec4(pos.xyz, 1.0));
    gl_Position = projectionMatrix * mvPosition;

    float s = smoothstep(0.0, 0.3, pos.w) * smoothstep(1.0, 0.8, pos.w);
    gl_PointSize = size * s;

    vWorld = (modelMatrix * vec4(pos.xyz, 1.0)).xyz;
}
