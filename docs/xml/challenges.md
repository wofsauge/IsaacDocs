# File "challenges.xml"

Used to store all challenges and some of their attributes.

**Resource-Folder**{: .xmlInfo .green }: Placing this file in a resource folder of a mod will override the original.

**Content-Folder**{: .xmlInfo .green }: Placing this file in a content folder of a mod will add a new **Custom challenge**.


| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|id|int|Ingame-Id of the Challenge (Not needed for Content Folder)|
|name|string|Name of the Challenge|
|startingitems|string list|Comma separated (nospace) item ids that will be added at the start.|
|startingtrinkets|string list|comma separated (nospace) trinket ids that will be added at the start (max 2)|
|startingpill|string list|startingpill = effect id of the starting pill (-1 for no pill | default))|
|playertype|string|player type id  (0 for Isaac | default). Custom characters cant be defined this way! Use LUA code instead.|
|endstage|string|the last stage of the challenge (use LevelStage internal ids)|
|roomfilter|string list|list of room ids to not be generated in challenge [Not all room ids can be used] (NORMAL - 1, Shop - 2, Error - 3, Treasure - 4, Boss - 5, Miniboss - 6, Secret - 7, SuperSecret - 8, Arcade - 9, Curse - 10, Challenge - 11, Library - 12, Sacrifice - 13, Devil - 14, Angel - 15, Dungeon - 16, Bossrush - 17, Isaacs - 18, Barren - 19, Chest - 20, Dice - 21, BMarket - 22).|
|cursefilter|string|bitmask for curses to be removed (Darkness = 1, Labyrinth = 2, Lost = 4, Unknown = 8, Cursed = 16)|
|getcurse|string|bitmask for curses to be forced (Same id's as curse filter)|
|achievements|string list|list of achievement ids that are required to be able to play the challenge|
|altpath|bool|alternative floor for light/dark path (isaac/satan)|
|canshoot|bool|determines if player can shoot (true | default)|
|redhp|int|Add red hp to the base of the choosen character. 2 = 1 Heart. Negative numbers possible|
|maxhp|int|Add red hp containers to the base of the choosen character. 2 = 1 Heartcontainer. Negative numbers possible|
|soulhp|int|Add soul hp containers to the base of the choosen character. 2 = 1 Heartcontainer|
|blackhp|int|Add black hp containers to the base of the choosen character. 2 = 1 Heartcontainer|
|coins|int|Add starting coins|
|maxdamage|bool|Max. damage actived (clamps at min 100) or deactivated|
|adddamage|float|+ damage up|
|minfirerate|float|minimal fire rate or more|
|minshotspeed|bool|minimal shot speed actived or deactivated|
|bigrange|bool|Enable high starting range value|
|difficulty|bool|game difficulty (0 - normal | default, 1 - hard | 2 - Greed | 3 - Greedier) Greed and greedier mode work, but when killing Ultra Greed, the big Chest spawns, instead of a trophy|
|megasatan|bool|last boss is megasatan. Adds the Key to the player.|