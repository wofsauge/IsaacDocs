# Class "EntityPlayer"
## Functions
[ ](#){: .abp .tooltip .badge }
### AddBlackHearts () {: aria-label='Functions' }
#### void AddBlackHearts ( int BlackHearts ) {: .copyable aria-label='Functions' }

Adds Black hearts to the player. 1 unit is half a heart. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 full black heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddBlackHearts(2)
    ```

___ 
[ ](#){: .abp .tooltip .badge }
### AddBlueFlies () {: aria-label='Functions' }
#### [Entity](../Entity) AddBlueFlies ( int Amount, [Vector](../Vector) Position, [Entity](../Entity) Target ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddBlueSpider () {: aria-label='Functions' }
#### [Entity](../Entity) AddBlueSpider ( [Vector](../Vector) Position ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddBombs () {: aria-label='Functions' }
#### void AddBombs ( int Amount ) {: .copyable aria-label='Functions' }

Adds bombs to the player. Remove them with negative numbers. 

???- example "Example Code"
    This code removes 1 bomb from the player.
    ```lua 
    Isaac.GetPlayer(0):AddBombs(-1)
    ```

___ 
[ ](#){: .abp .tooltip .badge }
### AddBoneHearts () {: aria-label='Functions' }
#### void AddBoneHearts ( int Hearts ) {: .copyable aria-label='Functions' }

Adds bone hearts to the player. 1 unit is a single bone heart. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 bone heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddBoneHearts(1)
    ```

___ 
[ ](#){: .abp .tooltip .badge }
### AddCacheFlags () {: aria-label='Functions' }
#### void AddCacheFlags ( [CacheFlag](../enums/CacheFlag) CacheFlag ) {: .copyable aria-label='Functions' }
Will reevaluate the cache flags provided in the next cache reevaluation.
___ 
[ ](#){: .abp .tooltip .badge }
### AddCard () {: aria-label='Functions' }
#### void AddCard ( [Card](../ItemConfig_Card) Card ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddCoins () {: aria-label='Functions' }
#### void AddCoins ( int Amount ) {: .copyable aria-label='Functions' }

Adds coins to the player. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 coin to the player.
    ```lua 
    Isaac.GetPlayer(0):AddCoins(1)
    ```

___ 
[ ](#){: .abp .tooltip .badge }
### AddCollectible () {: aria-label='Functions' }
#### void AddCollectible ( [CollectibleType](../enums/CollectibleType) Type, int Charge, boolean AddConsumables ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddControlsCooldown () {: aria-label='Functions' }
#### void AddControlsCooldown ( int Cooldown ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddCostume () {: aria-label='Functions' }
#### void AddCostume ( Config::Item Item, boolean ItemStateOnly ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddDeadEyeCharge () {: aria-label='Functions' }
#### void AddDeadEyeCharge ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddDollarBillEffect () {: aria-label='Functions' }
#### void AddDollarBillEffect ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddEternalHearts () {: aria-label='Functions' }
#### void AddEternalHearts ( int EternalHearts ) {: .copyable aria-label='Functions' }

Adds eternal hearts to the player. 1 unit is half a heart. Remove them with negative numbers. 

(Note that eternal hearts automatically turn to full hearts, when you have more than one.) 

???- example "Example Code"
    This code adds 1 eternal heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddEternalHearts(1)
    ```

___ 
[ ](#){: .abp .tooltip .badge }
### AddGoldenBomb () {: aria-label='Functions' }
#### void AddGoldenBomb ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddGoldenHearts () {: aria-label='Functions' }
#### void AddGoldenHearts ( int Hearts ) {: .copyable aria-label='Functions' }

Adds golden hearts to the player. 1 unit is a single gold heart. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 golden heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddGoldenHearts(1)
    ```

___ 
[ ](#){: .abp .tooltip .badge }
### AddGoldenKey () {: aria-label='Functions' }
#### void AddGoldenKey ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddHearts () {: aria-label='Functions' }
#### void AddHearts ( int Hearts ) {: .copyable aria-label='Functions' }

Adds red hearts to the player if there are any empty heart containers. 1 unit is half a heart. Remove health with negative numbers. 

???- example "Example Code"
    This code adds 1 full red heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddHearts(2)
    ```

___ 
[ ](#){: .abp .tooltip .badge }
### AddJarFlies () {: aria-label='Functions' }
#### void AddJarFlies ( int Flies ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddJarHearts () {: aria-label='Functions' }
#### void AddJarHearts ( int Hearts ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddKeys () {: aria-label='Functions' }
#### void AddKeys ( int Amount ) {: .copyable aria-label='Functions' }

Adds keys to the player. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 key to the player.
    ```lua 
    Isaac.GetPlayer(0):AddKeys(1)
    ```

___ 
[ ](#){: .abp .tooltip .badge }
### AddMaxHearts () {: aria-label='Functions' }
#### void AddMaxHearts ( int MaxHearts, boolean IgnoreKeeper ) {: .copyable aria-label='Functions' }

Adds heart containers to the player. 2 units is a full heart container. Remove them with negative numbers. 

???- note "Notes"
    It is possible to add a half heart container to the player. This will appear as a regular heart container but can only be filled half-way.

???- example "Example Code"
    This code adds 1 heart container to the player.
    ```lua 
    Isaac.GetPlayer(0):AddMaxHearts(2,true)
    ```


???+ bug "Bugs"
    IgnoreKeeper does not appear to work as intended.
    
    Max hearts can be added or removed from Keeper regardless of what this boolean is.
    If Keeper has Greed's Gullet and this boolean is set to false, max hearts cannot be added to Keeper, but can be removed normally.
    If Keeper has Greed's Gullet and this boolean is set to true, Max hearts can be added or removed from Keeper normally.
___ 
[ ](#){: .abp .tooltip .badge }
### AddNullCostume () {: aria-label='Functions' }
#### void AddNullCostume ( Config::NullItemID NullId ) {: .copyable aria-label='Functions' }
for Lua 
___ 
[ ](#){: .abp .tooltip .badge }
### AddPill () {: aria-label='Functions' }
#### void AddPill ( [PillColor](../enums/PillColor) Pill ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddPlayerFormCostume () {: aria-label='Functions' }
#### void AddPlayerFormCostume ( [PlayerForm](../enums/PlayerForm) Form ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddPrettyFly () {: aria-label='Functions' }
#### void AddPrettyFly ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddSoulHearts () {: aria-label='Functions' }
#### void AddSoulHearts ( int SoulHearts ) {: .copyable aria-label='Functions' }

Adds soul hearts to the player. 1 unit is half a heart. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 full soul heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddSoulHearts(2)
    ```

___ 
[ ](#){: .abp .tooltip .badge }
### AddTrinket () {: aria-label='Functions' }
#### void AddTrinket ( [TrinketType](../enums/TrinketType) Type ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AnimateAppear () {: aria-label='Functions' }
#### void AnimateAppear ( ) {: .copyable aria-label='Functions' }
Play the animation that is normally played at the beginning of a stage. 
___ 
[ ](#){: .abp .tooltip .badge }
### AnimateCard () {: aria-label='Functions' }
#### void AnimateCard ( [Card](../ItemConfig_Card) Card, string AnimName ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AnimateCollectible () {: aria-label='Functions' }
#### void AnimateCollectible ( [CollectibleType](../enums/CollectibleType) Collectible, string AnimName, string SpriteAnimName ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AnimateHappy () {: aria-label='Functions' }
#### void AnimateHappy ( ) {: .copyable aria-label='Functions' }
thumbs up 
___ 
[ ](#){: .abp .tooltip .badge }
### AnimateLightTravel () {: aria-label='Functions' }
#### void AnimateLightTravel ( ) {: .copyable aria-label='Functions' }
end of a stage 
___ 
[ ](#){: .abp .tooltip .badge }
### AnimatePill () {: aria-label='Functions' }
#### void AnimatePill ( [PillColor](../enums/PillColor) Pill, string AnimName ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AnimatePitfallIn () {: aria-label='Functions' }
#### void AnimatePitfallIn ( ) {: .copyable aria-label='Functions' }
Fall into pitfall. 
___ 
[ ](#){: .abp .tooltip .badge }
### AnimatePitfallOut () {: aria-label='Functions' }
#### void AnimatePitfallOut ( ) {: .copyable aria-label='Functions' }
Jump out of pitfall. 
___ 
[ ](#){: .abp .tooltip .badge }
### AnimateSad () {: aria-label='Functions' }
#### void AnimateSad ( ) {: .copyable aria-label='Functions' }
oh no! 
___ 
[ ](#){: .abp .tooltip .badge }
### AnimateTeleport () {: aria-label='Functions' }
#### void AnimateTeleport ( boolean Up ) {: .copyable aria-label='Functions' }
teleport to another room 
___ 
[ ](#){: .abp .tooltip .badge }
### AnimateTrapdoor () {: aria-label='Functions' }
#### void AnimateTrapdoor ( ) {: .copyable aria-label='Functions' }
end of a stage 
___ 
[ ](#){: .abp .tooltip .badge }
### AnimateTrinket () {: aria-label='Functions' }
#### void AnimateTrinket ( [TrinketType](../enums/TrinketType) Trinket, string AnimName, string SpriteAnimName ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AreControlsEnabled () {: aria-label='Functions' }
#### boolean AreControlsEnabled ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AreOpposingShootDirectionsPressed () {: aria-label='Functions' }
#### boolean AreOpposingShootDirectionsPressed ( ) {: .copyable aria-label='Functions' }
Returns the non-zero joystick direction from the most recent movement input, but goes to zero after the player comes to a stop. 
___ 
[ ](#){: .abp .tooltip .badge }
### CanAddCollectible () {: aria-label='Functions' }
#### boolean CanAddCollectible ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### CanPickBlackHearts () {: aria-label='Functions' }
#### boolean CanPickBlackHearts ( ) {: .copyable aria-label='Functions' }
returns true if player has room for more black hearts 
___ 
[ ](#){: .abp .tooltip .badge }
### CanPickBoneHearts () {: aria-label='Functions' }
#### boolean CanPickBoneHearts ( ) {: .copyable aria-label='Functions' }
returns true if player has room for more bone hearts 
___ 
[ ](#){: .abp .tooltip .badge }
### CanPickGoldenHearts () {: aria-label='Functions' }
#### boolean CanPickGoldenHearts ( ) {: .copyable aria-label='Functions' }
returns true if player has room for more golden hearts 
___ 
[ ](#){: .abp .tooltip .badge }
### CanPickRedHearts () {: aria-label='Functions' }
#### boolean CanPickRedHearts ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### CanPickSoulHearts () {: aria-label='Functions' }
#### boolean CanPickSoulHearts ( ) {: .copyable aria-label='Functions' }
returns true if player has room for more soul hearts 
___ 
[ ](#){: .abp .tooltip .badge }
### CanPickupItem () {: aria-label='Functions' }
#### boolean CanPickupItem ( ) {: .copyable aria-label='Functions' }
Can Player pick up an item right now? 
___ 
[ ](#){: .abp .tooltip .badge }
### CanShoot () {: aria-label='Functions' }
#### boolean CanShoot ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### CanTurnHead () {: aria-label='Functions' }
#### boolean CanTurnHead ( ) {: .copyable aria-label='Functions' }
returns true if head should react to keys or false otherwise 
___ 
[ ](#){: .abp .tooltip .badge }
### CheckFamiliar () {: aria-label='Functions' }
#### void CheckFamiliar ( int FamiliarVariant, int TargetCount, [RNG](../RNG) rng ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ClearCostumes () {: aria-label='Functions' }
#### void ClearCostumes ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ClearDeadEyeCharge () {: aria-label='Functions' }
#### void ClearDeadEyeCharge ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ClearTemporaryEffects () {: aria-label='Functions' }
#### void ClearTemporaryEffects ( ) {: .copyable aria-label='Functions' }
Will be called when player exits the room. 
___ 
[ ](#){: .abp .tooltip .badge }
### DischargeActiveItem () {: aria-label='Functions' }
#### void DischargeActiveItem ( ) {: .copyable aria-label='Functions' }

Sets the charge of your active item to 0 without triggering the active item effect. 
___ 
[ ](#){: .abp .tooltip .badge }
### DonateLuck () {: aria-label='Functions' }
#### void DonateLuck ( int Luck ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### DoZitEffect () {: aria-label='Functions' }
#### void DoZitEffect ( [Vector](../Vector) Direction ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### DropPoketItem () {: aria-label='Functions' }
#### void DropPoketItem ( int PocketNum, [Vector](../Vector) Pos ) {: .copyable aria-label='Functions' }

Drops a held pocketitem (Card, Pill, Rune...) from the given itemslot at the given position. Possible pocketnumbers are [0, 1]

???+ bug "Bugs"
    This function is spelled wrong.
    Removing the pocketitem in slot 0, while having a second item in slot 1 will not update the UI correctly. The second item will still be in the second slot, which will in turn prevent the player from using this card right away. The player needs to switch between cards to fix this.
___ 
[ ](#){: .abp .tooltip .badge }
### DropTrinket () {: aria-label='Functions' }
#### void DropTrinket ( [Vector](../Vector) DropPos, boolean ReplaceTick ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### EvaluateItems () {: aria-label='Functions' }
#### void EvaluateItems ( ) {: .copyable aria-label='Functions' }
Triggers a cache reevaluation. Will trigger the MC_EVALUATE_CACHE callback.
___ 
[ ](#){: .abp .tooltip .badge }
### FireBomb () {: aria-label='Functions' }
#### [EntityBomb](../EntityBomb) FireBomb ( [Vector](../Vector) Position, [Vector](../Vector) Velocity ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### FireBrimstone () {: aria-label='Functions' }
#### [EntityLaser](../EntityLaser) FireBrimstone ( [Vector](../Vector) Direction ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### FireDelayedBrimstone () {: aria-label='Functions' }
#### [EntityLaser](../EntityLaser) FireDelayedBrimstone ( float Angle, [Entity](../Entity) Parent ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### FireKnife () {: aria-label='Functions' }
#### [EntityKnife](../EntityKnife) FireKnife ( [Entity](../Entity) Parent, float RotationOffset, boolean CantOverwrite, int SubType ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### FireTear () {: aria-label='Functions' }
#### [EntityTear](../EntityTear) FireTear ( [Vector](../Vector) Position, [Vector](../Vector) Velocity, boolean CanBeEye, boolean NoTractorBeam, boolean CanTriggerStreakEnd ) {: .copyable aria-label='Functions' }
This replaces the protected fire_tear() to allow other entities (Such as bombs) to easily shoot tears in the same manner and with all the effects the player does. (Ex. Sad Bombs) 
___ 
[ ](#){: .abp .tooltip .badge }
### FireTechLaser () {: aria-label='Functions' }
#### [EntityLaser](../EntityLaser) FireTechLaser ( [Vector](../Vector) Position, [LaserOffset](../enums/LaserOffset) OffsetID, [Vector](../Vector) Direction, boolean LeftEye, boolean OneHit ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### FireTechXLaser () {: aria-label='Functions' }
#### [EntityLaser](../EntityLaser) FireTechXLaser ( [Vector](../Vector) Position, [Vector](../Vector) Direction, float Radius ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### FlushQueueItem () {: aria-label='Functions' }
#### boolean FlushQueueItem ( ) {: .copyable aria-label='Functions' }
called after animation is finished, or on special occasions to prevent bugs 
___ 
[ ](#){: .abp .tooltip .badge }
### FullCharge () {: aria-label='Functions' }
#### boolean FullCharge ( ) {: .copyable aria-label='Functions' }
Fully charges the active item. Returns true if the item was fully charged, false otherwise. If player has battery it will first try to fill first charge slot, then the battery slot. 
___ 
[ ](#){: .abp .tooltip .badge }
### GetActiveCharge () {: aria-label='Functions' }
#### int GetActiveCharge ( ) {: .copyable aria-label='Functions' }

Get the current charge of your active item.
___ 
[ ](#){: .abp .tooltip .badge }
### GetActiveItem () {: aria-label='Functions' }
#### [CollectibleType](../enums/CollectibleType) GetActiveItem ( ) {: .copyable aria-label='Functions' }
Returns the currently held item.
___ 
[ ](#){: .abp .tooltip .badge }
### GetActiveSubCharge () {: aria-label='Functions' }
#### int GetActiveSubCharge ( ) {: .copyable aria-label='Functions' }

Get the current items subcharge. (Useful for items that charge up over time.)
___ 
[ ](#){: .abp .tooltip .badge }
### GetActiveWeaponEntity () {: aria-label='Functions' }
#### [Entity](../Entity) GetActiveWeaponEntity ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetAimDirection () {: aria-label='Functions' }
####  [Vector](../Vector) GetAimDirection ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetBabySkin () {: aria-label='Functions' }
#### [BabySubType](../enums/BabySubType) GetBabySkin ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetBatteryCharge () {: aria-label='Functions' }
#### int GetBatteryCharge ( ) {: .copyable aria-label='Functions' }

Get the current charge progress of the second charge of your current active item. This bar is only active, when you have the Collectible "The Battery"
___ 
[ ](#){: .abp .tooltip .badge }
### GetBlackHearts () {: aria-label='Functions' }
#### int GetBlackHearts ( ) {: .copyable aria-label='Functions' }
This does not return the # of black hearts, this returns the bit mask for which soul hearts are black hearts. 
___ 
[ ](#){: .abp .tooltip .badge }
### GetBombFlags () {: aria-label='Functions' }
#### int GetBombFlags ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetBombVariant () {: aria-label='Functions' }
#### EntityBomb::BombVariant GetBombVariant ( int TearFlags, boolean ForceSmallBomb ) {: .copyable aria-label='Functions' }
Pass tear flags to add extra effects to the bomb visual like burn -&gt; hot bombs, even if player doesn't have Hot Bombs collectible. ForceSmallBomb will override large bomb variants for TEAR_PERSISTENT. 
___ 
[ ](#){: .abp .tooltip .badge }
### GetBoneHearts () {: aria-label='Functions' }
#### int GetBoneHearts ( ) {: .copyable aria-label='Functions' }
Returns the number of bone hearts as an integer value. 1 Boneheart = 1.

???- example "Example Code"
    This code gets the total amount of red heart containers including bone hearts. The bonehearts need to be mulltiplied by 2, since in GetMaxHearts() 2 equals 1 full heart. 
    ```lua 
    local player = Isaac.GetPlayer(0)
    player:GetMaxHearts()+player:GetBoneHearts()*2
    
    ```

___ 
[ ](#){: .abp .tooltip .badge }
### GetCard () {: aria-label='Functions' }
#### [Card](../ItemConfig_Card) GetCard ( int SlotId ) {: .copyable aria-label='Functions' }

Gets the ID of the card the player is holding in the given itemslot (0 or 1).
___ 
[ ](#){: .abp .tooltip .badge }
### GetCardRNG () {: aria-label='Functions' }
#### [RNG](../RNG) GetCardRNG ( [Card](../ItemConfig_Card) ID ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCollectibleCount () {: aria-label='Functions' }
#### int GetCollectibleCount ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCollectibleNum () {: aria-label='Functions' }
#### int GetCollectibleNum ( [CollectibleType](../enums/CollectibleType) Type ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCollectibleRNG () {: aria-label='Functions' }
#### [RNG](../RNG) GetCollectibleRNG ( [CollectibleType](../enums/CollectibleType) ID ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCostumeNullPos () {: aria-label='Functions' }
#### [Vector](../Vector) GetCostumeNullPos ( string NullFrameName, boolean HeadScale, [Vector](../Vector) [Direction](../enums/Direction ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetDamageCooldown () {: aria-label='Functions' }
#### int GetDamageCooldown ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetEffectiveMaxHearts () {: aria-label='Functions' }
#### int GetEffectiveMaxHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of Red Hearts the player can contain in their Heart Containers and Bone Hearts. 1 unit is half a red heart.
**Example:** you have 3 red heart container and one bone heart. 6(red) + 2(bone) = 8 
___ 
[ ](#){: .abp .tooltip .badge }
### GetEffects () {: aria-label='Functions' }
#### [TemporaryEffects](../TemporaryEffects) GetEffects ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetEternalHearts () {: aria-label='Functions' }
#### int GetEternalHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of eternal hearts the player has.
___ 
[ ](#){: .abp .tooltip .badge }
### GetExtraLives () {: aria-label='Functions' }
#### int GetExtraLives ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetFireDirection () {: aria-label='Functions' }
#### [Direction](../enums/Direction) GetFireDirection ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetFlyingOffset () {: aria-label='Functions' }
#### [Vector](../Vector) GetFlyingOffset ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetGoldenHearts () {: aria-label='Functions' }
#### int GetGoldenHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of golden hearts the player has.
___ 
[ ](#){: .abp .tooltip .badge }
### GetGreedDonationBreakChance () {: aria-label='Functions' }
#### float GetGreedDonationBreakChance ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetHeadDirection () {: aria-label='Functions' }
#### [Direction](../enums/Direction) GetHeadDirection ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetHeartLimit () {: aria-label='Functions' }
#### int GetHeartLimit ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetHearts () {: aria-label='Functions' }
#### int GetHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of red hearts the player has inside their heart containers and bone hearts. 1 unit is half a heart.
___ 
[ ](#){: .abp .tooltip .badge }
### GetItemState () {: aria-label='Functions' }
#### [CollectibleType](../enums/CollectibleType) GetItemState ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetJarFlies () {: aria-label='Functions' }
#### int GetJarFlies ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetJarHearts () {: aria-label='Functions' }
#### int GetJarHearts ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetLaserOffset () {: aria-label='Functions' }
#### [Vector](../Vector) GetLaserOffset ( [LaserOffset](../enums/LaserOffset) ID, [Vector](../Vector) [Direction](../enums/Direction ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetLastActionTriggers () {: aria-label='Functions' }
#### int GetLastActionTriggers ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetLastDamageFlags () {: aria-label='Functions' }
#### int GetLastDamageFlags ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetLastDamageSource () {: aria-label='Functions' }
####  [EntityRef](../EntityRef) GetLastDamageSource ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetLastDirection () {: aria-label='Functions' }
####  [Vector](../Vector) GetLastDirection ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetMaxHearts () {: aria-label='Functions' }
#### int GetMaxHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of Heart Containers the player has. 1 unit is half a heart container.
___ 
[ ](#){: .abp .tooltip .badge }
### GetMaxPoketItems () {: aria-label='Functions' }
#### int GetMaxPoketItems ( ) {: .copyable aria-label='Functions' }

Get the number of Pickup items you can carry. (1 on default. 2 with belly button or similar)

???+ bug "Bugs"
    This function is spelled wrong.
___ 
[ ](#){: .abp .tooltip .badge }
### GetMaxTrinkets () {: aria-label='Functions' }
#### int GetMaxTrinkets ( ) {: .copyable aria-label='Functions' }

Get the number of trinkets you can carry. (1 on default. 2 with moms purse or similar)
___ 
[ ](#){: .abp .tooltip .badge }
### GetMovementDirection () {: aria-label='Functions' }
#### [Direction](../enums/Direction) GetMovementDirection ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetMovementInput () {: aria-label='Functions' }
#### [Vector](../Vector) GetMovementInput ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetMovementJoystick () {: aria-label='Functions' }
#### [Vector](../Vector) GetMovementJoystick ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetMovementVector () {: aria-label='Functions' }
####  [Vector](../Vector) GetMovementVector ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetMultiShotParams () {: aria-label='Functions' }
#### MultiShotParams GetMultiShotParams ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetMultiShotPositionVelocity () {: aria-label='Functions' }
#### [PosVel](../PlayerTypes_PosVel) GetMultiShotPositionVelocity ( int LoopIndex, [WeaponType](../enums/WeaponType) Weapon, [Vector](../Vector) ShotDirection, float ShotSpeed, MultiShotParams params ) {: .copyable aria-label='Functions' }
Call this function in a loop with values from 0 to MultiShotParams.NumProjectiles-1 (inclusive) 
___ 
[ ](#){: .abp .tooltip .badge }
### GetName () {: aria-label='Functions' }
#### string GetName ( ) {: .copyable aria-label='Functions' }

Returns the name of the player. (Isaac, Cain, Azazel,...)
___ 
[ ](#){: .abp .tooltip .badge }
### GetNPCTarget () {: aria-label='Functions' }
#### [Entity](../Entity) GetNPCTarget ( ) {: .copyable aria-label='Functions' }
normally returns the player itself. Can redirect enemy attacks to a different entity such as Best Friend 
___ 
[ ](#){: .abp .tooltip .badge }
### GetNumBlueFlies () {: aria-label='Functions' }
#### int GetNumBlueFlies ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetNumBlueSpiders () {: aria-label='Functions' }
#### int GetNumBlueSpiders ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetNumBombs () {: aria-label='Functions' }
#### int GetNumBombs ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetNumCoins () {: aria-label='Functions' }
#### int GetNumCoins ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetNumKeys () {: aria-label='Functions' }
#### int GetNumKeys ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetPill () {: aria-label='Functions' }
#### [PillColor](../enums/PillColor) GetPill ( int SlotId ) {: .copyable aria-label='Functions' }

Gets the ID of the pill the player is holding in the given itemslot (0 or 1).
___ 
[ ](#){: .abp .tooltip .badge }
### GetPillRNG () {: aria-label='Functions' }
#### [RNG](../RNG) GetPillRNG ( [PillEffect](../ItemConfig_PillEffect) ID ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetPlayerType () {: aria-label='Functions' }
#### [PlayerType](../enums/PlayerType) GetPlayerType ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetPocketItem () {: aria-label='Functions' }
####  PlayerPocketItem GetPocketItem ( int SlotId ) {: .copyable aria-label='Functions' }

Get the userdata of the pocketitem (Card,Pill,rune) in a said slot.

???+ bug "Bugs"
    This function returns userdata, which cant be processed. It is therefore broken and should not be used! 
___ 
[ ](#){: .abp .tooltip .badge }
### GetRecentMovementVector () {: aria-label='Functions' }
####  [Vector](../Vector) GetRecentMovementVector ( ) {: .copyable aria-label='Functions' }
Returns the joystick direction that drives player movement, taking into account certain modifiers like disabled controls and seed effects. 
___ 
[ ](#){: .abp .tooltip .badge }
### GetShootingInput () {: aria-label='Functions' }
#### [Vector](../Vector) GetShootingInput ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetShootingJoystick () {: aria-label='Functions' }
#### [Vector](../Vector) GetShootingJoystick ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetSmoothBodyRotation () {: aria-label='Functions' }
#### float GetSmoothBodyRotation ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetSoulHearts () {: aria-label='Functions' }
#### int GetSoulHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of Soul Hearts the player has. 1 unit is half a heart.

???- note "Notes"
    Black Hearts count toward this total, as the game sees them as soul hearts.
___ 
[ ](#){: .abp .tooltip .badge }
### GetSubPlayer () {: aria-label='Functions' }
#### [EntityPlayer](../EntityPlayer) GetSubPlayer ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetTearHitParams () {: aria-label='Functions' }
#### [TearParams](../TearParams) GetTearHitParams ( [WeaponType](../enums/WeaponType) WeaponType, float DamageScale, int TearDisplacement ) {: .copyable aria-label='Functions' }
 Used for tear parameters that are calculated on hit (ex: Tough love, Common cold), DamageScale is used for scale calculation based on damage 
___ 
[ ](#){: .abp .tooltip .badge }
### GetTearMovementInheritance () {: aria-label='Functions' }
#### [Vector](../Vector) GetTearMovementInheritance ( [Vector](../Vector) ShotDirection ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetTearPoisonDamage () {: aria-label='Functions' }
#### float GetTearPoisonDamage ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetTearRangeModifier () {: aria-label='Functions' }
#### int GetTearRangeModifier ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetTotalDamageTaken () {: aria-label='Functions' }
#### int GetTotalDamageTaken ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetTractorBeam () {: aria-label='Functions' }
#### [Entity](../Entity) GetTractorBeam ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetTrinket () {: aria-label='Functions' }
#### [TrinketType](../enums/TrinketType) GetTrinket ( int TrinketIndex ) {: .copyable aria-label='Functions' }

Gets the ID of the trinket the player is holding in the given trinketslot (0 or 1).
___ 
[ ](#){: .abp .tooltip .badge }
### GetTrinketMultiplier () {: aria-label='Functions' }
#### int GetTrinketMultiplier ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetTrinketRNG () {: aria-label='Functions' }
#### [RNG](../RNG) GetTrinketRNG ( [TrinketType](../enums/TrinketType) ID ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetVelocityBeforeUpdate () {: aria-label='Functions' }
####  [Vector](../Vector) GetVelocityBeforeUpdate ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetZodiacEffect () {: aria-label='Functions' }
#### [CollectibleType](../enums/CollectibleType) GetZodiacEffect ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasCollectible () {: aria-label='Functions' }
#### boolean HasCollectible ( [CollectibleType](../enums/CollectibleType) Type ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasFullHearts () {: aria-label='Functions' }
#### boolean HasFullHearts ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasFullHeartsAndSoulHearts () {: aria-label='Functions' }
#### boolean HasFullHeartsAndSoulHearts ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasGoldenBomb () {: aria-label='Functions' }
#### boolean HasGoldenBomb ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasGoldenKey () {: aria-label='Functions' }
#### boolean HasGoldenKey ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasInvincibility () {: aria-label='Functions' }
#### boolean HasInvincibility ( ) {: .copyable aria-label='Functions' }
returns true when player is in an invincibility state 
___ 
[ ](#){: .abp .tooltip .badge }
### HasPlayerForm () {: aria-label='Functions' }
#### boolean HasPlayerForm ( [PlayerForm](../enums/PlayerForm) Form ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasTimedItem () {: aria-label='Functions' }
#### boolean HasTimedItem ( ) {: .copyable aria-label='Functions' }
Kept for avoiding modding issues. 
___ 
[ ](#){: .abp .tooltip .badge }
### HasTrinket () {: aria-label='Functions' }
#### boolean HasTrinket ( [TrinketType](../enums/TrinketType) Type ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasWeaponType () {: aria-label='Functions' }
#### boolean HasWeaponType ( [WeaponType](../enums/WeaponType) WeaponType ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### InitBabySkin () {: aria-label='Functions' }
#### void InitBabySkin ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsBlackHeart () {: aria-label='Functions' }
#### boolean IsBlackHeart ( int Heart ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsBoneHeart () {: aria-label='Functions' }
#### boolean IsBoneHeart ( int heart ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsExtraAnimationFinished () {: aria-label='Functions' }
#### boolean IsExtraAnimationFinished ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsFullSpriteRendering () {: aria-label='Functions' }
#### boolean IsFullSpriteRendering ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsHeldItemVisible () {: aria-label='Functions' }
#### boolean IsHeldItemVisible ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsHoldingItem () {: aria-label='Functions' }
#### boolean IsHoldingItem ( ) {: .copyable aria-label='Functions' }
Is Player holding up an item (card/collectible/etc) 
___ 
[ ](#){: .abp .tooltip .badge }
### IsItemQueueEmpty () {: aria-label='Functions' }
#### boolean IsItemQueueEmpty ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsP2Appearing () {: aria-label='Functions' }
#### boolean IsP2Appearing ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsPosInSpotLight () {: aria-label='Functions' }
#### boolean IsPosInSpotLight ( [Vector](../Vector) Position ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsSubPlayer () {: aria-label='Functions' }
#### boolean IsSubPlayer ( ) {: .copyable aria-label='Functions' }
This is for players that require multiple player entities, such as the Forgotten (this has nothing to do with co-players!) 
___ 
[ ](#){: .abp .tooltip .badge }
### NeedsCharge () {: aria-label='Functions' }
#### boolean NeedsCharge ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### PlayExtraAnimation () {: aria-label='Functions' }
#### void PlayExtraAnimation ( string Animation ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### QueueExtraAnimation () {: aria-label='Functions' }
#### void QueueExtraAnimation ( string Animation ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### QueueItem () {: aria-label='Functions' }
#### void QueueItem ( Config::Item Item, int Charge, boolean Touched ) {: .copyable aria-label='Functions' }
Add Collectible/Trinket after animation is finished. 
___ 
[ ](#){: .abp .tooltip .badge }
### RemoveBlackHeart () {: aria-label='Functions' }
#### void RemoveBlackHeart ( int BlackHeart ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveBlueFly () {: aria-label='Functions' }
#### void RemoveBlueFly ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveBlueSpider () {: aria-label='Functions' }
#### void RemoveBlueSpider ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveCollectible () {: aria-label='Functions' }
#### void RemoveCollectible ( [CollectibleType](../enums/CollectibleType) Type ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveCostume () {: aria-label='Functions' }
#### void RemoveCostume ( Config::Item Item ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveGoldenBomb () {: aria-label='Functions' }
#### void RemoveGoldenBomb ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveGoldenKey () {: aria-label='Functions' }
#### void RemoveGoldenKey ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveSkinCostume () {: aria-label='Functions' }
#### void RemoveSkinCostume ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RenderBody () {: aria-label='Functions' }
#### void RenderBody ( [Vector](../Vector) position ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RenderGlow () {: aria-label='Functions' }
#### void RenderGlow ( [Vector](../Vector) position ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RenderHead () {: aria-label='Functions' }
#### void RenderHead ( [Vector](../Vector) position ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RenderTop () {: aria-label='Functions' }
#### void RenderTop ( [Vector](../Vector) position ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ReplaceCostumeSprite () {: aria-label='Functions' }
#### void ReplaceCostumeSprite ( Config::Item Item, string SpritePath, int SpriteId ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ResetDamageCooldown () {: aria-label='Functions' }
#### void ResetDamageCooldown ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ResetItemState () {: aria-label='Functions' }
#### void ResetItemState ( ) {: .copyable aria-label='Functions' }
Made this public so <a class="el" href="class_room.html">Room</a> transtiions can call this to prevent lock ups.  WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### RespawnFamiliars () {: aria-label='Functions' }
#### void RespawnFamiliars ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Revive () {: aria-label='Functions' }
#### void Revive ( ) {: .copyable aria-label='Functions' }
revive player 
___ 
[ ](#){: .abp .tooltip .badge }
### SetActiveCharge () {: aria-label='Functions' }
#### void SetActiveCharge ( int Charge ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetCard () {: aria-label='Functions' }
#### void SetCard ( int SlotId, [Card](../ItemConfig_Card) [Card](../ItemConfig_Card ) {: .copyable aria-label='Functions' }

Change the card/rune the player is holding in the given itemslot (0 or 1).
___ 
[ ](#){: .abp .tooltip .badge }
### SetFullHearts () {: aria-label='Functions' }
#### void SetFullHearts ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetMinDamageCooldown () {: aria-label='Functions' }
#### void SetMinDamageCooldown ( int DamageCooldown ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetPill () {: aria-label='Functions' }
#### void SetPill ( int SlotId, [PillColor](../enums/PillColor) Pill ) {: .copyable aria-label='Functions' }

Change the pill the player is holding in the given itemslot (0 or 1).
___ 
[ ](#){: .abp .tooltip .badge }
### SetShootingCooldown () {: aria-label='Functions' }
#### void SetShootingCooldown ( int Cooldown ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetTargetTrapDoor () {: aria-label='Functions' }
#### void SetTargetTrapDoor ( [GridEntity](../GridEntity) TrapDoor ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ShootRedCandle () {: aria-label='Functions' }
#### void ShootRedCandle ( [Vector](../Vector) Direction ) {: .copyable aria-label='Functions' }
for ghost pepper item + poop and farts 
___ 
[ ](#){: .abp .tooltip .badge }
### SpawnMawOfVoid () {: aria-label='Functions' }
#### [EntityLaser](../EntityLaser) SpawnMawOfVoid ( int Timeout ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### StopExtraAnimation () {: aria-label='Functions' }
#### void StopExtraAnimation ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SwapActiveItems () {: aria-label='Functions' }
#### void SwapActiveItems ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ThrowBlueSpider () {: aria-label='Functions' }
#### [Entity](../Entity) ThrowBlueSpider ( [Vector](../Vector) Position, [Vector](../Vector) Target ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### TryHoldTrinket () {: aria-label='Functions' }
#### boolean TryHoldTrinket ( [TrinketType](../enums/TrinketType) Type ) {: .copyable aria-label='Functions' }
Returns true if an active item pickup cooldown is over. returns true if trinket can be added, else false 
___ 
[ ](#){: .abp .tooltip .badge }
### TryRemoveCollectibleCostume () {: aria-label='Functions' }
#### void TryRemoveCollectibleCostume ( [CollectibleType](../enums/CollectibleType) Collectible, boolean KeepPersistent ) {: .copyable aria-label='Functions' }
tries to remove a costume based on some filters 
___ 
[ ](#){: .abp .tooltip .badge }
### TryRemoveNullCostume () {: aria-label='Functions' }
#### void TryRemoveNullCostume ( Config::NullItemID NullId ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### TryRemoveTrinket () {: aria-label='Functions' }
#### boolean TryRemoveTrinket ( [TrinketType](../enums/TrinketType) Type ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### TryRemoveTrinketCostume () {: aria-label='Functions' }
#### void TryRemoveTrinketCostume ( [TrinketType](../enums/TrinketType) Trinket ) {: .copyable aria-label='Functions' }
tries to remove a costume based on some filters 
___ 
[ ](#){: .abp .tooltip .badge }
### TryUseKey () {: aria-label='Functions' }
#### boolean TryUseKey ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### UpdateCanShoot () {: aria-label='Functions' }
#### void UpdateCanShoot ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### UseActiveItem () {: aria-label='Functions' }
#### void UseActiveItem ( [CollectibleType](../enums/CollectibleType) Item, boolean ShowAnim, boolean KeepActiveItem, boolean AllowNonMainPlayer, boolean ToAddCostume ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### UseCard () {: aria-label='Functions' }
#### void UseCard ( [Card](../ItemConfig_Card) Card ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### UsePill () {: aria-label='Functions' }
#### void UsePill ( [PillEffect](../ItemConfig_PillEffect) PillEffect, [PillColor](../enums/PillColor) [PillColor](../enums/PillColor ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### WillPlayerRevive () {: aria-label='Functions' }
#### boolean WillPlayerRevive ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### BabySkin () {: aria-label='Functions' }
#### [BabySubType](../enums/BabySubType) BabySkin  {: .copyable aria-label='Functions' }
P2 Skin section Used to hold the selected skin (in case of glitched baby it will pick a random one) 
___ 
[ ](#){: .abp .tooltip .badge }
## Variables
### CanFly {: aria-label='Variables' }
#### boolean CanFly  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. Can the player fly over rocks and pits? 
___ 
[ ](#){: .abp .tooltip .badge }
### ControllerIndex {: aria-label='Variables' }
####  int ControllerIndex  {: .copyable aria-label='Variables' }
s32 GetItemStateCooldown( void ) const { return m_ItemStateCooldown; } 
___ 
[ ](#){: .abp .tooltip .badge }
### ControlsCooldown {: aria-label='Variables' }
#### int ControlsCooldown  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### ControlsEnabled {: aria-label='Variables' }
#### boolean ControlsEnabled  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Damage {: aria-label='Variables' }
#### float Damage  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Damage Stat.**  How much damage do the players tears or other main weapons do? 
___ 
[ ](#){: .abp .tooltip .badge }
### FireDelay {: aria-label='Variables' }
#### int FireDelay  {: .copyable aria-label='Variables' }
How long until the player can spawn their next tear? 
___ 
[ ](#){: .abp .tooltip .badge }
### FriendBallEnemy {: aria-label='Variables' }
####  EntityDesc FriendBallEnemy  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### HeadFrameDelay {: aria-label='Variables' }
#### int HeadFrameDelay  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### ItemHoldCooldown {: aria-label='Variables' }
#### int ItemHoldCooldown  {: .copyable aria-label='Variables' }
Used for avoiding player get stucked between rocks when switching a flying item with other active item. 
___ 
[ ](#){: .abp .tooltip .badge }
### LaserColor {: aria-label='Variables' }
#### [Color](../Color) LaserColor  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Luck {: aria-label='Variables' }
#### float Luck  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Luck Stat.**  Better luck generally means better random events. 
___ 
[ ](#){: .abp .tooltip .badge }
### MaxFireDelay {: aria-label='Variables' }
#### int MaxFireDelay  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Tears Stat.**  How long between each tear can spawn? 
___ 
[ ](#){: .abp .tooltip .badge }
### MoveSpeed {: aria-label='Variables' }
#### float MoveSpeed  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Speed Stat.**  How fast can the player move? 
___ 
[ ](#){: .abp .tooltip .badge }
### QueuedItem {: aria-label='Variables' }
#### [QueueItemData](../QueueItemData) QueuedItem  {: .copyable aria-label='Variables' }
item queue for when the player is picking up an item. the item is in effect as soon as the animation is finished and will be removed from the queue. 
___ 
[ ](#){: .abp .tooltip .badge }
### SecondaryActiveItem {: aria-label='Variables' }
#### [ActiveItemDesc](../PlayerTypes_ActiveItemDesc) SecondaryActiveItem  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### ShotSpeed {: aria-label='Variables' }
#### float ShotSpeed  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the ShotSpeed Stat.**  How fast does the tear travel when spawned? 
___ 
[ ](#){: .abp .tooltip .badge }
### SpriteScale {: aria-label='Variables' }
#### [Vector](../Vector) SpriteScale  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### TearColor {: aria-label='Variables' }
#### [Color](../Color) TearColor  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### TearFallingAcceleration {: aria-label='Variables' }
#### float TearFallingAcceleration  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### TearFallingSpeed {: aria-label='Variables' }
#### float TearFallingSpeed  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. How fast is the tear moving up or down when it spawns? Affects range. 
___ 
[ ](#){: .abp .tooltip .badge }
### [TearFlags](../enums/TearFlags) {: aria-label='Variables' }
#### int [TearFlags](../enums/TearFlags)  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. Various <a href="group__enums.html#ga497749198295d1f3d5ecd1c6d5ea2cce">tear flags</a>. 

???- example "Example Code"
    This code makes Isaac's tears spectral. 
    ```lua 
    local mod:OnEvaluateTearFlags(player, flag)
    player.TearFlags = player.TearFlags | TearFlags.TEAR_SPECTRAL
    end
    
    mod:AddCallback(ModCallbacks.MC_EVALUATE_CACHE, mod.OnEvaluateTearFlags, CacheFlag.CACHE_TEARFLAG)
    
    ```
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### TearHeight {: aria-label='Variables' }
#### float TearHeight  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Range Stat * -1.**  How high above the ground is the tear when it spawns? 

???- example "Example Code"
    This code gives Isaac a +5 range up.
    ```lua 
    local mod:OnEvaluateRange(player, flag)
    -- we give -5 because the TearHeight stat is always negative; the lower the number - the further the tear travels
    player.TearHeight = player.TearHeight - 5
    end
    
    mod:AddCallback(ModCallbacks.MC_EVALUATE_CACHE, mod.OnEvaluateRange, CacheFlag.CACHE_RANGE)
    
    ```

___ 
[ ](#){: .abp .tooltip .badge }
### TearsOffset {: aria-label='Variables' }
####  [Vector](../Vector) TearsOffset  {: .copyable aria-label='Variables' }

___ 
