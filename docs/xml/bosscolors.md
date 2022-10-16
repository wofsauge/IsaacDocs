---
tags:
  - File
---
# File "bosscolors.xml"

This file is used to store all valid champion bosses. Effects of champion bosses are hardcoded, so this file defines only color, scale and HP multiplier of the boss.

**Resource-Folder**{: .xmlInfo }: Using this file in a resource folder of a mod is not tested yet.

**Content-Folder**{: .xmlInfo }: Using this file in a content folder of a mod is not tested yet.

## "boss" Tag

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|id|int|Ingame-Id of the Boss.|
|variant|int|Ingame-Variant of the Boss.|

## "color" Tag

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|idx|int|Boss's color. Possible values: 1-Red, 2-Pale, 3-Green, 4-Cyan, 5-Green, 6-Orange, 7-Blue, 8-Cyan, 9-Orange, 10-?, 11-Dark Greyish Green, 12-Yellow, 13-Dark Cyan, 14-Red, 15-Dark Grey, 16-Dark Grey, 17-Pale Grey, 18-Black, 19-Red, 20-Pink, 21-Golden, 22-Pink, 23-Brown|
|scale|float|Boss's scale is multiplied by this number.|
|hp|float|Boss's health is multiplied by this number.|
|anm2path|string|Path to a specific anm2 file that should be used instead of coloring the boss automatically|
