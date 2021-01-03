# Class "EntityNPC"
___ 
## void AnimWalkFrame (string HorizontalAnim, string VerticalAnim, float SpeedThreshold )

___ 
## Vector CalcTargetPosition (float DistanceLimit)

___ 
## boolean CanBeDamagedFromVelocity (Vector Velocity)

___ 
## boolean CanReroll ()

___ 
## EntityProjectile FireBossProjectiles (integer NumProjectiles, Vector TargetPos, float TrajectoryModifier, ProjectileParams Params )
fire a number of projectiles, optionally targeting the player direction is randomized, or slightly randomized when targeting the player FallingAccelModifier can be used to make projectiles fall faster to the ground returns a pointer to the projectile spawned last (useful e.g. when NumProjectiles=1) 
___ 
## void FireProjectiles (Vector Pos, Vector Velocity, ProjectilesMode Mode, ProjectileParams Params )

___ 
## integer GetAliveEnemyCount ()
Used to redirect close door enemies to any enemies for friendly npcs. 
___ 
## integer GetBossColorIdx ()

#### Notes
This will return the boss color idx reduced by 1. To get the actual color as set in bosscolors.xml, add +1 to the result.
___ 
## integer GetChampionColorIdx ()

#### Notes
A list of Champion colors can be found here : ChampionColorIdx 
___ 
## Entity GetPlayerTarget ()
if there are no modifiers (best friend) this will return the player 
___ 
## boolean IsBoss ()

___ 
## boolean IsChampion ()

___ 
## void KillUnique ()
For entities with unique death animation, like Flush! vs poop enemies. 
___ 
## void MakeChampion (integer Seed)
Forces a non champion to become a champion, resets hp to max hp. 
#### Notes
Hard to use because there are millions of possible seeds to input here.Use Morph() to change the champion Color instead!
___ 
## EntityEffect MakeSplat (float Size)

___ 
## boolean Morph (EntityType , integer Variant, integer SubType, integer ChampionColorIdx )

Morph the current entity into another one. 
<a href="https://bindingofisaacrebirth.gamepedia.com/Monsters#Champions">ChampionColorIdx</a> can be used to turn the entity into a champion. Use  to turn it into a regular entity.
A list of Champion colors can be found here : <a href="https://bindingofisaacrebirth.gamepedia.com/Monsters#Champions">ChampionColorIdx</a> 
#### Example Code
This code turns an entity into a gaper.
entity:ToNPC():Morph(EntityType.ENTITY_GAPER , 0, 0,-1)
```lua
-1
```
___ 
## void PlaySound (SoundEffect ID, float Volume, integer FrameDelay, boolean Loop, float Pitch )

___ 
## EntityList QueryNPCsGroup (integer GroupIdx)

___ 
## EntityList QueryNPCsSpawnerType (EntityType SpawnerType, EntityType Type, boolean OnlyEnemies )

___ 
## EntityList QueryNPCsType (EntityType Type, integer Variant )

___ 
## void ResetPathFinderTarget ()

___ 
## static ThrowSpider (Vector Position, Entity Spawner, Vector TargetPos, boolean Big, float YOffset )

___ 
## boolean CanShutDoors

___ 
## const EntityNPC ChildNPC

___ 
## Entity EntityRef

___ 
## integer GroupIdx
Used to identify multichunks groups. 
___ 
## integer I1
general usage ints for ai_ 
___ 
## integer I2
same as m_I1 
___ 
## const EntityNPC ParentNPC
parent entity, for multi-entity NPCs like Larry Jr. 
___ 
## PathFinder Pathfinder

___ 
## integer ProjectileCooldown
projectiles can fire again when it reaches 0 
___ 
## integer ProjectileDelay
&gt;0: projectile will be fired in n frames 
___ 
## float Scale

___ 
## integer State

___ 
## integer StateFrame

___ 
## Vector V1
general usage for ai_* functions, initialized to (0,0) 
___ 
## Vector V2
like m_V1, in case we need two of those 
___ 
