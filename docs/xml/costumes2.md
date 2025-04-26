---
tags:
  - File
---
# File "costumes2.xml"

Defines Costume informations.

**Resource-Folder**{: .xmlInfo .green }: Placing this file in a resource folder of a mod will override the original.

**Content-Folder**{: .xmlInfo .green }: Placing this file in a content folder of a mod will add a new Costumes. See the Tutorial on "Adding Costumes" for more informations.

## Costume Reference Guide
Connor made a very handy table of all costumes currently available in the game. It contains their ID, Type, Priority, layer informations and a preview image for each costume.

These informations can be used to improve your workflow of creating new costumes, by knowing which costumes it might interfere with or what priority it should have.

[--> "Isaac Costumes Reference" by Connor <---](https://docs.google.com/spreadsheets/d/1NGa3IARRSvs5XF9lxbYWFnbI77xO1m2YYaKEoB6OyVI/edit?usp=sharing)

## Anm2 Layer Structure
The order in which costumes are rendered is defined by their specific "layers" in their anm2 files. Each of the layers can only have one sprite rendered at a time. A costume may have pieces on multiple layers (for example, the face, third eye, and flame of "Spoon Bender" are all on separate layers).

**Layer names**

From bottom to top: glow < body < body{0..1} < head < head{0..5} < top0 < extra < back

## Attributes

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|id|int|Ingame-Id of the Costume. Will be overridden by the game when file is in content folder.|
|anm2path|string|Path to the .anm2 file|
|type|string|Type of the costume. Available: [none, passive, active, familiar, trinket]|
|priority|int|Priority of the costume. higher number means higher priority|
|overwriteColor|bool|Define if a costume overrides the body color of the character (default: false)|
|isFlying|bool|Define if a costume displays a flying character (default: false)|
|skinColor|int|Define what skincolor that costume has. (default: 0)|
|hasSkinAlt|bool|Define if a costume has alternative versions for all other the skin colors (default: false)|
|hasOverlay|bool|Define if a costume has an overlayeffect (default: false)|
|forceBodyColor|bool|Forces the body color (default: false) [ ](#){: .reporplus .tooltip .badge }|
|forceHeadColor|bool|Forces the head color (default: false) [ ](#){: .reporplus .tooltip .badge }|
