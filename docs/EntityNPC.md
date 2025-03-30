---
tags:
  - Class
---
# Class "EntityNPC"

???+ info
    You can get this class by using the following function:

    * [Entity.ToNPC()](Entity.md#tonpc)
    * [Game.SpawnEntityDesc()](Game.md#spawnentitydesc)

    ???+ example "Example Code"
        `local entity = Isaac.GetRoomEntities()[1]:ToNPC()`

## Class Diagram
--8<-- "docs/snippets/EntityClassDiagram.md"
## Functions
### Anim·Walk·Frame () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void AnimWalkFrame ( string HorizontalAnim, string VerticalAnim, float SpeedThreshold ) {: .copyable aria-label='Functions' }

___
### Calc·Target·Position () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) CalcTargetPosition ( float DistanceLimit ) {: .copyable aria-label='Functions' }

___
### Can·Be·Damaged·From·Velocity () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean CanBeDamagedFromVelocity ( [Vector](Vector.md) Velocity ) {: .copyable aria-label='Functions' }

___
### Can·Reroll () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean CanReroll ( ) {: .copyable aria-label='Functions' }

___
### Fire·Boss·Projectiles () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [EntityProjectile](EntityProjectile.md) FireBossProjectiles ( int NumProjectiles, [Vector](Vector.md) TargetPos, float TrajectoryModifier, [ProjectileParams](ProjectileParams.md) Params ) {: .copyable aria-label='Functions' }
fire a number of projectiles, optionally targeting the player direction is randomized, or slightly randomized when targeting the player FallingAccelModifier can be used to make projectiles fall faster to the ground returns a pointer to the projectile spawned last (useful e.g. when NumProjectiles=1)
___
### Fire·Projectiles () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void FireProjectiles ( [Vector](Vector.md) Pos, [Vector](Vector.md) Velocity, ProjectilesMode Mode, [ProjectileParams](ProjectileParams.md) Params ) {: .copyable aria-label='Functions' }

???- info "ProjectilesMode"
    * 0 : single projectile
    * 1 : two projectiles (uses params.Spread)
    * 2 : three projectiles (uses params.Spread)
    * 3 : three projectiles (uses params.Spread, more spread out?)
    * 4 : four projectiles (uses params.Spread)
    * 5 : five projectiles (uses params.Spread)
    * 6 : four projectiles in a + pattern (uses velocity.x as speed)
    * 7 : four projectiles in a x pattern (uses velocity.x as speed)
    * 8 : eight projectiles in a star pattern (uses velocity.x as speed)
    * 9 : N projectiles in a circle (velocity.x = speed, velocity.y = N, params.FireDirectionLimit and params.DotProductLimit to fire in an arc only)
___
### Get·Alive·Enemy·Count () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetAliveEnemyCount ( ) {: .copyable aria-label='Functions' }
Used to redirect close door enemies to any enemies for friendly npcs.
___
### Get·Boss·Color·Idx () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetBossColorIdx ( ) {: .copyable aria-label='Functions' }


???- note "Notes"
    This will return the boss color idx reduced by 1. To get the actual color as set in bosscolors.xml, add +1 to the result.
___
### Get·Champion·Color·Idx () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [ChampionColorIdx](enums/ChampionColor.md) GetChampionColorIdx ( ) {: .copyable aria-label='Functions' }

Returns the NPC's champion color index. Returns -1 if the NPC is not a champion.
___
### Get·Player·Target () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Entity](Entity.md) GetPlayerTarget ( ) {: .copyable aria-label='Functions' }
if there are no modifiers (best friend) this will return the player
___
### Is·Boss () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean IsBoss ( ) {: .copyable aria-label='Functions' }

___
### Is·Champion () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean IsChampion ( ) {: .copyable aria-label='Functions' }

___
### Kill·Unique () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void KillUnique ( ) {: .copyable aria-label='Functions' }
For entities with unique death animation, like Flush! vs poop enemies.
___
### Make·Champion () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void MakeChampion ( int Seed, ChampionColor ChampionColorIdx = -1, boolean Init = false ) {: .copyable aria-label='Functions' }
Forces a non champion to become a champion, resets hp to max hp.

**ChampionColorIdx**: The type of champion to turn this enemy into (-1 results in a random champion type)

**Init**: Set to true when called while initializing the enemy, false otherwise
___
### Make·Splat () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [EntityEffect](EntityEffect.md) MakeSplat ( float Size ) {: .copyable aria-label='Functions' }

___
### Morph () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean Morph ( [EntityType](enums/EntityType.md) type, int Variant, int SubType, int ChampionColorIdx ) {: .copyable aria-label='Functions' }

Morph the current entity into another one. [ChampionColorIdx](https://bindingofisaacrebirth.gamepedia.com/Monsters#Champions) can be used to turn the entity into a champion. Use `:::lua -1` in order to not add a champion color.
A list of Champion colors can be found here : [ChampionColorIdx](https://bindingofisaacrebirth.gamepedia.com/Monsters#Champions)

???+ bug
    This function can not turn a champion NPC into a regular NPC! for that, use the following code:
    ```lua
    local previousNPC = entity:ToNPC()
    -- spawn the same entity at the same location as the old one
    Isaac.Spawn(previousNPC.Type, previousNPC.Variant, previousNPC.SubType, previousNPC.Position, previousNPC.Velocity, previousNPC.Parent)
    -- remove old entity
    previousNPC:Remove()
    ```

???- example "Example Code"
    This code turns an entity into a gaper.
    ```lua
    entity:ToNPC():Morph(EntityType.ENTITY_GAPER, 0, 0, -1)
    ```
___
### Play·Sound () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void PlaySound ( [SoundEffect](enums/SoundEffect.md) ID, float Volume, int FrameDelay, boolean Loop, float Pitch ) {: .copyable aria-label='Functions' }

___
### Query·NPCs·Group () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [EntityList](CppContainer_EntityList.md) QueryNPCsGroup ( int GroupIdx ) {: .copyable aria-label='Functions' }

___
### Query·NPCs·Spawner·Type () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [EntityList](CppContainer_EntityList.md) QueryNPCsSpawnerType ( [EntityType](enums/EntityType.md) SpawnerType, [EntityType](enums/EntityType.md) Type, boolean OnlyEnemies ) {: .copyable aria-label='Functions' }

___
### Query·NPCs·Type () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [EntityList](CppContainer_EntityList.md) QueryNPCsType ( [EntityType](enums/EntityType.md) Type, int Variant ) {: .copyable aria-label='Functions' }

___
### Reset·Path·Finder·Target () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ResetPathFinderTarget ( ) {: .copyable aria-label='Functions' }

___
### Throw·Spider () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .alldlc .tooltip .badge }
#### static const [EntityNPC](EntityNPC.md) ThrowSpider ( [Vector](Vector.md) Position, [Entity](Entity.md) Spawner, [Vector](Vector.md) TargetPos, boolean Big, float YOffset ) {: .copyable aria-label='Functions' }

___
## Variables
### Can·Shut·Doors {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean CanShutDoors  {: .copyable aria-label='Variables' }

___
### Child·NPC {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .alldlc .tooltip .badge }
#### const [EntityNPC](EntityNPC.md) ChildNPC  {: .copyable aria-label='Variables' data-altreturn='nil' }

___
### Entity·Ref {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### [Entity](Entity.md) EntityRef {: .copyable aria-label='Variables' }

___
### Group·Idx {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int GroupIdx  {: .copyable aria-label='Variables' }
Used to identify multichunks groups.
___
### I1 {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int I1  {: .copyable aria-label='Variables' }
General usage int for AI specific actions. The effect and usage is manually defined for each entity. It can also not be used at all for some.

**Example**: The Frail sets I2 to 1 when entering the second phase.
___
### I2 {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int I2  {: .copyable aria-label='Variables' }
General usage int for AI specific actions. The effect and usage is manually defined for each entity. It can also not be used at all for some.

**Example**: The Frail sets I2 to 1 when entering the second phase.
___
### Parent·NPC {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .alldlc .tooltip .badge }
#### const [EntityNPC](EntityNPC.md) ParentNPC  {: .copyable aria-label='Variables' data-altreturn='nil' }
parent entity, for multi-entity NPCs like Larry Jr.
___
### Pathfinder {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### [PathFinder](PathFinder.md) Pathfinder  {: .copyable aria-label='Variables' }

___
### Projectile·Cooldown {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int ProjectileCooldown  {: .copyable aria-label='Variables' }
projectiles can fire again when it reaches 0
___
### Projectile·Delay {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int ProjectileDelay  {: .copyable aria-label='Variables' }
&gt;0: projectile will be fired in n frames
___
### Scale {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float Scale  {: .copyable aria-label='Variables' }

___
### State {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### [NpcState](enums/NpcState.md) State  {: .copyable aria-label='Variables' }

___
### State·Frame {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int StateFrame  {: .copyable aria-label='Variables' }

___
### V1 {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) V1  {: .copyable aria-label='Variables' }
General usage Vector for AI specific actions. Initialized to be Vector(0,0). The effect and usage is manually defined for each entity. It can also not be used at all for some.
___
### V2 {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) V2  {: .copyable aria-label='Variables' }
General usage Vector for AI specific actions. Initialized to be Vector(0,0). The effect and usage is manually defined for each entity. It can also not be used at all for some.
___
