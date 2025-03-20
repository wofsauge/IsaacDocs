---
tags:
  - Class
---
# Class "PathFinder"

???+ info
    You can get this class by using the following function:

    * [EntityNPC.Pathfinder](EntityNPC.md#pathfinder)

## Functions
### Evade·Target () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void EvadeTarget ( [Vector](Vector.md) TargetPos ) {: .copyable aria-label='Functions' }

Moves this Entity away from `TargetPos` if it is too close, like a Mulligoon.

___
### Find·Grid·Path () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void FindGridPath ( [Vector](Vector.md) Pos, float Speed, int PathMarker, boolean UseDirectPath ) {: .copyable aria-label='Functions' }

Moves this Entity towards `Pos` at a speed of `Speed`. `PathMarker` sets the GridPath value for the tile the Entity is walking over.

???+ note "PathMarker notes"
    GridPath values pseudo-enumeration:

    **900**  : Set by some enemies when they pass through a tile. De-prioritises the tile for pathfinders. Degrades over time in steps of 100.

    **950**  : Set by fire places. De-prioritises the tile for pathfinders. Does not degrade.

    **1000** : Set by grid entities. Invalidates the tile for pathfinders. Impedes grounded player movement. Does not degrade.

    **3000** : Set by pits. Invalidates the tile for pathfinders. Impedes grounded player movement. Does not degrade.

    **3999** : Set by grimaces. Invalidates the tile for pathfinders. Impedes grounded player movement. Drops to 900 and then degrades over time in steps of 100 (Grimaces reset value every frame).

???- bug "Bug"
    `UseDirectPath` does not seem to work, as the Entity will always move along the cardinal axes.

___
### Get·Evade·Movement·Countdown () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetEvadeMovementCountdown ( ) {: .copyable aria-label='Functions' }

___
### Get·Grid·Index () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetGridIndex ( ) {: .copyable aria-label='Functions' }

Returns the index of the tile the Entity is currently over.
___
### Has·Direct·Path () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean HasDirectPath ( ) {: .copyable aria-label='Functions' }

Returns `true` if the Entity has a direct path to its target, and only if the Pathfinder is set to use a direct path to its target. The target can be set with functions such as [`FindGridPath()`](#findgridpath).

___
### Has·Path·To·Pos () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean HasPathToPos ( [Vector](Vector.md) Pos, boolean IgnorePoop ) {: .copyable aria-label='Functions' }
Used for safe check if any NPC is behind rocks/pits, doesn't disturb class members.
___
### Move·Randomly () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean MoveRandomly ( boolean IgnoreStatusEffects ) {: .copyable aria-label='Functions' }

Moves around randomly in all directions, like a Gusher.

___
### Move·Randomly·Axis·Aligned () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void MoveRandomlyAxisAligned ( float Speed, boolean IgnoreStatusEffects ) {: .copyable aria-label='Functions' }

???+ bug "Bug"
    Doesn't seem to do anything.

___
### Move·Randomly·Boss () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void MoveRandomlyBoss ( boolean IgnoreStatusEffects ) {: .copyable aria-label='Functions' }

Moves around randomly in all directions while generally moving towards the player.

___
### Reset () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void Reset ( ) {: .copyable aria-label='Functions' }

___
### Reset·Movement·Target () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ResetMovementTarget ( ) {: .copyable aria-label='Functions' }

___
### Set·Can·Crush·Rocks () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetCanCrushRocks ( boolean value ) {: .copyable aria-label='Functions' }

???+ note "Notes"
    Does not allow the Entity to crush rocks, and does not make [FindGridPath()](#findgridpath) behave as though the Entity can.

___
### Update·Grid·Index () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void UpdateGridIndex ( ) {: .copyable aria-label='Functions' }

___
