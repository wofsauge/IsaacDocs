# Tutorial: Using Additional .lua Files

If you want to load an additional .lua file besides your main.lua file, you can use either the `require` or `include` functions. However, you should use both for full functionality; see the discussion below.

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

`luamod` is a console command that will reload a mod. This is helpful when you are developing a mod and you want to immediately test your changes without having to close and re-open the game.

Unfortunately, require caching causes the `luamod` console command to not work correctly. If code inside of a module is updated, it will not be reflected in game after using the `luamod` command because the reference to the module is already cached.

### The Namespacing Problem With `require`

Because require caching is based on the string passed to the function, this causes a problem for mods that have an overlap in the string. For example, imagine that there are two mods, mod 1 and mod 2. Both mods have a file called "foo.lua" and both mods use a require statement similar to the one in the above example. Mod 1 will work as normal, but when mod 2 loads, its require statement will actually return the "foo.lua" file from mod 1.

### `include`

In order to get around these two problems, Kilburn added an Isaac-specific API function called `include` in Repentance patch v1.06.J818. `include` works in a mostly identical way to `require`, except it will never cache the result, causing the code to execute every time.

Unfortunately, `include` does not work properly for users who have the `--luadebug` launch flag enabled, which is a requirement for many legitimate mods, such as the [Twitch Integration Mod](https://moddingofisaac.com/mod/3608/twitch-integration-for-isaac). Thus, mods should either not use `include`, or use it in combination with `require` as a fallback; see below.

### Directory Namespacing

You can get around the namespacing problem by putting all Lua files in a directory that has the name of your mod in it. It is conventional to use "src_" as a prefix, since source code is typically stored in a directory called "src". For example, the Job mod stores lua files in a directory called "src_job".

In this way, no mods will trample on each other, because the require statement of mod 1 would be:

```lua
local foo = require("src_mod1.foo")
```

And the require statement of mod 2 would be:

```lua
local foo = require("src_mod2.foo")
```

### Using `require` with `include`

In Lua, you can use `pcall` to see if something executes correctly without an error. This is similar to using `try` and `catch` in other programming languages. By using `pcall` with `include`, you can detect a `--luadebug` environment and safely fall back to `require`. For example:

```lua
local success, foo = pcall(include, "src_mod1.foo")
if not success then
  foo = require("src_mod1.foo")
end
```

By using this pattern in combination with directory namespacing, you work around both problems. The only limitation is that developers on your Lua project will not be able to use the `luamod` command if they also have the `--luadebug` flag turned on.

### IsaacScript

Finally, note that the two caching problems discussed above are non-problems if you are writing your mod with TypeScript because the transpiler automatically combines all code into a single "main.lua" file. This is a nice reason to use TypeScript, but of course, there are [many other advantages](https://isaacscript.github.io/docs/features) to using TypeScript other than to simply fix the `require` function, so you might want to consider it for your current or future projects.
