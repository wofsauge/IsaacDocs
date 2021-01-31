# Class "ItemConfig"
## Functions
### GetCard () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Card](../ItemConfig_Card) GetCard ( int ID ) {: .copyable aria-label='Functions' }

___ 
### GetCards () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [CardList](../CppContainer_Vector_CardConfigList) GetCards ( ) {: .copyable aria-label='Functions' }

???+ bug "Bugs"
    Calling Get() in this list does not return usable userdata, rendering it useless for that purpose.

___ 
### GetCollectible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Item](../ItemConfig_Item) GetCollectible ( int ID ) {: .copyable aria-label='Functions' }

Returns the Itemobject of a given CollectibleID.

???- example "Example Code"
    This Code gets the highest possible collectibleid including modded items. It uses the Binary Search algorithm to do it.
    Using GetCollectible(): (**recommended!**)

    ```lua 
    function GetMaxCollectibleID()
        local id = CollectibleType.NUM_COLLECTIBLES-1
        local step = 16
        while step > 0 do
            if Isaac.GetItemConfig():GetCollectible(id+step) ~= nil then
                id = id + step
            else
                step = step // 2
            end
        end
    
    return id
    end
    
    ```
    Using GetCollectibles(): (**Crashes on Mac OS)**

    ```lua 
    function GetMaxCollectibleID()
        return Isaac.GetItemConfig():GetCollectibles().Size -1
    end
    
    ```
___ 
### GetCollectibles () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [ItemList](../CppContainer_Vector_ItemConfigList) GetCollectibles ( ) {: .copyable aria-label='Functions' }

Returns the List of all Collectibles. 

???- example "Example Code"
    This Code gets the highest possible collectibleid including modded items.
    ```lua 
    function GetMaxCollectibleID()
        return Isaac.GetItemConfig():GetCollectibles().Size -1
    end
    
    ```


???+ bug "Bugs"
    Calling Get() in this list does not return usable userdata, rendering it useless for that purpose.
___ 
### GetCostumes () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [CostumeList](../CppContainer_Vector_CostumeConfigList) GetCostumes ( ) {: .copyable aria-label='Functions' }


???+ bug "Bugs"
    The list returned by this function is always empty, rendering it useless.
___ 
### GetNullItem () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Item](../ItemConfig_Item) GetNullItem ( int ID ) {: .copyable aria-label='Functions' }

___ 
### GetNullItems () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [ItemList](../CppContainer_Vector_ItemConfigList) GetNullItems ( ) {: .copyable aria-label='Functions' }

???+ bug "Bugs"
    Calling Get() in this list does not return usable userdata, rendering it useless for that purpose.

___ 
### GetPillEffect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [PillEffect](../ItemConfig_PillEffect) GetPillEffect ( [PillEffect](../ItemConfig_PillEffect) PillEffectID ) {: .copyable aria-label='Functions' }

___ 
### GetPillEffects () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [PillList](../CppContainer_Vector_PillConfigList) GetPillEffects ( ) {: .copyable aria-label='Functions' }

???+ bug "Bugs"
    Calling Get() in this list does not return usable userdata, rendering it useless for that purpose.

___ 
### GetTrinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Item](../ItemConfig_Item) GetTrinket ( int ID ) {: .copyable aria-label='Functions' }

___ 
### GetTrinkets () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [ItemList](../CppContainer_Vector_ItemConfigList) GetTrinkets ( ) {: .copyable aria-label='Functions' }

???+ bug "Bugs"
    Calling Get() in this list does not return usable userdata, rendering it useless for that purpose.

___ 
### IsValidCollectible () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static boolean IsValidCollectible ( [CollectibleType](../enums/CollectibleType) ID ) {: .copyable aria-label='Functions' }

Function to check if a given item id is a valid collectible id (aka. this item exists). Returns **True** when it exists and **False** when it doesnt.

???- example "Example Code"
    This Code checks, if the item "Sad Onion" (ID: 1) exists.
    ```lua 
    ItemConfig.Config.IsValidCollectible(1)
    
    ```


???+ bug "Bugs"
    This function returns false for modded items! Use itemConfig:GetCollectible() instead.
___ 
### ShouldAddCostumeOnPickup () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static boolean ShouldAddCostumeOnPickup ( [Item](../ItemConfig_Item) Config ) {: .copyable aria-label='Functions' }

___ 
