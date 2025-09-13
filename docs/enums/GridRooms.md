---
tags:
  - Enum
---
# Enum "GridRooms"

## Example
???- example "Example Code"
    This code checks if the player is inside an "I Am Error" room.

    ```lua
    local level = Game():GetLevel()
    local curRoom = level:GetCurrentRoomDesc()
    if curRoom.GridIndex == GridRooms.ROOM_ERROR_IDX then
      print("Success")
    end
    ```

|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .reporplus .tooltip .badge }|-99999 |NO_ROOM_IDX {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|-1 |ROOM_DEVIL_IDX {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|-2 |ROOM_ERROR_IDX {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|-3 |ROOM_DEBUG_IDX {: .copyable } | Rooms visited via `goto` command |
|[ ](#){: .alldlc .tooltip .badge }|-4 |ROOM_DUNGEON_IDX {: .copyable } | |
|[ ](#){: .alldlc .tooltip .badge }|-5 |ROOM_BOSSRUSH_IDX {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|-6 |ROOM_BLACK_MARKET_IDX {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|-7 |ROOM_MEGA_SATAN_IDX {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|-8 |ROOM_BLUE_WOOM_IDX {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|-9 |ROOM_THE_VOID_IDX {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|-10 |ROOM_SECRET_EXIT_IDX {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|-11 |ROOM_GIDEON_DUNGEON_IDX {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|-12 |ROOM_GENESIS_IDX {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|-13 |ROOM_SECRET_SHOP_IDX {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|-14 |ROOM_ROTGUT_DUNGEON1_IDX {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|-15 |ROOM_ROTGUT_DUNGEON2_IDX {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|-16 |ROOM_BLUE_ROOM_IDX {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|-17 |ROOM_EXTRA_BOSS_IDX {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|-18 |ROOM_ANGEL_SHOP_IDX {: .copyable } | Stairway room |
|[ ](#){: .repplus .tooltip .badge }|-19 |ROOM_DEATHMATCH_IDX {: .copyable } |  |
|[ ](#){: .repplus .tooltip .badge }|-20 |ROOM_LIL_PORTAL_IDX {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|-100 |ROOM_MIRROR_IDX {: .copyable } | Not real room index, doors that point to this have special behavior |
|[ ](#){: .reporplus .tooltip .badge }|-101 |ROOM_MINESHAFT_IDX {: .copyable } | Not real room index, doors that point to this have special behavior |
|[ ](#){: .rep .tooltip .badge }|18 |NUM_OFF_GRID_ROOMS {: .copyable } |  |
|[ ](#){: .repplus .tooltip .badge }|20 |NUM_OFF_GRID_ROOMS {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|507 |MAX_GRID_ROOMS {: .copyable } |  |
|[ ](#){: .reporplus .tooltip .badge }|525 |MAX_ROOMS {: .copyable } |  |
