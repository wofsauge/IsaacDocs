# Class "EntityProjectile"
## Functions
### AddChangeFlags () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddChangeFlags ( int Flags ) {: .copyable aria-label='Functions' }

See <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a>. WRONG PARSING 
{: .wrongParsing }
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

Uses <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlags</a> to define the projectile attributes. WRONG PARSING 
{: .wrongParsing }
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

Uses <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlags</a> to define the projectile attributes after the "Changed" state was activated.
The <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlag</a> CHANGE_FLAGS_AFTER_TIMEOUT needs to be set to allow for this change to apply!
____
**Informations about "Changed" State:**

Projectiles can have two states: normal (default) and changed.


Changed state activates when projectile's frame count reaches the value set in <a class="el" href="#adc75976b47b0121d4faf956ee61f2a8d">ChangeTimeout</a>. After that its flags get changed to what was set in <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a> and velocity will be resized to length set in <a class="el" href="#adf22f7bcbe0ffbd7346ede9431c83df1">ChangeVelocity</a>.
____
Also used in: <a class="el" href="class_projectile_params.html#a94280d115acf598bf9f751da3f815a8c">ProjectileParams()</a> WRONG PARSING 
{: .wrongParsing }
___ 
### ChangeTimeout {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int ChangeTimeout  {: .copyable aria-label='Variables' }

Number of frames that need to elapse after spawn till the "Changed" state is activated.
The <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlags</a> CHANGE_FLAGS_AFTER_TIMEOUT or CHANGE_VELOCITY_AFTER_TIMEOUT need to be set to allow for this change to apply!
____
**Informations about "Changed" State:**

Projectiles can have two states: normal (default) and changed.


Changed state activates when projectile's frame count reaches the value set in <a class="el" href="#adc75976b47b0121d4faf956ee61f2a8d">ChangeTimeout</a>. After that its flags get changed to what was set in <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a> and velocity will be resized to length set in <a class="el" href="#adf22f7bcbe0ffbd7346ede9431c83df1">ChangeVelocity</a>.
____
Also used in: <a class="el" href="class_projectile_params.html#a6738cae72bddb5bbc087f215f7f08bd2">ProjectileParams()</a> WRONG PARSING 
{: .wrongParsing }
___ 
### ChangeVelocity {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float ChangeVelocity  {: .copyable aria-label='Variables' }

Velocity value that gets applied when the "Changed" state is activated.
The <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlag</a> CHANGE_VELOCITY_AFTER_TIMEOUT need to be set to allow for this change to apply!
____
**Informations about "Changed" State:**

Projectiles can have two states: normal (default) and changed.


Changed state activates when projectile's frame count reaches the value set in <a class="el" href="#adc75976b47b0121d4faf956ee61f2a8d">ChangeTimeout</a>. After that its flags get changed to what was set in <a class="el" href="#a6c5a69141dc132104776d0aa4ce8691e">ChangeFlags</a> and velocity will be resized to length set in <a class="el" href="#adf22f7bcbe0ffbd7346ede9431c83df1">ChangeVelocity</a>.
____
Also used in: <a class="el" href="class_projectile_params.html#a8d480667cf7ba94ee10bbb9dcc008c6f">ProjectileParams()</a> WRONG PARSING 
{: .wrongParsing }
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

Uses <a class="el" href="group__enums.html#ga0302119ed82822df78af258ee457e6a6">ProjectileFlags</a> to define the projectile attributes. WRONG PARSING 
{: .wrongParsing }
___ 
### Scale {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Scale  {: .copyable aria-label='Variables' }

___ 
### WiggleFrameOffset {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int WiggleFrameOffset  {: .copyable aria-label='Variables' }

___ 
