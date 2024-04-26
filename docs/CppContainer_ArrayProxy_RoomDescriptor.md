---
tags:
  - Class
search:
  boost: 0.25
---
# Class "RoomDescriptor"

???+ info
    You can get this class by using the following function:

    * [Level.GetCurrentRoomDesc](Level.md#getcurrentroomdesc)
    * [Level.GetLastRoomDesc](Level.md#getlastroomdesc)
    * [Level.GetRoomByIdx](Level.md#getroombyidx)

    ???+ example "Example Code"
        ```lua
        local level = Game():GetLevel()
        local roomDescriptor = level:GetCurrentRoomDesc()
        ```

## Operators
### __len () {: aria-label='Operators' }
[ ](#){: .abrep .tooltip .badge }
#### int __len ( ) {: .copyable aria-label='Operators' }

The length (#) operation. Returns the amount of rooms in the list.

___
## Functions
### Get () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [RoomDescriptor](RoomDescriptor.md) Get ( int idx ) {: .copyable aria-label='Functions' }

Returns a [RoomDescriptor](RoomDescriptor.md) at the index of the list provided.

___
## Variables
### Size {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const int Size  {: .copyable aria-label='Variables' }

The amount of rooms in the list.

___
