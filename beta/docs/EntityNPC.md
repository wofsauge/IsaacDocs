# Class "EntityNPC"
## Functions
[ ](#){: .abp .tooltip .badge }
### AnimWalkFrame () {: aria-label='Functions' }
#### void AnimWalkFrame ( string HorizontalAnim, string VerticalAnim, float SpeedThreshold )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### CalcTargetPosition () {: aria-label='Functions' }
#### [Vector](../Vector) CalcTargetPosition ( float DistanceLimit)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### CanBeDamagedFromVelocity () {: aria-label='Functions' }
#### boolean CanBeDamagedFromVelocity ( [Vector](../Vector) Velocity)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### CanReroll () {: aria-label='Functions' }
#### boolean CanReroll ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### FireBossProjectiles () {: aria-label='Functions' }
#### [EntityProjectile](../EntityProjectile) FireBossProjectiles ( int NumProjectiles, [Vector](../Vector) TargetPos, float TrajectoryModifier, [ProjectileParams](../ProjectileParams) Params )  {: .copyable aria-label='Functions' }
fire a number of projectiles, optionally targeting the player direction is randomized, or slightly randomized when targeting the player FallingAccelModifier can be used to make projectiles fall faster to the ground returns a pointer to the projectile spawned last (useful e.g. when NumProjectiles=1) 
___ 
[ ](#){: .abp .tooltip .badge }
### FireProjectiles () {: aria-label='Functions' }
#### void FireProjectiles ( [Vector](../Vector) Pos, [Vector](../Vector) Velocity, ProjectilesMode Mode, [ProjectileParams](../ProjectileParams) Params )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetAliveEnemyCount () {: aria-label='Functions' }
#### int GetAliveEnemyCount ( )  {: .copyable aria-label='Functions' }
Used to redirect close door enemies to any enemies for friendly npcs. 
___ 
[ ](#){: .abp .tooltip .badge }
### GetBossColorIdx () {: aria-label='Functions' }
#### int GetBossColorIdx ( )  {: .copyable aria-label='Functions' }

##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
This will return the boss color idx reduced by 1. To get the actual color as set in bosscolors.xml, add +1 to the result.
___ 
[ ](#){: .abp .tooltip .badge }
### GetChampionColorIdx () {: aria-label='Functions' }
#### int GetChampionColorIdx ( )  {: .copyable aria-label='Functions' }

##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
A list of Champion colors can be found here : ChampionColorIdx 
___ 
[ ](#){: .abp .tooltip .badge }
### GetPlayerTarget () {: aria-label='Functions' }
#### [Entity](../Entity) GetPlayerTarget ( )  {: .copyable aria-label='Functions' }
if there are no modifiers (best friend) this will return the player 
___ 
[ ](#){: .abp .tooltip .badge }
### IsBoss () {: aria-label='Functions' }
#### boolean IsBoss ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsChampion () {: aria-label='Functions' }
#### boolean IsChampion ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### KillUnique () {: aria-label='Functions' }
#### void KillUnique ( )  {: .copyable aria-label='Functions' }
For entities with unique death animation, like Flush! vs poop enemies. 
___ 
[ ](#){: .abp .tooltip .badge }
### MakeChampion () {: aria-label='Functions' }
#### void MakeChampion ( int Seed)  {: .copyable aria-label='Functions' }
Forces a non champion to become a champion, resets hp to max hp. 
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
Hard to use because there are millions of possible seeds to input here.Use Morph() to change the champion Color instead!
___ 
[ ](#){: .abp .tooltip .badge }
### MakeSplat () {: aria-label='Functions' }
#### [EntityEffect](../EntityEffect) MakeSplat ( float Size)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Morph () {: aria-label='Functions' }
#### boolean Morph ( [EntityType](../enums/EntityType) , int Variant, int SubType, int ChampionColorIdx )  {: .copyable aria-label='Functions' }

Morph the current entity into another one. 
<a href="https://bindingofisaacrebirth.gamepedia.com/Monsters#Champions">ChampionColorIdx</a> can be used to turn the entity into a champion. Use `:::cpp -1` to turn it into a regular entity.
A list of Champion colors can be found here : <a href="https://bindingofisaacrebirth.gamepedia.com/Monsters#Champions">ChampionColorIdx</a> 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code turns an entity into a gaper.
```cpp 
entity:ToNPC():Morph(EntityType.ENTITY_GAPER , 0, 0,-1)
```
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### PlaySound () {: aria-label='Functions' }
#### void PlaySound ( [SoundEffect](../enums/SoundEffect) ID, float Volume, int FrameDelay, boolean Loop, float Pitch )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### QueryNPCsGroup () {: aria-label='Functions' }
#### [EntityList](../CppContainer_EntityList) QueryNPCsGroup ( int GroupIdx)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### QueryNPCsSpawnerType () {: aria-label='Functions' }
#### [EntityList](../CppContainer_EntityList) QueryNPCsSpawnerType ( [EntityType](../enums/EntityType) SpawnerType, [EntityType](../enums/EntityType) Type, boolean OnlyEnemies )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### QueryNPCsType () {: aria-label='Functions' }
#### [EntityList](../CppContainer_EntityList) QueryNPCsType ( [EntityType](../enums/EntityType) Type, int Variant )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ResetPathFinderTarget () {: aria-label='Functions' }
#### void ResetPathFinderTarget ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
### ThrowSpider () {: aria-label='Functions' }
#### static ThrowSpider ( [Vector](../Vector) Position, [Entity](../Entity) Spawner, [Vector](../Vector) TargetPos, boolean Big, float YOffset )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
## Variables
### CanShutDoors {: aria-label='Variables' }
#### boolean CanShutDoors  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### ChildNPC {: aria-label='Variables' }
####  [EntityNPC](../EntityNPC) ChildNPC  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### [EntityRef](../EntityRef) {: aria-label='Variables' }
#### [Entity](../Entity) [EntityRef](../EntityRef)  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### GroupIdx {: aria-label='Variables' }
#### int GroupIdx  {: .copyable aria-label='Variables' }
Used to identify multichunks groups. 
___ 
[ ](#){: .abp .tooltip .badge }
### I1 {: aria-label='Variables' }
#### int I1  {: .copyable aria-label='Variables' }
general usage ints for ai_ 
___ 
[ ](#){: .abp .tooltip .badge }
### I2 {: aria-label='Variables' }
#### int I2  {: .copyable aria-label='Variables' }
same as m_I1 
___ 
[ ](#){: .abp .tooltip .badge }
### ParentNPC {: aria-label='Variables' }
####  [EntityNPC](../EntityNPC) ParentNPC  {: .copyable aria-label='Variables' }
parent entity, for multi-entity NPCs like Larry Jr. 
___ 
[ ](#){: .abp .tooltip .badge }
### Pathfinder {: aria-label='Variables' }
#### [PathFinder](../PathFinder) Pathfinder  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### ProjectileCooldown {: aria-label='Variables' }
#### int ProjectileCooldown  {: .copyable aria-label='Variables' }
projectiles can fire again when it reaches 0 
___ 
[ ](#){: .abp .tooltip .badge }
### ProjectileDelay {: aria-label='Variables' }
#### int ProjectileDelay  {: .copyable aria-label='Variables' }
&gt;0: projectile will be fired in n frames 
___ 
[ ](#){: .abp .tooltip .badge }
### Scale {: aria-label='Variables' }
#### float Scale  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### State {: aria-label='Variables' }
#### int State  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### StateFrame {: aria-label='Variables' }
#### int StateFrame  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### V1 {: aria-label='Variables' }
#### [Vector](../Vector) V1  {: .copyable aria-label='Variables' }
general usage for ai_* functions, initialized to (0,0) 
___ 
[ ](#){: .abp .tooltip .badge }
### V2 {: aria-label='Variables' }
#### [Vector](../Vector) V2  {: .copyable aria-label='Variables' }
like m_V1, in case we need two of those 
___ 
