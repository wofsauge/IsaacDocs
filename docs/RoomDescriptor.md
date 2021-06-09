# Class "RoomDescriptor"
## Variables
### Allowed·Doors {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### DoorSet AllowedDoors  {: .copyable aria-label='Variables' }
Contains just on load swapped data (in cases like minibosses, or other such events) 
___ 
### Award·Seed {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int AwardSeed  {: .copyable aria-label='Variables' }
used to spawn clear awards (normal, miniboss, boss rooms) and initialize shop items (shop, devil rooms) 
___ 
### Challenge·Done {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean ChallengeDone  {: .copyable aria-label='Variables' }

___ 
### Clear {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean Clear  {: .copyable aria-label='Variables' }

___ 
### Clear·Count {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int ClearCount  {: .copyable aria-label='Variables' }
room is clear, don't spawn enemies when visiting
___ 
### Data {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [RoomConfig Room](../abp/RoomConfig_Room) Data  {: .copyable aria-label='Variables' }

___ 
### Decoration·Seed {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int DecorationSeed  {: .copyable aria-label='Variables' }
used for cosmetic stuff like backdrops, room decorations, shopkeeper skins 
___ 
### Delirium·Distance {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int DeliriumDistance  {: .copyable aria-label='Variables' }
Helper for The Void stage, holds the distance to the Delirium boss in room nr. 
___ 
### Display·Flags {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int DisplayFlags  {: .copyable aria-label='Variables' }

Indicates what is visible on the minimap.
**Display Flags (bitwise):**
```lua 
1 << -1 -- Invisible
1 << 0 -- Visible
1 << 1 -- Room Shadow
1 << 2 -- Show Icon
```

???- example "Examples"
    The flags are hard to interpret, but here are some examples:

    **000** = invisible, this is how most rooms start

    **101** = standard room visibility, this includes rooms that are adjacent and you haven't actively visited. This will usually show icons.

    **011** = secret room, locked rooms, sac rooms pre-entry*

    **111** = 011 rooms after entry, but also the rooms directly adjacent to them* (applied after entry)

    \* If you have spelunker's hat, bit 1 is completely unused. All special rooms will have the normal behavior of either 000 or 101. iirc this is unique to spelunker's hat, mapping items follow the normal rules.

???+ quote "Quote from User 'Budj'"
    From this my best guess is that bits 1 and 2 are special rendering (display) flags that may have more meaning down below. 

    The important bit for using them is minding that they're used differently mostly for special rooms. 

    As far as I've seen, 001 is completely unused. 
    010, 100, and 110 may be used for compass or blue map, I don't remember. I think they use 100
___ 
### Grid·Index {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int GridIndex  {: .copyable aria-label='Variables' }
index in the level grid (always top left) 

???- note "Notes"
    This will always return the top left coordinate of the room on the levelgrid. Therefore, it will return an index not part of the actual room, when checking this value for J-shaped rooms. (See graphic below)
    
    ![Room Grid indicies](../abp/images/infographics/RoomGridIndicies.png)
___ 
### Has·Water {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasWater  {: .copyable aria-label='Variables' }

___ 
### List·Index {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int ListIndex  {: .copyable aria-label='Variables' }
index in the room list 
___ 
### No·Reward {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean NoReward  {: .copyable aria-label='Variables' }

___ 
### Override·Data {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [RoomConfig Room](../abp/RoomConfig_Room) OverrideData  {: .copyable aria-label='Variables' }
Tim's reminder to himself: The room variant is in Data. Because Room::Init uses a mix of datas, one from level layout and one from replacement data like minibosses, we need to hold the new room data somewhere. 
___ 
### Pits·Count {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int PitsCount  {: .copyable aria-label='Variables' }

___ 
### Poop·Count {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int PoopCount  {: .copyable aria-label='Variables' }

___ 
### Pressure·Plates·Triggered {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean PressurePlatesTriggered  {: .copyable aria-label='Variables' }

___ 
### Sacrifice·Done {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean SacrificeDone  {: .copyable aria-label='Variables' }

___ 
### Safe·Grid·Index {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int SafeGridIndex  {: .copyable aria-label='Variables' }
index in the level grid (not always top left, but is guaranteed to point to the room. this is important for LTL shapes!) 

???- note "Notes"
    This will always return the top left coordinate of the room on the levelgrid, except for J-shaped rooms, where it returns the top right index. (see graphic below)
    
    ![Room Grid indicies](../abp/images/infographics/RoomGridIndicies.png)
___ 
### Shop·Item·Discount·Idx {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int ShopItemDiscountIdx  {: .copyable aria-label='Variables' }

___ 
### Shop·Item·Idx {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int ShopItemIdx  {: .copyable aria-label='Variables' }

___ 
### Spawn·Seed {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int SpawnSeed  {: .copyable aria-label='Variables' }
used to spawn entities at room load and initialize enemy drop seeds 
___ 
### Surprise·Miniboss {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean SurpriseMiniboss  {: .copyable aria-label='Variables' }

___ 
### Visited·Count {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int VisitedCount  {: .copyable aria-label='Variables' }
how often the room has been visited 
___ 
