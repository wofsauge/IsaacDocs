# Class "Mod Reference"
## Functions
### AddCallback () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddCallback ( int callbackId, function callbackFn, int entityId ) {: .copyable aria-label='Functions' }

___ 
### HasData () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasData ( ) {: .copyable aria-label='Functions' }

Returns "true" if your mod has Data stored using the "SaveData()" function. Aka. if there is a "saveX.dat" file in your mod folder. There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.
___ 
### LoadData () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
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
### RemoveCallback () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveCallback ( int callbackId, function callbackFn ) {: .copyable aria-label='Functions' }

___ 
### RemoveData () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveData ( ) {: .copyable aria-label='Functions' }

Deletes the stored "saveX.dat" file if it exists. 
There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.
___ 
### SaveData () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SaveData ( string data ) {: .copyable aria-label='Functions' }

Stores a string in a "saveX.dat" file. The stored Data persists thruout resets and game restart, so its perfect to store persistent data.
There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.

???- example "Example Code"
    This code uses JSON to convert a table into a string, and saves it in the "saveX.dat" file.
    ```lua 
    local yourMod = RegisterMod("someMod", 1)
    local json = require("json")
    -- ...
    --Saving Moddata--
    function yourMod:SaveGame()
    local table= {1,2,3}
    yourMod:SaveData(json.encode(table))
    end
    yourMod:AddCallback(ModCallbacks.MC_PRE_GAME_EXIT, yourMod.SaveGame)
    
    ```
___ 
## Variables
### Name {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### string Name  {: .copyable aria-label='Variables' }

___ 
