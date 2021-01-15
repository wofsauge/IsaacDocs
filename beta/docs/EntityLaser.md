# Class "EntityLaser"
## Functions
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
### CalculateEndPoint () {: aria-label='Functions' }
#### static [Vector](../Vector) CalculateEndPoint ( [Vector](../Vector) Start, [Vector](../Vector) Dir, [Vector](../Vector) PositionOffset, [Entity](../Entity) Parent, float Margin )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetEndPoint () {: aria-label='Functions' }
####  [Vector](../Vector) GetEndPoint ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetNonOptimizedSamples () {: aria-label='Functions' }
####  HomingLaser::SampleList GetNonOptimizedSamples ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetRenderZ () {: aria-label='Functions' }
#### int GetRenderZ ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetSamples () {: aria-label='Functions' }
####  HomingLaser::SampleList GetSamples ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsCircleLaser () {: aria-label='Functions' }
#### boolean IsCircleLaser ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsSampleLaser () {: aria-label='Functions' }
#### boolean IsSampleLaser ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetActiveRotation () {: aria-label='Functions' }
#### void SetActiveRotation ( int Delay, float AngleDegrees, float RotationSpd, boolean TimeoutComplete )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetBlackHpDropChance () {: aria-label='Functions' }
#### void SetBlackHpDropChance ( float Chance)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetHomingType () {: aria-label='Functions' }
#### void SetHomingType ( LaserHomingType Type)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetMaxDistance () {: aria-label='Functions' }
#### void SetMaxDistance ( float Distance)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetMultidimensionalTouched () {: aria-label='Functions' }
#### void SetMultidimensionalTouched ( boolean Value)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetOneHit () {: aria-label='Functions' }
#### void SetOneHit ( boolean Value)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetTimeout () {: aria-label='Functions' }
#### void SetTimeout ( int Value)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
### ShootAngle () {: aria-label='Functions' }
#### static [EntityLaser](../EntityLaser) ShootAngle ( int Variant, [Vector](../Vector) SourcePos, float AngleDegrees, int Timeout, [Vector](../Vector) PosOffset, [Entity](../Entity) Source )  {: .copyable aria-label='Functions' }
static helper to simplify spawning lasers 
___ 
[ ](#){: .abp .tooltip .badge }
## Variables
### Angle {: aria-label='Variables' }
#### float Angle  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### AngleDegrees {: aria-label='Variables' }
#### float AngleDegrees  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### BlackHpDropChance {: aria-label='Variables' }
#### float BlackHpDropChance  {: .copyable aria-label='Variables' }
For maw of void. 
___ 
[ ](#){: .abp .tooltip .badge }
### BounceLaser {: aria-label='Variables' }
#### [Entity](../Entity) BounceLaser  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### CurveStrength {: aria-label='Variables' }
#### float CurveStrength  {: .copyable aria-label='Variables' }
My Reflection. 
___ 
[ ](#){: .abp .tooltip .badge }
### DisableFollowParent {: aria-label='Variables' }
#### boolean DisableFollowParent  {: .copyable aria-label='Variables' }
Set on children of other lasers, for instance Rubber Cement reflections. Disables m_ParentOffset. 
___ 
[ ](#){: .abp .tooltip .badge }
### EndPoint {: aria-label='Variables' }
#### [Vector](../Vector) EndPoint  {: .copyable aria-label='Variables' }
Will hold the endpoint so it will not need to be recalculated when accessed from extern. 
___ 
[ ](#){: .abp .tooltip .badge }
### FirstUpdate {: aria-label='Variables' }
#### boolean FirstUpdate  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### GridHit {: aria-label='Variables' }
#### boolean GridHit  {: .copyable aria-label='Variables' }
true if laser can be clipped by grid entities and it was clipped at that frame. 
___ 
[ ](#){: .abp .tooltip .badge }
### HomingLaser {: aria-label='Variables' }
#### HomingLaser HomingLaser  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### HomingType {: aria-label='Variables' }
#### LaserHomingType HomingType  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsActiveRotating {: aria-label='Variables' }
#### boolean IsActiveRotating  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### LaserLength {: aria-label='Variables' }
#### float LaserLength  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### LastAngleDegrees {: aria-label='Variables' }
#### float LastAngleDegrees  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### MaxDistance {: aria-label='Variables' }
#### float MaxDistance  {: .copyable aria-label='Variables' }
Used to trim brimstone for Azazel (0 - off) 
___ 
[ ](#){: .abp .tooltip .badge }
### OneHit {: aria-label='Variables' }
#### boolean OneHit  {: .copyable aria-label='Variables' }
Laser hits only once. 
___ 
[ ](#){: .abp .tooltip .badge }
### ParentOffset {: aria-label='Variables' }
#### [Vector](../Vector) ParentOffset  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Radius {: aria-label='Variables' }
#### float Radius  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### RotationDegrees {: aria-label='Variables' }
#### float RotationDegrees  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### RotationDelay {: aria-label='Variables' }
#### int RotationDelay  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### RotationSpd {: aria-label='Variables' }
#### float RotationSpd  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### SampleLaser {: aria-label='Variables' }
#### boolean SampleLaser  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Shrink {: aria-label='Variables' }
#### boolean Shrink  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### StartAngleDegrees {: aria-label='Variables' }
#### float StartAngleDegrees  {: .copyable aria-label='Variables' }
Some lasers have a bit of random variation in rotation so they need to remember their starting point. 
___ 
[ ](#){: .abp .tooltip .badge }
### [TearFlags](../enums/TearFlags) {: aria-label='Variables' }
#### int [TearFlags](../enums/TearFlags)  {: .copyable aria-label='Variables' }
float m_DepthOffset; 
float GetDepthOffset(void) const { return m_DepthOffset; } void SetDepthOffset(float Value) { m_DepthOffset = Value; } 
___ 
[ ](#){: .abp .tooltip .badge }
### Timeout {: aria-label='Variables' }
#### int Timeout  {: .copyable aria-label='Variables' }

___ 
