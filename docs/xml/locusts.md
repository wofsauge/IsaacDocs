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

### "scale" nodes
Used to define default scales a locust can have based on item quality.

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
| scale | float | scale corresponding to the quality |
| quality | int | item quality |


### "locust" nodes
Used to define the special properties of the locust created from the item with the given ID.

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
| id | int | Id of the Collectible which Abyss destroyed |
| backColor | string | |
| backGfx | string | special back-side spritesheet the locust should use |
| collisionInterval | int | affects the delay between dealing damage on contact |
| color | string | Name of color used by this locust |
| count | int | Number of locusts spawned |
| damageMultiplier | float | constant damage multiplier |
| damageMultiplier2 | float | chance based to deal increased damage on hit |
| gfx | string | special spritesheet the locust should use |
| locustFlags | string | id of the locust effect to use. Guaranteed to be applied if no `procChance` defined. Can have multiple by seperating two ids with a space. example: "1 15" |
| locustFlags2 | string | id of the locust effect to use. Applied based on `procChance` or `procChance2`. Can have multiple by seperating two ids with a space. example: "1 15"  |
| locustFlags3 | string | id of the locust effect to use. Applied based on `procChance3`. Can have multiple by seperating two ids with a space. example: "1 15"  |
| mutexFlags1 | int | *Bug: crashes the game* |
| mutexFlags2 | int | Handles mutual exclusivity. If set to value `x` , makes flag 2 unable to be triggered if flag `x` is triggered |
| mutexFlags3 | int | *no effect right now* |
| speed | float | the speed multiplier for the locust (default: 1) |
| shootBackGfx | string ||
| shootGfx | string | defines an .anm2 to use when the locust is charging |
| shootOverlayGfx | string ||
| overlayColor | string | Name of color used by the overlay effect |
| overlayGfx | string |special overlay spritesheet the locust should use |
| tearFlags | int | id of the [TearFlag](../enums/TearFlags.md) to use. Guaranteed to be applied if no `procChance` defined |
| tearFlags2 | int |id of the [TearFlag](../enums/TearFlags.md) to use. Applied based on `procChance` or `procChance2` |
| tearFlags3 | int |id of the [TearFlag](../enums/TearFlags.md) to use. Applied based on `procChance3` |
| procChance | float | The chance of applying `tearFlags` and `locustFlags`. (default: 1) |
| procChance2 | float | The chance of applying `tearFlags2` and `locustFlags2` |
| procChance3 | float | The chance of applying `tearFlags3` and `locustFlags3` |
| scale | float | Size multiplier of the locust |


### Effects for locust Flags
| id | effect |
|:--|:--|
| 0 | Spawn explosions when damaging an enemy |
| 1 | Random effect |
| 2 | Multiple locusts act like one(?) - Used for items that produce several locusts |
| 3 | Reroll enemy on hit |
| 4 | Damage all enemies in room when damaging an enemy |
| 5 | Erase an enemy type when damaging an enemy |
| 6 | Knife spining around locust when its attacking |
| 7 | Scream. Damages enemies nearby |
| 8 | Spawn a Maw of the void ring |
| 9 | Gain a projectile repelling aura when charging |
| 10 | Spawn poison fart when damaging an enemy |
| 11 | Spawn a fart when damaging an enemy |
| 12 | Spawn an anti-gravity brimstone when damaging an enemy |
| 13 | Spawn green creep when damaging an enemy |
| 14 | Spawn yellow creep when damaging an enemy |
| 15 | Spawn red creep when damaging an enemy |
| 16 | Spawn blue creep when damaging an enemy |
| 17 | Spawn a pentagram when damaging an enemy |
| 18 | Consumes pickups to gain more damage |
