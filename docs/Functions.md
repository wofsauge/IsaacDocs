# Class "Global Functions"
## Constructors
### Game () {: aria-label='Constructors' }
[ ](#){: .abp .tooltip .badge }
#### [Game](../Game) Game ( ) {: .copyable aria-label='Constructors' }

Returns a [Game](../Game) object.

???- example "Example Code"
    Example usage:
    ```lua 
    Game():IsPaused()
    --returns true if the game is paused
    
    ```
___ 
### MusicManager () {: aria-label='Constructors' }
[ ](#){: .abp .tooltip .badge }
#### [MusicManager](../MusicManager) MusicManager ( ) {: .copyable aria-label='Constructors' }

Returns a [MusicManager](../MusicManager) object.

???- example "Example Code"
    Example usage:
    ```lua 
    MusicManager():Disable()
    
    ```
___ 
### Random () {: aria-label='Constructors' }
[ ](#){: .abp .tooltip .badge }
#### int Random ( ) {: .copyable aria-label='Constructors' }
Returns a random integer. (0 to 2^32) 
___ 
### RandomVector () {: aria-label='Constructors' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) RandomVector ( ) {: .copyable aria-label='Constructors' }
Returns a random vector with length 1. Multiply this vector by a number for larger random vectors.
___ 
### SFXManager () {: aria-label='Constructors' }
[ ](#){: .abp .tooltip .badge }
#### [SFXManager](../SFXManager) SFXManager ( ) {: .copyable aria-label='Constructors' }

Returns a [SFXManager](../SFXManager) object.

???- example "Example Code"
    Example usage:
    ```lua 
    SFXManager():Stop(SoundEffect.SOUND_1UP)
    
    ```
___ 
### GetPtrHash () {: aria-label='Constructors' }
[ ](#){: .abp .tooltip .badge }
#### int GetPtrHash ( Objectobject ) {: .copyable aria-label='Constructors' }
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
