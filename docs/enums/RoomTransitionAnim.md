---
tags:
  - Enum
---
# Enum "RoomTransitionAnim"
|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .reporplus .tooltip .badge }|0 |WALK {: .copyable } | Mostly when using doors. Will play the correct walk animation regardless of the direction you use, as long as the direction is in the same axis as the room you're traveling too. So if the room is on the left, it'll play the correct animation whether you use Direction.LEFT or Direction.RIGHT. If you put in the wrong direction, it'll just fade to the next room (not fade to black, just fade). If you put in Direction.NO_DIRECTION it'll play a fade to black regardless. |
|[ ](#){: .reporplus .tooltip .badge }|1 |FADE {: .copyable } | Fadein/fadout used for Mom's Hand. Will play a fade to black regardless of the direction. If the direction is Direction.NO_DIRECTION the fade will be shorter. |
|[ ](#){: .reporplus .tooltip .badge }|2 |PIXELATION {: .copyable } | Fade+pixelation effect used for secret item dungeon. Will play the usual pixelation regardless of the direction. |
|[ ](#){: .reporplus .tooltip .badge }|3 |TELEPORT {: .copyable } | Will play the teleport animation and sound, then it'll play the walk animation using the direction you inputted. If Direction.NO_DIRECTION is used, it'll play a short fade to white instead of the walk animation. |
|[ ](#){: .reporplus .tooltip .badge }|4 |MAZE {: .copyable } | For curse of the maze. Like RoomTransitionAnim.WALK but better, as it will always play the walk animation you put into it. Using Direction.NO_DIRECTION will play a short fade to black. |
|[ ](#){: .reporplus .tooltip .badge }|5 |ANKH {: .copyable } | Works like RoomTransitionAnim.MAZE. |
|[ ](#){: .reporplus .tooltip .badge }|6 |DEAD_CAT {: .copyable } | Works like RoomTransitionAnim.MAZE. |
|[ ](#){: .reporplus .tooltip .badge }|7 |ONE_UP {: .copyable } | Works like RoomTransitionAnim.MAZE but plays the one up sound upon entering the room. |
|[ ](#){: .reporplus .tooltip .badge }|8 |COLLAR {: .copyable } | Works like RoomTransitionAnim.MAZE. |
|[ ](#){: .reporplus .tooltip .badge }|9 |JUDAS_SHADOW {: .copyable } | Works like RoomTransitionAnim.MAZE. |
|[ ](#){: .reporplus .tooltip .badge }|10 |LAZARUS {: .copyable } | Works like RoomTransitionAnim.MAZE. |
|[ ](#){: .reporplus .tooltip .badge }|11 |WOMB_TELEPORT {: .copyable } | For Ventricle razor teleport. Makes the player invisible and plays a fade to black. If used to change into the same room, the player's visibility won't be restored. If Direction.NO_DIRECTION is used, it'll play a shorter fade to black. |
|[ ](#){: .reporplus .tooltip .badge }|12 |GLOWING_HOURGLASS {: .copyable } | For glowing hourglass teleport. Basically the same as using the glowing hourglass item, further testing should be done to see if there are any differences. Ignores the direction and the room index inputted. |
|[ ](#){: .reporplus .tooltip .badge }|13 |D7 {: .copyable } | The same as RoomTransitionAnim.TELEPORT, but on Direction.NO_DIRECTION it'll play a fade to black, instead of a fade to white. |
|[ ](#){: .reporplus .tooltip .badge }|14 |MISSING_POSTER {: .copyable } | Works like RoomTransitionAnim.MAZE. |
|[ ](#){: .reporplus .tooltip .badge }|15 |BOSS_FORCED {: .copyable } | No transition, goes directly to boss intro (for backasswards challenge). Plays a walk animation twice. If used with Direction.NO_DIRECTION plays a short fade to black. Doesnt even skip the boss vs screen. |
|[ ](#){: .reporplus .tooltip .badge }|16 |PORTAL_TELEPORT {: .copyable } | For card reading teleport. Works like RoomTransitionAnim.WOMB_TELEPORT. |
|[ ](#){: .reporplus .tooltip .badge }|17 |FORGOTTEN_TELEPORT {: .copyable } | For the Forgotten's birthright. Works like RoomTransitionAnim.FADE. |
|[ ](#){: .reporplus .tooltip .badge }|18 |FADE_MIRROR {: .copyable } | Plays the mirror exit sound and a fade to white animation. If used with Direction.NO_DIRECTION, the fade to white is shorter. |
|[ ](#){: .reporplus .tooltip .badge }|19 |MINECART {: .copyable } | Works like RoomTransitionAnim.FADE. |
|[ ](#){: .reporplus .tooltip .badge }|20 |DEATH_CERTIFICATE {: .copyable } | The player lies down, then there's a fade to black and the player appears lying down again and gets up. Ignores the direction, but using Direction.NO_DIRECTION will make the fade shorter. The game is paused during the lying down and getting up animation. |
