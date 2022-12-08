---
tags:
  - File
---
# File "bossportraits.xml"

This file is used to store informations about the VS screen sprites of bosses.

**Resource-Folder**{: .xmlInfo }: Using this file in a resource folder of a mod is not tested yet.

**Content-Folder**{: .xmlInfo }: Using this file in a content folder of a mod is not tested yet.

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|id|int|Id of the boss|
|name|string|Name of the boss|
|nameimage|string|.png filename of the name plate sprite of the boss|
|portrait|string|.png filename of the boss sprite|
|pivotX|int|Pivot X position where the boss sprite should be placed|
|pivotY|int|Pivot Y position where the boss sprite should be placed|
|achievement|int|Achievement id. Usage unknown|

**Its possible to add alternative boss portraits by adding an `<alt>` tag entry into the boss tag.**


Example of a `bossportraits.xml` file:
```xml
<bosses root="gfx/ui/boss/" anm2="versusscreen.anm2">
	<boss id="76" name="Wormwood" nameimage="BossName_Wormwood.png" portrait="Portrait_902.0_Wormwood.png" pivotX="84" pivotY="144">
		<alt stage="28" portrait="Portrait_902.0_Wormwood_Dross.png" />
	</boss>
</bosses>
```
