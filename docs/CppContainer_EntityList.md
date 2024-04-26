---
tags:
  - Class
search:
  boost: 0.25
---
# Class "EntityList"

???+ info
    You can get this class by using the following function:

    * [EntityNPC.QueryNPCsGroup()](EntityNPC.md#querynpcsgroup)
    * [EntityNPC.QueryNPCsSpawnerType()](EntityNPC.md#querynpcsspawnertype)
    * [EntityNPC.QueryNPCsType()](EntityNPC.md#querynpcstype)
    * [Isaac.GetRoomEntities()](Isaac.md#getroomentities)
    * [Room.GetEntities()](Room.md#getentities)

    ???+ example "Example Code"
        `local entities = Isaac.GetRoomEntities()`

## Operators
### __len () {: aria-label='Operators' }
[ ](#){: .abrep .tooltip .badge }
#### int __len ( ) {: .copyable aria-label='Operators' }

The length (#) operation. Returns the amount of entities in the list.

___
## Functions
### Get () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.md) Get ( int idx ) {: .copyable aria-label='Functions' }

Returns an [Entity](Entity.md) at the index of the list provided.

___
## Variables
### Size {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const int Size  {: .copyable aria-label='Variables' }

The amount of entities in the list.

___
