# Class "EntityLaser"
___ 
## static Vector CalculateEndPoint (Vector Start, Vector Dir, Vector PositionOffset, Entity Parent, float Margin )

___ 
## const Vector GetEndPoint ()

___ 
## const HomingLaser::SampleList GetNonOptimizedSamples ()

___ 
## integer GetRenderZ ()

___ 
## const HomingLaser::SampleList GetSamples ()

___ 
## boolean IsCircleLaser ()

___ 
## boolean IsSampleLaser ()

___ 
## void SetActiveRotation (integer Delay, float AngleDegrees, float RotationSpd, boolean TimeoutComplete )

___ 
## void SetBlackHpDropChance (float Chance)

___ 
## void SetHomingType (LaserHomingType Type)

___ 
## void SetMaxDistance (float Distance)

___ 
## void SetMultidimensionalTouched (boolean Value)

___ 
## void SetOneHit (boolean Value)

___ 
## void SetTimeout (integer Value)

___ 
## static EntityLaser ShootAngle (integer Variant, Vector SourcePos, float AngleDegrees, integer Timeout, Vector PosOffset, Entity Source )
static helper to simplify spawning lasers 
___ 
## float Angle

___ 
## float AngleDegrees

___ 
## float BlackHpDropChance
For maw of void. 
___ 
## Entity BounceLaser

___ 
## float CurveStrength
My Reflection. 
___ 
## boolean DisableFollowParent
Set on children of other lasers, for instance Rubber Cement reflections. Disables m_ParentOffset. 
___ 
## Vector EndPoint
Will hold the endpoint so it will not need to be recalculated when accessed from extern. 
___ 
## boolean FirstUpdate

___ 
## boolean GridHit
true if laser can be clipped by grid entities and it was clipped at that frame. 
___ 
## HomingLaser HomingLaser

___ 
## LaserHomingType HomingType

___ 
## boolean IsActiveRotating

___ 
## float LaserLength

___ 
## float LastAngleDegrees

___ 
## float MaxDistance
Used to trim brimstone for Azazel (0 - off) 
___ 
## boolean OneHit
Laser hits only once. 
___ 
## Vector ParentOffset

___ 
## float Radius

___ 
## float RotationDegrees

___ 
## integer RotationDelay

___ 
## float RotationSpd

___ 
## boolean SampleLaser

___ 
## boolean Shrink

___ 
## float StartAngleDegrees
Some lasers have a bit of random variation in rotation so they need to remember their starting point. 
___ 
## integer TearFlags
float m_DepthOffset; 
float GetDepthOffset(void) const { return m_DepthOffset; } void SetDepthOffset(float Value) { m_DepthOffset = Value; } 
___ 
## integer Timeout

___ 
