# Class "ItemPool"
___ 
## void AddBibleUpgrade (integer Add, ItemPoolType PoolType )

___ 
## void AddRoomBlacklist (CollectibleType Item)

___ 
## PillColor ForceAddPillEffect (PillEffect PillEffect)
Forces a pill effect to be in the pool, usually for challenges, returns PillColor for that effect. 
___ 
## Card GetCard (integer Seed, boolean Playing, boolean Rune, boolean OnlyRunes )

___ 
## CollectibleType GetCollectible (ItemPoolType PoolType, boolean Decrease, integer Seed )

___ 
## ItemPoolType GetLastPool ()

___ 
## PillColor GetPill (integer Seed)

___ 
## PillEffect GetPillEffect (PillColor PillColor)

___ 
## ItemPoolType GetPoolForRoom (RoomType RoomType, integer Seed )

___ 
## TrinketType GetTrinket ()

___ 
## void IdentifyPill (PillColor PillColor)

___ 
## boolean IsPillIdentified (PillColor PillColor)

___ 
## boolean RemoveCollectible (CollectibleType Collectible)
Removes a collectible and returns it if it was found. 
___ 
## boolean RemoveTrinket (TrinketType Trinket)

___ 
## void ResetRoomBlacklist ()

___ 
## void ResetTrinkets ()

___ 
