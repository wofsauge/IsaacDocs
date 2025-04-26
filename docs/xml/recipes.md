---
tags:
  - File
---
# File "recipes.xml"
[ ](#){: .reporplus .tooltip .badge }

Stores permenant recipes for Bag of Crafting that are not affected by per-run randomization.

**Resource-Folder**{: .xmlInfo }: Using this file in a resource folder of a mod is not tested yet.

**Content-Folder**{: .xmlInfo .green }: Placing this file in the content folder will allow you to define new recipes.

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|input|string|Coded string of characters representing crafting ingredients (e.g. "bbbbbbbb") |
|output|int|Item ID of the output|

???+ note "Notes"
    Due to the lack of a way to add recipes without using an ItemID, it is not possible to add recipes for modded items.

## Known Crafting Ingredient Representations

| Crafting Ingredient | Coded Representation |
|:--|:--|
| Penny | "." (Period/Full Stop) |
| Nickel | "o" |
| Dime | "O" (Captial o) |
| Lucky Penny | "Q" (Capital q) |
| Golden Penny | "$" (Dollar) |
| Bomb | "v" |
| Golden Bomb | "^" (Caret) |
| Giga Bomb | "V" (Capital v)
| Poop Nugget | "\_" (Underscore) |
| Key | "/" (Forward Slash)
| Golden Key | "\|" (Pipe) |
| Charged Key | "%" (Percentage) |
| Red Heart | "h" |
| Rotten Heart | "r" |
| Soul Heart | "s" |
| Black Heart | "b" |
| Bone Heart | "B" (Captial b) |
| Golden Heart | "g" |
| Eternal Heart | "e" |
| Micro Battery | "1" |
| Lil' Battery | "2" |
| Mega Battery | "3" |
| Golden Battery | "4" |
| Pill | "(" (Open Bracket) |
| Golden Pill | "{" (Open Curly Bracket) |
| Card | "\[" (Open Square Bracket) |
| Rune | ">" (Greater Than) |
| Dice Shard | "?" (Question Mark) |
| Cracked Key | "~" (Tilde) |
