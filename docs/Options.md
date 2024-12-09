---
tags:
  - Globals
  - Class
---
# Global Class "Options"

???+ info
    You can get this class by using the `Options` global table.

    The `Options` class represents the values contained within the user's `options.ini` file. For example, this is useful so that mods that add things to the HUD can properly account for the `HUDOffset`.

    Note that mods have free reign to modify these values, so it is possible for a mod to e.g. change the volume to max and play sound effects. Please use this class responsibly.

    The `Options` class is a singleton that is exposed as a global variable. Thus, you can directly get and set values in the class without having to do anything first:

    ???+ example "Example Code"
        ```lua
        local bulletVisibility = Options.BulletVisibility -- "bulletVisibility" is now set to true or false
        Options.ChargeBars = true -- Force charge bars to be on for the player
        ```

## Variables
### Announcer·Voice·Mode {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int AnnouncerVoiceMode  {: .copyable aria-label='Variables' }
0: random, 1: off, 2: always on

___
### Bullet·Visibility {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### boolean BulletVisibility  {: .copyable aria-label='Variables' }

___
### Camera·Style {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int CameraStyle  {: .copyable aria-label='Variables' }
active cam 1: on, 2: off

___
### Charge·Bars {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### boolean ChargeBars  {: .copyable aria-label='Variables' }

___
### Console·Font {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int ConsoleFont  {: .copyable aria-label='Variables' }
0: default, 1: small, 2: tiny

___
### Debug·Console·Enabled {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### boolean DebugConsoleEnabled  {: .copyable aria-label='Variables' }

___
### Display·Popups {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### boolean DisplayPopups  {: .copyable aria-label='Variables' }

___
### Extra·HUD·Style {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int ExtraHUDStyle  {: .copyable aria-label='Variables' }
0: off, 1: on, 2: mini

___
### Faded·Console·Display {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### boolean FadedConsoleDisplay  {: .copyable aria-label='Variables' }

___
### Filter {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### boolean Filter  {: .copyable aria-label='Variables' }

___
### Found·HUD {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### boolean FoundHUD  {: .copyable aria-label='Variables' }

___
### Fullscreen {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### boolean Fullscreen  {: .copyable aria-label='Variables' }

___
### Gamma {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### float Gamma  {: .copyable aria-label='Variables' }
0.5-1.5

___
### HUD·Offset {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### float HUDOffset  {: .copyable aria-label='Variables' }
0-1

Each notch in the options menu increments or decrements this by 0.1.

___
### JacobEsauControls {: aria-label='Variables' }
[ ](#){: .repplus .tooltip .badge }
#### string JacobEsauControls  {: .copyable aria-label='Variables' }
Added with Repentance+.

___
### Language {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### string Language  {: .copyable aria-label='Variables' }
Read only

___
### Map·Opacity {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### float MapOpacity  {: .copyable aria-label='Variables' }
0-1

___
### Max·Render·Scale {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int MaxRenderScale  {: .copyable aria-label='Variables' }
1-99

___
### Max·Scale {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### int MaxScale  {: .copyable aria-label='Variables' }
1-99

___
### Mouse·Control {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### boolean MouseControl  {: .copyable aria-label='Variables' }

___
### Music·Volume {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### float MusicVolume  {: .copyable aria-label='Variables' }
0-1

Attempting to set this to anything other than 0 or 1 will result in a bugged value. Thus, mods should never set this, lest they permanently blow away the end-user's previous setting.

___
### Pause·On·Focus·Lost {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### boolean PauseOnFocusLost  {: .copyable aria-label='Variables' }

___
### Rumble·Enabled {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### boolean RumbleEnabled  {: .copyable aria-label='Variables' }

___
### Save·Command·History {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### boolean SaveCommandHistory  {: .copyable aria-label='Variables' }

___
### SFX·Volume {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### float SFXVolume  {: .copyable aria-label='Variables' }
0-1

Attempting to set this to anything other than 0 or 1 will result in a bugged value. Thus, mods should never set this, lest they permanently blow away the end-user's previous setting.

___
### Use·Borderless·Fullscreen {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### boolean UseBorderlessFullscreen  {: .copyable aria-label='Variables' }
Only takes effect if Fullscreen is also true.

___
### VSync {: aria-label='Variables' }
[ ](#){: .rep .tooltip .badge }
#### boolean VSync  {: .copyable aria-label='Variables' }

___
