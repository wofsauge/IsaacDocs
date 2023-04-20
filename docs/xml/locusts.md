---
tags:
  - File
---
# File "locusts.xml"
This file is used to define the properties of Locust familiars, spawned by Abyss.

**Resource-Folder**{: .xmlInfo .red}: Using this file in a resource folder of a mod will replace the original file.

**Content-Folder**{: .xmlInfo .green}: Using this file in a content folder of a mod will add new locusts.


### "color" nodes
Used to define color a locust can have.

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
| name | str | Name of the color which will be used to reference it in the "locust" nodes|
| r | int | Red |
| g | int | Green |
| b | int | Blue |
| or | int | Offset Red |
| og | int | Offset Blue |
| ob | int | Offset Green |

### "locust" nodes
Used to define the special properties of the locust created from the item with the given ID.

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
| id | int | Id of the Collectible which Abyss destroyed |
| backColor | string ||
| backGfx | string | special back-side spritesheet the locust should use |
| collisionInterval | int ||
| color | string | Name of color used by this Locust|
| count | int | Number of locusts spawned |
| damageMultiplier | float ||
| gfx | string | special spritesheet the locust should use |
| speed | float ||
| overlayColor | string | Name of color used by the overlay effect |
| overlayGfx | string |special overlay spritesheet the locust should use |
| tearFlags | int | Bitmask of the tearflags  |
| tearFlags2 | int | Bitmask of the tearflags, is tied to procChance |
| procChance | float | The chance of applying tearFlags2 |
| scale | float | Size multiplier of the locust|
