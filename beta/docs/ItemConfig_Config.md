# Class "ItemConfig::Config"
## Functions
### GetCard () {: aria-label='Functions' }
####  [Card](../ItemConfig_Card) GetCard ( int ID)  {: aria-label='Functions' }

___ 
### GetCards () {: aria-label='Functions' }
####  CardList GetCards ( )  {: aria-label='Functions' }

___ 
### GetCollectible () {: aria-label='Functions' }
####  [Item](../ItemConfig_Item) GetCollectible ( int ID)  {: aria-label='Functions' }

Returns the Itemobject of a given CollectibleID.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This Code gets the highest possible collectibleid including modded items. It uses the Binary Search algorithm to do it.
Using GetCollectible(): (**recommended!**)
```cpp 
function GetMaxCollectibleID()
local id = CollectibleType.NUM_COLLECTIBLES-1
local step = 16
while step &gt; 0 do
if Isaac.GetItemConfig():GetCollectible(id+step) ~= nil then
id = id + step
else
step = step // 2
end
end

return id
end

```
Using GetCollectibles(): (<b style="color:red">Crashes on Mac OS)**
```cpp 
function GetMaxCollectibleID()
return Isaac.GetItemConfig():GetCollectibles().Size -1
end

```
 WRONG PARSING {: .WRONG_PARSE } 
___ 
### GetCollectibles () {: aria-label='Functions' }
####  ItemList GetCollectibles ( )  {: aria-label='Functions' }

Returns the List of all Collectibles. 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This Code gets the highest possible collectibleid including modded items.
```cpp 
function GetMaxCollectibleID()
return Isaac.GetItemConfig():GetCollectibles().Size -1
end

```

##### :fontawesome-solid-bug: Bugs {: .subHeader .bugs }
The objects stored in the returned list cant be accessed correctly and are therefore useless.
___ 
### GetCostumes () {: aria-label='Functions' }
####  CostumeList GetCostumes ( )  {: aria-label='Functions' }

##### :fontawesome-solid-bug: Bugs {: .subHeader .bugs }
The Vector/Table returned by this function is always empty! 
___ 
### GetNullItem () {: aria-label='Functions' }
####  [Item](../ItemConfig_Item) GetNullItem ( int ID)  {: aria-label='Functions' }

___ 
### GetNullItems () {: aria-label='Functions' }
####  ItemList GetNullItems ( )  {: aria-label='Functions' }

___ 
### GetPillEffect () {: aria-label='Functions' }
####  [PillEffect](../ItemConfig_PillEffect) GetPillEffect ( [PillEffect](../ItemConfig_PillEffect) PillEffectID)  {: aria-label='Functions' }

___ 
### GetPillEffects () {: aria-label='Functions' }
####  PillList GetPillEffects ( )  {: aria-label='Functions' }

___ 
### GetTrinket () {: aria-label='Functions' }
####  [Item](../ItemConfig_Item) GetTrinket ( int ID)  {: aria-label='Functions' }

___ 
### GetTrinkets () {: aria-label='Functions' }
####  ItemList GetTrinkets ( )  {: aria-label='Functions' }

___ 
### IsValidCollectible () {: aria-label='Functions' }
#### static boolean IsValidCollectible ( [CollectibleType](../enums/CollectibleType) ID)  {: aria-label='Functions' }

Function to check if a given item id is a valid collectible id (aka. this item exists). Returns **True** when it exists and **False** when it doesnt.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This Code checks, if the item "Sad Onion" (ID: 1) exists.
```cpp 
ItemConfig.Config.IsValidCollectible(1)

```

##### :fontawesome-solid-bug: Bugs {: .subHeader .bugs }
This function returns false for modded items! Use itemConfig:GetCollectible() instead.
___ 
### ShouldAddCostumeOnPickup () {: aria-label='Functions' }
#### static boolean ShouldAddCostumeOnPickup ( [Item](../ItemConfig_Item) Config)  {: aria-label='Functions' }

___ 
