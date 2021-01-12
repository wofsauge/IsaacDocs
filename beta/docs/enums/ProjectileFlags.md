[ ](#){: .abp .tooltip .badge }
# Enum "ProjectileFlags"
|Enumerator|comment|id|
|:--:|:--:|:--:|
| SMART | follow player <br> | 1 |
| EXPLODE | explode on impact <br> | 1<<1 |
| ACID_GREEN | acid splat on impact <br> | 1<<2 |
| GOO | goo splat on impact <br> | 1<<3 |
| GHOST | slide through solid entities <br> | 1<<4 |
| WIGGLE |  | 1<<5 |
| BOOMERANG | come back <br> | 1<<6 |
| HIT_ENEMIES | can hit enemies <br> | 1<<7 |
| ACID_RED | blood acid <br> | 1<<8 |
| GREED | Greed projectiles have same effect as Greed enemy's bullets. <br> | 1<<9 |
| RED_CREEP | Bullet leaves a red creep <br> | 1<<10 |
| ORBIT_CW | Bullet orbits a point clockwise and passes through walls similar to Tiny Planet <br> | 1<<11 |
| ORBIT_CCW | Bullet orbits a point counter-clockwise and passes through walls similar to Tiny Planet <br> | 1<<12 |
| NO_WALL_COLLIDE |  | 1<<13 |
| CREEP_BROWN | Bullet leaves a brown creep <br> | 1<<14 |
| FIRE | Projectile was cast by a fireplace <br> | 1<<15 |
| BURST | Bursts into more bullets <br> | 1<<16 |
| ANY_HEIGHT_ENTITY_HIT | Bullets that can hit at any height <br> | 1<<17 |
| CURVE_LEFT | Bullets curve slightly on a circular path <br> | 1<<18 |
| CURVE_RIGHT | Bullets curve slightly on a circular path <br> | 1<<19 |
| TURN_HORIZONTAL | Bullets turn and go horizontally and increase in speed when they pass the const static uint64_t player on either side <br> | 1<<20 |
| SINE_VELOCITY | Bullet velocity varies over time as a function of a wave <br> | 1<<21 |
| MEGA_WIGGLE | Like wiggle worm but the wiggling increases in amplitude over time <br> | 1<<22 |
| SAWTOOTH_WIGGLE | Bullets travel on a sawtooth shaped path <br> | 1<<23 |
| SLOWED |  | 1<<24 |
| TRIANGLE |  | 1<<25 |
| MOVE_TO_PARENT |  | 1<<26 |
| ACCELERATE |  | 1<<27 |
| DECELERATE |  | 1<<28 |
| BURST3 |  | 1<<29 |
| CONTINUUM | Bullets reappear from the opposite side as they leave the screen <br> | 1<<30 |
| CANT_HIT_PLAYER |  | 1<<31 |
| CHANGE_FLAGS_AFTER_TIMEOUT | "Change" flags will change the bullet's behavior after a timeout. change m_ProjectileFlags to m_TimeoutProjectileFlags. <br> | 1<<32 |
| CHANGE_VELOCITY_AFTER_TIMEOUT |  | 1<<33 |