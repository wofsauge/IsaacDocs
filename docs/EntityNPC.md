# Class "EntityNPC"
### Inherits from Class: {: .inheritance }
[Entity](Entity.md)
## Functions
### AnimWalkFrame () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AnimWalkFrame ( string HorizontalAnim, string VerticalAnim, float SpeedThreshold ) {: .copyable aria-label='Functions' }

___ 
### CalcTargetPosition () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) CalcTargetPosition ( float DistanceLimit ) {: .copyable aria-label='Functions' }

___ 
### CanBeDamagedFromVelocity () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanBeDamagedFromVelocity ( [Vector](../Vector) Velocity ) {: .copyable aria-label='Functions' }

___ 
### CanReroll () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanReroll ( ) {: .copyable aria-label='Functions' }

___ 
### FireBossProjectiles () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityProjectile](../EntityProjectile) FireBossProjectiles ( int NumProjectiles, [Vector](../Vector) TargetPos, float TrajectoryModifier, [ProjectileParams](../ProjectileParams) Params ) {: .copyable aria-label='Functions' }
fire a number of projectiles, optionally targeting the player direction is randomized, or slightly randomized when targeting the player FallingAccelModifier can be used to make projectiles fall faster to the ground returns a pointer to the projectile spawned last (useful e.g. when NumProjectiles=1) 
___ 
### FireProjectiles () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void FireProjectiles ( [Vector](../Vector) Pos, [Vector](../Vector) Velocity, ProjectilesMode Mode, [ProjectileParams](../ProjectileParams) Params ) {: .copyable aria-label='Functions' }

___ 
### GetAliveEnemyCount () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetAliveEnemyCount ( ) {: .copyable aria-label='Functions' }
Used to redirect close door enemies to any enemies for friendly npcs. 
___ 
### GetBossColorIdx () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetBossColorIdx ( ) {: .copyable aria-label='Functions' }


???- note "Notes"
    This will return the boss color idx reduced by 1. To get the actual color as set in bosscolors.xml, add +1 to the result.
___ 
### GetChampionColorIdx () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetChampionColorIdx ( ) {: .copyable aria-label='Functions' }


???- note "Notes"
    A list of Champion colors can be found here : ChampionColorIdx 
___ 
### GetPlayerTarget () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) GetPlayerTarget ( ) {: .copyable aria-label='Functions' }
if there are no modifiers (best friend) this will return the player 
___ 
### IsBoss () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsBoss ( ) {: .copyable aria-label='Functions' }

___ 
### IsChampion () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsChampion ( ) {: .copyable aria-label='Functions' }

___ 
### KillUnique () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void KillUnique ( ) {: .copyable aria-label='Functions' }
For entities with unique death animation, like Flush! vs poop enemies. 
___ 
### MakeChampion () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void MakeChampion ( int Seed ) {: .copyable aria-label='Functions' }
Forces a non champion to become a champion, resets hp to max hp. 

???- note "Notes"
    Hard to use because there are millions of possible seeds to input here.Use Morph() to change the champion Color instead!
___ 
### MakeSplat () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityEffect](../EntityEffect) MakeSplat ( float Size ) {: .copyable aria-label='Functions' }

___ 
### Morph () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean Morph ( [EntityType](../enums/EntityType) , int Variant, int SubType, int ChampionColorIdx ) {: .copyable aria-label='Functions' }

Morph the current entity into another one. [ChampionColorIdx](https://bindingofisaacrebirth.gamepedia.com/Monsters#Champions) can be used to turn the entity into a champion. Use `:::lua -1` to turn it into a regular entity.
A list of Champion colors can be found here : [ChampionColorIdx](https://bindingofisaacrebirth.gamepedia.com/Monsters#Champions)

???- example "Example Code"
    This code turns an entity into a gaper.
    ```lua 
    entity:ToNPC():Morph(EntityType.ENTITY_GAPER , 0, 0,-1)
    ```
___ 
### PlaySound () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void PlaySound ( [SoundEffect](../enums/SoundEffect) ID, float Volume, int FrameDelay, boolean Loop, float Pitch ) {: .copyable aria-label='Functions' }

___ 
### QueryNPCsGroup () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityList](../CppContainer_EntityList) QueryNPCsGroup ( int GroupIdx ) {: .copyable aria-label='Functions' }

___ 
### QueryNPCsSpawnerType () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityList](../CppContainer_EntityList) QueryNPCsSpawnerType ( [EntityType](../enums/EntityType) SpawnerType, [EntityType](../enums/EntityType) Type, boolean OnlyEnemies ) {: .copyable aria-label='Functions' }

___ 
### QueryNPCsType () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityList](../CppContainer_EntityList) QueryNPCsType ( [EntityType](../enums/EntityType) Type, int Variant ) {: .copyable aria-label='Functions' }

___ 
### ResetPathFinderTarget () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ResetPathFinderTarget ( ) {: .copyable aria-label='Functions' }

___ 
### ThrowSpider () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static ThrowSpider ( [Vector](../Vector) Position, [Entity](../Entity) Spawner, [Vector](../Vector) TargetPos, boolean Big, float YOffset ) {: .copyable aria-label='Functions' }

___ 
## Variables
### CanShutDoors {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanShutDoors  {: .copyable aria-label='Variables' }

___ 
### ChildNPC {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [EntityNPC](../EntityNPC) ChildNPC  {: .copyable aria-label='Variables' }

___ 
### EntityRef {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) EntityRef {: .copyable aria-label='Variables' }

___ 
### GroupIdx {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int GroupIdx  {: .copyable aria-label='Variables' }
Used to identify multichunks groups. 
___ 
### I1 {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int I1  {: .copyable aria-label='Variables' }
general usage ints for ai_ 
___ 
### I2 {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int I2  {: .copyable aria-label='Variables' }
same as m_I1 
___ 
### ParentNPC {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [EntityNPC](../EntityNPC) ParentNPC  {: .copyable aria-label='Variables' }
parent entity, for multi-entity NPCs like Larry Jr. 
___ 
### Pathfinder {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [PathFinder](../PathFinder) Pathfinder  {: .copyable aria-label='Variables' }

___ 
### ProjectileCooldown {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int ProjectileCooldown  {: .copyable aria-label='Variables' }
projectiles can fire again when it reaches 0 
___ 
### ProjectileDelay {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int ProjectileDelay  {: .copyable aria-label='Variables' }
&gt;0: projectile will be fired in n frames 
___ 
### Scale {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Scale  {: .copyable aria-label='Variables' }

___ 
### State {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int State  {: .copyable aria-label='Variables' }

___ 
### StateFrame {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int StateFrame  {: .copyable aria-label='Variables' }

___ 
### V1 {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) V1  {: .copyable aria-label='Variables' }
general usage for ai_* functions, initialized to (0,0) 
___ 
### V2 {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) V2  {: .copyable aria-label='Variables' }
like m_V1, in case we need two of those 
___ 
