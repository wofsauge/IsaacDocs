# Class "Color"
## Functions
[ ](#){: .abp .tooltip .badge }
### [Color](../Color) () {: aria-label='Functions' }
#### void [Color](../Color) ( float R, float G, float B, float A, int RO, int GO, int BO )  {: .copyable aria-label='Functions' }

Constructor for the "Color" class.
Notes: You need to use the <a class="el" href="class_k_color.html#adad4075b6c806d97b9b0134e9e9e519d">KColor()</a> constructor when using the <a class="el" href="class_font.html#ae12d76f0b59747bbf028333c9c7ed560">Font</a> class. 
Colors are made of three separate components, tint, colorize and offset. Tint acts like a color multiplicator. Offset is a color which is added after the tint is applied. Colorize is complicated. See the `:::cpp SetColorize()` function for a detailed description.
R, G, B and A accept numbers between 0 and 1.
RO, GO and BO accept numbers between -255 and 255. WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### __mul () {: aria-label='Functions' }
#### [Color](../Color) __mul ( [Color](../Color) right)  {: .copyable aria-label='Functions' }

Multiplication of two colors.
___ 
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
### Lerp () {: aria-label='Functions' }
#### static [Color](../Color) Lerp ( [Color](../Color) m1, [Color](../Color) m2, float t )  {: .copyable aria-label='Functions' }

Linear Interpolation between two colors. `:::cpp t` is the "progress" of the interpolation. Setting `:::cpp t = 0.5` means that the color in the middle of m1 and m2 will be returned.
___ 
[ ](#){: .abp .tooltip .badge }
### Reset () {: aria-label='Functions' }
#### void Reset ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetColorize () {: aria-label='Functions' }
#### void SetColorize ( float Red, float Green, float Blue, float Amount )  {: .copyable aria-label='Functions' }

The colorize function can be used to change the color of sprites. Its the best for that purpose, since it doesnt affect existing coloranimations like the flashing of creep.
The values can be between 0 and 1 for normal coloration. if you use higher numbers the color gets more vibrant.
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
The alpha component determines how much colorization must be applied. The function takes the original color, converts it to grayscale, multiplies it by the RGB components and then blends it back with the original color. The alpha value determines the blending factor.
Colorization is applied after the tint and before the offset function.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
`:::cpp SetColorize(1, 1, 1, 1)` will turn the sprite into grayscale.
 `:::cpp SetColorize(1, 0, 0, 1)` will turn it red but not as a red tint but as shades of red.

`:::cpp SetColorize(1, 1, 1, 2)` will invert the sprite without touching its luminosity.


This code changes the color of red Creep to be purple
```cpp 
Test:AddCallback(ModCallbacks.MC_POST_EFFECT_INIT, function(_, self)
if self.Variant == EffectVariant.CREEP_RED then
local color = Color(1, 1, 1, 1, 0, 0, 0)
color:SetColorize(4, 0, 4, 1)
self:GetSprite().Color = color
end
end)

```

___ 
[ ](#){: .abp .tooltip .badge }
### SetOffset () {: aria-label='Functions' }
#### void SetOffset ( float RedOffset, float GreenOffset, float BlueOffset )  {: .copyable aria-label='Functions' }

Offset is a color that gets added to the sprite after the Tint was applied.
___ 
[ ](#){: .abp .tooltip .badge }
### SetTint () {: aria-label='Functions' }
#### void SetTint ( float RedTint, float GreenTint, float BlueTint, float AlphaTint )  {: .copyable aria-label='Functions' }

Tint acts like a color multiplicator.
___ 
[ ](#){: .abp .tooltip .badge }
## Variables
### A {: aria-label='Variables' }
#### float A  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### B {: aria-label='Variables' }
#### float B  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### BO {: aria-label='Variables' }
#### float BO  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### G {: aria-label='Variables' }
#### float G  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### GO {: aria-label='Variables' }
#### float GO  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### R {: aria-label='Variables' }
#### float R  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### RO {: aria-label='Variables' }
#### float RO  {: .copyable aria-label='Variables' }

___ 
