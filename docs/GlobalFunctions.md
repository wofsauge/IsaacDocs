# Class "Global Functions"
## Constructors
### Color () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [Color](../Color) Color ( float R, float G, float B, float A, int RO, int GO, int BO ) {: .copyable aria-label='Constructors' }

Constructor for the "[Color](../Color)" class.

When using the [Font](../Font) class, use [KColor()](../KColor) instead. 

Colors are made of three separate components, tint, colorize and offset. Tint acts like a color multiplicator. Offset is a color which is added after the tint is applied. Colorize is complicated. See the `:::lua SetColorize()` function for a detailed description.

R, G, B and A accept numbers between 0 and 1.

RO, GO and BO accept numbers between -255 and 255.
___ 
### Entity·Ptr () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityPtr](../EntityPtr) EntityPtr ( [Entity](../Entity ) ) {: .copyable aria-label='Constructors' }

___ 
### Entity·Ref () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityRef](../EntityRef) EntityRef ( [Entity](../Entity ) ) {: .copyable aria-label='Constructors' }

___ 
### Font () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [Font](../Font) Font ( ) {: .copyable aria-label='Constructors' }

Constructor for the "[Font](../Font)" class.

???- example "Example Code"
    Example usage.
    ```lua 
    local f = Font() -- init font object
    f:Load("font/terminus.fnt") -- load a font into the font object
    f:DrawString("Hello World!",60,50,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y
    
    ```

___ 
### Game () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [Game](../Game) Game ( ) {: .copyable aria-label='Constructors' }

Returns a [Game](../Game) object.

???- example "Example Code"
    Example usage:
    ```lua 
    Game():IsPaused()
    --returns true if the game is paused
    
    ```
___ 
### KColor () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [KColor](../KColor) KColor ( float red, float green, float blue, float alpha ) {: .copyable aria-label='Constructors' }

Constructor for the "[KColor](../KColor)" class.
Notes: "[KColor](../KColor)" is only used in the [Font](../Font) class. For most other situations you will need to use the [Color()](../Color) constructor.
___ 
### Music·Manager () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [MusicManager](../MusicManager) MusicManager ( ) {: .copyable aria-label='Constructors' }

Returns a [MusicManager](../MusicManager) object.

???- example "Example Code"
    Example usage:
    ```lua 
    MusicManager():Disable()
    
    ```
___ 
### Projectile·Params () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [ProjectileParams](../ProjectileParams) ProjectileParams ( ) {: .copyable aria-label='Constructors' }

___ 
### Register·Mod () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [Mod Reference](../ModReference) RegisterMod ( string modName, int apiVersion ) {: .copyable aria-label='Constructors' }

Method to define a mod in the game. This needs to be defined to handle callbacks and save data in your mod.

Returns a table which acts as the [Mod Reference](../ModReference).

???- example "Example Code"
    ```lua 
    local yourMod = RegisterMod("someMod", 1)
    
    ```

___ 
### RNG () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [RNG](../RNG) RNG ( ) {: .copyable aria-label='Constructors' }

___ 
### Sprite () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [Sprite](../Sprite) Sprite ( ) {: .copyable aria-label='Constructors' }

___ 
### SFXManager () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [SFXManager](../SFXManager) SFXManager ( ) {: .copyable aria-label='Constructors' }

Returns a [SFXManager](../SFXManager) object.

???- example "Example Code"
    Example usage:
    ```lua 
    SFXManager():Stop(SoundEffect.SOUND_1UP)
    
    ```
___ 
### Vector () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](../Vector) Vector ( float , float ) {: .copyable aria-label='Constructors' }

___ 
## Functions
### Get·Ptr·Hash () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetPtrHash ( Objectobject ) {: .copyable aria-label='Functions' }
Returns a hash-value of the pointer given as an input value. Valid inputs are any Isaac object, including `:::lua Entity`, `:::lua Room`, `:::lua RNG`, `:::lua Sprite`, `:::lua Game` etc.

It can be used to easily compare two entities, making equality checks very easy.

**Example:**

If you spawn a certain entity, save it in a variable and then compare it to the `:::lua entity` parameter in `:::lua MC_ENTITY_TAKE_DMG`, this comparison will never be true even if both variables refer to the exact same entity in the game. `:::lua GetPtrHash()` turns pointer into a fixed number, which makes comparisons easier.

???- example "Example Code"
    Example on check if two entities saved in different variables are the same.
    ```lua 
    -- don't do it like this
    if entity1 == entity2 then
        -- this will always be false, because two different references on a pointer are not equal
    end
    -- use GetPtrHash() to compare them
    if GetPtrHash(entity1) == GetPtrHash(entity2) then
        -- this will be true, when the pointer of both variables point to the same object.
    end
    
    ```

___ 
### Random () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int Random ( ) {: .copyable aria-label='Functions' }
Returns a random integer. (0 to 2^32) 
___ 
### Random·Vector () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](../Vector) RandomVector ( ) {: .copyable aria-label='Functions' }
Returns a random vector with length 1. Multiply this vector by a number for larger random vectors.
___ 
