# Class "TemporaryEffect"

???+ info
    You can get this class by using the following functions:

    * [TemporaryEffects:GetCollectibleEffect()](EntityPlayer.md#getcollectibleeffect)
    * [TemporaryEffects:GetNullEffect()](EntityPlayer.md#getnulleffect)
    * [TemporaryEffects:GetTrinketEffect()](EntityPlayer.md#gettrinketeffect)

    ???+ example "Example Code"
        ```lua
        local player = Isaac.GetPlayer(0)
        local tempEffects = player:GetEffects()
        local tempEffect = tempEffects:GetCollectibleEffect(CollectibleType.COLLECTIBLE_SAD_ONION)
        ```
        
## Variables
### Cooldown {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Cooldown  {: .copyable aria-label='Variables' }

___ 
### Count {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Count  {: .copyable aria-label='Variables' }

___ 
### Item {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [ItemConfig Item](ItemConfig_Item.md) Item {: .copyable aria-label='Variables' }

___ 
