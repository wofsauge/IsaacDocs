# ProjectileFlags

|Enumeration|Value|Description|
|-----------|:---:|-----------|
|SMART|1|follow player|
|EXPLODE|2|explode on impact|
|ACID_GREEN|4|acid splat on impact|
|GOO|8|goo splat on impact|
|GHOST|16|slide through solid entities|
|WIGGLE|32||
|BOOMERANG|60|come back|
|HIT_ENEMIES|128|can hit enemies|
|ACID_RED|256|blood acid|
|GREED|512|Greed projectiles have same effect as Greed enemy's bullets.|
|RED_CREEP|1024|Bullet leaves a red creep|
|ORBIT_CW|2048|Bullet orbits a point clockwise and passes through walls similar to Tiny Planet|
|ORBIT_CCW|4096|Bullet orbits a point counter-clockwise and passes through walls similar to Tiny Planet|
|NO_WALL_COLLIDE|8192||
|CREEP_BROWN|56|Bullet leaves a brown creep|
|FIRE|32768|Projectile was cast by a fireplace|
|BURST|65536|Bursts into more bullets|
|ANY_HEIGHT_ENTITY_HIT|131072|Bullets that can hit at any height|
|CURVE_LEFT|262144|Bullets curve slightly on a circular path|
|CURVE_RIGHT|524288|Bullets curve slightly on a circular path|
|TURN_HORIZONTAL|1048576|Bullets turn and go horizontally and increase in speed when they pass the const static uint64_t player on either side|
|SINE_VELOCITY|2097152|Bullet velocity varies over time as a function of a wave|
|MEGA_WIGGLE|4194304|Like wiggle worm but the wiggling increases in amplitude over time|
|SAWTOOTH_WIGGLE|8388608|Bullets travel on a sawtooth shaped path|
|SLOWED|16777216||
|TRIANGLE|33554432||
|MOVE_TO_PARENT|67108864||
|ACCELERATE|134217728||
|DECELERATE|268435456||
|BURST3|536870912||
|CONTINUUM|1073741824|Bullets reappear from the opposite side as they leave the screen|
|CANT_HIT_PLAYER|2147483648||
|CHANGE_FLAGS_AFTER_TIMEOUT|4294967296|"Change" flags will change the bullet's behavior after a timeout. change m_ProjectileFlags to m_TimeoutProjectileFlags.|
|CHANGE_VELOCITY_AFTER_TIMEOUT|8589934592||
