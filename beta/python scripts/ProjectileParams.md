# Class "ProjectileParams"
## Functions
### [ProjectileParams](../ProjectileParams) () {: aria-label='Functions' }
#### void [ProjectileParams](../ProjectileParams) ( void )  {: aria-label='Functions' }

___ 
## Variables
### Acceleration {: aria-label='Variables' }
#### float Acceleration  {: aria-label='Variables' }

___ 
### BulletFlags {: aria-label='Variables' }
#### int BulletFlags  {: aria-label='Variables' }

___ 
### ChangeFlags {: aria-label='Variables' }
#### int ChangeFlags  {: aria-label='Variables' }

Uses <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlags</a> to define the projectile attributes after the "Changed" state was activated.
The <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlag</a> CHANGE_FLAGS_AFTER_TIMEOUT needs to be set to allow for this change to apply!
<hr/>
**Informations about "Changed" State:**<br/>Projectiles can have two states: normal (default) and changed.<br/>
Changed state activates when projectile's frame count reaches the value set in <a class="el" href="#adc75976b47b0121d4faf956ee61f2a8d">ChangeTimeout</a>. After that its flags get changed to what was set in <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a> and velocity will be resized to length set in <a class="el" href="#adf22f7bcbe0ffbd7346ede9431c83df1">ChangeVelocity</a>.
<hr/>
Also used in: <a class="el" href="class_entity_projectile.html#a6c5a69141dc132104776d0aa4ce8691e">EntityProjectile()</a>
___ 
### ChangeTimeout {: aria-label='Variables' }
#### int ChangeTimeout  {: aria-label='Variables' }

Number of frames that need to elapse after spawn till the "Changed" state is activated.
The <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlags</a> CHANGE_FLAGS_AFTER_TIMEOUT or CHANGE_VELOCITY_AFTER_TIMEOUT need to be set to allow for this change to apply!
<hr/>
**Informations about "Changed" State:**<br/>Projectiles can have two states: normal (default) and changed.<br/>
Changed state activates when projectile's frame count reaches the value set in <a class="el" href="#adc75976b47b0121d4faf956ee61f2a8d">ChangeTimeout</a>. After that its flags get changed to what was set in <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a> and velocity will be resized to length set in <a class="el" href="#adf22f7bcbe0ffbd7346ede9431c83df1">ChangeVelocity</a>.
<hr/>
Also used in: <a class="el" href="class_entity_projectile.html#adc75976b47b0121d4faf956ee61f2a8d">EntityProjectile()</a>
___ 
### ChangeVelocity {: aria-label='Variables' }
#### float ChangeVelocity  {: aria-label='Variables' }

Velocity value that gets applied when the "Changed" state is activated.
The <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlag</a> CHANGE_VELOCITY_AFTER_TIMEOUT need to be set to allow for this change to apply!
<hr/>
**Informations about "Changed" State:**<br/>Projectiles can have two states: normal (default) and changed.<br/>
Changed state activates when projectile's frame count reaches the value set in <a class="el" href="#adc75976b47b0121d4faf956ee61f2a8d">ChangeTimeout</a>. After that its flags get changed to what was set in <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a> and velocity will be resized to length set in <a class="el" href="#adf22f7bcbe0ffbd7346ede9431c83df1">ChangeVelocity</a>.
<hr/>
Also used in: <a class="el" href="class_entity_projectile.html#adf22f7bcbe0ffbd7346ede9431c83df1">EntityProjectile()</a>
___ 
### CircleAngle {: aria-label='Variables' }
#### float CircleAngle  {: aria-label='Variables' }
Angle offset used by fire_projectiles PROJECTILES_CIRCLE type emitter. Random by default. 
___ 
### CurvingStrength {: aria-label='Variables' }
#### float CurvingStrength  {: aria-label='Variables' }
Use very small values for curving like 0.005. 
___ 
### DepthOffset {: aria-label='Variables' }
#### float DepthOffset  {: aria-label='Variables' }

___ 
### DotProductLimit {: aria-label='Variables' }
#### float DotProductLimit  {: aria-label='Variables' }
Direction bullets are being fired in Dot product of FireDirectionLimit, bullet direction must be &gt;= this value 
___ 
### FallingAccelModifier {: aria-label='Variables' }
#### float FallingAccelModifier  {: aria-label='Variables' }

___ 
### FallingSpeedModifier {: aria-label='Variables' }
#### float FallingSpeedModifier  {: aria-label='Variables' }

___ 
### FireDirectionLimit {: aria-label='Variables' }
#### [Vector](../Vector) FireDirectionLimit  {: aria-label='Variables' }

___ 
### GridCollision {: aria-label='Variables' }
#### boolean GridCollision  {: aria-label='Variables' }

___ 
### HeightModifier {: aria-label='Variables' }
#### float HeightModifier  {: aria-label='Variables' }

___ 
### HomingStrength {: aria-label='Variables' }
#### float HomingStrength  {: aria-label='Variables' }
Multiplier on normal homing strength. Unused if SMART bullet flag is not set. 
___ 
### [Color](../Color) {: aria-label='Variables' }
#### [Color](../Color) [Color](../Color)  {: aria-label='Variables' }

___ 
### PositionOffset {: aria-label='Variables' }
#### [Vector](../Vector) PositionOffset  {: aria-label='Variables' }

___ 
### Scale {: aria-label='Variables' }
#### float Scale  {: aria-label='Variables' }

___ 
### Spread {: aria-label='Variables' }
#### float Spread  {: aria-label='Variables' }
For quad/quint/etc spread shots. 
___ 
### TargetPosition {: aria-label='Variables' }
#### [Vector](../Vector) TargetPosition  {: aria-label='Variables' }

___ 
### Variant {: aria-label='Variables' }
#### int Variant  {: aria-label='Variables' }

___ 
### VelocityMulti {: aria-label='Variables' }
#### float VelocityMulti  {: aria-label='Variables' }

___ 
### WiggleFrameOffset {: aria-label='Variables' }
#### int WiggleFrameOffset  {: aria-label='Variables' }
Used to offset the wiggle wave. 
___ 
