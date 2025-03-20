---
tags:
  - Enum
---
# Enum "ProjectileFlags"

???+ tip "Bitset Calculator"
    [](#){: .bitsetCalculator }

|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|1 << 0 |SMART {: .copyable } | follow player |
|[ ](#){: .alldlc .tooltip .badge }|1 << 1 |EXPLODE {: .copyable } | explode on impact |
|[ ](#){: .alldlc .tooltip .badge }|1 << 2 |ACID_GREEN {: .copyable } | acid splat on impact |
|[ ](#){: .alldlc .tooltip .badge }|1 << 3 |GOO {: .copyable } | goo splat on impact |
|[ ](#){: .alldlc .tooltip .badge }|1 << 4 |GHOST {: .copyable } | slide through solid entities |
|[ ](#){: .alldlc .tooltip .badge }|1 << 5 |WIGGLE {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|1 << 6 |BOOMERANG {: .copyable } | come back |
|[ ](#){: .alldlc .tooltip .badge }|1 << 7 |HIT_ENEMIES {: .copyable } | can hit enemies |
|[ ](#){: .alldlc .tooltip .badge }|1 << 8 |ACID_RED {: .copyable } | blood acid |
|[ ](#){: .alldlc .tooltip .badge }|1 << 9 |GREED {: .copyable } | Greed projectiles have same effect as Greed enemy's bullets. |
|[ ](#){: .alldlc .tooltip .badge }|1 << 10 |RED_CREEP {: .copyable } | Bullet leaves a red creep |
|[ ](#){: .alldlc .tooltip .badge }|1 << 11 |ORBIT_CW {: .copyable } | Bullet orbits a point clockwise and passes through walls similar to Tiny Planet |
|[ ](#){: .alldlc .tooltip .badge }|1 << 12 |ORBIT_CCW {: .copyable } | Bullet orbits a point counter-clockwise and passes through walls similar to Tiny Planet |
|[ ](#){: .alldlc .tooltip .badge }|1 << 13 |NO_WALL_COLLIDE {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|1 << 14 |CREEP_BROWN {: .copyable } | Bullet leaves a brown creep |
|[ ](#){: .alldlc .tooltip .badge }|1 << 15 |FIRE {: .copyable } | Projectile was cast by a fireplace |
|[ ](#){: .alldlc .tooltip .badge }|1 << 16 |BURST {: .copyable } | Bursts into more bullets |
|[ ](#){: .alldlc .tooltip .badge }|1 << 17 |ANY_HEIGHT_ENTITY_HIT {: .copyable } | Bullets that can hit at any height |
|[ ](#){: .alldlc .tooltip .badge }|1 << 18 |CURVE_LEFT {: .copyable } | Bullets curve slightly on a circular path |
|[ ](#){: .alldlc .tooltip .badge }|1 << 19 |CURVE_RIGHT {: .copyable } | Bullets curve slightly on a circular path |
|[ ](#){: .alldlc .tooltip .badge }|1 << 20 |TURN_HORIZONTAL {: .copyable } | Bullets turn and go horizontally and increase in speed when they pass the const static uint64_t player on either side |
|[ ](#){: .alldlc .tooltip .badge }|1 << 21 |SINE_VELOCITY {: .copyable } | Bullet velocity varies over time as a function of a wave |
|[ ](#){: .alldlc .tooltip .badge }|1 << 22 |MEGA_WIGGLE {: .copyable } | Like wiggle worm but the wiggling increases in amplitude over time |
|[ ](#){: .alldlc .tooltip .badge }|1 << 23 |SAWTOOTH_WIGGLE {: .copyable } | Bullets travel on a sawtooth shaped path |
|[ ](#){: .alldlc .tooltip .badge }|1 << 24 |SLOWED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|1 << 25 |TRIANGLE {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|1 << 26 |MOVE_TO_PARENT {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|1 << 27 |ACCELERATE {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|1 << 28 |DECELERATE {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|1 << 29 |BURST3 {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|1 << 30 |CONTINUUM {: .copyable } | Bullets reappear from the opposite side as they leave the screen |
|[ ](#){: .alldlc .tooltip .badge }|1 << 31 |CANT_HIT_PLAYER {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|1 << 32 |CHANGE_FLAGS_AFTER_TIMEOUT {: .copyable } | "Change" flags will change the bullet's behavior after a timeout. change m_ProjectileFlags to m_TimeoutProjectileFlags. |
|[ ](#){: .alldlc .tooltip .badge }|1 << 33 |CHANGE_VELOCITY_AFTER_TIMEOUT {: .copyable } | "Change" flags will change the bullet's behavior after a timeout. |
|[ ](#){: .rep .tooltip .badge }|1 << 34 |STASIS {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 35 |FIRE_WAVE {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 36 |FIRE_WAVE_X {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 37 |ACCELERATE_EX {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 38 |BURST8 {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 39 |FIRE_SPAWN {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 40 |ANTI_GRAVITY {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 41 |TRACTOR_BEAM {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 42 |BOUNCE {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 43 |BOUNCE_FLOOR {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 44 |SHIELDED {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 45 |BLUE_FIRE_SPAWN {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 46 |LASER_SHOT {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 47 |GODHEAD {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 48 |SMART_PERFECT {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 49 |BURSTSPLIT {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 50 |WIGGLE_ROTGUT {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 51 |FREEZE {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 52 |ACCELERATE_TO_POSITION {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 53 |BROCCOLI {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 54 |BACKSPLIT {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 55 |SIDEWAVE {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 56 |ORBIT_PARENT {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 << 57 |FADEOUT {: .copyable } |
