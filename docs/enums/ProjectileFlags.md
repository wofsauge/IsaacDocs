# Enum "ProjectileFlags"
|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .abp .tooltip .badge }|1 |SMART {: .copyable } | follow player <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<1 |EXPLODE {: .copyable } | explode on impact <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<2 |ACID_GREEN {: .copyable } | acid splat on impact <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<3 |GOO {: .copyable } | goo splat on impact <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<4 |GHOST {: .copyable } | slide through solid entities <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<5 |WIGGLE {: .copyable } |  | 
|[ ](#){: .abp .tooltip .badge }|1<<6 |BOOMERANG {: .copyable } | come back <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<7 |HIT_ENEMIES {: .copyable } | can hit enemies <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<8 |ACID_RED {: .copyable } | blood acid <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<9 |GREED {: .copyable } | Greed projectiles have same effect as Greed enemy's bullets. <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<10 |RED_CREEP {: .copyable } | Bullet leaves a red creep <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<11 |ORBIT_CW {: .copyable } | Bullet orbits a point clockwise and passes through walls similar to Tiny Planet <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<12 |ORBIT_CCW {: .copyable } | Bullet orbits a point counter-clockwise and passes through walls similar to Tiny Planet <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<13 |NO_WALL_COLLIDE {: .copyable } |  | 
|[ ](#){: .abp .tooltip .badge }|1<<14 |CREEP_BROWN {: .copyable } | Bullet leaves a brown creep <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<15 |FIRE {: .copyable } | Projectile was cast by a fireplace <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<16 |BURST {: .copyable } | Bursts into more bullets <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<17 |ANY_HEIGHT_ENTITY_HIT {: .copyable } | Bullets that can hit at any height <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<18 |CURVE_LEFT {: .copyable } | Bullets curve slightly on a circular path <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<19 |CURVE_RIGHT {: .copyable } | Bullets curve slightly on a circular path <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<20 |TURN_HORIZONTAL {: .copyable } | Bullets turn and go horizontally and increase in speed when they pass the const static uint64_t player on either side <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<21 |SINE_VELOCITY {: .copyable } | Bullet velocity varies over time as a function of a wave <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<22 |MEGA_WIGGLE {: .copyable } | Like wiggle worm but the wiggling increases in amplitude over time <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<23 |SAWTOOTH_WIGGLE {: .copyable } | Bullets travel on a sawtooth shaped path <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<24 |SLOWED {: .copyable } |  | 
|[ ](#){: .abp .tooltip .badge }|1<<25 |TRIANGLE {: .copyable } |  | 
|[ ](#){: .abp .tooltip .badge }|1<<26 |MOVE_TO_PARENT {: .copyable } |  | 
|[ ](#){: .abp .tooltip .badge }|1<<27 |ACCELERATE {: .copyable } |  | 
|[ ](#){: .abp .tooltip .badge }|1<<28 |DECELERATE {: .copyable } |  | 
|[ ](#){: .abp .tooltip .badge }|1<<29 |BURST3 {: .copyable } |  | 
|[ ](#){: .abp .tooltip .badge }|1<<30 |CONTINUUM {: .copyable } | Bullets reappear from the opposite side as they leave the screen <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<31 |CANT_HIT_PLAYER {: .copyable } |  | 
|[ ](#){: .abp .tooltip .badge }|1<<32 |CHANGE_FLAGS_AFTER_TIMEOUT {: .copyable } | "Change" flags will change the bullet's behavior after a timeout. change m_ProjectileFlags to m_TimeoutProjectileFlags. <br> | 
|[ ](#){: .abp .tooltip .badge }|1<<33 |CHANGE_VELOCITY_AFTER_TIMEOUT {: .copyable } |  | 