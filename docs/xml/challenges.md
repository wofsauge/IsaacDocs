---
tags:
  - File
---
# File "challenges.xml"

Used to store all challenges and some of their attributes.

**Resource-Folder**{: .xmlInfo .green }: Placing this file in a resource folder of a mod will override the original.

**Content-Folder**{: .xmlInfo .green }: Placing this file in a content folder of a mod will add a new **Custom challenge**.


| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|id|int|Ingame-Id of the Challenge (Not needed for Content Folder)|
|name|string|Name of the Challenge|
|startingitems|string list|Comma separated (nospace) item ids that will be added at the start.|
|startingitems2|string list|Starting items for Player 2. Comma separated (nospace) item ids that will be added at the start. [ ](#){: .reporplus .tooltip .badge }|
|startingtrinkets|string list|Comma separated (nospace) trinket ids that will be added at the start (max 2)|
|startingcard|string list| [Card id](../enums/Card.md) of the starting cards<br>Default: -1 (no card)|
|startingpill|string list| [PillEffect id](../enums/PillEffect.md) of the starting pill<br>Default: -1 (no pill)|
|playertype|string|Player type id. Custom characters cant be defined this way! Use LUA code instead.<br>Default: 0 (Isaac)|
|endstage|string|The last stage of the challenge (use [LevelStage](../enums/LevelStage.md) internal ids)|
|roomfilter|string list|List of [RoomTypes](../enums/RoomType.md) to not be generated in challenge [Not all room ids can be used]|
|cursefilter|int|Bitmask for [curses](../enums/LevelCurse.md) to be removed.<br>(Darkness = 1, Labyrinth = 2, Lost = 4, Unknown = 8, Cursed = 16, Maze = 32, Blind = 64, Giant = 128)|
|getcurse|int|Bitmask for [curses](../enums/LevelCurse.md) to be forced (Same id's as curse filter)|
|achievements|string list|List of achievement ids that are required to be able to play the challenge|
|altpath|bool|Alternative floor for light/dark path (isaac/satan)|
|canshoot|bool|Determines if player can shoot<br>Default: true (shooting enabled)|
|redhp|int|Add red hp to the base of the choosen character. 2 = 1 Heart. Negative numbers possible|
|maxhp|int|Add red hp containers to the base of the choosen character. 2 = 1 Heartcontainer. Negative numbers possible|
|soulhp|int|Add soul hp containers to the base of the choosen character. 2 = 1 Heartcontainer|
|blackhp|int|Add black hp containers to the base of the choosen character. 2 = 1 Heartcontainer|
|coins|int|Add starting coins|
|maxdamage|bool|Max. damage actived (clamps at min 100) or deactivated|
|adddamage|float|+ Damage up|
|minfirerate|float|Minimal fire rate or more|
|minshotspeed|bool|Minimal shot speed actived or deactivated|
|bigrange|bool|Enable high starting range value|
|difficulty|int|[Game difficulty](../enums/Difficulty.md) [0: normal(default), 1: hard, 2: Greed, 3: Greedier)<br>Greed and greedier mode work, but when killing Ultra Greed, the big Chest spawns, instead of a trophy|
|megasatan|bool|Last boss is megasatan. Adds the Key to the player.|
|secretpath|bool|Force the Repentance alt path [ ](#){: .reporplus .tooltip .badge }|

## Example "challenges.xml" file:

This code creates a new challenge called "My new challenge" in the custom challenges tab, which ends after Mom's heart/it lives. The player starts with Breakfast, Dead Cat and Little Steven, but cant shoot. Treasure rooms and the curse of Darkness are disabled.

```xml
<challenges version="1">
	<challenge playertype="0" name="My new challenge" endstage="8" startingitems="25,81,100" roomfilter="1" cursefilter="1" canshoot="false" />
</challenges>
```
