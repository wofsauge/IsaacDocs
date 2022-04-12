# Mod Config Menu Quickstart Guide

If you want to add config options to your mod then Mod Config Menu has become the de facto standard. It provides a user interface that the player can use in-game.

Currently, there's two versions avalailable on the Steam Workshop. This guide should work with either of them.

 - [Mod Config Menu Pure](https://steamcommunity.com/sharedfiles/filedetails/?id=2681875787)
 - [Mod Config Menu - Continued](https://steamcommunity.com/sharedfiles/filedetails/?id=2487535818)

## ModConfigMenu

The first thing you want to do is check for the existence of `ModConfigMenu`. If it exists then you can proceed.

```lua
if ModConfigMenu then
    -- insert the rest of your ModConfigMenu code here
end
```

## Common Scenarios

In most cases, you'll be providing the player with multiple choice options. This can take the form of a simple on/off or A/B/C type option.

### On/Off

On/off looks like this:

```lua
local settings = {}        -- a table allows you to easily save multiple settings
settings.myBoolean = false -- default value

ModConfigMenu.AddSetting(
    "My Settings Page", -- this should be unique for your mod
    "Tab 1",            -- if you don't want multiple tabs then you can set this to nil
    {
        Type = ModConfigMenu.OptionType.BOOLEAN,
        CurrentSetting = function()
            return settings.myBoolean
        end,
        Display = function()
            return "My Boolean: " .. (settings.myBoolean and "on" or "off")
        end,
        OnChange = function(b)
            settings.myBoolean = b
        end,
        Info = { "Info on 1st line", "More info on 2nd line" } -- this can also be a function if you need more dynamic data
    }
)
```

### A/B/C (multiple choice)

If you need 3 or more options then that looks like this:

```lua
local choices = { "A", "B", "C" }

local settings = {}
settings.myMultipleChoice = 1 -- "A" by default

ModConfigMenu.AddSetting(
    "My Settings Page",
    "Tab 1",
    {
        Type = ModConfigMenu.OptionType.NUMBER,
        CurrentSetting = function()
            return settings.myMultipleChoice
        end,
        Minimum = 1,
        Maximum = #choices,
        Display = function()
            return "My Multiple Choice: " .. choices[settings.myMultipleChoice]
        end,
        OnChange = function(n)
            settings.myMultipleChoice = n -- you can also choose to save the string instead of the number, but that requires more code
        end,
        Info = { "Info on 1st line" } -- text in the info section will automatically word-wrap unlike in the main section above
    }
)
```

### Scroll bar

A scroll bar is a multiple choice option that renders as a scroll bar with 10 bars. The player can choose between 0 and 10 out of 10 for a total of 11 options.

This is commonly used to get a decimal number between 0 and 1. (Hint: divide by 10)

```lua
local settings = {}
settings.myScrollBar = 0

ModConfigMenu.AddSetting(
    "My Settings Page",
    "Tab 1",
    {
        Type = ModConfigMenu.OptionType.SCROLL,
        CurrentSetting = function()
            return settings.myScrollBar
        end,
        Display = function()
            return "$scroll" .. settings.myScrollBar
        end,
        OnChange = function(n)
            settings.myScrollBar = n
        end,
        Info = { "Info on 1st line" }
    }
)
```

## Layout

You can add a title, text, or vertical spacer like this:

```lua
ModConfigMenu.AddTitle("My Settings Page", "Tab 1", "My Title")
ModConfigMenu.AddText("My Settings Page", "Tab 1", "My Text")
ModConfigMenu.AddSpace("My Settings Page", "Tab 1")
```

## Saving and Loading

### Saving

You're responsible for saving your settings, which can be as simple as:

```lua
-- this would generally be declared toward the top of your lua file
local mod = RegisterMod("MyMod", 1)
local json = require("json")

-- this can go in OnChange or you can use the MC_PRE_GAME_EXIT callback depending on the type of save data your mod uses
mod:SaveData(json.encode(settings))
```

### Loading

You're also responsible for loading your saved settings, which can be as simple as:

```lua
-- this can happen as soon as your mod loads or within the MC_POST_GAME_STARTED callback depending on the type of save data your mod uses
if mod:HasData() then
    -- you might want to add some extra checks here to make sure you're loading valid data
    settings = json.decode(mod:LoadData())
end
```

## Further Reading

See the [Mod Reference](ModReference.md) page for related saving and loading documentation.

For more options, check out the Mod Config Menu [README](https://github.com/Zamiell/isaac-mod-config-menu).