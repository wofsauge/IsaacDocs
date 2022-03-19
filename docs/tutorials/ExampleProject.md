# Tutorial: Example Project
----

## An Example Mod

To make a new mod, create a new subdirectory in the following directory:

```lua
C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\mods
```

(This corresponds to your Steam installation directory. If you have the game installed to a custom location, then the path might be different.)

Name the subdirectory after the name of your mod.

Next, create a new `main.lua` file in the newly created folder. This file will contain Lua code, which will tell the game how your mod should respond to in-game events.

The following is an example mod that always changes the player's tears to have a slowing effect and have the Dark Matter visual look:

```lua
-- Register the mod in the API
local mod = RegisterMod("My Custom Tears", 1)

local function postFireTear(_, tear)
  -- Get the main player, which is an instance of the "EntityPlayer" class
  local player = Isaac.GetPlayer()

  player:AddCoins(1)

  -- Add a slowing effect to the tear
  tear.TearFlags = tear.TearFlags | TearFlags.TEAR_SLOW

  -- Change the appearance of the tear
  tear:ChangeVariant(TearVariant.DARK_MATTER)
end

 -- Specify that the "onTear" function should be executed whenever the player fires a tear
myMod:AddCallback(ModCallbacks.MC_POST_FIRE_TEAR, postFireTear)
```
