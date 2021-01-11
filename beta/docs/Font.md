# Class "Font"
## Functions
[ ](#){: .abp .tooltip .badge }
### [Font](../Font) () {: aria-label='Functions' }
#### void [Font](../Font) ( void )  {: aria-label='Functions' }

Constructor for the "Font" class.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
Example usage.
```cpp 
local f = Font() -- init font object
f:Load("font/terminus.fnt") -- load a font into the font object
f:DrawString("Hello World!",60,50,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y

```

___ 
[ ](#){: .abp .tooltip .badge }
### DrawString () {: aria-label='Functions' }
#### void DrawString ( string String, float PositionX, float PositionY, [KColor](../KColor) RenderColor, u_int BoxWidth, boolean Center )  {: aria-label='Functions' }
Draws a string of text to the screen
Converts UTF8 to UTF16, then draws the string. 
Notes: The BoxWidth and Center parameters can be used for aligning the text: If BoxWidth is zero, the text will be left aligned and the center parameter will be ignored If BoxWidth is NOT zero, and the Center parameter is FALSE, then the text will be right aligned inside the BoxWidth size If BoxWidth is NOT zero, and the center parameter is TRUE, then the text will be centered inside the BoxWidth size 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
Example usage.
```cpp 
local f = Font() -- init font object
f:Load("font/terminus.fnt") -- load a font into the font object
f:DrawString("Hello World!",60,50,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y

```

___ 
[ ](#){: .abp .tooltip .badge }
### DrawStringScaled () {: aria-label='Functions' }
#### void DrawStringScaled ( string String, float PositionX, float PositionY, float ScaleX, float ScaleY, [KColor](../KColor) RenderColor, u_int BoxWidth, boolean Center )  {: aria-label='Functions' }
Draws a scaled string of text on the screen.
Converts UTF8 to UTF16, then draws the string. 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
Example usage.
```cpp 
local f = Font() -- init font object
f:Load("font/terminus.fnt") -- load a font into the font object
f:DrawStringScaled("Hello World!",60,50,0.5,0.5,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y

```

___ 
[ ](#){: .abp .tooltip .badge }
### DrawStringScaledUTF8 () {: aria-label='Functions' }
#### void DrawStringScaledUTF8 ( string String, float PositionX, float PositionY, float ScaleX, float ScaleY, [KColor](../KColor) RenderColor, u_int BoxWidth, boolean Center )  {: aria-label='Functions' }
Draws a scaled string of Unicode text on the screen.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
Example usage.
```cpp 
local f = Font() -- init font object
f:Load("font/terminus.fnt") -- load a font into the font object
f:DrawStringScaledUTF8("Hello World!",60,50,0.5,0.5,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y

```

___ 
[ ](#){: .abp .tooltip .badge }
### DrawStringUTF8 () {: aria-label='Functions' }
#### void DrawStringUTF8 ( string String, float PositionX, float PositionY, [KColor](../KColor) RenderColor, u_int BoxWidth, boolean Center )  {: aria-label='Functions' }
Draws a string of Unicode text to the screen
Notes: The BoxWidth and Center parameters can be used for aligning the text: If BoxWidth is zero, the text will be left aligned and the center parameter will be ignored If BoxWidth is NOT zero, and the Center parameter is FALSE, then the text will be right aligned inside the BoxWidth size If BoxWidth is NOT zero, and the center parameter is TRUE, then the text will be centered inside the BoxWidth size 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
Example usage.
```cpp 
local f = Font() -- init font object
f:Load("font/terminus.fnt") -- load a font into the font object
f:DrawStringUTF8("Hello World!",60,50,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y

```

___ 
[ ](#){: .abp .tooltip .badge }
### GetBaselineHeight () {: aria-label='Functions' }
#### u_int GetBaselineHeight ( )  {: aria-label='Functions' }
Get the number of pixels from the absolute top of the line to the base of the characters 
___ 
[ ](#){: .abp .tooltip .badge }
### GetCharacterWidth () {: aria-label='Functions' }
#### u_int GetCharacterWidth ( char Character)  {: aria-label='Functions' }
Returns the width of a specific character 
___ 
[ ](#){: .abp .tooltip .badge }
### GetLineHeight () {: aria-label='Functions' }
#### u_int GetLineHeight ( )  {: aria-label='Functions' }
Get the distance in pixels between each line of text 
___ 
[ ](#){: .abp .tooltip .badge }
### GetStringWidth () {: aria-label='Functions' }
#### u_int GetStringWidth ( string String)  {: aria-label='Functions' }
Converts UTF8 to UTF16 and returns string width
___ 
[ ](#){: .abp .tooltip .badge }
### GetStringWidthUTF8 () {: aria-label='Functions' }
#### u_int GetStringWidthUTF8 ( string String)  {: aria-label='Functions' }
returns string width of a Unicode text. 
___ 
[ ](#){: .abp .tooltip .badge }
### IsLoaded () {: aria-label='Functions' }
#### boolean IsLoaded ( )  {: aria-label='Functions' }
Returns whether a font is loaded or not. 
___ 
[ ](#){: .abp .tooltip .badge }
### Load () {: aria-label='Functions' }
#### boolean Load ( string FilePath)  {: aria-label='Functions' }
Loads a font. 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
Example usage.
```cpp 
local f = Font() -- init font object
f:Load("font/terminus.fnt") -- load a font into the font object
f:DrawString("Hello World!",60,50,KColor(1,1,1,1),0,true) -- render string with loaded font on position 60x50y

```

___ 
[ ](#){: .abp .tooltip .badge }
### SetMissingCharacter () {: aria-label='Functions' }
#### void SetMissingCharacter ( u16 MissingCharacter)  {: aria-label='Functions' }
Converts UTF8 to UTF16, then draws
Sets the missing character to be used by the font (the character used when missing characters are encountered) 
___ 
[ ](#){: .abp .tooltip .badge }
### Unload () {: aria-label='Functions' }
#### void Unload ( )  {: aria-label='Functions' }
Unloads all our data from memory 
___ 
