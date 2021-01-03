# Class "ProjectileParams"
___ 
## void ProjectileParams (void )

___ 
## float Acceleration

___ 
## integer BulletFlags

___ 
## integer ChangeFlags

Uses <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlags</a> to define the projectile attributes after the "Changed" state was activated.
The <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlag</a> CHANGE_FLAGS_AFTER_TIMEOUT needs to be set to allow for this change to apply!
<hr/>
**Informations about "Changed" State:**<br/>Projectiles can have two states: normal (default) and changed.<br/>
Changed state activates when projectile's frame count reaches the value set in <a class="el" href="#adc75976b47b0121d4faf956ee61f2a8d">ChangeTimeout</a>. After that its flags get changed to what was set in <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a> and velocity will be resized to length set in <a class="el" href="#adf22f7bcbe0ffbd7346ede9431c83df1">ChangeVelocity</a>.
<hr/>
Also used in: <a class="el" href="class_entity_projectile.html#a6c5a69141dc132104776d0aa4ce8691e">EntityProjectile()</a>
___ 
## integer ChangeTimeout

Number of frames that need to elapse after spawn till the "Changed" state is activated.
The <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlags</a> CHANGE_FLAGS_AFTER_TIMEOUT or CHANGE_VELOCITY_AFTER_TIMEOUT need to be set to allow for this change to apply!
<hr/>
**Informations about "Changed" State:**<br/>Projectiles can have two states: normal (default) and changed.<br/>
Changed state activates when projectile's frame count reaches the value set in <a class="el" href="#adc75976b47b0121d4faf956ee61f2a8d">ChangeTimeout</a>. After that its flags get changed to what was set in <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a> and velocity will be resized to length set in <a class="el" href="#adf22f7bcbe0ffbd7346ede9431c83df1">ChangeVelocity</a>.
<hr/>
Also used in: <a class="el" href="class_entity_projectile.html#adc75976b47b0121d4faf956ee61f2a8d">EntityProjectile()</a>
___ 
## float ChangeVelocity

Velocity value that gets applied when the "Changed" state is activated.
The <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlag</a> CHANGE_VELOCITY_AFTER_TIMEOUT need to be set to allow for this change to apply!
<hr/>
**Informations about "Changed" State:**<br/>Projectiles can have two states: normal (default) and changed.<br/>
Changed state activates when projectile's frame count reaches the value set in <a class="el" href="#adc75976b47b0121d4faf956ee61f2a8d">ChangeTimeout</a>. After that its flags get changed to what was set in <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a> and velocity will be resized to length set in <a class="el" href="#adf22f7bcbe0ffbd7346ede9431c83df1">ChangeVelocity</a>.
<hr/>
Also used in: <a class="el" href="class_entity_projectile.html#adf22f7bcbe0ffbd7346ede9431c83df1">EntityProjectile()</a>
___ 
## float CircleAngle
Angle offset used by fire_projectiles PROJECTILES_CIRCLE type emitter. Random by default. 
___ 
## float CurvingStrength
Use very small values for curving like 0.005. 
___ 
## float DepthOffset

___ 
## float DotProductLimit
Direction bullets are being fired in Dot product of FireDirectionLimit, bullet direction must be &gt;= this value 
___ 
## float FallingAccelModifier

___ 
## float FallingSpeedModifier

___ 
## Vector FireDirectionLimit

___ 
## boolean GridCollision

___ 
## float HeightModifier

___ 
## float HomingStrength
Multiplier on normal homing strength. Unused if SMART bullet flag is not set. 
___ 
## Color Color

___ 
## Vector PositionOffset

___ 
## float Scale

___ 
## float Spread
For quad/quint/etc spread shots. 
___ 
## Vector TargetPosition

___ 
## integer Variant

___ 
## float VelocityMulti

___ 
## integer WiggleFrameOffset
Used to offset the wiggle wave. 
___ 
