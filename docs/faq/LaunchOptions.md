---
tags:
  - FAQ
---
# Launch Options

## Setting Launch Options
1. Open Steam.
2. Click on the "Library" tab near the top of the screen.
3. Right-click on "The Binding of Isaac: Rebirth" and select "Properties".
4. Click on the "General" tab on the left.
5. At the bottom of the screen, there will be a box to specify "Launch Options".

## --luadebug
Normally, mods are restricted from doing anything harmful, like reading files from the file system or communicating over the network. Setting the `--luadebug` flag lifts these restrictions, allowing Lua code to use the `require()` function to require arbitrary files and to use the "socket.lua" library.

As the name implies, this should primarily be used by mod developers for debug purposes, not for general use. You should never enable `--luadebug` unless you have a very specific reason and you know what you are doing, as it could lead to your computer being compromised. Mods asking you to enable this without a specific reason (e.g. needing network capability) should probably not be trusted.

## --luaheapsize=
Set size of the lua-heap.

## --networktest
Enables online multiplayer mode.

## --set-stage=
When launching the game, automatically starts a run on the given stage.

## --set-stage-type=
When launching the game, automatically starts a run on the given stage type.

## --load-room=
When launching the game, automatically starts a run in the given room id. Good for debugging rooms.
