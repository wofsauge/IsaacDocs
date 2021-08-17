# File "entities2.xml"

This page needs some content. You can contribute to it using the Edit Button!

old tutorial: [https://www.reddit.com/r/themoddingofisaac/comments/36o00t/entitys_explained_how_to_add_entity_variants/](https://www.reddit.com/r/themoddingofisaac/comments/36o00t/entitys_explained_how_to_add_entity_variants/)

**Resource-Folder**{: .xmlInfo }: Using this file in a resource folder of a mod is not tested yet.

**Content-Folder**{: .xmlInfo }: Using this file in a content folder of a mod is not tested yet.


| Variable-Name | Possible Values | Description |
|:--|:--|:--|
| name | str ||
| id | int ||
| variant | int ||
| subtype | int ||
| anm2path | string | path to the anm2 file, relative to the given anm2root. Example: `001.000_Player.anm2` |
| baseHP | int ||
| boss | int |Entity is a boss. Possible values: ['0', '1'] |
| bossID | int ||
| champion | int |Allow champion variants of this entity. Possible values: ['0', '1'] |
| collisionDamage | float ||
| collisionMass | float ||
| collisionRadius | float | Radius of the collision circle. This value is used for both entity <--> entity and entity <--> grid collisions |
| collisionRadiusXMulti | float | Multiplier for the X direction of the collision circle. This can be used to grant an entity an elliptical hitbox |
| collisionRadiusYMulti | float | Multiplier for the Y direction of the collision circle. This can be used to grant an entity an elliptical hitbox |
| collisionInterval | int | Number of game ticks to till the next collision should be evaluated. Default = 1 |
| numGridCollisionPoints | int | Number of points along the edge of the collision circle, which are used to detect collisions with grid entities. |
| friction | float | "Slippyness" of the entity. Default = 1. lower values make them slide more, similar as they would stand on ice. Higher values make them slide less |
| shadowSize | int ||
| stageHP | int ||
| tags | string | possible values: ['nodelirium', 'spider', 'explosive_soul', 'cansacrifice', 'ghost', 'brimstone_soul', 'homing_soul', 'fly', 'noreroll'] |
| gridCollision | string | possible values: ['nopits', 'ground', 'none', 'walls', 'floor'] |
| portrait | int ||
| hasFloorAlts | bool | If set to true, floor specific sprites should be used for this entity if they exist. See the section below for more informations |
| reroll | bool ||
| shutdoors | bool ||
| shieldStrength | int ||
| gibAmount | int ||
| gibFlags | string | used Values: ['poop'] |
| bestiaryAnim | string ||
| bestiaryOverlay | string ||

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