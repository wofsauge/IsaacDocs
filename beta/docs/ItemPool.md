# Class "ItemPool"
## Functions
[ ](#){: .abp .tooltip .badge }
### AddBibleUpgrade () {: aria-label='Functions' }
#### void AddBibleUpgrade ( int Add, [ItemPoolType](../enums/ItemPoolType) PoolType ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddRoomBlacklist () {: aria-label='Functions' }
#### void AddRoomBlacklist ( [CollectibleType](../enums/CollectibleType) Item ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ForceAddPillEffect () {: aria-label='Functions' }
#### [PillColor](../enums/PillColor) ForceAddPillEffect ( [PillEffect](../ItemConfig_PillEffect) PillEffect ) {: .copyable aria-label='Functions' }
Forces a pill effect to be in the pool, usually for challenges, returns PillColor for that effect. 
___ 
[ ](#){: .abp .tooltip .badge }
### GetCard () {: aria-label='Functions' }
#### [Card](../ItemConfig_Card) GetCard ( int Seed, boolean Playing, boolean Rune, boolean OnlyRunes ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCollectible () {: aria-label='Functions' }
#### [CollectibleType](../enums/CollectibleType) GetCollectible ( [ItemPoolType](../enums/ItemPoolType) PoolType, boolean Decrease, int Seed ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetLastPool () {: aria-label='Functions' }
#### [ItemPoolType](../enums/ItemPoolType) GetLastPool ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetPill () {: aria-label='Functions' }
#### [PillColor](../enums/PillColor) GetPill ( int Seed ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetPillEffect () {: aria-label='Functions' }
#### [PillEffect](../ItemConfig_PillEffect) GetPillEffect ( [PillColor](../enums/PillColor) PillColor ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetPoolForRoom () {: aria-label='Functions' }
#### [ItemPoolType](../enums/ItemPoolType) GetPoolForRoom ( [RoomType](../enums/RoomType) RoomType, int Seed ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetTrinket () {: aria-label='Functions' }
#### [TrinketType](../enums/TrinketType) GetTrinket ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IdentifyPill () {: aria-label='Functions' }
#### void IdentifyPill ( [PillColor](../enums/PillColor) PillColor ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsPillIdentified () {: aria-label='Functions' }
#### boolean IsPillIdentified ( [PillColor](../enums/PillColor) PillColor ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveCollectible () {: aria-label='Functions' }
#### boolean RemoveCollectible ( [CollectibleType](../enums/CollectibleType) Collectible ) {: .copyable aria-label='Functions' }
Removes a collectible from the itempool.
##### :fontawesome-solid-bug: Bugs {: .subHeader .bugs }
This function will always return true, even when the given id does not exist!
___ 
[ ](#){: .abp .tooltip .badge }
### RemoveTrinket () {: aria-label='Functions' }
#### boolean RemoveTrinket ( [TrinketType](../enums/TrinketType) Trinket ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ResetRoomBlacklist () {: aria-label='Functions' }
#### void ResetRoomBlacklist ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ResetTrinkets () {: aria-label='Functions' }
#### void ResetTrinkets ( ) {: .copyable aria-label='Functions' }

___ 
