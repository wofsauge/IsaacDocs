---
tags:
  - Globals
  - Class
---
# Class "Color"

???+ info
    This class can be accessed by using its constructor or the following function:

    * [Entity.Color](Entity.md#color)
    * [Entity.SplatColor](Entity.md#splatcolor)
    * [EntityPlayer.LaserColor](EntityPlayer.md#lasercolor)
    * [EntityPlayer.TearColor](EntityPlayer.md#tearcolor)
    * [ProjectileParams.Color](ProjectileParams.md#color)
    * [Sprite.Color](Sprite.md#color)
    * [TearParams.TearColor](TearParams.md#tearcolor)

    ???+ example "Example Code"
        ```lua
        local myRedColor = Color(1,0,0,1)
        ```

## Constructors
### Color () {: aria-label='Constructors' }
[ ](#){: .reporplus .tooltip .badge }
#### [Color](Color.md) Color ( float R, float G, float B, float A = 1, float RO = 0, float GO = 0, float BO = 0 ) {: .copyable aria-label='Constructors' }

Constructor for the "Color" class.

When using the [Font](Font.md) class, use [KColor()](KColor.md) instead.

Colors are made of three separate components, tint, colorize and offset. Tint acts like a color multiplicator. Offset is a color which is added after the tint is applied. Colorize is complicated. See the `:::lua SetColorize()` function for a detailed description.

R, G, B, A, RO, GO and BO accept numbers between 0 and 1.
___
## Operators
### __mul () {: aria-label='Operators' }
[ ](#){: .alldlc .tooltip .badge }
#### [Color](Color.md) __mul ( [Color](Color.md) right ) {: .copyable aria-label='Operators' }

Defines the multiplication of two [Color](Color.md) objects using the `*` operator.
___
## Constants
### Color.Default {: aria-label='Constants' }
[ ](#){: .reporplus .tooltip .badge }

Equivalent to `:::lua Color(1, 1, 1, 1)`, the color white.
___
## Functions
### Lerp () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .alldlc .tooltip .badge }
#### static [Color](Color.md) Lerp ( [Color](Color.md) m1, [Color](Color.md) m2, float t ) {: .copyable aria-label='Functions' }

Linear Interpolation between two colors. `:::lua t` is the "progress" of the interpolation. Setting `:::lua t = 0.5` means that the color in the middle of m1 and m2 will be returned.
___
### Reset () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void Reset ( ) {: .copyable aria-label='Functions' }

___
### Set·Colorize () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetColorize ( float Red, float Green, float Blue, float Amount ) {: .copyable aria-label='Functions' }

The colorize function can be used to change the color of sprites. Its the best for that purpose, since it does not affect existing coloranimations like the flashing of creep.

The values can be between 0 and 1 for normal coloration. if you use higher numbers the color gets more vibrant.

???- note "Notes"
    The alpha component determines how much colorization must be applied. The function takes the original color, converts it to grayscale, multiplies it by the RGB components and then blends it back with the original color. The alpha value determines the blending factor.
    Colorization is applied after the tint and before the offset function.

???- example "Example Code"
    - `:::lua SetColorize(1, 1, 1, 1)` will turn the sprite into grayscale.
    - `:::lua SetColorize(1, 0, 0, 1)` will turn it red but not as a red tint but as shades of red.
    - `:::lua SetColorize(1, 1, 1, 2)` will invert the sprite without touching its luminosity.

    This code changes the color of red Creep to be purple
    ```lua
    mod:AddCallback(ModCallbacks.MC_POST_EFFECT_INIT, function(_, effect)
      if effect.Variant == EffectVariant.CREEP_RED then
        local color = Color(1, 1, 1, 1, 0, 0, 0)
        color:SetColorize(4, 0, 4, 1)
        local sprite = effect:GetSprite()
        sprite.Color = color
      end
    end)
    ```

___
### Set·Offset () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetOffset ( float RedOffset, float GreenOffset, float BlueOffset ) {: .copyable aria-label='Functions' }

Offset is a color that gets added to the sprite after the Tint was applied.
___
### Set·Tint () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetTint ( float RedTint, float GreenTint, float BlueTint, float AlphaTint ) {: .copyable aria-label='Functions' }

Tint acts like a color multiplicator.
___
## Variables
### A {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float A  {: .copyable aria-label='Variables' }
Alpha value of the color, where 0 is fully transparent, 1 is fully opaque.
___
### B {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float B  {: .copyable aria-label='Variables' }
Blue value of the color. Number between 0 and 1.
___
### BO {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float BO  {: .copyable aria-label='Variables' }
Blue-Offset value of the color. Number can be positive or negative.

___
### G {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float G  {: .copyable aria-label='Variables' }
Green value of the color. Number between 0 and 1.

___
### GO {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float GO  {: .copyable aria-label='Variables' }
Green-Offset value of the color. Number can be positive or negative.

___
### R {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float R  {: .copyable aria-label='Variables' }
Red value of the color. Number between 0 and 1.

___
### RO {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float RO  {: .copyable aria-label='Variables' }
Red-Offset value of the color. Number can be positive or negative.
