---
tags:
  - File
---
# File "bosspools.xml"
[ ](#){: .reporplus .tooltip .badge }

This file is used to store informations about the bosses able to spawn on a given stage.

This file can only be used to modify vanilla bosses. To add custom bosses, you need a 3rd-party library such as [StageAPI](https://github.com/Meowlala/BOIStageAPI15).

**Resource-Folder**{: .xmlInfo .red}:  Placing this file in your mods "resource" folder has no effect!

**Content-Folder**{: .xmlInfo .red}: Placing this file in your mods "content" folder has no effect!

## "pool" Tag

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|name|String|Name of the bosspool|
|doubletrouble|int|Room id used for double trouble rooms|

## "boss" Tag

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|id|int|ID of the boss|
|weight|float|Likelyhood of encountering this boss|

## Example

???+ example "Example Code"
    This code describes a boss pool with 3 bosses in it.

    ```xml
    <bosspools>
        <pool name="basement">
            <boss id="1" weight="1" />		<!-- Monstro -->
            <boss id="17" weight="1" />		<!-- Gemini -->
            <boss id="2" weight="1" />		<!-- Larry Jr. -->
        </pool>
    </bosspools>
    ```
