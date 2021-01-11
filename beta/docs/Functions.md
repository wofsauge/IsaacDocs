# Class "Functions"
## Functions
[ ](#){: .abp .tooltip .badge }
### [Game](../Game) () {: aria-label='Functions' }
#### [Game](../Game) [Game](../Game) ( )  {: aria-label='Functions' }

Returns a <a class="el" href="class_game.html">Game</a> object.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
Example usage:
```cpp 
Game():IsPaused()
--returns true if the game is paused

```
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### [MusicManager](../MusicManager) () {: aria-label='Functions' }
#### [MusicManager](../MusicManager) [MusicManager](../MusicManager) ( )  {: aria-label='Functions' }

Returns a <a class="el" href="class_music_manager.html">MusicManager</a> object.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
Example usage:
```cpp 
MusicManager():Disable()

```
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### Random () {: aria-label='Functions' }
#### int Random ( )  {: aria-label='Functions' }
Returns a random integer. (0 to 2^32) 
___ 
[ ](#){: .abp .tooltip .badge }
### RandomVector () {: aria-label='Functions' }
#### [Vector](../Vector) RandomVector ( )  {: aria-label='Functions' }
Returns a random vector with length 1. Multiply this vector by a number for larger random vectors.
___ 
[ ](#){: .abp .tooltip .badge }
### [SFXManager](../SFXManager) () {: aria-label='Functions' }
#### [SFXManager](../SFXManager) [SFXManager](../SFXManager) ( )  {: aria-label='Functions' }

Returns a <a class="el" href="class_s_f_x_manager.html">SFXManager</a> object.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
Example usage:
```cpp 
SFXManager():Stop(SoundEffect.SOUND_1UP)

```
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### GetPtrHash () {: aria-label='Functions' }
#### int GetPtrHash ( Objectobject)  {: aria-label='Functions' }
Returns a hash-value of the pointer given as an input value. Valid inputs are any Isaac object, including `:::cpp Entity`, `:::cpp Room`, `:::cpp RNG`, `:::cpp Sprite`, `:::cpp Game` etc.
It can be used to easily compare two entities, making equality checks very easy.
**Example:**
If you spawn a certain entity, save it in a variable and then compare it to the `:::cpp entity` parameter in `:::cpp MC_ENTITY_TAKE_DMG`, this comparison will never be true even if both variables refer to the exact same entity in the game. `:::cpp GetPtrHash()` turns pointer into a fixed number, which makes comparisons easier.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
Example on check if two entities saved in different variables are the same.
```cpp 
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
