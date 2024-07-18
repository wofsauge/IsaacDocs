---
tags:
  - Class
---
# Class "EntityFamiliar"

???+ info
    You can get this class by using the following function:

    * [Entity.ToFamiliar()](Entity.md#tofamiliar)
    * [EntityPlayer.AddItemWisp()](EntityPlayer.md#additemwisp)
    * [EntityPlayer.AddMinisaac()](EntityPlayer.md#addminisaac)
    * [EntityPlayer.AddSwarmFlyOrbital()](EntityPlayer.md#addswarmflyorbital)
    * [EntityPlayer.AddWisp()](EntityPlayer.md#addwisp)
    * [EntityPlayer.ThrowFriendlyDip()](EntityPlayer.md#throwfriendlydip)

    ???+ example "Example Code"
        `local familiarEntity = Isaac.GetPlayer():AddMinisaac(Vector(0,0))`

## Class Diagram
--8<-- "docs/snippets/EntityClassDiagram.md"
## Functions
### Add·Coins () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddCoins ( int Value ) {: .copyable aria-label='Functions' }

___
### Add·Hearts () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddHearts ( int Hearts ) {: .copyable aria-label='Functions' }

___
### Add·Keys () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddKeys ( int Keys ) {: .copyable aria-label='Functions' }

___
### Add·To·Delayed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddToDelayed ( ) {: .copyable aria-label='Functions' }
Adds to delayed. This doesn't remove other flags!
___
### Add·To·Followers () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddToFollowers ( ) {: .copyable aria-label='Functions' }
Adds to followers. This doesn't remove other flags!
___
### Add·To·Orbit () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddToOrbit ( int Layer ) {: .copyable aria-label='Functions' }
Adds to orbitals. This doesn't remove other flags!
___
### Fire·Projectile () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityTear](EntityTear.md) FireProjectile ( [Vector](Vector.md) Dir ) {: .copyable aria-label='Functions' }

Shoots a projectile from the center of the familiar in the direction you defined.
If used on a familiar that shoots multiple projectiles (example: harlequin baby), this function will only return the left most projectile based on the direction. If used on familiars with special tears (example: Lil Brimstone,...), this will just shoot a regular tear.
This function will not play the shoot animation of the familiar.
___
### Follow·Parent () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void FollowParent ( ) {: .copyable aria-label='Functions' }

___
### Follow·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void FollowPosition ( [Vector](Vector.md) Pos ) {: .copyable aria-label='Functions' }

___
### Get·Orbit·Distance () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### static [Vector](Vector.md) GetOrbitDistance ( int Layer ) {: .copyable aria-label='Functions' }

___
### Get·Orbit·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetOrbitPosition ( [Vector](Vector.md) Pos ) {: .copyable aria-label='Functions' }

Returns the position of an orbiting familiar relative to the player's position. Returns `:::lua Vector(0,0) if its a normal familiar.`
The "pos" argument is used as an offset.
___
### Move·Delayed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void MoveDelayed ( int NumFrames ) {: .copyable aria-label='Functions' }

___
### Move·Diagonally () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void MoveDiagonally ( float Speed ) {: .copyable aria-label='Functions' }

___
### Pick·Enemy·Target () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void PickEnemyTarget ( float MaxDistance, int FrameInterval = 13, int Flags = 0, [Vector](Vector.md) ConeDir = Vector.Zero, float ConeAngle = 15 ) {: .copyable aria-label='Functions' }
**Flags**: A combination of the following flags (none of these are set by default)

    * 1: Allow switching to a better target even if we already have one
    * 2: Don't prioritize enemies that are close to our owner
    * 4: Prioritize enemies with higher HP
    * 8: Prioritize enemies with lower HP
    * 16: Give lower priority to our current target (this makes us more likely to switch between targets)

**ConeDir**: If ~= Vector.Zero, searches for targets in a cone pointing in this direction

**ConeAngle**: If ConeDir ~= Vector.Zero, sets the half angle of the search cone in degrees (45 results in a search angle of 90 degrees)
___
### Play·Charge·Anim () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void PlayChargeAnim ( [Direction](enums/Direction.md) Dir ) {: .copyable aria-label='Functions' }

___
### Play·Float·Anim () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void PlayFloatAnim ( [Direction](enums/Direction.md) Dir ) {: .copyable aria-label='Functions' }

___
### Play·Shoot·Anim () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void PlayShootAnim ( [Direction](enums/Direction.md) Dir ) {: .copyable aria-label='Functions' }

___
### Recalculate·Orbit·Offset () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int RecalculateOrbitOffset ( int Layer, boolean Add ) {: .copyable aria-label='Functions' }
Returns the number of familiars in that layer.
___
### Remove·From·Delayed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveFromDelayed ( ) {: .copyable aria-label='Functions' }

___
### Remove·From·Followers () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveFromFollowers ( ) {: .copyable aria-label='Functions' }

___
### Remove·From·Orbit () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveFromOrbit ( ) {: .copyable aria-label='Functions' }

___
### Shoot () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Shoot ( ) {: .copyable aria-label='Functions' }


???+ bug "Bugs"
    This function does not seem to work.
___
## Variables
### Coins {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Coins  {: .copyable aria-label='Variables' }

___
### Fire·Cooldown {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int FireCooldown  {: .copyable aria-label='Variables' }

___
### Head·Frame·Delay {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int HeadFrameDelay  {: .copyable aria-label='Variables' }

___
### Hearts {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Hearts  {: .copyable aria-label='Variables' }

___
### Is·Delayed {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsDelayed {: .copyable aria-label='Variables' }

___
### Is·Follower {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsFollower {: .copyable aria-label='Variables' }

___
### Keys {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Keys  {: .copyable aria-label='Variables' }

___
### Last·Direction {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Direction](enums/Direction.md) LastDirection  {: .copyable aria-label='Variables' }

___
### Move·Direction {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Direction](enums/Direction.md) MoveDirection  {: .copyable aria-label='Variables' }

___
### Orbit·Angle·Offset {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float OrbitAngleOffset  {: .copyable aria-label='Variables' }

Can be used to override the angular position of the familiar on its orbit based on the initial starting position of the orbit.

???- example "Example Code"
    This code will make all of your orbitals move as a tight wall around you.

    ```lua
    for i,v in ipairs(Isaac.GetRoomEntities()) do
        if v.Type==3 then
            v:ToFamiliar().OrbitAngleOffset = 0.25*i
        end
    end
    ```

    Result: ![angle offset](images/example_familiar_angleOffset.png)
___
### Orbit·Distance {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) OrbitDistance  {: .copyable aria-label='Variables' }

Defines the orbit of the familiar, if its an orbital. The Vector is interpreted as the dimensions of the circle/oval orbit. Example: `:::lua Vector(110,90)` is the orbital of "Forever alone".
___
### Orbit·Layer {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int OrbitLayer  {: .copyable aria-label='Variables' }

This value is `-1` by default, and changes to whichever value is defined by `EntityFamiliar:AddToOrbit()`.
___
### Orbit·Speed {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float OrbitSpeed  {: .copyable aria-label='Variables' }

___
### Player {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityPlayer](EntityPlayer.md) Player  {: .copyable aria-label='Variables' }

___
### Room·Clear·Count {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int RoomClearCount  {: .copyable aria-label='Variables' }

___
### Shoot·Direction {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Direction](enums/Direction.md) ShootDirection  {: .copyable aria-label='Variables' }

___
### State {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int State  {: .copyable aria-label='Variables' }

___
