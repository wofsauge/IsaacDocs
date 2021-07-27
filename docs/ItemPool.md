# Class "ItemPool"

???+ info
    You can get this class by using the following function:

    * [Game:GetItemPool()](Game.md#getitempool)

    ???+ example "Example Code"
        `Game():GetItemPool()`

## Functions
### Add·Bible·Upgrade () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddBibleUpgrade ( int Add, [ItemPoolType](enums/ItemPoolType.md) PoolType ) {: .copyable aria-label='Functions' }

___ 
### Add·Room·Blacklist () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddRoomBlacklist ( [CollectibleType](enums/CollectibleType.md) Item ) {: .copyable aria-label='Functions' }
Adds a given item to the blacklist. This item can no longer be chosen from itempools while the player is inside the current room. This effectively prevents the item from appearing.

When the player changes the room, the Blacklist gets reset.

___ 
### Force·Add·Pill·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [PillColor](enums/PillColor.md) ForceAddPillEffect ( [PillEffect](enums/PillEffect.md) ID ) {: .copyable aria-label='Functions' }
Forces a pill effect to be in the pool, usually for challenges, returns PillColor for that effect. 
___ 
### Get·Card () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Card](enums/Card.md) GetCard ( int Seed, boolean Playing, boolean Rune, boolean OnlyRunes ) {: .copyable aria-label='Functions' }

___ 
### Get·Collectible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [CollectibleType](enums/CollectibleType.md) GetCollectible ( [ItemPoolType](enums/ItemPoolType.md) PoolType, boolean Decrease = false, int Seed = Random(), [CollectibleType](enums/CollectibleType.md) DefaultItem = CollectibleType.COLLECTIBLE_NULL ) {: .copyable aria-label='Functions' }

___ 
### Get·Last·Pool () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [ItemPoolType](enums/ItemPoolType.md) GetLastPool ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Pill () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [PillColor](enums/PillColor.md) GetPill ( int Seed ) {: .copyable aria-label='Functions' }

___ 
### Get·Pill·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [PillEffect](enums/PillEffect.md) GetPillEffect ( [PillColor](enums/PillColor.md) PillColor, [EntityPlayer](EntityPlayer.md) Player = nil ) {: .copyable aria-label='Functions' }

___ 
### Get·Pool·For·Room () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [ItemPoolType](enums/ItemPoolType.md) GetPoolForRoom ( [RoomType](enums/RoomType.md) RoomType, int Seed ) {: .copyable aria-label='Functions' }

___ 
### Get·Trinket () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [TrinketType](enums/TrinketType.md) GetTrinket ( boolean DontAdvanceRNG = false ) {: .copyable aria-label='Functions' }

___ 
### Identify·Pill () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void IdentifyPill ( [PillColor](enums/PillColor.md) PillColor ) {: .copyable aria-label='Functions' }

___ 
### Is·Pill·Identified () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsPillIdentified ( [PillColor](enums/PillColor.md) PillColor ) {: .copyable aria-label='Functions' }

___ 
### Remove·Collectible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean RemoveCollectible ( [CollectibleType](enums/CollectibleType.md) Collectible ) {: .copyable aria-label='Functions' }
Removes a collectible from the itempool. Returns true if given item did exist in the pool before.

___ 
### Remove·Trinket () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean RemoveTrinket ( [TrinketType](enums/TrinketType.md) Trinket ) {: .copyable aria-label='Functions' }

___ 
### Reset·Room·Blacklist () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ResetRoomBlacklist ( ) {: .copyable aria-label='Functions' }
Clears the current item black list.

When the player changes the room, this function gets called automatically.

___ 
### Reset·Trinkets () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ResetTrinkets ( ) {: .copyable aria-label='Functions' }

___ 
