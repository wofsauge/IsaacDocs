---
tags:
  - Class
---
# Class "ItemConfig"

???+ info
    You can get this class by using the following function:

    * [Isaac.GetItemConfig()](Isaac.md#getitemconfig)

    ???+ example "Example Code"
        `Isaac.GetItemConfig()`

ItemConfig does have a special Enum.  you can find it here [ItemConfigEnums](enums/ItemConfig.md)

## Functions
### Get·Card () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [ItemConfig Card](ItemConfig_Card.md) GetCard ( [Card](enums/Card.md) ID ) {: .copyable aria-label='Functions' }
Returns `nil` if no itemconfig to the given ID can be found.

___
### Get·Cards () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [CardList](CppContainer_Vector_CardConfigList.md) GetCards ( ) {: .copyable aria-label='Functions' }

???+ bug "Bugs"
    Calling Get() in this list does not return usable userdata, rendering it useless for that purpose.

___
### Get·Collectible () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [ItemConfig Item](ItemConfig_Item.md) GetCollectible ( [CollectibleType](enums/CollectibleType.md) ID ) {: .copyable aria-label='Functions' }

Returns the Itemobject of a given CollectibleID. Returns nil of nothing was found.

???- example "Example Code"
    This function gets the item config of sad onion.

    ```lua
        Isaac.GetItemConfig():GetCollectible(1)
    ```
___
### Get·Collectibles () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const userdata GetCollectibles ( ) {: .copyable aria-label='Functions' }

Returns the List of all Collectibles.

???+ bug "Bug"
    This function is broken and returns userdata.

???- example "Example Code"
    This Code gets the highest possible collectible id including modded items.

    ```lua
    function GetMaxCollectibleID()
        return Isaac.GetItemConfig():GetCollectibles().Size -1
    end

    ```


???+ bug "Bugs"
    Calling Get() in this list does not return usable userdata, rendering it useless for that purpose.
___
### Get·Null·Item () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [ItemConfig Item](ItemConfig_Item.md) GetNullItem ( [NullItemID](enums/NullItemID.md) ID ) {: .copyable aria-label='Functions' }
Returns `nil` if no itemconfig to the given ID can be found.

___
### Get·Null·Items () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [ItemList](CppContainer_Vector_ItemConfigList.md) GetNullItems ( ) {: .copyable aria-label='Functions' }

???+ bug "Bugs"
    Calling Get() in this list does not return usable userdata, rendering it useless for that purpose.

___
### Get·Pill·Effect () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [ItemConfig PillEffect](ItemConfig_PillEffect.md) GetPillEffect ( [PillEffect](enums/PillEffect.md) ID ) {: .copyable aria-label='Functions' }
Returns `nil` if no itemconfig to the given ID can be found.

___
### Get·Pill·Effects () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [PillList](CppContainer_Vector_PillConfigList.md) GetPillEffects ( ) {: .copyable aria-label='Functions' }

???+ bug "Bugs"
    Calling Get() in this list does not return usable userdata, rendering it useless for that purpose.

___
### Get·Trinket () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [ItemConfig Item](ItemConfig_Item.md) GetTrinket ( [TrinketType](enums/TrinketType.md) ID ) {: .copyable aria-label='Functions' }
Returns `nil` if no itemconfig to the given ID can be found.

___
### Get·Trinkets () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [ItemList](CppContainer_Vector_ItemConfigList.md) GetTrinkets ( ) {: .copyable aria-label='Functions' }

???+ bug "Bugs"
    Calling Get() in this list does not return usable userdata, rendering it useless for that purpose.

___
### Is·Valid·Collectible () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### static boolean IsValidCollectible ( [CollectibleType](enums/CollectibleType.md) ID ) {: .copyable aria-label='Functions' }

Function to check if a given item id is a valid collectible id (aka. this item exists). Returns **True** when it exists and **False** when it doesn't.

Since this function is a static function, the usage is a bit different. Take a look at the example code for the correct usage

???- example "Example Code"
    This Code checks, if the item "Sad Onion" (ID: 1) exists.
    ```lua
    ItemConfig.Config.IsValidCollectible(1)

    ```
___
### Should·Add·Costume·On·Pickup () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### static boolean ShouldAddCostumeOnPickup ( [ItemConfig Item](ItemConfig_Item.md) Config ) {: .copyable aria-label='Functions' }
Returns weather a given item config object should add a costume when picking up the associated item.

Since this function is a static function, the usage is a bit different. Take a look at the example code for the correct usage


???- example "Example Code"
    This Code checks, if the item "Sad Onion" (ID: 1) should add a costume on Pickup.
    ```lua
    local sadOnionItemConfig = Isaac.GetItemConfig():GetCollectible(1)
    ItemConfig.Config.ShouldAddCostumeOnPickup(sadOnionItemConfig) -- returns true

    ```
___
