---
tags:
  - Globals
  - Class
search:
  boost: 0.25
---
# Class "EntityPtr"

???+ info
    This class can be accessed by using its constructor:

    ???+ example "Example Code"
        ```lua
        local myPointer = EntityPtr(Isaac.GetPlayer())
        ```

## Constructors
### Entity·Ptr () {: aria-label='Constructors' }
[ ](#){: .const .tooltip .badge } [ ](#){: .alldlc .tooltip .badge }
#### const [EntityPtr](EntityPtr.md) EntityPtr ( [Entity](Entity.md) ) {: .copyable aria-label='Constructors' }

The constructor is a global function. For example

```lua
local playerPtr = nil

local function postPlayerInit(player)
  playerPtr = EntityPtr(player)
end

local function postGameStarted()
  local player = getPlayerFromPtr(playerPtr)
end

local function getPlayerFromPtr()
  if playerPtr == nil then
    return nil
  end

  if playerPtr.Ref == nil then
    return nil
  end

  return playerPtr.Ref:ToPlayer()
end
```

___
## Functions
### Set·Reference () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetReference ( [Entity](Entity.md) ref ) {: .copyable aria-label='Functions' }

___
## Variables
### Ref {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### [Entity](Entity.md) Ref {: .copyable aria-label='Variables' }

This is set to `nil` automatically if the Entity this was previously referring to no longer exists. This is useful to safely store a reference to an Entity in something like a table, as otherwise there can be unexpected behavior if the Entity is stored directly (e.g. crashes, variable can start referring to a different entity).

___
