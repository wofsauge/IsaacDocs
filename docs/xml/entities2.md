---
tags:
  - File
---
# File "entities2.xml"

This page needs some content. You can contribute to it using the Edit Button!

old tutorial: [https://www.reddit.com/r/themoddingofisaac/comments/36o00t/entitys_explained_how_to_add_entity_variants/](https://www.reddit.com/r/themoddingofisaac/comments/36o00t/entitys_explained_how_to_add_entity_variants/)

**Resource-Folder**{: .xmlInfo }: Using this file in a resource folder of a mod is not tested yet.

**Content-Folder**{: .xmlInfo }: Using this file in a content folder of a mod is not tested yet.


| Variable-Name | Possible Values | Description |
|:--|:--|:--|
| name | str ||
| id | int | Type of the entity. Max Value: 4095 |
| variant | int | Variant of the entity. The maximum value is 4095. If you leave this blank, then the game will automatically chose the next available number. |
| subtype | int | SubType of the entity. The maximum value is 255. (The reason for this is that the hash map generator of the .stb format expects a specific bit-depth.) |
| anm2path | string | path to the anm2 file, relative to the given anm2root. Example: `001.000_Player.anm2` |
| baseHP | int ||
| boss | int |Entity is a boss. Possible values: ['0', '1'] |
| bossID | int ||
| champion | int |Allow champion variants of this entity. Possible values: ['0', '1'] |
| collisionDamage | float ||
| collisionMass | float ||
| collisionRadius | float | Radius of the collision circle. This value is used for both entity <--> entity and entity <--> grid collisions. This changes the `Entity.Size` field. |
| collisionRadiusXMulti | float | Multiplier for the X direction of the collision circle. This can be used to grant an entity an elliptical hitbox |
| collisionRadiusYMulti | float | Multiplier for the Y direction of the collision circle. This can be used to grant an entity an elliptical hitbox |
| collisionInterval | int | Number of game ticks till the next collision should be evaluated. Default = 1 |
| numGridCollisionPoints | int | Number of points along the edge of the collision circle, which are used to detect collisions with grid entities. |
| friction | float | "Slippyness" of the entity. Default = 1. Lower values make them slide more, similar as they would standing on ice. Higher values make them slide less. A value of 0 makes them unable to move. |
| shadowSize | float ||
| stageHP | int ||
| tags | string | possible values: ['nodelirium', 'spider', 'explosive_soul', 'cansacrifice', 'ghost', 'brimstone_soul', 'homing_soul', 'fly', 'noreroll']<br>See Chapter below for in depth explanations of the tags. |
| gridCollision | string | possible values: ['nopits', 'ground', 'none', 'walls', 'floor'] |
| portrait | int ||
| hasFloorAlts | bool | If set to true, floor specific sprites should be used for this entity if they exist. See the chapter below for more informations |
| reroll | bool ||
| shutdoors | bool ||
| shieldStrength | int ||
| gibAmount | int ||
| gibFlags | string | used Values: ['poop'] |
| bestiaryAnim | string ||
| bestiaryOverlay | string ||

## Tags explanation

| Stage-Name | Suffix |
|:--|:--|
|cansacrifice| Marks familiars on which sacrificial altar can be used on|
|nodelirium| Blacklists a boss from being used by Delirium|
|fly|Indicates enemies which should be neutralized by Skatole (does NOT affect Beelzebub)|
|spider|Indicates enemies which should be neutralized by Bursting Sack|
|ghost|Indicates enemies which Vade Retro can kill at <50% HP as a special interaction|
|noreroll| Immunity from D10 rerolls and the Ace cards|
|brimstone_soul| Friendly Ball wisps created by this enemy will fire Brimstone lasers|
|explosive_soul| Friendly Ball wisps created by this enemy will fire explosive tears|
|homing_soul| Friendly Ball wisps created by this enemy will fire homing tears|


## Floor specific sprites
If an entity has the attribute `hasFloorAlts` set to `true`, the game tries to load the spritesheet of the entity with an additional suffix, based on the current stage. The Suffix of a stage is defined in the `suffix` attribute in the stages.xml file. If no sprite can be found, it will load the default spritesheet.

**Example:**
Original Gaper sprite: monster_017_gaper.png

Downpour Sprite: monster_017_gaper_downpour.png

**Suffix per stage:**

| Stage-Name | Suffix |
|:--|:--|
|Flooded Caves|_downpour|
|Downpour|_downpour|
|Dross|_dross|
|Ashpit|_ashpit|
|Mausoleum|_mausoleum|
|Gehenna|_gehenna|

## `<gibs>` tag
the `<gibs>` tag is used to define the gibs that are spawned when an entity is killed or destroyed.

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
| amount | int | How many gibs should be spawned|
| blood | int | Possible values: [0,1] where 0 is off and 1 is on|
| bone | int |Possible values: [0,1] where 0 is off and 1 is on|
| chain | int |Possible values: [0,1] where 0 is off and 1 is on|
| colorblood | int |Possible values: [0,1] where 0 is off and 1 is on|
| dust | int |Possible values: [0,1] where 0 is off and 1 is on|
| eye | int |Possible values: [0,1] where 0 is off and 1 is on|
| gut | int |Possible values: [0,1] where 0 is off and 1 is on|
| huge | int |Possible values: [0,1] where 0 is off and 1 is on|
| large | int |Possible values: [0,1] where 0 is off and 1 is on|
| poop | int |Possible values: [0,1] where 0 is off and 1 is on|
| rock | int |Possible values: [0,1] where 0 is off and 1 is on|
| rock_small | int |Possible values: [0,1] where 0 is off and 1 is on|
| small | int |Possible values: [0,1] where 0 is off and 1 is on|
| sound_baby | int |Possible values: [0,1] where 0 is off and 1 is on|
| sound_bone | int |Possible values: [0,1] where 0 is off and 1 is on|
| worm | int |Possible values: [0,1] where 0 is off and 1 is on|
