# File "costumes2.xml"

Defines Costume informations.

**Resource-Folder**{: .info .green }: Placing this file in a resource folder of a mod will override the original.

**Content-Folder**{: .info .green }: Placing this file in a content folder of a mod will add a new Costumes. See the Tutorial on "Adding Costumes" for more informations.


| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|id|int|Ingame-Id of the Costume. Will be overridden by the game when file is in content folder.|
|anm2path|string|Path to the .anm2 file|
|type|string|Type of the costume. Available: none | passive | active | familiar | trinket|
|priority|int|Priority of the costume. higher number means higher priority|
|overwriteColor|bool|Define if a costume overrides the body color of the character (default: false)|
|isFlying|bool|Define if a costume displays a flying character (default: false)|
|skinColor|int|Define what skincolor that costume has. (default: 0)|
|hasSkinAlt|bool|Define if a costume has alternative versions for all other the skin colors (default: false)|
|hasOverlay|bool|Define if a costume has an overlayeffect (default: false)|