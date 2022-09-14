---
tags:
  - File
---
# File "curses.xml"

Stores the names and ids of the available curses.


**Resource-Folder**{: .xmlInfo .green }: Placing this file inside a mods resources folder will rename curses.

**Content-Folder**{: .xmlInfo .green }: Placing this file in a content folder of a mod will add a new Curse. The new curse must be applied using lua, since it cant be encountered normally!


| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|id|int|Ingame-Id of the Curse. Will be overridden by the game when file is in content folder.|
|name|string|Name of the Curse|