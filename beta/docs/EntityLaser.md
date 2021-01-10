# Class "EntityLaser"
## Functions
### CalculateEndPoint () {: aria-label='Functions' }
#### static [Vector](../Vector) CalculateEndPoint ( [Vector](../Vector) Start, [Vector](../Vector) Dir, [Vector](../Vector) PositionOffset, [Entity](../Entity) Parent, float Margin )  {: aria-label='Functions' }

___ 
### GetEndPoint () {: aria-label='Functions' }
####  [Vector](../Vector) GetEndPoint ( )  {: aria-label='Functions' }

___ 
### GetNonOptimizedSamples () {: aria-label='Functions' }
####  HomingLaser::SampleList GetNonOptimizedSamples ( )  {: aria-label='Functions' }

___ 
### GetRenderZ () {: aria-label='Functions' }
#### int GetRenderZ ( )  {: aria-label='Functions' }

___ 
### GetSamples () {: aria-label='Functions' }
####  HomingLaser::SampleList GetSamples ( )  {: aria-label='Functions' }

___ 
### IsCircleLaser () {: aria-label='Functions' }
#### boolean IsCircleLaser ( )  {: aria-label='Functions' }

___ 
### IsSampleLaser () {: aria-label='Functions' }
#### boolean IsSampleLaser ( )  {: aria-label='Functions' }

___ 
### SetActiveRotation () {: aria-label='Functions' }
#### void SetActiveRotation ( int Delay, float AngleDegrees, float RotationSpd, boolean TimeoutComplete )  {: aria-label='Functions' }

___ 
### SetBlackHpDropChance () {: aria-label='Functions' }
#### void SetBlackHpDropChance ( float Chance)  {: aria-label='Functions' }

___ 
### SetHomingType () {: aria-label='Functions' }
#### void SetHomingType ( LaserHomingType Type)  {: aria-label='Functions' }

___ 
### SetMaxDistance () {: aria-label='Functions' }
#### void SetMaxDistance ( float Distance)  {: aria-label='Functions' }

___ 
### SetMultidimensionalTouched () {: aria-label='Functions' }
#### void SetMultidimensionalTouched ( boolean Value)  {: aria-label='Functions' }

___ 
### SetOneHit () {: aria-label='Functions' }
#### void SetOneHit ( boolean Value)  {: aria-label='Functions' }

___ 
### SetTimeout () {: aria-label='Functions' }
#### void SetTimeout ( int Value)  {: aria-label='Functions' }

___ 
### ShootAngle () {: aria-label='Functions' }
#### static [EntityLaser](../EntityLaser) ShootAngle ( int Variant, [Vector](../Vector) SourcePos, float AngleDegrees, int Timeout, [Vector](../Vector) PosOffset, [Entity](../Entity) Source )  {: aria-label='Functions' }
static helper to simplify spawning lasers 
___ 
## Variables
### Angle {: aria-label='Variables' }
#### float Angle  {: aria-label='Variables' }

___ 
### AngleDegrees {: aria-label='Variables' }
#### float AngleDegrees  {: aria-label='Variables' }

___ 
### BlackHpDropChance {: aria-label='Variables' }
#### float BlackHpDropChance  {: aria-label='Variables' }
For maw of void. 
___ 
### BounceLaser {: aria-label='Variables' }
#### [Entity](../Entity) BounceLaser  {: aria-label='Variables' }

___ 
### CurveStrength {: aria-label='Variables' }
#### float CurveStrength  {: aria-label='Variables' }
My Reflection. 
___ 
### DisableFollowParent {: aria-label='Variables' }
#### boolean DisableFollowParent  {: aria-label='Variables' }
Set on children of other lasers, for instance Rubber Cement reflections. Disables m_ParentOffset. 
___ 
### EndPoint {: aria-label='Variables' }
#### [Vector](../Vector) EndPoint  {: aria-label='Variables' }
Will hold the endpoint so it will not need to be recalculated when accessed from extern. 
___ 
### FirstUpdate {: aria-label='Variables' }
#### boolean FirstUpdate  {: aria-label='Variables' }

___ 
### GridHit {: aria-label='Variables' }
#### boolean GridHit  {: aria-label='Variables' }
true if laser can be clipped by grid entities and it was clipped at that frame. 
___ 
### HomingLaser {: aria-label='Variables' }
#### HomingLaser HomingLaser  {: aria-label='Variables' }

___ 
### HomingType {: aria-label='Variables' }
#### LaserHomingType HomingType  {: aria-label='Variables' }

___ 
### IsActiveRotating {: aria-label='Variables' }
#### boolean IsActiveRotating  {: aria-label='Variables' }

___ 
### LaserLength {: aria-label='Variables' }
#### float LaserLength  {: aria-label='Variables' }

___ 
### LastAngleDegrees {: aria-label='Variables' }
#### float LastAngleDegrees  {: aria-label='Variables' }

___ 
### MaxDistance {: aria-label='Variables' }
#### float MaxDistance  {: aria-label='Variables' }
Used to trim brimstone for Azazel (0 - off) 
___ 
### OneHit {: aria-label='Variables' }
#### boolean OneHit  {: aria-label='Variables' }
Laser hits only once. 
___ 
### ParentOffset {: aria-label='Variables' }
#### [Vector](../Vector) ParentOffset  {: aria-label='Variables' }

___ 
### Radius {: aria-label='Variables' }
#### float Radius  {: aria-label='Variables' }

___ 
### RotationDegrees {: aria-label='Variables' }
#### float RotationDegrees  {: aria-label='Variables' }

___ 
### RotationDelay {: aria-label='Variables' }
#### int RotationDelay  {: aria-label='Variables' }

___ 
### RotationSpd {: aria-label='Variables' }
#### float RotationSpd  {: aria-label='Variables' }

___ 
### SampleLaser {: aria-label='Variables' }
#### boolean SampleLaser  {: aria-label='Variables' }

___ 
### Shrink {: aria-label='Variables' }
#### boolean Shrink  {: aria-label='Variables' }

___ 
### StartAngleDegrees {: aria-label='Variables' }
#### float StartAngleDegrees  {: aria-label='Variables' }
Some lasers have a bit of random variation in rotation so they need to remember their starting point. 
___ 
### [TearFlags](../enums/TearFlags) {: aria-label='Variables' }
#### int [TearFlags](../enums/TearFlags)  {: aria-label='Variables' }
float m_DepthOffset; 
float GetDepthOffset(void) const { return m_DepthOffset; } void SetDepthOffset(float Value) { m_DepthOffset = Value; } 
___ 
### Timeout {: aria-label='Variables' }
#### int Timeout  {: aria-label='Variables' }

___ 
