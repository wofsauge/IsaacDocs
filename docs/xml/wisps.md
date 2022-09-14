---
tags:
  - File
---
# File "wisps.xml"
This file is used to define the properties of Wisp familiars, spawned by Book of Virtues.

**Resource-Folder**{: .xmlInfo }: Using this file in a resource folder of a mod is not tested yet.

**Content-Folder**{: .xmlInfo }: Using this file in a content folder of a mod is not tested yet.

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

### "wisp" nodes
| Variable-Name | Possible Values | Description |
|:--|:--|:--|
| id | string | ID of the collectible item in the active slot when Book of Virtues got activated |
| canShoot | bool | Set to false if the wisp cant shoot|
| coreColor | string | Name of color used by the core of the wisp |
| coreGfx | string ||
| count | int | number of locusts spawned |
| damage | int | Damage the wisp does |
| damageMultiplier2 | int ||
| fireDelay | int ||
| flameColor | string | Name of color used by the flame of the wisp |
| hp | int ||
| layer | int | Used values: ['-1', '0', '1', '2'] |
| priority | int | Used values: ['-1', '99'] |
| procChance | ['0.075', '0.05', '0.025', '0.1', '0.2', '0.3', '0.15', '0.33'] ||
| shotSpeed | int ||
| tearColor | string | Name of color used by the tear |
| tearColor2 | string | Name of color used by the tear |
| tearFlags | int ||
| tearFlags2 | int ||
| tearScale | int ||
| tearScale2 | string ||
| tearVariant | int ||
