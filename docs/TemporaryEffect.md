---
tags:
  - Class
search:
  boost: 0.25
---
# Class "TemporaryEffect"

???+ info
    You can get this class by using the following functions:

    * [TemporaryEffects:GetCollectibleEffect()](TemporaryEffects.md#getcollectibleeffect)
    * [TemporaryEffects:GetNullEffect()](TemporaryEffects.md#getnulleffect)
    * [TemporaryEffects:GetTrinketEffect()](TemporaryEffects.md#gettrinketeffect)

    ???+ example "Example Code"
        ```lua
        local player = Isaac.GetPlayer()
        local tempEffects = player:GetEffects()
        local tempEffect = tempEffects:GetCollectibleEffect(CollectibleType.COLLECTIBLE_SAD_ONION)
        ```

## Variables
### Cooldown {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int Cooldown  {: .copyable aria-label='Variables' }

___
### Count {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int Count  {: .copyable aria-label='Variables' }

___
### Item {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### [ItemConfig Item](ItemConfig_Item.md) Item {: .copyable aria-label='Variables' }

___
