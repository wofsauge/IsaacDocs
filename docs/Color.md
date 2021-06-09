# Class "Color"
## Constructors
### Color () {: aria-label='Constructors' }
[ ](#){: .abp .tooltip .badge }
#### [Color](../abp/Color) Color ( float R, float G, float B, float A, int RO, int GO, int BO ) {: .copyable aria-label='Constructors' }

Constructor for the "Color" class.

When using the [Font](../abp/Font) class, use [KColor()](../abp/KColor) instead. 

Colors are made of three separate components, tint, colorize and offset. Tint acts like a color multiplicator. Offset is a color which is added after the tint is applied. Colorize is complicated. See the `:::lua SetColorize()` function for a detailed description.

R, G, B and A accept numbers between 0 and 1.

RO, GO and BO accept numbers between -255 and 255.
___ 
## Operators
### __mul () {: aria-label='Operators' }
[ ](#){: .abp .tooltip .badge }
#### [Color](../abp/Color) __mul ( [Color](../abp/Color) right ) {: .copyable aria-label='Operators' }

Defines the multiplication of two [Color](../abp/Color) objects using the `*` operator.
___ 
## Functions
### Lerp () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static [Color](../abp/Color) Lerp ( [Color](../abp/Color) m1, [Color](../abp/Color) m2, float t ) {: .copyable aria-label='Functions' }

Linear Interpolation between two colors. `:::lua t` is the "progress" of the interpolation. Setting `:::lua t = 0.5` means that the color in the middle of m1 and m2 will be returned.
___ 
### Reset () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Reset ( ) {: .copyable aria-label='Functions' }

___ 
### Set·Colorize () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetColorize ( float Red, float Green, float Blue, float Amount ) {: .copyable aria-label='Functions' }

The colorize function can be used to change the color of sprites. Its the best for that purpose, since it doesnt affect existing coloranimations like the flashing of creep.

The values can be between 0 and 1 for normal coloration. if you use higher numbers the color gets more vibrant.

???- note "Notes"
    The alpha component determines how much colorization must be applied. The function takes the original color, converts it to grayscale, multiplies it by the RGB components and then blends it back with the original color. The alpha value determines the blending factor.
    Colorization is applied after the tint and before the offset function.

???- example "Example Code"
    `:::lua SetColorize(1, 1, 1, 1)` will turn the sprite into grayscale.
    
     `:::lua SetColorize(1, 0, 0, 1)` will turn it red but not as a red tint but as shades of red.
    
    
    `:::lua SetColorize(1, 1, 1, 2)` will invert the sprite without touching its luminosity.
    
    
    
    This code changes the color of red Creep to be purple
    ```lua 
    Test:AddCallback(ModCallbacks.MC_POST_EFFECT_INIT, function(_, self)
        if self.Variant == EffectVariant.CREEP_RED then
            local color = Color(1, 1, 1, 1, 0, 0, 0)
            color:SetColorize(4, 0, 4, 1)
            self:GetSprite().Color = color
        end
    end)
    
    ```

___ 
### Set·Offset () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetOffset ( float RedOffset, float GreenOffset, float BlueOffset ) {: .copyable aria-label='Functions' }

Offset is a color that gets added to the sprite after the Tint was applied.
___ 
### Set·Tint () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetTint ( float RedTint, float GreenTint, float BlueTint, float AlphaTint ) {: .copyable aria-label='Functions' }

Tint acts like a color multiplicator.
___ 
## Variables
### A {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float A  {: .copyable aria-label='Variables' }

___ 
### B {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float B  {: .copyable aria-label='Variables' }

___ 
### BO {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float BO  {: .copyable aria-label='Variables' }

___ 
### G {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float G  {: .copyable aria-label='Variables' }

___ 
### GO {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float GO  {: .copyable aria-label='Variables' }

___ 
### R {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float R  {: .copyable aria-label='Variables' }

___ 
### RO {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float RO  {: .copyable aria-label='Variables' }

___ 
