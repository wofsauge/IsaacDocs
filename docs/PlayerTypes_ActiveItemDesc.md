---
tags:
  - Class
search:
  boost: 0.25
---
# Class "PlayerTypesActiveItemDesc"

???+ info
    You can get this class by using the following function:

    * [EntityPlayer.SecondaryActiveItem](EntityPlayer.md#secondaryactiveitem)

    ???+ example "Example Code"
        ```lua
        local player = Isaac.GetPlayer()
        local activeItemDesc = player.SecondaryActiveItem
        ```

## Variables
### Battery·Charge {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int BatteryCharge  {: .copyable aria-label='Variables' }

___
### Charge {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int Charge  {: .copyable aria-label='Variables' }
For items like Jars this holds the number of flies/hearts.
___
### Item {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### [CollectibleType](enums/CollectibleType.md) Item {: .copyable aria-label='Variables' }

___
### PartialCharge {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### float PartialCharge {: .copyable aria-label='Variables' }
How close the item is to gaining another charge (0-1 range, used by 4.5 Volt)

___
### SubCharge {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int SubCharge {: .copyable aria-label='Variables' }

___
### TimedRechargeCooldown {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int TimedRechargeCooldown {: .copyable aria-label='Variables' }
Number of frames before an item with a timed cooldown can recharge again (used by Spin To Win to pause its recharge after fully discharging it)
___
### VarData {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int VarData {: .copyable aria-label='Variables' }
Holds extra information for some active items (such as the number of uses for Jar of Wisps)
___
