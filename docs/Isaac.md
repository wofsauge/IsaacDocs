# Class "Isaac"
## Functions
### Add·Callback () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddCallback ( table modRef, function callbackId, table callbackFn, int entityId ) {: .copyable aria-label='Functions' }

It is recommended to use the [AddCallback](../rep/ModReference/#addcallback) function on a [Mod Reference](../rep/ModReference) instead.

___ 
### Add·Pill·Effect·To·Pool () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int AddPillEffectToPool ( int pillEffect ) {: .copyable aria-label='Functions' }
returns pill color 
___ 
### Console·Output () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ConsoleOutput ( string text ) {: .copyable aria-label='Functions' }

Prints a string into the Debug Console

???- example "Example Code"
    You can use this example as an alternative.
    ```lua 
    Isaac.ConsoleOutput("This is a Test.")
    -- Output: This is a Test.
    
    -- Alternatively:
    print("This is a Test.")
    -- Output: This is a Test.
    
    ```

___ 
### Count·Bosses () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int CountBosses ( ) {: .copyable aria-label='Functions' }

Returns the number of bosses in the current room.
___ 
### Count·Enemies () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int CountEnemies ( ) {: .copyable aria-label='Functions' }

Returns the number of enemies in the current room.
___ 
### Count·Entities () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int CountEntities ( [Entity](../rep/Entity) Spawner, [EntityType](../rep/enums/EntityType) Type = EntityType.ENTITY_NULL, int Variant = -1, int SubType = -1 ) {: .copyable aria-label='Functions' }

Returns the number of entities in the current room that fulfill the specified requirements.
Spawner refers to an entity object (can be `:::lua nil`) 
Type refers to the found entity's type (Can be `:::lua EntityType.ENTITY_NULL`) 
Variant and Subtype refer to the found entitys Variant and Subtype (Can be `:::lua -1`) 
___ 
### Debug·String () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void DebugString ( string str ) {: .copyable aria-label='Functions' }

Prints a string into the log file. You can find this file here `:::lua C:\Users\Jan\Documents\My Games\Binding of Isaac Afterbirth+\log.txt` 

???- example "Example Code"
    This code prints `:::lua "This is a Test."` in the log.txt file.
    ```lua 
    Isaac.DebugString("This is a Test.")
    -- Output: Lua Debug: This is a Test.
    
    ```

___ 
### Execute·Command () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### string ExecuteCommand ( string command ) {: .copyable aria-label='Functions' }

This function executes a debug console command. see the 
[Debug Console Tutorial](../rep/tutorials/DebugConsole) for informations on how to use commands.
___ 
### Explode () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Explode ( [Vector](../rep/Vector) pos, [Entity](../rep/Entity) source, float damage ) {: .copyable aria-label='Functions' }

Spawn an explosion on a specified location.
___ 
### Find·By·Type () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### table FindByType ( [EntityType](../rep/enums/EntityType) Type, int Variant = -1, int SubType = -1, boolean Cache = false, boolean IgnoreFriendly = false ) {: .copyable aria-label='Functions' }
Returns entities based on Type, Variant, Subtype. If Variant and/or Subtype is -1 then everything is includedUse Cache flag for multiple calls per frame. 
___ 
### Find·In·Radius () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### table FindInRadius ( [Vector](../rep/Vector) Position, float Radius, int Partitions = 0xFFFFFFFF  ) {: .copyable aria-label='Functions' }
Returns entities in range of Radius from Position filtered by Partitions mask (see [EntityPartition enum](../rep/enums/EntityPartition)) (include all = 0xffffffff) 

This function does not return the entities sorted by nearest first, but based on the order they were loaded.
___ 
### Get·Card·Id·By·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetCardIdByName ( string cardHudName ) {: .copyable aria-label='Functions' }

Returns the CardID based on its hud value. (File: pocketitems.xml)

???- note "Notes"
    The name of this function is misleading, this function will only work with the hud value of a card and not the name of a card.

???- example "Example Code"
    This code gets the CardID of XVI - The Tower. 
    ```lua 
    Isaac.GetCardIdByName("16_TheTower")
    --Returns: 17
    
    ```

___ 
### Get·Challenge () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetChallenge ( ) {: .copyable aria-label='Functions' }
Returns the ID of a challenge the player is currently in. Returns 0 if the player is not playing any challenge.
___ 
### Get·Challenge·Id·By·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetChallengeIdByName ( string challengeName ) {: .copyable aria-label='Functions' }

Returns the ChallengeID of a challenge based on its name. (File: challenges.xml)

???- example "Example Code"
    This code gets the ChallengeID of Aprils fool. 
    ```lua 
    Isaac.GetChallengeIdByName("Aprils fool")
    --Returns: 32
    
    ```

___ 
### Get·Costume·Id·By·Path () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetCostumeIdByPath ( string path ) {: .copyable aria-label='Functions' }

Returns the CostumeID of a costume based on its file path. (File: costumes2.xml)

???- example "Example Code"
    This code gets the CostumeID of the Poop transformation costume.
    ```lua 
    Isaac.GetCostumeIdByPath("gfx/characters/n027_Transformation_Poop.anm2")
    --Returns: 27
    
    ```

___ 
### Get·Curse·Id·By·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetCurseIdByName ( string curseName ) {: .copyable aria-label='Functions' }

Returns the CurseID of a curse based on its name. (File: curses.xml)

???- example "Example Code"
    This code gets the CurseID of Curse of the Unknown.
    ```lua 
    Isaac.GetCurseIdByName("Curse of the Unknown")
    --Returns: 4
    
    ```

___ 
### Get·Entity·Type·By·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetEntityTypeByName ( string entityName ) {: .copyable aria-label='Functions' }

Returns the EntityType of an entity based on its name. (File: entities2.xml)

???- note "Notes"
    There is no SubType version of this function.

???- example "Example Code"
    This code gets the EntityType of Flaming Gaper. 
    ```lua 
    Isaac.GetEntityTypeByName("Flaming Gaper")
    --Returns: 10
    
    ```

___ 
### Get·Entity·Variant·By·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetEntityVariantByName ( string entityName ) {: .copyable aria-label='Functions' }

Returns the variant of an entity based on its name. (File: entities2.xml)

???- note "Notes"
    There is no SubType version of this function.

???- example "Example Code"
    This code gets the variant of Flaming Gaper. 
    ```lua 
    Isaac.GetEntityVariantByName("Flaming Gaper")
    --Returns: 2
    
    ```

___ 
### Get·Frame·Count () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetFrameCount ( ) {: .copyable aria-label='Functions' }

Returns the amount of frames the game as a whole is running. The counter increases even when the game is paused or when you are in the main menu!
1 second equals roughtly 60 frames.
This function therefore works drastically different than `:::lua Game():GetFrameCount()`[Link](../rep/Game/#GetFrameCount)
___ 
### Get·Free·Near·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](../rep/Vector) GetFreeNearPosition ( [Vector](../rep/Vector) pos, float step ) {: .copyable aria-label='Functions' }

___ 
### Get·Item·Config () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Config](../rep/ItemConfig) GetItemConfig ( ) {: .copyable aria-label='Functions' }
Returns the [ItemConfig::Config](../rep/ItemConfig) object.
___ 
### Get·Item·Id·By·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetItemIdByName ( string itemName ) {: .copyable aria-label='Functions' }

Returns the ItemID of a Collectible. (File: items.xml)

???- example "Example Code"
    This code gets the ItemID of Brimstone.
    ```lua 
    Isaac.GetItemIdByName("Brimstone")
    --Returns: 118
    
    ```

___ 
### Get·Music·Id·By·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetMusicIdByName ( string musicName ) {: .copyable aria-label='Functions' }

Returns the MusicID of a music track. (File: music.xml)

???- example "Example Code"
    This code gets the MusicID of the Title Screen.
    ```lua 
    Isaac.GetMusicIdByName("Title Screen")
    --Returns: 61
    
    ```

___ 
### Get·Pill·Effect·By·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetPillEffectByName ( string pillEffect ) {: .copyable aria-label='Functions' }

Returns the PillEffectID based on its name. (File: pocketitems.xml)

???- example "Example Code"
    This code gets the PillEffectID of I can see forever!.
    ```lua 
    Isaac.GetPillEffectByName("I can see forever!")
    --Returns: 23
    
    ```

___ 
### Get·Player () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [EntityPlayer](../rep/EntityPlayer) GetPlayer ( int playerId = 0 ) {: .copyable aria-label='Functions' data-altreturn='nil' }

Returns the EntityPlayer which the user is controlling. 0 = Main player. Higher numbers refer to coop players or babies. If an index is given, that is not used, it will return the last player in the list.

This function can return `nil` if the function is called before any player is initialized. 

This function is the same as [`Game():GetPlayer()`](../rep/Game/#getplayer).

???- example "Example Code"
    ```lua 
    Isaac.GetPlayer(0)
    
    ```

___ 
### Get·Player·Type·By·Name () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [PlayerType](../rep/enums/PlayerType) GetPlayerTypeByName ( string playerName , boolean Tainted = false ) {: .copyable aria-label='Functions' }

Returns the PlayerType (ID) of a character based on its name. (File: players.xml)

???- example "Example Code"
    This code gets the PlayerType of Azazel. 
    ```lua 
    Isaac.GetPlayerTypeByName("Azazel")
    --Returns: 7
    
    ```

___ 
### Get·Random·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](../rep/Vector) GetRandomPosition ( ) {: .copyable aria-label='Functions' }

Returns a random position inside the current room. The Return value is a Vector containing the position in world coordinates.
___ 
### Get·Room·Entities () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### table GetRoomEntities ( ) {: .copyable aria-label='Functions' }
Returns a table containing all entities in the room.
___ 
### Get·Sound·Id·By·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetSoundIdByName ( string soundName ) {: .copyable aria-label='Functions' }

Returns the SoundEffectID of a sound based on its name. (File: sounds.xml)

???- example "Example Code"
    This code gets the SoundEffectID of a sound named "Custom Sound Effect"
    ```lua 
    Isaac.GetSoundIdByName("Custom Sound Effect")
    
    ```

___ 
### Get·Text·Width () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetTextWidth ( string str ) {: .copyable aria-label='Functions' }

Returns the width of the given string in pixels based on the "terminus8" font (same font as used in Isaac.RenderText())
___ 
### Get·Time () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetTime ( ) {: .copyable aria-label='Functions' }

Returns the current game time in milliseconds. This includes pauses!
___ 
### Get·Trinket·Id·By·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetTrinketIdByName ( string trinketName ) {: .copyable aria-label='Functions' }

Returns the TrinketType of a trinket based on its name. (File: items.xml)

???- example "Example Code"
    This code gets the TrinketType of Lucky Toe. 
    ```lua 
    Isaac.GetTrinketIdByName("Lucky Toe")
    --Returns: 42
    
    ```

___ 
### Grid·Spawn () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntity](../rep/GridEntity) GridSpawn ( [GridEntity](../rep/GridEntity) gridEntityType, int Variant, [Vector](../rep/Vector) position, boolean forced ) {: .copyable aria-label='Functions' }

Spawn a [GridEntity](../rep/GridEntity) at the given position (world coordinates).

???+ bug "Bugs"
    forced has no effect and will NOT override the grid entity at the given location. Remove a grid entity at the given location if nessesary before spawning something again.
___ 
### Has·Mod·Data () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasModData ( table modRef ) {: .copyable aria-label='Functions' }

Returns "true" if your mod has Data stored using the "SaveModData()" function. Aka. if there is a "saveX.dat" file in your mod folder.

There are 3 "saveX.dat" files, one per Savegame. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.

For AB+, they are stored inside their mod's folder next to the "main.lua" file.

For Repentance, They are stored in the "data" folder next to the "mods" folder inside the game files.

It is recommended to use the [HasData](../rep/ModReference/#hasdata) function on a [Mod Reference](../rep/ModReference) instead.
___ 
### Load·Mod·Data () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### string LoadModData ( table modRef ) {: .copyable aria-label='Functions' }

Returns a string that was stored in a "saveX.dat" file using the "SaveModData()" function. If there is no "saveX.dat" file in your mod, this function will return an empty string.
There are 3 "saveX.dat" files, one per Savegame. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.

For AB+, they are stored inside their mod's folder next to the "main.lua" file.

For Repentance, They are stored in the "data" folder next to the "mods" folder inside the game files.

It is recommended to use the [LoadData](../rep/ModReference/#loaddata) function on a [Mod Reference](../rep/ModReference) instead.
___ 
### Register·Mod () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RegisterMod ( table modRef, string modName, int apiVersion ) {: .copyable aria-label='Functions' }

Registers a table with the game to use as a [Mod Reference](../rep/ModReference).

It is recommended to use the global [RegisterMod](../rep/Functions/#registermod) function instead.

___ 
### Remove·Callback () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveCallback ( table modRef, function callbackId, table callbackFn ) {: .copyable aria-label='Functions' }

It is recommended to use the [RemoveCallback](../rep/ModReference/#removecallback) function on a [Mod Reference](../rep/ModReference) instead.

___ 
### Remove·Mod·Data () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveModData ( table modRef ) {: .copyable aria-label='Functions' }

Deletes the stored "saveX.dat" file if it exists. 
There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.

It is recommended to use the [RemoveData](../rep/ModReference/#removedata) function on a [Mod Reference](../rep/ModReference) instead.
___ 
### Render·Scaled·Text () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RenderScaledText ( string str, float X, float Y, float ScaleX, float ScaleY, float R, float G, float B, float A ) {: .copyable aria-label='Functions' }

Renders a scaled text on the Screen. X and Y coordinates need to be in screen coordinates ( x[0,~500) y [0,~350) ). ScaleX, ScaleY, R ,G ,B and A need to be between [0,1]. Some scale values can cause the font to display deformed and pixelated.

???- example "Example Code"
    This code renders the player position on the screen.
    ```lua 
    local player = Isaac.GetPlayer(0)
    local pos = player.Position
    Isaac.RenderText("X: "..pos.X.." Y: "..pos.Y, 50, 50, 0.5, 0.5, 1 ,1 ,1 ,1 )
    
    ```

___ 
### Render·Text () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RenderText ( string str, float X, float Y, float R, float G, float B, float A ) {: .copyable aria-label='Functions' }

Renders a text with the default size on the Screen. X and Y coordinates need to be in screen coordinates ( x[0,~500) y [0,~350) ). R,G,B and A need to be between [0,1]. 

???- example "Example Code"
    This code renders the player position on the screen.
    ```lua 
    local player = Isaac.GetPlayer(0)
    local pos = player.Position
    Isaac.RenderText("X: "..pos.X.." Y: "..pos.Y, 50, 50, 1 ,1 ,1 ,1 )
    
    ```

___ 
### Save·Mod·Data () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SaveModData ( table modRef, string data ) {: .copyable aria-label='Functions' }

Stores a string in a "saveX.dat" file. The stored Data persists thruout resets and game restart, so its perfect to store persistent data.

There are 3 "saveX.dat" files, one per Savegame. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.

For AB+, they are stored inside their mod's folder next to the "main.lua" file.

For Repentance, They are stored in the "data" folder next to the "mods" folder inside the game files.

It is recommended to use the [SaveData](../rep/ModReference/#savedata) function on a [Mod Reference](../rep/ModReference) instead.
___ 
### Screen·To·World () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](../rep/Vector) ScreenToWorld ( [Vector](../rep/Vector) pos ) {: .copyable aria-label='Functions' }

Transfers Screen (aka. Window coordinates) into Worldcoordinates. This can be used to get a specific location in the room in World coordnates The World coordinate system is x[0,inf) y[0,inf).
___ 
### Screen·To·World·Distance () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](../rep/Vector) ScreenToWorldDistance ( [Vector](../rep/Vector) pos ) {: .copyable aria-label='Functions' }

___ 
### Spawn () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](../rep/Entity) Spawn ( int entityType, int entityVariant, int entitySubtype, [Vector](../rep/Vector) position, [Vector](../rep/Vector) velocity, [Entity](../rep/Entity) Spawner ) {: .copyable aria-label='Functions' }

Spawns the defined entity at the given location. If the position is not free, it spawns it in the nearest free position.
There are two spawn functions. [Isaac.Spawn()](../rep/Isaac/#spawn) and [Game():Spawn()](../rep/Game/#spawn). If you need to spawn something with a specific seed, then you use [Game():Spawn()](../rep/Game/#spawn). If you need to spawn something with a randomly generated seed, then use [Isaac.Spawn()](../rep/Isaac/#spawn). Most of the time, you will probably want to use [Isaac.Spawn()](../rep/Isaac/#spawn).

???- example "Example Code"
    This code spawns a random collectible at in center of the current room.
    ```lua 
    Isaac.Spawn(EntityType.ENTITY_PICKUP, PickupVariant.PICKUP_COLLECTIBLE, 0, Vector(320,280), Vector(0,0), nil)
    
    ```
___ 
### World·To·Render·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](../rep/Vector) WorldToRenderPosition ( [Vector](../rep/Vector) pos ) {: .copyable aria-label='Functions' }

Transfers world (aka. game coordinates) into Rendercoordinates. This can be used to render things at fixed positions in a room. The Render coordinate system is x[0,inf) y[0,inf). It defines the Position on the rendering-plane in the current room.
___ 
### World·To·Screen () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](../rep/Vector) WorldToScreen ( [Vector](../rep/Vector) pos ) {: .copyable aria-label='Functions' }

Transfers world (aka. game coordinates) into Screen (aka. Window) coordinates. This can be used to render things next to an entity. The Screen coordinate system is x[0,inf) y[0,inf). Normally, it goes till ~500x ~300y. The return vector contains integer values or numbers ending with .5

???- example "Example Code"
    This code render "test" at the position of the player. The text will move with isaac.
    ```lua 
    local player = Isaac.GetPlayer(0)
    local screenpos = Isaac.WorldToScreen(player.Position)	
    Isaac.RenderText("test", screenpos.X, screenpos.Y, 1 ,1 ,1 ,1 )
    
    ```

___ 
### World·To·Screen·Distance () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](../rep/Vector) WorldToScreenDistance ( [Vector](../rep/Vector) pos ) {: .copyable aria-label='Functions' }

___ 
