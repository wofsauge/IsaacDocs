# Class "Color"
___ 
## void Color (float R, float G, float B, float A, integer RO, integer GO, integer BO )

Constructor for the "Color" class.
Notes: You need to use the <a class="el" href="class_k_color.html#adad4075b6c806d97b9b0134e9e9e519d">KColor()</a> constructor when using the <a class="el" href="class_font.html#ae12d76f0b59747bbf028333c9c7ed560">Font</a> class. 
Colors are made of three separate components, tint, colorize and offset. Tint acts like a color multiplicator. Offset is a color which is added after the tint is applied. Colorize is complicated. See the <code class="language-lua">SetColorize()</code> function for a detailed description.
R, G, B and A accept numbers between 0 and 1.
RO, GO and BO accept numbers between -255 and 255.
___ 
## Color __mul (Color right)

Multiplication of two colors.
___ 
## static Color Lerp (Color m1, Color m2, float t )

Linear Interpolation between two colors. <code>t</code> is the "progress" of the interpolation. Setting <code>t = 0.5</code> means that the color in the middle of m1 and m2 will be returned.
___ 
## void Reset ()

___ 
## void SetColorize (float Red, float Green, float Blue, float Amount )

The colorize function can be used to change the color of sprites. Its the best for that purpose, since it doesnt affect existing coloranimations like the flashing of creep.<br/>The values can be between 0 and 1 for normal coloration. if you use higher numbers the color gets more vibrant.
#### Notes
The alpha component determines how much colorization must be applied. The function takes the original color, converts it to grayscale, multiplies it by the RGB components and then blends it back with the original color. The alpha value determines the blending factor.
Colorization is applied after the tint and before the offset function.
#### Example Code
 will turn the sprite into grayscale. SetColorize(1, 0, 0, 1) will turn it red but not as a red tint but as shades of red.
SetColorize(1, 1, 1, 2) will invert the sprite without touching its luminosity.

This code changes the color of red Creep to be purple
Test:AddCallback(ModCallbacks.MC_POST_EFFECT_INIT, function(_, self)
if self.Variant == EffectVariant.CREEP_RED then
local color = Color(1, 1, 1, 1, 0, 0, 0)
color:SetColorize(4, 0, 4, 1)
self:GetSprite().Color = color
end
end)
```lua
SetColorize(1, 1, 1, 1)
```
___ 
## void SetOffset (float RedOffset, float GreenOffset, float BlueOffset )

Offset is a color that gets added to the sprite after the Tint was applied.
___ 
## void SetTint (float RedTint, float GreenTint, float BlueTint, float AlphaTint )

Tint acts like a color multiplicator.
___ 
## float A

___ 
## float B

___ 
## float BO

___ 
## float G

___ 
## float GO

___ 
## float R

___ 
## float RO

___ 
