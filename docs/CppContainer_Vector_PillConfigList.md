---
tags:
  - Class
search:
  boost: 0.25
---
# Class "PillConfigList"

???+ info
    You can get this class by using the following function:

    * [ItemConfig.GetPillEffects()](ItemConfig.md#getpilleffects)

    ???+ example "Example Code"
        `local effects = Isaac.GetItemConfig():GetPillEffects()`

## Operators
### __len () {: aria-label='Operators' }
[ ](#){: .abrep .tooltip .badge }
#### int __len ( ) {: .copyable aria-label='Operators' }

The length (#) operation. Returns the amount of pill effects in the list.

___
## Functions
### Get () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### userdata Get ( int idx ) {: .copyable aria-label='Functions' }

Returns userdata at the index of the list provided.

???+ bug "Bugs"
    This function does not return usable userdata, rendering it useless.

___
## Variables
### Size {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const int Size  {: .copyable aria-label='Variables' }

The amount of pill effects in the list.

___
