# Class "ProjectileParams"
## Constructors
[ ](#){: .abp .tooltip .badge }
### [ProjectileParams](../ProjectileParams) () {: aria-label='Constructors' }
#### void [ProjectileParams](../ProjectileParams) ( void ) {: .copyable aria-label='Constructors' }

___ 
## Functions
[ ](#){: .abp .tooltip .badge }
## Variables
### Acceleration {: aria-label='Variables' }
#### float Acceleration  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### BulletFlags {: aria-label='Variables' }
#### int BulletFlags  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### ChangeFlags {: aria-label='Variables' }
#### int ChangeFlags  {: .copyable aria-label='Variables' }

Uses <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlags</a> to define the projectile attributes after the "Changed" state was activated.
The <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlag</a> CHANGE_FLAGS_AFTER_TIMEOUT needs to be set to allow for this change to apply!
____
**Informations about "Changed" State:**

Projectiles can have two states: normal (default) and changed.


Changed state activates when projectile's frame count reaches the value set in <a class="el" href="#adc75976b47b0121d4faf956ee61f2a8d">ChangeTimeout</a>. After that its flags get changed to what was set in <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a> and velocity will be resized to length set in <a class="el" href="#adf22f7bcbe0ffbd7346ede9431c83df1">ChangeVelocity</a>.
____
Also used in: <a class="el" href="class_entity_projectile.html#a6c5a69141dc132104776d0aa4ce8691e">EntityProjectile()</a> WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### ChangeTimeout {: aria-label='Variables' }
#### int ChangeTimeout  {: .copyable aria-label='Variables' }

Number of frames that need to elapse after spawn till the "Changed" state is activated.
The <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlags</a> CHANGE_FLAGS_AFTER_TIMEOUT or CHANGE_VELOCITY_AFTER_TIMEOUT need to be set to allow for this change to apply!
____
**Informations about "Changed" State:**

Projectiles can have two states: normal (default) and changed.


Changed state activates when projectile's frame count reaches the value set in <a class="el" href="#adc75976b47b0121d4faf956ee61f2a8d">ChangeTimeout</a>. After that its flags get changed to what was set in <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a> and velocity will be resized to length set in <a class="el" href="#adf22f7bcbe0ffbd7346ede9431c83df1">ChangeVelocity</a>.
____
Also used in: <a class="el" href="class_entity_projectile.html#adc75976b47b0121d4faf956ee61f2a8d">EntityProjectile()</a> WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### ChangeVelocity {: aria-label='Variables' }
#### float ChangeVelocity  {: .copyable aria-label='Variables' }

Velocity value that gets applied when the "Changed" state is activated.
The <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlag</a> CHANGE_VELOCITY_AFTER_TIMEOUT need to be set to allow for this change to apply!
____
**Informations about "Changed" State:**

Projectiles can have two states: normal (default) and changed.


Changed state activates when projectile's frame count reaches the value set in <a class="el" href="#adc75976b47b0121d4faf956ee61f2a8d">ChangeTimeout</a>. After that its flags get changed to what was set in <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a> and velocity will be resized to length set in <a class="el" href="#adf22f7bcbe0ffbd7346ede9431c83df1">ChangeVelocity</a>.
____
Also used in: <a class="el" href="class_entity_projectile.html#adf22f7bcbe0ffbd7346ede9431c83df1">EntityProjectile()</a> WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### CircleAngle {: aria-label='Variables' }
#### float CircleAngle  {: .copyable aria-label='Variables' }
Angle offset used by fire_projectiles PROJECTILES_CIRCLE type emitter. Random by default. 
___ 
[ ](#){: .abp .tooltip .badge }
### CurvingStrength {: aria-label='Variables' }
#### float CurvingStrength  {: .copyable aria-label='Variables' }
Use very small values for curving like 0.005. 
___ 
[ ](#){: .abp .tooltip .badge }
### DepthOffset {: aria-label='Variables' }
#### float DepthOffset  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### DotProductLimit {: aria-label='Variables' }
#### float DotProductLimit  {: .copyable aria-label='Variables' }
Direction bullets are being fired in Dot product of FireDirectionLimit, bullet direction must be &gt;= this value 
___ 
[ ](#){: .abp .tooltip .badge }
### FallingAccelModifier {: aria-label='Variables' }
#### float FallingAccelModifier  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### FallingSpeedModifier {: aria-label='Variables' }
#### float FallingSpeedModifier  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### FireDirectionLimit {: aria-label='Variables' }
#### [Vector](../Vector) FireDirectionLimit  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### GridCollision {: aria-label='Variables' }
#### boolean GridCollision  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### HeightModifier {: aria-label='Variables' }
#### float HeightModifier  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### HomingStrength {: aria-label='Variables' }
#### float HomingStrength  {: .copyable aria-label='Variables' }
Multiplier on normal homing strength. Unused if SMART bullet flag is not set. 
___ 
[ ](#){: .abp .tooltip .badge }
### [Color](../Color) {: aria-label='Variables' }
#### [Color](../Color) [Color](../Color)  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### PositionOffset {: aria-label='Variables' }
#### [Vector](../Vector) PositionOffset  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Scale {: aria-label='Variables' }
#### float Scale  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Spread {: aria-label='Variables' }
#### float Spread  {: .copyable aria-label='Variables' }
For quad/quint/etc spread shots. 
___ 
[ ](#){: .abp .tooltip .badge }
### TargetPosition {: aria-label='Variables' }
#### [Vector](../Vector) TargetPosition  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Variant {: aria-label='Variables' }
#### int Variant  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### VelocityMulti {: aria-label='Variables' }
#### float VelocityMulti  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### WiggleFrameOffset {: aria-label='Variables' }
#### int WiggleFrameOffset  {: .copyable aria-label='Variables' }
Used to offset the wiggle wave. 
___ 
