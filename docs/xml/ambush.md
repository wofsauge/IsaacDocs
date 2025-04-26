---
tags:
  - File
---
# File "ambush.xml"

This file is used to store spawning patterns for the wave system of Ambush rooms and Boss Rush.
[ ](#){: .reporplus .tooltip .badge } Ambush rooms use a new system that's more similar to Greed Mode waves, so this file only defines the Boss Rush waves.

**Resource-Folder**{: .xmlInfo .green }: Placing this file in your mods "resource" folder will replace the original file.

**Content-Folder**{: .xmlInfo .red }: Placing this file in your mods "content" folder has no effect!

## "enemy" Tag

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|type|int|The type of the entity to spawn|
|variant|int|The variant of the entity|
|count|int|How many of the entity should spawn at the beginning of the wave|
|chunks|int|The amount of segments a multi-entity NPC (i.e, Larry Jr.) should spawn with|

## "bossrush" Tag

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|numWaves|int|The total amount of waves to occur during Boss Rush|
|spawnsPerWave|int|How many bosses should spawn per Boss Rush wave|

## "stage" Tag

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|id|int|The floor chapter the Ambush wave should be able to spawn at|
