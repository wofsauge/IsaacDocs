# Tutorial: Example Project
----
## Example project
Example project:
To make a new mod, you have to create a new folder, named as the mod you want to create, in the following directory: 
```lua
C:\Users\[YOURUSERNAME]\Documents\My Games\Binding of Isaac Afterbirth+ Mods
```
Then, you have to create a new `:::cpp main.lua` file in the newly created folder. This file can then be used to contain the logic behind your mod.

### :fontawesome-brands-linux: For Linux {: .subHeader .notes }
Mod tools aren't available in the native version. You need to run the game with Proton, the folder location is going to be inside your Steam folder 
```lua
/Steam/steamapps/compatdata/250900/pfx/drive_c/users/steamuser/Documents/My Games/Binding of Isaac Afterbirth+ Mods
```

### :fontawesome-solid-code: Example "main.lua" {: .subHeader .example_code }
This code creates a mod, that turns tears into dark matter tears (slowing black tears). It also adds one coin to the player every shot.
```lua
local mod = RegisterMod("Dark Matter tears", 1) -- Register the mod in the API (dont change anything here, except the name)

function mod:onTear(tear)
	local player = Isaac.GetPlayer(0) --get the player entity
	player:AddCoins(1) -- add a coin
	tear.TearFlags = tear.TearFlags |TearFlags.TEAR_SLOW  -- add slowing effect to the tear
	tear:ChangeVariant(TearVariant.DARK_MATTER ) -- change appearance of the tear
end

mod:AddCallback(ModCallbacks.MC_POST_FIRE_TEAR , mod.onTear) -- Trigger the function "onTear()", when the "POST_FIRE_TEAR" callback is triggered.
```

### :fontawesome-solid-code: Local function example {: .subHeader .example_code }
```lua
local mod = RegisterMod("Dark Matter tears", 1) -- Register the mod in the API (don't change anything here, except the name)

local function onTear(_, tear)
    local player = Isaac.GetPlayer(0) -- get the player entity
    player:AddCoins(1) -- add a coin
    tear.TearFlags = tear.TearFlags | TearFlags.TEAR_SLOW  -- add slowing effect to the tear
    tear:ChangeVariant(TearVariant.DARK_MATTER) -- change appearance of the tear
end

mod:AddCallback(ModCallbacks.MC_POST_FIRE_TEAR, onTear) -- Trigger the function "onTear()", when the "POST_FIRE_TEAR" callback is triggered.
```
#### Differences to the other method:

Instead of the function being stored inside of the mod variable it is it's own variable local to the level of creation. When creating a local function the first parameter looks for itself and this argument is commonly disregarded by storing it as an underscore. When calling/triggering this function only the function name is necessary, as it is not stored within the mod variable. Local functions are able to be stored within a table just like any other variable, for example:
```lua
local functions = {
    [1] = function(_, tear)

    end,
}
```
where this function would be called via functions[1], and is used in place of onTear in the AddCallback function of the main example
Example code:
### :fontawesome-solid-code: "Inline" definition of functions example {: .subHeader .example_code }
```lua
local mod = RegisterMod("Dark Matter tears", 1) -- Register the mod in the API (don't change anything here, except the name)

mod:AddCallback(ModCallbacks.MC_POST_FIRE_TEAR, function(_, tear)
    local player = Isaac.GetPlayer(0) -- get the player entity
    player:AddCoins(1) -- add a coin
    tear.TearFlags = tear.TearFlags | TearFlags.TEAR_SLOW  -- add slowing effect to the tear
    tear:ChangeVariant(TearVariant.DARK_MATTER) -- change appearance of the tear
end) -- Trigger the function created within the function argument of the AddCallback function, when the "POST_FIRE_TEAR" callback is triggered.
```
#### Differences:

In this example the function being triggered by the callback is defined within the AddCallback function. This method of creation removes the need for storing and referencing your function from a variable, similarly to the local function example the function given will attempt to pass itself has the first argument so it is disregarded with an underscore. Since this function is not stored within your code it is not possible to call it from other places, so this method should only be used if it is to only be triggered by the callback