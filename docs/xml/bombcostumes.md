---
tags:
  - File
---
# File "bombcostumes.xml"
[ ](#){: .reporplus .tooltip .badge }

Used to apply costumes to bomb relative to their TearFlags.

**Resource-Folder**{: .xmlInfo .red}: Using this file in a resource folder of a mod will replace the original file.

**Content-Folder**{: .xmlInfo .green}: Using this file in a content folder of a mod will add new bomb costumes.

## "bomb" Tag

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|variant|int|[BombVariant](../enums/BombVariant.md) for which the costumes should be applied|

## "rule" Tag

???- info ".anm2 files"
    For every .anm2-file specified you need to create 4 .anm2-files, one for every bomb size:
        mini-bomb from Scatter Bombs, mini-bomb from Scatter Bombs with Mr. Mega, normal size bomb and Mr. Mega-size bomb
    For example, when you specify `bomb.anm2`, you actually require the files `bomb0.anm2`, `bomb1.anm2`, `bomb2.anm2` and `bomb3.anm2`.

???- info "Rule precedence"
    The rules you include in this file will be listed after the default rules of the respective variant. Bomb costumes will be applied from the tags within these rules (i.e. `body`, `front`, etc.)
    The tag of the last applicable rule that has it will always be the one to be applied.
    Example: Having the Items Blood Bombs and Bomber Boy will cause placed bombs to look like Blood bombs, as both rules specify the tag `body` and the rule for Blood Bombs is listed below the rule for Bomber Boy.

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|includeFlags|int|All [TearFlag bits](../enums/TearFlags.md) required to be resent for layer to be added (seperate with spaces)|
|excludeFlags|int|All [TearFlag bits](../enums/TearFlags.md) required to be absent for layer to be added (seperate with spaces)|
|back|string|path to the .anm2 files, relative to the given anm2root, that will be displayed behind the bomb. Example: `flame.anm2`|
|body|string|path to the .anm2 files, relative to the given anm2root, that will replace the main bomb sprite. Example: `bomb.anm2`|
|body2|string|path to the .anm2 file, relative to the given anm2root, that will be displayed along the main bomb sprite. Example: `homing.anm2`|
|front|string|path to the .anm2 file, relative to the given anm2root, that will be applied on top of the main bomb sprite. Example: `tears_blood.anm2`|
|front2|string|path to the .anm2 file, relative to the given anm2root, that will be applied on top of the main bomb sprite. Example: `fast.anm2`<br>Use this when you don't want an already applied `front`-animation to be overriden.|
|overlay|string|path to the .anm2 file, relative to the given anm2root, that will be displayed on top of the entire bomb. Example: `glitter_sparkle.anm2`|
|suffix|string|suffix to be added at the end of an image-filepath, before `.png`, that will replace the spritesheet-image associated with LayerID 0<br>Example: `_gold` will replace the spritesheet-image `bomb.png` with `bomb_gold.png`|
|suffix2|string|suffix to be added at the end of an image-filepath, after `suffix` and before `.png`, that will replace the spritesheet-image associated with LayerID 0<br>Example: `_gold` will replace the spritesheet-image `bomb.png` with `bomb_gold.png`|


Example of a `bombcostumes.xml` file:
```xml
<bombcostumes anm2root="gfx/items/pick ups/bombs/">
    <bomb variant="0"> <!-- Normal bomb -->
        <!-- TearFlag 31 == TearFlags.TEAR_GLOW -->
        <rule includeFlags="31" body="glow.anm2" />
    </bomb>
</bombcostumes>
```
