# Class "EntityNPC"
## Functions
### AnimWalkFrame () {: aria-label='Functions' }
#### void AnimWalkFrame ( string HorizontalAnim, string VerticalAnim, float SpeedThreshold )  {: aria-label='Functions' }

___ 
### CalcTargetPosition () {: aria-label='Functions' }
#### [Vector](../Vector) CalcTargetPosition ( float DistanceLimit)  {: aria-label='Functions' }

___ 
### CanBeDamagedFromVelocity () {: aria-label='Functions' }
#### boolean CanBeDamagedFromVelocity ( [Vector](../Vector) Velocity)  {: aria-label='Functions' }

___ 
### CanReroll () {: aria-label='Functions' }
#### boolean CanReroll ( )  {: aria-label='Functions' }

___ 
### FireBossProjectiles () {: aria-label='Functions' }
#### [EntityProjectile](../EntityProjectile) FireBossProjectiles ( int NumProjectiles, [Vector](../Vector) TargetPos, float TrajectoryModifier, [ProjectileParams](../ProjectileParams) Params )  {: aria-label='Functions' }
fire a number of projectiles, optionally targeting the player direction is randomized, or slightly randomized when targeting the player FallingAccelModifier can be used to make projectiles fall faster to the ground returns a pointer to the projectile spawned last (useful e.g. when NumProjectiles=1) 
___ 
### FireProjectiles () {: aria-label='Functions' }
#### void FireProjectiles ( [Vector](../Vector) Pos, [Vector](../Vector) Velocity, ProjectilesMode Mode, [ProjectileParams](../ProjectileParams) Params )  {: aria-label='Functions' }

___ 
### GetAliveEnemyCount () {: aria-label='Functions' }
#### int GetAliveEnemyCount ( )  {: aria-label='Functions' }
Used to redirect close door enemies to any enemies for friendly npcs. 
___ 
### GetBossColorIdx () {: aria-label='Functions' }
#### int GetBossColorIdx ( )  {: aria-label='Functions' }

##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
This will return the boss color idx reduced by 1. To get the actual color as set in bosscolors.xml, add +1 to the result.
___ 
### GetChampionColorIdx () {: aria-label='Functions' }
#### int GetChampionColorIdx ( )  {: aria-label='Functions' }

##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
A list of Champion colors can be found here : ChampionColorIdx 
___ 
### GetPlayerTarget () {: aria-label='Functions' }
#### [Entity](../Entity) GetPlayerTarget ( )  {: aria-label='Functions' }
if there are no modifiers (best friend) this will return the player 
___ 
### IsBoss () {: aria-label='Functions' }
#### boolean IsBoss ( )  {: aria-label='Functions' }

___ 
### IsChampion () {: aria-label='Functions' }
#### boolean IsChampion ( )  {: aria-label='Functions' }

___ 
### KillUnique () {: aria-label='Functions' }
#### void KillUnique ( )  {: aria-label='Functions' }
For entities with unique death animation, like Flush! vs poop enemies. 
___ 
### MakeChampion () {: aria-label='Functions' }
#### void MakeChampion ( int Seed)  {: aria-label='Functions' }
Forces a non champion to become a champion, resets hp to max hp. 
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
Hard to use because there are millions of possible seeds to input here.Use Morph() to change the champion Color instead!
___ 
### MakeSplat () {: aria-label='Functions' }
#### [EntityEffect](../EntityEffect) MakeSplat ( float Size)  {: aria-label='Functions' }

___ 
### Morph () {: aria-label='Functions' }
#### boolean Morph ( [EntityType](../enums/EntityType) , int Variant, int SubType, int ChampionColorIdx )  {: aria-label='Functions' }

Morph the current entity into another one. 
<a href="https://bindingofisaacrebirth.gamepedia.com/Monsters#Champions">ChampionColorIdx</a> can be used to turn the entity into a champion. Use `:::cpp -1` to turn it into a regular entity.
A list of Champion colors can be found here : <a href="https://bindingofisaacrebirth.gamepedia.com/Monsters#Champions">ChampionColorIdx</a> 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code turns an entity into a gaper.
```cpp 
entity:ToNPC():Morph(EntityType.ENTITY_GAPER , 0, 0,-1)
```
 WRONG PARSING {: .WRONG_PARSE } 
___ 
### PlaySound () {: aria-label='Functions' }
#### void PlaySound ( [SoundEffect](../enums/SoundEffect) ID, float Volume, int FrameDelay, boolean Loop, float Pitch )  {: aria-label='Functions' }

___ 
### QueryNPCsGroup () {: aria-label='Functions' }
#### [EntityList](../CppContainer_EntityList) QueryNPCsGroup ( int GroupIdx)  {: aria-label='Functions' }

___ 
### QueryNPCsSpawnerType () {: aria-label='Functions' }
#### [EntityList](../CppContainer_EntityList) QueryNPCsSpawnerType ( [EntityType](../enums/EntityType) SpawnerType, [EntityType](../enums/EntityType) Type, boolean OnlyEnemies )  {: aria-label='Functions' }

___ 
### QueryNPCsType () {: aria-label='Functions' }
#### [EntityList](../CppContainer_EntityList) QueryNPCsType ( [EntityType](../enums/EntityType) Type, int Variant )  {: aria-label='Functions' }

___ 
### ResetPathFinderTarget () {: aria-label='Functions' }
#### void ResetPathFinderTarget ( )  {: aria-label='Functions' }

___ 
### ThrowSpider () {: aria-label='Functions' }
#### static ThrowSpider ( [Vector](../Vector) Position, [Entity](../Entity) Spawner, [Vector](../Vector) TargetPos, boolean Big, float YOffset )  {: aria-label='Functions' }

___ 
## Variables
### CanShutDoors {: aria-label='Variables' }
#### boolean CanShutDoors  {: aria-label='Variables' }

___ 
### ChildNPC {: aria-label='Variables' }
####  [EntityNPC](../EntityNPC) ChildNPC  {: aria-label='Variables' }

___ 
### [EntityRef](../EntityRef) {: aria-label='Variables' }
#### [Entity](../Entity) [EntityRef](../EntityRef)  {: aria-label='Variables' }

___ 
### GroupIdx {: aria-label='Variables' }
#### int GroupIdx  {: aria-label='Variables' }
Used to identify multichunks groups. 
___ 
### I1 {: aria-label='Variables' }
#### int I1  {: aria-label='Variables' }
general usage ints for ai_ 
___ 
### I2 {: aria-label='Variables' }
#### int I2  {: aria-label='Variables' }
same as m_I1 
___ 
### ParentNPC {: aria-label='Variables' }
####  [EntityNPC](../EntityNPC) ParentNPC  {: aria-label='Variables' }
parent entity, for multi-entity NPCs like Larry Jr. 
___ 
### Pathfinder {: aria-label='Variables' }
#### [PathFinder](../PathFinder) Pathfinder  {: aria-label='Variables' }

___ 
### ProjectileCooldown {: aria-label='Variables' }
#### int ProjectileCooldown  {: aria-label='Variables' }
projectiles can fire again when it reaches 0 
___ 
### ProjectileDelay {: aria-label='Variables' }
#### int ProjectileDelay  {: aria-label='Variables' }
&gt;0: projectile will be fired in n frames 
___ 
### Scale {: aria-label='Variables' }
#### float Scale  {: aria-label='Variables' }

___ 
### State {: aria-label='Variables' }
#### int State  {: aria-label='Variables' }

___ 
### StateFrame {: aria-label='Variables' }
#### int StateFrame  {: aria-label='Variables' }

___ 
### V1 {: aria-label='Variables' }
#### [Vector](../Vector) V1  {: aria-label='Variables' }
general usage for ai_* functions, initialized to (0,0) 
___ 
### V2 {: aria-label='Variables' }
#### [Vector](../Vector) V2  {: aria-label='Variables' }
like m_V1, in case we need two of those 
___ 
