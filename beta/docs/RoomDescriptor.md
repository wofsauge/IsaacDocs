# Class "RoomDescriptor"
___ 
## DoorSet AllowedDoors
Contains just on load swapped data (in cases like minibosses, or other such events) 
___ 
## integer AwardSeed
used to spawn clear awards (normal, miniboss, boss rooms) and initialize shop items (shop, devil rooms) 
___ 
## boolean ChallengeDone

___ 
## boolean Clear

___ 
## integer ClearCount
room is clear, don't spawn enemies when visiting bool Clear; 
___ 
## RoomDescriptorData Data

___ 
## integer DecorationSeed
bool AltBossMusic; used for cosmetic stuff like backdrops, room decorations, shopkeeper skins 
___ 
## integer DeliriumDistance
Helper for The Void stage, holds the distance to the Delirium boss in room nr. 
___ 
## integer DisplayFlags

Indicates what is visible on the minimap.
**Display Flags (bitwise):**
<pre><code class="language-lua">1 &lt;&lt; -1 -- Invisible
1 &lt;&lt; 0 -- Visible
1 &lt;&lt; 1 -- Room Shadow
1 &lt;&lt; 2 -- Show Icon</code></pre>

The flags are hard to interpret, but here are some examples:<br/>

000 = invisible, this is how most rooms start<br/>

101 = standard room visibility, this includes rooms that are adjacent and you haven't actively visited. This will usually show icons.<br/>

011 = secret room, locked rooms, sac rooms pre-entry*<br/>

111 = 011 rooms after entry, but also the rooms directly adjacent to them* (applied after entry)<br/><br/>

* If you have spelunker's hat, bit 1 is completely unused. All special rooms will have the normal behavior of either 000 or 101. iirc this is unique to spelunker's hat, mapping items follow the normal rules.<br/>

    From this my best guess is that bits 1 and 2 are special rendering (display hehe) flags that may have more meaning down below. The important bit for using them is minding that they're used differently mostly for special rooms. As far as I've seen, 001 is completely unused. 010, 100, and 110 may be used for compass or blue map, I don't remember. I think they use 100
<!--end Custom comment -->
___ 
## integer GridIndex
index in the level grid (always top left) 
#### Notes
This will always return the top left coordinate of the room on the levelgrid. Therefore, it will return an index not part of the actual room, when checking this value for J-shaped rooms. (See graphic below)
___ 
## boolean HasWater

___ 
## integer ListIndex
index in the room list 
___ 
## boolean NoReward

___ 
## RoomDescriptorData OverrideData
Tim's reminder to himself: The room variant is in Data. Because Room::Init uses a mix of datas, one from level layout and one from replacement data like minibosses, we need to hold the new room data somewhere. 
___ 
## integer PitsCount

___ 
## integer PoopCount
bool HasWater; 
___ 
## boolean PressurePlatesTriggered

___ 
## boolean SacrificeDone

___ 
## integer SafeGridIndex
index in the level grid (not always top left, but is guaranteed to point to the room. this is important for LTL shapes!) 
#### Notes
This will always return the top left coordinate of the room on the levelgrid, except for J-shaped rooms, where it returns the top right index. (see graphic below) 
___ 
## integer ShopItemDiscountIdx

___ 
## integer ShopItemIdx

___ 
## integer SpawnSeed
used to spawn entities at room load and initialize enemy drop seeds 
___ 
## boolean SurpriseMiniboss

___ 
## integer VisitedCount
how often the room has been visited 
___ 
