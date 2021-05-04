# Class "ItemPool"
## Functions
### Add·Bible·Upgrade () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddBibleUpgrade ( int Add, [ItemPoolType](../enums/ItemPoolType) PoolType ) {: .copyable aria-label='Functions' }

___ 
### Add·Room·Blacklist () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddRoomBlacklist ( [CollectibleType](../enums/CollectibleType) Item ) {: .copyable aria-label='Functions' }

___ 
### Force·Add·Pill·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [PillColor](../enums/PillColor) ForceAddPillEffect ( [PillEffect](../enums/PillEffect) ID ) {: .copyable aria-label='Functions' }
Forces a pill effect to be in the pool, usually for challenges, returns PillColor for that effect. 
___ 
### Get·Card () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Card](../enums/Card) GetCard ( int Seed, boolean Playing, boolean Rune, boolean OnlyRunes ) {: .copyable aria-label='Functions' }

___ 
### Get·Collectible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [CollectibleType](../enums/CollectibleType) GetCollectible ( [ItemPoolType](../enums/ItemPoolType) PoolType, boolean Decrease, int Seed, int DefaultItem ) {: .copyable aria-label='Functions' }

___ 
### Get·Last·Pool () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [ItemPoolType](../enums/ItemPoolType) GetLastPool ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Pill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [PillColor](../enums/PillColor) GetPill ( int Seed ) {: .copyable aria-label='Functions' }

___ 
### Get·Pill·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [ItemConfig PillEffect](../ItemConfig_PillEffect) GetPillEffect ( [PillColor](../enums/PillColor) PillColor ) {: .copyable aria-label='Functions' }

___ 
### Get·Pool·For·Room () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [ItemPoolType](../enums/ItemPoolType) GetPoolForRoom ( [RoomType](../enums/RoomType) RoomType, int Seed ) {: .copyable aria-label='Functions' }

___ 
### Get·Trinket () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [TrinketType](../enums/TrinketType) GetTrinket ( boolean NoAdvance ) {: .copyable aria-label='Functions' }

___ 
### Identify·Pill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void IdentifyPill ( [PillColor](../enums/PillColor) PillColor ) {: .copyable aria-label='Functions' }

___ 
### Is·Pill·Identified () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsPillIdentified ( [PillColor](../enums/PillColor) PillColor ) {: .copyable aria-label='Functions' }

___ 
### Remove·Collectible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean RemoveCollectible ( [CollectibleType](../enums/CollectibleType) Collectible ) {: .copyable aria-label='Functions' }
Removes a collectible from the itempool. Returns true if given item did exist in the pool before.

___ 
### Remove·Trinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean RemoveTrinket ( [TrinketType](../enums/TrinketType) Trinket ) {: .copyable aria-label='Functions' }

___ 
### Reset·Room·Blacklist () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ResetRoomBlacklist ( ) {: .copyable aria-label='Functions' }

___ 
### Reset·Trinkets () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ResetTrinkets ( ) {: .copyable aria-label='Functions' }

___ 
