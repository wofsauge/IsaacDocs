---
tags:
  - File
---
# File "cutscenes.xml"

This file stores and defines the intro cutscene and the various ending cutscenes in the game.

**Resource-Folder**{: .xmlInfo }: Using this file in a resource folder of a mod is not tested yet.

**Content-Folder**{: .xmlInfo }: Using this file in a content folder of a mod is not tested yet.

## "cutscene" Tag

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|id|int|The ID of the cutscene|
|name|string|The name of the cutscene|
|fadeout|bool|Whether or not the cutscene should fadeout|
|fadecolor|string|The color the fadeout should be in if enabled|

## "anm2part" Tag

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|anm2|string|The filepath to the anm2 file this anm2part should play|
|anim|string|The name of the animation in the anm2 that this anm2part should play|
|music|int|The ID of the music this anm2part should play, defined in music.xml|
|musicDelay|int|How long the game should wait to play the aforementioned music, if any|
|width|int|How wide the anm2 should be displayed on screen|
|height|int|How long the anm2 should be displayed on screen|
|subtitles|string|The filepath to the subtitles.srt file|
|letterbox|bool||

## "videopart" Tag

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|file|string|The filepath to the video file this videopart should play|
|subtitles|string|The filepath to the subtitles.srt file|
|keepMusic|bool|Whether or not music defined in an anm2part should keep playing while this videopart is playing|
