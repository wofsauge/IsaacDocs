---
tags:
  - Tutorial
---
# [Tutorial] Importing Lua Modules from the Standard Library

Lua provides a standard library. However, since Isaac is a sandboxed environment, not everything is available for use:

| **Always Available** | **Only available with `--luadebug`**
| -------------------- | ------------------------------------
| json (with `require("json")`) | socket (with `require("socket")`)
| assert                        | debug
| collectgarbage                | dofile
| coroutine                     | io
| error                         | loadfile
| getmetatable                  | os
| ipairs                        | package
| load                          | require *(unmodified)*
| math
| next
| pairs
| pcall
| print
| rawequal
| rawget
| rawlen
| rawset
| require *("safe" version)*
| select
| setmetatable
| string
| table
| tonumber
| tostring
| type
| utf8
| xpcall

## --luadebug

Normally, mods are restricted from doing anything harmful, like reading files from the file system or communicating over the network. Setting the `--luadebug` launch flag lifts these restrictions, allowing Lua code to use the `require` function to import arbitrary files and to use the "socket.lua" library.

You should never enable --luadebug unless you have a very specific reason and you know what you are doing, as it could lead to your entire computer being compromised.

### Enabling

To enable it, perform the following steps:

- Open Steam.
- Click on the "Library" tab near the top of the screen.
- Right-click on "The Binding of Isaac: Rebirth" and select "Properties".
- Click on the "General" tab on the left.
- At the bottom of the screen, there will be a box to specify "Launch Options".
- Enter `--luadebug` inside the text field.

### Functionality

The flag enables all of the packages and functions on the previous standard library table. Additionally, it causes the game to use an unmodified version of the `require` function that allows importing DLLs any any other arbitrary file.

### Networking

Networking in Lua is accomplished via the `socket` library, which is provided with the game as a convenience and is located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\resources\scripts\socket.lua`

As per the above table, the `--luadebug` launch option must be enabled in order for the socket library to be correctly imported.

## main.lua

The game uses a "main.lua" file that is loaded before any other mods, located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\resources\scripts\main.lua`

Note that this file will always be executed, even if mods are set to be completely disabled. This allows the execution of Lua code even in scenarios it is normally not possible, like in Daily Challenges.
