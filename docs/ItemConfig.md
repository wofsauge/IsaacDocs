# Class "ItemConfig"
ItemConfig does have a special Enum.  you can find it here [ItemConfigEnums](../rep/enums/ItemConfigEnums)

## Functions
### Get·Card () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [ItemConfig Card](../rep/ItemConfig_Card) GetCard ( [Card](../rep/enums/Card) ID ) {: .copyable aria-label='Functions' }

___ 
### Get·Cards () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [CardList](../rep/CppContainer_Vector_CardConfigList) GetCards ( ) {: .copyable aria-label='Functions' }

???+ bug "Bugs"
    Calling Get() in this list does not return usable userdata, rendering it useless for that purpose.

___ 
### Get·Collectible () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [ItemConfig Item](../rep/ItemConfig_Item) GetCollectible ( int ID ) {: .copyable aria-label='Functions' }

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
### Get·Collectibles () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const userdata GetCollectibles ( ) {: .copyable aria-label='Functions' }

Returns the List of all Collectibles. 

???+ bug "Bug"
    This function is broken and returns userdata.

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
### Get·Costumes () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [CostumeList](../rep/CppContainer_Vector_CostumeConfigList) GetCostumes ( ) {: .copyable aria-label='Functions' }


???+ bug "Bugs"
    The list returned by this function is always empty, rendering it useless.
___ 
### Get·Null·Item () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [ItemConfig Item](../rep/ItemConfig_Item) GetNullItem ( int ID ) {: .copyable aria-label='Functions' }

___ 
### Get·Null·Items () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [ItemList](../rep/CppContainer_Vector_ItemConfigList) GetNullItems ( ) {: .copyable aria-label='Functions' }

???+ bug "Bugs"
    Calling Get() in this list does not return usable userdata, rendering it useless for that purpose.

___ 
### Get·Pill·Effect () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [ItemConfig PillEffect](../rep/ItemConfig_PillEffect) GetPillEffect ( [PillEffect](../rep/enums/PillEffect) ID ) {: .copyable aria-label='Functions' }

___ 
### Get·Pill·Effects () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [PillList](../rep/CppContainer_Vector_PillConfigList) GetPillEffects ( ) {: .copyable aria-label='Functions' }

???+ bug "Bugs"
    Calling Get() in this list does not return usable userdata, rendering it useless for that purpose.

___ 
### Get·Trinket () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [ItemConfig Item](../rep/ItemConfig_Item) GetTrinket ( int ID ) {: .copyable aria-label='Functions' }

___ 
### Get·Trinkets () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [ItemList](../rep/CppContainer_Vector_ItemConfigList) GetTrinkets ( ) {: .copyable aria-label='Functions' }

???+ bug "Bugs"
    Calling Get() in this list does not return usable userdata, rendering it useless for that purpose.

___ 
### Is·Valid·Collectible () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### static boolean IsValidCollectible ( [CollectibleType](../rep/enums/CollectibleType) ID ) {: .copyable aria-label='Functions' }

Function to check if a given item id is a valid collectible id (aka. this item exists). Returns **True** when it exists and **False** when it doesnt.

???- example "Example Code"
    This Code checks, if the item "Sad Onion" (ID: 1) exists.
    ```lua 
    ItemConfig.Config.IsValidCollectible(1)
    
    ```


???+ bug "Bugs"
    This function returns false for modded items! Use itemConfig:GetCollectible() instead.
___ 
### Should·Add·Costume·On·Pickup () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### static boolean ShouldAddCostumeOnPickup ( [ItemConfig Item](../rep/ItemConfig_Item) Config ) {: .copyable aria-label='Functions' }

___ 
