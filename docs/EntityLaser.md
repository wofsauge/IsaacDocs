---
tags:
  - Class
---
# Class "EntityLaser"

## Class Diagram
--8<-- "docs/snippets/EntityClassDiagram.md"
## Functions
### Add·Tear·Flags () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddTearFlags ( [TearFlags](enums/TearFlags.md) Flags ) {: .copyable aria-label='Functions' }

___
### Calculate·End·Point () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### static [Vector](Vector.md) CalculateEndPoint ( [Vector](Vector.md) Start, [Vector](Vector.md) Dir, [Vector](Vector.md) PositionOffset, [Entity](Entity.md) Parent, float Margin ) {: .copyable aria-label='Functions' }

___
### Clear·Tear·Flags () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void ClearTearFlags ( [TearFlags](enums/TearFlags.md) Flags ) {: .copyable aria-label='Functions' }

___
### Get·End·Point () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Vector](Vector.md) GetEndPoint ( ) {: .copyable aria-label='Functions' }

___
### Get·Non·Optimized·Samples () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [VectorList](CppContainer_Vector_VectorList.md) GetNonOptimizedSamples ( ) {: .copyable aria-label='Functions' }

Returns a VectorList representing the path of the laser. Seems to typically return 51 evenly-spaced points along the laser's path, as opposed to [`GetSamples()`](#GetSamples) which only returns the minimum needed points to represent the path of the laser.

???+ example "Example Usage"
    ```lua
    local samplePoints = laser:GetNonOptimizedSamples()

    for i=0, #samplePoints-1 do
        local pos = samplePoints:Get(i)
        ...
    end
    ```

___
### Get·Render·Z () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetRenderZ ( ) {: .copyable aria-label='Functions' }

___
### Get·Samples () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [VectorList](CppContainer_Vector_VectorList.md) GetSamples ( ) {: .copyable aria-label='Functions' }

Returns a VectorList representing the path of the laser. Unlike [`GetNonOptimizedSamples()`](#GetNonOptimizedSamples), this function returns as few points as possible, while still correctly representing the path of the laser.

For example, for a completely straight laser, [`GetNonOptimizedSamples()`](#GetNonOptimizedSamples) will still return 51 points as always, but this function only only return 2.

???+ example "Example Usage"
    ```lua
    local samplePoints = laser:GetSamples()

    for i=0, #samplePoints-1 do
        local pos = samplePoints:Get(i)
        ...
    end
    ```

___
### Has·Tear·Flags () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean HasTearFlags ( [TearFlags](enums/TearFlags.md) Flags ) {: .copyable aria-label='Functions' }

___
### Is·Circle·Laser () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsCircleLaser ( ) {: .copyable aria-label='Functions' }

???- note "Note"
    This function cannot differentiate between different types of Circle Laser, however these may be identified by their SubType:

    * 0 - Linear Laser (Typical laser with a start and end point)
    * 1 - Ring Ludovico (Controlled laser ring for Ludo synergies)
    * 2 - Ring Projectile (Tech X)
    * 3 - Ring Follow Parent (Maw of the Void)
    * 4 - No Impact (No impact splash, e.g. Tech Zero)

___
### Is·Sample·Laser () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsSampleLaser ( ) {: .copyable aria-label='Functions' }

___
### Set·Active·Rotation () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetActiveRotation ( int Delay, float AngleDegrees, float RotationSpd, boolean TimeoutComplete ) {: .copyable aria-label='Functions' }

___
### Set·Black·Hp·Drop·Chance () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetBlackHpDropChance ( float Chance ) {: .copyable aria-label='Functions' }

___
### Set·Homing·Type () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetHomingType ( LaserHomingType Type ) {: .copyable aria-label='Functions' }

___
### Set·Max·Distance () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetMaxDistance ( float Distance ) {: .copyable aria-label='Functions' }

___
### Set·Multidimensional·Touched () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetMultidimensionalTouched ( boolean Value ) {: .copyable aria-label='Functions' }

___
### Set·One·Hit () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetOneHit ( boolean Value ) {: .copyable aria-label='Functions' }

___
### Set·Timeout () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetTimeout ( int Value ) {: .copyable aria-label='Functions' }

___
### Shoot·Angle () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### static [EntityLaser](EntityLaser.md) ShootAngle ( int Variant, [Vector](Vector.md) SourcePos, float AngleDegrees, int Timeout, [Vector](Vector.md) PosOffset, [Entity](Entity.md) Source ) {: .copyable aria-label='Functions' }
static helper to simplify spawning lasers
___
## Variables
### Angle {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Angle  {: .copyable aria-label='Variables' }

___
### Angle·Degrees {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float AngleDegrees  {: .copyable aria-label='Variables' }

___
### Black·Hp·Drop·Chance {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float BlackHpDropChance  {: .copyable aria-label='Variables' }
For maw of void.
___
### Bounce·Laser {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.md) BounceLaser  {: .copyable aria-label='Variables' data-altreturn='nil' }

___
### Curve·Strength {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float CurveStrength  {: .copyable aria-label='Variables' }
My Reflection.
___
### Disable·Follow·Parent {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean DisableFollowParent  {: .copyable aria-label='Variables' }
Set on children of other lasers, for instance Rubber Cement reflections. Disables m_ParentOffset.
___
### End·Point {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) EndPoint  {: .copyable aria-label='Variables' }
Will hold the endpoint so it will not need to be recalculated when accessed from extern.
___
### First·Update {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean FirstUpdate  {: .copyable aria-label='Variables' }

___
### Grid·Hit {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean GridHit  {: .copyable aria-label='Variables' }
true if laser can be clipped by grid entities and it was clipped at that frame.
___
### Homing·Laser {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### HomingLaser HomingLaser  {: .copyable aria-label='Variables' }

___
### Homing·Type {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### LaserHomingType HomingType  {: .copyable aria-label='Variables' }

___
### Is·Active·Rotating {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsActiveRotating  {: .copyable aria-label='Variables' }

___
### Laser·Length {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float LaserLength  {: .copyable aria-label='Variables' }

___
### Last·Angle·Degrees {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float LastAngleDegrees  {: .copyable aria-label='Variables' }

___
### Max·Distance {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float MaxDistance  {: .copyable aria-label='Variables' }
Used to trim brimstone for Azazel (0 - off)
___
### One·Hit {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean OneHit  {: .copyable aria-label='Variables' }
Laser hits only once.
___
### Parent·Offset {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) ParentOffset  {: .copyable aria-label='Variables' }

___
### Radius {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Radius  {: .copyable aria-label='Variables' }

___
### Rotation·Degrees {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float RotationDegrees  {: .copyable aria-label='Variables' }

___
### Rotation·Delay {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int RotationDelay  {: .copyable aria-label='Variables' }

___
### Rotation·Spd {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float RotationSpd  {: .copyable aria-label='Variables' }

___
### Sample·Laser {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean SampleLaser  {: .copyable aria-label='Variables' }

___
### Shrink {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean Shrink  {: .copyable aria-label='Variables' }

___
### Start·Angle·Degrees {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float StartAngleDegrees  {: .copyable aria-label='Variables' }
Some lasers have a bit of random variation in rotation so they need to remember their starting point.
___
### Tear·Flags {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [TearFlags](enums/TearFlags.md) TearFlags  {: .copyable aria-label='Variables' }
___
### Timeout {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Timeout  {: .copyable aria-label='Variables' }

___
