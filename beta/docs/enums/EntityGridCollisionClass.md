# Enum "EntityGridCollisionClass"
[ ](#){: .abp .tooltip .badge }
|Enumerator|comment|id|
|:--:|:--:|:--:|
| GRIDCOLL_NONE |  | 0 |
| GRIDCOLL_WALLS_X | only collide with vertical walls <br> | 1 |
| GRIDCOLL_WALLS_Y | only collide with horizontal walls <br> | 2 |
| GRIDCOLL_WALLS | only collide with walls <br> | 3 |
| GRIDCOLL_BULLET | detect collision with solids (no pits), don't correct position <br> | 4 |
| GRIDCOLL_GROUND | collide with all grid entities (rocks, pits, ..), correct position <br> | 5 |
| GRIDCOLL_NOPITS | collide with all grid entities except pits and correct position <br> | 6 |