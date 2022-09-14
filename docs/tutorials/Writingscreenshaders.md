---
tags:
  - Tutorial
---
# [Tutorial] Writing screen shaders

## Example Shaders:
* Tilt Shift Shader by im_tem: [https://steamcommunity.com/sharedfiles/filedetails/?id=2524003926](https://steamcommunity.com/sharedfiles/filedetails/?id=2524003926)
* Vortex Street background shader by Wofsauge [Preview Video](../customData/Vortex_Street_shader.mp4) - [Code](../customData/vortex_street_shader.zip) - [Original shader source](https://www.shadertoy.com/view/MlS3Rh)

## Create your own shader:
**Reload shaders of mods via console command:** `reloadshaders`

In order to write your screen shader you need to create '_shaders.xml_' in the '_content_' folder that is part of your **Mod folder**.

shaders.xml should have the following structure:

```xml
<shaders>
    <shader name="SHADER_NAME">
        <parameters>
            <param name="PARAMETER_NAME" type="PARAMETER_TYPE"/>
            ...
        </parameters>
        <vertex><![CDATA[
            VERTEX_SHADER
        ]]></vertex>
        <fragment><![CDATA[
            FRAGMENT_SHADER
        ]]></fragment>
    </shader>
    <shader name="...">
        ...
    </shader>
</shaders>
```

where:

*   `SHADER_NAME` is the shader name
*   `PARAMETER_NAME` is the name of each custom parameter you want to pass from Lua
*   `PARAMETER_TYPE` is one of the following: `float`, `vec2`, `vec3`, `vec4`
*   `VERTEX_SHADER` is your vertex shader which should always include these attributes:


```xml
attribute vec3 Position;
attribute vec4 Color;
attribute vec2 TexCoord;
attribute vec4 RenderData;
attribute float Scale;
...your attributes...
uniform mat4 Transform;
...
```

*   `FRAGMENT_SHADER` is your fragment shader which again should contain at least these:

```xml
varying lowp vec4 Color0;
varying mediump vec2 TexCoord0;
varying lowp vec4 RenderDataOut;
varying lowp float ScaleOut;
uniform sampler2D Texture0;
```

`RenderData.xy` contains the window size, while `RenderData.zw` is the texture size.

`Scale` contains Isaac's room scale based on the window size. You can see the scale in action when you resize the window and the game keeps its content fixed for a certain amount of pixels then snaps to another zoom level.

Because of engine limitation we can only pass data through the vertex shader.

## Shader Example Code:
An example of a shader with custom parameters that changes the color tint of the screen based on the player position and the ingame framecounter.

Code: [→ Download this example mod here ←](../customData/shader_example_mod.zip)
<figure class="video_container">
  <video controls="true" allowfullscreen="true" style="width:25rem">
    <source src="../customData/shader example preview.mp4" type="video/mp4">
  </video>
  <figcaption>Result of this shader.</figcaption>
</figure>


```xml
<shaders>
	<shader name="RandomColors">
		<parameters>
			<param name="PlayerPos" type="vec2"/>
			<param name="Time" type="float"/>
		</parameters>
		<vertex><![CDATA[
			attribute vec3 Position;
			attribute vec4 Color;
			attribute vec2 TexCoord;
			attribute vec4 RenderData;
			attribute float Scale;
			attribute vec2 PlayerPos;
			attribute float Time;
			varying vec4 Color0;
			varying vec2 TexCoord0;
			varying vec4 RenderDataOut;
			varying float ScaleOut;
			varying vec2 PlayerPosOut;
			varying float TimeOut;
			uniform mat4 Transform;
			void main(void)
			{
				RenderDataOut = RenderData;
				ScaleOut = Scale;			// Passing data to fragment shader
				PlayerPosOut = PlayerPos;	// Passing data to fragment shader
				TimeOut = Time;				// Passing data to fragment shader
				Color0 = Color;
				TexCoord0 = TexCoord;
				gl_Position = Transform * vec4(Position.xyz, 1.0);
			}
		]]></vertex>
		<fragment><![CDATA[
			varying lowp vec4 Color0;
			varying mediump vec2 TexCoord0;
			varying lowp vec4 RenderDataOut;
			varying lowp float ScaleOut;
			varying mediump vec2 PlayerPosOut;
			varying lowp float TimeOut;
			uniform sampler2D Texture0;
			void main(void)
			{
				vec4 Color = Color0 * texture2D(Texture0, TexCoord0);
				Color.r *= PlayerPosOut.x * 0.5f;
				Color.g *= PlayerPosOut.y * 0.5f;
				Color.b *= sin(TimeOut * 0.1f);
				gl_FragColor = Color;
			}
		]]></fragment>
	</shader>
</shaders>
```

To pass the parameters we use the following Lua code:
```lua
local mod = RegisterMod("ShaderMod", 1)
function mod:GetShaderParams(shaderName)
	if shaderName == 'RandomColors' then
        local playerPos = Isaac.GetPlayer().Position
        local params = {
            PlayerPos = {   playerPos.X / 100.0,
                            playerPos.Y / 100.0 },
                            Time = Isaac.GetFrameCount()
            }
        return params;
    end
end
mod:AddCallback(ModCallbacks.MC_GET_SHADER_PARAMS, mod.GetShaderParams)
```
