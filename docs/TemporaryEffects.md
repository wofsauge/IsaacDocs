---
tags:
  - Class
search:
  boost: 0.25
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
Adds the CollectibleEffect associated with a given item. If the passed item's CollectibleEffect is marked to have a cooldown or be persistent in items.xml, this will be respected.

???+ info "Misinformation"
    TemporaryEffects, despite their names, are not and were never intended to be fake or temporary copies of items. Notably every single active item automatically grants its CollectibleEffect on use, and this is often closely tied to its effect; CollectibleEffects can therefore be visuallised more as an item's state. For example in passive items:
    
    * Holy Mantle utilises its CollectibleEffect to track how many shield charges the player currently has.
    * Most familiar items can have their familiar granted via their CollectibleEffect.
    * Whore of Babylon and Crown of Light grant their CollectibleEffects while activated.
    
    Some items can have their effects granted invisibly through the use of their CollectibleEffect, oftentimes this is because another item pre-repentance wished to invoke its effect (such as Monster Manual). Many post-repentance items use real fake copies of items for this purpose, but adding these is not supported by the API and some such as Hemoptysis and Berserk! still use CollectibleEffects for their cooldowns. You should not assume that any given item will work as a TemporaryEffect the same as it does when actually obtained.

    ???- info "Supported Items"
        Passive items with notable CollectibleEffects (excluding quest items).

        --8<-- "docs/snippets/AddCollectibleEffect.txt"

???- example "Example Code"
    This code applies the effect and costume of the item "Sad Onion" to the player.

    ```lua
    local player = Isaac.GetPlayer()
    player:GetEffects():AddCollectibleEffect(CollectibleType.COLLECTIBLE_SAD_ONION, true)
    ```
___
### Add·Null·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddNullEffect ( [NullItemID](enums/NullItemID.md) NullId, boolean AddCostume = true, int Count = 1 ) {: .copyable aria-label='Functions' }

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
