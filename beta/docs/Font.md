# Class "Font"
___ 
## void Font (void )

Constructor for the "Font" class.
#### Example Code
Example usage.
```lua
local f = Font() -- init font object
f:Load("font/terminus.fnt") -- load a font into the font object
f:DrawString("Hello World!",60,50,KColor(1,1,1,1,0,0,0),0,true) -- render string with loaded font on position 60x50y

```
___ 
## void DrawString (string String, float PositionX, float PositionY, KColor RenderColor, unsigned int BoxWidth, boolean Center )
Draws a string of text to the screen
Converts UTF8 to UTF16, then draws the string. 
Notes: The BoxWidth and Center parameters can be used for aligning the text: If BoxWidth is zero, the text will be left aligned and the center parameter will be ignored If BoxWidth is NOT zero, and the Center parameter is FALSE, then the text will be right aligned inside the BoxWidth size If BoxWidth is NOT zero, and the center parameter is TRUE, then the text will be centered inside the BoxWidth size 
#### Example Code
Example usage.
```lua
local f = Font() -- init font object
f:Load("font/terminus.fnt") -- load a font into the font object
f:DrawString("Hello World!",60,50,KColor(1,1,1,1,0,0,0),0,true) -- render string with loaded font on position 60x50y

```
___ 
## void DrawStringScaled (string String, float PositionX, float PositionY, float ScaleX, float ScaleY, KColor RenderColor, unsigned int BoxWidth, boolean Center )
Draws a scaled string of text on the screen.
Converts UTF8 to UTF16, then draws the string. 
#### Example Code
Example usage.
```lua
local f = Font() -- init font object
f:Load("font/terminus.fnt") -- load a font into the font object
f:DrawStringScaled("Hello World!",60,50,0.5,0.5,KColor(1,1,1,1,0,0,0),0,true) -- render string with loaded font on position 60x50y

```
___ 
## void DrawStringScaledUTF8 (string String, float PositionX, float PositionY, float ScaleX, float ScaleY, KColor RenderColor, unsigned int BoxWidth, boolean Center )
Draws a scaled string of Unicode text on the screen.
#### Example Code
Example usage.
```lua
local f = Font() -- init font object
f:Load("font/terminus.fnt") -- load a font into the font object
f:DrawStringScaledUTF8("Hello World!",60,50,0.5,0.5,KColor(1,1,1,1,0,0,0),0,true) -- render string with loaded font on position 60x50y

```
___ 
## void DrawStringUTF8 (string String, float PositionX, float PositionY, KColor RenderColor, unsigned int BoxWidth, boolean Center )
Draws a string of Unicode text to the screen
Notes: The BoxWidth and Center parameters can be used for aligning the text: If BoxWidth is zero, the text will be left aligned and the center parameter will be ignored If BoxWidth is NOT zero, and the Center parameter is FALSE, then the text will be right aligned inside the BoxWidth size If BoxWidth is NOT zero, and the center parameter is TRUE, then the text will be centered inside the BoxWidth size 
#### Example Code
Example usage.
```lua
local f = Font() -- init font object
f:Load("font/terminus.fnt") -- load a font into the font object
f:DrawStringUTF8("Hello World!",60,50,KColor(1,1,1,1,0,0,0),0,true) -- render string with loaded font on position 60x50y

```
___ 
## unsigned int GetBaselineHeight ()
Get the number of pixels from the absolute top of the line to the base of the characters 
___ 
## unsigned int GetCharacterWidth (char Character)
Returns the width of a specific character 
___ 
## unsigned int GetLineHeight ()
Get the distance in pixels between each line of text 
___ 
## unsigned int GetStringWidth (string String)
Converts UTF8 to UTF16 and returns string width
___ 
## unsigned int GetStringWidthUTF8 (string String)
returns string width of a Unicode text. 
___ 
## boolean IsLoaded ()
Returns whether a font is loaded or not. 
___ 
## boolean Load (string FilePath)
Loads a font. 
#### Example Code
Example usage.
```lua
local f = Font() -- init font object
f:Load("font/terminus.fnt") -- load a font into the font object
f:DrawString("Hello World!",60,50,KColor(1,1,1,1,0,0,0),0,true) -- render string with loaded font on position 60x50y

```
___ 
## void SetMissingCharacter (u16 MissingCharacter)
Converts UTF8 to UTF16, then draws
Sets the missing character to be used by the font (the character used when missing characters are encountered) 
___ 
## void Unload ()
Unloads all our data from memory 
___ 
