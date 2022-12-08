---
tags:
  - Tutorial
---
# [Tutorial] Using Additional .lua Files

If you want to load an additional .lua file besides your main.lua file, you can use either the `require` or `include` functions. Both have different purposes.

### `require`

`require` is a built-in Lua function. Using `require` is the conventional way in Lua programs to split code up into multiple files. For example:

#### `main.lua`

```lua
local foo = require("foo") -- Loads the "foo.lua" file and saves its return value into the variable "foo".

foo:bar() -- Calls the function "bar()" of the foo table.
```

#### `foo.lua`

```lua
local foo = {} -- Creates a table that represents this module and will be returned later.

function foo:bar() -- Defines the function "bar()" and adds it to the "foo" table.
  print("hello")
end

return foo -- Returns the "foo" table so that it can be accessed by anything that imports this file .
```

Here, "foo" is a Lua *module* that provides variables and methods. It's also possible to return functions or primitive values, but conventionally Lua modules always return a table.

One important aspect of `require` is that when it is used, it caches the result. Thus, when a file is required in two different places in the code, it will execute all the code normally on the first require, and then return a reference to the module on the second require. (This default behavior makes sense, because there is no need to execute the same code over and over.)

### `require` With Directories

Unlike other programming languages, it is conventional in Lua to use a period as a path separator. For example, if you wanted to import a file called `bar.lua` in a subdirectory called `foo`, you would use the following `require` statement:

```lua
local bar = require("foo.bar") -- Loads a file from the path: ./foo/bar.lua
```

### The Namespacing Problem With `require`

Unlike import statements in other programming languages, the `require` function does not use relative paths. Instead, it is based on the exact string passed into to the function. (And every mod directory is added to list of directories to look through.)

This causes a problem for mods that have an overlap in the `require` string. For example, imagine that there are two mods, mod 1 and mod 2. Both mods have a file called "foo.lua" and both mods use a require statement of `local foo = require("foo")`. Mod 1 will work normally, but when mod 2 loads, its require statement will actually return the "foo.lua" file from mod 1.

In order to work around this problem, mods have conventionally put all of their Lua files in a directory that matches the name of their mod. For example, mod 1 would make a directory called `mod1` and have an import statement like: `local foo = require("mod1.foo")`

This way, there would never be a conflict as long as there are no other mods called "mod1".

### The `luamod` Problem With `require`

`luamod` is a console command that will reload a mod. This is helpful when you are developing a mod and you want to immediately test your changes without having to go back to the menu.

Unfortunately, require caching causes the `luamod` console command to not work correctly. If code inside of a module is updated, it will not be reflected in game after using the `luamod` command because the reference to the module is already cached.

### `include`

In order to get around the namespacing problem and the `luamod` problem, Kilburn added an Isaac-specific API function called `include` in Repentance patch v1.06.J818. `include` works in a mostly identical way to `require`, except it will never cache the result, causing the code to execute every time. (It will also never get files from other people's mods, even if the paths are identical.)

### Sharing Variables

`include` is only designed for [pure](https://en.wikipedia.org/wiki/Pure_function) modules that have no [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)). In other words, if you use `include` on a module with module-level state variables, they will be instantiated N times, once for each `include`. Obviously, this is really bad, because internal state between files will become desynchronized.

Thus, if you have module-level state or need to share variables between files, you cannot use `include` and must use `require`.

### Workaround for Require Problems

If you need to use `require` instead of `include`, it's recommended to put all of your Lua code inside of a namespaced directory, as mentioned earlier. If you also want to have `luamod` functionality, you can enable the `--luadebug` launch flag and then hack the `require` function with something along the lines of:

```lua
--[[ main.lua ]]--

local MOD_NAME = "MyMod" -- Cannot have spaces, since it represents a path.

-- Players can boot the game with an launch option called "--luadebug", which will enable additional
-- functionality that is considered to be unsafe. For more information about this flag, see the
-- wiki: https://bindingofisaacrebirth.fandom.com/wiki/Launch_Options
--
-- When this flag is enabled, the global environment will be slightly different. The differences are
-- documented here: https://wofsauge.github.io/IsaacDocs/rep/Globals.html
--
-- This function uses the `package` global variable as a proxy to determine if the "--luadebug" flag
-- is enabled or not.
local function isLuaDebugEnabled()
  return package ~= nil
end

-- The require hack uses a global variable to store the paths that are cached for this particular
-- mod. This cannot be a local variable because the state of any local variables is lost when the
-- "luamod" command is executed. Rename the variable to correspond with the name of your mod.
local function initGlobalVariable()
  if __MY_MOD_REQUIRED_PATHS == nil then
    __MY_MOD_REQUIRED_PATHS = {} -- This must be a global variable
  end
end

-- Reference the global variable to reset the caching status for every path used in the mod.
local function unloadEverything()
  for k, v in pairs(__MY_MOD_REQUIRED_PATHS) do
    package.loaded[k] = nil
  end
end

-- Back up the vanilla require function so that we can restore it later.
local vanillaRequire = require

-- Define a custom require function that will keep track of which paths are required.
local function patchedRequire(file)
  __MY_MOD_REQUIRED_PATHS[file] = true
  return vanillaRequire(file)
end

local function init()
  if isLuaDebugEnabled() then
    initGlobalVariable()
    unloadEverything()
    require = patchedRequire
  end

  -- We put all mod-related code in a separate file in order to keep the hack code separated.
  local modInit = require(MOD_NAME .. ".init")
  modInit:init()

  if isLuaDebugEnabled() then
    -- Restore the vanilla functionality.
    require = vanillaRequire
  end
end

init()
```

### Alternate Workaround for Require Problems

It's also worth noting that the `require` problems discussed above are non-problems if you are writing your mod with TypeScript using the [:material-language-typescript:IsaacScript framework](https://isaacscript.github.io/). This is because the transpiler automatically combines all of your code into a single "main.lua" file. This means that you don't have to bother juggling between using `include` and `require`, worrying about state, or monkey patching the `require` function - you can simply write code that works.
