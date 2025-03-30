---
tags:
  - Class
search:
  boost: 0.25
---
# Class "RoomConfigEntry"
???+ info
    You can get this class by using the following function:

    * [RoomConfig_Spawn.PickEntry](RoomConfig_Spawn.md#pickentry)

    ???+ example "Example Code"
        ```lua
        local level = Game():GetLevel()
        local roomDescriptor = level:GetCurrentRoomDesc()
        local roomConfigRoom = roomDescriptor.Data
        local spawnList = roomConfigRoom.Spawns
        local roomConfigSpawn = spawnList:Get(0)
        local roomConfigEntry = roomConfigSpawn:PickEntry(0)
        ```

## Variables
### Subtype {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int Subtype  {: .copyable aria-label='Variables' }

___
### Type {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### [EntityType](enums/EntityType.md) Type  {: .copyable aria-label='Variables' }

___
### Variant {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int Variant  {: .copyable aria-label='Variables' }

___
### Weight {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float Weight  {: .copyable aria-label='Variables' }

___
