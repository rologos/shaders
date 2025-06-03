#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float plot(vec2 st, float pct) {    
    return smoothstep(pct-0.02, pct, st.y ) - smoothstep(pct,pct + 0.2, st.y );
}

void main () {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    float y = sqrt(0.4*0.4 - (st.x - 0.5) * (st.x - 0.5));

    float pct = plot(st,y);
    vec3 color = vec3(0.0,pct,0.0);
    gl_FragColor = vec4(color,1.0);

}
