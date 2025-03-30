---
tags:
  - Class
search:
  boost: 0.25
---
# Class "ItemConfigList"

???+ info
    You can get this class by using the following function:

    * [ItemConfig.GetNullItems()](ItemConfig.md#getnullitems)
    * [ItemConfig.GetTrinkets()](ItemConfig.md#gettrinkets)

    ???+ example "Example Code"
        `local effects = Isaac.GetItemConfig():GetTrinkets()`

## Operators
### __len () {: aria-label='Operators' }
[ ](#){: .alldlc .tooltip .badge }
#### int __len ( ) {: .copyable aria-label='Operators' }

The length (#) operation. Returns the amount of items in the list.

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

The amount of items in the list.

___
