---
tags:
  - Class
search:
  boost: 0.25
---
# Class "EffectList"

???+ info
    You can get this class by using the following function:

    * [TemporaryEffects.GetEffectsList()](TemporaryEffects.md#geteffectslist)

    ???+ example "Example Code"
        ```lua
        local player = Isaac.GetPlayer()
        local tempEffects = player:GetEffects()
        local effectlist = tempEffects:GetEffectsList()
        ```

## Operators
### __len () {: aria-label='Operators' }
[ ](#){: .alldlc .tooltip .badge }
#### int __len ( ) {: .copyable aria-label='Operators' }

The length (#) operation. Returns the amount of [TemporaryEffects](TemporaryEffects.md) in the list.

___
## Functions
### Get () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [TemporaryEffect](TemporaryEffect.md) Get ( int idx ) {: .copyable aria-label='Functions' }

Returns the [TemporaryEffect](TemporaryEffect.md) at the index of the list provided.

___
## Variables
### Size {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .alldlc .tooltip .badge }
#### const int Size  {: .copyable aria-label='Variables' }

The amount of [TemporaryEffects](TemporaryEffects.md) in the list.

___
