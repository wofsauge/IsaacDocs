# EntityFlag

| Enumeration | Value | Description |
| :--- | :---: | :--- |
| FLAG\_NO\_STATUS\_EFFECTS | 1 | prevent freeze/poison/slow/charm/confusion/fear/burn |
| FLAG\_NO\_INTERPOLATE | 2 | do not interpolate position |
| FLAG\_APPEAR | 4 | play appear animation after Init |
| FLAG\_RENDER\_FLOOR | 8 | will be rendered to floor texture |
| FLAG\_NO\_TARGET | 16 | will not be a target of NPCs or familiars |
| FLAG\_FREEZE | 32 | freezing effect |
| FLAG\_POISON | 64 | poison effect |
| FLAG\_SLOW | 128 | slowing \(velocity\) |
| FLAG\_CHARM | 256 | Charmed |
| FLAG\_CONFUSION | 512 | Confused |
| FLAG\_MIDAS\_FREEZE | 1024 | Midas frozen |
| FLAG\_FEAR | 2048 | Fleeing in Fear \(like Mom's Pad\) |
| FLAG\_BURN | 4096 | Caused by Fire Mind tears, works like poison except with Red color effect. |
| FLAG\_RENDER\_WALL | 8192 | will be rendered to wall texture |
| FLAG\_INTERPOLATION\_UPDATE | 16384 | entity is updating at 60 fps, and this is an odd frame |
| FLAG\_APPLY\_GRAVITY | 32768 | In sidescrolling room, this indicates that we're in a gravity zone. |
| FLAG\_NO\_BLOOD\_SPLASH | 65536 |  |
| FLAG\_NO\_REMOVE\_ON\_TEX\_RENDER | 131072 | for FLAG\_RENDER\_FLOOR and FLAG\_RENDER\_WALL |
| FLAG\_NO\_DEATH\_TRIGGER | 262144 |  |
| FLAG\_NO\_SPIKE\_DAMAGE | 524288 |  |
| FLAG\_BOSSDEATH\_TRIGGERED | 1048576 |  |
| FLAG\_DONT\_OVERWRITE | 2097152 | Used in entityfactory to not remove this entity if there is no space left for new entity |
| FLAG\_SPAWN\_STICKY\_SPIDERS | 4194304 | Used by Sticky bombs to generate spiders on death |
| FLAG\_SPAWN\_BLACK\_HP | 8388608 | Used by black hp drop tear flag to drop a black hp on enemy death |
| FLAG\_SHRINK | 16777216 | God's flesh effect |
| FLAG\_NO\_FLASH\_ON\_DAMAGE | 33554432 | Entity will not flash red when damaged |
| FLAG\_NO\_KNOCKBACK | 67108864 | Bombs and farts have no knockback effects |
| FLAG\_SLIPPERY\_PHYSICS | 134217728 | Standing on a slippery surface |
| FLAG\_ADD\_JAR\_FLY | 268435456 | Adds a fly to the jar when killed |
| FLAG\_FRIENDLY | 536870912 | Charmed and m\_CharmCountdown&lt;0 |
| FLAG\_NO\_PHYSICS\_KNOCKBACK | 1073741824 | No knockback from general collisions |
| FLAG\_DONT\_COUNT\_BOSS\_HP | 2147483648 | Do not count boss hp |
| FLAG\_NO\_SPRITE\_UPDATE | 4294967296 | Do not update sprite animation |
| FLAG\_CONTAGIOUS | 8589934592 | Used for Contagious item \(if the enemy is infected\) |
| FLAG\_BLEED\_OUT | 17179869184 | Used for Mom's Razor |
| FLAG\_HIDE\_HP\_BAR | 34359738368 | Added for Ultra Greed so his HP can be hidden after he "dies" since his entity sticks around |
| FLAG\_NO\_DAMAGE\_BLINK | 68719476736 | Player was given a short period of invulnerability by something other than damage, don't blink |
| FLAG\_PERSISTENT |  | Entity persists between rooms |

