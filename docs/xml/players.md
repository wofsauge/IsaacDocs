# File "players.xml"

This page needs some content. You can contribute to it using the Edit Button!

**Resource-Folder**{: .xmlInfo }: Using this file in a resource folder of a mod is not tested yet.

**Content-Folder**{: .xmlInfo .green }: Using this file in a content folder will add new characters.

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|name|string|name of the character (has to match the one in CharacterMenu.anm2)|
|skin|string|path of the character spritesheet|
|skinColor|int||
|nameimage|string|name for vs. screen|
|portrait|string|portrait for the vs. screen|
|hp|int|starting red health (1 = half heart)|
|armor|int|starting soul hearts (1 = half soul heart)|
|black|int|starting  black hearts (1 = half black heart)|
|items|int|starting item ID (can separate with a comma to add more than one)|
|costume|int||
|costumeSuffix|costume||
|bombs|int|starting bombs|
|keys|coins|starting keys|
|coins|int|starting coins|
|card|int|starting card ID|
|pill|int||
|canShoot|bool|false = blindfolded|
|pocketActive|int|starting pocket active item ID[ ](#){: .rep .tooltip .badge }|
|birthright|string|message when picking up Birthright [ ](#){: .rep .tooltip .badge }|
|achievement|int|tie the character to an existing achievement [ ](#){: .rep .tooltip .badge }|

Example of a players.xml file:
```xml
<players root="gfx/characters/costumes/" 
         portraitroot="gfx/ui/boss/" 
         nameimageroot="gfx/ui/boss/" 
         bigportraitroot="gfx/ui/stage/">
	<player name="Bob" skin="character_Bob.png" hp="4"
          black="4" pocketActive="712" items="1,4" keys="3"
          nameimage="playername_Bob.png" 
          portrait="playerportrait_Bob.png" 
          bigportrait="playerbigportrait_Bob.png"
          skinColor="-1" canShoot="false"
          birthright="You are now a gamer/>
</players>
```
