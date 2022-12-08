---
tags:
  - Tutorial
---
# [Tutorial] Use custom callbacks

Repentance update 1.79b added various callback functions, including priority and the capability of creating your own callbacks.

## Basic callbacks

You can use `mod:AddCallback` (or `Isaac.AddCallback`, but it's recommended to use the mod table instead) with any value as the callback ID now, even strings:

```Lua
MOD:AddCallback("TEST", function(_, a, b, c)
    print("test callback triggered", a, b, c)
end)
```

In fact, it's recommended to use strings instead of numbers like the base game does if you're using custom callbacks, to avoid conflicts with other mods.

Just doing this won't do anything though, as nothing in the game or the mod triggers the "test" callback yet. What you can do to trigger it is:

```Lua
Isaac.RunCallback("TEST", 1, 2, 3)
```

This will run all callbacks with the "test" id in order of priority and then in the order they were added.

Notice that you didn't need to "define" the callback anywhere, any mod can add callbacks to your custom id using its value and you can run your custom callback without any previous definitions.

## Returned values

`Isaac.RunCallback` will stop at the first callback that returns a value and return it. For example:

```Lua
MOD:AddCallback("TEST_RETURN", function(_, a, b)
    return a + b
end)
MOD:AddCallback(ModCallbacks.MC_POST_GAME_STARTED, function()
    local ret = Isaac.RunCallback("TEST_RETURN", 1, 2)
    print(ret)
end)
```

This should print "3" in the log on run start.

## Entity types / parameter matching

Like with vanilla callback, you can make your callback only run for certain entity types, variants, or any other condition you need.

```Lua
-- Add custom callback
MOD:AddCallback("TEST_ENTITY", function(_, entity, a, b, c)
    print("test callback triggered", entity.Type, a, b, c)
end)

-- Add custom callback with attached ID
MOD:AddCallback("TEST_ENTITY", function(_, entity, a, b, c)
    print("tears only callback triggered", entity.Variant, a, b, c)
end, EntityType.ENTITY_TEAR)

-- Run custom callback with attached ID

-- this will run all callbacks regardless of attached ID
Isaac.RunCallback("TEST_ENTITY", 1, 2, 3)
-- this won't run the tears only callback
Isaac.RunCallbackWithParam("TEST_ENTITY", EntityType.ENTITY_PLAYER, entity, 1, 2, 3)
-- this will run the tears only callback, and not callbacks with different IDs
Isaac.RunCallbackWithParam("TEST_ENTITY", EntityType.ENTITY_TEAR, entity, 4, 5, 6)
```

Of course, this can be any value, not necessarily entity types. `Isaac.RunCallbackWithParam` checks if each callback's parameter matches its second argument, or is nil.

## Mod compatibility

As before, you don't need to "define" your callback, creating a custom callback just needs `Isaac.RunCallback` to run that at least once and `AddCallback` to be used with it.

This allows for mods that offer an API to other mods to do that in a simple way: the dependent mods don't need to wait for the main mod to be loaded. 
For example, imagine a Minimap mod that wants to allow its dependents to run code after the minimap changes size. Let's call it MinimapLibrary:
The code in MinimapLibrary would be:

```Lua
-- ... callback where the minimap is enlarged
Isaac.RunCallback("MINIMAPLIB_POST_MINIMAP_ENLARGE", nil, currentSize)
```

While the code in any dependent mod (Mod 2, here) would be:

```Lua
MOD2:AddCallback("MINIMAPLIB_POST_MINIMAP_ENLARGE", function(_, currentSize)
    print("Minimap size has changed!", currentSize)
    -- do something using currentSize
end)
```

Mod 2 doesn't need to check if MinimapAPI is even loaded before adding inter-mod functionality: if it's loaded, it will run, otherwise it simply won't. 
No need to wait for the library mod to be loaded, like you'd need to do when calling functions defined by it.

## Run behavior

Normally, `Isaac.RunCallback` breaks on the first return and returns it. If you need some other way of handling the callback running and returning behavior, you need to do it manually via `Isaac.GetCallbacks`.

For example, if you want to continue running the callback, and override its first param with the last runs' return:

```Lua
MOD:AddCallback("TEST_GETCALLBACKS", function(_, arg) 
    return arg + 2
end)
MOD:AddCallback("TEST_GETCALLBACKS", function(_, arg) 
    return arg * 2
end)

local thisArg = 10
local callbacks = Isaac.GetCallbacks("TEST_GETCALLBACKS")
for _, callback in ipairs(callbacks) do
    local ret = callback.Function(callback.Mod, thisArg)
    if ret ~= nil then
        thisArg = ret
    end
end

print(thisArg) -- prints 24
```

`Isaac.GetCallbacks` returns a table already ordered by callback priority and order of adding, so you don't need to worry about order unless you want to change it. Its elements are structured like this:

```
{
    Mod = <mod table>,
    Function = function(mod, callback args),
    Priority = integer (default 0),
    Param = entity id / other param (default -1),
}
```

Passing true as the second argument to Isaac.GetCallbacks assigns an empty table to the callback if it didn't exist yet.

## Advanced parameters

As you can get the callback table via GetCallbacks, you can also assign a metatable to it. In particular, Isaac can use a new function to have a different parameter checking than default (which uses ==).

```Lua
-- Initialize a custom callback with a custom parameter matching function
-- Passing true as the second argument to Isaac.GetCallbacks assigns an empty table to this callback if it didn't exist yet
-- In this example we expect a table as a parameter, but any type can be used
-- If either parameter is nil, we always match
setmetatable(Isaac.GetCallbacks("TEST_PARAMS_2", true), {
    __matchParams = function(a, b)
        return not a or not b or (type(a) == "table" and type(b) == "table" and a[1] == b[1] and a[2] == b[2])
    end
})

-- This callback has no parameter, it will always be called
MOD:AddCallback("TEST_PARAMS_2", function()
    print("hi!")
end)

-- These callbacks have a parameter attached to them, they will only be called if their parameter matches the one provided to Isaac.RunCallbackWithParam
-- The __matchParams metamethod is used to determine whether the parameters match or not
MOD:AddCallback("TEST_PARAMS_2", function()
    print("hello world")
end, {"hello", "world"})

MOD:AddCallback("TEST_PARAMS_2", function()
    print("greetings earth")
end, {"greetings", "earth"})

MOD:AddCallback("TEST_PARAMS_2", function()
    print("howdy globe")
end, {"howdy", "globe"})

-- This should only print "hi!", then "hello world"
Isaac.RunCallbackWithParam("TEST_PARAMS_2", {"hello", "world"})
```

*(Esample source: _Kilburn)*
