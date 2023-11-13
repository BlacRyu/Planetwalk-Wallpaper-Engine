#include "common.h"
uniform sampler2D g_Texture0; // {"material":"framebuffer","label":"ui_editor_properties_framebuffer","hidden":true}
uniform vec2 u_Scale; // {"material":"UV Scale","default":"1 1"}
uniform vec2 u_Offset; // {"material":"UV Offset","default":"0 0"}

varying vec2 v_TexCoord;

void main() {
	vec2 uv;
	uv.x = atan2((v_TexCoord.y - 0.5), (v_TexCoord.x - 0.5)) / M_PI_2 + 0.5;
	uv.y = 1.0 - sqrt((v_TexCoord.x - 0.5) * (v_TexCoord.x - 0.5) * 4.0 + (v_TexCoord.y - 0.5) * (v_TexCoord.y - 0.5) * 4.0);
	uv.x = frac((uv.x + u_Offset.x) * u_Scale.x);
	uv.y = (uv.y + u_Offset.y) * u_Scale.y;
	vec4 albedo = texSample2D(g_Texture0, uv.xy);
	gl_FragColor = albedo;
}
