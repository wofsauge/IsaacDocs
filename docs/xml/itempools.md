---
tags:
  - File
---
# File "itempools.xml"

This page needs some content. You can contribute to it using the Edit Button!

**Resource-Folder**{: .xmlInfo }: Using this file in a resource folder of a mod is not tested yet.

**Content-Folder**{: .xmlInfo }: Using this file in a content folder of a mod is not tested yet.


| Variable-Name | Possible Values | Description |
|:--|:--|:--|
| Id | int | *(Optional)*<br> The id of the item in the itempool<br> When using this variable, you can't use the "name" variable.|
| Name | String | *(Optional, recommended)* The name of the item in the itempool.<br> When using this variable, you can't use the "id" variable. |
| Weight | float | Relative "likelyhood" that this item can be drawn from the pool. `Default = 1` . If this value reaches the "RemoveOn" value, the item will no longer be drawn from the pool|
| DecreaseBy | float | Value on how often the item can be drawn from the pool. `Default = 1`<br>Everytime an item is drawn from the pool, this value is substracted from its Weight. This makes the item appear less likely on reroll till the weight reaches the "RemoveOn" value.|
| RemoveOn | float | Value on which Weight value the item is no longer able to be drawn from the pool. `Default = "0.1"`|

## Item count calculation
The amount on how often an item will be in the itempool is determined with the following equation:
```lua
math.ceil( ( Weight - RemoveOn ) / DecreaseBy )
```
( `math.ceil` rounds a number to the next biggest integer )

## Example

???+ example "Example Code"
    This code describes an item pool with 3 items in it.

    ```xml
    <ItemPools>
        <Pool Name="myItempool">
                <!--The Sad Onion --- 1 times in the Pool-->
            <Item Id="1" Weight="1" DecreaseBy="1" RemoveOn="0.1"/>
                <!--The Inner Eye --- 5 times in the Pool (10-1)/2 = 4.5 => 5 -->
            <Item Id="2" Weight="11" DecreaseBy="2" RemoveOn="1"/>
                 <!--Spoon Bender --- 4 times in the pool (1-0.1)/0.25 = 3.6 => 4 -->
            <Item Id="3" Weight="1" DecreaseBy="0.25" RemoveOn="0.1"/>
        </Pool>
    </ItemPools>
    ```