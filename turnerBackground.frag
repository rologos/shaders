#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
//uniform float u_time;

vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);

void main () 

    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);

    vec3 pct = vec3(st.x);

    color = mix(colorA,colorB,pct);

    gl_FragColor = vec4(color,1.0);
    
}
