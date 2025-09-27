---
tags:
  - Class
---
# Class "ItemPool"

???+ info
    You can get this class by using the following function:

    * [Game:GetItemPool()](Game.md#getitempool)

    ???+ example "Example Code"
        `Game():GetItemPool()`

## Functions
### Add·Bible·Upgrade () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void AddBibleUpgrade ( int Add, [ItemPoolType](enums/ItemPoolType.md) PoolType ) {: .copyable aria-label='Functions' }

___
### Add·Room·Blacklist () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void AddRoomBlacklist ( [CollectibleType](enums/CollectibleType.md) Item ) {: .copyable aria-label='Functions' }
Adds a given item to the blacklist. This item can no longer be chosen from itempools while the player is inside the current room. This effectively prevents the item from appearing.

When the player changes the room, the Blacklist gets reset.

___
### Force·Add·Pill·Effect () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [PillColor](enums/PillColor.md) ForceAddPillEffect ( [PillEffect](enums/PillEffect.md) ID ) {: .copyable aria-label='Functions' }
Forces a pill effect to be in the pool, usually for challenges, returns PillColor for that effect.
___
### Get·Card () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Card](enums/Card.md) GetCard ( int Seed, boolean Playing, boolean Rune, boolean OnlyRunes ) {: .copyable aria-label='Functions' }

___
### Get·Collectible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [CollectibleType](enums/CollectibleType.md) GetCollectible ( [ItemPoolType](enums/ItemPoolType.md) PoolType, boolean Decrease = false, int Seed = Random(), [CollectibleType](enums/CollectibleType.md) DefaultItem = CollectibleType.COLLECTIBLE_NULL ) {: .copyable aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### [CollectibleType](enums/CollectibleType.md) GetCollectible ( [ItemPoolType](enums/ItemPoolType.md) PoolType, boolean Decrease = false, int Seed = Random(), [CollectibleType](enums/CollectibleType.md) DefaultItem = CollectibleType.COLLECTIBLE_NULL, [ItemPoolType](enums/ItemPoolType.md) BackupPoolType = ItemPoolType.POOL_NULL ) {: .copyable aria-label='Functions' }

???- note "Notes"
    Already accounts for effects such as NO!, Chaos, Sacred Orb, T.Lost's Better Items, Magic Skin and Rosary Beads, alongside all of the specific character and challenge restrictions.

    If **DefaultItem** is set to CollectibleType.COLLECTIBLE_NULL and the item pool has run out of repicks, then the game will first try to get a collectible from the Treasure Pool (in Repentance+ can specified with **BackupPoolType**, unless **ItemPoolType** is already the Treasure Pool). If that fails then Breakfast is returned (assuming it doesn't get modified into Magic Skin or Rosary later on).

    If **DefaultItem** is set to anything other than CollectibleType.COLLECTIBLE_NULL, this entire process (excluding the potential Magic Skin or Rosary modification) is skipped, and the specified collectible is returned instead.

___
### Get·Last·Pool () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [ItemPoolType](enums/ItemPoolType.md) GetLastPool ( ) {: .copyable aria-label='Functions' }

___
### Get·Pill () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [PillColor](enums/PillColor.md) GetPill ( int Seed ) {: .copyable aria-label='Functions' }

___
### Get·Pill·Effect () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### [PillEffect](enums/PillEffect.md) GetPillEffect ( [PillColor](enums/PillColor.md) PillColor, [EntityPlayer](EntityPlayer.md) Player = nil ) {: .copyable aria-label='Functions' }

Will return the pill effect that corresponds to the passed pill color. This will work properly even if the player has not yet identified the pill color (by using one or more pills of that color). It is recommended to always pass the corresponding player because if a player has Lucky Foot, PHD, Virgo, or False PHD, the resolved pill effect will change from what was assigned by default at the beginning of the run.

Returns -1 if passed `PillColor.NULL` (0) or a value of 2048. Returns `PillEffect.BAD_GAS` (0) if passed an invalid pill color (e.g. 15 through 2047 or 2063+).

___
### Get·Pool·For·Room () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [ItemPoolType](enums/ItemPoolType.md) GetPoolForRoom ( [RoomType](enums/RoomType.md) RoomType, int Seed ) {: .copyable aria-label='Functions' }

___
### Get·Trinket () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### [TrinketType](enums/TrinketType.md) GetTrinket ( boolean DontAdvanceRNG = false ) {: .copyable aria-label='Functions' }

___
### Identify·Pill () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void IdentifyPill ( [PillColor](enums/PillColor.md) PillColor ) {: .copyable aria-label='Functions' }

___
### Is·Pill·Identified () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean IsPillIdentified ( [PillColor](enums/PillColor.md) PillColor ) {: .copyable aria-label='Functions' }

Once the player takes PHD, Virgo, or False PHD, this method will always return true, even if the player has not already seen or used the pill on the run thus far. (This is because this method dictates when the "???" text should be shown as the pill description, and these collectibles will always show the "revealed" text.)

___
### Remove·Collectible () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### boolean RemoveCollectible ( [CollectibleType](enums/CollectibleType.md) Collectible ) {: .copyable aria-label='Functions' }
Removes a collectible from the itempool. Returns true if given item did exist in the pool before.

___
### Remove·Trinket () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean RemoveTrinket ( [TrinketType](enums/TrinketType.md) Trinket ) {: .copyable aria-label='Functions' }

___
### Reset·Room·Blacklist () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ResetRoomBlacklist ( ) {: .copyable aria-label='Functions' }
Clears the current item black list.

When the player changes the room, this function gets called automatically.

___
### Reset·Trinkets () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ResetTrinkets ( ) {: .copyable aria-label='Functions' }

___
