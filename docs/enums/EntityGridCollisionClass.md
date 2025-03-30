---
tags:
  - Enum
---
# Enum "EntityGridCollisionClass"
|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|0 |GRIDCOLL_NONE {: .copyable } |  |
|[ ](#){: .alldlc .tooltip .badge }|1 |GRIDCOLL_WALLS_X {: .copyable } | only collide with vertical walls |
|[ ](#){: .alldlc .tooltip .badge }|2 |GRIDCOLL_WALLS_Y {: .copyable } | only collide with horizontal walls |
|[ ](#){: .alldlc .tooltip .badge }|3 |GRIDCOLL_WALLS {: .copyable } | only collide with walls |
|[ ](#){: .alldlc .tooltip .badge }|4 |GRIDCOLL_BULLET {: .copyable } | detect collision with solids (no pits), don't correct position |
|[ ](#){: .alldlc .tooltip .badge }|5 |GRIDCOLL_GROUND {: .copyable } | collide with all grid entities (rocks, pits, ..), correct position |
|[ ](#){: .alldlc .tooltip .badge }|6 |GRIDCOLL_NOPITS {: .copyable } | collide with all grid entities except pits and correct position |
|[ ](#){: .rep .tooltip .badge }|7 |GRIDCOLL_PITSONLY {: .copyable } | moving inside a pit, collide with everything else, correct position |