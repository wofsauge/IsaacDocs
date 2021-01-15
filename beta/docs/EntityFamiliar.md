# Class "EntityFamiliar"
## Functions
[ ](#){: .abp .tooltip .badge }
### AddCoins () {: aria-label='Functions' }
#### void AddCoins ( int Value)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddHearts () {: aria-label='Functions' }
#### void AddHearts ( int Hearts)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddKeys () {: aria-label='Functions' }
#### void AddKeys ( int Keys)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddToDelayed () {: aria-label='Functions' }
#### void AddToDelayed ( )  {: .copyable aria-label='Functions' }
Adds to delayed. This doesn't remove other flags! 
___ 
[ ](#){: .abp .tooltip .badge }
### AddToFollowers () {: aria-label='Functions' }
#### void AddToFollowers ( )  {: .copyable aria-label='Functions' }
Adds to followers. This doesn't remove other flags! 
___ 
[ ](#){: .abp .tooltip .badge }
### AddToOrbit () {: aria-label='Functions' }
#### void AddToOrbit ( int Layer)  {: .copyable aria-label='Functions' }
Adds to orbitals. This doesn't remove other flags! 
___ 
[ ](#){: .abp .tooltip .badge }
### FireProjectile () {: aria-label='Functions' }
#### [EntityTear](../EntityTear) FireProjectile ( [Vector](../Vector) Dir)  {: .copyable aria-label='Functions' }

Shoots a projectile from the center of the familiar in the direction you defined.
If used on a familiar that shoots multiple projectiles (example: harlequin baby), this function will only return the left most projectile based on the direction. If used on familiars with special tears (example: Lil Brimstone,...), this will just shoot a regular tear.
This function will not play the shoot animation of the familiar.
___ 
[ ](#){: .abp .tooltip .badge }
### FollowParent () {: aria-label='Functions' }
#### void FollowParent ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### FollowPosition () {: aria-label='Functions' }
#### void FollowPosition ( [Vector](../Vector) Pos)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
### GetOrbitDistance () {: aria-label='Functions' }
#### static [Vector](../Vector) GetOrbitDistance ( int Layer)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetOrbitPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetOrbitPosition ( [Vector](../Vector) Pos)  {: .copyable aria-label='Functions' }

Returns the position of an orbiting familiar relative to the player's position. Returns `:::cpp Vector(0,0) if its a normal familiar.`
The "pos" argument is used as an offset.
___ 
[ ](#){: .abp .tooltip .badge }
### MoveDelayed () {: aria-label='Functions' }
#### void MoveDelayed ( int NumFrames)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### MoveDiagonally () {: aria-label='Functions' }
#### void MoveDiagonally ( float Speed)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### PickEnemyTarget () {: aria-label='Functions' }
#### void PickEnemyTarget ( float MaxDistance, int FrameInterval )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### PlayChargeAnim () {: aria-label='Functions' }
#### void PlayChargeAnim ( [Direction](../enums/Direction) Dir)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### PlayFloatAnim () {: aria-label='Functions' }
#### void PlayFloatAnim ( [Direction](../enums/Direction) Dir)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### PlayShootAnim () {: aria-label='Functions' }
#### void PlayShootAnim ( [Direction](../enums/Direction) Dir)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RecalculateOrbitOffset () {: aria-label='Functions' }
#### int RecalculateOrbitOffset ( int Layer, boolean Add )  {: .copyable aria-label='Functions' }
Returns the number of familiars in that layer.
___ 
[ ](#){: .abp .tooltip .badge }
### RemoveFromDelayed () {: aria-label='Functions' }
#### void RemoveFromDelayed ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveFromFollowers () {: aria-label='Functions' }
#### void RemoveFromFollowers ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveFromOrbit () {: aria-label='Functions' }
#### void RemoveFromOrbit ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Shoot () {: aria-label='Functions' }
#### void Shoot ( )  {: .copyable aria-label='Functions' }

##### :fontawesome-solid-bug: Bugs {: .subHeader .bugs }
This function does not seem to work.
___ 
[ ](#){: .abp .tooltip .badge }
## Variables
### Coins {: aria-label='Variables' }
#### int Coins  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### FireCooldown {: aria-label='Variables' }
#### int FireCooldown  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### HeadFrameDelay {: aria-label='Variables' }
#### int HeadFrameDelay  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Hearts {: aria-label='Variables' }
#### int Hearts  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Keys {: aria-label='Variables' }
#### int Keys  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### LastDirection {: aria-label='Variables' }
#### [Direction](../enums/Direction) LastDirection  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### MoveDirection {: aria-label='Variables' }
#### [Direction](../enums/Direction) MoveDirection  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### OrbitAngleOffset {: aria-label='Variables' }
#### float OrbitAngleOffset  {: .copyable aria-label='Variables' }

Can be used to override the angular position of the familiar on its orbit based on the initial starting position of the orbit.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code will make all of your orbitals move as a tight wall around you.
```cpp 
for i,v in ipairs(Isaac.GetRoomEntities()) do 
if v.Type==3 then 
v:ToFamiliar().OrbitAngleOffset = 0.25*i 
end 
end

```
Result: <a href="customImg/example_familiar_angleOffset.png"><img src="customImg/example_familiar_angleOffset.png" width="250px"/></a>
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### OrbitDistance {: aria-label='Variables' }
#### [Vector](../Vector) OrbitDistance  {: .copyable aria-label='Variables' }

Defines the orbit of the familiar, if its an orbital. The Vector is interpreted as the dimensions of the circle/oval orbit. Example: `:::cpp Vector(110,90)` is the orbital of "Forever alone".
___ 
[ ](#){: .abp .tooltip .badge }
### Player {: aria-label='Variables' }
#### [EntityPlayer](../EntityPlayer) Player  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### RoomClearCount {: aria-label='Variables' }
#### int RoomClearCount  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### ShootDirection {: aria-label='Variables' }
#### [Direction](../enums/Direction) ShootDirection  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### State {: aria-label='Variables' }
#### int State  {: .copyable aria-label='Variables' }

___ 
