# Class "EntityProjectile"
## Functions
### AddChangeFlags () {: aria-label='Functions' }
#### void AddChangeFlags ( int Flags)  {: aria-label='Functions' }

See <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a>.
___ 
### AddFallingAccel () {: aria-label='Functions' }
#### void AddFallingAccel ( float Value)  {: aria-label='Functions' }

___ 
### AddFallingSpeed () {: aria-label='Functions' }
#### void AddFallingSpeed ( float Value)  {: aria-label='Functions' }

___ 
### AddHeight () {: aria-label='Functions' }
#### void AddHeight ( float Value)  {: aria-label='Functions' }

___ 
### AddProjectileFlags () {: aria-label='Functions' }
#### void AddProjectileFlags ( int Flags)  {: aria-label='Functions' }

Uses <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlags</a> to define the projectile attributes.
___ 
### AddScale () {: aria-label='Functions' }
#### void AddScale ( float Value)  {: aria-label='Functions' }

___ 
## Variables
### Acceleration {: aria-label='Variables' }
#### float Acceleration  {: aria-label='Variables' }

___ 
### ChangeFlags {: aria-label='Variables' }
#### int ChangeFlags  {: aria-label='Variables' }

Uses <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlags</a> to define the projectile attributes after the "Changed" state was activated.
The <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlag</a> CHANGE_FLAGS_AFTER_TIMEOUT needs to be set to allow for this change to apply!
<hr/>
**Informations about "Changed" State:**<br/>Projectiles can have two states: normal (default) and changed.<br/>
Changed state activates when projectile's frame count reaches the value set in <a class="el" href="#adc75976b47b0121d4faf956ee61f2a8d">ChangeTimeout</a>. After that its flags get changed to what was set in <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a> and velocity will be resized to length set in <a class="el" href="#adf22f7bcbe0ffbd7346ede9431c83df1">ChangeVelocity</a>.
<hr/>
Also used in: <a class="el" href="class_projectile_params.html#a94280d115acf598bf9f751da3f815a8c">ProjectileParams()</a>
___ 
### ChangeTimeout {: aria-label='Variables' }
#### int ChangeTimeout  {: aria-label='Variables' }

Number of frames that need to elapse after spawn till the "Changed" state is activated.
The <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlags</a> CHANGE_FLAGS_AFTER_TIMEOUT or CHANGE_VELOCITY_AFTER_TIMEOUT need to be set to allow for this change to apply!
<hr/>
**Informations about "Changed" State:**<br/>Projectiles can have two states: normal (default) and changed.<br/>
Changed state activates when projectile's frame count reaches the value set in <a class="el" href="#adc75976b47b0121d4faf956ee61f2a8d">ChangeTimeout</a>. After that its flags get changed to what was set in <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a> and velocity will be resized to length set in <a class="el" href="#adf22f7bcbe0ffbd7346ede9431c83df1">ChangeVelocity</a>.
<hr/>
Also used in: <a class="el" href="class_projectile_params.html#a6738cae72bddb5bbc087f215f7f08bd2">ProjectileParams()</a>
___ 
### ChangeVelocity {: aria-label='Variables' }
#### float ChangeVelocity  {: aria-label='Variables' }

Velocity value that gets applied when the "Changed" state is activated.
The <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlag</a> CHANGE_VELOCITY_AFTER_TIMEOUT need to be set to allow for this change to apply!
<hr/>
**Informations about "Changed" State:**<br/>Projectiles can have two states: normal (default) and changed.<br/>
Changed state activates when projectile's frame count reaches the value set in <a class="el" href="#adc75976b47b0121d4faf956ee61f2a8d">ChangeTimeout</a>. After that its flags get changed to what was set in <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a> and velocity will be resized to length set in <a class="el" href="#adf22f7bcbe0ffbd7346ede9431c83df1">ChangeVelocity</a>.
<hr/>
Also used in: <a class="el" href="class_projectile_params.html#a8d480667cf7ba94ee10bbb9dcc008c6f">ProjectileParams()</a>
___ 
### CurvingStrength {: aria-label='Variables' }
#### float CurvingStrength  {: aria-label='Variables' }

___ 
### Damage {: aria-label='Variables' }
#### float Damage  {: aria-label='Variables' }

___ 
### DepthOffset {: aria-label='Variables' }
#### float DepthOffset  {: aria-label='Variables' }

___ 
### FallingAccel {: aria-label='Variables' }
#### float FallingAccel  {: aria-label='Variables' }

___ 
### FallingSpeed {: aria-label='Variables' }
#### float FallingSpeed  {: aria-label='Variables' }

___ 
### Height {: aria-label='Variables' }
#### float Height  {: aria-label='Variables' }

Defines the height of a projectile. Height should be a negative value. Default is `:::cpp -23`.
___ 
### HomingStrength {: aria-label='Variables' }
#### float HomingStrength  {: aria-label='Variables' }

___ 
### ProjectileFlags {: aria-label='Variables' }
#### int ProjectileFlags  {: aria-label='Variables' }

Uses <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlags</a> to define the projectile attributes.
___ 
### Scale {: aria-label='Variables' }
#### float Scale  {: aria-label='Variables' }

___ 
### WiggleFrameOffset {: aria-label='Variables' }
#### int WiggleFrameOffset  {: aria-label='Variables' }

___ 
