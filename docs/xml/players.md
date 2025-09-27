---
tags:
  - File
---
# File "players.xml"

This page needs some content. You can contribute to it using the Edit Button!

**Resource-Folder**{: .xmlInfo .red}: Using this file in a resource folder of a mod will replace the original file.

**Content-Folder**{: .xmlInfo .green }: Using this file in a content folder will add new characters.

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|name|string|Name of the character (has to match the one in CharacterMenu.anm2)|
|skin|string|Path of the character spritesheet|
|skinColor|int|Default skin color of the character (-1 = all, 0 = white, 1 = black, 2 = blue, 3 = red, 4 = green, 5 = grey)|
|nameimage|string|Name for vs. screen|
|portrait|string|Portrait for the vs. screen|
|extraportrait|string|.anm2 file that will be displayed on the vs. screen alongside the defined image in the "portrait" attribute|
|hp|int|Starting red health (1 = half heart)|
|armor|int|Starting soul hearts (1 = half soul heart)|
|black|int|Starting  black hearts (1 = half black heart)|
|items|int|Starting item ID (can separate with a comma to add more than one)|
|trinket|int|Starting trinket ID|
|costume|int||
|costumeSuffix|string|Equal to the suffix of a directory to use for character-specific costumes. For example, The Forgotten's costumeSuffix is `_forgotten`, which means that his corresponding directory is located at `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\resources-dlc3\gfx\characters\costumes_forgotten`.|
|bombs|int|Starting bombs|
|keys|coins|Starting keys|
|coins|int|Starting coins|
|card|int|Starting card ID|
|pill|int||
|canShoot|bool|False = blindfolded|
|achievement|int|Tie the character to a vanilla achievement|
|broken|int|Starting broken hearts [ ](#){: .reporplus .tooltip .badge }|
|pocketActive|int|Starting pocket active item ID [ ](#){: .reporplus .tooltip .badge }|
|birthright|string|Message when picking up Birthright [ ](#){: .reporplus .tooltip .badge }|
|bSkinParent|string|Name of the normal version of your tainted character [ ](#){: .reporplus .tooltip .badge }|
|hidden|bool|True = the character won't appear in the selection screen [ ](#){: .reporplus .tooltip .badge }|


Example of a players.xml file:
```xml
<players root="gfx/characters/costumes/"
         portraitroot="gfx/ui/boss/"
         nameimageroot="gfx/ui/boss/">
	<player name="Bob" skin="character_Bob.png" hp="4"
          black="4" pocketActive="712" items="1,4" keys="3"
          nameimage="playername_Bob.png"
          portrait="playerportrait_Bob.png"
          skinColor="-1" canShoot="false"
          birthright="You are now a gamer"/>
</players>
```
