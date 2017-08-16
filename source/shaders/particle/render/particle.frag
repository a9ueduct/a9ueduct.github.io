precision mediump float;
precision mediump int;

uniform sampler2D textureEnv;
// uniform samplerCube textureEnv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;

uniform vec3 cameraPosition;

uniform float refractionRatio;
uniform float fresnelBias, fresnelScale, fresnelPower;

uniform vec4 resolution;

varying vec3 vWorld;

vec4 sample(vec3 v) {
    vec2 uv = gl_FragCoord.xy * resolution.zw;
    return texture2D(textureEnv, uv + v.xy * v.z * 0.01);
}

void main() {
    vec2 uv = gl_PointCoord;
    
    vec3 normal = vec3(0, 0, 0);
    normal.xy = uv * 2.0 - 1.0;
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

    /*
	vec3 refraction0 = refract(ni, worldNormal, refractionRatio);
	vec3 refraction1 = refract(ni, worldNormal, refractionRatio * 0.99);
	vec3 refraction2 = refract(ni, worldNormal, refractionRatio * 0.98);

    vec4 reflectedColor = textureCube(textureEnv, vec3(-reflection.x, reflection.yz));
    vec4 refractedColor = vec4(1.0);
    refractedColor.r = textureCube(textureEnv, vec3(-refraction0.x, refraction0.yz)).r;
    refractedColor.g = textureCube(textureEnv, vec3(-refraction1.x, refraction1.yz)).g;
    refractedColor.b = textureCube(textureEnv, vec3(-refraction2.x, refraction2.yz)).b;
    vec4 color = mix(refractedColor, reflectedColor, fresnel);
    */

    /*
    vec4 reflectedColor = sample(reflection);
    vec4 refractedColor = vec4(1.0);
    refractedColor.r = sample(refract(ni, worldNormal, refractionRatio)).r;
    refractedColor.g = sample(refract(ni, worldNormal, refractionRatio * 0.99)).g;
    refractedColor.b = sample(refract(ni, worldNormal, refractionRatio * 0.98)).b;
    // vec4 color = mix(refractedColor, vec4(1.0), clamp(fresnel, 0.0, 1.0));
    vec4 color = refractedColor;
    */

    vec3 viewDir = normalize(-(viewMatrix * vec4(worldPosition, 1.0)).xyz);
    float rim = dot(viewDir, worldNormal);
    // vec4 color = (1.0 - rim) * sample(refract(ni, worldNormal, refractionRatio));
    vec4 color = (1.0 - rim) * sample(reflection);
    // color.rgb = mix(color.rgb, vec3(1.0), fresnel);
    // color.rgb = vec3(1.0);

    gl_FragColor = color;
}
