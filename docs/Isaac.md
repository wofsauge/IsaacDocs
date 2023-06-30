---
tags:
  - Globals
  - Class
  - Isaac
---
# Class "Isaac"

???+ info
    **When accessing the methods of the Isaac class, you need to use a `.` (period) instead of a `:` (colon)!**

    For example:
    ```lua
    local player = Isaac.GetPlayer()
    ```

## Functions
### Add·Callback () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddCallback ( table modRef, function callbackId, table callbackFn, int entityId ) {: .copyable aria-label='Functions' }

It is recommended to use the [AddCallback](ModReference.md#addcallback) function on a [Mod Reference](ModReference.md) instead.

___
### Add·Pill·Effect·To·Pool () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int AddPillEffectToPool ( int pillEffect ) {: .copyable aria-label='Functions' }
returns pill color

___
### Add·Priority·Callback () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddPriorityCallback ( table modRef, function callbackId, [CallbackPriority](enums/CallbackPriority.md) priority, table callbackFn, int entityId ) {: .copyable aria-label='Functions' }

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
#### int CountEntities ( [Entity](Entity.md) Spawner, [EntityType](enums/EntityType.md) Type = EntityType.ENTITY_NULL, int Variant = -1, int SubType = -1 ) {: .copyable aria-label='Functions' }

Returns the number of entities in the current room that fulfill the specified requirements.
Spawner refers to an entity object (can be `:::lua nil`)
Type refers to the found entity's type (Can be `:::lua EntityType.ENTITY_NULL`)
Variant and Subtype refer to the found entitys Variant and Subtype (Can be `:::lua -1`)

___
### Debug·String () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void DebugString ( string str ) {: .copyable aria-label='Functions' }

Prints a string into the log file. You can find this file here `:::lua %systemdrive%\Users\%username%\Documents\My Games\Binding of Isaac Repentance\log.txt`

???- example "Example Code"
    This code prints `:::lua "This is a Test."` in the log.txt file.
    ```lua
    Isaac.DebugString("This is a Test.")
    -- Output: [INFO] - Lua Debug: This is a Test.

    ```

___
### Execute·Command () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### string ExecuteCommand ( string command ) {: .copyable aria-label='Functions' }

This function executes a debug console command. see the
[Debug Console Tutorial](tutorials/DebugConsole.md) for informations on how to use commands.
___
### Explode () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Explode ( [Vector](Vector.md) pos, [Entity](Entity.md) source, float damage ) {: .copyable aria-label='Functions' }

Spawn an explosion on a specified location.
___
### Find·By·Type () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### table FindByType ( [EntityType](enums/EntityType.md) Type, int Variant = -1, int SubType = -1, boolean Cache = false, boolean IgnoreFriendly = false ) {: .copyable aria-label='Functions' }
Returns entities based on Type, Variant, Subtype. If Variant and/or Subtype is -1 then everything is includedUse Cache flag for multiple calls per frame.
___
### Find·In·Radius () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### table FindInRadius ( [Vector](Vector.md) Position, float Radius, int Partitions = 0xFFFFFFFF  ) {: .copyable aria-label='Functions' }
Returns entities in range of Radius from Position filtered by Partitions mask (see [EntityPartition enum](enums/EntityPartition.md)) (include all = 0xffffffff)

This function does not return the entities sorted by nearest first, but based on the order they were loaded.
___
### Get·Built·In·Callback·State () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean GetBuiltInCallbackState ( function callbackId ) {: .copyable aria-label='Functions' }
___
### Get·Callbacks () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### table GetCallbacks ( function callbackId, boolean createIfMissing ) {: .copyable aria-label='Functions' }
___
### Get·Card·Id·By·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetCardIdByName ( string cardHudName ) {: .copyable aria-label='Functions' }
Returns the [CardID](enums/Card.md) based on the "hud"-attribute defined in the "pocketitems.xml" file. Returns `-1` if no card with that "hud" attribute value could be found.

???+ warning "Warning"
    The name of this function is misleading, this function will only work with the "hud"-attribute value of a card and not the name of a card.

???+ bug "Bug"
    This function does not work for vanilla cards/runes, because they don't have the "hud" attribute defined in their entry in the pocketitems.xml file. You need to use the [Card](enums/Card.md) enum to get those vanilla IDs instead.

???- example "Example Code"
    This code gets the CardID of a modded card.
    ```xml
    <pocketitems>
        <card type="tarot" pickup="1" description="some description"  name="My new card" hud="my_modded_card" />
    </pocketitems>
    ```
    ```lua
    Isaac.GetCardIdByName("my_modded_card")
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

Returns the ChallengeID of a challenge based on its name. (File: challenges.xml) Returns `-1` if no challenge with that name could be found (Case sensitive).

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

Returns the CostumeID of a costume based on its file path. (File: costumes2.xml) Returns `-1` if no costume with that path could be found.

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

Returns the CurseID of a curse based on its name. (File: curses.xml) Returns `-1` if no curse with that name could be found.

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

Returns the EntityType of an entity based on its name. (File: entities2.xml) Returns `0` if no entity with that name could be found.

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

Returns the variant of an entity based on its name. (File: entities2.xml) Returns `-1` if no entity with that name could be found.

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
This function therefore works drastically different than [`:::lua Game():GetFrameCount()`](Game.md#getframecount)

___
### Get·Free·Near·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetFreeNearPosition ( [Vector](Vector.md) pos, float step ) {: .copyable aria-label='Functions' }

___
### Get·Item·Config () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [ItemConfig](ItemConfig.md) GetItemConfig ( ) {: .copyable aria-label='Functions' }

This is the only way to access the `ItemConfig` object.
___
### Get·Item·Id·By·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetItemIdByName ( string itemName ) {: .copyable aria-label='Functions' }

Returns the ItemID of a Collectible. (File: items.xml) Returns `-1` if no item with that name could be found.

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

Returns the MusicID of a music track. (File: music.xml) Returns `-1` if no music with that name could be found.

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

Returns the PillEffectID based on its name. (File: pocketitems.xml) Returns `-1` if no pill with that name could be found.

???- example "Example Code"
    This code gets the PillEffectID of I can see forever!.

    ```lua
    Isaac.GetPillEffectByName("I can see forever!")
    --Returns: 23

    ```

___
### Get·Player () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [EntityPlayer](EntityPlayer.md) GetPlayer ( int playerID = 0 ) {: .copyable aria-label='Functions' data-altreturn='nil' }

Returns the EntityPlayer that matches the provided player ID. Player IDs start at 0 and increment upwards. For example, when playing as Jacob & Esau, Jacob will have a player ID of 0 and Esau will have a player ID of 1.

If an invalid player ID is passed (such as -20 or 20), the function will instead assume a player index of 0.

This function can return `nil` if it is called before any player is initialized (i.e. if you call it in the main menu).

This function is the same as [`Game():GetPlayer()`](Game.md#getplayer).

???- example "Example Code"

    ```lua
    local function getPlayers()
      local game = Game()
      local numPlayers = game:GetNumPlayers()

      local players = {}
      for i = 0, numPlayers - 1 do
        local player = Isaac.GetPlayer(i)
        table.insert(players, player)
      end

      return players
    end
    ```

___
### Get·Player·Type·By·Name () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [PlayerType](enums/PlayerType.md) GetPlayerTypeByName ( string playerName , boolean Tainted = false ) {: .copyable aria-label='Functions' }

Returns the PlayerType (ID) of a character based on its name. (File: players.xml) Returns `-1` if no player with that name could be found.

???- example "Example Code"
    This code gets the PlayerType of Azazel.

    ```lua
    Isaac.GetPlayerTypeByName("Azazel")
    --Returns: 7

    ```

___
### Get·Random·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetRandomPosition ( ) {: .copyable aria-label='Functions' }

Returns a random position inside the current room. The Return value is a Vector containing the position in world coordinates.
___
### Get·Room·Entities () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### table GetRoomEntities ( ) {: .copyable aria-label='Functions' }
Returns an iterable table containing all entities in the room at the time the function was called.

This behavior is different to [`Room::GetEntities()`](Room.md#getentities), which returns a raw pointer to the array that stores all entities of the room at any given time. **For most usecases, its advised to use [`Isaac.GetRoomEntities()`](Isaac.md#getroomentities)**!

???- example "Example Code"
    This code prints the Type, Variant and SubType of each entity in the room.

    ```lua
    for i, entity in ipairs(Isaac.GetRoomEntities()) do
        print(entity.Type, entity.Variant, entity.SubType)
    end

    ```

___
### Get·Screen·Height () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### float GetScreenHeight ( ) {: .copyable aria-label='Functions' }

___
### Get·Screen·Point·Scale () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### float GetScreenPointScale ( ) {: .copyable aria-label='Functions' }

Returns a number denoting how "zoomed in" the screen is. This can be `1.0` or `2.0`, depending on the resolution of the game window.

???- example "Video Demonstration"
    <figure class="video_container">
        <video controls="true" allowfullscreen="true" muted="true" style="width:25rem">
            <source src="../customData/screen-point-scale.mp4" type="video/mp4">
        </video>
        <figcaption>Demonstration of how the size of the game window changes the value this function returns.</figcaption>
    </figure>

___
### Get·Screen·Width () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### float GetScreenWidth ( ) {: .copyable aria-label='Functions' }

___
### Get·Sound·Id·By·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetSoundIdByName ( string soundName ) {: .copyable aria-label='Functions' }

Returns the SoundEffectID of a sound based on its name. (File: sounds.xml) Returns `-1` if no sound with that name could be found.

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

Returns the current time in milliseconds since the computer's operating system was started.

This is useful for measuring how much real time has passed independent of how many frames have passed. (Frames are not a very good indicator of how much time has passed, because the game locks up to load new data on every level transition and room transition.)

For example, you could use this to implement an on-screen speedrunning timer based on real-time, or to benchmark the performance impact of one function over another.

___
### Get·Trinket·Id·By·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetTrinketIdByName ( string trinketName ) {: .copyable aria-label='Functions' }

Returns the TrinketType of a trinket based on its name. (File: items.xml) Returns `-1` if no trinket with that name could be found.

???- example "Example Code"
    This code gets the TrinketType of Lucky Toe.

    ```lua
    Isaac.GetTrinketIdByName("Lucky Toe")
    --Returns: 42
    ```

___
### Grid·Spawn () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntity](GridEntity.md) GridSpawn ( [GridEntityType](enums/GridEntityType.md) gridEntityType, int variant, [Vector](Vector.md) position, boolean forced ) {: .copyable aria-label='Functions' }

Spawn a [GridEntity](GridEntity.md) at the given position (world coordinates).

???+ bug "Bugs"
    The "forced" argument can override the grid entity at the given location in certain cases. For example: it won't work with a rock, but will work with a rock that's been blown up. You can check the location with `Isaac.GetFreeNearPosition` to see if the game considers that location free. Check the returned grid entity's type to make sure the replacement happened. Otherwise, you may need to remove the grid entity at the given location before spawning something else in its place.

For example, to spawn a super secret rock in the center of the room:

```lua
local game = Game()
local room = game:GetRoom()
local centerPos = room:GetCenterPos()
Isaac.GridSpawn(GridEntityType.GRID_ROCK_SS, 0, centerPos, true)
```

___
### Has·Mod·Data () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasModData ( table modRef ) {: .copyable aria-label='Functions' }

Returns "true" if your mod has Data stored using the "SaveModData()" function. Aka. if there is a "saveX.dat" file in your mod folder.

There are 3 "saveX.dat" files, one per Savegame. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.

For AB+, they are stored inside their mod's folder next to the "main.lua" file.

For Repentance, They are stored in the "data" folder next to the "mods" folder inside the game files.

It is recommended to use the [HasData](ModReference.md#hasdata) function on a [Mod Reference](ModReference.md) instead.
___
### Load·Mod·Data () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### string LoadModData ( table modRef ) {: .copyable aria-label='Functions' }

Returns a string that was stored in a "saveX.dat" file using the "SaveModData()" function. If there is no "saveX.dat" file in your mod, this function will return an empty string.
There are 3 "saveX.dat" files, one per Savegame. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.

If you call this function in the main menu, it will return the save data for save slot 1 by default.

For AB+, they are stored inside their mod's folder next to the "main.lua" file.

For Repentance, They are stored in the "data" folder next to the "mods" folder inside the game files.

It is recommended to use the [LoadData](ModReference.md#loaddata) function on a [Mod Reference](ModReference.md) instead.
___
### Register·Mod () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RegisterMod ( table modRef, string modName, int apiVersion ) {: .copyable aria-label='Functions' }

Registers a table with the game to use as a [Mod Reference](ModReference.md).

It is recommended to use the global [RegisterMod](GlobalFunctions.md#registermod) function instead.

___
### Remove·Callback () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveCallback ( table modRef, function callbackId, table callbackFn ) {: .copyable aria-label='Functions' }

It is recommended to use the [RemoveCallback](ModReference.md#removecallback) function on a [Mod Reference](ModReference.md) instead.

___
### Remove·Mod·Data () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveModData ( table modRef ) {: .copyable aria-label='Functions' }

Deletes the stored "saveX.dat" file if it exists.
There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.

It is recommended to use the [RemoveData](ModReference.md#removedata) function on a [Mod Reference](ModReference.md) instead.
___
### Render·Scaled·Text () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RenderScaledText ( string str, float X, float Y, float ScaleX, float ScaleY, float R, float G, float B, float A ) {: .copyable aria-label='Functions' }

Renders a scaled text on the Screen. X and Y coordinates need to be in screen coordinates ( x[0,~500) y [0,~350) ). ScaleX, ScaleY, R ,G ,B and A need to be between [0,1]. Some scale values can cause the font to display deformed and pixelated.

???- example "Example Code"
    This code renders the player position on the screen.

    ```lua
    local player = Isaac.GetPlayer()
    local text = "X: " .. player.Position.X .. ", Y: " .. player.Position.Y
    Isaac.RenderScaledText(text, 50, 50, 0.5, 0.5, 1, 1, 1, 1)
    ```

___
### Render·Text () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RenderText ( string str, float X, float Y, float R, float G, float B, float A ) {: .copyable aria-label='Functions' }

Renders a text with the default size on the Screen. X and Y coordinates need to be in screen coordinates ( x[0,~500) y [0,~350) ). R,G,B and A need to be between [0,1].

???- example "Example Code"
    This code renders the player position on the screen.

    ```lua
    local player = Isaac.GetPlayer()
    local pos = player.Position
    Isaac.RenderText("X: "..pos.X.." Y: "..pos.Y, 50, 50, 1 ,1 ,1 ,1 )

    ```

___
### Run·Callback () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void RunCallback ( function callbackId, table modRef ) {: .copyable aria-label='Functions' }

___
### Run·Callback·With·Param () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void RunCallbackWithParam ( function callbackId, table modRef ) {: .copyable aria-label='Functions' }

___
### Save·Mod·Data () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SaveModData ( table modRef, string data ) {: .copyable aria-label='Functions' }

Stores a string in a "saveX.dat" file. The stored Data persists thruout resets and game restart, so its perfect to store persistent data.

There are 3 "saveX.dat" files, one per Savegame. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.

For AB+, they are stored inside their mod's folder next to the "main.lua" file.

For Repentance, They are stored in the "data" folder next to the "mods" folder inside the game files.

It is recommended to use the [SaveData](ModReference.md#savedata) function on a [Mod Reference](ModReference.md) instead.
___
### Screen·To·World () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) ScreenToWorld ( [Vector](Vector.md) pos ) {: .copyable aria-label='Functions' }

Transfers Screen (aka. Window coordinates) into Worldcoordinates. This can be used to get a specific location in the room in World coordnates The World coordinate system is x[0,inf) y[0,inf).
___
### Screen·To·World·Distance () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) ScreenToWorldDistance ( [Vector](Vector.md) pos ) {: .copyable aria-label='Functions' }
___
### Set·Built·In·Callback·State () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void SetBuiltInCallbackState ( function callbackId, boolean state ) {: .copyable aria-label='Functions' }

___

### Spawn () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.md) Spawn ( int entityType, int entityVariant, int entitySubtype, [Vector](Vector.md) position, [Vector](Vector.md) velocity, [Entity](Entity.md) Spawner ) {: .copyable aria-label='Functions' }

Spawns the defined entity at the given location. If the position is not free, it spawns it in the nearest free position.
There are two spawn functions. [Isaac.Spawn()](Isaac.md#spawn) and [Game():Spawn()](Game.md#spawn). If you need to spawn something with a specific seed, then you use [Game():Spawn()](Game.md#spawn). If you need to spawn something with a randomly generated seed, then use [Isaac.Spawn()](Isaac.md#spawn). Most of the time, you will probably want to use [Isaac.Spawn()](Isaac.md#spawn).

???- example "Example Code"
    This code spawns a random collectible at in center of the current room.
    ```lua
    Isaac.Spawn(EntityType.ENTITY_PICKUP, PickupVariant.PICKUP_COLLECTIBLE, 0, Vector(320,280), Vector(0,0), nil)

    ```
___
### World·To·Render·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) WorldToRenderPosition ( [Vector](Vector.md) pos ) {: .copyable aria-label='Functions' }

Transfers world (aka. game coordinates) into Rendercoordinates. This can be used to render things at fixed positions in a room. The Render coordinate system is x[0,inf) y[0,inf). It defines the Position on the rendering-plane in the current room.

???- example "Example Code"
    This code render "test" at the position of the mouse cursor independend on if the game is in full screen or not.
    ```lua
    local mousePos = Input.GetMousePosition(true)
    local renderpos = Isaac.WorldToRenderPosition(mousePos) * 2
    Isaac.RenderText("test", renderpos.X, renderpos.Y, 1 ,1 ,1 ,1 )
    ```

___
### World·To·Screen () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) WorldToScreen ( [Vector](Vector.md) pos ) {: .copyable aria-label='Functions' }

Transfers world (aka. game coordinates) into Screen (aka. Window) coordinates. This can be used to render things next to an entity. The Screen coordinate system is x[0,inf) y[0,inf). Normally, it goes till ~500x ~300y. The return vector contains integer values or numbers ending with .5

???- example "Example Code"
    This code render "test" at the position of the player. The text will move with isaac.
    ```lua
    local player = Isaac.GetPlayer()
    local screenpos = Isaac.WorldToScreen(player.Position)
    Isaac.RenderText("test", screenpos.X, screenpos.Y, 1 ,1 ,1 ,1 )

    ```

___
### World·To·Screen·Distance () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) WorldToScreenDistance ( [Vector](Vector.md) pos ) {: .copyable aria-label='Functions' }

___
