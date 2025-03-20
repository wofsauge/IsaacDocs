---
tags:
  - Enum
---
# Enum "GameStateFlag"
|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|0 |STATE_FAMINE_SPAWNED {: .copyable } | Repurposed as "angel room spawned" in Rep. This doesn't seem to do anything with Famine anymore. |
|[ ](#){: .alldlc .tooltip .badge }|1 |STATE_PESTILENCE_SPAWNED {: .copyable } | obsolete with Rep |
|[ ](#){: .alldlc .tooltip .badge }|2 |STATE_WAR_SPAWNED {: .copyable } | obsolete with Rep |
|[ ](#){: .alldlc .tooltip .badge }|3 |STATE_DEATH_SPAWNED {: .copyable } | obsolete with Rep |
|[ ](#){: .alldlc .tooltip .badge }|4 |STATE_BOSSPOOL_SWITCHED {: .copyable } | Repurposed as "left from starting room" in Rep. Used to check if the coop player should spawn as a coop baby or normal character. |
|[ ](#){: .alldlc .tooltip .badge }|5 |STATE_DEVILROOM_SPAWNED {: .copyable } | By default, "devil room spawned" is false which gives 100% devil chance on stage 2. When the devil room spawns, "devil room spawned" is set to true. If you visit the devil room then "devil room visited" is set to true and your devil/angel chance will be 50/50 (assuming you don't pick up a devil item). If you don't visit the devil room then "devil room visited" stays false and the next time you'll get a guaranteed angel room. Once that angel room spawns, "angel room spawned" is set to true so angel rooms don't continue to be guaranteed. |
|[ ](#){: .alldlc .tooltip .badge }|6 |STATE_DEVILROOM_VISITED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|7 |STATE_BOOK_REVELATIONS_USED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|8 |STATE_BOOK_PICKED_UP {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|9 |STATE_WRATH_SPAWNED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|10 |STATE_GLUTTONY_SPAWNED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|11 |STATE_LUST_SPAWNED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|12 |STATE_SLOTH_SPAWNED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|13 |STATE_ENVY_SPAWNED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|14 |STATE_PRIDE_SPAWNED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|15 |STATE_GREED_SPAWNED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|16 |STATE_SUPERGREED_SPAWNED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|17 |STATE_DONATION_SLOT_BROKEN {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|18 |STATE_DONATION_SLOT_JAMMED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|19 |STATE_HEAVEN_PATH {: .copyable } | Flips to true when you take a heaven light door in the womb ii (taking you to the cathedral instead of sheol). Does not flip back to false if you replay the womb ii and take a trapdoor. |
|[ ](#){: .alldlc .tooltip .badge }|20 |STATE_REBIRTH_BOSS_SWITCHED {: .copyable } | obsolete with Rep |
|[ ](#){: .alldlc .tooltip .badge }|21 |STATE_HAUNT_SELECTED {: .copyable } | obsolete with Rep |
|[ ](#){: .alldlc .tooltip .badge }|22 |STATE_ADVERSARY_SELECTED {: .copyable } | obsolete with Rep |
|[ ](#){: .alldlc .tooltip .badge }|23 |STATE_MR_FRED_SELECTED {: .copyable } | obsolete with Rep |
|[ ](#){: .alldlc .tooltip .badge }|24 |STATE_MAMA_GURDY_SELECTED {: .copyable } | obsolete with Rep |
|[ ](#){: .alldlc .tooltip .badge }|25 |STATE_URIEL_SPAWNED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|26 |STATE_GABRIEL_SPAWNED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|27 |STATE_FALLEN_SPAWNED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|28 |STATE_HEADLESS_HORSEMAN_SPAWNED {: .copyable } | obsolete with Rep |
|[ ](#){: .alldlc .tooltip .badge }|29 |STATE_KRAMPUS_SPAWNED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|30 |STATE_DONATION_SLOT_BLOWN {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|31 |STATE_SHOPKEEPER_KILLED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|32 |STATE_ULTRAPRIDE_SPAWNED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|33 |STATE_BOSSRUSH_DONE {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|34 |STATE_GREED_SLOT_JAMMED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|35 |STATE_AFTERBIRTH_BOSS_SWITCHED {: .copyable } | obsolete with Rep |
|[ ](#){: .alldlc .tooltip .badge }|36 |STATE_BROWNIE_SELECTED {: .copyable } | obsolete with Rep |
|[ ](#){: .alldlc .tooltip .badge }|37 |STATE_SUPERBUM_APPEARED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|38 |STATE_BOSSRUSH_DOOR_SPAWNED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|39 |STATE_BLUEWOMB_DOOR_SPAWNED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|40 |STATE_BLUEWOMB_DONE {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|41 |STATE_HEART_BOMB_COIN_PICKED {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|42 |STATE_ABPLUS_BOSS_SWITCHED {: .copyable } | obsolete with Rep |
|[ ](#){: .alldlc .tooltip .badge }|43 |STATE_SISTERS_VIS_SELECTED {: .copyable } | obsolete with Rep |
|[ ](#){: .rep .tooltip .badge }|43 |STATE_MAX_COINS_OBTAINED {: .copyable } | set when reaching 99 coins, used to check for the Golden Razor achievement |
|[ ](#){: .rep .tooltip .badge }|44 |STATE_SECRET_PATH {: .copyable } | set when entering a trapdoor that leads to the alternate path |
|[ ](#){: .rep .tooltip .badge }|45 |STATE_PERFECTION_SPAWNED {: .copyable } | set when Perfection has dropped from a boss |
|[ ](#){: .rep .tooltip .badge }|46 |STATE_MAUSOLEUM_HEART_KILLED {: .copyable } | set when Mom's Heart has been killed in the Mausoleum |
|[ ](#){: .rep .tooltip .badge }|47 |STATE_BACKWARDS_PATH_INIT {: .copyable } | set when entering Mausoleum/Gehenna II through the photo door, causes Dad's Note to spawn instead of the Mom boss room |
|[ ](#){: .rep .tooltip .badge }|48 |STATE_BACKWARDS_PATH {: .copyable } | set during the Ascent |
|[ ](#){: .rep .tooltip .badge }|49 |NUM_STATE_FLAGS {: .copyable } |  |