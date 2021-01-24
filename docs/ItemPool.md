# Class "ItemPool"
## Functions
### AddBibleUpgrade () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddBibleUpgrade ( int Add, [ItemPoolType](../enums/ItemPoolType) PoolType ) {: .copyable aria-label='Functions' }

___ 
### AddRoomBlacklist () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddRoomBlacklist ( [CollectibleType](../enums/CollectibleType) Item ) {: .copyable aria-label='Functions' }

___ 
### ForceAddPillEffect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [PillColor](../enums/PillColor) ForceAddPillEffect ( [PillEffect](../ItemConfig_PillEffect) PillEffect ) {: .copyable aria-label='Functions' }
Forces a pill effect to be in the pool, usually for challenges, returns PillColor for that effect. 
___ 
### GetCard () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Card](../ItemConfig_Card) GetCard ( int Seed, boolean Playing, boolean Rune, boolean OnlyRunes ) {: .copyable aria-label='Functions' }

___ 
### GetCollectible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [CollectibleType](../enums/CollectibleType) GetCollectible ( [ItemPoolType](../enums/ItemPoolType) PoolType, boolean Decrease, int Seed ) {: .copyable aria-label='Functions' }

___ 
### GetLastPool () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [ItemPoolType](../enums/ItemPoolType) GetLastPool ( ) {: .copyable aria-label='Functions' }

___ 
### GetPill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [PillColor](../enums/PillColor) GetPill ( int Seed ) {: .copyable aria-label='Functions' }

___ 
### GetPillEffect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [PillEffect](../ItemConfig_PillEffect) GetPillEffect ( [PillColor](../enums/PillColor) PillColor ) {: .copyable aria-label='Functions' }

___ 
### GetPoolForRoom () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [ItemPoolType](../enums/ItemPoolType) GetPoolForRoom ( [RoomType](../enums/RoomType) RoomType, int Seed ) {: .copyable aria-label='Functions' }

___ 
### GetTrinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [TrinketType](../enums/TrinketType) GetTrinket ( ) {: .copyable aria-label='Functions' }

___ 
### IdentifyPill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void IdentifyPill ( [PillColor](../enums/PillColor) PillColor ) {: .copyable aria-label='Functions' }

___ 
### IsPillIdentified () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsPillIdentified ( [PillColor](../enums/PillColor) PillColor ) {: .copyable aria-label='Functions' }

___ 
### RemoveCollectible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean RemoveCollectible ( [CollectibleType](../enums/CollectibleType) Collectible ) {: .copyable aria-label='Functions' }
Removes a collectible from the itempool.

???+ bug "Bugs"
    This function will always return true, even when the given id does not exist!
___ 
### RemoveTrinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean RemoveTrinket ( [TrinketType](../enums/TrinketType) Trinket ) {: .copyable aria-label='Functions' }

___ 
### ResetRoomBlacklist () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ResetRoomBlacklist ( ) {: .copyable aria-label='Functions' }

___ 
### ResetTrinkets () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ResetTrinkets ( ) {: .copyable aria-label='Functions' }

___ 
