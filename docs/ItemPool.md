# Class "ItemPool"
## Functions
### Add·Bible·Upgrade () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddBibleUpgrade ( int Add, [ItemPoolType](../abp/enums/ItemPoolType) PoolType ) {: .copyable aria-label='Functions' }

___ 
### Add·Room·Blacklist () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddRoomBlacklist ( [CollectibleType](../abp/enums/CollectibleType) Item ) {: .copyable aria-label='Functions' }

___ 
### Force·Add·Pill·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [PillColor](../abp/enums/PillColor) ForceAddPillEffect ( [PillEffect](../abp/enums/PillEffect) ID ) {: .copyable aria-label='Functions' }
Forces a pill effect to be in the pool, usually for challenges, returns PillColor for that effect. 
___ 
### Get·Card () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Card](../abp/enums/Card) GetCard ( int Seed, boolean Playing, boolean Rune, boolean OnlyRunes ) {: .copyable aria-label='Functions' }

___ 
### Get·Collectible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [CollectibleType](../abp/enums/CollectibleType) GetCollectible ( [ItemPoolType](../abp/enums/ItemPoolType) PoolType, boolean Decrease, int Seed ) {: .copyable aria-label='Functions' }

___ 
### Get·Last·Pool () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [ItemPoolType](../abp/enums/ItemPoolType) GetLastPool ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Pill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [PillColor](../abp/enums/PillColor) GetPill ( int Seed ) {: .copyable aria-label='Functions' }

___ 
### Get·Pill·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [ItemConfig PillEffect](../abp/ItemConfig_PillEffect) GetPillEffect ( [PillColor](../abp/enums/PillColor) PillColor ) {: .copyable aria-label='Functions' }

___ 
### Get·Pool·For·Room () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [ItemPoolType](../abp/enums/ItemPoolType) GetPoolForRoom ( [RoomType](../abp/enums/RoomType) RoomType, int Seed ) {: .copyable aria-label='Functions' }

___ 
### Get·Trinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [TrinketType](../abp/enums/TrinketType) GetTrinket ( ) {: .copyable aria-label='Functions' }

___ 
### Identify·Pill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void IdentifyPill ( [PillColor](../abp/enums/PillColor) PillColor ) {: .copyable aria-label='Functions' }

___ 
### Is·Pill·Identified () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsPillIdentified ( [PillColor](../abp/enums/PillColor) PillColor ) {: .copyable aria-label='Functions' }

___ 
### Remove·Collectible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean RemoveCollectible ( [CollectibleType](../abp/enums/CollectibleType) Collectible ) {: .copyable aria-label='Functions' }
Removes a collectible from the itempool.

???+ bug "Bugs"
    This function will always return true, even when the given id does not exist!
___ 
### Remove·Trinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean RemoveTrinket ( [TrinketType](../abp/enums/TrinketType) Trinket ) {: .copyable aria-label='Functions' }

___ 
### Reset·Room·Blacklist () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ResetRoomBlacklist ( ) {: .copyable aria-label='Functions' }

___ 
### Reset·Trinkets () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ResetTrinkets ( ) {: .copyable aria-label='Functions' }

___ 
