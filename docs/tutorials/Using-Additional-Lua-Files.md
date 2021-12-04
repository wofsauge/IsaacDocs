# Tutorial: Using Additional .lua Files

If you want to load an additional .lua file besides your main.lua file, you can use either the `require` or `include` functions. Both have different purposes.

### `require`

`require` is a built-in Lua function. Using `require` is the conventional way in Lua programs to split code up into multiple files. For example:

```lua
-- main.lua
local foo = require("foo")

foo:bar() -- Prints "hello"
```

```lua
-- foo.lua
local foo = {}

function foo:bar()
  print("hello")
end

return foo
```

Here, "foo" is a Lua *module* that provides variables and methods. It's also possible to return functions or primitive values, but conventionally Lua modules always return a table.

One important aspect of `require` is that when it is used, it caches the result. Thus, when a file is required in two different places in the code, it will execute all the code normally on the first require, and then return a reference to the module on the second require. (This default behavior makes sense, because there is no need to execute the same code over and over.)

### `require` With Directories

Unlike other programming languages, it is conventional in Lua to use a period as a path separator. For example, if you wanted to import a file called `bar.lua` in a subdirectory called `foo`, you would use the following `require` statement:

```lua
local bar = require("foo.bar")
```

### The `luamod` Problem With `require`

`luamod` is a console command that will reload a mod. This is helpful when you are developing a mod and you want to immediately test your changes without having to go back to the menu.

Unfortunately, require caching causes the `luamod` console command to not work correctly. If code inside of a module is updated, it will not be reflected in game after using the `luamod` command because the reference to the module is already cached.

### The Namespacing Problem With `require`

Because require caching is based on the string passed to the function, this causes a problem for mods that have an overlap in the string. For example, imagine that there are two mods, mod 1 and mod 2. Both mods have a file called "foo.lua" and both mods use a require statement of `local foo = require("foo")`. Mod 1 will work normally, but when mod 2 loads, its require statement will actually return the "foo.lua" file from mod 1.

### `include`

In order to get around these two problems, Kilburn added an Isaac-specific API function called `include` in Repentance patch v1.06.J818. `include` works in a mostly identical way to `require`, except it will never cache the result, causing the code to execute every time. (It will also never get files from other people's mods, even if the paths are identical.)

### Sharing Variables

`include` is only designed for [pure](https://en.wikipedia.org/wiki/Pure_function) modules that have no [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)). In other words, if you use `include` on a module with module-level state variables, they will be instantiated N times, once for each `include`. Obviously, this is really bad, because internal state between files will become desynchronized.

Thus, if you have module-level state or need to share variables between files, you cannot use `include` and must use `require`.

### Workaround for Require Problems

If you need to use `require` instead of `include`, you can work around the aforementioned problems by temporarily hacking `require` with something along the lines of:

```lua
-- At the beginning of "main.lua"
local function initGlobalVariable()
  if __MY_MOD_REQUIRED_PATHS == nil then
    __MY_MOD_REQUIRED_PATHS = {} -- This must be a global variable
  end
end

local function unloadEverything()
  for k, v in pairs(__MY_MOD_REQUIRED_PATHS) do
    package.loaded[k] = nil
  end
end

local vanillaRequire = require
local function patchedRequire(file)
  __MY_MOD_REQUIRED_PATHS[file] = true
  return vanillaRequire(file)
end

initGlobalVariable()
unloadEverything()
require = patchedRequire

-- Mod code here
-- It is cleanest to put all mod code in a separate file in order to keep the hack code separated, e.g.
-- local myMod = require("myMod")
-- myMod:init()

-- At the end of "main.lua"
require = vanillaRequire
```

### Alternate Workaround for Require Problems

It's also worth noting that the `require` problems discussed above are non-problems if you are writing your mod with TypeScript using the [IsaacScript framework](https://isaacscript.github.io/). This is because the transpiler automatically combines all of your code into a single "main.lua" file. This means that you don't have to bother juggling between using `include` and `require`, worrying about state, or monkey patching the `require` function with a hack.

(Beyond this, there are many other reasons to use TypeScript instead of Lua, so you may want to consider it for your current or future projects.)
