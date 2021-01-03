# Class "Game"
___ 
## void AddDevilRoomDeal ()

___ 
## void AddEncounteredBoss (EntityType Boss, integer Variant )

___ 
## void AddPixelation (integer Duration)

Triggers the effect of the "retro vision" pill.
___ 
## void AddStageWithoutDamage ()

Increases the ingame counter, that keeps track of the stages you cleared without taking damage. (useful for Devil deal manipulations)
___ 
## void AddStageWithoutHeartsPicked ()

Increases the ingame counter, that keeps track of stages you cleared without picking up hearts.
___ 
## void AddTreasureRoomsVisited ()

___ 
## void BombDamage (Vector Position, float Damage, float Radius, boolean LineCheck, Entity Source, integer TearFlags, integer DamageFlags, boolean DamageSource )

___ 
## void BombExplosionEffects (Vector Position, float Damage, integer TearFlags, Color Color, Entity Source, float RadiusMult, boolean LineCheck, boolean DamageSource )
The complete bomb explosion package: Do damage, spawn boomgraphics, and apply tearflag-based effects. 
___ 
## void BombTearflagEffects (Vector Position, float Radius, integer TearFlags, Entity Source )
Does bomb-exclusive special effects. 
___ 
## void ButterBeanFart (Vector Position, float Radius, Entity Source, boolean ShowEffect )

___ 
## void ChangeRoom (integer RoomIndex)

___ 
## void CharmFart (Vector Position, float Radius, Entity Source )

___ 
## void ClearDonationModAngel ()

___ 
## void ClearDonationModGreed ()

___ 
## void ClearStagesWithoutDamage ()

Sets the counter for stages cleared without damage to 0.
___ 
## void ClearStagesWithoutHeartsPicked ()

Sets the counter for stages cleared without picking up hearts to 0.
___ 
## void Darken (float Darkness, integer Timeout )

___ 
## void DonateAngel (integer Donate)

___ 
## void DonateGreed (integer Donate)

___ 
## void End (Ending Ending)
remove entity from the update list (render only) void EnableEntity(Entity* e); add entity back to the update list (update + render) void DisableEntity(Entity* e); 
___ 
## void Fadein (float Speed)

___ 
## void Fadeout (float Speed, FadeoutTarget Target )

___ 
## void Fart (Vector Position, float Radius, Entity Source, float FartScale, integer FartSubType )

___ 
## void FinishChallenge ()

___ 
## Ambush GetAmbush ()

___ 
## float GetDarknessModifier ()

___ 
## integer GetDevilRoomDeals ()

___ 
## integer GetDonationModAngel ()

Get the value that indicates the angel-counter of a shop-donation maschine. This Stat increases everytime you donate to a shop. A higher number grants a few advantages.
___ 
## integer GetDonationModGreed ()

___ 
## Font GetFont ()

___ 
## integer GetFrameCount ()

Returns the number of frames the gameplay is actively running. Pauses are therefore not included!
1 second equals 30 frames.
This function therefore works drastically different than <a href="namespace_isaac.html#a880a22350f53acea378bf7c721bd5bd5"><code>Isaac.GetFrameCount()</code></a>
#### Example Code
This code returns hours, minutes, seconds, and milliseconds of the game running actively:
```lua
local curTime = Game():GetFrameCount()
local msecs= curTime%30 * (10/3) -- turns the millisecond value range from [0 to 30] to [0 to 100]
local secs= math.floor(curTime/30)%60
local mins= math.floor(curTime/30/60)%60
local hours= math.floor(curTime/30/60/60)%60

```
___ 
## integer GetGreedBossWaveNum ()

___ 
## integer GetGreedWavesNum ()

___ 
## History GetItemHistory ()

___ 
## ItemOverlay GetItemOverlay ()

___ 
## ItemPool GetItemPool ()

___ 
## void LevelStage (UserData) GetLastDevilRoomStage ()

#### Notes
Since it returns UserData, this function is unusable and therefore broken.
___ 
## LevelStage GetLastLevelWithDamage ()

___ 
## LevelStage GetLastLevelWithoutHalfHp ()

___ 
## Level GetLevel ()

___ 
## EntityPlayer GetNearestPlayer (Vector Pos)

___ 
## integer GetNumEncounteredBosses ()

___ 
## integer GetNumPlayers ()

___ 
## EntityPlayer GetPlayer (integer Index)

___ 
## EntityPlayer GetRandomPlayer (Vector Pos, float Radius )

___ 
## Room GetRoom ()

___ 
## const integer GetScreenShakeCountdown ()

___ 
## Seeds GetSeeds ()

___ 
## integer GetStagesWithoutDamage ()

___ 
## integer GetStagesWithoutHeartsPicked ()

___ 
## boolean GetStateFlag (StateFlag StateFlag)

___ 
## float GetTargetDarkness ()

___ 
## integer GetTreasureRoomVisitCount ()

___ 
## integer GetVictoryLap ()

___ 
## boolean HasEncounteredBoss (EntityType Boss, integer Variant )

___ 
## integer HasHallucination ()

___ 
## boolean IsGreedMode ()

___ 
## boolean IsPaused ()

Returns true, if the game is in a state, where the player is unable to input any thing or the game logic is paused. This includes hiving the pause menu opened, being in room transitions/cutscenes or while displaying a "big book" animation.
___ 
## void MoveToRandomRoom (boolean IAmErrorRoom, integer Seed )

___ 
## void NextVictoryLap ()

___ 
## void Render ()

___ 
## boolean RerollEnemy (Entity e)

___ 
## void RerollLevelCollectibles ()

___ 
## void RerollLevelPickups (integer Seed)

___ 
## void SetLastDevilRoomStage (LevelStage Stage)

___ 
## void SetLastLevelWithDamage (LevelStage Stage)

___ 
## void SetLastLevelWithoutHalfHp (LevelStage Stage)

___ 
## void SetStateFlag (StateFlag StateFlag, boolean Val )

___ 
## void ShakeScreen (integer Timeout)

___ 
## void ShowFortune ()

___ 
## void ShowHallucination (integer FrameCount, Backdrop::Backdrop HallucinationBackdrop )
Plays the Delirium animation (Static noise intersected with past gameplay fotage), which will also change the background of the current room.
#### Example Code
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
#### Bugs
This function does not work and will crash your game on use!
___ 
## void ShowRule ()

___ 
## Entity Spawn (EntityType Type, integer Variant, Vector Position, Vector Velocity, Entity Spawner, integer SubType, integer Seed )

The game has two spawn functions, <a class="el" href="#a3e89d68066acde06705fa43413d3c0fa">Game():Spawn()</a> (this one) and <a class="el" href="namespace_isaac.html#aa0ae6af78258bd135855fee38601ba3f">Isaac.Spawn()</a>. If you need to spawn something with a specific seed, then you use <a class="el" href="#a3e89d68066acde06705fa43413d3c0fa">Game():Spawn()</a>. If you need to spawn something with a randomly generated seed, then use <a class="el" href="namespace_isaac.html#aa0ae6af78258bd135855fee38601ba3f">Isaac.Spawn()</a>. Most of the time, you will probably want to use <a class="el" href="namespace_isaac.html#aa0ae6af78258bd135855fee38601ba3f">Isaac.Spawn()</a>.
#### Example Code
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
## EntityNPC SpawnEntityDesc (Entity::EntityDesc desc, Vector Position, Entity Spawner )

___ 
## void SpawnParticles (Vector Pos, EntityEffect::Variant ParticleType, integer NumParticles, float Speed, Color Color, float Height )

___ 
## void StartRoomTransition (integer RoomIndex, Direction Direction, RoomTransition::Animation Animation )

#### Notes
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
#### Bugs
The Direction variable is completely ignored at all times, with the game instead calculating the direction between the two rooms itself for the animation. The two rooms are the current room and the room of the RoomIndex. It has no impact on the doors either.
___ 
## void StartStageTransition (boolean SameStage, StageTransition::Animation Animation )

Starts a transition animation like it`s playing when entering a trapdoor to switch between stages.
**Stage Transition types:**
<ul>
<li>0: Standard transition. Removes the playermodel before the pixel fadeout. Then plays the Stage Nightmare animation. The player starts in fetal position after the transition.</li>
<li>1: Standard transition with pixel fadein/out, nightmare cutscene but the player model doesnt get removed and starts in the normal standing position after the transition.</li>
<li>&gt;2: Same as 0</li>
</ul>
___ 
## void Update ()

___ 
## void UpdateStrangeAttractor (Vector Position)

___ 
## integer BlueWombParTime

___ 
## integer BossRushParTime
Number of frames of game time. 
___ 
## Challenge Challenge

___ 
## const Difficulty Difficulty

___ 
## const Vector ScreenShakeOffset

___ 
## integer TimeCounter
same as FrameCounter but can be modified, mostly used for timed events (bossrush, daily, ...) and not for timestepping 
___ 
