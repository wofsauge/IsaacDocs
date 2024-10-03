---
tags:
  - Tutorial
---
# [Tutorial] Render text ingame

## Fonts used by the game

The Following fonts are used by the game and can be used with the [`Font()`](../Font.md) class:

|**Font Name**|**Ingame Name/s**|**Ingame Example**|**Ingame Usage**|**Link to font**|
|--- |--- |--- |--- |--- |
|Droid Sans|droid|[Example Droid](../images/tutorial_special_chars/example_droid.png)|debug 11(Grid Info)|[Droid Sans](../customData/droid-sans.zip)|
|PF Tempesta Seven (Condensed)|pftempestasevencondensed|[Example PF Tempesta Seven](../images/tutorial_special_chars/example_pftempestasevencondensed.png)|HUD Elements like coin/key counters|[PF Tempesta Seven](https://www.dafont.com/pf-tempesta-seven.font)|
|Team Meat Font|teammeatfont10<br/>teammeatfont12<br/>teammeatfont16<br/>teammeatfont16bold|[Example teammeatfont10](../images/tutorial_special_chars/example_teammeat10.png)<br/>[Example teammeatfont12](../images/tutorial_special_chars/example_teammeat12.png)<br/>[Example teammeatfont16](../images/tutorial_special_chars/example_teammeat16.png)<br/>[Example teammeatfont16bold](../images/tutorial_special_chars/example_teammeat16bold.png)|Main Menu Elements<br/>Pop-Ups<br/>Timer / Score Elements|[Team Meat Font without Bold](../customData/team-meat-font_1.2.zip)|
|Terminus|terminus<br/>terminus8|[Example Terminus](../images/tutorial_special_chars/example_terminus.png)<br/>[Example Terminus8](../images/tutorial_special_chars/example_terminus8.png)|Debug Console / Isaac.RenderText()|[Terminus](http://terminus-font.sourceforge.net/)|
|Luamini<br/>(Repentance)|luamini<br/>luaminioutlined|[Example luamini](../images/tutorial_special_chars/example_luamini.png)<br/>[Example luaminioutlined](../images/tutorial_special_chars/example_luaminioutlined.png)|Stats HUD| |
|Upheaval|upheaval<br/>upheavalmini (Repentance)|[Example Upheaval](../images/tutorial_special_chars/example_upheaval.png)<br/>[Example Upheavalmini](../images/tutorial_special_chars/example_upheavalmini.png)|Streak text|[Upheaval](https://www.dafont.com/upheaval.font)|
|Lanapixel|lanapixel||Replacement for all fonts aboth for CJK translation.</br>is "PF Tempesta Seven" replacement except for coin/key counters|
|mplus (Japanese)|mplus_10r<br/>mplus_12b|[Example mplus_10r](../images/tutorial_special_chars/example_mplus10r.png)<br/>[Example mplus_12b](../images/tutorial_special_chars/example_mplus12b.png)|Replacement for all fonts aboth for Japanese translation.<br/>10r is "PF Tempesta seven" / "Team Meat" replacement<br/>12b is "Upheaval" replacement|[PixelMplus](http://itouhiro.hatenablog.com/entry/20130602/font)<br/>[(M+ Fonts)](https://mplus-fonts.osdn.jp/)|
|YDIWebDotum|kr_font12<br/>kr_font14|[Example kr_font12](../images/tutorial_special_chars/example_krfont12.png)<br/>[Example kr_font14](../images/tutorial_special_chars/example_krfont14.png)|Replacement for all fonts aboth for Korean translation.</br>12 is "teammeatfont12" replacement for curse display text<br/>14 is "Upheaval" replacement for fortune streak text|YDIWebDotum|
|Typo_Pororo M|kr_meatfont14|[Example kr_meatfont14](../images/tutorial_special_chars/example_krmeatfont14.png)|Replacement for all fonts aboth for Korean translation.<br/>"Upheaval" / "Team Meat" replacement|[Typo_Pororo](https://typodesign.co.kr/bbororo)|


## Basics of rendering a text

First we need to have a look at the basic process of writing on the screen. here is a sample code:

```lua
local testmod= RegisterMod( "testmod" ,1 );

local function onRender(t)
    Isaac.RenderText("Sample text", 50, 30, 1, 1, 1, 255)
end

testmod:AddCallback(ModCallbacks.MC_POST_RENDER, onRender)
```

**Result:**
![](../images/tutorial_special_chars/b1.png)

The game uses the font-file "terminus.fnt" in order to render and display this text. this cant be changed. Luckily for us, this file contains "sprites" for all normal ASCII characters that exist out there (256 to be precise).

## Rendering text with a different font

We can render any kind of text with a different font as well. This can be done by using the "Font()" class and its functions.

* * *

### Example code:

```lua
local f = Font() -- init font object
f:Load("font/droid.fnt") -- load a font into the font object
f:DrawString("droid",60,50,KColor(1,1,1,1,0,0,0),0,true) -- render string with loaded font on position 60x50y
```
dlc3-language specific fonts:
```lua
local f = Font() -- init font object
f:Load("resources-dlc3.jp/font/mplus_10r.fnt") -- load a font from the Japanese data package
f:DrawString("mplus_10r",60,50,KColor(1,1,1,1,0,0,0),0,true) -- render string with loaded font on position 60x50y
```

### Quick overview of common Fonts that can be drawn:

![](../images/font-types.png)

## Render Special Characters

The game allows us to write anything into the "displayed text" argument that is part of the ASCII standard for characters. For characters a-z, 0-9 and ,.#+;:_'*~° this works without any problems and without using any kind of "hack". Now if we just strait up try to type in ' ä ' or ' ß ' to let it render as text, it will not look as intended.
![](../images/tutorial_special_chars/b2.png)
In order to fix this problem we have to use the "raw" version of said characters.
Example:

`\197`

prints:

`Ä`

So in order to print special characters, just replace them in the code like this:

```lua
Isaac.RenderText("S\228mple text", 50, 30, 1, 1, 1, 255)
```

prints:

`Sämple text`

## List of all supported characters and their counterpart

![](../images/tutorial_special_chars/b3.png)

* * *

# Creating .fnt files

The Developer __Kilburn_ mentioned that fonts can be created using this Tool: [https://www.angelcode.com/products/bmfont](https://www.angelcode.com/products/bmfont).

The best results can be made by converting Bitmap fonts, since they allow for smaller fontsizes.

![](../images/BM_font-settings.png){: style="float:right"}

**Font Settings:**

*   **Font** - choose a font thats very readable in small sizes (~8-10px height)
*   **Charset** - Unicode
*   **Size** - the general size of the characters in pixels. normal values are between 10 and 16
*   **Height** - can be used to squish/strech the
*   **Match char height** - the charactersize will be choosen based on the character, and not the size defined in **Size**
*   **Bold / Italic** - What font styling should be used
*   **Output invalid char glyph** - Characters that dont have a sprite will be put on the spritesheet, too. This can create holes in the spritesheet
*   **Do not include kerning pairs** - <Effect unknown, enabled seem to work best>

*   **Rasterization** - used to smooth the font sprites. Not recommended for Isaac since we want pixel-perfect fonts!

*   **Outline thickness** - Define if an outline should be drawn around the character. In Isaac, this is always ~1px

![](../images/BM_export-settings.png){: style="float:right"}

**Export Options:**

*   **Padding** - Padding around each character, in pixels
*   **Spacing** - Space between characters, in pixels
*   **Equalize the cell heights** - will align all characters in a way, so they take up the least space vertically. off = they group in more uniform rows

*   **Width / Height** - Width and Height of each character spritesheet. If spritesheet isnt big enough, multiple files will be created
*   **Bit depth** - how many Bits should be used per color. ALWAYS choose 32 bit!
*   **Pack chars in multiple Channels** - Dont use this. We need all channels for out font because of transparencies!

*   **File format** - Choose Binary to create ".fnt" files
*   **Textures** - always set it to "png"
*   **Compression** - (only one option available)
