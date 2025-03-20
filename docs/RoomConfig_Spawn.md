---
tags:
  - Class
search:
  boost: 0.25
---
# Class "RoomConfigSpawn"

???+ info
    You can get this class by using the following function:

    * [RoomConfigSpawns.Get](CppContainer_ArrayProxy_RoomConfigSpawns.md#get)

    ???+ example "Example Code"
        ```lua
        local level = Game():GetLevel()
        local roomDescriptor = level:GetCurrentRoomDesc()
        local roomConfigRoom = roomDescriptor.Data
        local spawnList = roomConfigRoom.Spawns
        local roomConfigSpawn = spawnList:Get(0)
        ```

## Functions
### Pick·Entry () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .alldlc .tooltip .badge }
#### const [RoomConfig Entry](RoomConfig_Entry.md) PickEntry ( float r ) {: .copyable aria-label='Functions' }
r is a value between 0 and 1
___
## Variables
### Entries {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### [RoomConfigEntries](CppContainer_ArrayProxy_RoomConfigEntries.md) Entries  {: .copyable aria-label='Variables' }

___

### Entry·Count {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int EntryCount  {: .copyable aria-label='Variables' }

___
### Sum·Weights {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float SumWeights  {: .copyable aria-label='Variables' }

___
### X {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int X  {: .copyable aria-label='Variables' }

___
### Y {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int Y  {: .copyable aria-label='Variables' }

___
