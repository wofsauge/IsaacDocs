---
tags:
  - File
---
# File "fxlayers.xml"

Used to store information about overlays used in the stages. Unlike other Isaac XMLs, the file does not have one overarching element containing everything inside, instead being seperated into the elements fxLayers, fxRays, and fxParams.

**Resource-Folder**{: .xmlInfo .green}: Placing this file in a resource folder of a mod will override the original.

**Content-Folder**{: .xmlInfo }: Using this file in a content folder of a mod is not tested yet.


# fxLayers
## "fx" Tag
| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|id|string||
|path|string|Path to the overlay image. Must be a .png saved at a bit-depth of 32 bits.|
|numLayers|integer|*todo*|
|xMin|float||
|xMax|float||
|yMin|float||
|yMax|float||
|layer|string|Possible values: [lighting, foreground, background, behind]|
|stage|integer|Possible values: [1-Basement, 2-Caves, 3-Depths, 4-Womb, 5-Blue Womb, 6-Sheol, 7-Chest, 8-Void, 9-Home]|
|altStages|integer|Bitmask of 1 << [0-Original, 1-WOTL, 2-Afterbirth, 3-Unused (legacy Greed Mode), 4-Repentance, 5-Repentance Alt, 6-Special (only used for the Abandoned Mineshaft)]|
|parallax|float|Moves the overlay in the opposite direction as the player|
|onlyDefaultBackdrop|boolean|*todo*|
|blendMode|integer|*todo*|
|useBGShader|boolean|*todo*|

## "gfx" Tag
Optional child element of the "fx" element, used for specifying overlays Multiple "gfx" elements can be added to a "fx" element, resulting in a random selection of any others with the same roomshape.

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|path|string|Path to the overlay image. Must be a .png saved at a bit-depth of 32 bits.|
|roomshape|integer|Appears in the room corresponding to the value of the RoomShape enum.|
