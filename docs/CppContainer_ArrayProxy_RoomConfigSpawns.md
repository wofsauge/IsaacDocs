---
tags:
  - Class
search:
  boost: 0.25
---
# Class "RoomConfigSpawns"

???+ info
    You can get this class by using the following function:

    * [RoomConfigRoom.Spawns](RoomConfig_Room.md#spawns)

    ???+ example "Example Code"
        ```lua
        local level = Game():GetLevel()
        local roomDescriptor = level:GetCurrentRoomDesc()
        local roomConfigRoom = roomDescriptor.Data
        local spawnList = roomConfigRoom.Spawns
        ```

## Operators
### __len () {: aria-label='Operators' }
[ ](#){: .alldlc .tooltip .badge }
#### int __len ( ) {: .copyable aria-label='Operators' }

The length (#) operation. Returns the amount of spawnables in this list.

___
## Functions
### Get () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [RoomConfig Spawn](RoomConfig_Spawn.md) Get ( int idx ) {: .copyable aria-label='Functions' }

Returns a [RoomConfig Spawn](RoomConfig_Spawn.md) at the index of the list provided.

___
## Variables
### Size {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .alldlc .tooltip .badge }
#### const int Size  {: .copyable aria-label='Variables' }

The amount of spawnables in the list.

___
