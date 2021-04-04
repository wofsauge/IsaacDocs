# File "bosspools.xml"
[ ](#){: .rep .tooltip .badge }

This file is used to store informations about the bosses able to spawn on a given stage.

**Resource-Folder**{: .xmlInfo }: Using this file in a resource folder of a mod is not tested yet.

**Content-Folder**{: .xmlInfo }: Using this file in a content folder of a mod is not tested yet.

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