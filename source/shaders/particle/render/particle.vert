precision mediump float;
precision mediump int;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;

uniform sampler2D texturePosition, textureVelocity;
uniform float size;

attribute vec3 position;
attribute vec2 uv, uv2;

varying vec2 vUv;
varying vec3 vWorld;

vec4 billboard(vec3 pos, vec2 uv, float scale) {
    mat4 billboardMatrix = viewMatrix;
    // billboardMatrix[0][3] = billboardMatrix[1][3] = billboardMatrix[2][3] = billboardMatrix[3][3] = 0.0;
    billboardMatrix[3][0] = billboardMatrix[3][1] = billboardMatrix[3][2] = billboardMatrix[3][3] = 0.0;

    vec4 p = vec4(vec4(pos, 1.0) + vec4((uv * 2.0 - vec2(1.0, 1.0)) * scale, 0, 1) * billboardMatrix);
    return p;
}

void main() {
    vec4 pos = texture2D(texturePosition, uv);
    float s = smoothstep(0.0, 0.3, pos.w) * smoothstep(1.0, 0.8, pos.w);

    vec3 mp = (modelMatrix * vec4(pos.xyz, 1.0)).xyz;
    vec4 world = billboard(mp, uv2, size * s);
    vWorld = world.xyz;
    vUv = uv2;

    // vec4 mvPosition = (modelViewMatrix * vec4(pos.xyz, 1.0));
    // gl_Position = projectionMatrix * mvPosition;
    gl_Position = projectionMatrix * (viewMatrix * world);

    // gl_PointSize = size * s;
}
