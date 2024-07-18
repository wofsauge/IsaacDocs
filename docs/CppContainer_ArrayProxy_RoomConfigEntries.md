---
tags:
  - Class
search:
  boost: 0.25
---
# Class "RoomConfigEntries"

???+ info
    You can get this class by using the following function:

    * [RoomConfigSpawn.Entries](RoomConfigSpawns.md#entries)

    ???+ example "Example Code"
        ```lua
        local level = Game():GetLevel()
        local roomDescriptor = level:GetCurrentRoomDesc()
        local roomConfigRoom = roomDescriptor.Data
        local spawnList = roomConfigRoom.Spawns
        local roomConfigSpawn = spawnList:Get(0)
        local entries = roomConfigSpawn.Entries
        ```

## Operators
### __len () {: aria-label='Operators' }
[ ](#){: .abrep .tooltip .badge }
#### int __len ( ) {: .copyable aria-label='Operators' }

The length (#) operation. Returns the size of this list.

___
## Functions
### Get () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [RoomConfig Entry](RoomConfig_Entry.md) Get ( int idx ) {: .copyable aria-label='Functions' }

___
## Variables
### Size {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const int Size  {: .copyable aria-label='Variables' }

___
