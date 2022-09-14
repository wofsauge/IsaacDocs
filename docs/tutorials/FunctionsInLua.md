---
tags:
  - Tutorial
---
# [Tutorial] Functions in Lua
----

First, see the the [example project tutorial](ExampleProject.md).

## Local Functions

The most basic type of function in Lua is a local function. For example, here is a repeat of the code in the example project tutorial:

```lua
local mod = RegisterMod("My Custom Tears", 1)

local function postFireTear(_, tear)
  -- Mod code
end

mod:AddCallback(ModCallbacks.MC_POST_FIRE_TEAR, postFireTear)
```

One potentially strange thing about this code is that we are denoting the first argument of the function as `_`.

Conventionally, unused arguments are prefixed by an underscore, like `_foo`. By naming the argument `_` without any other annotation, it is a flag to the reader that says we are completely ignoring this variable and it has no purpose.

The reason that our local function needs a "blank" first argument in the first place is that the C++ code that handles the callback invokes the provided function with a colon operator. Colon operators are [covered in the Lua manual](https://www.lua.org/pil/16.html). Basically, the colon is syntactic sugar for calling the function with an `self` parameter, which contains the module that the function is located in.

In the case of our local function, there is no module, because it's just a plain, standalone local function. So, the first argument would always be equal to nil in this case.

Let's take a look at what a module-function would look like.

## Module Functions

The object that is returned from the `RegisterMod` function is a Lua table. Since it is a table, we can put arbitrary functions inside of the table:

```lua
local mod = RegisterMod("My Custom Tears", 1)

function mod.postFireTear(_, tear)
  -- Mod code
end

mod:AddCallback(ModCallbacks.MC_POST_FIRE_TEAR, myMod.postFireTear)
```

Here, the "postFireTear" function is now a part of the "myMod" Lua table. We use a period to denote the connection. This code will work in an identical way to the local function.

We can also use the colon operator when declaring the function:

```lua
local mod = RegisterMod("My Custom Tears", 1)

function mod:postFireTear(tear)
  -- Mod code
end

mod:AddCallback(ModCallbacks.MC_POST_FIRE_TEAR, myMod.postFireTear)
```

In this code, the colon operator specifies that the first argument of the function is really `self`, and the second argument is really `tear`, even though it isn't explicitly written that way. Like before, it will work in an identical way to the local function.

Also note that we don't use the colon operator when adding the callback, because we need to pass a reference to the function, not invoke it.

In Lua, functions are often part of modules, so calling them with a colon operator is considered to be standard.

## Anonymous Functions

A third way to specify the callback function would be to use an anonymous function, which is simply a function without a name:

```lua
local mod = RegisterMod("My Custom Tears", 1)

mod:AddCallback(ModCallbacks.MC_POST_FIRE_TEAR, function(_, tear)
  -- Mod code
end)
```

This function only exists inside of the scope of the AddCallback invocation, meaning that it can't be referenced or invoked from anywhere else. Like before, it will work in an identical way to the local function.

Anonymous functions are useful in that they are easy to type. You can use them for really short functions that have an obvious meaning.
