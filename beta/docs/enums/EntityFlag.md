# Enum "EntityFlag"
[ ](#){: .abp .tooltip .badge }
|Enumerator|comment|id|
|:--:|:--:|:--:|
| FLAG_NO_STATUS_EFFECTS | prevent freeze/poison/slow/charm/confusion/fear/burn <br> | 1 |
| FLAG_NO_INTERPOLATE | do not interpolate position <br> | 1<<1 |
| FLAG_APPEAR | play appear animation after Init <br> | 1<<2 |
| FLAG_RENDER_FLOOR | will be rendered to floor texture <br> | 1<<3 |
| FLAG_NO_TARGET | will not be a target of NPCs or familiars <br> | 1<<4 |
| FLAG_FREEZE | freezing effect <br> | 1<<5 |
| FLAG_POISON | poison effect <br> | 1<<6 |
| FLAG_SLOW | slowing (velocity) <br> | 1<<7 |
| FLAG_CHARM | Charmed <br> | 1<<8 |
| FLAG_CONFUSION | Confused <br> | 1<<9 |
| FLAG_MIDAS_FREEZE | Midas frozen <br> | 1<<10 |
| FLAG_FEAR | Fleeing in Fear (like Mom's Pad) <br> | 1<<11 |
| FLAG_BURN | Caused by Fire Mind tears, works like poison except with Red color effect. <br> | 1<<12 |
| FLAG_RENDER_WALL | will be rendered to wall texture <br> | 1<<13 |
| FLAG_INTERPOLATION_UPDATE | entity is updating at 60 fps, and this is an odd frame <br> | 1<<14 |
| FLAG_APPLY_GRAVITY | In sidescrolling room, this indicates that we're in a gravity zone. <br> | 1<<15 |
| FLAG_NO_BLOOD_SPLASH |  | 1<<16 |
| FLAG_NO_REMOVE_ON_TEX_RENDER | for FLAG_RENDER_FLOOR and FLAG_RENDER_WALL <br> | 1<<17 |
| FLAG_NO_DEATH_TRIGGER |  | 1<<18 |
| FLAG_NO_SPIKE_DAMAGE |  | 1<<19 |
| FLAG_BOSSDEATH_TRIGGERED |  | 1<<20 |
| FLAG_DONT_OVERWRITE | Used in entityfactory to not remove this entity if there is no space left for new entity <br> | 1<<21 |
| FLAG_SPAWN_STICKY_SPIDERS | Used by Sticky bombs to generate spiders on death <br> | 1<<22 |
| FLAG_SPAWN_BLACK_HP | Used by black hp drop tear flag to drop a black hp on enemy death <br> | 1<<23 |
| FLAG_SHRINK | God's flesh effect <br> | 1<<24 |
| FLAG_NO_FLASH_ON_DAMAGE | Entity will not flash red when damaged <br> | 1<<25 |
| FLAG_NO_KNOCKBACK | Bombs and farts have no knockback effects <br> | 1<<26 |
| FLAG_SLIPPERY_PHYSICS | Standing on a slippery surface <br> | 1<<27 |
| FLAG_ADD_JAR_FLY | Adds a fly to the jar when killed <br> | 1<<28 |
| FLAG_FRIENDLY | Charmed and m_CharmCountdown<0 <br> | 1<<29 |
| FLAG_NO_PHYSICS_KNOCKBACK | No knockback from general collisions <br> | 1<<30 |
| FLAG_DONT_COUNT_BOSS_HP | Do not count boss hp <br> | 1<<31 |
| FLAG_NO_SPRITE_UPDATE | Do not update sprite animation <br> | 1<<32 |
| FLAG_CONTAGIOUS | Used for Contagious item (if the enemy is infected) <br> | 1<<33 |
| FLAG_BLEED_OUT | Used for Mom's Razor <br> | 1<<34 |
| FLAG_HIDE_HP_BAR | Added for Ultra Greed so his HP can be hidden after he "dies" since his entity sticks around <br> | 1<<35 |
| FLAG_NO_DAMAGE_BLINK | Player was given a short period of invulnerability by something other than damage, don't blink <br> | 1<<36 |
| FLAG_PERSISTENT | Entity persists between rooms <br> | 1<<37 |