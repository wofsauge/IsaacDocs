---
tags:
  - File
---
# File "music.xml"

This file is used to store and define the music tracks the game plays. This is only background music, sound effects are in the "sounds.xml" file.

Old tutorial: [https://www.reddit.com/r/themoddingofisaac/comments/3ebqat/all_about_music_soundfiles/](https://www.reddit.com/r/themoddingofisaac/comments/3ebqat/all_about_music_soundfiles/)

**Resource-Folder**{: .xmlInfo .green }: Placing this file in your mods "resource" folder will replace the original file.

**Content-Folder**{: .xmlInfo }: Using this file in a content folder of a mod is not tested yet.


| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|id|int|The ID of the music this track defines|
|name|string|The name of the track|
|intro|string|The filepath to the intro of this track. Plays exactly once at the beginning of the song|
|path|string|The filepath to the main music file. Plays after the intro|
|layerintro|string|The filepath to the intro's layer of this track|
|layer|string|The filepath to the layer of the song. Layers play over the song when there are a large amount of enemies in the room|
|loop|bool|Whether or not the main track should loop indefinitely.|
|layermode|int||
|layerfadespeed|float||
|mul|float||
|layermul|float||
