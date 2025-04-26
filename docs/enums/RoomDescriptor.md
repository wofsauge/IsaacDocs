---
tags:
  - Enum
---
# Enum "RoomDescriptor"

The "RoomDescriptor" Class has separate Enums that are used for special information handling.

Even though they have different prefixes, all enums on this page are part of the "**RoomDescriptor**" enum.

|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .reporplus .tooltip .badge }|0 |DISPLAY_NONE {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|1 |DISPLAY_BOX {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|2 |DISPLAY_LOCK {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|3 |DISPLAY_ICON {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|4 |DISPLAY_ALL {: .copyable } |  |

|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .reporplus .tooltip .badge }|1 << 0 |FLAG_CLEAR {: .copyable } | Room is clear, don't spawn enemies when visiting |
|[ ](#){: .reporplus .tooltip .badge }|1 << 1 |FLAG_PRESSURE_PLATES_TRIGGERED {: .copyable } |  All pressure plates have been triggered in this room. This won't be set if there are no trigger pressure plates in the first place. |
|[ ](#){: .reporplus .tooltip .badge }|1 << 2 |FLAG_SACRIFICE_DONE {: .copyable } | Sacrifice room has paid out |
|[ ](#){: .reporplus .tooltip .badge }|1 << 3 |FLAG_CHALLENGE_DONE {: .copyable } | Challenge room finished |
|[ ](#){: .reporplus .tooltip .badge }|1 << 4 |FLAG_SURPRISE_MINIBOSS {: .copyable } | Load Greed/Krampus instead of the room specified by Type, Variant |
|[ ](#){: .reporplus .tooltip .badge }|1 << 5 |FLAG_HAS_WATER {: .copyable } | Pits in this room contain water |
|[ ](#){: .reporplus .tooltip .badge }|1 << 6 |FLAG_ALT_BOSS_MUSIC {: .copyable } | Play alternate boss music in this room |
|[ ](#){: .reporplus .tooltip .badge }|1 << 7 |FLAG_NO_REWARD {: .copyable } | Don't pay out with a reward when clearing this room, used for traps that lock the player in the room when triggered |
|[ ](#){: .reporplus .tooltip .badge }|1 << 8 |FLAG_FLOODED {: .copyable } | Was flooded by an item (i.e. Flush) |
|[ ](#){: .reporplus .tooltip .badge }|1 << 9 |FLAG_PITCH_BLACK {: .copyable } | Complete darkness |
|[ ](#){: .reporplus .tooltip .badge }|1 << 10 |FLAG_RED_ROOM {: .copyable } | Room spawned by Red Key |
|[ ](#){: .reporplus .tooltip .badge }|1 << 11 |FLAG_DEVIL_TREASURE {: .copyable } | Treasure room transformed by Devil's Crown |
|[ ](#){: .reporplus .tooltip .badge }|1 << 12 |FLAG_USE_ALTERNATE_BACKDROP {: .copyable } | Use an alternate backdrop (this is used by some floors such as Dross and Ashpit) |
|[ ](#){: .reporplus .tooltip .badge }|1 << 13 |FLAG_CURSED_MIST {: .copyable } | Room is covered in cursed mist, player is temporarily reduced to base items and stats |
|[ ](#){: .reporplus .tooltip .badge }|1 << 14 |FLAG_MAMA_MEGA {: .copyable } | Mama Mega has activated in this room |
|[ ](#){: .reporplus .tooltip .badge }|1 << 15 |FLAG_NO_WALLS {: .copyable } | Don't generate walls (for Beast arena) |
|[ ](#){: .reporplus .tooltip .badge }|1 << 16 |FLAG_ROTGUT_CLEARED {: .copyable } | Rotgut's heart was killed, immediately play Rotgut's death animation when reentering this room |
|[ ](#){: .reporplus .tooltip .badge }|1 << 17 |FLAG_PORTAL_LINKED {: .copyable } | A portal spawned by Lil Portal now links to this room, don't create more portals that link to it |
|[ ](#){: .reporplus .tooltip .badge }|1 << 18 |FLAG_BLUE_REDIRECT {: .copyable } | If walking into this room through a door, redirect to a Blue Womb room instead (this is used by Blue Key) |
