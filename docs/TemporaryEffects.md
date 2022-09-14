---
tags:
  - Class
---
# Class "TemporaryEffects"

???+ info
    You can get this class by using the following function:

    * [EntityPlayer:GetEffects()](EntityPlayer.md#geteffects)

    ???+ example "Example Code"
        ```lua
        local player = Isaac.GetPlayer()
        local tempEffects = player:GetEffects()
        ```

## Functions
### Add·Collectible·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddCollectibleEffect ( [CollectibleType](enums/CollectibleType.md) CollectibleType, boolean AddCostume = true, int Count = 1 ) {: .copyable aria-label='Functions' }
Adds the effect of a collectible to the player, without actually giving him the assosiated item.

???+ bug
    This function only works for a subset of collectibles. For example, it will work with "Holy Mantle", but not with "Chocolate Milk".

???- example "Example Code"
    This code applies the effect and costume of the item "Sad Onion" to the player.

    ```lua
    local player = Isaac.GetPlayer()
    player:GetEffects():AddCollectibleEffect(CollectibleType.COLLECTIBLE_SAD_ONION, true)
    ```
___
### Add·Null·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddNullEffect ( [ItemConfigNullItemID](ItemConfig_Item.md) NullId, boolean AddCostume = true, int Count = 1 ) {: .copyable aria-label='Functions' }

___
### Add·Trinket·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddTrinketEffect ( [TrinketType](enums/TrinketType.md) TrinketType, boolean AddCostume = true, int Count = 1 ) {: .copyable aria-label='Functions' }

___
### Clear·Effects () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ClearEffects ( ) {: .copyable aria-label='Functions' }

___
### Get·Collectible·Effect () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [TemporaryEffect](TemporaryEffect.md) GetCollectibleEffect ( [CollectibleType](enums/CollectibleType.md) CollectibleType ) {: .copyable aria-label='Functions' }

___
### Get·Collectible·Effect·Num () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetCollectibleEffectNum ( [CollectibleType](enums/CollectibleType.md) CollectibleType ) {: .copyable aria-label='Functions' }

___
### Get·Effects·List () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [EffectList](CppContainer_Vector_EffectList.md) GetEffectsList ( ) {: .copyable aria-label='Functions' }

___
### Get·Null·Effect () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [TemporaryEffect](TemporaryEffect.md) GetNullEffect ( [ItemConfigNullItemID](ItemConfig_Item.md) NullId ) {: .copyable aria-label='Functions' }

___
### Get·Null·Effect·Num () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetNullEffectNum ( [ItemConfigNullItemID](ItemConfig_Item.md) NullId ) {: .copyable aria-label='Functions' }

___
### Get·Trinket·Effect () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [TemporaryEffect](TemporaryEffect.md) GetTrinketEffect ( [TrinketType](enums/TrinketType.md) TrinketType ) {: .copyable aria-label='Functions' }

___
### Get·Trinket·Effect·Num () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetTrinketEffectNum ( [TrinketType](enums/TrinketType.md) TrinketType ) {: .copyable aria-label='Functions' }

___
### Has·Collectible·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasCollectibleEffect ( [CollectibleType](enums/CollectibleType.md) CollectibleType ) {: .copyable aria-label='Functions' }

___
### Has·Null·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasNullEffect ( [ItemConfigNullItemID](ItemConfig_Item.md) NullId ) {: .copyable aria-label='Functions' }

___
### Has·Trinket·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasTrinketEffect ( [TrinketType](enums/TrinketType.md) TrinketType ) {: .copyable aria-label='Functions' }

___
### Remove·Collectible·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void RemoveCollectibleEffect ( [CollectibleType](enums/CollectibleType.md) CollectibleType, int Count = 1 ) {: .copyable aria-label='Functions' }
Count = -1 removes all instances of the effect
___
### Remove·Null·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void RemoveNullEffect ( [ItemConfigNullItemID](ItemConfig_Item.md) NullId, int Count = 1 ) {: .copyable aria-label='Functions' }
Count = -1 removes all instances of the effect
___
### Remove·Trinket·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void RemoveTrinketEffect ( [TrinketType](enums/TrinketType.md) TrinketType, int Count = 1 ) {: .copyable aria-label='Functions' }
Count = -1 removes all instances of the effect
___
