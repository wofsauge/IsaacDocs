# Class "ItemPool"
## Functions
### Add·Bible·Upgrade () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddBibleUpgrade ( int Add, [ItemPoolType](../rep/enums/ItemPoolType) PoolType ) {: .copyable aria-label='Functions' }

___ 
### Add·Room·Blacklist () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddRoomBlacklist ( [CollectibleType](../rep/enums/CollectibleType) Item ) {: .copyable aria-label='Functions' }

___ 
### Force·Add·Pill·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [PillColor](../rep/enums/PillColor) ForceAddPillEffect ( [PillEffect](../rep/enums/PillEffect) ID ) {: .copyable aria-label='Functions' }
Forces a pill effect to be in the pool, usually for challenges, returns PillColor for that effect. 
___ 
### Get·Card () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Card](../rep/enums/Card) GetCard ( int Seed, boolean Playing, boolean Rune, boolean OnlyRunes ) {: .copyable aria-label='Functions' }

___ 
### Get·Collectible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [CollectibleType](../rep/enums/CollectibleType) GetCollectible ( [ItemPoolType](../rep/enums/ItemPoolType) PoolType, boolean Decrease = false, int Seed = Random(), [CollectibleType](../rep/enums/CollectibleType) DefaultItem = CollectibleType.COLLECTIBLE_NULL ) {: .copyable aria-label='Functions' }

___ 
### Get·Last·Pool () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [ItemPoolType](../rep/enums/ItemPoolType) GetLastPool ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Pill () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [PillColor](../rep/enums/PillColor) GetPill ( int Seed ) {: .copyable aria-label='Functions' }

___ 
### Get·Pill·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [PillEffect](../rep/enums/PillEffect) GetPillEffect ( [PillColor](../rep/enums/PillColor) PillColor, [EntityPlayer](../rep/EntityPlayer) Player = nil ) {: .copyable aria-label='Functions' }

___ 
### Get·Pool·For·Room () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [ItemPoolType](../rep/enums/ItemPoolType) GetPoolForRoom ( [RoomType](../rep/enums/RoomType) RoomType, int Seed ) {: .copyable aria-label='Functions' }

___ 
### Get·Trinket () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [TrinketType](../rep/enums/TrinketType) GetTrinket ( boolean DontAdvanceRNG = false ) {: .copyable aria-label='Functions' }

___ 
### Identify·Pill () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void IdentifyPill ( [PillColor](../rep/enums/PillColor) PillColor ) {: .copyable aria-label='Functions' }

___ 
### Is·Pill·Identified () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsPillIdentified ( [PillColor](../rep/enums/PillColor) PillColor ) {: .copyable aria-label='Functions' }

___ 
### Remove·Collectible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean RemoveCollectible ( [CollectibleType](../rep/enums/CollectibleType) Collectible ) {: .copyable aria-label='Functions' }
Removes a collectible from the itempool. Returns true if given item did exist in the pool before.

___ 
### Remove·Trinket () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean RemoveTrinket ( [TrinketType](../rep/enums/TrinketType) Trinket ) {: .copyable aria-label='Functions' }

___ 
### Reset·Room·Blacklist () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ResetRoomBlacklist ( ) {: .copyable aria-label='Functions' }

___ 
### Reset·Trinkets () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ResetTrinkets ( ) {: .copyable aria-label='Functions' }

___ 
