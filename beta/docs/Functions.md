# Class "Functions"
## Functions
### [Game](../Game) () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Game](../Game) [Game](../Game) ( ) {: .copyable aria-label='Functions' }

Returns a <a class="el" href="class_game.html">Game</a> object.

???- example "Example Code"
    Example usage:
    ```lua 
    Game():IsPaused()
    --returns true if the game is paused
    
    ```
 WRONG PARSING 
{: .wrongParsing }
___ 
### [MusicManager](../MusicManager) () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [MusicManager](../MusicManager) [MusicManager](../MusicManager) ( ) {: .copyable aria-label='Functions' }

Returns a <a class="el" href="class_music_manager.html">MusicManager</a> object.

???- example "Example Code"
    Example usage:
    ```lua 
    MusicManager():Disable()
    
    ```
 WRONG PARSING 
{: .wrongParsing }
___ 
### Random () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int Random ( ) {: .copyable aria-label='Functions' }
Returns a random integer. (0 to 2^32) 
___ 
### RandomVector () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) RandomVector ( ) {: .copyable aria-label='Functions' }
Returns a random vector with length 1. Multiply this vector by a number for larger random vectors.
___ 
### [SFXManager](../SFXManager) () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [SFXManager](../SFXManager) [SFXManager](../SFXManager) ( ) {: .copyable aria-label='Functions' }

Returns a <a class="el" href="class_s_f_x_manager.html">SFXManager</a> object.

???- example "Example Code"
    Example usage:
    ```lua 
    SFXManager():Stop(SoundEffect.SOUND_1UP)
    
    ```
 WRONG PARSING 
{: .wrongParsing }
___ 
### GetPtrHash () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
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
