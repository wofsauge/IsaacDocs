# File "bombcostumes.xml"
[ ](#){: .rep .tooltip .badge }

This page needs some content. You can contribute to it using the Edit Button!

**Resource-Folder**{: .xmlInfo }: Using this file in a resource folder of a mod is not tested yet.

**Content-Folder**{: .xmlInfo }: Using this file in a content folder of a mod is not tested yet.

## "bomb" Tag

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|variant|int||

## "rule" Tag

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|includeFlags|int|All TearFlag bits required to be resent for layer to be added|
|excludeFlags|int|All TearFlag bits required to be absent for layer to be added|
|back|string|path to the anm2 file, relative to the given anm2root. Example: `flame.anm2`|
|body|string|path to the anm2 file, relative to the given anm2root. Example: `bomb.anm2`|
|body2|string|path to the anm2 file, relative to the given anm2root. Example: `homing.anm2`|
|front|string|path to the anm2 file, relative to the given anm2root. Example: `tears_blood.anm2`|
|front2|string|path to the anm2 file, relative to the given anm2root. Example: `fast.anm2`|
|overlay|string|path to the anm2 file, relative to the given anm2root. Example: `glitter_sparkle.anm2`|
|suffix|string|suffix to be added at the end of a filepath, before `.anm2` (Usage currently unknown, only presumed)|
|suffix2|string|suffix to be added at the end of a filepath, after `suffix` and before `.anm2`. Example: `_gold`|


