---
tags:
  - Globals
search:
  boost: 2
---
# Global Functions
## Constructors
### BitSet128 () {: aria-label='Constructors' }
[ ](#){: .reporplus .tooltip .badge }
#### [BitSet128](BitSet128.md) BitSet128 ( int Low = 0, int High = 0 ) {: .copyable aria-label='Constructors' }

Constructor for the "BitSet128" class.

[BitSet128](BitSet128.md) is used as a storage system for flags and other bit-wise evaluated values that exceed the numeric limits of the default 64-bit integers which only allow for up to 64 flags to be defined. [BitSet128](BitSet128.md) allows for up to 128 Flags by spliting the bitset into a "lower" and "higher" part. Those parts are represented by a simple 64bit integer number.
___
### Color () {: aria-label='Constructors' }
[ ](#){: .reporplus .tooltip .badge }
#### [Color](Color.md) Color ( float R, float G, float B, float A = 1, float RO = 0, float GO = 0, float BO = 0 ) {: .copyable aria-label='Constructors' }

Constructor for the "[Color](Color.md)" class.

When using the [Font](Font.md) class, use [KColor()](KColor.md) instead.

Colors are made of three separate components, tint, colorize and offset. Tint acts like a color multiplicator. Offset is a color which is added after the tint is applied. Colorize is complicated. See the `:::lua SetColorize()` function for a detailed description.

R, G, B, A, RO, GO and BO accept numbers between 0 and 1.
___
### Entity·Ptr () {: aria-label='Constructors' }
[ ](#){: .alldlc .tooltip .badge }
#### [EntityPtr](EntityPtr.md) EntityPtr ( [Entity](Entity.md) entity ) {: .copyable aria-label='Constructors' }

___
### Entity·Ref () {: aria-label='Constructors' }
[ ](#){: .alldlc .tooltip .badge }
#### [EntityRef](EntityRef.md) EntityRef ( [Entity](Entity.md) entity ) {: .copyable aria-label='Constructors' }

___
### Font () {: aria-label='Constructors' }
[ ](#){: .alldlc .tooltip .badge }
#### [Font](Font.md) Font ( ) {: .copyable aria-label='Constructors' }

Constructor for the "[Font](Font.md)" class.

???- example "Example Code"
    Example usage.
    ```lua
    local f = Font() -- init font object
    f:Load("font/terminus.fnt") -- load a font into the font object
    f:DrawString("Hello World!",60,50,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y

    ```

___
### Game () {: aria-label='Constructors' }
[ ](#){: .alldlc .tooltip .badge }
#### [Game](Game.md) Game ( ) {: .copyable aria-label='Constructors' }

Returns a [Game](Game.md) object.

???- example "Example Code"
    Example usage:
    ```lua
    Game():IsPaused()
    --returns true if the game is paused

    ```
___
### KColor () {: aria-label='Constructors' }
[ ](#){: .alldlc .tooltip .badge }
#### [KColor](KColor.md) KColor ( float red, float green, float blue, float alpha ) {: .copyable aria-label='Constructors' }

Constructor for the "[KColor](KColor.md)" class.

???+ note "Notes"
	"KColor" is only used in the [Font](Font.md) class. For most other situations you will need to use the [Color()](Color.md) constructor.

___
### Music·Manager () {: aria-label='Constructors' }
[ ](#){: .alldlc .tooltip .badge }
#### [MusicManager](MusicManager.md) MusicManager ( ) {: .copyable aria-label='Constructors' }

Returns a [MusicManager](MusicManager.md) object.

???- example "Example Code"
    Example usage:
    ```lua
    MusicManager():Disable()

    ```
___
### Projectile·Params () {: aria-label='Constructors' }
[ ](#){: .alldlc .tooltip .badge }
#### [ProjectileParams](ProjectileParams.md) ProjectileParams ( ) {: .copyable aria-label='Constructors' }

___
### Register·Mod () {: aria-label='Constructors' }
[ ](#){: .alldlc .tooltip .badge }
#### [Mod Reference](ModReference.md) RegisterMod ( string modName, int apiVersion ) {: .copyable aria-label='Constructors' }

Method to define a mod in the game. This needs to be defined to handle callbacks and save data in your mod.

Returns a table which acts as the [Mod Reference](ModReference.md).

???- example "Example Code"
    ```lua
    local yourMod = RegisterMod("someMod", 1)

    ```

___
### RNG () {: aria-label='Constructors' }
[ ](#){: .alldlc .tooltip .badge }
#### [RNG](RNG.md) RNG ( ) {: .copyable aria-label='Constructors' }

___
### SFXManager () {: aria-label='Constructors' }
[ ](#){: .alldlc .tooltip .badge }
#### [SFXManager](SFXManager.md) SFXManager ( ) {: .copyable aria-label='Constructors' }

Returns a [SFXManager](SFXManager.md) object.

???- example "Example Code"
    Example usage:
    ```lua
    SFXManager():Stop(SoundEffect.SOUND_1UP)

    ```
___
### Sprite () {: aria-label='Constructors' }
[ ](#){: .alldlc .tooltip .badge }
#### [Sprite](Sprite.md) Sprite ( ) {: .copyable aria-label='Constructors' }

___
### Vector () {: aria-label='Constructors' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) Vector ( float x, float y) {: .copyable aria-label='Constructors' }

___
## Functions
### Get·Ptr·Hash () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetPtrHash ( Object object ) {: .copyable aria-label='Functions' }
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
[ ](#){: .alldlc .tooltip .badge }
#### int Random ( ) {: .copyable aria-label='Functions' }
Returns a random integer between 0 and 2^32. It is tested to be inclusive on the lower end and exclusive on the higher end.

Since this function can return 0, you cannot safely use it as the seed for an RNG object, since RNG objects with a seed of 0 crash the game. It is recommended to abstract away this failure case by using a helper function that arbitrarily sets the seed to 1 when the seed is 0.

___
### Random·Vector () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) RandomVector ( ) {: .copyable aria-label='Functions' }
Returns a random vector with length 1. Multiply this vector by a number for larger random vectors.
___
