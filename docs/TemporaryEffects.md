# Class "TemporaryEffects"
## Functions
### Add·Collectible·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddCollectibleEffect ( [CollectibleType](../abp/enums/CollectibleType) CollectibleType, boolean AddCostume ) {: .copyable aria-label='Functions' }
Adds the effect of a collectible to the player, without actually giving him the assosiated item.

???+ bug
    This function does only work for some collectibles, but not all. For example, it doesnt work for "Chocolate milk".

???- example "Example Code"
    This code applies the effect and costume of the item "Sad Onion" to the player.

    ```lua
    local player = Isaac.GetPlayer(0)
    player:GetEffects():AddCollectibleEffect(CollectibleType.COLLECTIBLE_SAD_ONION, true)
    ```
___ 
### Add·Null·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddNullEffect ( [ItemConfig::NullItemID](../abp/ItemConfig_Item) NullId, boolean AddCostume ) {: .copyable aria-label='Functions' }

___ 
### Add·Trinket·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddTrinketEffect ( [TrinketType](../abp/enums/TrinketType) TrinketType, boolean AddCostume ) {: .copyable aria-label='Functions' }

___ 
### Clear·Effects () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ClearEffects ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Collectible·Effect () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const [TemporaryEffect](../abp/TemporaryEffect) GetCollectibleEffect ( [CollectibleType](../abp/enums/CollectibleType) CollectibleType ) {: .copyable aria-label='Functions' }

___ 
### Get·Collectible·Effect·Num () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetCollectibleEffectNum ( [CollectibleType](../abp/enums/CollectibleType) CollectibleType ) {: .copyable aria-label='Functions' }

___ 
### Get·Effects·List () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const [EffectList](../abp/CppContainer_Vector_EffectList) GetEffectsList ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Null·Effect () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const [TemporaryEffect](../abp/TemporaryEffect) GetNullEffect ( [ItemConfig::NullItemID](../abp/ItemConfig_Item) NullId ) {: .copyable aria-label='Functions' }

___ 
### Get·Null·Effect·Num () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNullEffectNum ( [ItemConfig::NullItemID](../abp/ItemConfig_Item) NullId ) {: .copyable aria-label='Functions' }

___ 
### Get·Trinket·Effect () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const [TemporaryEffect](../abp/TemporaryEffect) GetTrinketEffect ( [TrinketType](../abp/enums/TrinketType) TrinketType ) {: .copyable aria-label='Functions' }

___ 
### Get·Trinket·Effect·Num () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetTrinketEffectNum ( [TrinketType](../abp/enums/TrinketType) TrinketType ) {: .copyable aria-label='Functions' }

___ 
### Has·Collectible·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasCollectibleEffect ( [CollectibleType](../abp/enums/CollectibleType) CollectibleType ) {: .copyable aria-label='Functions' }

___ 
### Has·Null·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasNullEffect ( [ItemConfig::NullItemID](../abp/ItemConfig_Item) NullId ) {: .copyable aria-label='Functions' }

___ 
### Has·Trinket·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasTrinketEffect ( [TrinketType](../abp/enums/TrinketType) TrinketType ) {: .copyable aria-label='Functions' }

___ 
### Remove·Collectible·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveCollectibleEffect ( [CollectibleType](../abp/enums/CollectibleType) CollectibleType ) {: .copyable aria-label='Functions' }

___ 
### Remove·Null·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveNullEffect ( [ItemConfig::NullItemID](../abp/ItemConfig_Item) NullId ) {: .copyable aria-label='Functions' }

___ 
### Remove·Trinket·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveTrinketEffect ( [TrinketType](../abp/enums/TrinketType) TrinketType ) {: .copyable aria-label='Functions' }

___ 
