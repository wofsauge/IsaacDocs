# Class "ItemPool"
## Functions
### Add·Bible·Upgrade () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddBibleUpgrade ( int Add, [ItemPoolType](enums/ItemPoolType.html) PoolType ) {: .copyable aria-label='Functions' }

___ 
### Add·Room·Blacklist () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddRoomBlacklist ( [CollectibleType](enums/CollectibleType.html) Item ) {: .copyable aria-label='Functions' }

___ 
### Force·Add·Pill·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [PillColor](enums/PillColor.html) ForceAddPillEffect ( [PillEffect](enums/PillEffect.html) ID ) {: .copyable aria-label='Functions' }
Forces a pill effect to be in the pool, usually for challenges, returns PillColor for that effect. 
___ 
### Get·Card () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Card](enums/Card.html) GetCard ( int Seed, boolean Playing, boolean Rune, boolean OnlyRunes ) {: .copyable aria-label='Functions' }

___ 
### Get·Collectible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [CollectibleType](enums/CollectibleType.html) GetCollectible ( [ItemPoolType](enums/ItemPoolType.html) PoolType, boolean Decrease = false, int Seed = Random(), [CollectibleType](enums/CollectibleType.html) DefaultItem = CollectibleType.COLLECTIBLE_NULL ) {: .copyable aria-label='Functions' }

___ 
### Get·Last·Pool () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [ItemPoolType](enums/ItemPoolType.html) GetLastPool ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Pill () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [PillColor](enums/PillColor.html) GetPill ( int Seed ) {: .copyable aria-label='Functions' }

___ 
### Get·Pill·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [PillEffect](enums/PillEffect.html) GetPillEffect ( [PillColor](enums/PillColor.html) PillColor, [EntityPlayer](EntityPlayer.html) Player = nil ) {: .copyable aria-label='Functions' }

___ 
### Get·Pool·For·Room () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [ItemPoolType](enums/ItemPoolType.html) GetPoolForRoom ( [RoomType](enums/RoomType.html) RoomType, int Seed ) {: .copyable aria-label='Functions' }

___ 
### Get·Trinket () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [TrinketType](enums/TrinketType.html) GetTrinket ( boolean DontAdvanceRNG = false ) {: .copyable aria-label='Functions' }

___ 
### Identify·Pill () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void IdentifyPill ( [PillColor](enums/PillColor.html) PillColor ) {: .copyable aria-label='Functions' }

___ 
### Is·Pill·Identified () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsPillIdentified ( [PillColor](enums/PillColor.html) PillColor ) {: .copyable aria-label='Functions' }

___ 
### Remove·Collectible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean RemoveCollectible ( [CollectibleType](enums/CollectibleType.html) Collectible ) {: .copyable aria-label='Functions' }
Removes a collectible from the itempool. Returns true if given item did exist in the pool before.

___ 
### Remove·Trinket () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean RemoveTrinket ( [TrinketType](enums/TrinketType.html) Trinket ) {: .copyable aria-label='Functions' }

___ 
### Reset·Room·Blacklist () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ResetRoomBlacklist ( ) {: .copyable aria-label='Functions' }

___ 
### Reset·Trinkets () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ResetTrinkets ( ) {: .copyable aria-label='Functions' }

___ 
