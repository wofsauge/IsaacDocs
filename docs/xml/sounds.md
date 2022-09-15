---
tags:
  - File
---
# File "sounds.xml"

This file is used to store informations about the Soundeffect used in the game.

old tutorial: [https://www.reddit.com/r/themoddingofisaac/comments/3ebqat/all_about_music_soundfiles/](https://www.reddit.com/r/themoddingofisaac/comments/3ebqat/all_about_music_soundfiles/)

**Resource-Folder**{: .xmlInfo .green}: Placing this file in your mods "resource" folder will replace the original file.

**Content-Folder**{: .xmlInfo .green}: Placing this file in your mods "content" folder will add new sound effects.


## "sound" node
| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|name|string|Name of the Sound effect|

## "sample" node
Child-node of the "sound" node. Multiple "sample" nodes can be added to a "sound" node, resulting in a random selection of them when playing.

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|weight|float|Weight of the sound-effect when choosen by random.<br>Lower number = less likely|
|path|string|filepath to the .wav file|


## Informations
Its only possible to define ".wav" files as sound effects. The file must be encoded in 32-bit, otherwise it will sound like high-pitched static noise. The Bitrate and audio-channel options can be choosen freely.

# File Conversions
For an easy conversion from any audio-format to the needed ".wav" format, you can use a lot of software tools for editing sound files.

As an online alternative, you can also use websites like: https://convertio.co/mp3-wav/ . Make sure you save the files as 32-bit (example Codec: "PCM_S16LE (Uncompressed)")

## Example

???+ example "Example Code"
    This code adds two sound effects. One with a single sound, and another one with 3 possible sounds choosen by random.

    ```xml
    <sounds root="sounds/">
        <sound name="MySoundEffect1">
            <sample weight="1" path="some_Sound_file.wav" />
        </sound>
        <sound name="MySoundEffect2">
            <sample weight="1" path="sound_effect_variation_1.wav"/>
            <sample weight="1" path="sound_effect_variation_2.wav"/>
            <sample weight="1" path="sound_effect_variation_3.wav"/>
        </sound>
    </sounds>
    ```