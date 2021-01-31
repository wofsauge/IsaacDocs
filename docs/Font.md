# Class "Font"
## Constructors
### Font () {: aria-label='Constructors' }
[ ](#){: .abp .tooltip .badge }
#### void Font ( ) {: .copyable aria-label='Constructors' }

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
### DrawString () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DrawString ( string String, float PositionX, float PositionY, [KColor](../KColor) RenderColor, u_int BoxWidth, boolean Center ) {: .copyable aria-label='Functions' }
Draws a string of text to the screen
Converts UTF8 to UTF16, then draws the string. 
Notes: The BoxWidth and Center parameters can be used for aligning the text: If BoxWidth is zero, the text will be left aligned and the center parameter will be ignored If BoxWidth is NOT zero, and the Center parameter is FALSE, then the text will be right aligned inside the BoxWidth size If BoxWidth is NOT zero, and the center parameter is TRUE, then the text will be centered inside the BoxWidth size 

???- example "Example Code"
    Example usage.
    ```lua 
    local f = Font() -- init font object
    f:Load("font/terminus.fnt") -- load a font into the font object
    f:DrawString("Hello World!",60,50,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y
    
    ```

___ 
### DrawStringScaled () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DrawStringScaled ( string String, float PositionX, float PositionY, float ScaleX, float ScaleY, [KColor](../KColor) RenderColor, u_int BoxWidth, boolean Center ) {: .copyable aria-label='Functions' }
Draws a scaled string of text on the screen.
Converts UTF8 to UTF16, then draws the string. 

???- example "Example Code"
    Example usage.
    ```lua 
    local f = Font() -- init font object
    f:Load("font/terminus.fnt") -- load a font into the font object
    f:DrawStringScaled("Hello World!",60,50,0.5,0.5,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y
    
    ```

___ 
### DrawStringScaledUTF8 () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DrawStringScaledUTF8 ( string String, float PositionX, float PositionY, float ScaleX, float ScaleY, [KColor](../KColor) RenderColor, u_int BoxWidth, boolean Center ) {: .copyable aria-label='Functions' }
Draws a scaled string of Unicode text on the screen.

???- example "Example Code"
    Example usage.
    ```lua 
    local f = Font() -- init font object
    f:Load("font/terminus.fnt") -- load a font into the font object
    f:DrawStringScaledUTF8("Hello World!",60,50,0.5,0.5,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y
    
    ```

___ 
### DrawStringUTF8 () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DrawStringUTF8 ( string String, float PositionX, float PositionY, [KColor](../KColor) RenderColor, u_int BoxWidth, boolean Center ) {: .copyable aria-label='Functions' }
Draws a string of Unicode text to the screen
Notes: The BoxWidth and Center parameters can be used for aligning the text: If BoxWidth is zero, the text will be left aligned and the center parameter will be ignored If BoxWidth is NOT zero, and the Center parameter is FALSE, then the text will be right aligned inside the BoxWidth size If BoxWidth is NOT zero, and the center parameter is TRUE, then the text will be centered inside the BoxWidth size 

???- example "Example Code"
    Example usage.
    ```lua 
    local f = Font() -- init font object
    f:Load("font/terminus.fnt") -- load a font into the font object
    f:DrawStringUTF8("Hello World!",60,50,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y
    
    ```

___ 
### GetBaselineHeight () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### u_int GetBaselineHeight ( ) {: .copyable aria-label='Functions' }
Get the number of pixels from the absolute top of the line to the base of the characters 
___ 
### GetCharacterWidth () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### u_int GetCharacterWidth ( char Character ) {: .copyable aria-label='Functions' }
Returns the width of a specific character 
___ 
### GetLineHeight () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### u_int GetLineHeight ( ) {: .copyable aria-label='Functions' }
Get the distance in pixels between each line of text 
___ 
### GetStringWidth () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### u_int GetStringWidth ( string String ) {: .copyable aria-label='Functions' }
Converts UTF8 to UTF16 and returns string width
___ 
### GetStringWidthUTF8 () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### u_int GetStringWidthUTF8 ( string String ) {: .copyable aria-label='Functions' }
returns string width of a Unicode text. 
___ 
### IsLoaded () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsLoaded ( ) {: .copyable aria-label='Functions' }
Returns whether a font is loaded or not. 
___ 
### Load () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean Load ( string FilePath ) {: .copyable aria-label='Functions' }
Loads a font. 

???- example "Example Code"
    Example usage.
    ```lua 
    local f = Font() -- init font object
    f:Load("font/terminus.fnt") -- load a font into the font object
    f:DrawString("Hello World!",60,50,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y
    
    ```

___ 
### SetMissingCharacter () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetMissingCharacter ( u16 MissingCharacter ) {: .copyable aria-label='Functions' }
Converts UTF8 to UTF16, then draws
Sets the missing character to be used by the font (the character used when missing characters are encountered) 
___ 
### Unload () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Unload ( ) {: .copyable aria-label='Functions' }
Unloads all our data from memory 
___ 
