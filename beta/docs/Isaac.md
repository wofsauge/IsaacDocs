# Class "Isaac"
## Functions
[ ](#){: .abp .tooltip .badge }
### AddCallback () {: aria-label='Functions' }
#### void AddCallback ( table ref, int callbackId, table callbackFn, int entityId ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddPillEffectToPool () {: aria-label='Functions' }
#### int AddPillEffectToPool ( int pillEffect ) {: .copyable aria-label='Functions' }
returns pill color 
___ 
[ ](#){: .abp .tooltip .badge }
### ConsoleOutput () {: aria-label='Functions' }
#### void ConsoleOutput ( string text ) {: .copyable aria-label='Functions' }

Prints a string into the Debug Console
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
You can use this example as an alternative.
```cpp 
Isaac.ConsoleOutput("This is a Test.")
-- Output: This is a Test.

-- Alternatively:
print("This is a Test.")
-- Output: This is a Test.

```

___ 
[ ](#){: .abp .tooltip .badge }
### CountBosses () {: aria-label='Functions' }
#### int CountBosses ( ) {: .copyable aria-label='Functions' }

Returns the number of bosses in the current room.
___ 
[ ](#){: .abp .tooltip .badge }
### CountEnemies () {: aria-label='Functions' }
#### int CountEnemies ( ) {: .copyable aria-label='Functions' }

Returns the number of enemies in the current room.
___ 
[ ](#){: .abp .tooltip .badge }
### CountEntities () {: aria-label='Functions' }
#### int CountEntities ( [Entity](../Entity) Spawner, int Type, int Variant, int Subtype ) {: .copyable aria-label='Functions' }

Returns the number of entities in the current room that fulfill the specified requirements.
Spawner refers to an entity object (can be `:::cpp nil`) 
Type refers to the found entity's type (Can be `:::cpp EntityType.ENTITY_NULL`) 
Variant and Subtype refer to the found entitys Variant and Subtype (Can be `:::cpp -1`) 
___ 
[ ](#){: .abp .tooltip .badge }
### DebugString () {: aria-label='Functions' }
#### void DebugString ( string str ) {: .copyable aria-label='Functions' }

Prints a string into the log file. You can find this file here `:::cpp C:\Users\Jan\Documents\My Games\Binding of Isaac Afterbirth+\log.txt` 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code prints `:::cpp "This is a Test."` in the log.txt file.
```cpp 
Isaac.DebugString("This is a Test.")
-- Output: Lua Debug: This is a Test.

```

___ 
[ ](#){: .abp .tooltip .badge }
### ExecuteCommand () {: aria-label='Functions' }
#### string ExecuteCommand ( string command ) {: .copyable aria-label='Functions' }

This function executes a debug console command. see <a href="tutorial_debug_console.html">[Tutorial] Debug Console</a> for informations on how to use commands. WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### Explode () {: aria-label='Functions' }
#### void Explode ( [Vector](../Vector) pos, [Entity](../Entity) source, float damage ) {: .copyable aria-label='Functions' }

Spawn an explosion on a specified location.
___ 
[ ](#){: .abp .tooltip .badge }
### FindByType () {: aria-label='Functions' }
#### table FindByType ( int Type, int Variant, int Subtype, boolean Cache, boolean IgnoreFriendly ) {: .copyable aria-label='Functions' }
Returns entities based on Type, Variant, Subtype. If Variant and/or Subtype is -1 then everything is includedUse Cache flag for multiple calls per frame. 
___ 
[ ](#){: .abp .tooltip .badge }
### FindInRadius () {: aria-label='Functions' }
#### table FindInRadius ( [Vector](../Vector) Position, float Radius, int Partitions ) {: .copyable aria-label='Functions' }
Returns entities in range of Radius from Position filtered by Partitions mask (see <a href="group__enums.html#gaea2d06861d0d38120ea425aa76d2f398">EntityPartition enum</a>) (include all = 0xffffffff) 

This function does not return the entities sorted by nearest first, but based on the order they were loaded. WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### GetCardIdByName () {: aria-label='Functions' }
#### int GetCardIdByName ( string cardHudName ) {: .copyable aria-label='Functions' }

Returns the CardID based on its hud value. (File: pocketitems.xml)
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
The name of this function is misleading, this function will only work with the hud value of a card and not the name of a card.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the CardID of XVI - The Tower. 
```cpp 
Isaac.GetCardIdByName("16_TheTower")
--Returns: 17

```

___ 
[ ](#){: .abp .tooltip .badge }
### GetChallenge () {: aria-label='Functions' }
#### int GetChallenge ( ) {: .copyable aria-label='Functions' }
Returns the ID of a challenge the player is currently in. Returns 0 if the player is not playing any challenge.
___ 
[ ](#){: .abp .tooltip .badge }
### GetChallengeIdByName () {: aria-label='Functions' }
#### int GetChallengeIdByName ( string challengeName ) {: .copyable aria-label='Functions' }

Returns the ChallengeID of a challenge based on its name. (File: challenges.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the ChallengeID of Aprils fool. 
```cpp 
Isaac.GetChallengeIdByName("Aprils fool")
--Returns: 32

```

___ 
[ ](#){: .abp .tooltip .badge }
### GetCostumeIdByPath () {: aria-label='Functions' }
#### int GetCostumeIdByPath ( string path ) {: .copyable aria-label='Functions' }

Returns the CostumeID of a costume based on its file path. (File: costumes2.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the CostumeID of the Poop transformation costume.
```cpp 
Isaac.GetCostumeIdByPath("gfx/characters/n027_Transformation_Poop.anm2")
--Returns: 27

```

___ 
[ ](#){: .abp .tooltip .badge }
### GetCurseIdByName () {: aria-label='Functions' }
#### int GetCurseIdByName ( string curseName ) {: .copyable aria-label='Functions' }

Returns the CurseID of a curse based on its name. (File: curses.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the CurseID of Curse of the Unknown.
```cpp 
Isaac.GetCurseIdByName("Curse of the Unknown")
--Returns: 4

```

___ 
[ ](#){: .abp .tooltip .badge }
### GetEntityTypeByName () {: aria-label='Functions' }
#### int GetEntityTypeByName ( string entityName ) {: .copyable aria-label='Functions' }

Returns the EntityType of an entity based on its name. (File: entities2.xml)
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
There is no SubType version of this function.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the EntityType of Flaming Gaper. 
```cpp 
Isaac.GetEntityTypeByName("Flaming Gaper")
--Returns: 10

```

___ 
[ ](#){: .abp .tooltip .badge }
### GetEntityVariantByName () {: aria-label='Functions' }
#### int GetEntityVariantByName ( string entityName ) {: .copyable aria-label='Functions' }

Returns the variant of an entity based on its name. (File: entities2.xml)
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
There is no SubType version of this function.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the variant of Flaming Gaper. 
```cpp 
Isaac.GetEntityVariantByName("Flaming Gaper")
--Returns: 2

```

___ 
[ ](#){: .abp .tooltip .badge }
### GetFrameCount () {: aria-label='Functions' }
#### int GetFrameCount ( ) {: .copyable aria-label='Functions' }

Returns the amount of frames the game as a whole is running. The counter increases even when the game is paused or when you are in the main menu!
1 second equals roughtly 60 frames.
This function therefore works drastically different than <a href="class_game.html#aa73e5db19effb746a5e5da21e7d92207">`:::cpp Game():GetFrameCount()`</a> WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### GetFreeNearPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetFreeNearPosition ( [Vector](../Vector) pos, float step ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetItemConfig () {: aria-label='Functions' }
#### [Config](../ItemConfig_Config) GetItemConfig ( ) {: .copyable aria-label='Functions' }
Returns the <a class="el" href="class_item_config_1_1_config.html">ItemConfig::Config</a> object. WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### GetItemIdByName () {: aria-label='Functions' }
#### int GetItemIdByName ( string itemName ) {: .copyable aria-label='Functions' }

Returns the ItemID of a Collectible. (File: items.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the ItemID of Brimstone.
```cpp 
Isaac.GetItemIdByName("Brimstone")
--Returns: 118

```

___ 
[ ](#){: .abp .tooltip .badge }
### GetMusicIdByName () {: aria-label='Functions' }
#### int GetMusicIdByName ( string musicName ) {: .copyable aria-label='Functions' }

Returns the MusicID of a music track. (File: music.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the MusicID of the Title Screen.
```cpp 
Isaac.GetMusicIdByName("Title Screen")
--Returns: 61

```

___ 
[ ](#){: .abp .tooltip .badge }
### GetPillEffectByName () {: aria-label='Functions' }
#### int GetPillEffectByName ( string pillEffect ) {: .copyable aria-label='Functions' }

Returns the PillEffectID based on its name. (File: pocketitems.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the PillEffectID of I can see forever!.
```cpp 
Isaac.GetPillEffectByName("I can see forever!")
--Returns: 23

```

___ 
[ ](#){: .abp .tooltip .badge }
### GetPlayer () {: aria-label='Functions' }
#### [EntityPlayer](../EntityPlayer) GetPlayer ( int playerId ) {: .copyable aria-label='Functions' }

Returns the EntityPlayer which the user is controlling. 0 = Main player. Higher numbers refer to coop babies.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
```cpp 
Isaac.GetPlayer(0)

```

___ 
[ ](#){: .abp .tooltip .badge }
### GetPlayerTypeByName () {: aria-label='Functions' }
#### int GetPlayerTypeByName ( string playerName ) {: .copyable aria-label='Functions' }

Returns the PlayerType of a character based on its name. (File: players.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the PlayerType of Azazel. 
```cpp 
Isaac.GetPlayerTypeByName("Azazel")
--Returns: 7

```

___ 
[ ](#){: .abp .tooltip .badge }
### GetRandomPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetRandomPosition ( ) {: .copyable aria-label='Functions' }

Returns a random position inside the current room. The Return value is a Vector containing the position in world coordinates.
___ 
[ ](#){: .abp .tooltip .badge }
### GetRoomEntities () {: aria-label='Functions' }
#### table GetRoomEntities ( ) {: .copyable aria-label='Functions' }
Returns a table containing all entities in the room.
___ 
[ ](#){: .abp .tooltip .badge }
### GetSoundIdByName () {: aria-label='Functions' }
#### int GetSoundIdByName ( string soundName ) {: .copyable aria-label='Functions' }

Returns the SoundEffectID of a sound based on its name. (File: sounds.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the SoundEffectID of a sound named "Custom Sound Effect"
```cpp 
Isaac.GetSoundIdByName("Custom Sound Effect")

```

___ 
[ ](#){: .abp .tooltip .badge }
### GetTextWidth () {: aria-label='Functions' }
#### int GetTextWidth ( string str ) {: .copyable aria-label='Functions' }

Returns the width of the given string in pixels based on the "terminus8" font (same font as used in Isaac.RenderText())
___ 
[ ](#){: .abp .tooltip .badge }
### GetTime () {: aria-label='Functions' }
#### int GetTime ( ) {: .copyable aria-label='Functions' }

Returns the current game time in milliseconds. This includes pauses!
___ 
[ ](#){: .abp .tooltip .badge }
### GetTrinketIdByName () {: aria-label='Functions' }
#### int GetTrinketIdByName ( string trinketName ) {: .copyable aria-label='Functions' }

Returns the TrinketType of a trinket based on its name. (File: items.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the TrinketType of Lucky Toe. 
```cpp 
Isaac.GetTrinketIdByName("Lucky Toe")
--Returns: 42

```

___ 
[ ](#){: .abp .tooltip .badge }
### GridSpawn () {: aria-label='Functions' }
#### [GridEntity](../GridEntity) GridSpawn ( [GridEntity](../GridEntity) gridEntityType, int Variant, [Vector](../Vector) position, boolean forced ) {: .copyable aria-label='Functions' }

Spawn a <a class="el" href="class_grid_entity.html">GridEntity</a> at the given position (world coordinates).
##### :fontawesome-solid-bug: Bugs {: .subHeader .bugs }
forced has no effect and will NOT override the grid entity at the given location. Remove a grid entity at the given location if nessesary before spawning something again. WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### HasModData () {: aria-label='Functions' }
#### boolean HasModData ( table ref ) {: .copyable aria-label='Functions' }

Returns "true" if your mod has Data stored using the "SaveModData()" function. Aka. if there is a "saveX.dat" file in your mod folder.There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.
___ 
[ ](#){: .abp .tooltip .badge }
### LoadModData () {: aria-label='Functions' }
#### string LoadModData ( table ref ) {: .copyable aria-label='Functions' }

Returns a JSON array/table that was stored in a "saveX.dat" file using the "SaveModData()" function. If there is no "saveX.dat" file in your mod, this function will return an empty string.
There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code loads data stored in the "saveX.dat" file, if it exists.
```cpp 
local yourMod = RegisterMod("someMod", 1)
local json = require("json")
-- ...
function yourMod:OnGameStart(isSave)
	--Loading Moddata--
	if yourMod:HasData() then
		local myTable = json.decode(Isaac.LoadModData(yourMod))
	end
end
yourMod:AddCallback(ModCallbacks.MC_POST_GAME_STARTED, yourMod.OnGameStart)

```

___ 
[ ](#){: .abp .tooltip .badge }
### RegisterMod () {: aria-label='Functions' }
#### void RegisterMod ( table ref, string modName, int apiVersion ) {: .copyable aria-label='Functions' }

Method to define a mod in the game. THIS NEEDS TO BE DEFINED IN EVERY MOD!
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
```cpp 
local yourMod = RegisterMod("someMod", 1)

```

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveCallback () {: aria-label='Functions' }
#### void RemoveCallback ( table ref, int callbackId, table callbackFn ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveModData () {: aria-label='Functions' }
#### void RemoveModData ( table ref ) {: .copyable aria-label='Functions' }

Deletes the stored "saveX.dat" file if it exists. 
There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.
___ 
[ ](#){: .abp .tooltip .badge }
### RenderScaledText () {: aria-label='Functions' }
#### void RenderScaledText ( string str, float X, float Y, float ScaleX, float ScaleY, float R, float G, float B, float A ) {: .copyable aria-label='Functions' }

Renders a scaled text on the Screen. X and Y coordinates need to be in screen coordinates ( x[0,~500) y [0,~350) ). ScaleX, ScaleY, R ,G ,B and A need to be between [0,1]. Some scale values can cause the font to display deformed and pixelated.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code renders the player position on the screen.
```cpp 
local player = Isaac.GetPlayer(0)
local pos = player.Position
Isaac.RenderText("X: "..pos.X.." Y: "..pos.Y, 50, 50, 0.5, 0.5, 1 ,1 ,1 ,1 )

```

___ 
[ ](#){: .abp .tooltip .badge }
### RenderText () {: aria-label='Functions' }
#### void RenderText ( string str, float X, float Y, float R, float G, float B, float A ) {: .copyable aria-label='Functions' }

Renders a text with the default size on the Screen. X and Y coordinates need to be in screen coordinates ( x[0,~500) y [0,~350) ). R,G,B and A need to be between [0,1]. 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code renders the player position on the screen.
```cpp 
local player = Isaac.GetPlayer(0)
local pos = player.Position
Isaac.RenderText("X: "..pos.X.." Y: "..pos.Y, 50, 50, 1 ,1 ,1 ,1 )

```

___ 
[ ](#){: .abp .tooltip .badge }
### SaveModData () {: aria-label='Functions' }
#### void SaveModData ( table ref, string data ) {: .copyable aria-label='Functions' }

Stores a JSON array/table in a "saveX.dat" file. The stored Data persists thruout resets and game restart, so its perfect to store persistent data.
There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code saves a table in the "saveX.dat" file.
```cpp 
local yourMod = RegisterMod("someMod", 1)
local json = require("json")
-- ...
--Saving Moddata--
function yourMod:SaveGame()
local table= {1,2,3}
yourMod.SaveData(yourMod, json.encode(table))
end
yourMod:AddCallback(ModCallbacks.MC_PRE_GAME_EXIT, yourMod.SaveGame)

```

___ 
[ ](#){: .abp .tooltip .badge }
### ScreenToWorld () {: aria-label='Functions' }
#### [Vector](../Vector) ScreenToWorld ( [Vector](../Vector) pos ) {: .copyable aria-label='Functions' }

Transfers Screen (aka. Window coordinates) into Worldcoordinates. This can be used to get a specific location in the room in World coordnates The World coordinate system is x[0,inf) y[0,inf).
___ 
[ ](#){: .abp .tooltip .badge }
### ScreenToWorldDistance () {: aria-label='Functions' }
#### [Vector](../Vector) ScreenToWorldDistance ( [Vector](../Vector) pos ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### [Spawn](../RoomConfig_Spawn) () {: aria-label='Functions' }
#### [Entity](../Entity) [Spawn](../RoomConfig_Spawn) ( int entityType, int entityVariant, int entitySubtype, [Vector](../Vector) position, [Vector](../Vector) velocity, [Entity](../Entity) Spawner ) {: .copyable aria-label='Functions' }

Spawns the defined entity at the given location. If the position is not free, it spawns it in the nearest free position.
There are two spawn functions. <a class="el" href="namespace_isaac.html#aa0ae6af78258bd135855fee38601ba3f">Isaac.Spawn()</a> and <a class="el" href="#a3e89d68066acde06705fa43413d3c0fa">Game():Spawn()</a>. If you need to spawn something with a specific seed, then you use <a class="el" href="#a3e89d68066acde06705fa43413d3c0fa">Game():Spawn()</a>. If you need to spawn something with a randomly generated seed, then use <a class="el" href="namespace_isaac.html#aa0ae6af78258bd135855fee38601ba3f">Isaac.Spawn()</a>. Most of the time, you will probably want to use <a class="el" href="namespace_isaac.html#aa0ae6af78258bd135855fee38601ba3f">Isaac.Spawn()</a>.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code spawns a random collectible at in center of the current room.
```cpp 
Isaac.Spawn(EntityType.ENTITY_PICKUP, PickupVariant.PICKUP_COLLECTIBLE, 0, Vector(320,280), Vector(0,0), nil)

```
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### WorldToRenderPosition () {: aria-label='Functions' }
#### [Vector](../Vector) WorldToRenderPosition ( [Vector](../Vector) pos ) {: .copyable aria-label='Functions' }

Transfers world (aka. game coordinates) into Rendercoordinates. This can be used to render things at fixed positions in a room. The Render coordinate system is x[0,inf) y[0,inf). It defines the Position on the rendering-plane in the current room.
___ 
[ ](#){: .abp .tooltip .badge }
### WorldToScreen () {: aria-label='Functions' }
#### [Vector](../Vector) WorldToScreen ( [Vector](../Vector) pos ) {: .copyable aria-label='Functions' }

Transfers world (aka. game coordinates) into Screen (aka. Window) coordinates. This can be used to render things next to an entity. The Screen coordinate system is x[0,inf) y[0,inf). Normally, it goes till ~500x ~300y. The return vector contains integer values or numbers ending with .5
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code render "test" at the position of the player. The text will move with isaac.
```cpp 
local player = Isaac.GetPlayer(0)
local screenpos = Isaac.WorldToScreen(player.Position)	
Isaac.RenderText("test", screenpos.X, screenpos.Y, 1 ,1 ,1 ,1 )

```

___ 
[ ](#){: .abp .tooltip .badge }
### WorldToScreenDistance () {: aria-label='Functions' }
#### [Vector](../Vector) WorldToScreenDistance ( [Vector](../Vector) pos ) {: .copyable aria-label='Functions' }

___ 
