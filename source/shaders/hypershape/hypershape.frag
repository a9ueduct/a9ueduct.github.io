#extension GL_OES_standard_derivatives : enable

precision mediump float;
precision mediump int;

varying vec3 vPosition;

vec3 flatNormal(vec3 p) {
    vec3 dx = dFdx(p);
    vec3 dy = dFdy(p);
    return normalize(cross(normalize(dx), normalize(dy)));
}

void main() {
    vec3 normal = flatNormal(vPosition);
    // vec3 normal = vNormal;
    gl_FragColor = vec4((normal + 1.0) * 0.5, 1.0);
}
