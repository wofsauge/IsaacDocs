# Class "Game"
## Constructors
### Game () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
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
[ ](#){: .abrep .tooltip .badge }
#### void AddDevilRoomDeal ( ) {: .copyable aria-label='Functions' }

___
### Add·Encountered·Boss () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddEncounteredBoss ( [EntityType](enums/EntityType.md) Boss, int Variant ) {: .copyable aria-label='Functions' }

___
### Add·Pixelation () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddPixelation ( int Duration ) {: .copyable aria-label='Functions' }

Triggers the effect of the "retro vision" pill.
___
### Add·Stage·Without·Damage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddStageWithoutDamage ( ) {: .copyable aria-label='Functions' }

Increases the ingame counter, that keeps track of the stages you cleared without taking damage. (useful for Devil deal manipulations)
___
### Add·Stage·Without·Hearts·Picked () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddStageWithoutHeartsPicked ( ) {: .copyable aria-label='Functions' }

Increases the ingame counter, that keeps track of stages you cleared without picking up hearts.
___
### Add·Treasure·Rooms·Visited () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddTreasureRoomsVisited ( ) {: .copyable aria-label='Functions' }

___
### Bomb·Damage () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void BombDamage ( [Vector](Vector.md) Position, float Damage, float Radius, boolean LineCheck = true, [Entity](Entity.md) Source = nil, [TearFlags](enums/TearFlags.md) TearFlags = [TearFlags](enums/TearFlags.md).TEAR_NORMAL, int DamageFlags = [DamageFlags](enums/DamageFlag.md).DAMAGE_EXPLOSION, boolean DamageSource = false ) {: .copyable aria-label='Functions' }

___
### Bomb·Explosion·Effects () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void BombExplosionEffects ( [Vector](Vector.md) Position, float Damage, [TearFlags](enums/TearFlags.md) TearFlags = [TearFlags](enums/TearFlags.md).TEAR_NORMAL, [Color](Color.md) Color = Color.Default, [Entity](Entity.md) Source = nil, float RadiusMult = 1, boolean LineCheck = true, boolean DamageSource = false, int DamageFlags = [DamageFlags](enums/DamageFlag.md).DAMAGE_EXPLOSION ) {: .copyable aria-label='Functions' }
The complete bomb explosion package: Do damage, spawn boomgraphics, and apply tearflag-based effects.
___
### Bomb·Tearflag·Effects () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void BombTearflagEffects ( [Vector](Vector.md) Position, float Radius, [TearFlags](enums/TearFlags.md) TearFlags, [Entity](Entity.md) Source = nil, float RadiusMult = 1) {: .copyable aria-label='Functions' }
Does bomb-exclusive special effects.
___
### Butter·Bean·Fart () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void ButterBeanFart ( [Vector](Vector.md) Position, float Radius, [Entity](Entity.md) Source, boolean ShowEffect, boolean DoSuperKnockback ) {: .copyable aria-label='Functions' }

___
### Change·Room () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void ChangeRoom ( int RoomIndex, int Dimension = -1 ) {: .copyable aria-label='Functions' }

There are no known differences between this and the `Level.ChangeRoom` method.

???- info "Dimension Info"
    Dimension: ID of the dimension to get the room from

		* -1: Current dimension
		* 0: Main dimension
		* 1: Secondary dimension, used by Downpour mirror dimension and Mines escape sequence
		* 2: Death Certificate dimension
___
### Charm·Fart () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void CharmFart ( [Vector](Vector.md) Position, float Radius, [Entity](Entity.md) Source ) {: .copyable aria-label='Functions' }

___
### Clear·Donation·Mod·Angel () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ClearDonationModAngel ( ) {: .copyable aria-label='Functions' }

___
### Clear·Donation·Mod·Greed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ClearDonationModGreed ( ) {: .copyable aria-label='Functions' }

___
### Clear·Stages·Without·Damage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ClearStagesWithoutDamage ( ) {: .copyable aria-label='Functions' }

Sets the counter for stages cleared without damage to 0.
___
### Clear·Stages·Without·Hearts·Picked () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ClearStagesWithoutHeartsPicked ( ) {: .copyable aria-label='Functions' }

Sets the counter for stages cleared without picking up hearts to 0.
___
### Darken () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Darken ( float Darkness, int Timeout ) {: .copyable aria-label='Functions' }

___
### Donate·Angel () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void DonateAngel ( int Donate ) {: .copyable aria-label='Functions' }

___
### Donate·Greed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void DonateGreed ( int Donate ) {: .copyable aria-label='Functions' }

___
### End () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void End ( Ending Ending ) {: .copyable aria-label='Functions' }

___
### Fadein () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Fadein ( float Speed ) {: .copyable aria-label='Functions' }

___
### Fadeout () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Fadeout ( float Speed, FadeoutTarget Target ) {: .copyable aria-label='Functions' }
???+ note "Notes"
	FadeoutTarget types:

	0: File Select Menu

	1: File Selected Menu (New run, Start game, etc.)

	2: Title

	3: New Game (Starts a new run)

	4: Victory lap

___
### Fart () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void Fart ( [Vector](Vector.md) Position, float Radius = 85, [Entity](Entity.md) Source = nil, float FartScale = 1, int FartSubType = 0, [Color](Color.md) FartColor = Color.Default ) {: .copyable aria-label='Functions' }

___
### Finish·Challenge () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void FinishChallenge ( ) {: .copyable aria-label='Functions' }

___
### Get·Ambush () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### Ambush GetAmbush ( ) {: .copyable aria-label='Functions' }
???+ bug "Bug"
    Since it returns UserData, this function is unusable and therefore broken.

___
### Get·Darkness·Modifier () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### float GetDarknessModifier ( ) {: .copyable aria-label='Functions' }

___
### Get·Devil·Room·Deals () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetDevilRoomDeals ( ) {: .copyable aria-label='Functions' }

___
### Get·Donation·Mod·Angel () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetDonationModAngel ( ) {: .copyable aria-label='Functions' }

Get the value that indicates the angel-counter of a shop-donation maschine. This Stat increases everytime you donate to a shop. A higher number grants a few advantages.
___
### Get·Donation·Mod·Greed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetDonationModGreed ( ) {: .copyable aria-label='Functions' }

___
### Get·Font () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Font](Font.md) GetFont ( ) {: .copyable aria-label='Functions' }

___
### Get·Frame·Count () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetFrameCount ( ) {: .copyable aria-label='Functions' }

Returns the number of frames the gameplay is actively running. Pauses are therefore not included!
1 second equals 30 frames.
This function therefore works drastically different than `:::lua Isaac.GetFrameCount()`

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
[ ](#){: .abrep .tooltip .badge }
#### int GetGreedBossWaveNum ( ) {: .copyable aria-label='Functions' }

___
### Get·Greed·Waves·Num () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGreedWavesNum ( ) {: .copyable aria-label='Functions' }

___
### Get·HUD () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [HUD](HUD.md) GetHUD ( ) {: .copyable aria-label='Functions' }

___
### Get·Item·Overlay () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### ItemOverlay GetItemOverlay ( ) {: .copyable aria-label='Functions' }
???+ bug "Bug"
    Since it returns UserData, this function is unusable and therefore broken.

___
### Get·Item·Pool () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [ItemPool](ItemPool.md) GetItemPool ( ) {: .copyable aria-label='Functions' }

___
### Get·Last·Devil·Room·Stage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [LevelStage](enums/LevelStage.md) GetLastDevilRoomStage ( ) {: .copyable aria-label='Functions' }

???+ bug "Bug"
    Since it returns UserData, this function is unusable and therefore broken.
___
### Get·Last·Level·With·Damage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [LevelStage](enums/LevelStage.md) GetLastLevelWithDamage ( ) {: .copyable aria-label='Functions' }

???+ bug "Bug"
    Since it returns UserData, this function is unusable and therefore broken.
___
### Get·Last·Level·Without·Half·Hp () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [LevelStage](enums/LevelStage.md) GetLastLevelWithoutHalfHp ( ) {: .copyable aria-label='Functions' }

???+ bug "Bug"
    Since it returns UserData, this function is unusable and therefore broken.
___
### Get·Level () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Level](Level.md) GetLevel ( ) {: .copyable aria-label='Functions' }

___
### Get·Nearest·Player () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityPlayer](EntityPlayer.md) GetNearestPlayer ( [Vector](Vector.md) Pos ) {: .copyable aria-label='Functions' }

___
### Get·Num·Encountered·Bosses () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetNumEncounteredBosses ( ) {: .copyable aria-label='Functions' }

___
### Get·Num·Players () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetNumPlayers ( ) {: .copyable aria-label='Functions' }

___
### Get·Player () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityPlayer](EntityPlayer.md) GetPlayer ( int Index ) {: .copyable aria-label='Functions' data-altreturn='nil' }
Returns the [EntityPlayer](EntityPlayer.md) with the given index. This function can return `nil` if the function is called before any player is initialized. If an index is given, that is not used, it will return the last player in the list.

This function is the same as [`Isaac.GetPlayer()`](Isaac.md#getplayer).
___
### Get·Random·Player () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityPlayer](EntityPlayer.md) GetRandomPlayer ( [Vector](Vector.md) Pos, float Radius ) {: .copyable aria-label='Functions' }

___
### Get·Room () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Room](Room.md) GetRoom ( ) {: .copyable aria-label='Functions' }

___
### Get·Screen·Shake·Countdown () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetScreenShakeCountdown ( ) {: .copyable aria-label='Functions' }

___
### Get·Seeds () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Seeds](Seeds.md) GetSeeds ( ) {: .copyable aria-label='Functions' }

___
### Get·Stages·Without·Damage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetStagesWithoutDamage ( ) {: .copyable aria-label='Functions' }

___
### Get·Stages·Without·Hearts·Picked () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetStagesWithoutHeartsPicked ( ) {: .copyable aria-label='Functions' }

___
### Get·State·Flag () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean GetStateFlag ( [GameStateFlag](enums/GameStateFlag.md) GameStateFlag ) {: .copyable aria-label='Functions' }

___
### Get·Target·Darkness () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### float GetTargetDarkness ( ) {: .copyable aria-label='Functions' }

___
### Get·Treasure·Room·Visit·Count () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetTreasureRoomVisitCount ( ) {: .copyable aria-label='Functions' }

___
### Get·Victory·Lap () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetVictoryLap ( ) {: .copyable aria-label='Functions' }

___
### Has·Encountered·Boss () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasEncounteredBoss ( [EntityType](enums/EntityType.md) Boss, int Variant ) {: .copyable aria-label='Functions' }

___
### Has·Hallucination () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int HasHallucination ( ) {: .copyable aria-label='Functions' }

___
### Is·Greed·Mode () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsGreedMode ( ) {: .copyable aria-label='Functions' }

___
### Is·Paused () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsPaused ( ) {: .copyable aria-label='Functions' }

Returns true, if the game is in a state, where the player is unable to input any thing or the game logic is paused. This includes having the pause menu opened, being in room transitions/cutscenes or while displaying a "big book" animation.
___
### Move·To·Random·Room () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void MoveToRandomRoom ( boolean IAmErrorRoom, int Seed ) {: .copyable aria-label='Functions' }

___
### Next·Victory·Lap () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void NextVictoryLap ( ) {: .copyable aria-label='Functions' }

___
### Render () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Render ( ) {: .copyable aria-label='Functions' }

___
### Reroll·Enemy () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean RerollEnemy ( [Entity](Entity.md) e ) {: .copyable aria-label='Functions' }

___
### Reroll·Level·Collectibles () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RerollLevelCollectibles ( ) {: .copyable aria-label='Functions' }

___
### Reroll·Level·Pickups () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RerollLevelPickups ( int Seed ) {: .copyable aria-label='Functions' }

___
### Set·Last·Devil·Room·Stage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetLastDevilRoomStage ( [LevelStage](enums/LevelStage.md) Stage ) {: .copyable aria-label='Functions' }

___
### Set·Last·Level·With·Damage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetLastLevelWithDamage ( [LevelStage](enums/LevelStage.md) Stage ) {: .copyable aria-label='Functions' }

___
### Set·Last·Level·Without·Half·Hp () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetLastLevelWithoutHalfHp ( [LevelStage](enums/LevelStage.md) Stage ) {: .copyable aria-label='Functions' }

___
### Set·State·Flag () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetStateFlag ( [GameStateFlag](enums/GameStateFlag.md) GameStateFlag, boolean Val ) {: .copyable aria-label='Functions' }

___
### Shake·Screen () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ShakeScreen ( int Timeout ) {: .copyable aria-label='Functions' }

___
### Show·Fortune () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ShowFortune ( ) {: .copyable aria-label='Functions' }

___
### Show·Hallucination () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void ShowHallucination ( int FrameCount, [BackdropType](enums/BackdropType.md) Backdrop = BackdropType.NUM_BACKDROPS ) {: .copyable aria-label='Functions' }
Plays the Delirium animation (Static noise intersected with past gameplay fotage), which will also change the background of the current room.

???- example "Workaround Code for AB+ mods"
    This function was broken in AB+, so there was this implementation in order to recreate the effect.

    This code emulated the effect of this function by hijacking the Delirious item effect

    ```lua
    local usagetime = -1 -- stores the last time the effect was called.

    -- call this function to play the Hallucination effect
    function playHallucination()
        local player = Isaac.GetPlayer(0)
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
[ ](#){: .abrep .tooltip .badge }
#### void ShowRule ( ) {: .copyable aria-label='Functions' }

___
### Spawn () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.md) Spawn ( [EntityType](enums/EntityType.md) Type, int Variant, [Vector](Vector.md) Position, [Vector](Vector.md) Velocity, [Entity](Entity.md) Spawner, int SubType, int Seed ) {: .copyable aria-label='Functions' }

The game has two spawn functions, [Game():Spawn()](#spawn) (this one) and [Isaac.Spawn()](Isaac.md#spawn). If you need to spawn something with a specific seed, then you use [Game():Spawn()](#spawn). If you need to spawn something with a randomly generated seed, then use [Isaac.Spawn()](Isaac.md#spawn). Most of the time, you will probably want to use [Isaac.Spawn()](Isaac.md#spawn).

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
[ ](#){: .abrep .tooltip .badge }
#### [EntityNPC](EntityNPC.md) SpawnEntityDesc ( EntityDesc desc, [Vector](Vector.md) Position, [Entity](Entity.md) Spawner ) {: .copyable aria-label='Functions' }

___
### Spawn·Particles () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void SpawnParticles ( [Vector](Vector.md) Pos, [EffectVariant](enums/EffectVariant.md) ParticleType, int NumParticles, float Speed, [Color](Color.md) Color = Color.Default, float Height = 100000, int SubType = 0 ) {: .copyable aria-label='Functions' }

___
### Start·Room·Transition () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void StartRoomTransition ( int RoomIndex, [Direction](enums/Direction.md) Direction, [RoomTransitionAnim](enums/RoomTransitionAnim.md) Animation = RoomTransitionAnim.WALK, [EntityPlayer](EntityPlayer.md) Player = nil, int Dimension = -1 ) {: .copyable aria-label='Functions' }

???- info "Dimension Info"
    Dimension: ID of the dimension to get the room from

		* -1: Current dimension
		* 0: Main dimension
		* 1: Secondary dimension, used by Downpour mirror dimension and Mines escape sequence
		* 2: Death Certificate dimension

???- note "Notes"
    Available Animation types (Discovered by "ilise rose" (@yatboim)):

    0: (Default) Standard transition, sweeps the room in from a direction

    1: (Fade) Fade to black transition, like its used for the "goto" - console command

    2: (Stage) Pixel out transition, like used for crawlspaces and the trapdoor at the end of floors

    3: (Teleport) teleport transition, isaac teleports out of the current room and into the next

    5: (Ankh) Same as standard transition

    6: (Dead Cat) Same as standard transition

    7: (1Up) Same as standard transition

    8: (Guppys Collar) Same as standard transition

    9: (Judas Shadow) Same as standard transition

    10: (Lazarus Rags) Same as standard transition

    12: (Glowing Hourglass) Same as standard transition

    13: (D7) Same as standard transition

    14: (Missing Poster) Same as standard transition

???+ bug "Bugs"
    The Direction variable is completely ignored at all times, with the game instead calculating the direction between the two rooms itself for the animation. The two rooms are the current room and the room of the RoomIndex. It has no impact on the doors either.
___
### Start·Stage·Transition () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void StartStageTransition ( boolean SameStage, StageTransition::Animation Animation ) {: .copyable aria-label='Functions' }

Starts a transition animation like it`s playing when entering a trapdoor to switch between stages.
**Stage Transition types:**

* 0: Standard transition. Removes the playermodel before the pixel fadeout. Then plays the Stage Nightmare animation. The player starts in fetal position after the transition.
* 1: Standard transition with pixel fadein/out, nightmare cutscene but the player model doesnt get removed and starts in the normal standing position after the transition.
* &gt;2: Same as 0

___
### Update () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Update ( ) {: .copyable aria-label='Functions' }

___
### Update·Strange·Attractor () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void UpdateStrangeAttractor ( [Vector](Vector.md) Position, float Force = 10, float Radius = 250 ) {: .copyable aria-label='Functions' }

___
## Variables
### Blue·Womb·Par·Time {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int BlueWombParTime  {: .copyable aria-label='Variables' }

___
### Boss·Rush·Par·Time {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int BossRushParTime  {: .copyable aria-label='Variables' }
Number of frames of game time.
___
### Challenge {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Challenge](enums/Challenge.md) Challenge {: .copyable aria-label='Variables' }

___
### Difficulty {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Difficulty](enums/Difficulty.md) Difficulty {: .copyable aria-label='Variables' }

___
### Screen·Shake·Offset {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Vector](Vector.md) ScreenShakeOffset  {: .copyable aria-label='Variables' }

___
### Time·Counter {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int TimeCounter  {: .copyable aria-label='Variables' }
same as FrameCounter but can be modified, mostly used for timed events (bossrush, daily, ...) and not for timestepping
___
