# Class "EntityPlayer"
___ 
## void AddBlackHearts (integer BlackHearts)

Adds Black hearts to the player. 1 unit is half a heart. Remove them with negative numbers. 
#### Example Code
This code adds 1 full black heart to the player.
```lua
Isaac.GetPlayer(0):AddBlackHearts(2)
```
___ 
## Entity AddBlueFlies (integer Amount, Vector Position, Entity Target )

___ 
## Entity AddBlueSpider (Vector Position)

___ 
## void AddBombs (integer Amount)

Adds bombs to the player. Remove them with negative numbers. 
#### Example Code
This code removes 1 bomb from the player.
```lua
Isaac.GetPlayer(0):AddBombs(-1)
```
___ 
## void AddBoneHearts (integer Hearts)

Adds bone hearts to the player. 1 unit is a single bone heart. Remove them with negative numbers. 
#### Example Code
This code adds 1 bone heart to the player.
```lua
Isaac.GetPlayer(0):AddBoneHearts(1)
```
___ 
## void AddCacheFlags (CacheFlag CacheFlag)
Will reevaluate the cache flags provided in the next cache reevaluation.
___ 
## void AddCard (Card Card)

___ 
## void AddCoins (integer Amount)

Adds coins to the player. Remove them with negative numbers. 
#### Example Code
This code adds 1 coin to the player.
```lua
Isaac.GetPlayer(0):AddCoins(1)
```
___ 
## void AddCollectible (CollectibleType Type, integer Charge, boolean AddConsumables )

___ 
## void AddControlsCooldown (integer Cooldown)

___ 
## void AddCostume (Config::Item Item, boolean ItemStateOnly )

___ 
## void AddDeadEyeCharge ()

___ 
## void AddDollarBillEffect ()

___ 
## void AddEternalHearts (integer EternalHearts)

Adds eternal hearts to the player. 1 unit is half a heart. Remove them with negative numbers. <br/>(Note that eternal hearts automatically turn to full hearts, when you have more than one.) 
#### Example Code
This code adds 1 eternal heart to the player.
```lua
Isaac.GetPlayer(0):AddEternalHearts(1)
```
___ 
## void AddGoldenBomb ()

___ 
## void AddGoldenHearts (integer Hearts)

Adds golden hearts to the player. 1 unit is a single gold heart. Remove them with negative numbers. 
#### Example Code
This code adds 1 golden heart to the player.
```lua
Isaac.GetPlayer(0):AddGoldenHearts(1)
```
___ 
## void AddGoldenKey ()

___ 
## void AddHearts (integer Hearts)

Adds red hearts to the player if there are any empty heart containers. 1 unit is half a heart. Remove health with negative numbers. 
#### Example Code
This code adds 1 full red heart to the player.
```lua
Isaac.GetPlayer(0):AddkHearts(2)
```
___ 
## void AddJarFlies (integer Flies)

___ 
## void AddJarHearts (integer Hearts)

___ 
## void AddKeys (integer Amount)

Adds keys to the player. Remove them with negative numbers. 
#### Example Code
This code adds 1 key to the player.
```lua
Isaac.GetPlayer(0):AddKeys(1)
```
___ 
## void AddMaxHearts (integer MaxHearts, boolean IgnoreKeeper )

Adds heart containers to the player. 2 units is a full heart container. Remove them with negative numbers. 
#### Notes
It is possible to add a half heart container to the player. This will appear as a regular heart container but can only be filled half-way.
#### Example Code
This code adds 1 heart container to the player.
```lua
Isaac.GetPlayer(0):AddMaxHearts(2,true)
```
#### Bugs
IgnoreKeeper does not appear to work as intended.

Max hearts can be added or removed from Keeper regardless of what this boolean is.
If Keeper has Greed's Gullet and this boolean is set to false, max hearts cannot be added to Keeper, but can be removed normally.
If Keeper has Greed's Gullet and this boolean is set to true, Max hearts can be added or removed from Keeper normally.
___ 
## void AddNullCostume (Config::NullItemID NullId)
for Lua 
___ 
## void AddPill (PillColor Pill)

___ 
## void AddPlayerFormCostume (PlayerForm Form)

___ 
## void AddPrettyFly ()

___ 
## void AddSoulHearts (integer SoulHearts)

Adds soul hearts to the player. 1 unit is half a heart. Remove them with negative numbers. 
#### Example Code
This code adds 1 full soul heart to the player.
```lua
Isaac.GetPlayer(0):AddSoulHearts(2)
```
___ 
## void AddTrinket (TrinketType Type)

___ 
## void AnimateAppear ()
Play the animation that is normally played at the beginning of a stage. 
___ 
## void AnimateCard (Card Card, string AnimName )

___ 
## void AnimateCollectible (CollectibleType Collectible, string AnimName, string SpriteAnimName )

___ 
## void AnimateHappy ()
thumbs up 
___ 
## void AnimateLightTravel ()
end of a stage 
___ 
## void AnimatePill (PillColor Pill, string AnimName )

___ 
## void AnimatePitfallIn ()
Fall into pitfall. 
___ 
## void AnimatePitfallOut ()
Jump out of pitfall. 
___ 
## void AnimateSad ()
oh no! 
___ 
## void AnimateTeleport (boolean Up)
teleport to another room 
___ 
## void AnimateTrapdoor ()
end of a stage 
___ 
## void AnimateTrinket (TrinketType Trinket, string AnimName, string SpriteAnimName )

___ 
## boolean AreControlsEnabled ()

___ 
## boolean AreOpposingShootDirectionsPressed ()
Returns the non-zero joystick direction from the most recent movement input, but goes to zero after the player comes to a stop. 
___ 
## boolean CanAddCollectible ()

___ 
## boolean CanPickBlackHearts ()
returns true if player has room for more black hearts 
___ 
## boolean CanPickBoneHearts ()
returns true if player has room for more bone hearts 
___ 
## boolean CanPickGoldenHearts ()
returns true if player has room for more golden hearts 
___ 
## boolean CanPickRedHearts ()

___ 
## boolean CanPickSoulHearts ()
returns true if player has room for more soul hearts 
___ 
## boolean CanPickupItem ()
Can Player pick up an item right now? 
___ 
## boolean CanShoot ()

___ 
## boolean CanTurnHead ()
returns true if head should react to keys or false otherwise 
___ 
## void CheckFamiliar (integer FamiliarVariant, integer TargetCount, RNG rng )

___ 
## void ClearCostumes ()

___ 
## void ClearDeadEyeCharge ()

___ 
## void ClearTemporaryEffects ()
Will be called when player exits the room. 
___ 
## void DischargeActiveItem ()

Sets the charge of your active item to 0 without triggering the active item effect. 
___ 
## void DonateLuck (integer Luck)

___ 
## void DoZitEffect (Vector Direction)

___ 
## void DropPoketItem (integer PocketNum, Vector Pos )

Drops a held pocketitem (Card, Pill, Rune...) from the given itemslot at the given position. Possible pocketnumbers are [0, 1]
#### Bugs
This function is spelled wrong.
Removing the pocketitem in slot 0, while having a second item in slot 1 will not update the UI correctly. The second item will still be in the second slot, which will in turn prevent the player from using this card right away. The player needs to switch between cards to fix this.
___ 
## void DropTrinket (Vector DropPos, boolean ReplaceTick )

___ 
## void EvaluateItems ()
Triggers a cache reevaluation. Will trigger the MC_EVALUATE_CACHE callback.
___ 
## EntityBomb FireBomb (Vector Position, Vector Velocity )

___ 
## EntityLaser FireBrimstone (Vector Direction)

___ 
## EntityLaser FireDelayedBrimstone (float Angle, Entity Parent )

___ 
## EntityKnife FireKnife (Entity Parent, float RotationOffset, boolean CantOverwrite, integer SubType )

___ 
## EntityTear FireTear (Vector Position, Vector Velocity, boolean CanBeEye, boolean NoTractorBeam, boolean CanTriggerStreakEnd )
This replaces the protected fire_tear() to allow other entities (Such as bombs) to easily shoot tears in the same manner and with all the effects the player does. (Ex. Sad Bombs) 
___ 
## EntityLaser FireTechLaser (Vector Position, LaserOffset OffsetID, Vector Direction, boolean LeftEye, boolean OneHit )

___ 
## EntityLaser FireTechXLaser (Vector Position, Vector Direction, float Radius )

___ 
## boolean FlushQueueItem ()
called after animation is finished, or on special occasions to prevent bugs 
___ 
## boolean FullCharge ()
Fully charges the active item. Returns true if the item was fully charged, false otherwise. If player has battery it will first try to fill first charge slot, then the battery slot. 
___ 
## integer GetActiveCharge ()

Get the current charge of your active item.
___ 
## CollectibleType GetActiveItem ()
Returns the currently held item.
___ 
## integer GetActiveSubCharge ()

Get the current items subcharge. (Useful for items that charge up over time.)
___ 
## Entity GetActiveWeaponEntity ()

___ 
## const Vector GetAimDirection ()

___ 
## BabySubType GetBabySkin ()

___ 
## integer GetBatteryCharge ()

Get the current charge progress of the second charge of your current active item. This bar is only active, when you have the Collectible "The Battery"
___ 
## integer GetBlackHearts ()
This does not return the # of black hearts, this returns the bit mask for which soul hearts are black hearts. 
___ 
## integer GetBombFlags ()

___ 
## EntityBomb::BombVariant GetBombVariant (integer TearFlags, boolean ForceSmallBomb )
Pass tear flags to add extra effects to the bomb visual like burn -&gt; hot bombs, even if player doesn't have Hot Bombs collectible. ForceSmallBomb will override large bomb variants for TEAR_PERSISTENT. 
___ 
## integer GetBoneHearts ()
Returns the number of bone hearts as an integer value. 1 Boneheart = 1.
#### Example Code
This code gets the total amount of red heart containers including bone hearts. The bonehearts need to be mulltiplied by 2, since in GetMaxHearts() 2 equals 1 full heart. 
```lua
local player = Isaac.GetPlayer(0)
player:GetMaxHearts()+player:GetBoneHearts()*2

```
___ 
## Card GetCard (integer SlotId)

Gets the ID of the card the player is holding in the given itemslot (0 or 1).
___ 
## RNG GetCardRNG (Card ID)

___ 
## integer GetCollectibleCount ()

___ 
## integer GetCollectibleNum (CollectibleType Type)

___ 
## RNG GetCollectibleRNG (CollectibleType ID)

___ 
## Vector GetCostumeNullPos (string NullFrameName, boolean HeadScale, Vector Direction )

___ 
## integer GetDamageCooldown ()

___ 
## integer GetEffectiveMaxHearts ()

Returns the amount of Red Hearts the player can contain in their Heart Containers and Bone Hearts. 1 unit is half a red heart.
**Example:** you have 3 red heart container and one bone heart. 6(red) + 2(bone) = 8 
___ 
## TemporaryEffects GetEffects ()

___ 
## integer GetEternalHearts ()

Returns the amount of eternal hearts the player has.
___ 
## integer GetExtraLives ()

___ 
## Direction GetFireDirection ()

___ 
## Vector GetFlyingOffset ()

___ 
## integer GetGoldenHearts ()

Returns the amount of golden hearts the player has.
___ 
## float GetGreedDonationBreakChance ()

___ 
## Direction GetHeadDirection ()

___ 
## integer GetHeartLimit ()

___ 
## integer GetHearts ()

Returns the amount of red hearts the player has inside their heart containers and bone hearts. 1 unit is half a heart.
___ 
## CollectibleType GetItemState ()

___ 
## integer GetJarFlies ()

___ 
## integer GetJarHearts ()

___ 
## Vector GetLaserOffset (LaserOffset ID, Vector Direction )

___ 
## integer GetLastActionTriggers ()

___ 
## integer GetLastDamageFlags ()

___ 
## const EntityRef GetLastDamageSource ()

___ 
## const Vector GetLastDirection ()

___ 
## integer GetMaxHearts ()

Returns the amount of Heart Containers the player has. 1 unit is half a heart container.
___ 
## integer GetMaxPoketItems ()

Get the number of Pickup items you can carry. (1 on default. 2 with belly button or similar)
#### Bugs
This function is spelled wrong.
___ 
## integer GetMaxTrinkets ()

Get the number of trinkets you can carry. (1 on default. 2 with moms purse or similar)
___ 
## Direction GetMovementDirection ()

___ 
## Vector GetMovementInput ()

___ 
## Vector GetMovementJoystick ()

___ 
## const Vector GetMovementVector ()

___ 
## MultiShotParams GetMultiShotParams ()

___ 
## PosVel GetMultiShotPositionVelocity (integer LoopIndex, WeaponType Weapon, Vector ShotDirection, float ShotSpeed, MultiShotParams params )
Call this function in a loop with values from 0 to MultiShotParams.NumProjectiles-1 (inclusive) 
___ 
## string GetName ()

Returns the name of the player. (Isaac, Cain, Azazel,...)
___ 
## Entity GetNPCTarget ()
normally returns the player itself. Can redirect enemy attacks to a different entity such as Best Friend 
___ 
## integer GetNumBlueFlies ()

___ 
## integer GetNumBlueSpiders ()

___ 
## integer GetNumBombs ()

___ 
## integer GetNumCoins ()

___ 
## integer GetNumKeys ()

___ 
## PillColor GetPill (integer SlotId)

Gets the ID of the pill the player is holding in the given itemslot (0 or 1).
___ 
## RNG GetPillRNG (PillEffect ID)

___ 
## PlayerType GetPlayerType ()

___ 
## const PlayerPocketItem GetPocketItem (integer SlotId)

Get the userdata of the pocketitem (Card,Pill,rune) in a said slot.
#### Bugs
This function returns userdata, which cant be processed. It is therefore broken and should not be used! 
___ 
## const Vector GetRecentMovementVector ()
Returns the joystick direction that drives player movement, taking into account certain modifiers like disabled controls and seed effects. 
___ 
## Vector GetShootingInput ()

___ 
## Vector GetShootingJoystick ()

___ 
## float GetSmoothBodyRotation ()

___ 
## integer GetSoulHearts ()

Returns the amount of Soul Hearts the player has. 1 unit is half a heart.
#### Notes
Black Hearts count toward this total, as the game sees them as soul hearts.
___ 
## EntityPlayer GetSubPlayer ()

___ 
## TearParams GetTearHitParams (WeaponType WeaponType, float DamageScale, integer TearDisplacement )
 Used for tear parameters that are calculated on hit (ex: Tough love, Common cold), DamageScale is used for scale calculation based on damage 
___ 
## Vector GetTearMovementInheritance (Vector ShotDirection)

___ 
## float GetTearPoisonDamage ()

___ 
## integer GetTearRangeModifier ()

___ 
## integer GetTotalDamageTaken ()

___ 
## Entity GetTractorBeam ()

___ 
## TrinketType GetTrinket (integer TrinketIndex)

Gets the ID of the trinket the player is holding in the given trinketslot (0 or 1).
___ 
## integer GetTrinketMultiplier ()

___ 
## RNG GetTrinketRNG (TrinketType ID)

___ 
## const Vector GetVelocityBeforeUpdate ()

___ 
## CollectibleType GetZodiacEffect ()

___ 
## boolean HasCollectible (CollectibleType Type)

___ 
## boolean HasFullHearts ()

___ 
## boolean HasFullHeartsAndSoulHearts ()

___ 
## boolean HasGoldenBomb ()

___ 
## boolean HasGoldenKey ()

___ 
## boolean HasInvincibility ()
returns true when player is in an invincibility state 
___ 
## boolean HasPlayerForm (PlayerForm Form)

___ 
## boolean HasTimedItem ()
Kept for avoiding modding issues. 
___ 
## boolean HasTrinket (TrinketType Type)

___ 
## boolean HasWeaponType (WeaponType WeaponType)

___ 
## void InitBabySkin ()

___ 
## boolean IsBlackHeart (integer Heart)

___ 
## boolean IsBoneHeart (integer heart)

___ 
## boolean IsExtraAnimationFinished ()

___ 
## boolean IsFullSpriteRendering ()

___ 
## boolean IsHeldItemVisible ()

___ 
## boolean IsHoldingItem ()
Is Player holding up an item (card/collectible/etc) 
___ 
## boolean IsItemQueueEmpty ()

___ 
## boolean IsP2Appearing ()

___ 
## boolean IsPosInSpotLight (Vector Position)

___ 
## boolean IsSubPlayer ()
This is for players that require multiple player entities, such as the Forgotten (this has nothing to do with co-players!) 
___ 
## boolean NeedsCharge ()

___ 
## void PlayExtraAnimation (string Animation)

___ 
## void QueueExtraAnimation (string Animation)

___ 
## void QueueItem (Config::Item Item, integer Charge, boolean Touched )
Add Collectible/Trinket after animation is finished. 
___ 
## void RemoveBlackHeart (integer BlackHeart)

___ 
## void RemoveBlueFly ()

___ 
## void RemoveBlueSpider ()

___ 
## void RemoveCollectible (CollectibleType Type)

___ 
## void RemoveCostume (Config::Item Item)

___ 
## void RemoveGoldenBomb ()

___ 
## void RemoveGoldenKey ()

___ 
## void RemoveSkinCostume ()

___ 
## void RenderBody (Vector position)

___ 
## void RenderGlow (Vector position)

___ 
## void RenderHead (Vector position)

___ 
## void RenderTop (Vector position)

___ 
## void ReplaceCostumeSprite (Config::Item Item, string SpritePath, integer SpriteId )

___ 
## void ResetDamageCooldown ()

___ 
## void ResetItemState ()
Made this public so <a class="el" href="class_room.html">Room</a> transtiions can call this to prevent lock ups. 
___ 
## void RespawnFamiliars ()

___ 
## void Revive ()
revive player 
___ 
## void SetActiveCharge (integer Charge)

___ 
## void SetCard (integer SlotId, Card Card )

Change the card/rune the player is holding in the given itemslot (0 or 1).
___ 
## void SetFullHearts ()

___ 
## void SetMinDamageCooldown (integer DamageCooldown)

___ 
## void SetPill (integer SlotId, PillColor Pill )

Change the pill the player is holding in the given itemslot (0 or 1).
___ 
## void SetShootingCooldown (integer Cooldown)

___ 
## void SetTargetTrapDoor (GridEntity TrapDoor)

___ 
## void ShootRedCandle (Vector Direction)
for ghost pepper item + poop and farts 
___ 
## EntityLaser SpawnMawOfVoid (integer Timeout)

___ 
## void StopExtraAnimation ()

___ 
## void SwapActiveItems ()

___ 
## Entity ThrowBlueSpider (Vector Position, Vector Target )

___ 
## boolean TryHoldTrinket (TrinketType Type)
Returns true if an active item pickup cooldown is over. returns true if trinket can be added, else false 
___ 
## void TryRemoveCollectibleCostume (CollectibleType Collectible, boolean KeepPersistent )
tries to remove a costume based on some filters 
___ 
## void TryRemoveNullCostume (Config::NullItemID NullId)

___ 
## boolean TryRemoveTrinket (TrinketType Type)

___ 
## void TryRemoveTrinketCostume (TrinketType Trinket)
tries to remove a costume based on some filters 
___ 
## boolean TryUseKey ()

___ 
## void UpdateCanShoot ()

___ 
## void UseActiveItem (CollectibleType Item, boolean ShowAnim, boolean KeepActiveItem, boolean AllowNonMainPlayer, boolean ToAddCostume )

___ 
## void UseCard (Card Card)

___ 
## void UsePill (PillEffect PillEffect, PillColor PillColor )

___ 
## boolean WillPlayerRevive ()

___ 
## BabySubType BabySkin
P2 Skin section Used to hold the selected skin (in case of glitched baby it will pick a random one) 
___ 
## boolean CanFly
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. Can the player fly over rocks and pits? 
___ 
## const integer ControllerIndex
s32 GetItemStateCooldown( void ) const { return m_ItemStateCooldown; } 
___ 
## integer ControlsCooldown

___ 
## boolean ControlsEnabled

___ 
## float Damage
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Damage Stat.**  How much damage do the players tears or other main weapons do? 
___ 
## integer FireDelay
How long until the player can spawn their next tear? 
___ 
## const EntityDesc FriendBallEnemy

___ 
## integer HeadFrameDelay

___ 
## integer ItemHoldCooldown
Used for avoiding player get stucked between rocks when switching a flying item with other active item. 
___ 
## Color LaserColor

___ 
## float Luck
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Luck Stat.**  Better luck generally means better random events. 
___ 
## integer MaxFireDelay
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Tears Stat.**  How long between each tear can spawn? 
___ 
## float MoveSpeed
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Speed Stat.**  How fast can the player move? 
___ 
## QueueItemData QueuedItem
item queue for when the player is picking up an item. the item is in effect as soon as the animation is finished and will be removed from the queue. 
___ 
## ActiveItemDesc SecondaryActiveItem

___ 
## float ShotSpeed
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the ShotSpeed Stat.**  How fast does the tear travel when spawned? 
___ 
## Vector SpriteScale

___ 
## Color TearColor

___ 
## float TearFallingAcceleration

___ 
## float TearFallingSpeed
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. How fast is the tear moving up or down when it spawns? Affects range. 
___ 
## integer TearFlags
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. Various <a href="group__enums.html#ga497749198295d1f3d5ecd1c6d5ea2cce">tear flags</a>. 
#### Example Code
This code makes Isaac's tears spectral. 
```lua
local mod:OnEvaluateTearFlags(player, flag)
    player.TearFlags = player.TearFlags | TearFlags.TEAR_SPECTRAL
end

mod:AddCallback(ModCallbacks.MC_EVALUATE_CACHE, mod.OnEvaluateTearFlags, CacheFlag.CACHE_TEARFLAG)

```
___ 
## float TearHeight
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Range Stat * -1.**  How high above the ground is the tear when it spawns? 
#### Example Code
This code gives Isaac a +5 range up.
```lua
local mod:OnEvaluateRange(player, flag)
    -- we give -5 because the TearHeight stat is always negative; the lower the number - the further the tear travels
    player.TearHeight = player.TearHeight - 5
end

mod:AddCallback(ModCallbacks.MC_EVALUATE_CACHE, mod.OnEvaluateRange, CacheFlag.CACHE_RANGE)

```
___ 
## const Vector TearsOffset

___ 
