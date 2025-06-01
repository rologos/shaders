#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.733,0.224);

void main () {

    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);
    vec3 color1 = vec3(0.0);
    vec3 color2 = vec3(0.0);

    vec3 pct = vec3(st.x);

    color1 = mix(colorA,colorB,pct);
    color2 = mix(colorB,colorA,pct);
    color = mix(color1,color2,abs(sin(u_time)));

    gl_FragColor = vec4(color,1.0);
    
}
