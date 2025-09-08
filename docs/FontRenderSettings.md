---
tags:
  - Globals
  - Class
---
# Class "FontRenderSettings"

???+ info
    This class was added with Repentance+ and is used in the [Font:DrawString()](Font.md#drawstring) function to define special behavior when rendering a text.

    This class can be accessed by using its constructor:

    ???+ example "Example Code"
        ```lua
        local settings = FontRenderSettings()
        ```

## Constructors
### FontRenderSettings () {: aria-label='Constructors' }
[ ](#){: .repplus .tooltip .badge }
#### [FontRenderSettings](FontRenderSettings.md) FontRenderSettings ( ) {: .copyable aria-label='Constructors' }

Returns a Game object.

???- example "Example Code"
    Example usage:
    ```lua
    local settings = FontRenderSettings()
    settings:EnableAutoWrap()
    --returns true if the font settings have autowrap enabled

    ```
___
## Functions
### Enable·Auto·Wrap () {: aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### void EnableAutoWrap ( boolean enabled ) {: .copyable aria-label='Functions' }

___
### Enable·Truncation () {: aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### void EnableTruncation ( boolean enabled ) {: .copyable aria-label='Functions' }

___
### Get·Alignment () {: aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### [DrawStringAlignment](enums/DrawStringAlignment.md) GetAlignment ( ) {: .copyable aria-label='Functions' }

___
### Get·Line·Height·Modifier () {: aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### float GetLineHeightModifier ( ) {: .copyable aria-label='Functions' }

___
### Get·Max·Characters () {: aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### int GetMaxCharacters ( ) {: .copyable aria-label='Functions' }

___
### Get·Missing·Character·Override () {: aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### int GetMissingCharacterOverride ( ) {: .copyable aria-label='Functions' }

___
### Is·Auto·Wrap·Enabled () {: aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### boolean IsAutoWrapEnabled ( ) {: .copyable aria-label='Functions' }

___
### Is·Truncation·Enabled () {: aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### boolean IsTruncationEnabled ( ) {: .copyable aria-label='Functions' }

___
### Set·Alignment () {: aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### void SetAlignment ( [DrawStringAlignment](enums/DrawStringAlignment.md) alignment ) {: .copyable aria-label='Functions' }

___
### Set·Line·Height·Modifier () {: aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### void SetLineHeightModifier ( float value ) {: .copyable aria-label='Functions' }

___
### Set·Max·Characters () {: aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### void SetMaxCharacters ( int maxChars ) {: .copyable aria-label='Functions' }

___
### Set·Missing·Character·Override () {: aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### void SetMissingCharacterOverride ( int character ) {: .copyable aria-label='Functions' }
Sets the default character used when a character that needs to be rendered is missing. This overrides previous [Font:SetMissingCharacter()](Font.md#setmissingcharacter) settings.

___
