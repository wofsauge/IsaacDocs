# EntityFlag

|Enumeration|Value|Description|
|-----------|:---:|-----------|
|FLAG_NO_STATUS_EFFECTS|1|prevent freeze/poison/slow/charm/confusion/fear/burn|
|FLAG_NO_INTERPOLATE|2|do not interpolate position|
|FLAG_APPEAR|4|play appear animation after Init|
|FLAG_RENDER_FLOOR|8|will be rendered to floor texture|
|FLAG_NO_TARGET|16|will not be a target of NPCs or familiars|
|FLAG_FREEZE|32|freezing effect|
|FLAG_POISON|64|poison effect|
|FLAG_SLOW|128|slowing (velocity)|
|FLAG_CHARM|256|Charmed|
|FLAG_CONFUSION|512|Confused|
|FLAG_MIDAS_FREEZE|1024|Midas frozen|
|FLAG_FEAR|2048|Fleeing in Fear (like Mom's Pad)|
|FLAG_BURN|4096|Caused by Fire Mind tears, works like poison except with Red color effect.|
|FLAG_RENDER_WALL|8192|will be rendered to wall texture|
|FLAG_INTERPOLATION_UPDATE|16384|entity is updating at 60 fps, and this is an odd frame|
|FLAG_APPLY_GRAVITY|32768|In sidescrolling room, this indicates that we're in a gravity zone.|
|FLAG_NO_BLOOD_SPLASH|65536||
|FLAG_NO_REMOVE_ON_TEX_RENDER|131072|for FLAG_RENDER_FLOOR and FLAG_RENDER_WALL|
|FLAG_NO_DEATH_TRIGGER|262144||
|FLAG_NO_SPIKE_DAMAGE|524288||
|FLAG_BOSSDEATH_TRIGGERED|1048576||
|FLAG_DONT_OVERWRITE|2097152|Used in entityfactory to not remove this entity if there is no space left for new entity|
|FLAG_SPAWN_STICKY_SPIDERS|4194304|Used by Sticky bombs to generate spiders on death|
|FLAG_SPAWN_BLACK_HP|8388608|Used by black hp drop tear flag to drop a black hp on enemy death|
|FLAG_SHRINK|16777216|God's flesh effect|
|FLAG_NO_FLASH_ON_DAMAGE|33554432|Entity will not flash red when damaged|
|FLAG_NO_KNOCKBACK|67108864|Bombs and farts have no knockback effects|
|FLAG_SLIPPERY_PHYSICS|134217728|Standing on a slippery surface|
|FLAG_ADD_JAR_FLY|268435456|Adds a fly to the jar when killed|
|FLAG_FRIENDLY|536870912|Charmed and m_CharmCountdown<0|
|FLAG_NO_PHYSICS_KNOCKBACK|1073741824|No knockback from general collisions|
|FLAG_DONT_COUNT_BOSS_HP|2147483648|Do not count boss hp|
|FLAG_NO_SPRITE_UPDATE|4294967296|Do not update sprite animation|
|FLAG_CONTAGIOUS|8589934592|Used for Contagious item (if the enemy is infected)|
|FLAG_BLEED_OUT|17179869184|Used for Mom's Razor|
|FLAG_HIDE_HP_BAR|34359738368|Added for Ultra Greed so his HP can be hidden after he "dies" since his entity sticks around|
|FLAG_NO_DAMAGE_BLINK|68719476736|Player was given a short period of invulnerability by something other than damage, don't blink|
|FLAG_PERSISTENT||Entity persists between rooms|
