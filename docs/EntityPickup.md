---
tags:
  - Class
---
# Class "EntityPickup"

???+ info
    You can get this class by using the following function:

    * [Entity.ToPickup()](Entity.md#topickup)

    ???+ example "Example Code"
        `local entity = Isaac.GetRoomEntities()[1]:ToPickup()`

## Class Diagram
--8<-- "docs/snippets/EntityClassDiagram.md"
## Functions
### Appear·Fast () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AppearFast ( ) {: .copyable aria-label='Functions' }

___
### Can·Reroll () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean CanReroll ( ) {: .copyable aria-label='Functions' }

___
### Get·Coin·Value () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetCoinValue ( ) {: .copyable aria-label='Functions' }
If this is a coin, return its face value, else zero.
___
### Is·Shop·Item () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsShopItem ( ) {: .copyable aria-label='Functions' }

___
### Morph () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void Morph ( [EntityType](enums/EntityType.md) Type, int Variant, int SubType, boolean KeepPrice = false, boolean KeepSeed = false, boolean IgnoreModifiers = false ) {: .copyable aria-label='Functions' }
**KeepSeed**: If set to true, keeps the initial RNG seed of the pickup instead of rerolling it

**IgnoreModifiers**: If set to true, ignores item effects that might turn this pickup into something other than the specificed variant and sub-type. Specifically, this can be used to prevent a collectible from being affected by Tainted Isaac's rotation mechanic. (For example, if you manually spawn a quest collectible such as a Polaroid, it will be affected by Tainted Isaac's rotation mechanic, which is normally undesired. To fix this, you can immediately morph it into the same entity type / variant /sub-type after spawning with this argument set to true.)
___
### Play·Drop·Sound () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void PlayDropSound ( ) {: .copyable aria-label='Functions' }

___
### Play·Pickup·Sound () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void PlayPickupSound ( ) {: .copyable aria-label='Functions' }

___
### Try·Open·Chest () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean TryOpenChest ( [EntityPlayer](EntityPlayer.md) Player = nil ) {: .copyable aria-label='Functions' }
**Player**: The player that opened this chest
___
## Variables
### Auto·Update·Price {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean AutoUpdatePrice  {: .copyable aria-label='Variables' }

___
### Charge {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Charge  {: .copyable aria-label='Variables' }

___
### OptionsPickupIndex {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int OptionsPickupIndex  {: .copyable aria-label='Variables' }
Any non-zero value causes the item to form an option group with any other item with the same OptionsPickupIndex value.

When an item belonging to an option group is picked up, all other items belonging to the same group disappear.

0 is the default value and means the item doesn't belong to any group.
___
### Price {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Price  {: .copyable aria-label='Variables' }
Price of the pickup in shops.

???- info "Tainted Keeper Info"
    On Tainted Keeper, all items are supposed to have a price. But any items spawned with Lua does not comply with this rule, so you have to manually set a price. On the next frame after assigning a price (for example `1`), it will snap to the correct price it would have for Tainted Keeper (e.g. 15). This is because of the AutoUpdatePrice feature.

    This method works most of the time. However, it breaks in special rooms (e.g. Angel Rooms) such that sometimes, the price will snap to wrong values, such as 24, 99, and so on. The fix for this, set ShopItemId to an arbitrary negative value (e.g. -1).

___
### Shop·Item·Id {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int ShopItemId  {: .copyable aria-label='Variables' }

If in a shop, this value describes which slot the item is for sale in. For example, if the shop has 6 things for sale, the pickups in the room will have shop item IDs of 0, 1, 2, 3, 4, and 5.

When spawning a new collectible item, the ShopItemId will be 0 by default. This has a side effect of making the D6 roll the collectible into a red heart. By setting shop item id to -1, it will fix this behavior such that the collectible will properly roll into another collectible. However, non-collectible pickups may reroll into collectibles through a D20 or similar.

By setting shop item id to -2, automatic prices will be devil deal prices. Otherwise this is identical to -1.

Other negative values act identically to -1.

___
### State {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int State  {: .copyable aria-label='Variables' }

___
### Timeout {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Timeout  {: .copyable aria-label='Variables' }

Causes the pickup to blink and then disappear after a certain amount of time like the temporary health dropped from tainted maggy. The value decreases by 1 every game frame and after hitting 0 the pickup disappears. If the Timeout is set to -1(the default value for normal pickups) the pickup will act normally and not disappear.

___
### Touched {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean Touched  {: .copyable aria-label='Variables' }

___
### Wait {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Wait  {: .copyable aria-label='Variables' }

Used with collectibles to enforce a period of time where the player will not automatically pick up the collectible. New collectibles spawn with a `Wait` value of 20 (which corresponds to 20 game frames). The value will automatically decrement as game frames pass.

It is unknown whether or not this value is used for pickups other than collectibles.

___
