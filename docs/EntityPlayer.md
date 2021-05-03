# Class "EntityPlayer"
### Inherits from Class: {: .inheritance }
[Entity](Entity.md)
## Functions
### Add·Black·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddBlackHearts ( int BlackHearts ) {: .copyable aria-label='Functions' }

Adds Black hearts to the player. 1 unit is half a heart. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 full black heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddBlackHearts(2)
    ```

___ 
### Add·Blue·Flies () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) AddBlueFlies ( int Amount, [Vector](../Vector) Position, [Entity](../Entity) Target ) {: .copyable aria-label='Functions' }

___ 
### Add·Blue·Spider () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) AddBlueSpider ( [Vector](../Vector) Position ) {: .copyable aria-label='Functions' }

___ 
### Add·Bombs () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddBombs ( int Amount ) {: .copyable aria-label='Functions' }

Adds bombs to the player. Remove them with negative numbers. 

???- example "Example Code"
    This code removes 1 bomb from the player.
    ```lua 
    Isaac.GetPlayer(0):AddBombs(-1)
    ```

___ 
### Add·Bone·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddBoneHearts ( int Hearts ) {: .copyable aria-label='Functions' }

Adds bone hearts to the player. 1 unit is a single bone heart. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 bone heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddBoneHearts(1)
    ```

___ 
### Add·Cache·Flags () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddCacheFlags ( [CacheFlag](../enums/CacheFlag) CacheFlag ) {: .copyable aria-label='Functions' }
Will reevaluate the cache flags provided in the next cache reevaluation.

???- example "Example Code"
    This code will add several cacheflags.
    ```lua 
    Isaac.GetPlayer(0):AddCacheFlags(CacheFlag.CACHE_DAMAGE | CacheFlag.CACHE_FIREDELAY | CacheFlag.CACHE_LUCK)
    ```
___ 
### Add·Card () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddCard ( [Card](../enums/Card) ID ) {: .copyable aria-label='Functions' }

___ 
### Add·Coins () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddCoins ( int Amount ) {: .copyable aria-label='Functions' }

Adds coins to the player. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 coin to the player.
    ```lua 
    Isaac.GetPlayer(0):AddCoins(1)
    ```

___ 
### Add·Collectible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddCollectible ( [CollectibleType](../enums/CollectibleType) Type, int Charge, boolean AddConsumables, int ActiveSlot, int VarData ) {: .copyable aria-label='Functions' }

Slot 0 is default (normal active item)
Slot 1 is used by Schoolbag
Slot 2 is used for pocket active items
Please note that slot 2 cannot be used if character did not start with a pocket active

___ 
### Add·Controls·Cooldown () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddControlsCooldown ( int Cooldown ) {: .copyable aria-label='Functions' }

___ 
### Add·Costume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddCostume ( [ItemConfig::Item](../ItemConfig_Item) Item, boolean ItemStateOnly ) {: .copyable aria-label='Functions' }

___ 
### Add·Dead·Eye·Charge () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddDeadEyeCharge ( ) {: .copyable aria-label='Functions' }

___ 
### Add·Dollar·Bill·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddDollarBillEffect ( ) {: .copyable aria-label='Functions' }

___ 
### Add·Eternal·Hearts () {: aria-label='Functions' }
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
### Add·Golden·Bomb () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddGoldenBomb ( ) {: .copyable aria-label='Functions' }

___ 
### Add·Golden·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddGoldenHearts ( int Hearts ) {: .copyable aria-label='Functions' }

Adds golden hearts to the player. 1 unit is a single gold heart. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 golden heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddGoldenHearts(1)
    ```

___ 
### Add·Golden·Key () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddGoldenKey ( ) {: .copyable aria-label='Functions' }

___ 
### Add·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddHearts ( int Hearts ) {: .copyable aria-label='Functions' }

Adds red hearts to the player if there are any empty heart containers. 1 unit is half a heart. Remove health with negative numbers. 

???- example "Example Code"
    This code adds 1 full red heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddHearts(2)
    ```

___ 
### Add·Jar·Flies () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddJarFlies ( int Flies ) {: .copyable aria-label='Functions' }

___ 
### Add·Jar·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddJarHearts ( int Hearts ) {: .copyable aria-label='Functions' }

___ 
### Add·Keys () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddKeys ( int Amount ) {: .copyable aria-label='Functions' }

Adds keys to the player. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 key to the player.
    ```lua 
    Isaac.GetPlayer(0):AddKeys(1)
    ```

___ 
### Add·Max·Hearts () {: aria-label='Functions' }
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
### Add·Null·Costume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddNullCostume ( [ItemConfig::NullItemID](../ItemConfig_Item) NullId ) {: .copyable aria-label='Functions' }
for Lua 
___ 
### Add·Pill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddPill ( [PillColor](../enums/PillColor) Pill ) {: .copyable aria-label='Functions' }

___ 
### Add·Player·Form·Costume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddPlayerFormCostume ( [PlayerForm](../enums/PlayerForm) Form ) {: .copyable aria-label='Functions' }
Adds the costume of the given transformation.

___ 
### Add·Pretty·Fly () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddPrettyFly ( ) {: .copyable aria-label='Functions' }

___ 
### Add·Soul·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddSoulHearts ( int SoulHearts ) {: .copyable aria-label='Functions' }

Adds soul hearts to the player. 1 unit is half a heart. Remove them with negative numbers. 

???- example "Example Code"
    This code adds 1 full soul heart to the player.
    ```lua 
    Isaac.GetPlayer(0):AddSoulHearts(2)
    ```

___ 
### Add·Trinket () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddTrinket ( [TrinketType](../enums/TrinketType) Type, boolean AddConsumables ) {: .copyable aria-label='Functions' }

___ 
### Animate·Appear () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateAppear ( ) {: .copyable aria-label='Functions' }
Play the animation that is normally played at the beginning of a stage. 
___ 
### Animate·Card () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateCard ( [Card](../enums/Card) ID, string AnimName ) {: .copyable aria-label='Functions' }

___ 
### Animate·Collectible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateCollectible ( [CollectibleType](../enums/CollectibleType) Collectible, string AnimName, string SpriteAnimName ) {: .copyable aria-label='Functions' }

___ 
### Animate·Happy () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateHappy ( ) {: .copyable aria-label='Functions' }
thumbs up 
___ 
### Animate·Light·Travel () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateLightTravel ( ) {: .copyable aria-label='Functions' }
end of a stage 
___ 
### Animate·Pill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimatePill ( [PillColor](../enums/PillColor) Pill, string AnimName ) {: .copyable aria-label='Functions' }

___ 
### Animate·Pitfall·In () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimatePitfallIn ( ) {: .copyable aria-label='Functions' }
Fall into pitfall. 
___ 
### Animate·Pitfall·Out () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimatePitfallOut ( ) {: .copyable aria-label='Functions' }
Jump out of pitfall. 
___ 
### Animate·Sad () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateSad ( ) {: .copyable aria-label='Functions' }
oh no! 
___ 
### Animate·Teleport () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateTeleport ( boolean Up ) {: .copyable aria-label='Functions' }
teleport to another room 
___ 
### Animate·Trapdoor () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateTrapdoor ( ) {: .copyable aria-label='Functions' }
end of a stage 
___ 
### Animate·Trinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimateTrinket ( [TrinketType](../enums/TrinketType) Trinket, string AnimName, string SpriteAnimName ) {: .copyable aria-label='Functions' }

___ 
### Are·Controls·Enabled () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean AreControlsEnabled ( ) {: .copyable aria-label='Functions' }

___ 
### Are·Opposing·Shoot·Directions·Pressed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean AreOpposingShootDirectionsPressed ( ) {: .copyable aria-label='Functions' }
Returns the non-zero joystick direction from the most recent movement input, but goes to zero after the player comes to a stop. 
___ 
### Can·Add·Collectible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanAddCollectible ( ) {: .copyable aria-label='Functions' }

___ 
### Can·Pick·Black·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanPickBlackHearts ( ) {: .copyable aria-label='Functions' }
returns true if player has room for more black hearts 
___ 
### Can·Pick·Bone·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanPickBoneHearts ( ) {: .copyable aria-label='Functions' }
returns true if player has room for more bone hearts 
___ 
### Can·Pick·Golden·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanPickGoldenHearts ( ) {: .copyable aria-label='Functions' }
returns true if player has room for more golden hearts 
___ 
### Can·Pick·Red·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanPickRedHearts ( ) {: .copyable aria-label='Functions' }

___ 
### Can·Pick·Soul·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanPickSoulHearts ( ) {: .copyable aria-label='Functions' }
returns true if player has room for more soul hearts 
___ 
### Can·Pickup·Item () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanPickupItem ( ) {: .copyable aria-label='Functions' }
Can Player pick up an item right now? 
___ 
### Can·Shoot () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanShoot ( ) {: .copyable aria-label='Functions' }

___ 
### Can·Turn·Head () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanTurnHead ( ) {: .copyable aria-label='Functions' }
returns true if head should react to keys or false otherwise 
___ 
### Check·Familiar () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void CheckFamiliar ( int FamiliarVariant, int TargetCount, [RNG](../RNG) rng, int SourceItem, int SubType ) {: .copyable aria-label='Functions' }

___ 
### Clear·Costumes () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ClearCostumes ( ) {: .copyable aria-label='Functions' }
Removes all costumes.
___ 
### Clear·Dead·Eye·Charge () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ClearDeadEyeCharge ( ) {: .copyable aria-label='Functions' }

___ 
### Clear·Temporary·Effects () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ClearTemporaryEffects ( ) {: .copyable aria-label='Functions' }
Will be called when player exits the room. 
___ 
### Discharge·Active·Item () {: aria-label='Functions' }
[[ ](#){: .rep .tooltip .badge }
#### void DischargeActiveItem ( int ActiveSlot ) {: .copyable aria-label='Functions' }

Sets the charge of your active item to 0 without triggering the active item effect. 
___ 
### Donate·Luck () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DonateLuck ( int Luck ) {: .copyable aria-label='Functions' }

___ 
### Do·Zit·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DoZitEffect ( [Vector](../Vector) Direction ) {: .copyable aria-label='Functions' }

___ 
### Drop·Poket·Item () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DropPoketItem ( int PocketNum, [Vector](../Vector) Pos ) {: .copyable aria-label='Functions' }

Drops a held pocketitem (Card, Pill, Rune...) from the given itemslot at the given position. Possible pocketnumbers are [0, 1]

???+ bug "Bugs"
    This function is spelled wrong.
    Removing the pocketitem in slot 0, while having a second item in slot 1 will not update the UI correctly. The second item will still be in the second slot, which will in turn prevent the player from using this card right away. The player needs to switch between cards to fix this.
___ 
### Drop·Trinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DropTrinket ( [Vector](../Vector) DropPos, boolean ReplaceTick ) {: .copyable aria-label='Functions' }

___ 
### Evaluate·Items () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void EvaluateItems ( ) {: .copyable aria-label='Functions' }
Triggers a cache reevaluation. Will trigger the MC_EVALUATE_CACHE callback.
___ 
### Fire·Bomb () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityBomb](../EntityBomb) FireBomb ( [Vector](../Vector) Position, [Vector](../Vector) Velocity ) {: .copyable aria-label='Functions' }

___ 
### Fire·Brimstone () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityLaser](../EntityLaser) FireBrimstone ( [Vector](../Vector) Direction ) {: .copyable aria-label='Functions' }

___ 
### Fire·Delayed·Brimstone () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityLaser](../EntityLaser) FireDelayedBrimstone ( float Angle, [Entity](../Entity) Parent ) {: .copyable aria-label='Functions' }

___ 
### Fire·Knife () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityKnife](../EntityKnife) FireKnife ( [Entity](../Entity) Parent, float RotationOffset, boolean CantOverwrite, int SubType ) {: .copyable aria-label='Functions' }

___ 
### Fire·Tear () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityTear](../EntityTear) FireTear ( [Vector](../Vector) Position, [Vector](../Vector) Velocity, boolean CanBeEye, boolean NoTractorBeam, boolean CanTriggerStreakEnd ) {: .copyable aria-label='Functions' }
This replaces the protected fire_tear() to allow other entities (Such as bombs) to easily shoot tears in the same manner and with all the effects the player does. (Ex. Sad Bombs) 
___ 
### Fire·Tech·Laser () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityLaser](../EntityLaser) FireTechLaser ( [Vector](../Vector) Position, [LaserOffset](../enums/LaserOffset) OffsetID, [Vector](../Vector) Direction, boolean LeftEye, boolean OneHit ) {: .copyable aria-label='Functions' }

___ 
### Fire·Tech·XLaser () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityLaser](../EntityLaser) FireTechXLaser ( [Vector](../Vector) Position, [Vector](../Vector) Direction, float Radius ) {: .copyable aria-label='Functions' }

___ 
### Flush·Queue·Item () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean FlushQueueItem ( ) {: .copyable aria-label='Functions' }
called after animation is finished, or on special occasions to prevent bugs 
___ 
### Full·Charge ( ) {: aria-label='Functions' }
[[ ](#){: .rep .tooltip .badge }
#### boolean FullCharge ( int ActiveSlot, int Force) {: .copyable aria-label='Functions' }
Fully charges the active item. Returns true if the item was fully charged, false otherwise. If player has battery it will first try to fill first charge slot, then the battery slot. 
___ 
### Get·Active·Charge () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int Charge ( int ActiveSlot ) {: .copyable aria-label='Functions' }

Get the current charge of your active item.
___ 
### Get·Active·Item ( ) {: aria-label='Functions' }
[[ ](#){: .rep .tooltip .badge }
#### [CollectibleType](../enums/CollectibleType) GetActiveItem ( int ActiveSlot ) {: .copyable aria-label='Functions' data-altreturn='0' }
Returns the currently held item. Returns `0` when no item is held.
___ 
### Get·Active·Sub·Charge () {: aria-label='Functions' }
[[ ](#){: .rep .tooltip .badge }
#### int GetActiveSubCharge ( int ActiveSlot ) {: .copyable aria-label='Functions' }

Get the current items subcharge. (Useful for items that charge up over time.)
___ 
### Get·Active·Weapon·Entity () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) GetActiveWeaponEntity ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

___ 
### Get·Aim·Direction () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const [Vector](../Vector) GetAimDirection ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Baby·Skin () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [BabySubType](../enums/BabySubType) GetBabySkin ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Battery·Charge () {: aria-label='Functions' }
[[ ](#){: .rep .tooltip .badge }
#### int GetBatteryCharge ( int ActiveSlot ) {: .copyable aria-label='Functions' }

Get the current charge progress of the second charge of your current active item. This bar is only active, when you have the Collectible "The Battery"
___ 
### Get·Black·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetBlackHearts ( ) {: .copyable aria-label='Functions' }
This does not return the # of black hearts, this returns the bit mask for which soul hearts are black hearts. 
___ 
### Get·Bomb·Flags () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetBombFlags ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Bomb·Variant () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### EntityBomb::BombVariant GetBombVariant ( int TearFlags, boolean ForceSmallBomb ) {: .copyable aria-label='Functions' }
Pass tear flags to add extra effects to the bomb visual like burn -> hot bombs, even if player doesn't have Hot Bombs collectible. ForceSmallBomb will override large bomb variants for TEAR_PERSISTENT. 
___ 
### Get·Bone·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetBoneHearts ( ) {: .copyable aria-label='Functions' }
Returns the number of bone hearts as an integer value. 1 Boneheart = 1.

???- example "Example Code"
    This code gets the total amount of red heart containers including bone hearts. The bonehearts need to be mulltiplied by 2, since in GetMaxHearts() 2 equals 1 full heart. 

    ```lua 
    local player = Isaac.GetPlayer(0)
    local totalRedHearts = player:GetMaxHearts() + player:GetBoneHearts() * 2
    ```

___ 
### Get·Card () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Card](../enums/Card) GetCard ( int SlotId ) {: .copyable aria-label='Functions' data-altreturn='0' }

Gets the ID of the card the player is holding in the given itemslot (0 or 1). Returns `0` when no card is held in the slot.
___ 
### Get·Card·RNG () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [RNG](../RNG) GetCardRNG ( [Card](../enums/Card) ID ) {: .copyable aria-label='Functions' }

___ 
### Get·Collectible·Count () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetCollectibleCount ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Collectible·Num () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetCollectibleNum ( [CollectibleType](../enums/CollectibleType) Type ) {: .copyable aria-label='Functions' }

___ 
### Get·Collectible·RNG () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [RNG](../RNG) GetCollectibleRNG ( [CollectibleType](../enums/CollectibleType) ID ) {: .copyable aria-label='Functions' }

___ 
### Get·Costume·Null·Pos () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetCostumeNullPos ( string NullFrameName, boolean HeadScale, [Vector](../Vector) Direction ) {: .copyable aria-label='Functions' }

___ 
### Get·Damage·Cooldown () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetDamageCooldown ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Effective·Max·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetEffectiveMaxHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of Red Hearts the player can contain in their Heart Containers and Bone Hearts. 1 unit is half a red heart.
**Example:** you have 3 red heart container and one bone heart. 6(red) + 2(bone) = 8 
___ 
### Get·Effects () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [TemporaryEffects](../TemporaryEffects) GetEffects ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Eternal·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetEternalHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of eternal hearts the player has.
___ 
### Get·Extra·Lives () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetExtraLives ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Fire·Direction () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Direction](../enums/Direction) GetFireDirection ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Flying·Offset () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetFlyingOffset ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Golden·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetGoldenHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of golden hearts the player has.
___ 
### Get·Greed·Donation·Break·Chance () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float GetGreedDonationBreakChance ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Head·Direction () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Direction](../enums/Direction) GetHeadDirection ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Heart·Limit () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetHeartLimit ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of red hearts the player has inside their heart containers and bone hearts. 1 unit is half a heart.
___ 
### Get·Item·State () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [CollectibleType](../enums/CollectibleType) GetItemState ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Jar·Flies () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetJarFlies ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Jar·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetJarHearts ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Laser·Offset () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetLaserOffset ( [LaserOffset](../enums/LaserOffset) ID, [Vector](../Vector) Direction ) {: .copyable aria-label='Functions' }

___ 
### Get·Last·Action·Triggers () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetLastActionTriggers ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Last·Damage·Flags () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetLastDamageFlags ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Last·Damage·Source () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const [EntityRef](../EntityRef) GetLastDamageSource ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Last·Direction () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const [Vector](../Vector) GetLastDirection ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Max·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetMaxHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of Heart Containers the player has. 1 unit is half a heart container.
___ 
### Get·Max·Poket·Items () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetMaxPoketItems ( ) {: .copyable aria-label='Functions' }

Get the number of Pickup items you can carry. (1 on default. 2 with belly button or similar)

???+ bug "Bugs"
    This function is spelled wrong.
___ 
### Get·Max·Trinkets () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetMaxTrinkets ( ) {: .copyable aria-label='Functions' }

Get the number of trinkets you can carry. (1 on default. 2 with moms purse or similar)
___ 
### Get·Movement·Direction () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Direction](../enums/Direction) GetMovementDirection ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Movement·Input () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const [Vector](../Vector) GetMovementInput ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Movement·Joystick () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetMovementJoystick ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Movement·Vector () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetMovementVector ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Multi·Shot·Params () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### MultiShotParams GetMultiShotParams ( int WeaponType ) {: .copyable aria-label='Functions' }

___ 
### Get·Multi·Shot·Position·Velocity () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [PosVel](../PlayerTypes_PosVel) GetMultiShotPositionVelocity ( int LoopIndex, [WeaponType](../enums/WeaponType) Weapon, [Vector](../Vector) ShotDirection, float ShotSpeed, MultiShotParams params ) {: .copyable aria-label='Functions' }
Call this function in a loop with values from 0 to MultiShotParams.NumProjectiles-1 (inclusive) 
___ 
### Get·Name () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### string GetName ( ) {: .copyable aria-label='Functions' }

Returns the name of the player. (Isaac, Cain, Azazel,...)
___ 
### Get·NPCTarget () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) GetNPCTarget ( ) {: .copyable aria-label='Functions' }
normally returns the player itself. Can redirect enemy attacks to a different entity such as Best Friend 
___ 
### Get·Num·Blue·Flies () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNumBlueFlies ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Num·Blue·Spiders () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNumBlueSpiders ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Num·Bombs () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNumBombs ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Num·Coins () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNumCoins ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Num·Keys () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNumKeys ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Pill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [PillColor](../enums/PillColor) GetPill ( int SlotId ) {: .copyable aria-label='Functions' data-altreturn='0' }

Gets the ID of the pill the player is holding in the given itemslot (0 or 1). Returns `0` when no pill is held in the given slot.
___ 
### Get·Pill·RNG () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [RNG](../RNG) GetPillRNG ( [PillEffect](../enums/PillEffect) ID ) {: .copyable aria-label='Functions' }

___ 
### Get·Player·Type () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [PlayerType](../enums/PlayerType) GetPlayerType ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Pocket·Item () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const PlayerPocketItem GetPocketItem ( int SlotId ) {: .copyable aria-label='Functions' }

Get the userdata of the pocketitem (Card,Pill,rune) in a said slot.

???+ bug "Bugs"
    This function returns userdata, which cant be processed. It is therefore broken and should not be used! 
___ 
### Get·Recent·Movement·Vector () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const [Vector](../Vector) GetRecentMovementVector ( ) {: .copyable aria-label='Functions' }
Returns the joystick direction that drives player movement, taking into account certain modifiers like disabled controls and seed effects. 
___ 
### Get·Shooting·Input () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetShootingInput ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Shooting·Joystick () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetShootingJoystick ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Smooth·Body·Rotation () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float GetSmoothBodyRotation ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Soul·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetSoulHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of Soul Hearts the player has. 1 unit is half a heart.

???- note "Notes"
    Black Hearts count toward this total, as the game sees them as soul hearts.
___ 
### Get·Sub·Player () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityPlayer](../EntityPlayer) GetSubPlayer ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

___ 
### Get·Tear·Hit·Params () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [TearParams](../TearParams) GetTearHitParams ( [WeaponType](../enums/WeaponType) WeaponType, float DamageScale, int TearDisplacement ) {: .copyable aria-label='Functions' }
 Used for tear parameters that are calculated on hit (ex: Tough love, Common cold), DamageScale is used for scale calculation based on damage 
___ 
### Get·Tear·Movement·Inheritance () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetTearMovementInheritance ( [Vector](../Vector) ShotDirection ) {: .copyable aria-label='Functions' }

___ 
### Get·Tear·Poison·Damage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float GetTearPoisonDamage ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Tear·Range·Modifier () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetTearRangeModifier ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Total·Damage·Taken () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetTotalDamageTaken ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Tractor·Beam () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) GetTractorBeam ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

___ 
### Get·Trinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [TrinketType](../enums/TrinketType) GetTrinket ( int TrinketIndex ) {: .copyable aria-label='Functions' data-altreturn='0' }

Gets the ID of the trinket the player is holding in the given trinketslot (0 or 1). Returns `0` when no trinket is held in the given slot.
___ 
### Get·Trinket·Multiplier () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetTrinketMultiplier ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Trinket·RNG () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [RNG](../RNG) GetTrinketRNG ( [TrinketType](../enums/TrinketType) ID ) {: .copyable aria-label='Functions' }

___ 
### Get·Velocity·Before·Update () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const [Vector](../Vector) GetVelocityBeforeUpdate ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Zodiac·Effect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [CollectibleType](../enums/CollectibleType) GetZodiacEffect ( ) {: .copyable aria-label='Functions' }

___ 
### Has·Collectible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasCollectible ( [CollectibleType](../enums/CollectibleType) Type ) {: .copyable aria-label='Functions' }

___ 
### Has·Full·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasFullHearts ( ) {: .copyable aria-label='Functions' }

___ 
### Has·Full·Hearts·And·Soul·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasFullHeartsAndSoulHearts ( ) {: .copyable aria-label='Functions' }

___ 
### Has·Golden·Bomb () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasGoldenBomb ( ) {: .copyable aria-label='Functions' }

___ 
### Has·Golden·Key () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasGoldenKey ( ) {: .copyable aria-label='Functions' }

___ 
### Has·Invincibility () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean HasInvincibility ( int DamageFlags ) {: .copyable aria-label='Functions' }
returns true when player is in an invincibility state 
___ 
### Has·Player·Form () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasPlayerForm ( [PlayerForm](../enums/PlayerForm) Form ) {: .copyable aria-label='Functions' }

___ 
### Has·Timed·Item () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasTimedItem ( ) {: .copyable aria-label='Functions' }
Kept for avoiding modding issues. 
___ 
### Has·Trinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasTrinket ( [TrinketType](../enums/TrinketType) Type ) {: .copyable aria-label='Functions' }

___ 
### Has·Weapon·Type () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasWeaponType ( [WeaponType](../enums/WeaponType) WeaponType ) {: .copyable aria-label='Functions' }

___ 
### Init·Baby·Skin () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void InitBabySkin ( ) {: .copyable aria-label='Functions' }

___ 
### Is·Black·Heart () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsBlackHeart ( int Heart ) {: .copyable aria-label='Functions' }

___ 
### Is·Bone·Heart () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsBoneHeart ( int heart ) {: .copyable aria-label='Functions' }

___ 
### Is·Extra·Animation·Finished () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsExtraAnimationFinished ( ) {: .copyable aria-label='Functions' }

___ 
### Is·Full·Sprite·Rendering () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsFullSpriteRendering ( ) {: .copyable aria-label='Functions' }

___ 
### Is·Held·Item·Visible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsHeldItemVisible ( ) {: .copyable aria-label='Functions' }

___ 
### Is·Holding·Item () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsHoldingItem ( ) {: .copyable aria-label='Functions' }
Is Player holding up an item (card/collectible/etc) 
___ 
### Is·Item·Queue·Empty () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsItemQueueEmpty ( ) {: .copyable aria-label='Functions' }

___ 
### Is·P2Appearing () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsP2Appearing ( ) {: .copyable aria-label='Functions' }

___ 
### Is·Pos·In·Spot·Light () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsPosInSpotLight ( [Vector](../Vector) Position ) {: .copyable aria-label='Functions' }

___ 
### Is·Sub·Player () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsSubPlayer ( ) {: .copyable aria-label='Functions' }
This is for players that require multiple player entities, such as the Forgotten (this has nothing to do with co-players!) 
___ 
### Needs·Charge () {: aria-label='Functions' }
[[ ](#){: .rep .tooltip .badge }
#### boolean NeedsCharge ( int ActiveSlot ) {: .copyable aria-label='Functions' }

___ 
### Play·Extra·Animation () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void PlayExtraAnimation ( string Animation ) {: .copyable aria-label='Functions' }

___ 
### Queue·Extra·Animation () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void QueueExtraAnimation ( string Animation ) {: .copyable aria-label='Functions' }

___ 
### Queue·Item () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void QueueItem ( [ItemConfig::Item](../ItemConfig_Item) Item, int Charge, boolean Touched ) {: .copyable aria-label='Functions' }
Add Collectible/Trinket after animation is finished. 
___ 
### Remove·Black·Heart () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveBlackHeart ( int BlackHeart ) {: .copyable aria-label='Functions' }

___ 
### Remove·Blue·Fly () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveBlueFly ( ) {: .copyable aria-label='Functions' }

___ 
### Remove·Blue·Spider () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveBlueSpider ( ) {: .copyable aria-label='Functions' }

___ 
### Remove·Collectible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveCollectible ( [CollectibleType](../enums/CollectibleType) Type ) {: .copyable aria-label='Functions' }

___ 
### Remove·Costume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveCostume ( [ItemConfig::Item](../ItemConfig_Item) Item ) {: .copyable aria-label='Functions' }
Removes a given costume based on its item config entry.

???- example "Example code"
    This code removes the costume of the Spoon Bender collectible.
    ```lua
    local player = Isaac.GetPlayer(0)
    local itemConfig = Isaac.GetItemConfig():GetCollectible(CollectibleType.COLLECTIBLE_SPOON_BENDER)
    player:RemoveCostume(itemConfig)
    ```
___ 
### Remove·Golden·Bomb () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveGoldenBomb ( ) {: .copyable aria-label='Functions' }

___ 
### Remove·Golden·Key () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveGoldenKey ( ) {: .copyable aria-label='Functions' }

___ 
### Remove·Skin·Costume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveSkinCostume ( ) {: .copyable aria-label='Functions' }
Removes player-specific costumes like Magdalene's Hair or Cain's eyepatch.

___ 
### Render·Body () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RenderBody ( [Vector](../Vector) position ) {: .copyable aria-label='Functions' }

___ 
### Render·Glow () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RenderGlow ( [Vector](../Vector) position ) {: .copyable aria-label='Functions' }

___ 
### Render·Head () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RenderHead ( [Vector](../Vector) position ) {: .copyable aria-label='Functions' }

___ 
### Render·Top () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RenderTop ( [Vector](../Vector) position ) {: .copyable aria-label='Functions' }

___ 
### Replace·Costume·Sprite () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ReplaceCostumeSprite ( [ItemConfig::Item](../ItemConfig_Item) Item, string SpritePath, int SpriteId ) {: .copyable aria-label='Functions' }

___ 
### Reset·Damage·Cooldown () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ResetDamageCooldown ( ) {: .copyable aria-label='Functions' }

___ 
### Reset·Item·State () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ResetItemState ( ) {: .copyable aria-label='Functions' }
[Room](../Room) transitions call this to prevent lock ups.
___ 
### Respawn·Familiars () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RespawnFamiliars ( ) {: .copyable aria-label='Functions' }

___ 
### Revive () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Revive ( ) {: .copyable aria-label='Functions' }
revive player 
___ 
### Set·Active·Charge () {: aria-label='Functions' }
[[ ](#){: .rep .tooltip .badge }
#### void SetActiveCharge ( int Charge, int ActiveSlot ) {: .copyable aria-label='Functions' }

___ 
### Set·Card () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetCard ( int SlotId, [Card](../enums/Card) ID ) {: .copyable aria-label='Functions' }

Change the card/rune the player is holding in the given itemslot (0 or 1).
___ 
### Set·Full·Hearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetFullHearts ( ) {: .copyable aria-label='Functions' }

___ 
### Set·Min·Damage·Cooldown () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetMinDamageCooldown ( int DamageCooldown ) {: .copyable aria-label='Functions' }

___ 
### Set·Pill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetPill ( int SlotId, [PillColor](../enums/PillColor) Pill ) {: .copyable aria-label='Functions' }

Change the pill the player is holding in the given itemslot (0 or 1).
___ 
### Set·Shooting·Cooldown () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetShootingCooldown ( int Cooldown ) {: .copyable aria-label='Functions' }

___ 
### Set·Target·Trap·Door () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetTargetTrapDoor ( [GridEntity](../GridEntity) TrapDoor ) {: .copyable aria-label='Functions' }

___ 
### Shoot·Red·Candle () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ShootRedCandle ( [Vector](../Vector) Direction ) {: .copyable aria-label='Functions' }
for ghost pepper item + poop and farts 
___ 
### Spawn·Maw·Of·Void () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityLaser](../EntityLaser) SpawnMawOfVoid ( int Timeout ) {: .copyable aria-label='Functions' }

___ 
### Stop·Extra·Animation () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void StopExtraAnimation ( ) {: .copyable aria-label='Functions' }

___ 
### Swap·Active·Items () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SwapActiveItems ( ) {: .copyable aria-label='Functions' }

___ 
### Throw·Blue·Spider () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) ThrowBlueSpider ( [Vector](../Vector) Position, [Vector](../Vector) Target ) {: .copyable aria-label='Functions' }

___ 
### Try·Hold·Trinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean TryHoldTrinket ( [TrinketType](../enums/TrinketType) Type ) {: .copyable aria-label='Functions' }
Returns true if an active item pickup cooldown is over. returns true if trinket can be added, else false 
___ 
### Try·Remove·Collectible·Costume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void TryRemoveCollectibleCostume ( [CollectibleType](../enums/CollectibleType) Collectible, boolean KeepPersistent ) {: .copyable aria-label='Functions' }
Tries to remove a costume of the given collectible. `KeepPersistent` is used to define if persistent costumes should be removed. If its set to `false`, it will only remove temporary costumes.

???- example "Example code"
    This code removes the costume of the Spoon Bender collectible.
    ```lua
    local player = Isaac.GetPlayer(0)
    player:TryRemoveCollectibleCostume(CollectibleType.COLLECTIBLE_SPOON_BENDER, false)
    ```
___ 
### Try·Remove·Null·Costume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void TryRemoveNullCostume ( [ItemConfig::NullItemID](../ItemConfig_Item) NullId ) {: .copyable aria-label='Functions' }

___ 
### Try·Remove·Trinket () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean TryRemoveTrinket ( [TrinketType](../enums/TrinketType) Type ) {: .copyable aria-label='Functions' }

___ 
### Try·Remove·Trinket·Costume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void TryRemoveTrinketCostume ( [TrinketType](../enums/TrinketType) Trinket ) {: .copyable aria-label='Functions' }
Tries to remove a trinket costume
___ 
### Try·Use·Key () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean TryUseKey ( ) {: .copyable aria-label='Functions' }

___ 
### Update·Can·Shoot () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void UpdateCanShoot ( ) {: .copyable aria-label='Functions' }

___ 
### Use·Active·Item () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void UseActiveItem ( [CollectibleType](../enums/CollectibleType) Item, boolean ShowAnim, boolean KeepActiveItem, boolean AllowNonMainPlayer, boolean ToAddCostume, int ActiveSlot ) {: .copyable aria-label='Functions' }

___ 
### Use·Card () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void UseCard ( [Card](../enums/Card) ID ) {: .copyable aria-label='Functions' }

___ 
### Use·Pill () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void UsePill ( [PillEffect](../enums/PillEffect) ID, [PillColor](../enums/PillColor) PillColor ) {: .copyable aria-label='Functions' }

___ 
### Will·Player·Revive () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean WillPlayerRevive ( ) {: .copyable aria-label='Functions' }

___ 
## Variables
### Baby·Skin {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [BabySubType](../enums/BabySubType) BabySkin  {: .copyable aria-label='Variables' }
P2 Skin section Used to hold the selected skin (in case of glitched baby it will pick a random one)

???+ bug "Bugs"
    This variable actually contains userdata and is not usable within API. Attempt to change it will results in a crash.
    
___ 
### Can·Fly {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanFly  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. Can the player fly over rocks and pits? 
___ 
### Controller·Index {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const int ControllerIndex  {: .copyable aria-label='Variables' }

___ 
### Controls·Cooldown {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int ControlsCooldown  {: .copyable aria-label='Variables' }

___ 
### Controls·Enabled {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean ControlsEnabled  {: .copyable aria-label='Variables' }

___ 
### Damage {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Damage  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Damage Stat.**  How much damage do the players tears or other main weapons do? 
___ 
### Fire·Delay {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int FireDelay  {: .copyable aria-label='Variables' }
How long until the player can spawn their next tear? 
___ 
### Friend·Ball·Enemy {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const EntityDesc FriendBallEnemy  {: .copyable aria-label='Variables' }

???+ bug "Bugs"
    This function returns userdata that cant be edited or accessed.
___ 
### Head·Frame·Delay {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int HeadFrameDelay  {: .copyable aria-label='Variables' }

___ 
### Item·Hold·Cooldown {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int ItemHoldCooldown  {: .copyable aria-label='Variables' }
Used for avoiding player get stucked between rocks when switching a flying item with other active item. 
___ 
### Laser·Color {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Color](../Color) LaserColor  {: .copyable aria-label='Variables' }

___ 
### Luck {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Luck  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Luck Stat.**  Better luck generally means better random events. 
___ 
### Max·Fire·Delay {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int MaxFireDelay  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Tears Stat.**  How long between each tear can spawn? 
___ 
### Move·Speed {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float MoveSpeed  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Speed Stat.**  How fast can the player move? 
___ 
### Queued·Item {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [QueueItemData](../QueueItemData) QueuedItem  {: .copyable aria-label='Variables' }
item queue for when the player is picking up an item. the item is in effect as soon as the animation is finished and will be removed from the queue. 
___ 
### Secondary·Active·Item {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [ActiveItemDesc](../PlayerTypes_ActiveItemDesc) SecondaryActiveItem  {: .copyable aria-label='Variables' data-altreturn='nil' }

___ 
### Shot·Speed {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float ShotSpeed  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the ShotSpeed Stat.**  How fast does the tear travel when spawned? 
___ 
### Sprite·Scale {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) SpriteScale  {: .copyable aria-label='Variables' }

___ 
### Tear·Color {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Color](../Color) TearColor  {: .copyable aria-label='Variables' }

___ 
### Tear·Falling·Acceleration {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float TearFallingAcceleration  {: .copyable aria-label='Variables' }

___ 
### Tear·Falling·Speed {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float TearFallingSpeed  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. How fast is the tear moving up or down when it spawns? Affects range. 
___ 
### Tear·Flags {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [TearFlags](../enums/TearFlags) TearFlags {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. Various [TearFlags](../enums/TearFlags). 

???- example "Example Code"
    This code makes Isaac's tears spectral. 
    ```lua 
    local mod:OnEvaluateTearFlags(player, flag)
        player.TearFlags = player.TearFlags | TearFlags.TEAR_SPECTRAL
    end
    
    mod:AddCallback(ModCallbacks.MC_EVALUATE_CACHE, mod.OnEvaluateTearFlags, CacheFlag.CACHE_TEARFLAG)
    
    ```
___ 
### Tear·Height {: aria-label='Variables' }
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
### Tears·Offset {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) TearsOffset  {: .copyable aria-label='Variables' }

___ 
