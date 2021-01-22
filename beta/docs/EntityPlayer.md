# Class "EntityPlayer"
## Functions
### AddBlackHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddBlackHearts ( int BlackHearts ) {: .copyable aria-label='Functions' }

Adds Black hearts to the player. 1 unit is half a heart. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 full black heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddBlackHearts(2)
    ```

___ 
### AddBlueFlies () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) AddBlueFlies ( int Amount, [Vector](../Vector) Position, [Entity](../Entity) Target ) {: .copyable aria-label='Functions' }

___ 
### AddBlueSpider () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) AddBlueSpider ( [Vector](../Vector) Position ) {: .copyable aria-label='Functions' }

___ 
### AddBombs () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddBombs ( int Amount ) {: .copyable aria-label='Functions' }

Adds bombs to the player. Remove them with negative numbers. 

???- example "Example Code"
    This code removes 1 bomb from the player.
    ```lua 
    Isaac.GetPlayer(0):AddBombs(-1)
    ```

___ 
### AddBoneHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddBoneHearts ( int Hearts ) {: .copyable aria-label='Functions' }

Adds bone hearts to the player. 1 unit is a single bone heart. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 bone heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddBoneHearts(1)
    ```

___ 
### AddCacheFlags () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddCacheFlags ( [CacheFlag](../enums/CacheFlag) CacheFlag ) {: .copyable aria-label='Functions' }
Will reevaluate the cache flags provided in the next cache reevaluation.
___ 
### AddCard () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddCard ( [Card](../ItemConfig_Card) Card ) {: .copyable aria-label='Functions' }

___ 
### AddCoins () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddCoins ( int Amount ) {: .copyable aria-label='Functions' }

Adds coins to the player. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 coin to the player.
    ```lua 
    Isaac.GetPlayer(0):AddCoins(1)
    ```

___ 
### AddCollectible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddCollectible ( [CollectibleType](../enums/CollectibleType) Type, int Charge, boolean AddConsumables ) {: .copyable aria-label='Functions' }

___ 
### AddControlsCooldown () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddControlsCooldown ( int Cooldown ) {: .copyable aria-label='Functions' }

___ 
### AddCostume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddCostume ( Config::Item Item, boolean ItemStateOnly ) {: .copyable aria-label='Functions' }

___ 
### AddDeadEyeCharge () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddDeadEyeCharge ( ) {: .copyable aria-label='Functions' }

___ 
### AddDollarBillEffect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddDollarBillEffect ( ) {: .copyable aria-label='Functions' }

___ 
### AddEternalHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddEternalHearts ( int EternalHearts ) {: .copyable aria-label='Functions' }

Adds eternal hearts to the player. 1 unit is half a heart. Remove them with negative numbers. 

(Note that eternal hearts automatically turn to full hearts, when you have more than one.) 

???- example "Example Code"
    This code adds 1 eternal heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddEternalHearts(1)
    ```

___ 
### AddGoldenBomb () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddGoldenBomb ( ) {: .copyable aria-label='Functions' }

___ 
### AddGoldenHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddGoldenHearts ( int Hearts ) {: .copyable aria-label='Functions' }

Adds golden hearts to the player. 1 unit is a single gold heart. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 golden heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddGoldenHearts(1)
    ```

___ 
### AddGoldenKey () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddGoldenKey ( ) {: .copyable aria-label='Functions' }

___ 
### AddHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddHearts ( int Hearts ) {: .copyable aria-label='Functions' }

Adds red hearts to the player if there are any empty heart containers. 1 unit is half a heart. Remove health with negative numbers. 

???- example "Example Code"
    This code adds 1 full red heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddHearts(2)
    ```

___ 
### AddJarFlies () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddJarFlies ( int Flies ) {: .copyable aria-label='Functions' }

___ 
### AddJarHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddJarHearts ( int Hearts ) {: .copyable aria-label='Functions' }

___ 
### AddKeys () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddKeys ( int Amount ) {: .copyable aria-label='Functions' }

Adds keys to the player. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 key to the player.
    ```lua 
    Isaac.GetPlayer(0):AddKeys(1)
    ```

___ 
### AddMaxHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
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
### AddNullCostume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddNullCostume ( Config::NullItemID NullId ) {: .copyable aria-label='Functions' }
for Lua 
___ 
### AddPill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddPill ( [PillColor](../enums/PillColor) Pill ) {: .copyable aria-label='Functions' }

___ 
### AddPlayerFormCostume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddPlayerFormCostume ( [PlayerForm](../enums/PlayerForm) Form ) {: .copyable aria-label='Functions' }

___ 
### AddPrettyFly () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddPrettyFly ( ) {: .copyable aria-label='Functions' }

___ 
### AddSoulHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddSoulHearts ( int SoulHearts ) {: .copyable aria-label='Functions' }

Adds soul hearts to the player. 1 unit is half a heart. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 full soul heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddSoulHearts(2)
    ```

___ 
### AddTrinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddTrinket ( [TrinketType](../enums/TrinketType) Type ) {: .copyable aria-label='Functions' }

___ 
### AnimateAppear () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateAppear ( ) {: .copyable aria-label='Functions' }
Play the animation that is normally played at the beginning of a stage. 
___ 
### AnimateCard () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateCard ( [Card](../ItemConfig_Card) Card, string AnimName ) {: .copyable aria-label='Functions' }

___ 
### AnimateCollectible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateCollectible ( [CollectibleType](../enums/CollectibleType) Collectible, string AnimName, string SpriteAnimName ) {: .copyable aria-label='Functions' }

___ 
### AnimateHappy () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateHappy ( ) {: .copyable aria-label='Functions' }
thumbs up 
___ 
### AnimateLightTravel () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateLightTravel ( ) {: .copyable aria-label='Functions' }
end of a stage 
___ 
### AnimatePill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimatePill ( [PillColor](../enums/PillColor) Pill, string AnimName ) {: .copyable aria-label='Functions' }

___ 
### AnimatePitfallIn () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimatePitfallIn ( ) {: .copyable aria-label='Functions' }
Fall into pitfall. 
___ 
### AnimatePitfallOut () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimatePitfallOut ( ) {: .copyable aria-label='Functions' }
Jump out of pitfall. 
___ 
### AnimateSad () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateSad ( ) {: .copyable aria-label='Functions' }
oh no! 
___ 
### AnimateTeleport () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateTeleport ( boolean Up ) {: .copyable aria-label='Functions' }
teleport to another room 
___ 
### AnimateTrapdoor () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateTrapdoor ( ) {: .copyable aria-label='Functions' }
end of a stage 
___ 
### AnimateTrinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateTrinket ( [TrinketType](../enums/TrinketType) Trinket, string AnimName, string SpriteAnimName ) {: .copyable aria-label='Functions' }

___ 
### AreControlsEnabled () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean AreControlsEnabled ( ) {: .copyable aria-label='Functions' }

___ 
### AreOpposingShootDirectionsPressed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean AreOpposingShootDirectionsPressed ( ) {: .copyable aria-label='Functions' }
Returns the non-zero joystick direction from the most recent movement input, but goes to zero after the player comes to a stop. 
___ 
### CanAddCollectible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanAddCollectible ( ) {: .copyable aria-label='Functions' }

___ 
### CanPickBlackHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanPickBlackHearts ( ) {: .copyable aria-label='Functions' }
returns true if player has room for more black hearts 
___ 
### CanPickBoneHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanPickBoneHearts ( ) {: .copyable aria-label='Functions' }
returns true if player has room for more bone hearts 
___ 
### CanPickGoldenHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanPickGoldenHearts ( ) {: .copyable aria-label='Functions' }
returns true if player has room for more golden hearts 
___ 
### CanPickRedHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanPickRedHearts ( ) {: .copyable aria-label='Functions' }

___ 
### CanPickSoulHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanPickSoulHearts ( ) {: .copyable aria-label='Functions' }
returns true if player has room for more soul hearts 
___ 
### CanPickupItem () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanPickupItem ( ) {: .copyable aria-label='Functions' }
Can Player pick up an item right now? 
___ 
### CanShoot () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanShoot ( ) {: .copyable aria-label='Functions' }

___ 
### CanTurnHead () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanTurnHead ( ) {: .copyable aria-label='Functions' }
returns true if head should react to keys or false otherwise 
___ 
### CheckFamiliar () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void CheckFamiliar ( int FamiliarVariant, int TargetCount, [RNG](../RNG) rng ) {: .copyable aria-label='Functions' }

___ 
### ClearCostumes () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ClearCostumes ( ) {: .copyable aria-label='Functions' }

___ 
### ClearDeadEyeCharge () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ClearDeadEyeCharge ( ) {: .copyable aria-label='Functions' }

___ 
### ClearTemporaryEffects () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ClearTemporaryEffects ( ) {: .copyable aria-label='Functions' }
Will be called when player exits the room. 
___ 
### DischargeActiveItem () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DischargeActiveItem ( ) {: .copyable aria-label='Functions' }

Sets the charge of your active item to 0 without triggering the active item effect. 
___ 
### DonateLuck () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DonateLuck ( int Luck ) {: .copyable aria-label='Functions' }

___ 
### DoZitEffect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DoZitEffect ( [Vector](../Vector) Direction ) {: .copyable aria-label='Functions' }

___ 
### DropPoketItem () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DropPoketItem ( int PocketNum, [Vector](../Vector) Pos ) {: .copyable aria-label='Functions' }

Drops a held pocketitem (Card, Pill, Rune...) from the given itemslot at the given position. Possible pocketnumbers are [0, 1]

???+ bug "Bugs"
    This function is spelled wrong.
    Removing the pocketitem in slot 0, while having a second item in slot 1 will not update the UI correctly. The second item will still be in the second slot, which will in turn prevent the player from using this card right away. The player needs to switch between cards to fix this.
___ 
### DropTrinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DropTrinket ( [Vector](../Vector) DropPos, boolean ReplaceTick ) {: .copyable aria-label='Functions' }

___ 
### EvaluateItems () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void EvaluateItems ( ) {: .copyable aria-label='Functions' }
Triggers a cache reevaluation. Will trigger the MC_EVALUATE_CACHE callback.
___ 
### FireBomb () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityBomb](../EntityBomb) FireBomb ( [Vector](../Vector) Position, [Vector](../Vector) Velocity ) {: .copyable aria-label='Functions' }

___ 
### FireBrimstone () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityLaser](../EntityLaser) FireBrimstone ( [Vector](../Vector) Direction ) {: .copyable aria-label='Functions' }

___ 
### FireDelayedBrimstone () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityLaser](../EntityLaser) FireDelayedBrimstone ( float Angle, [Entity](../Entity) Parent ) {: .copyable aria-label='Functions' }

___ 
### FireKnife () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityKnife](../EntityKnife) FireKnife ( [Entity](../Entity) Parent, float RotationOffset, boolean CantOverwrite, int SubType ) {: .copyable aria-label='Functions' }

___ 
### FireTear () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityTear](../EntityTear) FireTear ( [Vector](../Vector) Position, [Vector](../Vector) Velocity, boolean CanBeEye, boolean NoTractorBeam, boolean CanTriggerStreakEnd ) {: .copyable aria-label='Functions' }
This replaces the protected fire_tear() to allow other entities (Such as bombs) to easily shoot tears in the same manner and with all the effects the player does. (Ex. Sad Bombs) 
___ 
### FireTechLaser () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityLaser](../EntityLaser) FireTechLaser ( [Vector](../Vector) Position, [LaserOffset](../enums/LaserOffset) OffsetID, [Vector](../Vector) Direction, boolean LeftEye, boolean OneHit ) {: .copyable aria-label='Functions' }

___ 
### FireTechXLaser () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityLaser](../EntityLaser) FireTechXLaser ( [Vector](../Vector) Position, [Vector](../Vector) Direction, float Radius ) {: .copyable aria-label='Functions' }

___ 
### FlushQueueItem () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean FlushQueueItem ( ) {: .copyable aria-label='Functions' }
called after animation is finished, or on special occasions to prevent bugs 
___ 
### FullCharge () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean FullCharge ( ) {: .copyable aria-label='Functions' }
Fully charges the active item. Returns true if the item was fully charged, false otherwise. If player has battery it will first try to fill first charge slot, then the battery slot. 
___ 
### GetActiveCharge () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetActiveCharge ( ) {: .copyable aria-label='Functions' }

Get the current charge of your active item.
___ 
### GetActiveItem () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [CollectibleType](../enums/CollectibleType) GetActiveItem ( ) {: .copyable aria-label='Functions' }
Returns the currently held item.
___ 
### GetActiveSubCharge () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetActiveSubCharge ( ) {: .copyable aria-label='Functions' }

Get the current items subcharge. (Useful for items that charge up over time.)
___ 
### GetActiveWeaponEntity () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) GetActiveWeaponEntity ( ) {: .copyable aria-label='Functions' }

___ 
### GetAimDirection () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
####  [Vector](../Vector) GetAimDirection ( ) {: .copyable aria-label='Functions' }

___ 
### GetBabySkin () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [BabySubType](../enums/BabySubType) GetBabySkin ( ) {: .copyable aria-label='Functions' }

___ 
### GetBatteryCharge () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetBatteryCharge ( ) {: .copyable aria-label='Functions' }

Get the current charge progress of the second charge of your current active item. This bar is only active, when you have the Collectible "The Battery"
___ 
### GetBlackHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetBlackHearts ( ) {: .copyable aria-label='Functions' }
This does not return the # of black hearts, this returns the bit mask for which soul hearts are black hearts. 
___ 
### GetBombFlags () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetBombFlags ( ) {: .copyable aria-label='Functions' }

___ 
### GetBombVariant () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### EntityBomb::BombVariant GetBombVariant ( int TearFlags, boolean ForceSmallBomb ) {: .copyable aria-label='Functions' }
Pass tear flags to add extra effects to the bomb visual like burn -&gt; hot bombs, even if player doesn't have Hot Bombs collectible. ForceSmallBomb will override large bomb variants for TEAR_PERSISTENT. 
___ 
### GetBoneHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetBoneHearts ( ) {: .copyable aria-label='Functions' }
Returns the number of bone hearts as an integer value. 1 Boneheart = 1.

???- example "Example Code"
    This code gets the total amount of red heart containers including bone hearts. The bonehearts need to be mulltiplied by 2, since in GetMaxHearts() 2 equals 1 full heart. 
    ```lua 
    local player = Isaac.GetPlayer(0)
    player:GetMaxHearts()+player:GetBoneHearts()*2
    
    ```

___ 
### GetCard () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Card](../ItemConfig_Card) GetCard ( int SlotId ) {: .copyable aria-label='Functions' }

Gets the ID of the card the player is holding in the given itemslot (0 or 1).
___ 
### GetCardRNG () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [RNG](../RNG) GetCardRNG ( [Card](../ItemConfig_Card) ID ) {: .copyable aria-label='Functions' }

___ 
### GetCollectibleCount () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetCollectibleCount ( ) {: .copyable aria-label='Functions' }

___ 
### GetCollectibleNum () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetCollectibleNum ( [CollectibleType](../enums/CollectibleType) Type ) {: .copyable aria-label='Functions' }

___ 
### GetCollectibleRNG () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [RNG](../RNG) GetCollectibleRNG ( [CollectibleType](../enums/CollectibleType) ID ) {: .copyable aria-label='Functions' }

___ 
### GetCostumeNullPos () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetCostumeNullPos ( string NullFrameName, boolean HeadScale, [Vector](../Vector) [Direction](../enums/Direction ) {: .copyable aria-label='Functions' }

___ 
### GetDamageCooldown () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetDamageCooldown ( ) {: .copyable aria-label='Functions' }

___ 
### GetEffectiveMaxHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetEffectiveMaxHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of Red Hearts the player can contain in their Heart Containers and Bone Hearts. 1 unit is half a red heart.
**Example:** you have 3 red heart container and one bone heart. 6(red) + 2(bone) = 8 
___ 
### GetEffects () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [TemporaryEffects](../TemporaryEffects) GetEffects ( ) {: .copyable aria-label='Functions' }

___ 
### GetEternalHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetEternalHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of eternal hearts the player has.
___ 
### GetExtraLives () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetExtraLives ( ) {: .copyable aria-label='Functions' }

___ 
### GetFireDirection () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Direction](../enums/Direction) GetFireDirection ( ) {: .copyable aria-label='Functions' }

___ 
### GetFlyingOffset () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetFlyingOffset ( ) {: .copyable aria-label='Functions' }

___ 
### GetGoldenHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetGoldenHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of golden hearts the player has.
___ 
### GetGreedDonationBreakChance () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float GetGreedDonationBreakChance ( ) {: .copyable aria-label='Functions' }

___ 
### GetHeadDirection () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Direction](../enums/Direction) GetHeadDirection ( ) {: .copyable aria-label='Functions' }

___ 
### GetHeartLimit () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetHeartLimit ( ) {: .copyable aria-label='Functions' }

___ 
### GetHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of red hearts the player has inside their heart containers and bone hearts. 1 unit is half a heart.
___ 
### GetItemState () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [CollectibleType](../enums/CollectibleType) GetItemState ( ) {: .copyable aria-label='Functions' }

___ 
### GetJarFlies () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetJarFlies ( ) {: .copyable aria-label='Functions' }

___ 
### GetJarHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetJarHearts ( ) {: .copyable aria-label='Functions' }

___ 
### GetLaserOffset () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetLaserOffset ( [LaserOffset](../enums/LaserOffset) ID, [Vector](../Vector) [Direction](../enums/Direction ) {: .copyable aria-label='Functions' }

___ 
### GetLastActionTriggers () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetLastActionTriggers ( ) {: .copyable aria-label='Functions' }

___ 
### GetLastDamageFlags () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetLastDamageFlags ( ) {: .copyable aria-label='Functions' }

___ 
### GetLastDamageSource () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
####  [EntityRef](../EntityRef) GetLastDamageSource ( ) {: .copyable aria-label='Functions' }

___ 
### GetLastDirection () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
####  [Vector](../Vector) GetLastDirection ( ) {: .copyable aria-label='Functions' }

___ 
### GetMaxHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetMaxHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of Heart Containers the player has. 1 unit is half a heart container.
___ 
### GetMaxPoketItems () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetMaxPoketItems ( ) {: .copyable aria-label='Functions' }

Get the number of Pickup items you can carry. (1 on default. 2 with belly button or similar)

???+ bug "Bugs"
    This function is spelled wrong.
___ 
### GetMaxTrinkets () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetMaxTrinkets ( ) {: .copyable aria-label='Functions' }

Get the number of trinkets you can carry. (1 on default. 2 with moms purse or similar)
___ 
### GetMovementDirection () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Direction](../enums/Direction) GetMovementDirection ( ) {: .copyable aria-label='Functions' }

___ 
### GetMovementInput () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetMovementInput ( ) {: .copyable aria-label='Functions' }

___ 
### GetMovementJoystick () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetMovementJoystick ( ) {: .copyable aria-label='Functions' }

___ 
### GetMovementVector () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
####  [Vector](../Vector) GetMovementVector ( ) {: .copyable aria-label='Functions' }

___ 
### GetMultiShotParams () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### MultiShotParams GetMultiShotParams ( ) {: .copyable aria-label='Functions' }

___ 
### GetMultiShotPositionVelocity () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [PosVel](../PlayerTypes_PosVel) GetMultiShotPositionVelocity ( int LoopIndex, [WeaponType](../enums/WeaponType) Weapon, [Vector](../Vector) ShotDirection, float ShotSpeed, MultiShotParams params ) {: .copyable aria-label='Functions' }
Call this function in a loop with values from 0 to MultiShotParams.NumProjectiles-1 (inclusive) 
___ 
### GetName () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### string GetName ( ) {: .copyable aria-label='Functions' }

Returns the name of the player. (Isaac, Cain, Azazel,...)
___ 
### GetNPCTarget () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) GetNPCTarget ( ) {: .copyable aria-label='Functions' }
normally returns the player itself. Can redirect enemy attacks to a different entity such as Best Friend 
___ 
### GetNumBlueFlies () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNumBlueFlies ( ) {: .copyable aria-label='Functions' }

___ 
### GetNumBlueSpiders () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNumBlueSpiders ( ) {: .copyable aria-label='Functions' }

___ 
### GetNumBombs () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNumBombs ( ) {: .copyable aria-label='Functions' }

___ 
### GetNumCoins () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNumCoins ( ) {: .copyable aria-label='Functions' }

___ 
### GetNumKeys () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNumKeys ( ) {: .copyable aria-label='Functions' }

___ 
### GetPill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [PillColor](../enums/PillColor) GetPill ( int SlotId ) {: .copyable aria-label='Functions' }

Gets the ID of the pill the player is holding in the given itemslot (0 or 1).
___ 
### GetPillRNG () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [RNG](../RNG) GetPillRNG ( [PillEffect](../ItemConfig_PillEffect) ID ) {: .copyable aria-label='Functions' }

___ 
### GetPlayerType () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [PlayerType](../enums/PlayerType) GetPlayerType ( ) {: .copyable aria-label='Functions' }

___ 
### GetPocketItem () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
####  PlayerPocketItem GetPocketItem ( int SlotId ) {: .copyable aria-label='Functions' }

Get the userdata of the pocketitem (Card,Pill,rune) in a said slot.

???+ bug "Bugs"
    This function returns userdata, which cant be processed. It is therefore broken and should not be used! 
___ 
### GetRecentMovementVector () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
####  [Vector](../Vector) GetRecentMovementVector ( ) {: .copyable aria-label='Functions' }
Returns the joystick direction that drives player movement, taking into account certain modifiers like disabled controls and seed effects. 
___ 
### GetShootingInput () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetShootingInput ( ) {: .copyable aria-label='Functions' }

___ 
### GetShootingJoystick () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetShootingJoystick ( ) {: .copyable aria-label='Functions' }

___ 
### GetSmoothBodyRotation () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float GetSmoothBodyRotation ( ) {: .copyable aria-label='Functions' }

___ 
### GetSoulHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetSoulHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of Soul Hearts the player has. 1 unit is half a heart.

???- note "Notes"
    Black Hearts count toward this total, as the game sees them as soul hearts.
___ 
### GetSubPlayer () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityPlayer](../EntityPlayer) GetSubPlayer ( ) {: .copyable aria-label='Functions' }

___ 
### GetTearHitParams () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [TearParams](../TearParams) GetTearHitParams ( [WeaponType](../enums/WeaponType) WeaponType, float DamageScale, int TearDisplacement ) {: .copyable aria-label='Functions' }
 Used for tear parameters that are calculated on hit (ex: Tough love, Common cold), DamageScale is used for scale calculation based on damage 
___ 
### GetTearMovementInheritance () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetTearMovementInheritance ( [Vector](../Vector) ShotDirection ) {: .copyable aria-label='Functions' }

___ 
### GetTearPoisonDamage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float GetTearPoisonDamage ( ) {: .copyable aria-label='Functions' }

___ 
### GetTearRangeModifier () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetTearRangeModifier ( ) {: .copyable aria-label='Functions' }

___ 
### GetTotalDamageTaken () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetTotalDamageTaken ( ) {: .copyable aria-label='Functions' }

___ 
### GetTractorBeam () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) GetTractorBeam ( ) {: .copyable aria-label='Functions' }

___ 
### GetTrinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [TrinketType](../enums/TrinketType) GetTrinket ( int TrinketIndex ) {: .copyable aria-label='Functions' }

Gets the ID of the trinket the player is holding in the given trinketslot (0 or 1).
___ 
### GetTrinketMultiplier () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetTrinketMultiplier ( ) {: .copyable aria-label='Functions' }

___ 
### GetTrinketRNG () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [RNG](../RNG) GetTrinketRNG ( [TrinketType](../enums/TrinketType) ID ) {: .copyable aria-label='Functions' }

___ 
### GetVelocityBeforeUpdate () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
####  [Vector](../Vector) GetVelocityBeforeUpdate ( ) {: .copyable aria-label='Functions' }

___ 
### GetZodiacEffect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [CollectibleType](../enums/CollectibleType) GetZodiacEffect ( ) {: .copyable aria-label='Functions' }

___ 
### HasCollectible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasCollectible ( [CollectibleType](../enums/CollectibleType) Type ) {: .copyable aria-label='Functions' }

___ 
### HasFullHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasFullHearts ( ) {: .copyable aria-label='Functions' }

___ 
### HasFullHeartsAndSoulHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasFullHeartsAndSoulHearts ( ) {: .copyable aria-label='Functions' }

___ 
### HasGoldenBomb () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasGoldenBomb ( ) {: .copyable aria-label='Functions' }

___ 
### HasGoldenKey () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasGoldenKey ( ) {: .copyable aria-label='Functions' }

___ 
### HasInvincibility () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasInvincibility ( ) {: .copyable aria-label='Functions' }
returns true when player is in an invincibility state 
___ 
### HasPlayerForm () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasPlayerForm ( [PlayerForm](../enums/PlayerForm) Form ) {: .copyable aria-label='Functions' }

___ 
### HasTimedItem () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasTimedItem ( ) {: .copyable aria-label='Functions' }
Kept for avoiding modding issues. 
___ 
### HasTrinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasTrinket ( [TrinketType](../enums/TrinketType) Type ) {: .copyable aria-label='Functions' }

___ 
### HasWeaponType () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasWeaponType ( [WeaponType](../enums/WeaponType) WeaponType ) {: .copyable aria-label='Functions' }

___ 
### InitBabySkin () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void InitBabySkin ( ) {: .copyable aria-label='Functions' }

___ 
### IsBlackHeart () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsBlackHeart ( int Heart ) {: .copyable aria-label='Functions' }

___ 
### IsBoneHeart () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsBoneHeart ( int heart ) {: .copyable aria-label='Functions' }

___ 
### IsExtraAnimationFinished () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsExtraAnimationFinished ( ) {: .copyable aria-label='Functions' }

___ 
### IsFullSpriteRendering () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsFullSpriteRendering ( ) {: .copyable aria-label='Functions' }

___ 
### IsHeldItemVisible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsHeldItemVisible ( ) {: .copyable aria-label='Functions' }

___ 
### IsHoldingItem () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsHoldingItem ( ) {: .copyable aria-label='Functions' }
Is Player holding up an item (card/collectible/etc) 
___ 
### IsItemQueueEmpty () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsItemQueueEmpty ( ) {: .copyable aria-label='Functions' }

___ 
### IsP2Appearing () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsP2Appearing ( ) {: .copyable aria-label='Functions' }

___ 
### IsPosInSpotLight () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsPosInSpotLight ( [Vector](../Vector) Position ) {: .copyable aria-label='Functions' }

___ 
### IsSubPlayer () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsSubPlayer ( ) {: .copyable aria-label='Functions' }
This is for players that require multiple player entities, such as the Forgotten (this has nothing to do with co-players!) 
___ 
### NeedsCharge () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean NeedsCharge ( ) {: .copyable aria-label='Functions' }

___ 
### PlayExtraAnimation () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void PlayExtraAnimation ( string Animation ) {: .copyable aria-label='Functions' }

___ 
### QueueExtraAnimation () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void QueueExtraAnimation ( string Animation ) {: .copyable aria-label='Functions' }

___ 
### QueueItem () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void QueueItem ( Config::Item Item, int Charge, boolean Touched ) {: .copyable aria-label='Functions' }
Add Collectible/Trinket after animation is finished. 
___ 
### RemoveBlackHeart () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveBlackHeart ( int BlackHeart ) {: .copyable aria-label='Functions' }

___ 
### RemoveBlueFly () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveBlueFly ( ) {: .copyable aria-label='Functions' }

___ 
### RemoveBlueSpider () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveBlueSpider ( ) {: .copyable aria-label='Functions' }

___ 
### RemoveCollectible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveCollectible ( [CollectibleType](../enums/CollectibleType) Type ) {: .copyable aria-label='Functions' }

___ 
### RemoveCostume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveCostume ( Config::Item Item ) {: .copyable aria-label='Functions' }

___ 
### RemoveGoldenBomb () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveGoldenBomb ( ) {: .copyable aria-label='Functions' }

___ 
### RemoveGoldenKey () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveGoldenKey ( ) {: .copyable aria-label='Functions' }

___ 
### RemoveSkinCostume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveSkinCostume ( ) {: .copyable aria-label='Functions' }

___ 
### RenderBody () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RenderBody ( [Vector](../Vector) position ) {: .copyable aria-label='Functions' }

___ 
### RenderGlow () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RenderGlow ( [Vector](../Vector) position ) {: .copyable aria-label='Functions' }

___ 
### RenderHead () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RenderHead ( [Vector](../Vector) position ) {: .copyable aria-label='Functions' }

___ 
### RenderTop () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RenderTop ( [Vector](../Vector) position ) {: .copyable aria-label='Functions' }

___ 
### ReplaceCostumeSprite () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ReplaceCostumeSprite ( Config::Item Item, string SpritePath, int SpriteId ) {: .copyable aria-label='Functions' }

___ 
### ResetDamageCooldown () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ResetDamageCooldown ( ) {: .copyable aria-label='Functions' }

___ 
### ResetItemState () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ResetItemState ( ) {: .copyable aria-label='Functions' }
Made this public so <a class="el" href="class_room.html">Room</a> transtiions can call this to prevent lock ups.  WRONG PARSING 
{: .wrongParsing }
___ 
### RespawnFamiliars () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RespawnFamiliars ( ) {: .copyable aria-label='Functions' }

___ 
### Revive () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Revive ( ) {: .copyable aria-label='Functions' }
revive player 
___ 
### SetActiveCharge () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetActiveCharge ( int Charge ) {: .copyable aria-label='Functions' }

___ 
### SetCard () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetCard ( int SlotId, [Card](../ItemConfig_Card) [Card](../ItemConfig_Card ) {: .copyable aria-label='Functions' }

Change the card/rune the player is holding in the given itemslot (0 or 1).
___ 
### SetFullHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetFullHearts ( ) {: .copyable aria-label='Functions' }

___ 
### SetMinDamageCooldown () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetMinDamageCooldown ( int DamageCooldown ) {: .copyable aria-label='Functions' }

___ 
### SetPill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetPill ( int SlotId, [PillColor](../enums/PillColor) Pill ) {: .copyable aria-label='Functions' }

Change the pill the player is holding in the given itemslot (0 or 1).
___ 
### SetShootingCooldown () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetShootingCooldown ( int Cooldown ) {: .copyable aria-label='Functions' }

___ 
### SetTargetTrapDoor () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetTargetTrapDoor ( [GridEntity](../GridEntity) TrapDoor ) {: .copyable aria-label='Functions' }

___ 
### ShootRedCandle () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ShootRedCandle ( [Vector](../Vector) Direction ) {: .copyable aria-label='Functions' }
for ghost pepper item + poop and farts 
___ 
### SpawnMawOfVoid () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityLaser](../EntityLaser) SpawnMawOfVoid ( int Timeout ) {: .copyable aria-label='Functions' }

___ 
### StopExtraAnimation () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void StopExtraAnimation ( ) {: .copyable aria-label='Functions' }

___ 
### SwapActiveItems () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SwapActiveItems ( ) {: .copyable aria-label='Functions' }

___ 
### ThrowBlueSpider () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) ThrowBlueSpider ( [Vector](../Vector) Position, [Vector](../Vector) Target ) {: .copyable aria-label='Functions' }

___ 
### TryHoldTrinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean TryHoldTrinket ( [TrinketType](../enums/TrinketType) Type ) {: .copyable aria-label='Functions' }
Returns true if an active item pickup cooldown is over. returns true if trinket can be added, else false 
___ 
### TryRemoveCollectibleCostume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void TryRemoveCollectibleCostume ( [CollectibleType](../enums/CollectibleType) Collectible, boolean KeepPersistent ) {: .copyable aria-label='Functions' }
tries to remove a costume based on some filters 
___ 
### TryRemoveNullCostume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void TryRemoveNullCostume ( Config::NullItemID NullId ) {: .copyable aria-label='Functions' }

___ 
### TryRemoveTrinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean TryRemoveTrinket ( [TrinketType](../enums/TrinketType) Type ) {: .copyable aria-label='Functions' }

___ 
### TryRemoveTrinketCostume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void TryRemoveTrinketCostume ( [TrinketType](../enums/TrinketType) Trinket ) {: .copyable aria-label='Functions' }
tries to remove a costume based on some filters 
___ 
### TryUseKey () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean TryUseKey ( ) {: .copyable aria-label='Functions' }

___ 
### UpdateCanShoot () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void UpdateCanShoot ( ) {: .copyable aria-label='Functions' }

___ 
### UseActiveItem () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void UseActiveItem ( [CollectibleType](../enums/CollectibleType) Item, boolean ShowAnim, boolean KeepActiveItem, boolean AllowNonMainPlayer, boolean ToAddCostume ) {: .copyable aria-label='Functions' }

___ 
### UseCard () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void UseCard ( [Card](../ItemConfig_Card) Card ) {: .copyable aria-label='Functions' }

___ 
### UsePill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void UsePill ( [PillEffect](../ItemConfig_PillEffect) PillEffect, [PillColor](../enums/PillColor) [PillColor](../enums/PillColor ) {: .copyable aria-label='Functions' }

___ 
### WillPlayerRevive () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean WillPlayerRevive ( ) {: .copyable aria-label='Functions' }

___ 
### BabySkin () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [BabySubType](../enums/BabySubType) BabySkin  {: .copyable aria-label='Functions' }
P2 Skin section Used to hold the selected skin (in case of glitched baby it will pick a random one) 
___ 
## Variables
### CanFly {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanFly  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. Can the player fly over rocks and pits? 
___ 
### ControllerIndex {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
####  int ControllerIndex  {: .copyable aria-label='Variables' }
s32 GetItemStateCooldown( void ) const { return m_ItemStateCooldown; } 
___ 
### ControlsCooldown {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int ControlsCooldown  {: .copyable aria-label='Variables' }

___ 
### ControlsEnabled {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean ControlsEnabled  {: .copyable aria-label='Variables' }

___ 
### Damage {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Damage  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Damage Stat.**  How much damage do the players tears or other main weapons do? 
___ 
### FireDelay {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int FireDelay  {: .copyable aria-label='Variables' }
How long until the player can spawn their next tear? 
___ 
### FriendBallEnemy {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
####  EntityDesc FriendBallEnemy  {: .copyable aria-label='Variables' }

___ 
### HeadFrameDelay {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int HeadFrameDelay  {: .copyable aria-label='Variables' }

___ 
### ItemHoldCooldown {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int ItemHoldCooldown  {: .copyable aria-label='Variables' }
Used for avoiding player get stucked between rocks when switching a flying item with other active item. 
___ 
### LaserColor {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Color](../Color) LaserColor  {: .copyable aria-label='Variables' }

___ 
### Luck {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Luck  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Luck Stat.**  Better luck generally means better random events. 
___ 
### MaxFireDelay {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int MaxFireDelay  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Tears Stat.**  How long between each tear can spawn? 
___ 
### MoveSpeed {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float MoveSpeed  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Speed Stat.**  How fast can the player move? 
___ 
### QueuedItem {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [QueueItemData](../QueueItemData) QueuedItem  {: .copyable aria-label='Variables' }
item queue for when the player is picking up an item. the item is in effect as soon as the animation is finished and will be removed from the queue. 
___ 
### SecondaryActiveItem {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [ActiveItemDesc](../PlayerTypes_ActiveItemDesc) SecondaryActiveItem  {: .copyable aria-label='Variables' }

___ 
### ShotSpeed {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float ShotSpeed  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the ShotSpeed Stat.**  How fast does the tear travel when spawned? 
___ 
### SpriteScale {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) SpriteScale  {: .copyable aria-label='Variables' }

___ 
### TearColor {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Color](../Color) TearColor  {: .copyable aria-label='Variables' }

___ 
### TearFallingAcceleration {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float TearFallingAcceleration  {: .copyable aria-label='Variables' }

___ 
### TearFallingSpeed {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float TearFallingSpeed  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. How fast is the tear moving up or down when it spawns? Affects range. 
___ 
### [TearFlags](../enums/TearFlags) {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
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
### TearHeight {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
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
### TearsOffset {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
####  [Vector](../Vector) TearsOffset  {: .copyable aria-label='Variables' }

___ 
