# Class "Isaac"
___ 
## void AddCallback (table ref, integer callbackId, table callbackFn, integer entityId )

___ 
## integer AddPillEffectToPool (integer pillEffect)
returns pill color 
___ 
## void ConsoleOutput (string text)

Prints a string into the Debug Console
#### Example Code
You can use this example as an alternative.
```lua
Isaac.ConsoleOutput("This is a Test.")
-- Output: This is a Test.

-- Alternatively:
print("This is a Test.")
-- Output: This is a Test.

```
___ 
## integer CountBosses ()

Returns the number of bosses in the current room.
___ 
## integer CountEnemies ()

Returns the number of enemies in the current room.
___ 
## integer CountEntities (Entity Spawner, integer Type, integer Variant, integer Subtype )

Returns the number of entities in the current room that fulfill the specified requirements.
Spawner refers to an entity object (can be <code>nil</code>) 
Type refers to the found entity's type (Can be <code>EntityType.ENTITY_NULL</code>) 
Variant and Subtype refer to the found entitys Variant and Subtype (Can be <code>-1</code>) 
___ 
## void DebugString (string str)

Prints a string into the log file. You can find this file here <code>C:\Users\Jan\Documents\My Games\Binding of Isaac Afterbirth+\log.txt</code> 
#### Example Code
This code prints "This is a Test." in the log.txt file.
```lua
Isaac.DebugString("This is a Test.")
-- Output: Lua Debug: This is a Test.

```
___ 
## string ExecuteCommand (string command)

This function executes a debug console command. see <a href="tutorial_debug_console.html">[Tutorial] Debug Console</a> for informations on how to use commands.
___ 
## void Explode (Vector pos, Entity source, float damage )

Spawn an explosion on a specified location.
___ 
## table FindByType (integer Type, integer Variant, integer Subtype, boolean Cache, boolean IgnoreFriendly )
Returns entities based on Type, Variant, Subtype. If Variant and/or Subtype is -1 then everything is includedUse Cache flag for multiple calls per frame. 
___ 
## table FindInRadius (Vector Position, float Radius, integer Partitions )
Returns entities in range of Radius from Position filtered by Partitions mask (see <a href="group__enums.html#gaea2d06861d0d38120ea425aa76d2f398">EntityPartition enum</a>) (include all = 0xffffffff) 

This function does not return the entities sorted by nearest first, but based on the order they were loaded.
___ 
## integer GetCardIdByName (string cardHudName)

Returns the CardID based on its hud value. (File: pocketitems.xml)
#### Notes
The name of this function is misleading, this function will only work with the hud value of a card and not the name of a card.
#### Example Code
This code gets the CardID of XVI - The Tower. 
```lua
Isaac.GetCardIdByName("16_TheTower")
    --Returns: 17

```
___ 
## integer GetChallenge ()
Returns the ID of a challenge the player is currently in. Returns 0 if the player is not playing any challenge.
___ 
## integer GetChallengeIdByName (string challengeName)

Returns the ChallengeID of a challenge based on its name. (File: challenges.xml)
#### Example Code
This code gets the ChallengeID of Aprils fool. 
```lua
Isaac.GetChallengeIdByName("Aprils fool")
    --Returns: 32

```
___ 
## integer GetCostumeIdByPath (string path)

Returns the CostumeID of a costume based on its file path. (File: costumes2.xml)
#### Example Code
This code gets the CostumeID of the Poop transformation costume.
```lua
Isaac.GetCostumeIdByPath("gfx/characters/n027_Transformation_Poop.anm2")
    --Returns: 27

```
___ 
## integer GetCurseIdByName (string curseName)

Returns the CurseID of a curse based on its name. (File: curses.xml)
#### Example Code
This code gets the CurseID of Curse of the Unknown.
```lua
Isaac.GetCurseIdByName("Curse of the Unknown")
    --Returns: 4

```
___ 
## integer GetEntityTypeByName (string entityName)

Returns the EntityType of an entity based on its name. (File: entities2.xml)
#### Notes
There is no SubType version of this function.
#### Example Code
This code gets the EntityType of Flaming Gaper. 
```lua
Isaac.GetEntityTypeByName("Flaming Gaper")
    --Returns: 10

```
___ 
## integer GetEntityVariantByName (string entityName)

Returns the variant of an entity based on its name. (File: entities2.xml)
#### Notes
There is no SubType version of this function.
#### Example Code
This code gets the variant of Flaming Gaper. 
```lua
Isaac.GetEntityVariantByName("Flaming Gaper")
    --Returns: 2

```
___ 
## int GetFrameCount ()

Returns the amount of frames the game as a whole is running. The counter increases even when the game is paused or when you are in the main menu!
1 second equals roughtly 60 frames.
This function therefore works drastically different than <a href="class_game.html#aa73e5db19effb746a5e5da21e7d92207"><code>Game():GetFrameCount()</code></a>
___ 
## Vector GetFreeNearPosition (Vector pos, float step )

___ 
## Config GetItemConfig ()
Returns the <a class="el" href="class_item_config_1_1_config.html">ItemConfig::Config</a> object.
___ 
## integer GetItemIdByName (string itemName)

Returns the ItemID of a Collectible. (File: items.xml)
#### Example Code
This code gets the ItemID of Brimstone.
```lua
Isaac.GetItemIdByName("Brimstone")
    --Returns: 118

```
___ 
## integer GetMusicIdByName (string musicName)

Returns the MusicID of a music track. (File: music.xml)
#### Example Code
This code gets the MusicID of the Title Screen.
```lua
Isaac.GetMusicIdByName("Title Screen")
    --Returns: 61

```
___ 
## integer GetPillEffectByName (string pillEffect)

Returns the PillEffectID based on its name. (File: pocketitems.xml)
#### Example Code
This code gets the PillEffectID of I can see forever!.
```lua
Isaac.GetPillEffectByName("I can see forever!")
    --Returns: 23

```
___ 
## EntityPlayer GetPlayer (integer playerId)

Returns the EntityPlayer which the user is controlling. 0 = Main player. Higher numbers refer to coop babies.
#### Example Code
```lua
Isaac.GetPlayer(0)

```
___ 
## integer GetPlayerTypeByName (string playerName)

Returns the PlayerType of a character based on its name. (File: players.xml)
#### Example Code
This code gets the PlayerType of Azazel. 
```lua
Isaac.GetPlayerTypeByName("Azazel")
    --Returns: 7

```
___ 
## Vector GetRandomPosition ()

Returns a random position inside the current room. The Return value is a Vector containing the position in world coordinates.
___ 
## table GetRoomEntities ()
Returns a table containing all entities in the room.
___ 
## integer GetSoundIdByName (string soundName)

Returns the SoundEffectID of a sound based on its name. (File: sounds.xml)
#### Example Code
This code gets the SoundEffectID of a sound named "Custom Sound Effect"
```lua
Isaac.GetSoundIdByName("Custom Sound Effect")

```
___ 
## integer GetTextWidth (string str)

Returns the width of the given string in pixels based on the "terminus8" font (same font as used in Isaac.RenderText())
___ 
## integer GetTime ()

Returns the current game time in milliseconds. This includes pauses!
___ 
## integer GetTrinketIdByName (string trinketName)

Returns the TrinketType of a trinket based on its name. (File: items.xml)
#### Example Code
This code gets the TrinketType of Lucky Toe. 
```lua
Isaac.GetTrinketIdByName("Lucky Toe")
    --Returns: 42

```
___ 
## GridEntity GridSpawn (GridEntity gridEntityType, int Variant, Vector position, boolean forced )

Spawn a <a class="el" href="class_grid_entity.html">GridEntity</a> at the given position (world coordinates).
#### Bugs
forced has no effect and will NOT override the grid entity at the given location. Remove a grid entity at the given location if nessesary before spawning something again.
___ 
## boolean HasModData (table ref)

Returns "true" if your mod has Data stored using the "SaveModData()" function. Aka. if there is a "saveX.dat" file in your mod folder.There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.
___ 
## Vector WorldToScreenDistance (Vector pos)

___ 
## void RegisterMod (table ref, string modName, integer apiVersion )

Method to define a mod in the game. THIS NEEDS TO BE DEFINED IN EVERY MOD!
___ 
## void RemoveCallback (table ref, integer callbackId, table callbackFn )

___ 
## void RemoveModData (table ref)

Deletes the stored "saveX.dat" file if it exists. 
There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.
___ 
## void RenderScaledText (string str, float X, float Y, float ScaleX, float ScaleY, float R, float G, float B, float A )

Renders a scaled text on the Screen. X and Y coordinates need to be in screen coordinates ( x[0,~500) y [0,~350) ). ScaleX, ScaleY, R ,G ,B and A need to be between [0,1]. Some scale values can cause the font to display deformed and pixelated.
___ 
## void RenderText (string str, float X, float Y, float R, float G, float B, float A )

Renders a text with the default size on the Screen. X and Y coordinates need to be in screen coordinates ( x[0,~500) y [0,~350) ). R,G,B and A need to be between [0,1]. 
___ 
## void SaveModData (table ref, string data )

Stores a JSON array/table in a "saveX.dat" file. The stored Data persists thruout resets and game restart, so its perfect to store persistent data.
There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.
___ 
## Vector ScreenToWorld (Vector pos)

Transfers Screen (aka. Window coordinates) into Worldcoordinates. This can be used to get a specific location in the room in World coordnates The World coordinate system is x[0,inf) y[0,inf).
___ 
## Vector ScreenToWorldDistance (Vector pos)

___ 
## Entity Spawn (int entityType, int entityVariant, int entitySubtype, Vector position, Vector velocity, Entity Spawner )

Spawns the defined entity at the given location. If the position is not free, it spawns it in the nearest free position.
There are two spawn functions. <a class="el" href="namespace_isaac.html#aa0ae6af78258bd135855fee38601ba3f">Isaac.Spawn()</a> and <a class="el" href="#a3e89d68066acde06705fa43413d3c0fa">Game():Spawn()</a>. If you need to spawn something with a specific seed, then you use <a class="el" href="#a3e89d68066acde06705fa43413d3c0fa">Game():Spawn()</a>. If you need to spawn something with a randomly generated seed, then use <a class="el" href="namespace_isaac.html#aa0ae6af78258bd135855fee38601ba3f">Isaac.Spawn()</a>. Most of the time, you will probably want to use <a class="el" href="namespace_isaac.html#aa0ae6af78258bd135855fee38601ba3f">Isaac.Spawn()</a>.
___ 
## Vector WorldToRenderPosition (Vector pos)

Transfers world (aka. game coordinates) into Rendercoordinates. This can be used to render things at fixed positions in a room. The Render coordinate system is x[0,inf) y[0,inf). It defines the Position on the rendering-plane in the current room.
___ 
## Vector WorldToScreen (Vector pos)

Transfers world (aka. game coordinates) into Screen (aka. Window) coordinates. This can be used to render things next to an entity. The Screen coordinate system is x[0,inf) y[0,inf). Normally, it goes till ~500x ~300y. The return vector contains integer values or numbers ending with .5
___ 
## Vector WorldToScreenDistance (Vector pos)

___ 
