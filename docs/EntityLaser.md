# Class "EntityLaser"
### Inherits from Class: {: .inheritance }
[Entity](Entity.md)
## Functions
### CalculateEndPoint () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static [Vector](../Vector) CalculateEndPoint ( [Vector](../Vector) Start, [Vector](../Vector) Dir, [Vector](../Vector) PositionOffset, [Entity](../Entity) Parent, float Margin ) {: .copyable aria-label='Functions' }

___ 
### GetEndPoint () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetEndPoint ( ) {: .copyable aria-label='Functions' }

___ 
### GetNonOptimizedSamples () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### HomingLaser::SampleList GetNonOptimizedSamples ( ) {: .copyable aria-label='Functions' }

___ 
### GetRenderZ () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetRenderZ ( ) {: .copyable aria-label='Functions' }

___ 
### GetSamples () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### HomingLaser::SampleList GetSamples ( ) {: .copyable aria-label='Functions' }

___ 
### IsCircleLaser () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsCircleLaser ( ) {: .copyable aria-label='Functions' }

___ 
### IsSampleLaser () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsSampleLaser ( ) {: .copyable aria-label='Functions' }

___ 
### SetActiveRotation () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetActiveRotation ( int Delay, float AngleDegrees, float RotationSpd, boolean TimeoutComplete ) {: .copyable aria-label='Functions' }

___ 
### SetBlackHpDropChance () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetBlackHpDropChance ( float Chance ) {: .copyable aria-label='Functions' }

___ 
### SetHomingType () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetHomingType ( LaserHomingType Type ) {: .copyable aria-label='Functions' }

___ 
### SetMaxDistance () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetMaxDistance ( float Distance ) {: .copyable aria-label='Functions' }

___ 
### SetMultidimensionalTouched () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetMultidimensionalTouched ( boolean Value ) {: .copyable aria-label='Functions' }

___ 
### SetOneHit () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetOneHit ( boolean Value ) {: .copyable aria-label='Functions' }

___ 
### SetTimeout () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetTimeout ( int Value ) {: .copyable aria-label='Functions' }

___ 
### ShootAngle () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static [EntityLaser](../EntityLaser) ShootAngle ( int Variant, [Vector](../Vector) SourcePos, float AngleDegrees, int Timeout, [Vector](../Vector) PosOffset, [Entity](../Entity) Source ) {: .copyable aria-label='Functions' }
static helper to simplify spawning lasers 
___ 
## Variables
### Angle {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Angle  {: .copyable aria-label='Variables' }

___ 
### AngleDegrees {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float AngleDegrees  {: .copyable aria-label='Variables' }

___ 
### BlackHpDropChance {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float BlackHpDropChance  {: .copyable aria-label='Variables' }
For maw of void. 
___ 
### BounceLaser {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Entity](../Entity) BounceLaser  {: .copyable aria-label='Variables' }

___ 
### CurveStrength {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float CurveStrength  {: .copyable aria-label='Variables' }
My Reflection. 
___ 
### DisableFollowParent {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean DisableFollowParent  {: .copyable aria-label='Variables' }
Set on children of other lasers, for instance Rubber Cement reflections. Disables m_ParentOffset. 
___ 
### EndPoint {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) EndPoint  {: .copyable aria-label='Variables' }
Will hold the endpoint so it will not need to be recalculated when accessed from extern. 
___ 
### FirstUpdate {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean FirstUpdate  {: .copyable aria-label='Variables' }

___ 
### GridHit {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean GridHit  {: .copyable aria-label='Variables' }
true if laser can be clipped by grid entities and it was clipped at that frame. 
___ 
### HomingLaser {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### HomingLaser HomingLaser  {: .copyable aria-label='Variables' }

___ 
### HomingType {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### LaserHomingType HomingType  {: .copyable aria-label='Variables' }

___ 
### IsActiveRotating {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsActiveRotating  {: .copyable aria-label='Variables' }

___ 
### LaserLength {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float LaserLength  {: .copyable aria-label='Variables' }

___ 
### LastAngleDegrees {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float LastAngleDegrees  {: .copyable aria-label='Variables' }

___ 
### MaxDistance {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float MaxDistance  {: .copyable aria-label='Variables' }
Used to trim brimstone for Azazel (0 - off) 
___ 
### OneHit {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean OneHit  {: .copyable aria-label='Variables' }
Laser hits only once. 
___ 
### ParentOffset {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) ParentOffset  {: .copyable aria-label='Variables' }

___ 
### Radius {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Radius  {: .copyable aria-label='Variables' }

___ 
### RotationDegrees {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float RotationDegrees  {: .copyable aria-label='Variables' }

___ 
### RotationDelay {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int RotationDelay  {: .copyable aria-label='Variables' }

___ 
### RotationSpd {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float RotationSpd  {: .copyable aria-label='Variables' }

___ 
### SampleLaser {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean SampleLaser  {: .copyable aria-label='Variables' }

___ 
### Shrink {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean Shrink  {: .copyable aria-label='Variables' }

___ 
### StartAngleDegrees {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float StartAngleDegrees  {: .copyable aria-label='Variables' }
Some lasers have a bit of random variation in rotation so they need to remember their starting point. 
___ 
### TearFlags {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [TearFlags](../enums/TearFlags) TearFlags  {: .copyable aria-label='Variables' }
float m_DepthOffset; 
float GetDepthOffset(void) const { return m_DepthOffset; } void SetDepthOffset(float Value) { m_DepthOffset = Value; } 
___ 
### Timeout {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int Timeout  {: .copyable aria-label='Variables' }

___ 
