precision mediump float;
precision mediump int;

uniform sampler2D textureEnv;
// uniform samplerCube textureEnv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;

uniform vec3 cameraPosition;

uniform float alpha;
uniform float displacement;
uniform float refractionRatio;
uniform float fresnelBias, fresnelScale, fresnelPower;

uniform vec4 resolution;

varying vec3 vWorld;
varying vec2 vUv;

vec4 sample(vec3 v) {
    vec2 uv = gl_FragCoord.xy * resolution.zw;
    return texture2D(textureEnv, uv + v.xy * displacement);
}

void main() {
    vec2 uv = vUv;
    // uv.y = 1.0 - uv.y;

    vec3 normal = vec3(0, 0, 0);
    normal.xy = (uv - 0.5) * 2.0;
    float r2 = dot(normal.xy, normal.xy);
    if(r2 > 1.0) {
        discard;
    }
    normal.z = sqrt(1.0 - r2);

    vec3 worldPosition = vWorld.xyz;
    vec3 worldNormal = normalize(mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal);

    vec3 I = worldPosition.xyz - cameraPosition;

    vec3 ni = normalize(I);
    vec3 reflection = reflect(ni, worldNormal);
	float fresnel = fresnelBias + fresnelScale * pow(1.0 + dot(ni, worldNormal), fresnelPower);

    // vec3 viewDir = normalize(-(viewMatrix * vec4(worldPosition, 1.0)).xyz);
    // float rim = dot(viewDir, worldNormal);

    vec4 reflectedColor = sample(reflection);
    vec4 refractedColor = sample(refract(ni, worldNormal, refractionRatio));
    vec4 color = mix(refractedColor, reflectedColor, fresnel);
    color.a *= alpha;

    gl_FragColor = color;
}
