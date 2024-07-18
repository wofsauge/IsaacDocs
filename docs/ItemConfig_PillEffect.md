---
tags:
  - Class
---
# Class "ItemConfigPillEffect"

???+ info
    You can get this class by using the following function:

    * [ItemConfig.GetPillEffect()](ItemConfig.md#getpilleffect)

    ???+ example "Example Code"
        `Isaac.GetItemConfig():GetPillEffect(PillEffect.PILLEFFECT_BAD_GAS)`

## Functions
___
### Is·Available () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean IsAvailable ( ) {: .copyable aria-label='Functions' }

___
## Variables
### Achievement·ID {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int AchievementID  {: .copyable aria-label='Variables' }

The ID of the achievement that unlocks the pill effect. Returns ``:::lua -1`` by default.
___
### Announcer·Delay {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int AnnouncerDelay  {: .copyable aria-label='Variables' }

___
### Announcer·Voice {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int AnnouncerVoice  {: .copyable aria-label='Variables' }

___
### Announcer·Voice·Super {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int AnnouncerVoiceSuper  {: .copyable aria-label='Variables' }

___
### Effect·Class {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int EffectClass  {: .copyable aria-label='Variables' }
???+ bug "Bug"
    This variable is broken and returns userdata.

___
### Effect·Sub·Class {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int EffectSubClass  {: .copyable aria-label='Variables' }
???+ bug "Bug"
    This variable is broken and returns userdata.

___
### Greed·Mode·Allowed {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean GreedModeAllowed  {: .copyable aria-label='Variables' }

Returns if the pill effect is allowed in Greed mode. Returns ``:::lua true`` by default.
___
### ID {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int ID  {: .copyable aria-label='Variables' }

Returns the pill effect's ID.
___
### Mimic·Charge {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int MimicCharge  {: .copyable aria-label='Variables' }

___
### Name {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### string Name  {: .copyable aria-label='Variables' }

Returns the name of the pill effect.

???- warning "Warning"
    In Repentance, returns "#[PILL_NAME]" rather than the pill effect's ingame name. (i.e. Balls of Steel will return #BALLS_OF_STEEL_NAME)
___
