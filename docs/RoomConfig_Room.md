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
[ ](#){: .abrep .tooltip .badge }
#### [Difficulty](enums/Difficulty.md) Difficulty {: .copyable aria-label='Variables' }

___ 
### Doors {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Doors  {: .copyable aria-label='Variables' }

___ 
### Height {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Height  {: .copyable aria-label='Variables' }

___ 
### Initial·Weight {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float InitialWeight  {: .copyable aria-label='Variables' }

___ 
### Name {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### string Name  {: .copyable aria-label='Variables' }

___ 
### Shape {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [RoomShape](enums/RoomShape.md) Shape  {: .copyable aria-label='Variables' }

___ 
### Spawn·Count {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int SpawnCount  {: .copyable aria-label='Variables' }

___ 
### Spawns {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [SpawnList](CppContainer_ArrayProxy_RoomConfigSpawns.md) Spawns  {: .copyable aria-label='Variables' }

___ 
### Stage·ID {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int StageID  {: .copyable aria-label='Variables' }
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
[ ](#){: .abrep .tooltip .badge }
#### int Subtype  {: .copyable aria-label='Variables' }

___ 
### Type {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [RoomType](enums/RoomType.md) Type  {: .copyable aria-label='Variables' }

___ 
### Variant {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Variant  {: .copyable aria-label='Variables' }

___ 
### Weight {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Weight  {: .copyable aria-label='Variables' }

___ 
### Width {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Width  {: .copyable aria-label='Variables' }

___ 
