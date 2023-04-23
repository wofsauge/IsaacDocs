---
tags:
  - Globals
  - Class
---
# Class "Font"
## Constructors
### Font () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [Font](Font.md) Font ( ) {: .copyable aria-label='Constructors' }

Constructor for the "Font" class.

???- example "Example Code"
    Example usage.
    ```lua
    local f = Font() -- init font object
    f:Load("font/terminus.fnt") -- load a font into the font object
    f:DrawString("Hello World!",60,50,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y

    ```

___
## Functions
### Draw·String () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void DrawString ( string String, float PositionX, float PositionY, [KColor](KColor.md) RenderColor, int BoxWidth = 0, boolean Center = false ) {: .copyable aria-label='Functions' }
Draws a string of text to the screen
Converts UTF8 to UTF16, then draws the string.
Notes: The BoxWidth and Center parameters can be used for aligning the text: If BoxWidth is zero, the text will be left aligned and the center parameter will be ignored If BoxWidth is NOT zero, and the Center parameter is FALSE, then the text will be right aligned inside the BoxWidth size If BoxWidth is NOT zero, and the center parameter is TRUE, then the text will be centered inside the BoxWidth size

???- bug "Bug"
    Calling this function with `nil` as either the `String` or `RenderColor` parameters will crash the game.

???- example "Example Code"
    Example usage.
    ```lua
    -- In an initialization function:
    local f = Font() -- init font object
    f:Load("font/terminus.fnt") -- load a font into the font object

    -- In a render function on every frame:
    f:DrawString("Hello World!",60,50,KColor(1,1,1,1),0,true) -- render string with loaded font on position (60, 50)
    ```

___
### Draw·String·Scaled () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void DrawStringScaled ( string String, float PositionX, float PositionY, float ScaleX, float ScaleY, [KColor](KColor.md) RenderColor, int BoxWidth = 0, boolean Center = false ) {: .copyable aria-label='Functions' }
Draws a scaled string of text on the screen.
Converts UTF8 to UTF16, then draws the string.

???- bug "Bug"
    Calling this function with `nil` as either the `String` or `RenderColor` parameters will crash the game.

???- example "Example Code"
    Example usage.
    ```lua
    local f = Font() -- init font object
    f:Load("font/terminus.fnt") -- load a font into the font object
    f:DrawStringScaled("Hello World!",60,50,0.5,0.5,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y

    ```

___
### Draw·String·Scaled·UTF8 () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void DrawStringScaledUTF8 ( string String, float PositionX, float PositionY, float ScaleX, float ScaleY, [KColor](KColor.md) RenderColor, int BoxWidth = 0, boolean Center = false ) {: .copyable aria-label='Functions' }
Draws a scaled string of Unicode text on the screen.

???- bug "Bug"
    Calling this function with `nil` as either the `String` or `RenderColor` parameters will crash the game.

???- example "Example Code"
    Example usage.
    ```lua
    local f = Font() -- init font object
    f:Load("font/terminus.fnt") -- load a font into the font object
    f:DrawStringScaledUTF8("Hello World!",60,50,0.5,0.5,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y

    ```

___
### Draw·String·UTF8 () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void DrawStringUTF8 ( string String, float PositionX, float PositionY, [KColor](KColor.md) RenderColor, int BoxWidth = 0, boolean Center = false ) {: .copyable aria-label='Functions' }
Draws a string of Unicode text to the screen
Notes: The BoxWidth and Center parameters can be used for aligning the text: If BoxWidth is zero, the text will be left aligned and the center parameter will be ignored If BoxWidth is NOT zero, and the Center parameter is FALSE, then the text will be right aligned inside the BoxWidth size If BoxWidth is NOT zero, and the center parameter is TRUE, then the text will be centered inside the BoxWidth size

???- bug "Bug"
    Calling this function with `nil` as either the `String` or `RenderColor` parameters will crash the game.

???- example "Example Code"
    Example usage.
    ```lua
    local f = Font() -- init font object
    f:Load("font/terminus.fnt") -- load a font into the font object
    f:DrawStringUTF8("Hello World!",60,50,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y

    ```

___
### Get·Baseline·Height () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetBaselineHeight ( ) {: .copyable aria-label='Functions' }
Get the number of pixels from the absolute top of the line to the base of the characters
___
### Get·Character·Width () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetCharacterWidth ( char Character ) {: .copyable aria-label='Functions' }
Returns the width of a specific character
___
### Get·Line·Height () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetLineHeight ( ) {: .copyable aria-label='Functions' }
Get the distance in pixels between each line of text
___
### Get·String·Width () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetStringWidth ( string String ) {: .copyable aria-label='Functions' }
Converts UTF8 to UTF16 and returns string width

???- bug "Bug"
    Calling this function with `nil` as parameter will crash the game.
___
### Get·String·Width·UTF8 () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetStringWidthUTF8 ( string String ) {: .copyable aria-label='Functions' }
returns string width of a Unicode text.
___
### Is·Loaded () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsLoaded ( ) {: .copyable aria-label='Functions' }
Returns whether a font is loaded or not.
___
### Load () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Load ( string FilePath ) {: .copyable aria-label='Functions' }
Loads a font.

???- note "Note"
    To check that the font actually got loaded, call the [IsLoaded()](#isloaded) method afterwards.

???- example "Example Code"
    Example usage.
    ```lua
    local f = Font() -- init font object
    f:Load("font/terminus.fnt") -- load a font into the font object
    f:DrawString("Hello World!",60,50,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y

    ```

___
### Set·Missing·Character () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetMissingCharacter ( char MissingCharacter ) {: .copyable aria-label='Functions' }
Converts UTF8 to UTF16, then draws
Sets the missing character to be used by the font (the character used when missing characters are encountered)
___
### Unload () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Unload ( ) {: .copyable aria-label='Functions' }
Unloads all our data from memory
___
