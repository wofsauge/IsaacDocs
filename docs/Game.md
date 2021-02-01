# Class "Game"
## Constructors
### Game () {: aria-label='Constructors' }
[ ](#){: .abp .tooltip .badge }
#### [Game](../Game) Game ( ) {: .copyable aria-label='Constructors' }

Returns a Game object.

???- example "Example Code"
    Example usage:
    ```lua 
    Game():IsPaused()
    --returns true if the game is paused
    
    ```
___ 
## Functions
### AddDevilRoomDeal () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddDevilRoomDeal ( ) {: .copyable aria-label='Functions' }

___ 
### AddEncounteredBoss () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddEncounteredBoss ( [EntityType](../enums/EntityType) Boss, int Variant ) {: .copyable aria-label='Functions' }

___ 
### AddPixelation () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddPixelation ( int Duration ) {: .copyable aria-label='Functions' }

Triggers the effect of the "retro vision" pill.
___ 
### AddStageWithoutDamage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddStageWithoutDamage ( ) {: .copyable aria-label='Functions' }

Increases the ingame counter, that keeps track of the stages you cleared without taking damage. (useful for Devil deal manipulations)
___ 
### AddStageWithoutHeartsPicked () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddStageWithoutHeartsPicked ( ) {: .copyable aria-label='Functions' }

Increases the ingame counter, that keeps track of stages you cleared without picking up hearts.
___ 
### AddTreasureRoomsVisited () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddTreasureRoomsVisited ( ) {: .copyable aria-label='Functions' }

___ 
### BombDamage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void BombDamage ( [Vector](../Vector) Position, float Damage, float Radius, boolean LineCheck, [Entity](../Entity) Source, int TearFlags, int DamageFlags, boolean DamageSource ) {: .copyable aria-label='Functions' }

___ 
### BombExplosionEffects () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void BombExplosionEffects ( [Vector](../Vector) Position, float Damage, int TearFlags, [Color](../Color) Color, [Entity](../Entity) Source, float RadiusMult, boolean LineCheck, boolean DamageSource ) {: .copyable aria-label='Functions' }
The complete bomb explosion package: Do damage, spawn boomgraphics, and apply tearflag-based effects. 
___ 
### BombTearflagEffects () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void BombTearflagEffects ( [Vector](../Vector) Position, float Radius, int TearFlags, [Entity](../Entity) Source ) {: .copyable aria-label='Functions' }
Does bomb-exclusive special effects. 
___ 
### ButterBeanFart () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ButterBeanFart ( [Vector](../Vector) Position, float Radius, [Entity](../Entity) Source, boolean ShowEffect ) {: .copyable aria-label='Functions' }

___ 
### ChangeRoom () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ChangeRoom ( int RoomIndex ) {: .copyable aria-label='Functions' }

___ 
### CharmFart () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void CharmFart ( [Vector](../Vector) Position, float Radius, [Entity](../Entity) Source ) {: .copyable aria-label='Functions' }

___ 
### ClearDonationModAngel () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ClearDonationModAngel ( ) {: .copyable aria-label='Functions' }

___ 
### ClearDonationModGreed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ClearDonationModGreed ( ) {: .copyable aria-label='Functions' }

___ 
### ClearStagesWithoutDamage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ClearStagesWithoutDamage ( ) {: .copyable aria-label='Functions' }

Sets the counter for stages cleared without damage to 0.
___ 
### ClearStagesWithoutHeartsPicked () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ClearStagesWithoutHeartsPicked ( ) {: .copyable aria-label='Functions' }

Sets the counter for stages cleared without picking up hearts to 0.
___ 
### Darken () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Darken ( float Darkness, int Timeout ) {: .copyable aria-label='Functions' }

___ 
### DonateAngel () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DonateAngel ( int Donate ) {: .copyable aria-label='Functions' }

___ 
### DonateGreed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DonateGreed ( int Donate ) {: .copyable aria-label='Functions' }

___ 
### End () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void End ( Ending Ending ) {: .copyable aria-label='Functions' }
remove entity from the update list (render only) void EnableEntity(Entity* e); add entity back to the update list (update + render) void DisableEntity(Entity* e); 
___ 
### Fadein () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Fadein ( float Speed ) {: .copyable aria-label='Functions' }

___ 
### Fadeout () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Fadeout ( float Speed, FadeoutTarget Target ) {: .copyable aria-label='Functions' }

___ 
### Fart () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Fart ( [Vector](../Vector) Position, float Radius, [Entity](../Entity) Source, float FartScale, int FartSubType ) {: .copyable aria-label='Functions' }

___ 
### FinishChallenge () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void FinishChallenge ( ) {: .copyable aria-label='Functions' }

___ 
### GetAmbush () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### Ambush GetAmbush ( ) {: .copyable aria-label='Functions' }

___ 
### GetDarknessModifier () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float GetDarknessModifier ( ) {: .copyable aria-label='Functions' }

___ 
### GetDevilRoomDeals () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetDevilRoomDeals ( ) {: .copyable aria-label='Functions' }

___ 
### GetDonationModAngel () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetDonationModAngel ( ) {: .copyable aria-label='Functions' }

Get the value that indicates the angel-counter of a shop-donation maschine. This Stat increases everytime you donate to a shop. A higher number grants a few advantages.
___ 
### GetDonationModGreed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetDonationModGreed ( ) {: .copyable aria-label='Functions' }

___ 
### GetFont () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Font](../Font) GetFont ( ) {: .copyable aria-label='Functions' }

___ 
### GetFrameCount () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
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
### GetGreedBossWaveNum () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetGreedBossWaveNum ( ) {: .copyable aria-label='Functions' }

___ 
### GetGreedWavesNum () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetGreedWavesNum ( ) {: .copyable aria-label='Functions' }

___ 
### GetItemHistory () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### History GetItemHistory ( ) {: .copyable aria-label='Functions' }

___ 
### GetItemOverlay () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### ItemOverlay GetItemOverlay ( ) {: .copyable aria-label='Functions' }

___ 
### GetItemPool () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [ItemPool](../ItemPool) GetItemPool ( ) {: .copyable aria-label='Functions' }

___ 
### LevelStage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void [LevelStage](../enums/LevelStage) ( UserData) GetLastDevilRoomStage ( ) {: .copyable aria-label='Functions' }


???- note "Notes"
    Since it returns UserData, this function is unusable and therefore broken.
___ 
### GetLastLevelWithDamage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [LevelStage](../enums/LevelStage) GetLastLevelWithDamage ( ) {: .copyable aria-label='Functions' }

___ 
### GetLastLevelWithoutHalfHp () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [LevelStage](../enums/LevelStage) GetLastLevelWithoutHalfHp ( ) {: .copyable aria-label='Functions' }

___ 
### GetLevel () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Level](../Level) GetLevel ( ) {: .copyable aria-label='Functions' }

___ 
### GetNearestPlayer () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityPlayer](../EntityPlayer) GetNearestPlayer ( [Vector](../Vector) Pos ) {: .copyable aria-label='Functions' }

___ 
### GetNumEncounteredBosses () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNumEncounteredBosses ( ) {: .copyable aria-label='Functions' }

___ 
### GetNumPlayers () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNumPlayers ( ) {: .copyable aria-label='Functions' }

___ 
### GetPlayer () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityPlayer](../EntityPlayer) GetPlayer ( int Index ) {: .copyable aria-label='Functions' }

___ 
### GetRandomPlayer () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityPlayer](../EntityPlayer) GetRandomPlayer ( [Vector](../Vector) Pos, float Radius ) {: .copyable aria-label='Functions' }

___ 
### GetRoom () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Room](../Room) GetRoom ( ) {: .copyable aria-label='Functions' }

___ 
### GetScreenShakeCountdown () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetScreenShakeCountdown ( ) {: .copyable aria-label='Functions' }

___ 
### GetSeeds () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Seeds](../Seeds) GetSeeds ( ) {: .copyable aria-label='Functions' }

___ 
### GetStagesWithoutDamage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetStagesWithoutDamage ( ) {: .copyable aria-label='Functions' }

___ 
### GetStagesWithoutHeartsPicked () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetStagesWithoutHeartsPicked ( ) {: .copyable aria-label='Functions' }

___ 
### GetStateFlag () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean GetStateFlag ( StateFlag StateFlag ) {: .copyable aria-label='Functions' }

___ 
### GetTargetDarkness () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float GetTargetDarkness ( ) {: .copyable aria-label='Functions' }

___ 
### GetTreasureRoomVisitCount () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetTreasureRoomVisitCount ( ) {: .copyable aria-label='Functions' }

___ 
### GetVictoryLap () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetVictoryLap ( ) {: .copyable aria-label='Functions' }

___ 
### HasEncounteredBoss () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasEncounteredBoss ( [EntityType](../enums/EntityType) Boss, int Variant ) {: .copyable aria-label='Functions' }

___ 
### HasHallucination () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int HasHallucination ( ) {: .copyable aria-label='Functions' }

___ 
### IsGreedMode () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsGreedMode ( ) {: .copyable aria-label='Functions' }

___ 
### IsPaused () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsPaused ( ) {: .copyable aria-label='Functions' }

Returns true, if the game is in a state, where the player is unable to input any thing or the game logic is paused. This includes hiving the pause menu opened, being in room transitions/cutscenes or while displaying a "big book" animation.
___ 
### MoveToRandomRoom () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void MoveToRandomRoom ( boolean IAmErrorRoom, int Seed ) {: .copyable aria-label='Functions' }

___ 
### NextVictoryLap () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void NextVictoryLap ( ) {: .copyable aria-label='Functions' }

___ 
### Render () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Render ( ) {: .copyable aria-label='Functions' }

___ 
### RerollEnemy () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean RerollEnemy ( [Entity](../Entity) e ) {: .copyable aria-label='Functions' }

___ 
### RerollLevelCollectibles () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RerollLevelCollectibles ( ) {: .copyable aria-label='Functions' }

___ 
### RerollLevelPickups () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RerollLevelPickups ( int Seed ) {: .copyable aria-label='Functions' }

___ 
### SetLastDevilRoomStage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetLastDevilRoomStage ( [LevelStage](../enums/LevelStage) Stage ) {: .copyable aria-label='Functions' }

___ 
### SetLastLevelWithDamage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetLastLevelWithDamage ( [LevelStage](../enums/LevelStage) Stage ) {: .copyable aria-label='Functions' }

___ 
### SetLastLevelWithoutHalfHp () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetLastLevelWithoutHalfHp ( [LevelStage](../enums/LevelStage) Stage ) {: .copyable aria-label='Functions' }

___ 
### SetStateFlag () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetStateFlag ( StateFlag StateFlag, boolean Val ) {: .copyable aria-label='Functions' }

___ 
### ShakeScreen () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ShakeScreen ( int Timeout ) {: .copyable aria-label='Functions' }

___ 
### ShowFortune () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ShowFortune ( ) {: .copyable aria-label='Functions' }

___ 
### ShowHallucination () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ShowHallucination ( int FrameCount, int HallucinationBackdrop ) {: .copyable aria-label='Functions' }
Plays the Delirium animation (Static noise intersected with past gameplay fotage), which will also change the background of the current room.

???- example "Example Code"
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


???+ bug "Bugs"
    This function does not work and will crash your game on use!
___ 
### ShowRule () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ShowRule ( ) {: .copyable aria-label='Functions' }

___ 
### Spawn () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) Spawn ( [EntityType](../enums/EntityType) Type, int Variant, [Vector](../Vector) Position, [Vector](../Vector) Velocity, [Entity](../Entity) Spawner, int SubType, int Seed ) {: .copyable aria-label='Functions' }

The game has two spawn functions, [Game():Spawn()](#spawn) (this one) and [Isaac.Spawn()](../Isaac/#spawn). If you need to spawn something with a specific seed, then you use [Game():Spawn()](#spawn). If you need to spawn something with a randomly generated seed, then use [Isaac.Spawn()](../Isaac/#spawn). Most of the time, you will probably want to use [Isaac.Spawn()](../Isaac/#spawn).

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
### SpawnEntityDesc () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityNPC](../EntityNPC) SpawnEntityDesc ( Entity::EntityDesc desc, [Vector](../Vector) Position, [Entity](../Entity) Spawner ) {: .copyable aria-label='Functions' }

___ 
### SpawnParticles () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SpawnParticles ( [Vector](../Vector) Pos, EntityEffect::Variant ParticleType, int NumParticles, float Speed, [Color](../Color) Color, float Height ) {: .copyable aria-label='Functions' }

___ 
### StartRoomTransition () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void StartRoomTransition ( int RoomIndex, [Direction](../enums/Direction) Direction, RoomTransition::Animation Animation ) {: .copyable aria-label='Functions' }


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
### StartStageTransition () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void StartStageTransition ( boolean SameStage, StageTransition::Animation Animation ) {: .copyable aria-label='Functions' }

Starts a transition animation like it`s playing when entering a trapdoor to switch between stages.
**Stage Transition types:**

* 0: Standard transition. Removes the playermodel before the pixel fadeout. Then plays the Stage Nightmare animation. The player starts in fetal position after the transition.
* 1: Standard transition with pixel fadein/out, nightmare cutscene but the player model doesnt get removed and starts in the normal standing position after the transition.
* &gt;2: Same as 0

___ 
### Update () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Update ( ) {: .copyable aria-label='Functions' }

___ 
### UpdateStrangeAttractor () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void UpdateStrangeAttractor ( [Vector](../Vector) Position ) {: .copyable aria-label='Functions' }

___ 
## Variables
### BlueWombParTime {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int BlueWombParTime  {: .copyable aria-label='Variables' }

___ 
### BossRushParTime {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int BossRushParTime  {: .copyable aria-label='Variables' }
Number of frames of game time. 
___ 
### Challenge {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Challenge](../enums/Challenge) Challenge {: .copyable aria-label='Variables' }

___ 
### Difficulty {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Difficulty](../enums/Difficulty) Difficulty {: .copyable aria-label='Variables' }

___ 
### ScreenShakeOffset {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) ScreenShakeOffset  {: .copyable aria-label='Variables' }

___ 
### TimeCounter {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int TimeCounter  {: .copyable aria-label='Variables' }
same as FrameCounter but can be modified, mostly used for timed events (bossrush, daily, ...) and not for timestepping 
___ 
