---
tags:
  - Globals
  - Class
search:
  boost: 0.25
---
# Class "ProjectileParams"

???+ info
    This class can be accessed by using its constructor:

    ???+ example "Example Code"
        ```lua
        local myProjectileParams = ProjectileParams()
        ```

## Constructors
### Projectile·Params () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [ProjectileParams](ProjectileParams.md) ProjectileParams ( ) {: .copyable aria-label='Constructors' }

___
## Variables
### Acceleration {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Acceleration  {: .copyable aria-label='Variables' }

___
### Bullet·Flags {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int BulletFlags  {: .copyable aria-label='Variables' }

___
### Change·Flags {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [ProjectileFlags](enums/ProjectileFlags.md) ChangeFlags  {: .copyable aria-label='Variables' }

Uses [ProjectileFlags](enums/ProjectileFlags.md) to define the projectile attributes after the "Changed" state was activated.
The [ProjectileFlag](enums/ProjectileFlags.md).CHANGE_FLAGS_AFTER_TIMEOUT needs to be set to allow for this change to apply!
____
**Informations about "Changed" State:**

Projectiles can have two states: normal (default) and changed.


Changed state activates when projectile's frame count reaches the value set in [ChangeTimeout](#changetimeout). After that its flags get changed to what was set in [ChangeFlags](#changeflags) and velocity will be resized to length set in [ChangeVelocity](#changevelocity).
____
Also used in: [EntityProjectile](EntityProjectile.md)
___
### Change·Timeout {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int ChangeTimeout  {: .copyable aria-label='Variables' }

Number of frames that need to elapse after spawn till the "Changed" state is activated.
The [ProjectileFlag](enums/ProjectileFlags.md).CHANGE_FLAGS_AFTER_TIMEOUT or CHANGE_VELOCITY_AFTER_TIMEOUT need to be set to allow for this change to apply!
____
**Informations about "Changed" State:**

Projectiles can have two states: normal (default) and changed.


Changed state activates when projectile's frame count reaches the value set in [ChangeTimeout](#changetimeout). After that its flags get changed to what was set in [ChangeFlags](#changeflags) and velocity will be resized to length set in [ChangeVelocity](#changevelocity).
____
Also used in: [EntityProjectile](EntityProjectile.md)
___
### Change·Velocity {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float ChangeVelocity  {: .copyable aria-label='Variables' }

Velocity value that gets applied when the "Changed" state is activated.
The [ProjectileFlag](enums/ProjectileFlags.md).CHANGE_VELOCITY_AFTER_TIMEOUT need to be set to allow for this change to apply!
____
**Informations about "Changed" State:**

Projectiles can have two states: normal (default) and changed.


Changed state activates when projectile's frame count reaches the value set in [ChangeTimeout](#changetimeout). After that its flags get changed to what was set in [ChangeFlags](#changeflags) and velocity will be resized to length set in [ChangeVelocity](#changevelocity).
____
Also used in: [EntityProjectile](EntityProjectile.md)
___
### Circle·Angle {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float CircleAngle  {: .copyable aria-label='Variables' }
Angle offset used by fire_projectiles PROJECTILES_CIRCLE type emitter. Random by default.
___
### Color {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Color](Color.md) Color  {: .copyable aria-label='Variables' }

___
### Curving·Strength {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float CurvingStrength  {: .copyable aria-label='Variables' }
Use very small values for curving like 0.005.
___
### Depth·Offset {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float DepthOffset  {: .copyable aria-label='Variables' }

___
### Dot·Product·Limit {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float DotProductLimit  {: .copyable aria-label='Variables' }
Direction bullets are being fired in Dot product of FireDirectionLimit, bullet direction must be &gt;= this value
___
### Falling·Accel·Modifier {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float FallingAccelModifier  {: .copyable aria-label='Variables' }

___
### Falling·Speed·Modifier {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float FallingSpeedModifier  {: .copyable aria-label='Variables' }

___
### Fire·Direction·Limit {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) FireDirectionLimit  {: .copyable aria-label='Variables' }

___
### Grid·Collision {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean GridCollision  {: .copyable aria-label='Variables' }

___
### Height·Modifier {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float HeightModifier  {: .copyable aria-label='Variables' }

___
### Homing·Strength {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float HomingStrength  {: .copyable aria-label='Variables' }
Multiplier on normal homing strength. Unused if SMART bullet flag is not set.
___
### Position·Offset {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) PositionOffset  {: .copyable aria-label='Variables' }

___
### Scale {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Scale  {: .copyable aria-label='Variables' }

___
### Spread {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Spread  {: .copyable aria-label='Variables' }
For quad/quint/etc spread shots.
___
### Target·Position {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) TargetPosition  {: .copyable aria-label='Variables' }

___
### Variant {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Variant  {: .copyable aria-label='Variables' }

___
### Velocity·Multi {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float VelocityMulti  {: .copyable aria-label='Variables' }

___
### Wiggle·Frame·Offset {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int WiggleFrameOffset  {: .copyable aria-label='Variables' }
Used to offset the wiggle wave.
___
