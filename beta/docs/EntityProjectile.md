# Class "EntityProjectile"
## Functions
### AddChangeFlags () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddChangeFlags ( int Flags ) {: .copyable aria-label='Functions' }

See [ChangeFlags](#ChangeFlags).
___ 
### AddFallingAccel () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddFallingAccel ( float Value ) {: .copyable aria-label='Functions' }

___ 
### AddFallingSpeed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddFallingSpeed ( float Value ) {: .copyable aria-label='Functions' }

___ 
### AddHeight () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddHeight ( float Value ) {: .copyable aria-label='Functions' }

___ 
### AddProjectileFlags () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddProjectileFlags ( int Flags ) {: .copyable aria-label='Functions' }

Uses [ProjectileFlags](../enums/ProjectileFlags) to define the projectile attributes.
___ 
### AddScale () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddScale ( float Value ) {: .copyable aria-label='Functions' }

___ 
## Variables
### Acceleration {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Acceleration  {: .copyable aria-label='Variables' }

___ 
### ChangeFlags {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int ChangeFlags  {: .copyable aria-label='Variables' }

Uses [ProjectileFlags](../enums/ProjectileFlags) to define the projectile attributes after the "Changed" state was activated.
The [ProjectileFlag](../enums/ProjectileFlags).CHANGE_FLAGS_AFTER_TIMEOUT needs to be set to allow for this change to apply!
____
**Informations about "Changed" State:**

Projectiles can have two states: normal (default) and changed.


Changed state activates when projectile's frame count reaches the value set in [ChangeTimeout](#ChangeTimeout). After that its flags get changed to what was set in [ChangeFlags](#ChangeFlags) and velocity will be resized to length set in [ChangeVelocity](#ChangeVelocity).
____
Also used in: [ProjectileParams()](../ProjectileParams)
___ 
### ChangeTimeout {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int ChangeTimeout  {: .copyable aria-label='Variables' }

Number of frames that need to elapse after spawn till the "Changed" state is activated.
The [ProjectileFlags](../enums/ProjectileFlags).CHANGE_FLAGS_AFTER_TIMEOUT or CHANGE_VELOCITY_AFTER_TIMEOUT need to be set to allow for this change to apply!
____
**Informations about "Changed" State:**

Projectiles can have two states: normal (default) and changed.


Changed state activates when projectile's frame count reaches the value set in [ChangeTimeout](#ChangeTimeout). After that its flags get changed to what was set in [ChangeFlags](#ChangeFlags) and velocity will be resized to length set in [ChangeVelocity](#ChangeVelocity).
____
Also used in: [ProjectileParams()](../ProjectileParams)
___ 
### ChangeVelocity {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float ChangeVelocity  {: .copyable aria-label='Variables' }

Velocity value that gets applied when the "Changed" state is activated.
The [ProjectileFlag](../enums/ProjectileFlags).CHANGE_VELOCITY_AFTER_TIMEOUT need to be set to allow for this change to apply!
____
**Informations about "Changed" State:**

Projectiles can have two states: normal (default) and changed.


Changed state activates when projectile's frame count reaches the value set in [ChangeTimeout](#ChangeTimeout). After that its flags get changed to what was set in [ChangeFlags](#ChangeFlags) and velocity will be resized to length set in [ChangeVelocity](#ChangeVelocity).
____
Also used in: [ProjectileParams()](../ProjectileParams)
___ 
### CurvingStrength {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float CurvingStrength  {: .copyable aria-label='Variables' }

___ 
### Damage {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Damage  {: .copyable aria-label='Variables' }

___ 
### DepthOffset {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float DepthOffset  {: .copyable aria-label='Variables' }

___ 
### FallingAccel {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float FallingAccel  {: .copyable aria-label='Variables' }

___ 
### FallingSpeed {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float FallingSpeed  {: .copyable aria-label='Variables' }

___ 
### Height {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Height  {: .copyable aria-label='Variables' }

Defines the height of a projectile. Height should be a negative value. Default is `:::lua -23`.
___ 
### HomingStrength {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float HomingStrength  {: .copyable aria-label='Variables' }

___ 
### [ProjectileFlags](../enums/ProjectileFlags) {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int [ProjectileFlags](../enums/ProjectileFlags)  {: .copyable aria-label='Variables' }

Uses [ProjectileFlags](../enums/ProjectileFlags) to define the projectile attributes.
___ 
### Scale {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Scale  {: .copyable aria-label='Variables' }

___ 
### WiggleFrameOffset {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int WiggleFrameOffset  {: .copyable aria-label='Variables' }

___ 
