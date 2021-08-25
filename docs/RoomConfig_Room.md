# Class "RoomConfig::Room"
???+ info
    You can get this class by using the following functions:

    * [RoomDescriptor.Data](RoomDescriptor.md#data)
    * [RoomDescriptor.OverrideData](RoomDescriptor.md#overridedata)

    ???+ example "Example Code"
        ```lua
        local level = Game():GetLevel()
        local roomDescriptor = level:GetCurrentRoomDesc()
        local roomConfigRoom = roomDescriptor.Data
        ```
## Variables
### Difficulty {: aria-label='Variables' }
[ ](#){: .const .abrep .tooltip .badge }
#### const [Difficulty](enums/Difficulty.md) Difficulty {: .copyable aria-label='Variables' }

___ 
### Doors {: aria-label='Variables' }
[ ](#){: .const .abrep .tooltip .badge }
#### const int Doors  {: .copyable aria-label='Variables' }
Returns a bitmask of the positions of the doors in this room. It is  a combination of bit flags of the DoorSlotFlag enum, which is defined as follows:

```lua
enum DoorSlotFlag {
  LEFT0 = 1 << DoorSlot.LEFT0,
  UP0 = 1 << DoorSlot.UP0,
  RIGHT0 = 1 << DoorSlot.RIGHT0,
  DOWN0 = 1 << DoorSlot.DOWN0,
  LEFT1 = 1 << DoorSlot.LEFT1,
  UP1 = 1 << DoorSlot.UP1,
  RIGHT1 = 1 << DoorSlot.RIGHT1,
  DOWN1 = 1 << DoorSlot.DOWN1,
}
```
___ 
### Height {: aria-label='Variables' }
[ ](#){: .const .abrep .tooltip .badge }
#### const int Height  {: .copyable aria-label='Variables' }

___ 
### Initial·Weight {: aria-label='Variables' }
[ ](#){: .const .abrep .tooltip .badge }
#### const float InitialWeight  {: .copyable aria-label='Variables' }

___ 
### Name {: aria-label='Variables' }
[ ](#){: .const .abrep .tooltip .badge }
#### const string Name  {: .copyable aria-label='Variables' }

___ 
### Shape {: aria-label='Variables' }
[ ](#){: .const .abrep .tooltip .badge }
#### const [RoomShape](enums/RoomShape.md) Shape  {: .copyable aria-label='Variables' }

___ 
### Spawn·Count {: aria-label='Variables' }
[ ](#){: .const .abrep .tooltip .badge }
#### const int SpawnCount  {: .copyable aria-label='Variables' }

___ 
### Spawns {: aria-label='Variables' }
[ ](#){: .const .abrep .tooltip .badge }
#### const [SpawnList](CppContainer_ArrayProxy_RoomConfigSpawns.md) Spawns  {: .copyable aria-label='Variables' }

___ 
### Stage·ID {: aria-label='Variables' }
[ ](#){: .const .abrep .tooltip .badge }
#### const int StageID  {: .copyable aria-label='Variables' }
The stage the room was designed for.

???- note "Stage IDs (corresponds to ids in stages.xml)"
    
    | ID | Backdrop | Notes |
    |--:|:--||
    |0|Special Rooms||
    |1|Basement||
    |2|Cellar||
    |3|Burning Basement||
    |4|Caves||
    |5|Catacombs||
    |6|Drowned Caves||
    |7|Depths||
    |8|Necropolis||
    |9|Dank Depths||
    |10|Womb||
    |11|Utero||
    |12|Scarred Womb||
    |13|Blue Womb (Hush)||
    |14|Sheol||
    |15|Cathedral||
    |16|Dark Room||
    |17|Chest||
    |18|Special Rooms (Greed Mode)||
    |19|Basement (Greed Mode)|Normally inaccessible. In greed mode, the main room is based off of the Special Rooms (Greed Mode) file.|
    |20|Caves (Greed Mode)|Normally inaccessible unless in the first variant of unused stage 13. In greed mode, the main room is based off of the Special Rooms (Greed Mode) file.|
    |21|Depths (Greed Mode)|Normally inaccessible unless in the second variant of unused stage 13. In greed mode, the main room is based off of the Special Rooms (Greed Mode) file.|
    |22|Womb (Greed Mode)|Normally inaccessible unless in the third variant of unused stage 13. In greed mode, the main room is based off of the Special Rooms (Greed Mode) file.|
    |23|Sheol (Greed Mode)|Normally inaccessible. In greed mode, the main room is based off of the Special Rooms (Greed Mode) file.|
    |24|The Shop (Greed Mode)|Normally inaccessible. In greed mode, the main room is based off of the Special Rooms (Greed Mode) file.|
    |25|Ultra Greed (Greed Mode)||
    |26|The Void|Normally inaccessible. This stage uses rooms from other stages, and will return their respective values.|

___ 
### Subtype {: aria-label='Variables' }
[ ](#){: .const .abrep .tooltip .badge }
#### const int Subtype  {: .copyable aria-label='Variables' }

___ 
### Type {: aria-label='Variables' }
[ ](#){: .const .abrep .tooltip .badge }
#### const [RoomType](enums/RoomType.md) Type  {: .copyable aria-label='Variables' }

___ 
### Variant {: aria-label='Variables' }
[ ](#){: .const .abrep .tooltip .badge }
#### const int Variant  {: .copyable aria-label='Variables' }

___ 
### Weight {: aria-label='Variables' }
[ ](#){: .const .abrep .tooltip .badge }
#### const float Weight  {: .copyable aria-label='Variables' }

___ 
### Width {: aria-label='Variables' }
[ ](#){: .const .abrep .tooltip .badge }
#### const int Width  {: .copyable aria-label='Variables' }

___ 
