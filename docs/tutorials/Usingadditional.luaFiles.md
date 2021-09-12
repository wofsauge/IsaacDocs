# Tutorial: Using additional .lua Files

If you want to load an additional .lua file besides your main.lua file, you can use the "require" function.

???+ note
    Reloading a mod that uses this method of loading additional files using the command "luamod" will not load the extra files correctly.

#### Content "secondFile.lua":

```lua
x = "Hello world" --define a new global variable x
```

#### Content "main.lua":

```lua
require("secondFile")
print(x)
```

#### This prints:

```lua
"Hello world"
```

## Navigating into folders

You can navigate into folders, by seperating the path with a "."

#### Content "folder1/folder2/secondFile.lua":

```lua
x = "Hello world" --define a new global variable x
```

#### Content "main.lua":

```lua
require("folder1.folder2.secondFile")
print(x)
```

#### This prints:

```lua
"Hello world"
```

## Load extra files with "luamod"-command consistency

If you want to load additional files the most correct way, you have to intentionally cause an error in the extra file and catch it in the main file. The following code is an example for this method:

#### Content "secondFile.lua":

```lua
x = "Hello world" --define a new global variable x
    --end of the file
Err:ForceError() --call a nonexistent function to throw an error intentionally
```

#### Content "main.lua":

```lua
local _, err = pcall(require, "filename")--change filename here
--The following code catches errors and handles them nicely.
err = tostring(err)
if not string.match(err, "attempt to call a nil value %(method 'ForceError'%)") then
    if string.match(err, "true") then
        err = "Error: require passed in config"
    end
    Isaac.DebugString(err)
    print(err)
end
-- end of errorhandling
print(x)
```
#### This prints:
```lua
"Hello world"
```
## Using Sockets and other general lua-modules

The following functions/objects are available from within the lua-api:

|**Always Available**|**Only available with `--luadebug`**|
|--- |--- |
|json (with `require("json")`)|socket (with `require("socket")`)|
|assert|debug|
|collectgarbage|io|
|coroutine|os|
|dofile|package|
|error|require **(not modified*)**|
|getmetatable||
|ipairs||
|load||
|loadfile||
|math||
|next||
|pairs||
|pcall||
|print||
|rawequal||
|rawget||
|rawlen||
|rawset||
|require **(modified*)**||
|select||
|setmetatable||
|string||
|table||
|tonumber||
|tostring||
|type||
|utf8||
|xpcall||


### --luadebug

`--luadebug` is an argument that can be defined as a launchparameter of the game. It enables additional and potential harmful features of the lua interpreter. To enable it, navigate in steam to "Library -> Right click on Isaac -> Preferences -> General -> launchoptions" and then write `--luadebug` inside the textfield.

#### What it does

The flag enables the packages listed on the right side of the table aboth and propably enables the original require function to be called instead of the altered version, which transforms the filepath into a path ending with ".lua".

#### Networking and socket

To enable network and socket features, the `--luadebug` needs to be set. otherwise, the module cant be loaded.

#### Possible problems using --luadebug

In general, `--luadebug` enables all features of the lua language, including extremely harmful features like "os". With that, it is possible to open, write or even delete any file on the system even if it is not related to the game itself.

## The game's "main.lua" file

Inside the "scripts" folder of the game, a unique "main.lua" file can be found which acts independently from the rest of the other mods.

The file will always the loaded and executed even if the modding api is turned off (at least one mod activated). This allows us to execute lua code even in scenarios its normally not possible, like in daily runs.

Nice to know: if you use "ModData" inside this "main.lua" file, the "saveX.dat" files get placed next to this file inside the games resources/scripts folder.