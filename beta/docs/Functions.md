# Class "Functions"
___ 
## Game Game ()

Returns a <a class="el" href="class_game.html">Game</a> object.
#### Example Code
Example usage:
```lua
Game():IsPaused()
--returns true if the game is paused

```
___ 
## MusicManager MusicManager ()

Returns a <a class="el" href="class_music_manager.html">MusicManager</a> object.
#### Example Code
Example usage:
```lua
MusicManager():Disable()

```
___ 
## integer Random ()
Returns a random integer. (0 to 2^32) 
___ 
## Vector RandomVector ()
Returns a random vector with length 1. Multiply this vector by a number for larger random vectors.
___ 
## SFXManager SFXManager ()

Returns a <a class="el" href="class_s_f_x_manager.html">SFXManager</a> object.
#### Example Code
Example usage:
```lua
SFXManager():Stop(SoundEffect.SOUND_1UP)

```
___ 
## integer GetPtrHash (Objectobject)
Returns a hash-value of the pointer given as an input value. Valid inputs are any Isaac object, including <code>Entity</code>, <code>Room</code>, <code>RNG</code>, <code>Sprite</code>, <code>Game</code> etc.
It can be used to easily compare two entities, making equality checks very easy.
**Example:**
If you spawn a certain entity, save it in a variable and then compare it to the <code>entity</code> parameter in <code>MC_ENTITY_TAKE_DMG</code>, this comparison will never be true even if both variables refer to the exact same entity in the game. <code>GetPtrHash()</code> turns pointer into a fixed number, which makes comparisons easier.
#### Example Code
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
