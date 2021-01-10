# Class "ItemPool"
## Functions
### AddBibleUpgrade () {: aria-label='Functions' }
#### void AddBibleUpgrade ( int Add, [ItemPoolType](../enums/ItemPoolType) PoolType )  {: aria-label='Functions' }

___ 
### AddRoomBlacklist () {: aria-label='Functions' }
#### void AddRoomBlacklist ( [CollectibleType](../enums/CollectibleType) Item)  {: aria-label='Functions' }

___ 
### ForceAddPillEffect () {: aria-label='Functions' }
#### [PillColor](../enums/PillColor) ForceAddPillEffect ( [PillEffect](../ItemConfig_PillEffect) PillEffect)  {: aria-label='Functions' }
Forces a pill effect to be in the pool, usually for challenges, returns PillColor for that effect. 
___ 
### GetCard () {: aria-label='Functions' }
#### [Card](../ItemConfig_Card) GetCard ( int Seed, boolean Playing, boolean Rune, boolean OnlyRunes )  {: aria-label='Functions' }

___ 
### GetCollectible () {: aria-label='Functions' }
#### [CollectibleType](../enums/CollectibleType) GetCollectible ( [ItemPoolType](../enums/ItemPoolType) PoolType, boolean Decrease, int Seed )  {: aria-label='Functions' }

___ 
### GetLastPool () {: aria-label='Functions' }
#### [ItemPoolType](../enums/ItemPoolType) GetLastPool ( )  {: aria-label='Functions' }

___ 
### GetPill () {: aria-label='Functions' }
#### [PillColor](../enums/PillColor) GetPill ( int Seed)  {: aria-label='Functions' }

___ 
### GetPillEffect () {: aria-label='Functions' }
#### [PillEffect](../ItemConfig_PillEffect) GetPillEffect ( [PillColor](../enums/PillColor) PillColor)  {: aria-label='Functions' }

___ 
### GetPoolForRoom () {: aria-label='Functions' }
#### [ItemPoolType](../enums/ItemPoolType) GetPoolForRoom ( [RoomType](../enums/RoomType) RoomType, int Seed )  {: aria-label='Functions' }

___ 
### GetTrinket () {: aria-label='Functions' }
#### [TrinketType](../enums/TrinketType) GetTrinket ( )  {: aria-label='Functions' }

___ 
### IdentifyPill () {: aria-label='Functions' }
#### void IdentifyPill ( [PillColor](../enums/PillColor) PillColor)  {: aria-label='Functions' }

___ 
### IsPillIdentified () {: aria-label='Functions' }
#### boolean IsPillIdentified ( [PillColor](../enums/PillColor) PillColor)  {: aria-label='Functions' }

___ 
### RemoveCollectible () {: aria-label='Functions' }
#### boolean RemoveCollectible ( [CollectibleType](../enums/CollectibleType) Collectible)  {: aria-label='Functions' }
Removes a collectible from the itempool.
##### :fontawesome-solid-bug: Bugs {: .subHeader .bugs }
This function will always return true, even when the given id does not exist!
___ 
### RemoveTrinket () {: aria-label='Functions' }
#### boolean RemoveTrinket ( [TrinketType](../enums/TrinketType) Trinket)  {: aria-label='Functions' }

___ 
### ResetRoomBlacklist () {: aria-label='Functions' }
#### void ResetRoomBlacklist ( )  {: aria-label='Functions' }

___ 
### ResetTrinkets () {: aria-label='Functions' }
#### void ResetTrinkets ( )  {: aria-label='Functions' }

___ 
