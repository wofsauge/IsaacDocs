---
tags:
  - Enum
---
# Enum "EntityFlag"

???+ tip "Bitset Calculator"
    [](#){: .bitsetCalculator }

|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|1 << 0|FLAG_NO_STATUS_EFFECTS {: .copyable } | Prevents status effects from applying to the entity (e.g. freeze, poison, slow, charm, confusion, fear, burn, etc.). |
|[ ](#){: .alldlc .tooltip .badge }|1 << 1 |FLAG_NO_INTERPOLATE {: .copyable } | Do not interpolate the position. |
|[ ](#){: .alldlc .tooltip .badge }|1 << 2 |FLAG_APPEAR {: .copyable } | The "Appear" animation will be played after the entity is initialized. |
|[ ](#){: .alldlc .tooltip .badge }|1 << 3 |FLAG_RENDER_FLOOR {: .copyable } | Meant for entities that have a sprite loaded that represent a floor texture. Entities with this flag will be removed after their first render. (Removing the entity is desirable because we would not want it to override other things that render to the floor, like bomb explosions.) You can use `EntityFlag.NO_REMOVE_ON_TEX_RENDER` to disable this behavior. |
|[ ](#){: .alldlc .tooltip .badge }|1 << 4 |FLAG_NO_TARGET {: .copyable } | Will not be a target of NPCs or familiars. |
|[ ](#){: .alldlc .tooltip .badge }|1 << 5 |FLAG_FREEZE {: .copyable } | |
|[ ](#){: .alldlc .tooltip .badge }|1 << 6 |FLAG_POISON {: .copyable } | |
|[ ](#){: .alldlc .tooltip .badge }|1 << 7 |FLAG_SLOW {: .copyable } | |
|[ ](#){: .alldlc .tooltip .badge }|1 << 8 |FLAG_CHARM {: .copyable } | |
|[ ](#){: .alldlc .tooltip .badge }|1 << 9 |FLAG_CONFUSION {: .copyable } | |
|[ ](#){: .alldlc .tooltip .badge }|1 << 10 |FLAG_MIDAS_FREEZE {: .copyable } | |
|[ ](#){: .alldlc .tooltip .badge }|1 << 11 |FLAG_FEAR {: .copyable } | Fleeing in fear (from e.g. Mom's Pad). |
|[ ](#){: .alldlc .tooltip .badge }|1 << 12 |FLAG_BURN {: .copyable } | Caused by Fire Mind tears. Works like poison except with a red color effect. |
|[ ](#){: .alldlc .tooltip .badge }|1 << 13 |FLAG_RENDER_WALL {: .copyable } | Meant for entities that have a sprite loaded that represent a wall texture. Entities with this flag will be removed after their first render. (Removing the entity is desirable because we would not want it to override other things that render to the wall, like bomb explosions.) You can use `EntityFlag.NO_REMOVE_ON_TEX_RENDER` to disable this behavior. |
|[ ](#){: .alldlc .tooltip .badge }|1 << 14 |FLAG_INTERPOLATION_UPDATE {: .copyable } | The entity is updating at 60 frames per second and this is an odd frame. |
|[ ](#){: .alldlc .tooltip .badge }|1 << 15 |FLAG_APPLY_GRAVITY {: .copyable } | Indicates that the entity is in a side-scrolling room and is within a gravity zone. |
|[ ](#){: .alldlc .tooltip .badge }|1 << 16 |FLAG_NO_BLOOD_SPLASH {: .copyable } | |
|[ ](#){: .alldlc .tooltip .badge }|1 << 17 |FLAG_NO_REMOVE_ON_TEX_RENDER {: .copyable } | See `EntityFlag.FLAG_RENDER_FLOOR` and `EntityFlag.FLAG_RENDER_WALL`. |
|[ ](#){: .alldlc .tooltip .badge }|1 << 18 |FLAG_NO_DEATH_TRIGGER {: .copyable } | |
|[ ](#){: .alldlc .tooltip .badge }|1 << 19 |FLAG_NO_SPIKE_DAMAGE {: .copyable } | |
|[ ](#){: .rep .tooltip .badge }|1 << 19 |FLAG_LASER_POP {: .copyable } | EntityTear: Pop tear fired by a laser, should decelerate very quickly for the first few frames |
|[ ](#){: .rep .tooltip .badge }|1 << 19 |FLAG_ITEM_SHOULD_DUPLICATE {: .copyable } | EntityPickup: item pedestal affected by Damocles, will be duplicated at the end of the current frame |
|[ ](#){: .alldlc .tooltip .badge }|1 << 20 |FLAG_BOSSDEATH_TRIGGERED {: .copyable } | Some bosses (Lamb/Mother) can die but they'll still appear to be active in the room (IsActiveEnemy). You can check this flag in those cases. |
|[ ](#){: .alldlc .tooltip .badge }|1 << 21 |FLAG_DONT_OVERWRITE {: .copyable } | Used in entityfactory to not remove this entity if there is no space left for new entity |
|[ ](#){: .alldlc .tooltip .badge }|1 << 22 |FLAG_SPAWN_STICKY_SPIDERS {: .copyable } | Used by Sticky bombs to generate spiders on death |
|[ ](#){: .alldlc .tooltip .badge }|1 << 23 |FLAG_SPAWN_BLACK_HP {: .copyable } | Used by black hp drop tear flag to drop a black hp on enemy death |
|[ ](#){: .alldlc .tooltip .badge }|1 << 24 |FLAG_SHRINK {: .copyable } | God's flesh effect |
|[ ](#){: .alldlc .tooltip .badge }|1 << 25 |FLAG_NO_FLASH_ON_DAMAGE {: .copyable } | Entity will not flash red when damaged |
|[ ](#){: .alldlc .tooltip .badge }|1 << 26 |FLAG_NO_KNOCKBACK {: .copyable } | Bombs and farts have no knockback effects |
|[ ](#){: .alldlc .tooltip .badge }|1 << 27 |FLAG_SLIPPERY_PHYSICS {: .copyable } | Standing on a slippery surface |
|[ ](#){: .alldlc .tooltip .badge }|1 << 28 |FLAG_ADD_JAR_FLY {: .copyable } | Adds a fly to the jar when killed |
|[ ](#){: .alldlc .tooltip .badge }|1 << 29 |FLAG_FRIENDLY {: .copyable } | Charmed and m_CharmCountdown<0 |
|[ ](#){: .alldlc .tooltip .badge }|1 << 30 |FLAG_NO_PHYSICS_KNOCKBACK {: .copyable } | No knockback from general collisions |
|[ ](#){: .alldlc .tooltip .badge }|1 << 31 |FLAG_DONT_COUNT_BOSS_HP {: .copyable } | Do not count boss hp. If all boss entities have this tag, the boss hp bar is hidden |
|[ ](#){: .alldlc .tooltip .badge }|1 << 32 |FLAG_NO_SPRITE_UPDATE {: .copyable } | Do not update sprite animation |
|[ ](#){: .alldlc .tooltip .badge }|1 << 33 |FLAG_CONTAGIOUS {: .copyable } | Used for Contagious item (if the enemy is infected) |
|[ ](#){: .alldlc .tooltip .badge }|1 << 34 |FLAG_BLEED_OUT {: .copyable } | Used for Mom's Razor |
|[ ](#){: .alldlc .tooltip .badge }|1 << 35 |FLAG_HIDE_HP_BAR {: .copyable } | Hides the Spider Mod hp bar of an EntityNPC |
|[ ](#){: .alldlc .tooltip .badge }|1 << 36 |FLAG_NO_DAMAGE_BLINK {: .copyable } | Player was given a short period of invulnerability by something other than damage, don't blink |
|[ ](#){: .alldlc .tooltip .badge }|1 << 37 |FLAG_PERSISTENT {: .copyable } | The entity will persists between rooms. (It will appear in every room, as opposed to the game remembering the specific room that it was spawned in.) |
|[ ](#){: .rep .tooltip .badge }|1 << 38 |FLAG_BACKDROP_DETAIL {: .copyable } | Was spawned as a backdrop decoration, should be deleted if the current backdrop changes (due to Delirium) |
|[ ](#){: .rep .tooltip .badge }|1 << 39 |FLAG_AMBUSH {: .copyable } | Enemy was spawned by some sort of ambush (Greed Mode, challenge rooms), don't collide with the player for a few frames |
|[ ](#){: .rep .tooltip .badge }|1 << 40 |FLAG_GLITCH {: .copyable } | Glitched out, has different effects depending on the entity |
|[ ](#){: .rep .tooltip .badge }|1 << 41 |FLAG_SPIN {: .copyable } | Used by Spin to Win, causes a familiar to rapidly spin around its owner |
|[ ](#){: .rep .tooltip .badge }|1 << 42 |FLAG_NO_REWARD {: .copyable } | Doesn't spawn any kind of reward on death |
|[ ](#){: .rep .tooltip .badge }|1 << 43 |FLAG_REDUCE_GIBS {: .copyable } | Spawn less gibs on death |
|[ ](#){: .rep .tooltip .badge }|1 << 44 |FLAG_TRANSITION_UPDATE {: .copyable } | Updates during room/stage transitions |
|[ ](#){: .rep .tooltip .badge }|1 << 45 |FLAG_NO_PLAYER_CONTROL {: .copyable } | Cannot be controlled by players |
|[ ](#){: .rep .tooltip .badge }|1 << 46 |FLAG_NO_QUERY {: .copyable } | Hide from query results. This can hide entities from things like `Isaac.FindByType` and the `MC_ENTITY_TAKE_DMG` callback. Entities will still be visible to `Isaac.GetRoomEntities` and `_UPDATE` callbacks. |
|[ ](#){: .rep .tooltip .badge }|1 << 47 |FLAG_KNOCKED_BACK {: .copyable } | Strong knockback: Forcefy moved in a specified direction for a short duration |
|[ ](#){: .rep .tooltip .badge }|1 << 48 |FLAG_APPLY_IMPACT_DAMAGE {: .copyable } | Inflicts damage upon colliding with enemies, takes damage when colliding with walls |
|[ ](#){: .rep .tooltip .badge }|1 << 49 |FLAG_ICE_FROZEN {: .copyable } | Frozen solid |
|[ ](#){: .rep .tooltip .badge }|1 << 50 |FLAG_ICE {: .copyable } | Flagged to become frozen on death |
|[ ](#){: .rep .tooltip .badge }|1 << 51 |FLAG_MAGNETIZED {: .copyable } | Magnetized: Attracts nearby enemies, projectiles and pickups |
|[ ](#){: .rep .tooltip .badge }|1 << 52 |FLAG_BAITED {: .copyable } | Baited: Is targeted by nearby enemies |
|[ ](#){: .rep .tooltip .badge }|1 << 53 |FLAG_KILLSWITCH {: .copyable } | Killed by a killswitch |
|[ ](#){: .rep .tooltip .badge }|1 << 54 |FLAG_WEAKNESS {: .copyable } | Weakness effect from Reverse Strength |
|[ ](#){: .rep .tooltip .badge }|1 << 55 |FLAG_EXTRA_GORE {: .copyable } | Spawns more gibs on death |
|[ ](#){: .rep .tooltip .badge }|1 << 56 |FLAG_BRIMSTONE_MARKED {: .copyable } | Marked by Tainted Azazel; takes extra damage from Brimstone attacks. |
|[ ](#){: .rep .tooltip .badge }|1 << 57 |FLAG_HELD {: .copyable } | Picked up by a player |
|[ ](#){: .rep .tooltip .badge }|1 << 58 |FLAG_THROWN {: .copyable } | Thrown by a player |
|[ ](#){: .rep .tooltip .badge }|1 << 59 |FLAG_FRIENDLY_BALL {: .copyable } | Used to detect enemies spawned by Friendly Ball |
