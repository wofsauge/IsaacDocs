# Enum "EntityFlag"
|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .abrep .tooltip .badge }|1 |FLAG_NO_STATUS_EFFECTS {: .copyable } | prevent freeze/poison/slow/charm/confusion/fear/burn <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<1 |FLAG_NO_INTERPOLATE {: .copyable } | do not interpolate position <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<2 |FLAG_APPEAR {: .copyable } | play appear animation after Init <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<3 |FLAG_RENDER_FLOOR {: .copyable } | will be rendered to floor texture <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<4 |FLAG_NO_TARGET {: .copyable } | will not be a target of NPCs or familiars <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<5 |FLAG_FREEZE {: .copyable } | freezing effect <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<6 |FLAG_POISON {: .copyable } | poison effect <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<7 |FLAG_SLOW {: .copyable } | slowing (velocity) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<8 |FLAG_CHARM {: .copyable } | Charmed <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<9 |FLAG_CONFUSION {: .copyable } | Confused <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<10 |FLAG_MIDAS_FREEZE {: .copyable } | Midas frozen <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<11 |FLAG_FEAR {: .copyable } | Fleeing in Fear (like Mom's Pad) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<12 |FLAG_BURN {: .copyable } | Caused by Fire Mind tears, works like poison except with Red color effect. <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<13 |FLAG_RENDER_WALL {: .copyable } | will be rendered to wall texture <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<14 |FLAG_INTERPOLATION_UPDATE {: .copyable } | entity is updating at 60 fps, and this is an odd frame <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<15 |FLAG_APPLY_GRAVITY {: .copyable } | In sidescrolling room, this indicates that we're in a gravity zone. <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<16 |FLAG_NO_BLOOD_SPLASH {: .copyable } |  | 
|[ ](#){: .abrep .tooltip .badge }|1<<17 |FLAG_NO_REMOVE_ON_TEX_RENDER {: .copyable } | for FLAG_RENDER_FLOOR and FLAG_RENDER_WALL <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<18 |FLAG_NO_DEATH_TRIGGER {: .copyable } |  | 
|[ ](#){: .abrep .tooltip .badge }|1<<19 |FLAG_NO_SPIKE_DAMAGE {: .copyable } |  | 
|[ ](#){: .abrep .tooltip .badge }|1<<20 |FLAG_BOSSDEATH_TRIGGERED {: .copyable } |  | 
|[ ](#){: .abrep .tooltip .badge }|1<<21 |FLAG_DONT_OVERWRITE {: .copyable } | Used in entityfactory to not remove this entity if there is no space left for new entity <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<22 |FLAG_SPAWN_STICKY_SPIDERS {: .copyable } | Used by Sticky bombs to generate spiders on death <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<23 |FLAG_SPAWN_BLACK_HP {: .copyable } | Used by black hp drop tear flag to drop a black hp on enemy death <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<24 |FLAG_SHRINK {: .copyable } | God's flesh effect <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<25 |FLAG_NO_FLASH_ON_DAMAGE {: .copyable } | Entity will not flash red when damaged <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<26 |FLAG_NO_KNOCKBACK {: .copyable } | Bombs and farts have no knockback effects <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<27 |FLAG_SLIPPERY_PHYSICS {: .copyable } | Standing on a slippery surface <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<28 |FLAG_ADD_JAR_FLY {: .copyable } | Adds a fly to the jar when killed <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<29 |FLAG_FRIENDLY {: .copyable } | Charmed and m_CharmCountdown<0 <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<30 |FLAG_NO_PHYSICS_KNOCKBACK {: .copyable } | No knockback from general collisions <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<31 |FLAG_DONT_COUNT_BOSS_HP {: .copyable } | Do not count boss hp <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<32 |FLAG_NO_SPRITE_UPDATE {: .copyable } | Do not update sprite animation <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<33 |FLAG_CONTAGIOUS {: .copyable } | Used for Contagious item (if the enemy is infected) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<34 |FLAG_BLEED_OUT {: .copyable } | Used for Mom's Razor <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<35 |FLAG_HIDE_HP_BAR {: .copyable } | Added for Ultra Greed so his HP can be hidden after he "dies" since his entity sticks around <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<36 |FLAG_NO_DAMAGE_BLINK {: .copyable } | Player was given a short period of invulnerability by something other than damage, don't blink <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<37 |FLAG_PERSISTENT {: .copyable } | The entity will persists between rooms. (It will appear in every room, as opposed to the game remembering the specific room that it was spawned in.) <br> | 
