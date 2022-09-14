---
tags:
  - File
---
# File "stages.xml"

This file is used to store informations about the Levels / Stages of the game.

**Resource-Folder**{: .xmlInfo .green}: Placing this file in your mods "resource" folder will replace the original file.

**Content-Folder**{: .xmlInfo .red}: Placing this file in your mods "content" folder has no effect!


| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|id|int|Internal identifier of the Stage|
|name|string|Display name of the Stage|
|path|string|Filename of the .stb file found in the "rooms" folder, **BUT written as an .xml file path** (simply replace .stb with .xml in your filename)|
|playerspot|string|Path to the .png file, displayed under the player sprite, that should be used for the Boss-Fight-transition animation|
|bossspot|string|Same is playerspot, but displayed under the boss sprite|