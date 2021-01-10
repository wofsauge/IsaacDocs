# Class "Game"
## Functions
### AddDevilRoomDeal () {: aria-label='Functions' }
#### void AddDevilRoomDeal ( )  {: aria-label='Functions' }

___ 
### AddEncounteredBoss () {: aria-label='Functions' }
#### void AddEncounteredBoss ( [EntityType](../enums/EntityType) Boss, int Variant )  {: aria-label='Functions' }

___ 
### AddPixelation () {: aria-label='Functions' }
#### void AddPixelation ( int Duration)  {: aria-label='Functions' }

Triggers the effect of the "retro vision" pill.
___ 
### AddStageWithoutDamage () {: aria-label='Functions' }
#### void AddStageWithoutDamage ( )  {: aria-label='Functions' }

Increases the ingame counter, that keeps track of the stages you cleared without taking damage. (useful for Devil deal manipulations)
___ 
### AddStageWithoutHeartsPicked () {: aria-label='Functions' }
#### void AddStageWithoutHeartsPicked ( )  {: aria-label='Functions' }

Increases the ingame counter, that keeps track of stages you cleared without picking up hearts.
___ 
### AddTreasureRoomsVisited () {: aria-label='Functions' }
#### void AddTreasureRoomsVisited ( )  {: aria-label='Functions' }

___ 
### BombDamage () {: aria-label='Functions' }
#### void BombDamage ( [Vector](../Vector) Position, float Damage, float Radius, boolean LineCheck, [Entity](../Entity) Source, int TearFlags, int DamageFlags, boolean DamageSource )  {: aria-label='Functions' }

___ 
### BombExplosionEffects () {: aria-label='Functions' }
#### void BombExplosionEffects ( [Vector](../Vector) Position, float Damage, int TearFlags, [Color](../Color) Color, [Entity](../Entity) Source, float RadiusMult, boolean LineCheck, boolean DamageSource )  {: aria-label='Functions' }
The complete bomb explosion package: Do damage, spawn boomgraphics, and apply tearflag-based effects. 
___ 
### BombTearflagEffects () {: aria-label='Functions' }
#### void BombTearflagEffects ( [Vector](../Vector) Position, float Radius, int TearFlags, [Entity](../Entity) Source )  {: aria-label='Functions' }
Does bomb-exclusive special effects. 
___ 
### ButterBeanFart () {: aria-label='Functions' }
#### void ButterBeanFart ( [Vector](../Vector) Position, float Radius, [Entity](../Entity) Source, boolean ShowEffect )  {: aria-label='Functions' }

___ 
### ChangeRoom () {: aria-label='Functions' }
#### void ChangeRoom ( int RoomIndex)  {: aria-label='Functions' }

___ 
### CharmFart () {: aria-label='Functions' }
#### void CharmFart ( [Vector](../Vector) Position, float Radius, [Entity](../Entity) Source )  {: aria-label='Functions' }

___ 
### ClearDonationModAngel () {: aria-label='Functions' }
#### void ClearDonationModAngel ( )  {: aria-label='Functions' }

___ 
### ClearDonationModGreed () {: aria-label='Functions' }
#### void ClearDonationModGreed ( )  {: aria-label='Functions' }

___ 
### ClearStagesWithoutDamage () {: aria-label='Functions' }
#### void ClearStagesWithoutDamage ( )  {: aria-label='Functions' }

Sets the counter for stages cleared without damage to 0.
___ 
### ClearStagesWithoutHeartsPicked () {: aria-label='Functions' }
#### void ClearStagesWithoutHeartsPicked ( )  {: aria-label='Functions' }

Sets the counter for stages cleared without picking up hearts to 0.
___ 
### Darken () {: aria-label='Functions' }
#### void Darken ( float Darkness, int Timeout )  {: aria-label='Functions' }

___ 
### DonateAngel () {: aria-label='Functions' }
#### void DonateAngel ( int Donate)  {: aria-label='Functions' }

___ 
### DonateGreed () {: aria-label='Functions' }
#### void DonateGreed ( int Donate)  {: aria-label='Functions' }

___ 
### End () {: aria-label='Functions' }
#### void End ( Ending Ending)  {: aria-label='Functions' }
remove entity from the update list (render only) void EnableEntity(Entity* e); add entity back to the update list (update + render) void DisableEntity(Entity* e); 
___ 
### Fadein () {: aria-label='Functions' }
#### void Fadein ( float Speed)  {: aria-label='Functions' }

___ 
### Fadeout () {: aria-label='Functions' }
#### void Fadeout ( float Speed, FadeoutTarget Target )  {: aria-label='Functions' }

___ 
### Fart () {: aria-label='Functions' }
#### void Fart ( [Vector](../Vector) Position, float Radius, [Entity](../Entity) Source, float FartScale, int FartSubType )  {: aria-label='Functions' }

___ 
### FinishChallenge () {: aria-label='Functions' }
#### void FinishChallenge ( )  {: aria-label='Functions' }

___ 
### GetAmbush () {: aria-label='Functions' }
#### Ambush GetAmbush ( )  {: aria-label='Functions' }

___ 
### GetDarknessModifier () {: aria-label='Functions' }
#### float GetDarknessModifier ( )  {: aria-label='Functions' }

___ 
### GetDevilRoomDeals () {: aria-label='Functions' }
#### int GetDevilRoomDeals ( )  {: aria-label='Functions' }

___ 
### GetDonationModAngel () {: aria-label='Functions' }
#### int GetDonationModAngel ( )  {: aria-label='Functions' }

Get the value that indicates the angel-counter of a shop-donation maschine. This Stat increases everytime you donate to a shop. A higher number grants a few advantages.
___ 
### GetDonationModGreed () {: aria-label='Functions' }
#### int GetDonationModGreed ( )  {: aria-label='Functions' }

___ 
### GetFont () {: aria-label='Functions' }
#### [Font](../Font) GetFont ( )  {: aria-label='Functions' }

___ 
### GetFrameCount () {: aria-label='Functions' }
#### int GetFrameCount ( )  {: aria-label='Functions' }

Returns the number of frames the gameplay is actively running. Pauses are therefore not included!
1 second equals 30 frames.
This function therefore works drastically different than <a href="namespace_isaac.html#a880a22350f53acea378bf7c721bd5bd5">`:::cpp Isaac.GetFrameCount()`</a>
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code returns hours, minutes, seconds, and milliseconds of the game running actively:
```cpp 
local curTime = Game():GetFrameCount()
local msecs= curTime%30 * (10/3) -- turns the millisecond value range from [0 to 30] to [0 to 100]
local secs= math.floor(curTime/30)%60
local mins= math.floor(curTime/30/60)%60
local hours= math.floor(curTime/30/60/60)%60

```
 WRONG PARSING {: .WRONG_PARSE } 
___ 
### GetGreedBossWaveNum () {: aria-label='Functions' }
#### int GetGreedBossWaveNum ( )  {: aria-label='Functions' }

___ 
### GetGreedWavesNum () {: aria-label='Functions' }
#### int GetGreedWavesNum ( )  {: aria-label='Functions' }

___ 
### GetItemHistory () {: aria-label='Functions' }
#### History GetItemHistory ( )  {: aria-label='Functions' }

___ 
### GetItemOverlay () {: aria-label='Functions' }
#### ItemOverlay GetItemOverlay ( )  {: aria-label='Functions' }

___ 
### GetItemPool () {: aria-label='Functions' }
#### [ItemPool](../ItemPool) GetItemPool ( )  {: aria-label='Functions' }

___ 
### [LevelStage](../enums/LevelStage) () {: aria-label='Functions' }
#### void [LevelStage](../enums/LevelStage) ( UserData) GetLastDevilRoomStage ( )  {: aria-label='Functions' }

##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
Since it returns UserData, this function is unusable and therefore broken.
___ 
### GetLastLevelWithDamage () {: aria-label='Functions' }
#### [LevelStage](../enums/LevelStage) GetLastLevelWithDamage ( )  {: aria-label='Functions' }

___ 
### GetLastLevelWithoutHalfHp () {: aria-label='Functions' }
#### [LevelStage](../enums/LevelStage) GetLastLevelWithoutHalfHp ( )  {: aria-label='Functions' }

___ 
### GetLevel () {: aria-label='Functions' }
#### [Level](../Level) GetLevel ( )  {: aria-label='Functions' }

___ 
### GetNearestPlayer () {: aria-label='Functions' }
#### [EntityPlayer](../EntityPlayer) GetNearestPlayer ( [Vector](../Vector) Pos)  {: aria-label='Functions' }

___ 
### GetNumEncounteredBosses () {: aria-label='Functions' }
#### int GetNumEncounteredBosses ( )  {: aria-label='Functions' }

___ 
### GetNumPlayers () {: aria-label='Functions' }
#### int GetNumPlayers ( )  {: aria-label='Functions' }

___ 
### GetPlayer () {: aria-label='Functions' }
#### [EntityPlayer](../EntityPlayer) GetPlayer ( int Index)  {: aria-label='Functions' }

___ 
### GetRandomPlayer () {: aria-label='Functions' }
#### [EntityPlayer](../EntityPlayer) GetRandomPlayer ( [Vector](../Vector) Pos, float Radius )  {: aria-label='Functions' }

___ 
### GetRoom () {: aria-label='Functions' }
#### [Room](../RoomConfig_Room) GetRoom ( )  {: aria-label='Functions' }

___ 
### GetScreenShakeCountdown () {: aria-label='Functions' }
####  int GetScreenShakeCountdown ( )  {: aria-label='Functions' }

___ 
### GetSeeds () {: aria-label='Functions' }
#### [Seeds](../Seeds) GetSeeds ( )  {: aria-label='Functions' }

___ 
### GetStagesWithoutDamage () {: aria-label='Functions' }
#### int GetStagesWithoutDamage ( )  {: aria-label='Functions' }

___ 
### GetStagesWithoutHeartsPicked () {: aria-label='Functions' }
#### int GetStagesWithoutHeartsPicked ( )  {: aria-label='Functions' }

___ 
### GetStateFlag () {: aria-label='Functions' }
#### boolean GetStateFlag ( StateFlag StateFlag)  {: aria-label='Functions' }

___ 
### GetTargetDarkness () {: aria-label='Functions' }
#### float GetTargetDarkness ( )  {: aria-label='Functions' }

___ 
### GetTreasureRoomVisitCount () {: aria-label='Functions' }
#### int GetTreasureRoomVisitCount ( )  {: aria-label='Functions' }

___ 
### GetVictoryLap () {: aria-label='Functions' }
#### int GetVictoryLap ( )  {: aria-label='Functions' }

___ 
### HasEncounteredBoss () {: aria-label='Functions' }
#### boolean HasEncounteredBoss ( [EntityType](../enums/EntityType) Boss, int Variant )  {: aria-label='Functions' }

___ 
### HasHallucination () {: aria-label='Functions' }
#### int HasHallucination ( )  {: aria-label='Functions' }

___ 
### IsGreedMode () {: aria-label='Functions' }
#### boolean IsGreedMode ( )  {: aria-label='Functions' }

___ 
### IsPaused () {: aria-label='Functions' }
#### boolean IsPaused ( )  {: aria-label='Functions' }

Returns true, if the game is in a state, where the player is unable to input any thing or the game logic is paused. This includes hiving the pause menu opened, being in room transitions/cutscenes or while displaying a "big book" animation.
___ 
### MoveToRandomRoom () {: aria-label='Functions' }
#### void MoveToRandomRoom ( boolean IAmErrorRoom, int Seed )  {: aria-label='Functions' }

___ 
### NextVictoryLap () {: aria-label='Functions' }
#### void NextVictoryLap ( )  {: aria-label='Functions' }

___ 
### Render () {: aria-label='Functions' }
#### void Render ( )  {: aria-label='Functions' }

___ 
### RerollEnemy () {: aria-label='Functions' }
#### boolean RerollEnemy ( [Entity](../Entity) e)  {: aria-label='Functions' }

___ 
### RerollLevelCollectibles () {: aria-label='Functions' }
#### void RerollLevelCollectibles ( )  {: aria-label='Functions' }

___ 
### RerollLevelPickups () {: aria-label='Functions' }
#### void RerollLevelPickups ( int Seed)  {: aria-label='Functions' }

___ 
### SetLastDevilRoomStage () {: aria-label='Functions' }
#### void SetLastDevilRoomStage ( [LevelStage](../enums/LevelStage) Stage)  {: aria-label='Functions' }

___ 
### SetLastLevelWithDamage () {: aria-label='Functions' }
#### void SetLastLevelWithDamage ( [LevelStage](../enums/LevelStage) Stage)  {: aria-label='Functions' }

___ 
### SetLastLevelWithoutHalfHp () {: aria-label='Functions' }
#### void SetLastLevelWithoutHalfHp ( [LevelStage](../enums/LevelStage) Stage)  {: aria-label='Functions' }

___ 
### SetStateFlag () {: aria-label='Functions' }
#### void SetStateFlag ( StateFlag StateFlag, boolean Val )  {: aria-label='Functions' }

___ 
### ShakeScreen () {: aria-label='Functions' }
#### void ShakeScreen ( int Timeout)  {: aria-label='Functions' }

___ 
### ShowFortune () {: aria-label='Functions' }
#### void ShowFortune ( )  {: aria-label='Functions' }

___ 
### ShowHallucination () {: aria-label='Functions' }
#### void ShowHallucination ( int FrameCount, Backdrop::Backdrop HallucinationBackdrop )  {: aria-label='Functions' }
Plays the Delirium animation (Static noise intersected with past gameplay fotage), which will also change the background of the current room.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code emulated the effect of this function by hijacking the Delirious item effect
```cpp 
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

##### :fontawesome-solid-bug: Bugs {: .subHeader .bugs }
This function does not work and will crash your game on use!
___ 
### ShowRule () {: aria-label='Functions' }
#### void ShowRule ( )  {: aria-label='Functions' }

___ 
### [Spawn](../RoomConfig_Spawn) () {: aria-label='Functions' }
#### [Entity](../Entity) [Spawn](../RoomConfig_Spawn) ( [EntityType](../enums/EntityType) Type, int Variant, [Vector](../Vector) Position, [Vector](../Vector) Velocity, [Entity](../Entity) Spawner, int SubType, int Seed )  {: aria-label='Functions' }

The game has two spawn functions, <a class="el" href="#a3e89d68066acde06705fa43413d3c0fa">Game():Spawn()</a> (this one) and <a class="el" href="namespace_isaac.html#aa0ae6af78258bd135855fee38601ba3f">Isaac.Spawn()</a>. If you need to spawn something with a specific seed, then you use <a class="el" href="#a3e89d68066acde06705fa43413d3c0fa">Game():Spawn()</a>. If you need to spawn something with a randomly generated seed, then use <a class="el" href="namespace_isaac.html#aa0ae6af78258bd135855fee38601ba3f">Isaac.Spawn()</a>. Most of the time, you will probably want to use <a class="el" href="namespace_isaac.html#aa0ae6af78258bd135855fee38601ba3f">Isaac.Spawn()</a>.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code spawns a Leech with specific seed.
```cpp 
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
 WRONG PARSING {: .WRONG_PARSE } 
___ 
### SpawnEntityDesc () {: aria-label='Functions' }
#### [EntityNPC](../EntityNPC) SpawnEntityDesc ( Entity::EntityDesc desc, [Vector](../Vector) Position, [Entity](../Entity) Spawner )  {: aria-label='Functions' }

___ 
### SpawnParticles () {: aria-label='Functions' }
#### void SpawnParticles ( [Vector](../Vector) Pos, EntityEffect::Variant ParticleType, int NumParticles, float Speed, [Color](../Color) Color, float Height )  {: aria-label='Functions' }

___ 
### StartRoomTransition () {: aria-label='Functions' }
#### void StartRoomTransition ( int RoomIndex, [Direction](../enums/Direction) Direction, RoomTransition::Animation Animation )  {: aria-label='Functions' }

##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
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
##### :fontawesome-solid-bug: Bugs {: .subHeader .bugs }
The Direction variable is completely ignored at all times, with the game instead calculating the direction between the two rooms itself for the animation. The two rooms are the current room and the room of the RoomIndex. It has no impact on the doors either.
___ 
### StartStageTransition () {: aria-label='Functions' }
#### void StartStageTransition ( boolean SameStage, StageTransition::Animation Animation )  {: aria-label='Functions' }

Starts a transition animation like it`s playing when entering a trapdoor to switch between stages.
**Stage Transition types:**

* 0: Standard transition. Removes the playermodel before the pixel fadeout. Then plays the Stage Nightmare animation. The player starts in fetal position after the transition.
* 1: Standard transition with pixel fadein/out, nightmare cutscene but the player model doesnt get removed and starts in the normal standing position after the transition.
* &gt;2: Same as 0

___ 
### Update () {: aria-label='Functions' }
#### void Update ( )  {: aria-label='Functions' }

___ 
### UpdateStrangeAttractor () {: aria-label='Functions' }
#### void UpdateStrangeAttractor ( [Vector](../Vector) Position)  {: aria-label='Functions' }

___ 
## Variables
### BlueWombParTime {: aria-label='Variables' }
#### int BlueWombParTime  {: aria-label='Variables' }

___ 
### BossRushParTime {: aria-label='Variables' }
#### int BossRushParTime  {: aria-label='Variables' }
Number of frames of game time. 
___ 
### [Challenge](../enums/Challenge) {: aria-label='Variables' }
#### [Challenge](../enums/Challenge) [Challenge](../enums/Challenge)  {: aria-label='Variables' }

___ 
### [Difficulty](../enums/Difficulty) {: aria-label='Variables' }
####  [Difficulty](../enums/Difficulty) [Difficulty](../enums/Difficulty)  {: aria-label='Variables' }

___ 
### ScreenShakeOffset {: aria-label='Variables' }
####  [Vector](../Vector) ScreenShakeOffset  {: aria-label='Variables' }

___ 
### TimeCounter {: aria-label='Variables' }
#### int TimeCounter  {: aria-label='Variables' }
same as FrameCounter but can be modified, mostly used for timed events (bossrush, daily, ...) and not for timestepping 
___ 
