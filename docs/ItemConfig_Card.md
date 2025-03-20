---
tags:
  - Class
---
# Class "ItemConfigCard"

???+ info
    You can get this class by using the following function:

    * [ItemConfig.GetCard()](ItemConfig.md#getcard)

    ???+ example "Example Code"
        `Isaac.GetItemConfig():GetCard(Card.CARD_FOOL)`

## Functions
___
### Is·Available () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean IsAvailable ( ) {: .copyable aria-label='Functions' }

___
### Is·Card () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean IsCard ( ) {: .copyable aria-label='Functions' }

___
### Is·Rune () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean IsRune ( ) {: .copyable aria-label='Functions' }

___
## Variables
### Achievement·ID {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int AchievementID  {: .copyable aria-label='Variables' }
Returns the ID of the achievement that unlocks the card. Returns ``:::lua -1`` if the card is unlocked by default.

___
### Announcer·Delay {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int AnnouncerDelay  {: .copyable aria-label='Variables' }

___
### Announcer·Voice {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int AnnouncerVoice  {: .copyable aria-label='Variables' }

___
### Card·Type {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int CardType {: .copyable aria-label='Variables' }

___
### Description {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### string Description  {: .copyable aria-label='Variables' }

Returns the description of the card.

???- warning "Warning"
    In Repentance, this function now returns ``#[CARD_NAME]_DESCRIPTION``
___
### Greed·Mode·Allowed {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean GreedModeAllowed  {: .copyable aria-label='Variables' }

Returns whether or not the item can appear in Greed or Greedier mode.
___
### Hud·Anim {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### string HudAnim  {: .copyable aria-label='Variables' }

Returns the name of the animation in `ui_cardfronts.anm2`.

???- bug "Bugs"
    This will return a blank string unless used on a modded card. Standard cards will return nothing.
___
### ID {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int ID  {: .copyable aria-label='Variables' }

Returns the ID of the given card.
___
### Mimic·Charge {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int MimicCharge {: .copyable aria-label='Variables' }

___
### Name {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### string Name  {: .copyable aria-label='Variables' }

Returns the name of the given card.
???- warning "Warning"
    In Repentance, this function now returns ``#[CARD_NAME]_NAME``

___
### Pickup·Subtype {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int PickupSubtype {: .copyable aria-label='Variables' }

___