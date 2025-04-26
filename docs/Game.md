---
tags:
  - Globals
  - Class
---
# Class "Game"

???+ info
    This class can be accessed by using its constructor:

    ???+ example "Example Code"
        ```lua
        local game = Game()
        ```

## Constructors
### Game () {: aria-label='Constructors' }
[ ](#){: .alldlc .tooltip .badge }
#### [Game](Game.md) Game ( ) {: .copyable aria-label='Constructors' }

Returns a Game object.

???- example "Example Code"
    Example usage:
    ```lua
    Game():IsPaused()
    --returns true if the game is paused

    ```
___
## Functions
### Add·Devil·Room·Deal () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void AddDevilRoomDeal ( ) {: .copyable aria-label='Functions' }

___
### Add·Encountered·Boss () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void AddEncounteredBoss ( [EntityType](enums/EntityType.md) Boss, int Variant ) {: .copyable aria-label='Functions' }

___
### Add·Pixelation () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void AddPixelation ( int Duration ) {: .copyable aria-label='Functions' }

Triggers the effect of the "retro vision" pill.
___
### Add·Stage·Without·Damage () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void AddStageWithoutDamage ( ) {: .copyable aria-label='Functions' }

Increases the ingame counter, that keeps track of the stages you cleared without taking damage. (useful for Devil deal manipulations)
___
### Add·Stage·Without·Hearts·Picked () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void AddStageWithoutHeartsPicked ( ) {: .copyable aria-label='Functions' }

Increases the ingame counter, that keeps track of stages you cleared without picking up hearts.
___
### Add·Treasure·Rooms·Visited () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void AddTreasureRoomsVisited ( ) {: .copyable aria-label='Functions' }

___
### Bomb·Damage () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void BombDamage ( [Vector](Vector.md) Position, float Damage, float Radius, boolean LineCheck = true, [Entity](Entity.md) Source = nil, [TearFlags](enums/TearFlags.md) TearFlags = [TearFlags](enums/TearFlags.md).TEAR_NORMAL, int DamageFlags = [DamageFlags](enums/DamageFlag.md).DAMAGE_EXPLOSION, boolean DamageSource = false ) {: .copyable aria-label='Functions' }

___
### Bomb·Explosion·Effects () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void BombExplosionEffects ( [Vector](Vector.md) Position, float Damage, [TearFlags](enums/TearFlags.md) TearFlags = [TearFlags](enums/TearFlags.md).TEAR_NORMAL, [Color](Color.md) Color = Color.Default, [Entity](Entity.md) Source = nil, float RadiusMult = 1, boolean LineCheck = true, boolean DamageSource = false, int DamageFlags = [DamageFlags](enums/DamageFlag.md).DAMAGE_EXPLOSION ) {: .copyable aria-label='Functions' }
The complete bomb explosion package: Do damage, spawn boomgraphics, and apply tearflag-based effects.
___
### Bomb·Tearflag·Effects () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void BombTearflagEffects ( [Vector](Vector.md) Position, float Radius, [TearFlags](enums/TearFlags.md) TearFlags, [Entity](Entity.md) Source = nil, float RadiusMult = 1) {: .copyable aria-label='Functions' }
Does bomb-exclusive special effects.
___
### Butter·Bean·Fart () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void ButterBeanFart ( [Vector](Vector.md) Position, float Radius, [Entity](Entity.md) Source, boolean ShowEffect, boolean DoSuperKnockback ) {: .copyable aria-label='Functions' }

___
### Change·Room () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void ChangeRoom ( int RoomIndex, int Dimension = -1 ) {: .copyable aria-label='Functions' }

This function should be used over `Level.ChangeRoom` because that function will not update the fxlayers properly.

???- info "Dimension Info"
    Dimension: ID of the dimension to get the room from

		* -1: Current dimension
		* 0: Main dimension
		* 1: Secondary dimension, used by Downpour mirror dimension and Mines escape sequence
		* 2: Death Certificate dimension
___
### Charm·Fart () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void CharmFart ( [Vector](Vector.md) Position, float Radius, [Entity](Entity.md) Source ) {: .copyable aria-label='Functions' }

___
### Clear·Donation·Mod·Angel () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ClearDonationModAngel ( ) {: .copyable aria-label='Functions' }

___
### Clear·Donation·Mod·Greed () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ClearDonationModGreed ( ) {: .copyable aria-label='Functions' }

___
### Clear·Stages·Without·Damage () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ClearStagesWithoutDamage ( ) {: .copyable aria-label='Functions' }

Sets the counter for stages cleared without damage to 0.
___
### Clear·Stages·Without·Hearts·Picked () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ClearStagesWithoutHeartsPicked ( ) {: .copyable aria-label='Functions' }

Sets the counter for stages cleared without picking up hearts to 0.
___
### Darken () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void Darken ( float Darkness, int Timeout ) {: .copyable aria-label='Functions' }

Darkens the room. This is the function that is called internally during The Lamb fight or when Dice Rooms are activated.
___
### Donate·Angel () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void DonateAngel ( int Donate ) {: .copyable aria-label='Functions' }

Donating 10 coins to a donation machine will increase the odds of an Angel Room if you haven't taken a devil deal. This simulates that behavior without actually adding coins to the donation machine.
___
### Donate·Greed () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void DonateGreed ( int Donate ) {: .copyable aria-label='Functions' }

___
### End () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void End ( Ending Ending ) {: .copyable aria-label='Functions' }
???+ note "Ending notes"
    1: Game over "Dear Diary" (exit/restart)

    2: Mom / Epilogue (movie)

    3: Mom's Heart / End 1/2/3/4/5/6/7/8/9/10/11 (movie) or just Credits depending on context

    4: Satan / End 12 (movie)

    5: Isaac / End 13 (movie)

    6: The Lamb / End 15 (movie)

    7: ??? / End 14 (movie)

    8: Mega Satan / End 16 (movie)

    9: Greed / End 18 (movie)

    10: Hush / End 17 (movie)

    11: Delirium / End 20 (movie)

    12: Greedier / End 19 (movie)

    13: Mother / End 21 (movie)

    14: The Beast / Final (movie)

    Successful endings increment your win streak. If you pass a bad number like 0 then you can artificially increase your win streak as much as you want.

___
### Fadein () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Fadein ( float Speed ) {: .copyable aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### void Fadein ( float Speed, boolean ShowIcon = true, [KColor](KColor.md) Color = KColor.Black ) {: .copyable aria-label='Functions' }

___
### Fadeout () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Fadeout ( float Speed, FadeoutTarget Target ) {: .copyable aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### void Fadeout ( float Speed, FadeoutTarget Target, [KColor](KColor.md) Color = KColor.Black ) {: .copyable aria-label='Functions' }
???+ note "Notes"
	FadeoutTarget types:

	0: File Select Menu

	1: File Selected Menu (New run, Start game, etc.)

	2: Title

	3: New Game (Starts a new run)

	4: Victory lap

___
### Fart () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void Fart ( [Vector](Vector.md) Position, float Radius = 85, [Entity](Entity.md) Source = nil, float FartScale = 1, int FartSubType = 0, [Color](Color.md) FartColor = Color.Default ) {: .copyable aria-label='Functions' }

___
### Finish·Challenge () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void FinishChallenge ( ) {: .copyable aria-label='Functions' }

___
### Get·Ambush () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### Ambush GetAmbush ( ) {: .copyable aria-label='Functions' }
???+ bug "Bug"
    Since it returns UserData, this function is unusable and therefore broken.

___
### Get·Darkness·Modifier () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### float GetDarknessModifier ( ) {: .copyable aria-label='Functions' }

___
### Get·Devil·Room·Deals () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetDevilRoomDeals ( ) {: .copyable aria-label='Functions' }

___
### Get·Donation·Mod·Angel () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetDonationModAngel ( ) {: .copyable aria-label='Functions' }

Get the value that indicates the angel-counter of a shop-donation maschine. This Stat increases everytime you donate to a shop. A higher number grants a few advantages.
___
### Get·Donation·Mod·Greed () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetDonationModGreed ( ) {: .copyable aria-label='Functions' }

___
### Get·Font () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Font](Font.md) GetFont ( ) {: .copyable aria-label='Functions' }

___
### Get·Frame·Count () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetFrameCount ( ) {: .copyable aria-label='Functions' }

Returns the number of frames the gameplay is actively running. Pauses are therefore not included!
1 second equals 30 frames.
This function therefore works drastically different than [`:::lua Isaac.GetFrameCount()`](Isaac.md#getframecount)

???- example "Example Code"
    This code returns hours, minutes, seconds, and milliseconds of the game running actively:
    ```lua
    local curTime = Game():GetFrameCount()
    local msecs= curTime%30 * (10/3) -- turns the millisecond value range from [0 to 30] to [0 to 100]
    local secs= math.floor(curTime/30)%60
    local mins= math.floor(curTime/30/60)%60
    local hours= math.floor(curTime/30/60/60)%60

    ```
___
### Get·Greed·Boss·Wave·Num () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetGreedBossWaveNum ( ) {: .copyable aria-label='Functions' }

___
### Get·Greed·Waves·Num () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetGreedWavesNum ( ) {: .copyable aria-label='Functions' }

___
### Get·HUD () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### [HUD](HUD.md) GetHUD ( ) {: .copyable aria-label='Functions' }

___
### Get·Item·Overlay () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### ItemOverlay GetItemOverlay ( ) {: .copyable aria-label='Functions' }
???+ bug "Bug"
    Since it returns UserData, this function is unusable and therefore broken.

___
### Get·Item·Pool () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [ItemPool](ItemPool.md) GetItemPool ( ) {: .copyable aria-label='Functions' }

___
### Get·Last·Devil·Room·Stage () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [LevelStage](enums/LevelStage.md) GetLastDevilRoomStage ( ) {: .copyable aria-label='Functions' }

???+ bug "Bug"
    Since it returns UserData, this function is unusable and therefore broken.
___
### Get·Last·Level·With·Damage () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [LevelStage](enums/LevelStage.md) GetLastLevelWithDamage ( ) {: .copyable aria-label='Functions' }

???+ bug "Bug"
    Since it returns UserData, this function is unusable and therefore broken.
___
### Get·Last·Level·Without·Half·Hp () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [LevelStage](enums/LevelStage.md) GetLastLevelWithoutHalfHp ( ) {: .copyable aria-label='Functions' }

???+ bug "Bug"
    Since it returns UserData, this function is unusable and therefore broken.
___
### Get·Level () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Level](Level.md) GetLevel ( ) {: .copyable aria-label='Functions' }

___
### Get·Nearest·Player () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [EntityPlayer](EntityPlayer.md) GetNearestPlayer ( [Vector](Vector.md) Pos ) {: .copyable aria-label='Functions' }

___
### Get·Num·Encountered·Bosses () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetNumEncounteredBosses ( ) {: .copyable aria-label='Functions' }

___
### Get·Num·Players () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetNumPlayers ( ) {: .copyable aria-label='Functions' }

___
### Get·Player () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [EntityPlayer](EntityPlayer.md) GetPlayer ( int Index ) {: .copyable aria-label='Functions' data-altreturn='nil' }
Returns the [EntityPlayer](EntityPlayer.md) with the given index. This function can return `nil` if the function is called before any player is initialized. If an index is given, that is not used, it will return the last player in the list.

This function is the same as [`Isaac.GetPlayer()`](Isaac.md#getplayer).
___
### Get·Random·Player () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [EntityPlayer](EntityPlayer.md) GetRandomPlayer ( [Vector](Vector.md) Pos, float Radius ) {: .copyable aria-label='Functions' }

___
### Get·Room () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Room](Room.md) GetRoom ( ) {: .copyable aria-label='Functions' }

___
### Get·Screen·Shake·Countdown () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetScreenShakeCountdown ( ) {: .copyable aria-label='Functions' }

___
### Get·Seeds () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Seeds](Seeds.md) GetSeeds ( ) {: .copyable aria-label='Functions' }

___
### Get·Stages·Without·Damage () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetStagesWithoutDamage ( ) {: .copyable aria-label='Functions' }

___
### Get·Stages·Without·Hearts·Picked () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetStagesWithoutHeartsPicked ( ) {: .copyable aria-label='Functions' }

___
### Get·State·Flag () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean GetStateFlag ( [GameStateFlag](enums/GameStateFlag.md) GameStateFlag ) {: .copyable aria-label='Functions' }

___
### Get·Target·Darkness () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### float GetTargetDarkness ( ) {: .copyable aria-label='Functions' }

___
### Get·Treasure·Room·Visit·Count () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetTreasureRoomVisitCount ( ) {: .copyable aria-label='Functions' }

___
### Get·Victory·Lap () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetVictoryLap ( ) {: .copyable aria-label='Functions' }

___
### Has·Encountered·Boss () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean HasEncounteredBoss ( [EntityType](enums/EntityType.md) Boss, int Variant ) {: .copyable aria-label='Functions' }

___
### Has·Hallucination () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean HasHallucination ( ) {: .copyable aria-label='Functions' }
Returns true if the Delirium animation (Static noise intersected with past gameplay fotage) is playing right now.
___
### Is·Greed·Mode () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean IsGreedMode ( ) {: .copyable aria-label='Functions' }
Returns true if the current gamemode is set to Greed or Greedier mode.

To differentiate between Greed and Greedier mode, you need to use the [`Game().Difficulty`](#difficulty) attribute.
___
### Is·Paused () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean IsPaused ( ) {: .copyable aria-label='Functions' }

Returns true, if the game is in a state, where the player is unable to input any thing or the game logic is paused. This includes having the pause menu opened, being in room transitions/cutscenes or while displaying a "big book" animation.
___
### Make·Shockwave () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void MakeShockwave ( [Vector](Vector.md) Position, float Amplitude, float Speed, int Duration ) {: .copyable aria-label='Functions' }

___
### Move·To·Random·Room () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void MoveToRandomRoom ( boolean IAmErrorRoom, int Seed, [EntityPlayer](EntityPlayer.md) Player ) {: .copyable aria-label='Functions' }

___
### Next·Victory·Lap () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void NextVictoryLap ( ) {: .copyable aria-label='Functions' }

___
### Render () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void Render ( ) {: .copyable aria-label='Functions' }

___
### Reroll·Enemy () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean RerollEnemy ( [Entity](Entity.md) e ) {: .copyable aria-label='Functions' }

___
### Reroll·Level·Collectibles () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void RerollLevelCollectibles ( ) {: .copyable aria-label='Functions' }

___
### Reroll·Level·Pickups () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void RerollLevelPickups ( int Seed ) {: .copyable aria-label='Functions' }

___
### Set·Last·Devil·Room·Stage () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetLastDevilRoomStage ( [LevelStage](enums/LevelStage.md) Stage ) {: .copyable aria-label='Functions' }

___
### Set·Last·Level·With·Damage () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetLastLevelWithDamage ( [LevelStage](enums/LevelStage.md) Stage ) {: .copyable aria-label='Functions' }

___
### Set·Last·Level·Without·Half·Hp () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetLastLevelWithoutHalfHp ( [LevelStage](enums/LevelStage.md) Stage ) {: .copyable aria-label='Functions' }

___
### Set·State·Flag () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetStateFlag ( [GameStateFlag](enums/GameStateFlag.md) GameStateFlag, boolean Val ) {: .copyable aria-label='Functions' }

___
### Shake·Screen () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ShakeScreen ( int Timeout ) {: .copyable aria-label='Functions' }

___
### Show·Fortune () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ShowFortune ( ) {: .copyable aria-label='Functions' }

___
### Show·Hallucination () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void ShowHallucination ( int FrameCount, [BackdropType](enums/BackdropType.md) Backdrop = BackdropType.NUM_BACKDROPS ) {: .copyable aria-label='Functions' }
Plays the Delirium animation (Static noise intersected with past gameplay fotage), which will also change the background of the current room.

???- example "Workaround Code for AB+ mods"
    This function was broken in AB+, so there was this implementation in order to recreate the effect.

    This code emulated the effect of this function by hijacking the Delirious item effect

    ```lua
    local usagetime = -1 -- stores the last time the effect was called.

    -- call this function to play the Hallucination effect
    function playHallucination()
        local player = Isaac.GetPlayer()
        usagetime = Game().TimeCounter
        player:UseActiveItem(510, false, false, false, false) -- use the delirious item without applying the costume
        player:GetEffects():RemoveCollectibleEffect(510) -- remove any unwanted side effects of the item usage
    end

    -- Removes all spawned NPC entities when activating the function
    function mod:onFriendlyInit(npc)
    	if Game().TimeCounter-usagetime == 0 then -- only remove enemies that spawned when the effect was called!
    		npc:Remove()
    	end
    end
    mod:AddCallback(ModCallbacks.MC_POST_NPC_INIT, mod.onFriendlyInit)

    ```
___
### Show·Rule () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ShowRule ( ) {: .copyable aria-label='Functions' }

___
### Spawn () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Entity](Entity.md) Spawn ( [EntityType](enums/EntityType.md) Type, int Variant, [Vector](Vector.md) Position, [Vector](Vector.md) Velocity, [Entity](Entity.md) Spawner, int SubType, int Seed ) {: .copyable aria-label='Functions' }

There are two spawn functions. [Isaac.Spawn()](Isaac.md#spawn), which spawns an entity with a random seed, and [Game():Spawn()](Game.md#spawn) (this one), which spawns an entity with a specific seed. However due to a bug, [Isaac.Spawn()](Isaac.md#spawn) has a chance to generate a seed of 0, which crashes the game. If you need to spawn an entity with a random seed, you should always use [Game():Spawn()](Game.md#spawn) with a helper function that calls [Random()](GlobalFunctions.md#random) and arbitrarily sets the seed to 1 when the seed is 0.

???- example "Example Code"
    This code spawns a Leech with specific seed.
    ```lua
    Game():Spawn(
      EntityType.ENTITY_LEECH, -- Type
      0, -- Variant
      Game():GetRoom():GetCenterPos(), -- Position
      Vector(0, 0), -- Velocity
      nil, -- Parent
      0, -- SubType
      Game():GetRoom():GetSpawnSeed() -- Seed (the "GetSpawnSeed()" function gets a reproducible seed based on the room, e.g. "2496979501")
    )

    ```
___
### Spawn·Entity·Desc () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [EntityNPC](EntityNPC.md) SpawnEntityDesc ( EntityDesc desc, [Vector](Vector.md) Position, [Entity](Entity.md) Spawner ) {: .copyable aria-label='Functions' }

___
### Spawn·Particles () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void SpawnParticles ( [Vector](Vector.md) Pos, [EffectVariant](enums/EffectVariant.md) ParticleType, int NumParticles, float Speed, [Color](Color.md) Color = Color.Default, float Height = 100000, int SubType = 0 ) {: .copyable aria-label='Functions' }

___
### Start·Room·Transition () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void StartRoomTransition ( int RoomIndex, [Direction](enums/Direction.md) Direction, [RoomTransitionAnim](enums/RoomTransitionAnim.md) Animation = RoomTransitionAnim.WALK, [EntityPlayer](EntityPlayer.md) Player = nil, int Dimension = -1 ) {: .copyable aria-label='Functions' }

Note that if you use `RoomTransitionAnim.PIXELATION` (2), you must not interrupt the effect (e.g. with another room transition or room change) once it starts playing. Otherwise, after around 11 interuptions, the "log.txt" will start to become spammed with "[ASSERT] - PushRenderTarget: stack overflow!". This is because internally, the game uses a finite buffer to store information about the effect, and if it is interrupted, the buffer will never be cleared.

???- info "Dimension Info"
    Dimension: ID of the dimension to get the room from

		* -1: Current dimension
		* 0: Main dimension
		* 1: Secondary dimension, used by Downpour mirror dimension and Mines escape sequence
		* 2: Death Certificate dimension

???- note "Notes"

	The boss vs screen overrides all of these transitions, however, using RoomTransitionAnim.DEATH_CERTIFICATE will make it so the player appears lying down after the vs screen and the game will be paused while they get up.

???+ bug "Bugs"
    The Direction variable is completely ignored at all times, with the game instead calculating the direction between the two rooms itself for the animation. The two rooms are the current room and the room of the RoomIndex. It has no impact on the doors either.
___
### Start·Stage·Transition () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void StartStageTransition ( boolean SameStage, int TransitionOverride, [EntityPlayer](EntityPlayer.md) Player ) {: .copyable aria-label='Functions' }

Starts a transition animation, like the ones used when entering a trapdoor or light beam to reach the next stage.

`SameStage` will cause the stage to be reseeded if set to true. Otherwise, the game will progress to the next stage. The next stage is selected based on the rules of transition internally defined.

* If [GameStateFlag.STATE_SECRET_PATH](enums/GameStateFlag.md) is set, the transition will move towards the alternate path.
* If [GameStateFlag.STATE_HEAVEN_PATH](enums/GameStateFlag.md) is set, and the current stage is Womb II / XL or ???, the transition will move towards Cathedral, otherwise it will move toward Sheol.
* If [GameStateFlag.STATE_BACKWARDS_PATH](enums/GameStateFlag.md) is set, this will progress towards the next stage in the Ascent.
* If the current stage is Corpse II / XL, the transition will progress towards ???.


`TransitionOverride` can be used to trigger special stage transitions that will progress to a stage that is not necessarily the next one available.

* 2: Sacrifice Room teleportation. Progress towards Dark Room regardless of current floor.
* 3: Void trapdoor. Progress towards The Void regardless of current floor.
* 4: unknown. Freeze all logic updates, but the console can still be opened.
* 5: Ascent transition. If `SameStage` is set to true, progress towards the Ascent version of the current floor (softlocks the game if the current floor doesn't have an Ascent version). If `SameStage` is set to false, move to the next stage (in the non Ascent path), and then enter the Ascent version of this new stage.
* 6: Home Glowing Hourglass. Progress towards Home, regardless of the current floor.

???+ bug "Bug"
	Contrary to previous beliefs, this function will crash when **not** provided with an EntityPlayer. It is worth noting however, that the function, even when used correctly, is inconsistent and seems to sometimes crash for no reason.
        Reverse engineering the game shows that the Lua binder associated with this function improperly calls Game::StartStageTransition which results in a C++ stack corruption. As a result, correct calls to this function may or may not crash the game.
___
### Update () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void Update ( ) {: .copyable aria-label='Functions' }

___
### Update·Strange·Attractor () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void UpdateStrangeAttractor ( [Vector](Vector.md) Position, float Force = 10, float Radius = 250 ) {: .copyable aria-label='Functions' }

___
## Variables
### Blue·Womb·Par·Time {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int BlueWombParTime  {: .copyable aria-label='Variables' }

___
### Boss·Rush·Par·Time {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int BossRushParTime  {: .copyable aria-label='Variables' }
Number of frames of game time.
___
### Challenge {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### [Challenge](enums/Challenge.md) Challenge {: .copyable aria-label='Variables' }

___
### Difficulty {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .alldlc .tooltip .badge }
#### const [Difficulty](enums/Difficulty.md) Difficulty {: .copyable aria-label='Variables' }

___
### Screen·Shake·Offset {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .alldlc .tooltip .badge }
#### const [Vector](Vector.md) ScreenShakeOffset  {: .copyable aria-label='Variables' }

___
### Time·Counter {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int TimeCounter  {: .copyable aria-label='Variables' }
same as FrameCounter but can be modified, mostly used for timed events (bossrush, daily, ...) and not for timestepping
___
