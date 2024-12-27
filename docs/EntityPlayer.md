---
tags:
  - Class
  - Player
---
# Class "EntityPlayer"

???+ info
    You can get this class by using the following function:

    * [Entity.ToPlayer()](Entity.md#toplayer)
    * [EntityFamiliar.Player](EntityFamiliar.md#player)
    * [EntityPlayer.GetMainTwin()](EntityPlayer.md#getmaintwin)
    * [EntityPlayer.GetOtherTwin()](EntityPlayer.md#getothertwin)
    * [EntityPlayer.GetSubPlayer()](EntityPlayer.md#getsubplayer)
    * [Game.GetNearestPlayer()](Game.md#getnearestplayer)
    * [Game.GetPlayer()](Game.md#getplayer)
    * [Game.GetRandomPlayer()](Game.md#getrandomplayer)
    * [Isaac.GetPlayer()](Isaac.md#getplayer)

    ???+ example "Example Code"
        `local player = Isaac.GetPlayer()`

## Class Diagram
--8<-- "docs/snippets/EntityClassDiagram.md"
## Functions
### Add·Black·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddBlackHearts ( int BlackHearts ) {: .copyable aria-label='Functions' }

Adds Black hearts to the player. 1 unit is half a heart. Remove them with negative numbers.

???- example "Example Code"
    This code adds 1 full black heart to the player.
    ```lua
    Isaac.GetPlayer():AddBlackHearts(2)
    ```

___
### Add·Blood·Charge () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddBloodCharge ( int Amount ) {: .copyable aria-label='Functions' }

Adds to the amount of Blood Charge the player has. Blood Charge does not do anything on characters besides Tainted Bethany.

___
### Add·Blue·Flies () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.md) AddBlueFlies ( int Amount, [Vector](Vector.md) Position, [Entity](Entity.md) Target ) {: .copyable aria-label='Functions' }
???- amount info
    The trinket **Fish Tail** will always double the `amount` of flies added by this function.

___
### Add·Blue·Spider () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.md) AddBlueSpider ( [Vector](Vector.md) Position ) {: .copyable aria-label='Functions' }

___
### Add·Bombs () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddBombs ( int Amount ) {: .copyable aria-label='Functions' }

Adds bombs to the player. Remove them with negative numbers.

???- example "Example Code"
    This code removes 1 bomb from the player.
    ```lua
    Isaac.GetPlayer():AddBombs(-1)
    ```

___
### Add·Bone·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddBoneHearts ( int Hearts ) {: .copyable aria-label='Functions' }

Adds bone hearts to the player. 1 unit is a single bone heart. Remove them with negative numbers.

???- example "Example Code"
    This code adds 1 bone heart to the player.
    ```lua
    Isaac.GetPlayer():AddBoneHearts(1)
    ```

___
### Add·Broken·Hearts () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddBrokenHearts ( int BrokenHearts ) {: .copyable aria-label='Functions' }

Adds broken hearts to the player. 1 unit is one broken heart. Broken hearts can be removed with negative numbers.
???- example "Example Code"
	This code adds 1 broken heart to the player, then takes it away.
	```lua
	Isaac.GetPlayer():AddBrokenHearts(1)
	Isaac.GetPlayer():AddBrokenHearts(-1)
	```
___
### Add·Cache·Flags () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddCacheFlags ( [CacheFlag](enums/CacheFlag.md) CacheFlag ) {: .copyable aria-label='Functions' }
Will reevaluate the cache flags provided in the next cache reevaluation.

???- example "Example Code"
    This code will add several cacheflags.
    ```lua
    Isaac.GetPlayer():AddCacheFlags(CacheFlag.CACHE_DAMAGE | CacheFlag.CACHE_FIREDELAY | CacheFlag.CACHE_LUCK)
    ```
___
### Add·Card () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddCard ( [Card](enums/Card.md) ID ) {: .copyable aria-label='Functions' }

___
### Add·Coins () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddCoins ( int Amount ) {: .copyable aria-label='Functions' }

Adds coins to the player. Remove them with negative numbers.

???- example "Example Code"
    This code adds 1 coin to the player.
    ```lua
    Isaac.GetPlayer():AddCoins(1)
    ```

___
### Add·Collectible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddCollectible ( [CollectibleType](enums/CollectibleType.md) Type, int Charge = 0, boolean FirstTimePickingUp = true, [ActiveSlot](enums/ActiveSlot.md) Slot = ActiveSlot.SLOT_PRIMARY, int VarData = 0) {: .copyable aria-label='Functions' }

Setting **FirstTimePickingUp** to false will not add the consumables (keys, bombs,...) of the item and will cause it to not count towards transformations.

- Slot 0 is default (normal active item)
- Slot 1 is used by Schoolbag
- Slot 2 is used for pocket active items

???- note "Notes"
	Slot 2 cannot be used if character did not start with a pocket active

VarData is used for the storage of a persistent context-sensitive value

???- note "Notes"
	This is a list of all items that make use of VarData:

    - Jar of Wisps: Wisps spawned on next use (Max 12)
	- D Infinity, Blank Card, Clear Rune, Placebo: Current maximum charge (Any value above 0)
	- Hold: Stored poop
	    - Poop Types:
	    - [0] None
	    - [1] Normal
	    - [2] Flies
	    - [3] Fire
	    - [4] Petrified
	    - [5] Toxic
	    - [6] Black
	    - [7] Holy
	    - [8] X-Lax
	    - [9] Fart
	    - [10] Bomb
	    - [11] Explosive Diarrhea
	    - [12+] Empty

___
### Add·Controls·Cooldown () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddControlsCooldown ( int Cooldown ) {: .copyable aria-label='Functions' }

___
### Add·Costume () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddCostume ( [ItemConfigItem](ItemConfig_Item.md) Item, boolean ItemStateOnly ) {: .copyable aria-label='Functions' }

___
### Add·Curse·Mist·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddCurseMistEffect ( ) {: .copyable aria-label='Functions' }

___
### Add·Dead·Eye·Charge () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddDeadEyeCharge ( ) {: .copyable aria-label='Functions' }

___
### Add·Dollar·Bill·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddDollarBillEffect ( ) {: .copyable aria-label='Functions' }

___
### Add·Eternal·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddEternalHearts ( int EternalHearts ) {: .copyable aria-label='Functions' }

Adds eternal hearts to the player. 1 unit is half a heart. Remove them with negative numbers.

(Note that eternal hearts automatically turn to full hearts, when you have more than one.)

???- example "Example Code"
    This code adds 1 eternal heart to the player.
    ```lua
    Isaac.GetPlayer():AddEternalHearts(1)
    ```

___
### Add·Friendly·Dip () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddFriendlyDip ( int Subtype, [Vector](Vector.md) Position ) {: .copyable aria-label='Functions' }

???- note "Dip Subtypes"
    ```lua
    0: normal
    1: red
    2: corny
    3: golden
    4: rainbow
    5: black
    6: holy
    12: stone
    13: flaming
    14: poison
    20: brownie
    ```
___
### Add·Giga·Bombs () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddGigaBombs ( int GigaBombs ) {: .copyable aria-label='Functions' }

???- note "Notes"
	Giga bombs do not add to the bomb counter, make sure to increase the bomb count beforehand!
	You can't add more giga bombs than player's current bomb count.

___
### Add·Golden·Bomb () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddGoldenBomb ( ) {: .copyable aria-label='Functions' }

___
### Add·Golden·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddGoldenHearts ( int Hearts ) {: .copyable aria-label='Functions' }

Adds golden hearts to the player. 1 unit is a single gold heart. Remove them with negative numbers.

???- example "Example Code"
    This code adds 1 golden heart to the player.
    ```lua
    Isaac.GetPlayer():AddGoldenHearts(1)
    ```

___
### Add·Golden·Key () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddGoldenKey ( ) {: .copyable aria-label='Functions' }

___
### Add·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddHearts ( int Hearts ) {: .copyable aria-label='Functions' }

Adds red hearts to the player if there are any empty heart containers. 1 unit is half a heart. Remove health with negative numbers.

???- example "Example Code"
    This code adds 1 full red heart to the player.
    ```lua
    Isaac.GetPlayer():AddHearts(2)
    ```

___
### Add·Item·Wisp () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [EntityFamiliar](EntityFamiliar.md) AddItemWisp ( [CollectibleType](enums/CollectibleType.md) Collectible, [Vector](Vector.md) Position, boolean AdjustOrbitLayer = false ) {: .copyable aria-label='Functions' }

___
### Add·Jar·Flies () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddJarFlies ( int Flies ) {: .copyable aria-label='Functions' }

___
### Add·Jar·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddJarHearts ( int Hearts ) {: .copyable aria-label='Functions' }

___
### Add·Keys () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddKeys ( int Amount ) {: .copyable aria-label='Functions' }

Adds keys to the player. Remove them with negative numbers.

???- example "Example Code"
    This code adds 1 key to the player.
    ```lua
    Isaac.GetPlayer():AddKeys(1)
    ```

___
### Add·Max·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddMaxHearts ( int MaxHearts, boolean IgnoreKeeper ) {: .copyable aria-label='Functions' }

Adds heart containers to the player. 2 units is a full heart container. Remove them with negative numbers.

???- note "Notes"
    It is possible to add a half heart container to the player. This will appear as a regular heart container but can only be filled half-way.

???- example "Example Code"
    This code adds 1 heart container to the player.
    ```lua
    Isaac.GetPlayer():AddMaxHearts(2,true)
    ```


???+ bug "Bugs"
    IgnoreKeeper does not appear to work as intended.

    Max hearts can be added or removed from Keeper regardless of what this boolean is.
    If Keeper has Greed's Gullet and this boolean is set to false, max hearts cannot be added to Keeper, but can be removed normally.
    If Keeper has Greed's Gullet and this boolean is set to true, Max hearts can be added or removed from Keeper normally.

___
### Add·Minisaac () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [EntityFamiliar](EntityFamiliar.md) AddMinisaac ( [Vector](Vector.md) Position, boolean PlayAnim = true ) {: .copyable aria-label='Functions' }

___
### Add·Null·Costume () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddNullCostume ( [NullItemID](enums/NullItemID.md) NullId ) {: .copyable aria-label='Functions' }

___
### Add·Pill () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddPill ( [PillColor](enums/PillColor.md) Pill ) {: .copyable aria-label='Functions' }

___
### Add·Player·Form·Costume () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddPlayerFormCostume ( [PlayerForm](enums/PlayerForm.md) Form ) {: .copyable aria-label='Functions' }
Adds the costume of the given transformation.

___
### Add·Poop·Mana () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddPoopMana ( int Num ) {: .copyable aria-label='Functions' }

Adds (or remove) poop consumables from the player

___
### Add·Pretty·Fly () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddPrettyFly ( ) {: .copyable aria-label='Functions' }

___
### Add·Rotten·Hearts () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddRottenHearts ( int RottenHearts ) {: .copyable aria-label='Functions' }
Adds rotten hearts to the player. 1 unit is half a heart. Remove rotten hearts with negative numbers.

???- example "Example Code"
    This code adds 1 full rotten heart to the player.
    ```lua
    Isaac.GetPlayer():AddRottenHearts(2)
    ```

___
### Add·Soul·Charge () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddSoulCharge ( int Amount ) {: .copyable aria-label='Functions' }

Adds Soul Charge to the player. Soul Charge does not do anything on characters besides Bethany.

___
### Add·Soul·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddSoulHearts ( int SoulHearts ) {: .copyable aria-label='Functions' }

Adds soul hearts to the player. 1 unit is half a heart. Remove them with negative numbers.

???- example "Example Code"
    This code adds 1 full soul heart to the player.
    ```lua
    Isaac.GetPlayer():AddSoulHearts(2)
    ```
___
### Add·Swarm·Fly·Orbital () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [EntityFamiliar](EntityFamiliar.md) AddSwarmFlyOrbital ( [Vector](Vector.md) Position ) {: .copyable aria-label='Functions' }

___
### Add·Trinket () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddTrinket ( [TrinketType](enums/TrinketType.md) Type, boolean FirstTimePickingUp = true ) {: .copyable aria-label='Functions' }

- If the player does not have any open trinket slots, this function will do nothing.
- If the player has an open trinket slot but already has a trinket, the new trinket will go to the first slot and the existing trinket will get pushed back to the second slot.
- If you provide an argument of 0 or an otherwise invalid trinket ID, the game will crash.
- Setting **FirstTimePickingUp** to false will not spawn or add pickups for the item and will not cause it to count towards transformations.
___
### Add·Wisp () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [EntityFamiliar](EntityFamiliar.md) AddWisp ( [CollectibleType](enums/CollectibleType.md) Collectible, [Vector](Vector.md) Position, boolean AdjustOrbitLayer = false, boolean DontUpdate = false ) {: .copyable aria-label='Functions' }
The type of Wisp can be defined with the Collectible. If the ID is not corresponding to an active item with a special wisp, it will default to the regular blue wisp.

To access special wisp variant like Delirious forms, you need to add `65536` (1 << 16) to the id. Example: Delirious Monstro has `id = s14`, so the wisps id is `65550`.

___
### Animate·Appear () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AnimateAppear ( ) {: .copyable aria-label='Functions' }
Play the animation that is normally played at the beginning of a stage.
___
### Animate·Card () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AnimateCard ( [Card](enums/Card.md) ID, string AnimName = "Pickup" ) {: .copyable aria-label='Functions' }

___
### Animate·Collectible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AnimateCollectible ( [CollectibleType](enums/CollectibleType.md) Collectible, string AnimName = "Pickup", string SpriteAnimName = "PlayerPickupSparkle" ) {: .copyable aria-label='Functions' }
`AnimName` refers to an animation name in `001.000_player.anm2` (e.g. `Pickup` or `UseItem`). `SpriteAnimName` refers to an animation name in `005.100_collectible.anm2` (e.g. `PlayerPickup` or `PlayerPickupSparkle`).

___
### Animate·Happy () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AnimateHappy ( ) {: .copyable aria-label='Functions' }
Plays the happy animation, played when taking a positive pill.

???- example "Example Code"
    This code plays the happy animation.
    ```lua
    local player = Isaac.GetPlayer()
    player:AnimateHappy()
    ```

### Animate·Light·Travel () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AnimateLightTravel ( ) {: .copyable aria-label='Functions' }
Plays the animation that is played when entering the light in the ascent, or entering the cathedral.

???- example "Example Code"
	Plays the animation.
	```lua
    local player = Isaac.GetPlayer()
	player:AnimateLightTravel()
	```

___
### Animate·Pickup () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AnimatePickup ( [Sprite](Sprite.md) sprite, boolean HideShadow = false, string AnimName = "Pickup" ) {: .copyable aria-label='Functions' }
Plays a pickup animation using any supplied Sprite object
HideShadow should be usually set to true when rendering a sprite with a custom shadow layer

___
### Animate·Pill () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AnimatePill ( [PillColor](enums/PillColor.md) Pill, string AnimName = "Pickup" ) {: .copyable aria-label='Functions' }

___
### Animate·Pitfall·In () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AnimatePitfallIn ( ) {: .copyable aria-label='Functions' }
Does 1/2 heart of damage and plays the animation of falling into a pitfall.
___
### Animate·Pitfall·Out () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AnimatePitfallOut ( ) {: .copyable aria-label='Functions' }
The animation of jumping back out of a pitfall.
___
### Animate·Sad () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AnimateSad ( ) {: .copyable aria-label='Functions' }
Plays the sad animation, played when taking a negative pill.

???- example "Example Code"
	Plays the sad animation.
	```lua
    	local player = Isaac.GetPlayer()
	player:AnimateSad()
	```
___
### Animate·Teleport () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AnimateTeleport ( boolean Up ) {: .copyable aria-label='Functions' }
The animation played when teleporting into another room.
___
### Animate·Trapdoor () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AnimateTrapdoor ( ) {: .copyable aria-label='Functions' }
Plays the animation of the player jumping down a trapdoor.
	???- example "Example Code"
		Plays the animation of jumping down a trapdoor.
		``local player = Isaac.GetPlayer()
		player:AnimateTrapdoor()
		``

___
### Animate·Trinket () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AnimateTrinket ( [TrinketType](enums/TrinketType.md) Trinket, string AnimName = "Pickup", string SpriteAnimName = "PlayerPickupSparkle" ) {: .copyable aria-label='Functions' }

___
### Are·Controls·Enabled () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean AreControlsEnabled ( ) {: .copyable aria-label='Functions' }

___
### Are·Opposing·Shoot·Directions·Pressed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean AreOpposingShootDirectionsPressed ( ) {: .copyable aria-label='Functions' }
Returns the non-zero joystick direction from the most recent movement input, but goes to zero after the player comes to a stop.
___
### Can·Add·Collectible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean CanAddCollectible ( [CollectibleType](enums/CollectibleType.md) Type = CollectibleType.COLLECTIBLE_NULL ) {: .copyable aria-label='Functions' }

___
### Can·Pick·Black·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean CanPickBlackHearts ( ) {: .copyable aria-label='Functions' }
returns true if player has room for more black hearts
___
### Can·Pick·Bone·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean CanPickBoneHearts ( ) {: .copyable aria-label='Functions' }
returns true if player has room for more bone hearts
___
### Can·Pick·Golden·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean CanPickGoldenHearts ( ) {: .copyable aria-label='Functions' }
returns true if player has room for more golden hearts
___
### Can·Pick·Red·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean CanPickRedHearts ( ) {: .copyable aria-label='Functions' }

___
### Can·Pick·Rotten·Hearts () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean CanPickRottenHearts ( ) {: .copyable aria-label='Functions' }
Returns true if player has room for more rotten hearts

___
### Can·Pick·Soul·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean CanPickSoulHearts ( ) {: .copyable aria-label='Functions' }
Returns true if player has room for more soul hearts
___
### Can·Pickup·Item () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean CanPickupItem ( ) {: .copyable aria-label='Functions' }
Can Player pick up an item right now?
___
### Can·Shoot () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean CanShoot ( ) {: .copyable aria-label='Functions' }

___
### Can·Turn·Head () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean CanTurnHead ( ) {: .copyable aria-label='Functions' }
Returns true if head should react to keys or false otherwise
___
### Change·Player·Type () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void ChangePlayerType ( [PlayerType](enums/PlayerType.md) PlayerType ) {: .copyable aria-label='Functions' }
Used to change one player into another player type. For example turning Cain into Maggy.

Changing the player type within MC_POST_PLAYER_INIT will result in the player getting the default items for that character. E.g. Maggy will get her Yum Heart without you having to explicitly add it. Exceptions here include unlockable items (e.g. Isaac's D6) and default numbers of hearts/keys/bombs/coins. You can change the player type after init, but then you're generally responsible for adding any items you might associate with that character.

Changing the player Type into Jacob will also spawn Esau.

___
### Check·Familiar () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void CheckFamiliar ( int FamiliarVariant, int TargetCount, [RNG](RNG.md) rng, [ItemConfigItem](ItemConfig_Item.md) SourceItemConfigItem = nil, int FamiliarSubType = -1 ) {: .copyable aria-label='Functions' }

Call this method to spawn the appropriate amount of familiars associated with a custom collectible.

- If the target count specified is less than the current amount of familiars, it will spawn more until the target count is met.
- If the target count specified is than the current amount of familiars, it will despawn familiars until the target count is met.

This is meant to be called in the EvaluateCache callback (when the cache flag is equal to `CacheFlag.CACHE_FAMILIARS`).

In most cases, [:material-language-typescript:IsaacScript](https://isaacscript.github.io/) users should use the [`checkFamiliarFromCollectibles`](https://isaacscript.github.io/isaacscript-common/modules/functions_familiars.html#checkFamiliarFromCollectibles) helper function instead of using this method directly, as it automatically calculates the appropriate target count.

**FamiliarVariant**: In most cases, use the familiar variant for your custom familiar.

**TargetCount**: The expected amount of this FamiliarVariant that this EntityPlayer should have. This argument can simply be how many of an item that the current EntityPlayer owns. However, if you want your familiar to synergize with Monster Manual and Box of Friends, then this argument should be  `EntityPlayer:GetCollectibleNum(collectibleType) + EntityPlayer:GetEffects():GetCollectibleEffectNum(collectibleType)`.

**rng**: Can just be the RNG object from `EntityPlayer.GetCollectibleRNG` of the collectible that spawns the familiar.

**SourceItemConfigItem**: The `ItemConfigItem` that this familiar was created by. This is nil by default, but it should always be specified so that Sacrificial Altar will work properly. (It informs the game which collectible should be removed if the familiar is tagged with the "cansacrifice" entity tag.) This can be obtained with: `Isaac.GetItemConfig():GetCollectible(collectibleType)`

**FamiliarSubType**: The subtype of the familiar to check. -1 matches any subtype.

???- example "Example Code"
    This code spawns 3 "Sister Maggy" familiars.
    ```lua
    local player = Isaac.GetPlayer()
    local sourceCollectibleID = CollectibleType.COLLECTIBLE_SAD_ONION
    local collectibleRNG = player:GetCollectibleRNG(sourceCollectibleID)
    local itemConfig = Isaac.GetItemConfig():GetCollectible(sourceCollectibleID)

    player:CheckFamiliar(FamiliarVariant.SISTER_MAGGY, 3, collectibleRNG, itemConfig)
    ```

___
### Clear·Costumes () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ClearCostumes ( ) {: .copyable aria-label='Functions' }
Removes all costumes.
___
### Clear·Dead·Eye·Charge () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ClearDeadEyeCharge ( ) {: .copyable aria-label='Functions' }

___
### Clear·Temporary·Effects () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ClearTemporaryEffects ( ) {: .copyable aria-label='Functions' }
Will be called when player exits the room.
___
### Discharge·Active·Item () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void DischargeActiveItem ( [ActiveSlot](enums/ActiveSlot.md) ActiveSlot = ActiveSlot.SLOT_PRIMARY ) {: .copyable aria-label='Functions' }

Sets the charge of your active item to 0 without triggering the active item effect.
___
### Donate·Luck () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void DonateLuck ( int Luck ) {: .copyable aria-label='Functions' }

Unlike the Luck property which should be set in MC_EVALUATE_CACHE, this method can be used anywhere and will automatically remember any additional luck added.
___
### Do·Zit·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void DoZitEffect ( [Vector](Vector.md) Direction ) {: .copyable aria-label='Functions' }

Fires a creep shot, same as the one fired by the item "The Large Zit"

___
### Drop·Pocket·Item () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void DropPocketItem ( int PocketNum, [Vector](Vector.md) Pos ) {: .copyable aria-label='Functions' }

Drops a held pocketitem (Card, Pill, Rune... from the given itemslot at the given position. Possible pocketnumbers are [0, 1, 2, 3].  Dropping pocket active items or dice bag dices does not work.
___
### Drop·Trinket () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void DropTrinket ( [Vector](Vector.md) DropPos, boolean ReplaceTick ) {: .copyable aria-label='Functions' }

___
### Evaluate·Items () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void EvaluateItems ( ) {: .copyable aria-label='Functions' }
Triggers a cache reevaluation. Will trigger the MC_EVALUATE_CACHE callback.

Before you use this function, you need to set the appropriate cache flags first. See the example below.

???- example "Example Code"
    This code re-evaluates all of the stats for the player.
    ```lua
    local player = Isaac.GetPlayer()
    player:AddCacheFlags(CacheFlag.CACHE_ALL)
    player:EvaluateItems()
    ```

___
### Fire·Bomb () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [EntityBomb](EntityBomb.md) FireBomb ( [Vector](Vector.md) Position, [Vector](Vector.md) Velocity, Entity Source = nil ) {: .copyable aria-label='Functions' }

___
### Fire·Brimstone () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [EntityLaser](EntityLaser.md) FireBrimstone ( [Vector](Vector.md) Direction, Entity Source = nil, float DamageMultiplier = 1 ) {: .copyable aria-label='Functions' }

___
### Fire·Delayed·Brimstone () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityLaser](EntityLaser.md) FireDelayedBrimstone ( float Angle, [Entity](Entity.md) Parent ) {: .copyable aria-label='Functions' }

___
### Fire·Knife () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [EntityKnife](EntityKnife.md) FireKnife ( [Entity](Entity.md) Parent, float RotationOffset = 0, boolean CantOverwrite = false, int SubType = 0, int Variant = 0 ) {: .copyable aria-label='Functions' }

___
### Fire·Tear () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [EntityTear](EntityTear.md) FireTear ( [Vector](Vector.md) Position, [Vector](Vector.md) Velocity, boolean CanBeEye = true, boolean NoTractorBeam = false, boolean CanTriggerStreakEnd = true, Entity Source = nil, float DamageMultiplier = 1 ) {: .copyable aria-label='Functions' }
- `CanBeEye`: If the player has the Evil Eye item, passing true allows the tear to have a chance of being an eye.
- `NoTractorBeam`: If the player has the Tractor Beam item, passing true means that the tear will be exempt from the beam.
- `CanTriggerStreakEnd`: If the player has the Dead Eye item, passing false means that the tear will be exempt from ending the streak.

___
### Fire·Tech·Laser () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [EntityLaser](EntityLaser.md) FireTechLaser ( [Vector](Vector.md) Position, [LaserOffset](enums/LaserOffset.md) OffsetID, [Vector](Vector.md) Direction, boolean LeftEye, boolean OneHit = false, Entity Source = nil, float DamageMultiplier = 1 ) {: .copyable aria-label='Functions' }

???+ bug "Bugs"
    The `DamageMultiplier` parameter doesn't do anything when supplying [LASER_TECH2_OFFSET](enums/LaserOffset.md) as the offset.

___
### Fire·Tech·XLaser () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [EntityLaser](EntityLaser.md) FireTechXLaser ( [Vector](Vector.md) Position, [Vector](Vector.md) Direction, float Radius, Entity Source = nil, float DamageMultiplier = 1 ) {: .copyable aria-label='Functions' }

___
### Flush·Queue·Item () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean FlushQueueItem ( ) {: .copyable aria-label='Functions' }
called after animation is finished, or on special occasions to prevent bugs
___
### Full·Charge () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean FullCharge ( [ActiveSlot](enums/ActiveSlot.md) ActiveSlot = ActiveSlot.SLOT_PRIMARY, int Force = false ) {: .copyable aria-label='Functions' }
Fully charges the active item. Returns true if the item was fully charged, false otherwise. If player has battery it will first try to fill first charge slot, then the battery slot.

**Force**: If set, items will always be charged even if they normally cannot be recharged by batteries
___
### Get·Active·Charge () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int GetActiveCharge ( [ActiveSlot](enums/ActiveSlot.md) ActiveSlot = ActiveSlot.SLOT_PRIMARY ) {: .copyable aria-label='Functions' }

Get the current charge of your active item.
___
### Get·Active·Item () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [CollectibleType](enums/CollectibleType.md) GetActiveItem ( [ActiveSlot](enums/ActiveSlot.md) ActiveSlot = ActiveSlot.SLOT_PRIMARY ) {: .copyable aria-label='Functions' data-altreturn='0' }
Returns the currently held item. Returns `0` when no item is held.

___
### Get·Active·Sub·Charge () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int GetActiveSubCharge ( [ActiveSlot](enums/ActiveSlot.md) ActiveSlot = ActiveSlot.SLOT_PRIMARY ) {: .copyable aria-label='Functions' }

Get the current items subcharge.

???+ bug "Bug"
    This function seems to always return 0. Use EntityPlayer:GetActiveCharge() to get any type of charges instead. Use EntityPlayer:GetBatteryCharge() to get the charge of the second charge bar.

___
### Get·Active·Weapon·Entity () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.md) GetActiveWeaponEntity ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

___
### Get·Aim·Direction () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Vector](Vector.md) GetAimDirection ( ) {: .copyable aria-label='Functions' }

___
### Get·Baby·Skin () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [BabySubType](enums/BabySubType.md) GetBabySkin ( ) {: .copyable aria-label='Functions' }

___
### Get·Battery·Charge () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int GetBatteryCharge ( [ActiveSlot](enums/ActiveSlot.md) ActiveSlot = ActiveSlot.SLOT_PRIMARY ) {: .copyable aria-label='Functions' }

Get the current charge progress of the second charge of your current active item. This bar is only active, when you have the Collectible "The Battery"
___
### Get·Black·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetBlackHearts ( ) {: .copyable aria-label='Functions' }
This does not return the number of black hearts; it returns the bit mask for which soul hearts are black hearts.

???- example "Example"
    Imagine we have the following setup of hearts, where S is a soul heart and B is a black heart:

    ```
    B S S B B S S B B
    ```

    Calling the function will return:

    ```lua
    Isaac.GetPlayer():GetBlackHearts() -- returns 409, which is 0001 1001 1001 in binary. Therefore, the read order is right to left.
    ```

___
### Get·Blood·Charge () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int GetBloodCharge ( ) {: .copyable aria-label='Functions' }

Returns the amount of Blood Charge the player has.

___
### Get·Body·Color () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [SkinColor](enums/SkinColor.md) GetBodyColor ( ) {: .copyable aria-label='Functions' }

___
### Get·Bomb·Flags () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetBombFlags ( ) {: .copyable aria-label='Functions' }

___
### Get·Bomb·Variant () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [BombVariant](enums/BombVariant.md) GetBombVariant ( [TearFlags](enums/TearFlags.md) TearFlags, boolean ForceSmallBomb ) {: .copyable aria-label='Functions' }
Pass tear flags to add extra effects to the bomb visual like burn -> hot bombs, even if player doesn't have Hot Bombs collectible. ForceSmallBomb will override large bomb variants for TEAR_PERSISTENT.
___
### Get·Bone·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetBoneHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of bone hearts that the player has. This is not doubled like the `EntityPlayer.GetMaxHearts` method is, so if e.g. the player has 3 bone hearts, this will return 3.

Also see the `EntityPlayer.GetEffectiveMaxHearts` method, which accounts for bone hearts.

___
### Get·Broken·Hearts () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int GetBrokenHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of broken hearts that the player has. This is not doubled like the `EntityPlayer.GetMaxHearts` method is, so if e.g. the player has 3 broken hearts, this will return 3.

___
### Get·Card () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Card](enums/Card.md) GetCard ( int SlotId ) {: .copyable aria-label='Functions' data-altreturn='0' }

Gets the ID of the card the player is holding in the given itemslot (0 = Main slot, 1 = secondary slot, 2 or 3). Returns `0` when no card is held in the slot.
___
### Get·Card·RNG () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [RNG](RNG.md) GetCardRNG ( [Card](enums/Card.md) ID ) {: .copyable aria-label='Functions' }

___
### Get·Collectible·Count () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetCollectibleCount ( ) {: .copyable aria-label='Functions' }

___
### Get·Collectible·Num () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int GetCollectibleNum ( [CollectibleType](enums/CollectibleType.md) Type, boolean OnlyCountTrueItems = false ) {: .copyable aria-label='Functions' }
**OnlyCountTrueItems**: If set to true, the function only counts collectibles that the player actually owns and ignores things like Lilith's Incubus, items granted by 3 Dollar Bill, and so forth.
___
### Get·Collectible·RNG () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [RNG](RNG.md) GetCollectibleRNG ( [CollectibleType](enums/CollectibleType.md) ID ) {: .copyable aria-label='Functions' }
Gets the [RNG](RNG.md) object of a collectible.
???- example "Example Code"
    this code gives you the RNG object of the "Sad Onion" collectible.
    ```lua
    local player = Isaac.GetPlayer()
    local collectibleRNG = player:GetCollectibleRNG(CollectibleType.COLLECTIBLE_SAD_ONION)
    ```
___
### Get·Costume·Null·Pos () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetCostumeNullPos ( string NullFrameName, boolean HeadScale, [Vector](Vector.md) Direction ) {: .copyable aria-label='Functions' }

___
### Get·Damage·Cooldown () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetDamageCooldown ( ) {: .copyable aria-label='Functions' }

When the player is hit, they will flash a different color and receive invulnerability frames. This method returns the amount of invulnerability frames. Normally, the player will receive 60 invulnerability frames when dealt a half-heart of damage or 120 invulnerability frames when dealt a full heart of damage. Additionally, the Blind Rage trinket can affect how invulnerability frames are granted.

Note that the frames returned by this function are render frames, not game frames.

___
### Get·Effective·Blood·Charge () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int GetEffectiveBloodCharge ( ) {: .copyable aria-label='Functions' }

Returns the amount of Blood Charge the player has. If playing as any other character besides Tainted Bethany, this will return `0`.

___
### Get·Effective·Max·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetEffectiveMaxHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of Red Hearts the player can contain in their Heart Containers and Bone Hearts. 1 unit is half a red heart.
**Example:** you have 3 red heart container and one bone heart. 6(red) + 2(bone) = 8

___
### Get·Effective·Soul·Charge () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int GetEffectiveSoulCharge ( ) {: .copyable aria-label='Functions' }

Returns the amount of Soul Charge the player has. If playing as any other character besides Bethany, this will return `0`.

___
### Get·Effects () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [TemporaryEffects](TemporaryEffects.md) GetEffects ( ) {: .copyable aria-label='Functions' }

___
### Get·Eternal·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetEternalHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of eternal hearts the player has.
___
### Get·Extra·Lives () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetExtraLives ( ) {: .copyable aria-label='Functions' }

Returns the number of extra lives the player currently has.
___
### Get·Fire·Direction () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Direction](enums/Direction.md) GetFireDirection ( ) {: .copyable aria-label='Functions' }

___
### Get·Flying·Offset () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetFlyingOffset ( ) {: .copyable aria-label='Functions' }

___
### Get·Golden·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGoldenHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of golden hearts the player has.
___
### Get·Greed·Donation·Break·Chance () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### float GetGreedDonationBreakChance ( ) {: .copyable aria-label='Functions' }

___
### Get·Head·Color () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [SkinColor](enums/SkinColor.md) GetHeadColor ( ) {: .copyable aria-label='Functions' }

___
### Get·Head·Direction () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Direction](enums/Direction.md) GetHeadDirection ( ) {: .copyable aria-label='Functions' }

___
### Get·Heart·Limit () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetHeartLimit ( ) {: .copyable aria-label='Functions' }

___
### Get·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of red hearts the player has inside their heart containers and bone hearts. 1 unit is half a heart.
___
### Get·Item·State () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [CollectibleType](enums/CollectibleType.md) GetItemState ( ) {: .copyable aria-label='Functions' }

___
### Get·Jar·Flies () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetJarFlies ( ) {: .copyable aria-label='Functions' }

___
### Get·Jar·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetJarHearts ( ) {: .copyable aria-label='Functions' }

___
### Get·Laser·Offset () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetLaserOffset ( [LaserOffset](enums/LaserOffset.md) ID, [Vector](Vector.md) Direction ) {: .copyable aria-label='Functions' }

___
### Get·Last·Action·Triggers () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetLastActionTriggers ( ) {: .copyable aria-label='Functions' }

___
### Get·Last·Damage·Flags () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetLastDamageFlags ( ) {: .copyable aria-label='Functions' }

___
### Get·Last·Damage·Source () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [EntityRef](EntityRef.md) GetLastDamageSource ( ) {: .copyable aria-label='Functions' }

___
### Get·Last·Direction () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Vector](Vector.md) GetLastDirection ( ) {: .copyable aria-label='Functions' }

___
### Get·Main·Twin () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [EntityPlayer](EntityPlayer.md) GetMainTwin ( ) {: .copyable aria-label='Functions' }

Returns the main player of pair characters or the main form of characters with multiple forms.

- When called on Jacob or Esau, returns Jacob.
- When called on Tainted Forgotten or Tainted Forgotten's Soul, returns Tainted Forgotten.
- When called on Tainted Lazarus or Dead Tainted Lazarus, returns themself. If the player has Birthright, then it will return Tainted Lazarus.
- When called on any other character, returns that character.

___
### Get·Max·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetMaxHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of Heart Containers the player has. 1 unit is half a heart container.
___
### Get·Max·Pocket·Items () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int GetMaxPocketItems ( ) {: .copyable aria-label='Functions' }

Get the number of Pickup items you can carry. (1 on default. 2 with polydactyly or similar)

If you have a pocket active, it also increments the number by one.

___
### Get·Max·Poop·Mana () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int GetMaxPoopMana ( ) {: .copyable aria-label='Functions' }

Returns the max amount of poop consumables that can be held by the player

___
### Get·Max·Trinkets () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetMaxTrinkets ( ) {: .copyable aria-label='Functions' }

Get the number of trinkets you can carry. (1 on default. 2 with moms purse or similar)

___
### Get·Modeling·Clay·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [CollectibleType](enums/CollectibleType.md) GetModelingClayEffect ( ) {: .copyable aria-label='Functions' }

___
### Get·Movement·Direction () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Direction](enums/Direction.md) GetMovementDirection ( ) {: .copyable aria-label='Functions' }

___
### Get·Movement·Input () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Vector](Vector.md) GetMovementInput ( ) {: .copyable aria-label='Functions' }

___
### Get·Movement·Joystick () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetMovementJoystick ( ) {: .copyable aria-label='Functions' }

___
### Get·Movement·Vector () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetMovementVector ( ) {: .copyable aria-label='Functions' }

___
### Get·Multi·Shot·Params () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### MultiShotParams GetMultiShotParams ( [WeaponType](enums/WeaponType.md) WeaponType = WeaponType.WEAPON_TEARS ) {: .copyable aria-label='Functions' }
???+ bug "Bug"
    Since it returns UserData which cant be edited directly, the return value of this function can only be used in combination with the [GetMultiShotPositionVelocity()](#getmultishotpositionvelocity) function.
___
### Get·Multi·Shot·Position·Velocity () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [PosVel](PlayerTypes_PosVel.md) GetMultiShotPositionVelocity ( int LoopIndex, [WeaponType](enums/WeaponType.md) Weapon, [Vector](Vector.md) ShotDirection, float ShotSpeed, MultiShotParams params ) {: .copyable aria-label='Functions' }
Call this function in a loop, where the LoopIndex is a number between 0 and the amount of tears the current MultiShotParams contains. Since MultiShotParams is currently not accessable via the modding api, you need to find other ways to get the amount.

???+ bug "Removed Function"
    This function does no longer exist in the latest patch! (v1.7.9b.J835)

___
### Get·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### string GetName ( ) {: .copyable aria-label='Functions' }

Returns the name of the player. (Isaac, Cain, Azazel,...)
___
### Get·NPCTarget () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.md) GetNPCTarget ( ) {: .copyable aria-label='Functions' }
Normally, this function returns the player. However, in some cases, NPCs can be redirected to attack another target, in which case this function will return the alternate target (e.g. after using Best Friend).
___
### Get·Num·Blue·Flies () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetNumBlueFlies ( ) {: .copyable aria-label='Functions' }

___
### Get·Num·Blue·Spiders () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetNumBlueSpiders ( ) {: .copyable aria-label='Functions' }

___
### Get·Num·Bombs () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetNumBombs ( ) {: .copyable aria-label='Functions' }

___
### Get·Num·Coins () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetNumCoins ( ) {: .copyable aria-label='Functions' }

___
### Get·Num·Giga·Bombs () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int GetNumGigaBombs ( ) {: .copyable aria-label='Functions' }

___
### Get·Num·Keys () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetNumKeys ( ) {: .copyable aria-label='Functions' }

___
### Get·Other·Twin () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [EntityPlayer](EntityPlayer.md) GetOtherTwin ( ) {: .copyable aria-label='Functions' }

Returns the other player of pair characters or the other form of characters with multiple forms.

- When called on Jacob, returns Esau.
- When called on Esau, returns Jacob.
- When called on Tainted Forgotten, returns Tainted Forgotten's Soul.
- When called on Tainted Forgotten's Soul, returns Tainted Forgotten.
- When called on Tainted Lazarus, it will only return the Flip Lazarus, if the player has the Birthright item. Otherwise it returns nil.
- When called on any other character, returns nil.
___
### Get·Pill () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [PillColor](enums/PillColor.md) GetPill ( int SlotId ) {: .copyable aria-label='Functions' data-altreturn='0' }

Gets the ID of the pill the player is holding in the given itemslot (0 = Main slot, 1 = secondary slot, 2 or 3) Returns `0` when no pill is held in the given slot.
___
### Get·Pill·RNG () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [RNG](RNG.md) GetPillRNG ( [PillEffect](enums/PillEffect.md) ID ) {: .copyable aria-label='Functions' }

___
### Get·Player·Type () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [PlayerType](enums/PlayerType.md) GetPlayerType ( ) {: .copyable aria-label='Functions' }

___
### Get·Pocket·Item () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const PlayerPocketItem GetPocketItem ( int SlotId ) {: .copyable aria-label='Functions' }

Get the userdata of the pocketitem (Card,Pill,rune) in a said slot.

???+ bug "Bugs"
    This function returns userdata, which can't be processed. It is therefore broken and should not be used!
___
### Get·Poop·Mana () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int GetPoopMana ( ) {: .copyable aria-label='Functions' }

Returns how many poop consumables the player is currently holding

___
### Get·Poop·Spell () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [PoopSpellType](enums/PoopSpellType.md) GetPoopSpell ( int Position ) {: .copyable aria-label='Functions' }

Returns the poop spell at the given position in the player's spell queue

___
### Get·Recent·Movement·Vector () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Vector](Vector.md) GetRecentMovementVector ( ) {: .copyable aria-label='Functions' }
Returns the joystick direction that drives player movement, taking into account certain modifiers like disabled controls and seed effects.

___
### Get·Rotten·Hearts () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int GetRottenHearts ( ) {: .copyable aria-label='Functions' }

___
### Get·Shooting·Input () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetShootingInput ( ) {: .copyable aria-label='Functions' }

Returns a vector that corresponds to the shooting inputs that this player is pressing.

???- info "Shooting Angle diagram"
    ![GetShootingInput diagram](images/infographics/GetShootingInput.png){: width='250' }

___
### Get·Shooting·Joystick () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetShootingJoystick ( ) {: .copyable aria-label='Functions' }

Returns a vector that corresponds to the shooting inputs that this player is holding.

See the image for the [GetShootingInput](#getshootinginput) method.

___
### Get·Smooth·Body·Rotation () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### float GetSmoothBodyRotation ( ) {: .copyable aria-label='Functions' }

___
### Get·Soul·Charge () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### int GetSoulCharge ( ) {: .copyable aria-label='Functions' }

Returns the amount of Soul Charge the player has.

___
### Get·Soul·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetSoulHearts ( ) {: .copyable aria-label='Functions' }

Returns the amount of Soul Hearts the player has. 1 unit is half a heart.

???- note "Notes"
    Black Hearts count toward this total, as the game sees them as soul hearts.

___
### Get·Sub·Player () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityPlayer](EntityPlayer.md) GetSubPlayer ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

Returns the other form of The Forgotten.

___
### Get·Tear·Hit·Params () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [TearParams](TearParams.md) GetTearHitParams ( [WeaponType](enums/WeaponType.md) WeaponType, float DamageScale = 1, int TearDisplacement = 1, Entity Source = nil ) {: .copyable aria-label='Functions' }
 Used for tear parameters that are calculated on hit (ex: Tough love, Common cold), DamageScale is used for scale calculation based on damage
___
### Get·Tear·Movement·Inheritance () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetTearMovementInheritance ( [Vector](Vector.md) ShotDirection ) {: .copyable aria-label='Functions' }

___
### Get·Tear·Poison·Damage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### float GetTearPoisonDamage ( ) {: .copyable aria-label='Functions' }

___
### Get·Tear·Range·Modifier () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetTearRangeModifier ( ) {: .copyable aria-label='Functions' }

___
### Get·Total·Damage·Taken () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetTotalDamageTaken ( ) {: .copyable aria-label='Functions' }

___
### Get·Tractor·Beam () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.md) GetTractorBeam ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

___
### Get·Trinket () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [TrinketType](enums/TrinketType.md) GetTrinket ( int TrinketIndex ) {: .copyable aria-label='Functions' data-altreturn='0' }

Gets the ID of the trinket the player is holding in the given trinketslot (0 or 1). Returns `0` when no trinket is held in the given slot.
___
### Get·Trinket·Multiplier () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetTrinketMultiplier ( [TrinketType](enums/TrinketType.md) TrinketID ) {: .copyable aria-label='Functions' }
Gets the multiplier of a given Trinket effect. This is analog to the number of times the trinket effect is applied.

???- info "Multiplier Breakdown"
    * Per normal trinket of this type equipped / gulped : +1
    * Per golden trinket of this type equipped / gulped : +2
    * Mom's Box equipped : +1 (does not stack)
___
### Get·Trinket·RNG () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [RNG](RNG.md) GetTrinketRNG ( [TrinketType](enums/TrinketType.md) TrinketID ) {: .copyable aria-label='Functions' }

___
### Get·Velocity·Before·Update () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Vector](Vector.md) GetVelocityBeforeUpdate ( ) {: .copyable aria-label='Functions' }

___
### Get·Zodiac·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [CollectibleType](enums/CollectibleType.md) GetZodiacEffect ( ) {: .copyable aria-label='Functions' }

___
### Has·Collectible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean HasCollectible ( [CollectibleType](enums/CollectibleType.md) Type, boolean IgnoreModifiers = false ) {: .copyable aria-label='Functions' }
**IgnoreModifiers**: If set to true, only counts collectibles the player actually owns and ignores effects granted by items like Zodiac, 3 Dollar Bill and Lemegeton

___
### Has·Curse·Mist·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean HasCurseMistEffect ( ) {: .copyable aria-label='Functions' }

___
### Has·Full·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasFullHearts ( ) {: .copyable aria-label='Functions' }

___
### Has·Full·Hearts·And·Soul·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasFullHeartsAndSoulHearts ( ) {: .copyable aria-label='Functions' }

___
### Has·Golden·Bomb () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasGoldenBomb ( ) {: .copyable aria-label='Functions' }

___
### Has·Golden·Key () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasGoldenKey ( ) {: .copyable aria-label='Functions' }

___
### Has·Invincibility () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean HasInvincibility ( [DamageFlag](enums/DamageFlag.md) Flags = 0 ) {: .copyable aria-label='Functions' }
returns true when player is in an invincibility state
___
### Has·Player·Form () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasPlayerForm ( [PlayerForm](enums/PlayerForm.md) Form ) {: .copyable aria-label='Functions' }

___
### Has·Timed·Item () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasTimedItem ( ) {: .copyable aria-label='Functions' }
Returns true if you have a timed active item *(such as Brown Nugget)* in the first active slot
___
### Has·Trinket () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean HasTrinket ( [TrinketType](enums/TrinketType.md) Type, boolean IgnoreModifiers = false ) {: .copyable aria-label='Functions' }
**IgnoreModifiers**: If set to true, only counts trinkets the player actually holds and ignores effects granted by other items
___
### Has·Weapon·Type () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasWeaponType ( [WeaponType](enums/WeaponType.md) WeaponType ) {: .copyable aria-label='Functions' }

___
### Init·Baby·Skin () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void InitBabySkin ( ) {: .copyable aria-label='Functions' }

___
### Is·Black·Heart () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsBlackHeart ( int Heart ) {: .copyable aria-label='Functions' }

___
### Is·Bone·Heart () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsBoneHeart ( int heart ) {: .copyable aria-label='Functions' }

___
### Is·Coop·Ghost () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean IsCoopGhost ( ) {: .copyable aria-label='Functions' }
In a multiplayer game, if a player dies, they will return as a tiny ghost. This method returns true if the player is a co-op ghost.

___
### Is·Extra·Animation·Finished () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsExtraAnimationFinished ( ) {: .copyable aria-label='Functions' }

___
### Is·Full·Sprite·Rendering () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsFullSpriteRendering ( ) {: .copyable aria-label='Functions' }

___
### Is·Held·Item·Visible () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsHeldItemVisible ( ) {: .copyable aria-label='Functions' }

___
### Is·Holding·Item () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsHoldingItem ( ) {: .copyable aria-label='Functions' }
Is Player holding up an item (card/collectible/etc)
___
### Is·Item·Queue·Empty () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsItemQueueEmpty ( ) {: .copyable aria-label='Functions' }

___
### Is·P2Appearing () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsP2Appearing ( ) {: .copyable aria-label='Functions' }

___
### Is·Pos·In·Spot·Light () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsPosInSpotLight ( [Vector](Vector.md) Position ) {: .copyable aria-label='Functions' }

___
### Is·Sub·Player () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsSubPlayer ( ) {: .copyable aria-label='Functions' }
Returns true if the player object was returned from the `EntityPlayer.GetSubPlayer` method. (This method is not related to multiplayer.)

Additionally, this also returns true for the player object representing Dead Tainted Lazarus that fires at the beginning of the run in the PostPlayerInit callback. (The PostPlayerInit callback fires first for Dead Tainted Lazarus before firing for the normal Tainted Lazarus.)

___
### Needs·Charge () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean NeedsCharge ( [ActiveSlot](enums/ActiveSlot.md) ActiveSlot = ActiveSlot.SLOT_PRIMARY ) {: .copyable aria-label='Functions' }

This will always return false for active items that have `chargetype="special"` set in the `items.xml` file, even if they are not fully charged.

___
### Play·Extra·Animation () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void PlayExtraAnimation ( string Animation ) {: .copyable aria-label='Functions' }

___
### Queue·Extra·Animation () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void QueueExtraAnimation ( string Animation ) {: .copyable aria-label='Functions' }

___
### Queue·Item () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void QueueItem ( [ItemConfigItem](ItemConfig_Item.md) Item, int Charge = 0, boolean Touched = false, boolean Golden = false, int VarData = 0 ) {: .copyable aria-label='Functions' }
When the player touches a collectible or trinket, they are not granted it immediately. Instead, the item is queued for the duration of the animation where the player holds the item above their head. When the animation is finished, the item in the queue will be granted. This method adds a new item to the item queue. If the player is not currently playing an animation, then the queued item will simply be awarded instantly.

Also see `FlushQueueItem()`, `IsItemQueueEmpty()`, and `QueuedItem`.
___
### Remove·Black·Heart () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveBlackHeart ( int BlackHeart ) {: .copyable aria-label='Functions' }

___
### Remove·Blue·Fly () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveBlueFly ( ) {: .copyable aria-label='Functions' }

___
### Remove·Blue·Spider () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveBlueSpider ( ) {: .copyable aria-label='Functions' }

___
### Remove·Collectible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void RemoveCollectible ( [CollectibleType](enums/CollectibleType.md) Type, boolean IgnoreModifiers = false, [ActiveSlot](enums/ActiveSlot.md) ActiveSlot = ActiveSlot.SLOT_PRIMARY, boolean RemoveFromPlayerForm = true ) {: .copyable aria-label='Functions' }
**IgnoreModifiers**: Ignores collectible effects granted by other items (i.e. Void)

**Slot**: Sets the active slot this collectible should be removed from

**RemoveFromPlayerForm**: If successfully removed and part of a transformation, decrease that transformation's counter by 1
___
### Remove·Costume () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveCostume ( [ItemConfigItem](ItemConfig_Item.md) Item ) {: .copyable aria-label='Functions' }
Removes a given costume based on its item config entry.

???- example "Example code"
    This code removes the costume of the Spoon Bender collectible.
    ```lua
    local player = Isaac.GetPlayer()
    local itemConfig = Isaac.GetItemConfig()
    local itemConfigItem = itemConfig:GetCollectible(CollectibleType.COLLECTIBLE_SPOON_BENDER)
    player:RemoveCostume(itemConfigItem)
    ```

___
### Remove·Curse·Mist·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void RemoveCurseMistEffect ( ) {: .copyable aria-label='Functions' }

___
### Remove·Golden·Bomb () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveGoldenBomb ( ) {: .copyable aria-label='Functions' }

___
### Remove·Golden·Key () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveGoldenKey ( ) {: .copyable aria-label='Functions' }

___
### Remove·Skin·Costume () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveSkinCostume ( ) {: .copyable aria-label='Functions' }
Removes player-specific costumes like Magdalene's hair or Cain's eyepatch.

___
### Render·Body () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RenderBody ( [Vector](Vector.md) position ) {: .copyable aria-label='Functions' }

___
### Render·Glow () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RenderGlow ( [Vector](Vector.md) position ) {: .copyable aria-label='Functions' }

___
### Render·Head () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RenderHead ( [Vector](Vector.md) position ) {: .copyable aria-label='Functions' }

___
### Render·Top () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RenderTop ( [Vector](Vector.md) position ) {: .copyable aria-label='Functions' }

___
### Replace·Costume·Sprite () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ReplaceCostumeSprite ( [ItemConfigItem](ItemConfig_Item.md) Item, string SpritePath, int SpriteId ) {: .copyable aria-label='Functions' }

___
### Reset·Damage·Cooldown () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ResetDamageCooldown ( ) {: .copyable aria-label='Functions' }

___
### Reset·Item·State () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ResetItemState ( ) {: .copyable aria-label='Functions' }
[Room](Room.md) transitions call this to prevent lock ups.
___
### Respawn·Familiars () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RespawnFamiliars ( ) {: .copyable aria-label='Functions' }
Respawns all familiars associated to the player.

___
### Revive () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Revive ( ) {: .copyable aria-label='Functions' }
Revives the player.

???+ bug "Bugs"
    Exiting the run at any point after this function is called will make it so that the run can't be continued.
___
### Set·Active·Charge () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void SetActiveCharge ( int Charge, [ActiveSlot](enums/ActiveSlot.md) ActiveSlot = ActiveSlot.SLOT_PRIMARY ) {: .copyable aria-label='Functions' }

___
### Set·Blood·Charge () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void SetBloodCharge ( int Amount ) {: .copyable aria-label='Functions' }

Sets the amount of Blood Charge the player has. Blood Charge does not do anything on characters besides Tainted Bethany.

___
### Set·Card () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetCard ( int SlotId, [Card](enums/Card.md) ID ) {: .copyable aria-label='Functions' }

Change the card/rune the player is holding in the given itemslot (0 or 1).
___
### Set·Full·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetFullHearts ( ) {: .copyable aria-label='Functions' }

___
### Set·Min·Damage·Cooldown () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetMinDamageCooldown ( int DamageCooldown ) {: .copyable aria-label='Functions' }

___
### Set·Pill () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetPill ( int SlotId, [PillColor](enums/PillColor.md) Pill ) {: .copyable aria-label='Functions' }

Change the pill the player is holding in the given itemslot (0 or 1).

___
### Set·Pocket·Active·Item() {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void SetPocketActiveItem ( [CollectibleType](enums/CollectibleType.md) Type, [ActiveSlot](enums/ActiveSlot.md) Slot, boolean KeepInPools ) {: .copyable aria-label='Functions' }

Sets the player's pocket active item to the given active item.
Slot can be either SLOT_POCKET or SLOT_POCKET2.
Items added to SLOT_POCKET2 will always be removed upon being used.
If KeepInPools is set to true, the item will not be removed from the item pools.
Use this to let the player start with a custom active item in their pocket active slot right away.

???+ bug "Bugs"
    Calling this function inside PostPlayerInit callback causes a crash when continuing a saved run after closing and reopening the game, unless KeepInPools argument is set to true.
___
### Set·Shooting·Cooldown () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetShootingCooldown ( int Cooldown ) {: .copyable aria-label='Functions' }

___
### Set·Soul·Charge () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void SetSoulCharge ( int Amount ) {: .copyable aria-label='Functions' }

Sets the amount of Soul Charge the player has. Soul Charge does not do anything on characters besides Bethany.

___
### Set·Target·Trap·Door () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetTargetTrapDoor ( [GridEntity](GridEntity.md) TrapDoor ) {: .copyable aria-label='Functions' }

This function got removed with Repentance.

___
### Shoot·Red·Candle () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ShootRedCandle ( [Vector](Vector.md) Direction ) {: .copyable aria-label='Functions' }
for ghost pepper item + poop and farts
___
### Spawn·Maw·Of·Void () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityLaser](EntityLaser.md) SpawnMawOfVoid ( int Timeout ) {: .copyable aria-label='Functions' }

___
### Stop·Extra·Animation () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void StopExtraAnimation ( ) {: .copyable aria-label='Functions' }

___
### Swap·Active·Items () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SwapActiveItems ( ) {: .copyable aria-label='Functions' }

___
### Throw·Blue·Spider () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.md) ThrowBlueSpider ( [Vector](Vector.md) Position, [Vector](Vector.md) Target ) {: .copyable aria-label='Functions' }

___
### Throw·Friendly·Dip () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [EntityFamiliar](EntityFamiliar.md) ThrowFriendlyDip ( int Subtype, [Vector](Vector.md) Position, [Vector](Vector.md) Target ) {: .copyable aria-label='Functions' }

???- note "Dip Subtypes"
    ```lua
    0: normal
    1: red
    2: corny
    3: golden
    4: rainbow
    5: black
    6: holy
    12: stone
    13: flaming
    14: poison
    20: brownie
    ```
___
### Throw·Held·Entity () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [Entity](Entity.md) ThrowHeldEntity ( [Vector](Vector.md) Velocity ) {: .copyable aria-label='Functions' }

___
### Trigger·Book·Of·Virtues () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void TriggerBookOfVirtues ( [CollectibleType](enums/CollectibleType.md) Type = CollectibleType.COLLECTIBLE_NULL, int Charge = 0 ) {: .copyable aria-label='Functions' }

___
### Try·Hold·Entity () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean TryHoldEntity ( [Entity](Entity.md) Entity ) {: .copyable aria-label='Functions' }

___
### Try·Hold·Trinket () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TryHoldTrinket ( [TrinketType](enums/TrinketType.md) Type ) {: .copyable aria-label='Functions' }
Returns true if an active item pickup cooldown is over. returns true if trinket can be added, else false
___
### Try·Remove·Collectible·Costume () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void TryRemoveCollectibleCostume ( [CollectibleType](enums/CollectibleType.md) Collectible, boolean KeepPersistent ) {: .copyable aria-label='Functions' }
Tries to remove a costume of the given collectible. `KeepPersistent` is used to define if persistent costumes should be removed. If its set to `false`, it will only remove temporary costumes.

???- example "Example code"
    This code removes the costume of the Spoon Bender collectible.
    ```lua
    local player = Isaac.GetPlayer()
    player:TryRemoveCollectibleCostume(CollectibleType.COLLECTIBLE_SPOON_BENDER, false)
    ```
___
### Try·Remove·Null·Costume () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void TryRemoveNullCostume ( [NullItemID](enums/NullItemID.md) NullId ) {: .copyable aria-label='Functions' }

___
### Try·Remove·Trinket () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TryRemoveTrinket ( [TrinketType](enums/TrinketType.md) Type ) {: .copyable aria-label='Functions' }

___
### Try·Remove·Trinket·Costume () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void TryRemoveTrinketCostume ( [TrinketType](enums/TrinketType.md) Trinket ) {: .copyable aria-label='Functions' }
Tries to remove a trinket costume
___
### Try·Use·Key () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TryUseKey ( ) {: .copyable aria-label='Functions' }

___
### Update·Can·Shoot () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void UpdateCanShoot ( ) {: .copyable aria-label='Functions' }

___
### Use·Active·Item () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void UseActiveItem ( [CollectibleType](enums/CollectibleType.md) Item, [UseFlags](enums/UseFlag.md) UseFlags = 0, [ActiveSlot](enums/ActiveSlot.md) Slot = -1, int CustomVarData = 0 ) {: .copyable aria-label='Functions' }

#### void UseActiveItem ( [CollectibleType](enums/CollectibleType.md) Item, boolean ShowAnim = false, boolean KeepActiveItem = false, boolean AllowNonMainPlayer = true, boolean ToAddCostume = false, [ActiveSlot](enums/ActiveSlot.md) Slot = -1, int CustomVarData = 0 ) {: .copyable .secondH4 aria-label='Functions' }
**Slot**: The active slot this item was used from (set to -1 if this item wasn't triggered by any active slot)

???- note "Notes"
	This method will increment the number of CollectibleEffects (see [Temporary Effects](TemporaryEffects.md)) of the passed item by 1 for the current room, and will trigger any associated MC_USE_ITEM callbacks. As of Repentance, this method can also be used on Passive and Familiar ItemTypes.
___
### Use·Card () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void UseCard ( [Card](enums/Card.md) ID, [UseFlags](enums/UseFlag.md) UseFlags = 0 ) {: .copyable aria-label='Functions' }

___
### Use·Pill () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void UsePill ( [PillEffect](enums/PillEffect.md) ID, [PillColor](enums/PillColor.md) PillColor, [UseFlags](enums/UseFlag.md) UseFlags = 0  ) {: .copyable aria-label='Functions' }

___
### Use·Poop·Spell () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void UsePoopSpell ( [PoopSpellType](enums/PoopSpellType.md) type ) {: .copyable aria-label='Functions' }
Triggers one of Tainted ???'s poop spells (see [PoopSpellType](enums/PoopSpellType.md) enum)

___
### Will·Player·Revive () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean WillPlayerRevive ( ) {: .copyable aria-label='Functions' }
This function will return true if the player has one or more extra lives or if a conditional revival item will work on the next death.

Right now, there are 3 items that grant conditional extra lives:

* Guppy's Collar - This function will successfully predict whether or not the next revive from Guppy's Collar will work or not. (50% chance)
* Broken Ankh - This function will successfully predict whether or not the next revive from Broken Ankh will work or not. (22.22% chance)
* Mysterious Paper - This function will only successfully predict the revive from Missing Poster every 4 frames, because it evaluates only one of its 4 possible item effects each frame.

___
## Variables
### Baby·Skin {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [BabySubType](enums/BabySubType.md) BabySkin  {: .copyable aria-label='Variables' }
P2 Skin section Used to hold the selected skin (in case of glitched baby it will pick a random one)

???+ bug "Bugs"
    This variable actually contains userdata and is not usable within API. Attempt to change it will results in a crash.

___
### Can·Fly {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean CanFly  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. Can the player fly over rocks and pits?
___
### Controller·Index {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const int ControllerIndex  {: .copyable aria-label='Variables' }

___
### Controls·Cooldown {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int ControlsCooldown  {: .copyable aria-label='Variables' }

___
### Controls·Enabled {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean ControlsEnabled  {: .copyable aria-label='Variables' }

___
### Damage {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Damage  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Damage Stat.**  How much damage do the players tears or other main weapons do?
___
### Fire·Delay {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float FireDelay  {: .copyable aria-label='Variables' }
How long until the player can spawn their next tear?

???- note "Version Difference"
	In the Afterbirth+ version of the modding api, this variable is an integer

___
### Friend·Ball·Enemy {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const EntityDesc FriendBallEnemy  {: .copyable aria-label='Variables' }

???+ bug "Bugs"
    This function returns userdata that cant be edited or accessed.
___
### Head·Frame·Delay {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int HeadFrameDelay  {: .copyable aria-label='Variables' }

___
### IBS·Charge {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### float IBSCharge  {: .copyable aria-label='Variables' }
Internally used by IBS, increases based on damage dealt, range is 0-1
___
### Item·Hold·Cooldown {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int ItemHoldCooldown  {: .copyable aria-label='Variables' }
Used for avoiding player get stucked between rocks when switching a flying item with other active item.
___
### Laser·Color {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Color](Color.md) LaserColor  {: .copyable aria-label='Variables' }

___
### Luck {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Luck  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Luck Stat.**  Better luck generally means better random events.
___
### Max·Fire·Delay {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float MaxFireDelay  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Tears Stat.**  How long between each tear can spawn?

???- note "Version Difference"
	In the Afterbirth+ version of the modding api, this variable is an integer

___
### Move·Speed {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float MoveSpeed  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the Speed Stat.**  How fast can the player move?
___
### Queued·Item {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [QueueItemData](QueueItemData.md) QueuedItem  {: .copyable aria-label='Variables' }

- When Isaac picks up a collectible or a trinket, he holds it above his head for a while. At this point, the collectible/trinket is not actually put into his inventory yet.
- In other words, the item is queued for insertion until the animation completes, at which point the queue is processed and the item is inserted.
- `QueuedItem` holds a object of type `QueueItemData` that describes the item that a player is currently holding above their head.
- `QueuedItem` is never nil, even if the player is not currently holding up any item. (However, `player.QueuedItem.Item` will be nil if they are not currently holding up any item.)
- This only stores data for collectibles and trinkets. It does not store any data for pocket items (even though Isaac plays a similar "holding above head" animation for pocket items).
- Also see `FlushQueueItem()`, `IsItemQueueEmpty()`, and `QueueItem()`.
___
### Samson·Berserk·Charge {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int SamsonBerserkCharge  {: .copyable aria-label='Variables' }
Internally used by Tainted Samson, increases based on damage dealt, range is 0-100000
___
### Secondary·Active·Item {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [ActiveItemDesc](PlayerTypes_ActiveItemDesc.md) SecondaryActiveItem  {: .copyable aria-label='Variables' data-altreturn='nil' }

???+ bug "Bug"
    This function does not exist anymore in Repentance. As of right now, there is no other function to get the [ActiveItemDesc](PlayerTypes_ActiveItemDesc.md) of any active item the player holds. Until this is fixed, this info will stay here.
___
### Shot·Speed {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float ShotSpeed  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE.  **This is equal to the ShotSpeed Stat.**

Defines how fast the tear travel when spawned.

The default velocity of a tear shot is 10 times the players ShotSpeed.

___
### Tear·Color {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Color](Color.md) TearColor  {: .copyable aria-label='Variables' }

___
### Tear·Falling·Acceleration {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float TearFallingAcceleration  {: .copyable aria-label='Variables' }

___
### Tear·Falling·Speed {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float TearFallingSpeed  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. How fast is the tear moving up or down when it spawns? Affects range.
___
### Tear·Flags {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [TearFlags](enums/TearFlags.md) TearFlags {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. Various [TearFlags](enums/TearFlags.md).

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
[ ](#){: .abrep .tooltip .badge }
#### float TearHeight  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. How high above the ground is the tear when it spawns?

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
### Tear·Range {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### float TearRange  {: .copyable aria-label='Variables' }
Player stat - Only change this in a callback to MC_EVALUATE_CACHE. How far should a tear go when it spawns?

___
### Tears·Offset {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) TearsOffset  {: .copyable aria-label='Variables' }
