# Class "EntityFamiliar"
## Functions
### AddCoins () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddCoins ( int Value ) {: .copyable aria-label='Functions' }

___ 
### AddHearts () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddHearts ( int Hearts ) {: .copyable aria-label='Functions' }

___ 
### AddKeys () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddKeys ( int Keys ) {: .copyable aria-label='Functions' }

___ 
### AddToDelayed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddToDelayed ( ) {: .copyable aria-label='Functions' }
Adds to delayed. This doesn't remove other flags! 
___ 
### AddToFollowers () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddToFollowers ( ) {: .copyable aria-label='Functions' }
Adds to followers. This doesn't remove other flags! 
___ 
### AddToOrbit () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddToOrbit ( int Layer ) {: .copyable aria-label='Functions' }
Adds to orbitals. This doesn't remove other flags! 
___ 
### FireProjectile () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityTear](../EntityTear) FireProjectile ( [Vector](../Vector) Dir ) {: .copyable aria-label='Functions' }

Shoots a projectile from the center of the familiar in the direction you defined.
If used on a familiar that shoots multiple projectiles (example: harlequin baby), this function will only return the left most projectile based on the direction. If used on familiars with special tears (example: Lil Brimstone,...), this will just shoot a regular tear.
This function will not play the shoot animation of the familiar.
___ 
### FollowParent () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void FollowParent ( ) {: .copyable aria-label='Functions' }

___ 
### FollowPosition () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void FollowPosition ( [Vector](../Vector) Pos ) {: .copyable aria-label='Functions' }

___ 
### GetOrbitDistance () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static [Vector](../Vector) GetOrbitDistance ( int Layer ) {: .copyable aria-label='Functions' }

___ 
### GetOrbitPosition () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetOrbitPosition ( [Vector](../Vector) Pos ) {: .copyable aria-label='Functions' }

Returns the position of an orbiting familiar relative to the player's position. Returns `:::lua Vector(0,0) if its a normal familiar.`
The "pos" argument is used as an offset.
___ 
### MoveDelayed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void MoveDelayed ( int NumFrames ) {: .copyable aria-label='Functions' }

___ 
### MoveDiagonally () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void MoveDiagonally ( float Speed ) {: .copyable aria-label='Functions' }

___ 
### PickEnemyTarget () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void PickEnemyTarget ( float MaxDistance, int FrameInterval ) {: .copyable aria-label='Functions' }

___ 
### PlayChargeAnim () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void PlayChargeAnim ( [Direction](../enums/Direction) Dir ) {: .copyable aria-label='Functions' }

___ 
### PlayFloatAnim () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void PlayFloatAnim ( [Direction](../enums/Direction) Dir ) {: .copyable aria-label='Functions' }

___ 
### PlayShootAnim () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void PlayShootAnim ( [Direction](../enums/Direction) Dir ) {: .copyable aria-label='Functions' }

___ 
### RecalculateOrbitOffset () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int RecalculateOrbitOffset ( int Layer, boolean Add ) {: .copyable aria-label='Functions' }
Returns the number of familiars in that layer.
___ 
### RemoveFromDelayed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveFromDelayed ( ) {: .copyable aria-label='Functions' }

___ 
### RemoveFromFollowers () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveFromFollowers ( ) {: .copyable aria-label='Functions' }

___ 
### RemoveFromOrbit () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveFromOrbit ( ) {: .copyable aria-label='Functions' }

___ 
### Shoot () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Shoot ( ) {: .copyable aria-label='Functions' }


???+ bug "Bugs"
    This function does not seem to work.
___ 
## Variables
### Coins {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int Coins  {: .copyable aria-label='Variables' }

___ 
### FireCooldown {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int FireCooldown  {: .copyable aria-label='Variables' }

___ 
### HeadFrameDelay {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int HeadFrameDelay  {: .copyable aria-label='Variables' }

___ 
### Hearts {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int Hearts  {: .copyable aria-label='Variables' }

___ 
### Keys {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int Keys  {: .copyable aria-label='Variables' }

___ 
### LastDirection {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Direction](../enums/Direction) LastDirection  {: .copyable aria-label='Variables' }

___ 
### MoveDirection {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Direction](../enums/Direction) MoveDirection  {: .copyable aria-label='Variables' }

___ 
### OrbitAngleOffset {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
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
    Result: ![angle offset](../images/example_familiar_angleOffset.png)
___ 
### OrbitDistance {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) OrbitDistance  {: .copyable aria-label='Variables' }

Defines the orbit of the familiar, if its an orbital. The Vector is interpreted as the dimensions of the circle/oval orbit. Example: `:::lua Vector(110,90)` is the orbital of "Forever alone".
___ 
### Player {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [EntityPlayer](../EntityPlayer) Player  {: .copyable aria-label='Variables' }

___ 
### RoomClearCount {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int RoomClearCount  {: .copyable aria-label='Variables' }

___ 
### ShootDirection {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Direction](../enums/Direction) ShootDirection  {: .copyable aria-label='Variables' }

___ 
### State {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int State  {: .copyable aria-label='Variables' }

___ 
