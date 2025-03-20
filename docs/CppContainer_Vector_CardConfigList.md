---
tags:
  - Class
search:
  boost: 0.25
---
# Class "CardConfigList"

???+ info
    You can get this class by using the following function:

    * [ItemConfig.GetCards()](ItemConfig.md#getcards)

    ???+ example "Example Code"
        `local cardConfigs = Isaac.GetItemConfig():GetCards()`

## Operators
### __len () {: aria-label='Operators' }
[ ](#){: .alldlc .tooltip .badge }
#### int __len ( ) {: .copyable aria-label='Operators' }

The length (#) operation. Returns the amount of cards in the list.

___
## Functions
### Get () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### userdata Get ( int idx ) {: .copyable aria-label='Functions' }

Returns userdata at the index of the list provided.

???+ bug "Bugs"
    This function does not return usable userdata, rendering it useless.

___
## Variables
### Size {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .alldlc .tooltip .badge }
#### const int Size  {: .copyable aria-label='Variables' }

The amount of cards in the list.

___
