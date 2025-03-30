---
tags:
  - Class
search:
  boost: 0.5
---
# Class "Mod Reference"

???+ info
    You can get this class by using the following functions:

    * [RegisterMod()](GlobalFunctions.md#registermod)

## Functions
### Add·Callback () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void AddCallback ( [ModCallbacks](enums/ModCallbacks.md) callbackId, function callbackFn, int entityId ) {: .copyable aria-label='Functions' }
___
### Add·Priority·Callback () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void AddPriorityCallback ( [ModCallbacks](enums/ModCallbacks.md) callbackId, [CallbackPriority](enums/CallbackPriority.md) priority, function callbackFn, int entityId ) {: .copyable aria-label='Functions' }

Allows modders to specify that a callback function should run earlier or later than normal relative to other functions added to that callback.
___
### Has·Data () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean HasData ( ) {: .copyable aria-label='Functions' }

Returns "true" if your mod has Data stored using the "SaveData()" function. Aka. if there is a "saveX.dat" file in your mod folder. There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.
___
### Load·Data () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### string LoadData ( ) {: .copyable aria-label='Functions' }

Returns a string that was stored in a "saveX.dat" file using the "SaveData()" function. If there is no "saveX.dat" file in your mod, this function will return an empty string.
There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.

???- example "Example Code"
    This code loads a string that was stored in the "saveX.dat" file, if it exists, and converts it into a table using JSON.

    ```lua
    local yourMod = RegisterMod("someMod", 1)
    local json = require("json")
    -- ...
    function yourMod:OnGameStart(isSave)
    	--Loading Moddata--
    	if yourMod:HasData() then
    		local myTable = json.decode(yourMod:LoadData())
    	end
    end
    yourMod:AddCallback(ModCallbacks.MC_POST_GAME_STARTED, yourMod.OnGameStart)

    ```

___
### Remove·Callback () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void RemoveCallback ( int callbackId, function callbackFn ) {: .copyable aria-label='Functions' }

___
### Remove·Data () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void RemoveData ( ) {: .copyable aria-label='Functions' }

Deletes the stored "saveX.dat" file if it exists.
There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.
___
### Save·Data () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SaveData ( string data ) {: .copyable aria-label='Functions' }

- Stores a string in a "saveX.dat" file. The stored data persists between runs and between game launches.
- The filename will be either "save1.dat", "save2.dat", or "save3.dat", depending on which save file slot the user is playing on.
- The file will be located in the "data" directory. For example: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\data\foo\save1.dat`
- Since mods will often have to store more than a single variable, it is recommended to store all persistent variables for your mod in a Lua table, and then convert the table to a JSON string before using this function.

???- example "Example Code"
    This code uses JSON to convert a table into a string, and saves it in the "saveX.dat" file.
    ```lua
    local json = require("json")

    local mod = RegisterMod("myMod", 1)

    local persistentData = {
      foo = 1,
      bar = 2,
    }

    function mod:preGameExit()
      local jsonString = json.encode(persistentData)
      mod:SaveData(jsonString)
    end

    mod:AddCallback(ModCallbacks.MC_PRE_GAME_EXIT, yourMod.preGameExit)
    ```

- Note that for security reasons, the game only allows you to write data to these three files. If you want to write data to arbitrary files, you have to use the `--luadebug` flag, which will enable the Lua standard library.
___
## Variables
### Name {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### string Name  {: .copyable aria-label='Variables' }

___
