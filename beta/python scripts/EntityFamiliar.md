# Class "EntityFamiliar"
## Functions
### AddCoins () {: aria-label='Functions' }
#### void AddCoins ( int Value)  {: aria-label='Functions' }

___ 
### AddHearts () {: aria-label='Functions' }
#### void AddHearts ( int Hearts)  {: aria-label='Functions' }

___ 
### AddKeys () {: aria-label='Functions' }
#### void AddKeys ( int Keys)  {: aria-label='Functions' }

___ 
### AddToDelayed () {: aria-label='Functions' }
#### void AddToDelayed ( )  {: aria-label='Functions' }
Adds to delayed. This doesn't remove other flags! 
___ 
### AddToFollowers () {: aria-label='Functions' }
#### void AddToFollowers ( )  {: aria-label='Functions' }
Adds to followers. This doesn't remove other flags! 
___ 
### AddToOrbit () {: aria-label='Functions' }
#### void AddToOrbit ( int Layer)  {: aria-label='Functions' }
Adds to orbitals. This doesn't remove other flags! 
___ 
### FireProjectile () {: aria-label='Functions' }
#### [EntityTear](../EntityTear) FireProjectile ( [Vector](../Vector) Dir)  {: aria-label='Functions' }

Shoots a projectile from the center of the familiar in the direction you defined.
If used on a familiar that shoots multiple projectiles (example: harlequin baby), this function will only return the left most projectile based on the direction. If used on familiars with special tears (example: Lil Brimstone,...), this will just shoot a regular tear.
This function will not play the shoot animation of the familiar.
___ 
### FollowParent () {: aria-label='Functions' }
#### void FollowParent ( )  {: aria-label='Functions' }

___ 
### FollowPosition () {: aria-label='Functions' }
#### void FollowPosition ( [Vector](../Vector) Pos)  {: aria-label='Functions' }

___ 
### GetOrbitDistance () {: aria-label='Functions' }
#### static [Vector](../Vector) GetOrbitDistance ( int Layer)  {: aria-label='Functions' }

___ 
### GetOrbitPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetOrbitPosition ( [Vector](../Vector) Pos)  {: aria-label='Functions' }

___ 
### MoveDelayed () {: aria-label='Functions' }
#### void MoveDelayed ( int NumFrames)  {: aria-label='Functions' }

___ 
### MoveDiagonally () {: aria-label='Functions' }
#### void MoveDiagonally ( float Speed)  {: aria-label='Functions' }

___ 
### PickEnemyTarget () {: aria-label='Functions' }
#### void PickEnemyTarget ( float MaxDistance, int FrameInterval )  {: aria-label='Functions' }

___ 
### PlayChargeAnim () {: aria-label='Functions' }
#### void PlayChargeAnim ( Direction Dir)  {: aria-label='Functions' }

___ 
### PlayFloatAnim () {: aria-label='Functions' }
#### void PlayFloatAnim ( Direction Dir)  {: aria-label='Functions' }

___ 
### PlayShootAnim () {: aria-label='Functions' }
#### void PlayShootAnim ( Direction Dir)  {: aria-label='Functions' }

___ 
### RecalculateOrbitOffset () {: aria-label='Functions' }
#### int RecalculateOrbitOffset ( int Layer, boolean Add )  {: aria-label='Functions' }
Returns the number of familiars in that layer.
___ 
### RemoveFromDelayed () {: aria-label='Functions' }
#### void RemoveFromDelayed ( )  {: aria-label='Functions' }

___ 
### RemoveFromFollowers () {: aria-label='Functions' }
#### void RemoveFromFollowers ( )  {: aria-label='Functions' }

___ 
### RemoveFromOrbit () {: aria-label='Functions' }
#### void RemoveFromOrbit ( )  {: aria-label='Functions' }

___ 
### Shoot () {: aria-label='Functions' }
#### void Shoot ( )  {: aria-label='Functions' }

___ 
## Variables
### Coins {: aria-label='Variables' }
#### int Coins  {: aria-label='Variables' }

___ 
### FireCooldown {: aria-label='Variables' }
#### int FireCooldown  {: aria-label='Variables' }

___ 
### HeadFrameDelay {: aria-label='Variables' }
#### int HeadFrameDelay  {: aria-label='Variables' }

___ 
### Hearts {: aria-label='Variables' }
#### int Hearts  {: aria-label='Variables' }

___ 
### Keys {: aria-label='Variables' }
#### int Keys  {: aria-label='Variables' }

___ 
### LastDirection {: aria-label='Variables' }
#### Direction LastDirection  {: aria-label='Variables' }

___ 
### MoveDirection {: aria-label='Variables' }
#### Direction MoveDirection  {: aria-label='Variables' }

___ 
### OrbitAngleOffset {: aria-label='Variables' }
#### float OrbitAngleOffset  {: aria-label='Variables' }

Can be used to override the angular position of the familiar on its orbit based on the initial starting position of the orbit.
___ 
### OrbitDistance {: aria-label='Variables' }
#### [Vector](../Vector) OrbitDistance  {: aria-label='Variables' }

Defines the orbit of the familiar, if its an orbital. The Vector is interpreted as the dimensions of the circle/oval orbit. Example: `:::cpp Vector(110,90)` is the orbital of "Forever alone".
___ 
### Player {: aria-label='Variables' }
#### [EntityPlayer](../EntityPlayer) Player  {: aria-label='Variables' }

___ 
### RoomClearCount {: aria-label='Variables' }
#### int RoomClearCount  {: aria-label='Variables' }

___ 
### ShootDirection {: aria-label='Variables' }
#### Direction ShootDirection  {: aria-label='Variables' }

___ 
### State {: aria-label='Variables' }
#### int State  {: aria-label='Variables' }

___ 
