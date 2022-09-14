---
tags:
  - Tutorial
---
# [Tutorial] Example Project
----

## An Example Mod

To make a new mod, create a new subdirectory in the following directory:

```
C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\mods
```

(This corresponds to your Steam installation directory. If you have the game installed to a custom location, then the path might be different.)

Name the subdirectory after the name of your mod. For example:

```
C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\mods\customTears
```

Next, create a new `main.lua` file in the newly created folder. This file will contain Lua code, which will tell the game how your mod should respond to in-game events.

The following is an example mod that always changes the player's tears to have a slowing effect and have the Dark Matter visual look:

```lua
-- Register the mod, which grants the ability to add code that correspond to in-game events (i.e. "callbacks").
local mod = RegisterMod("Custom Tears", 1)

local function postFireTear(_, tear)
  -- Add a slowing effect to the tear using the "binary or" operator.
  tear.TearFlags = tear.TearFlags | TearFlags.TEAR_SLOW

  -- Change the appearance of the tear. (The "variant" of the tear is used by the game to decide how to draw it.)
  tear:ChangeVariant(TearVariant.DARK_MATTER)
end

 -- Specify that the "onTear" function should be executed whenever the player fires a tear.
mod:AddCallback(ModCallbacks.MC_POST_FIRE_TEAR, postFireTear)
```

From here, you can change the code to do whatever you want. In short, you will have to subscribe to the appropriate callbacks (in order to run code at the specific times that you want). And then you will have to use the appropriate API methods (to change things in-game corresponding to what you want to do).

Start by browsing the docs for the `ModCallbacks` enum to learn what all the different callback options are. Then, browse through the rest of the API documentation to get a feel for what kinds of things are possible to read and change.
