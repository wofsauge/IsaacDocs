---
tags:
  - File
---
# File "minibosses.xml"

This file is used to store the name of the miniboss in certain miniboss-rooms. The name will be displayed on a "streak"-animation like "Isaac vs. MINIBOSS_NAME"

**Resource-Folder**{: .xmlInfo .green}: Placing this file in your mods "resource" folder will replace the original file.

**Content-Folder**{: .xmlInfo .red}: Placing this file in your mods "content" folder has no effect!


| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|id|int|RoomID where this streak should be triggered. The RoomID should be in increments of 10<br>**Example**: `2020`<br><br>Rooms with IDs not ending with 0 will be fitted to a possible id ending with 0. <br>**Example**: `2023` will be sorted to `2020`.|
|name|string|Name that will be displayed in the streak animation|