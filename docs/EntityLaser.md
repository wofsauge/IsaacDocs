# Class "EntityLaser"
### Inherits from Class: {: .inheritance }
[Entity](Entity.md)
## Functions
### Calculate·End·Point () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static [Vector](../Vector) CalculateEndPoint ( [Vector](../Vector) Start, [Vector](../Vector) Dir, [Vector](../Vector) PositionOffset, [Entity](../Entity) Parent, float Margin ) {: .copyable aria-label='Functions' }

___ 
### Get·End·Point () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const [Vector](../Vector) GetEndPoint ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Non·Optimized·Samples () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const HomingLaser::SampleList GetNonOptimizedSamples ( ) {: .copyable aria-label='Functions' }

___ 
### Get·RenderZ () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetRenderZ ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Samples () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### const HomingLaser::SampleList GetSamples ( ) {: .copyable aria-label='Functions' }

___ 
### Is·Circle·Laser () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsCircleLaser ( ) {: .copyable aria-label='Functions' }

___ 
### Is·Sample·Laser () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsSampleLaser ( ) {: .copyable aria-label='Functions' }

___ 
### Set·Active·Rotation () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetActiveRotation ( int Delay, float AngleDegrees, float RotationSpd, boolean TimeoutComplete ) {: .copyable aria-label='Functions' }

___ 
### Set·Black·Hp·Drop·Chance () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetBlackHpDropChance ( float Chance ) {: .copyable aria-label='Functions' }

___ 
### Set·Homing·Type () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetHomingType ( LaserHomingType Type ) {: .copyable aria-label='Functions' }

___ 
### Set·Max·Distance () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetMaxDistance ( float Distance ) {: .copyable aria-label='Functions' }

___ 
### Set·Multidimensional·Touched () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetMultidimensionalTouched ( boolean Value ) {: .copyable aria-label='Functions' }

___ 
### Set·One·Hit () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetOneHit ( boolean Value ) {: .copyable aria-label='Functions' }

___ 
### Set·Timeout () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetTimeout ( int Value ) {: .copyable aria-label='Functions' }

___ 
### Shoot·Angle () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static [EntityLaser](../EntityLaser) ShootAngle ( int Variant, [Vector](../Vector) SourcePos, float AngleDegrees, int Timeout, [Vector](../Vector) PosOffset, [Entity](../Entity) Source ) {: .copyable aria-label='Functions' }
static helper to simplify spawning lasers 
___ 
## Variables
### Angle {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Angle  {: .copyable aria-label='Variables' }

___ 
### Angle·Degrees {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float AngleDegrees  {: .copyable aria-label='Variables' }

___ 
### Black·Hp·Drop·Chance {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float BlackHpDropChance  {: .copyable aria-label='Variables' }
For maw of void. 
___ 
### Bounce·Laser {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) BounceLaser  {: .copyable aria-label='Variables' data-altreturn='nil' }

___ 
### Curve·Strength {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float CurveStrength  {: .copyable aria-label='Variables' }
My Reflection. 
___ 
### Disable·Follow·Parent {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean DisableFollowParent  {: .copyable aria-label='Variables' }
Set on children of other lasers, for instance Rubber Cement reflections. Disables m_ParentOffset. 
___ 
### End·Point {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) EndPoint  {: .copyable aria-label='Variables' }
Will hold the endpoint so it will not need to be recalculated when accessed from extern. 
___ 
### First·Update {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean FirstUpdate  {: .copyable aria-label='Variables' }

___ 
### Grid·Hit {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean GridHit  {: .copyable aria-label='Variables' }
true if laser can be clipped by grid entities and it was clipped at that frame. 
___ 
### Homing·Laser {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### HomingLaser HomingLaser  {: .copyable aria-label='Variables' }

___ 
### Homing·Type {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### LaserHomingType HomingType  {: .copyable aria-label='Variables' }

___ 
### Is·Active·Rotating {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsActiveRotating  {: .copyable aria-label='Variables' }

___ 
### Laser·Length {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float LaserLength  {: .copyable aria-label='Variables' }

___ 
### Last·Angle·Degrees {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float LastAngleDegrees  {: .copyable aria-label='Variables' }

___ 
### Max·Distance {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float MaxDistance  {: .copyable aria-label='Variables' }
Used to trim brimstone for Azazel (0 - off) 
___ 
### One·Hit {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean OneHit  {: .copyable aria-label='Variables' }
Laser hits only once. 
___ 
### Parent·Offset {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) ParentOffset  {: .copyable aria-label='Variables' }

___ 
### Radius {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Radius  {: .copyable aria-label='Variables' }

___ 
### Rotation·Degrees {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float RotationDegrees  {: .copyable aria-label='Variables' }

___ 
### Rotation·Delay {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int RotationDelay  {: .copyable aria-label='Variables' }

___ 
### Rotation·Spd {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float RotationSpd  {: .copyable aria-label='Variables' }

___ 
### Sample·Laser {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean SampleLaser  {: .copyable aria-label='Variables' }

___ 
### Shrink {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean Shrink  {: .copyable aria-label='Variables' }

___ 
### Start·Angle·Degrees {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float StartAngleDegrees  {: .copyable aria-label='Variables' }
Some lasers have a bit of random variation in rotation so they need to remember their starting point. 
___ 
### Tear·Flags {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [TearFlags](../enums/TearFlags) TearFlags  {: .copyable aria-label='Variables' }
___ 
### Timeout {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int Timeout  {: .copyable aria-label='Variables' }

___ 
