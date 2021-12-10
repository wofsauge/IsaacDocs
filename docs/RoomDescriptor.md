# Class "RoomDescriptor"

???+ info
    You can get this class by using the following functions:

    * [Level:GetCurrentRoomDesc()](Level.md#getcurrentroomdesc)
    * [Level:GetLastRoomDesc()](Level.md#getlastroomdesc)
    * [Level:GetRoomByIdx()](Level.md#getroombyidx)

    ???+ example "Example Code"
        ```lua
        local level = Game():GetLevel()
        local roomDescriptor = level:GetCurrentRoomDesc()
        ```

## Variables
### Allowed·Doors {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### DoorSet AllowedDoors  {: .copyable aria-label='Variables' }
Contains data swapped just on load (in cases like minibosses, or other such events)

???+ bug "Bug"
    This variable contains userdata and is therefore not useable.
___
### Award·Seed {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int AwardSeed  {: .copyable aria-label='Variables' }
used to spawn clear awards (normal, miniboss, boss rooms) and initialize shop items (shop, devil rooms)
___
### Challenge·Done {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean ChallengeDone  {: .copyable aria-label='Variables' }

___
### Clear {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean Clear  {: .copyable aria-label='Variables' }

___
### Clear·Count {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int ClearCount  {: .copyable aria-label='Variables' }
room is clear, don't spawn enemies when visiting
___
### Data {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [RoomConfigRoom](RoomConfig_Room.md) Data  {: .copyable aria-label='Variables' }

___
### Decoration·Seed {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int DecorationSeed  {: .copyable aria-label='Variables' }
used for cosmetic stuff like backdrops, room decorations, shopkeeper skins
___
### Delirium·Distance {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int DeliriumDistance  {: .copyable aria-label='Variables' }
Helper for The Void stage, holds the distance to the Delirium boss in room nr.
___
### Display·Flags {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
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

    \* If you have Spelunker Hat, bit 1 is completely unused. All special rooms will have the normal behavior of either 000 or 101. This is unique to Spelunker Hat; mapping items follow the normal rules.

???+ quote "Quote from User 'Budj'"
    From this my best guess is that bits 1 and 2 are special rendering (display) flags that may have more meaning down below.

    The important bit for using them is minding that they're used differently mostly for special rooms.

    As far as I've seen, 001 is completely unused.
    010, 100, and 110 may be used for compass or blue map, I don't remember. I think they use 100.
___
### Flags {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Flags  {: .copyable aria-label='Variables' }
The RoomDescriptor flags for the room.
___
### Grid·Index {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int GridIndex  {: .copyable aria-label='Variables' }

- For a 1x1 room, this is equal to the 1x1 grid index of the room.
- For a room bigger than a 1x1 room, this is equal to the top left 1x1 quadrant.
- For `RoomType.ROOMSHAPE_LTL` rooms (i.e. rooms that look like a "J"), this is equal to the 1x1 quadrant where the gap in the room is. In other words, it is a 1x1 quadrant that is not actually contained within the room.
- Note that **this value is different** than the value returned by `Level:GetCurrentRoomIndex()`. (That function returns the 1x1 quadrant that the room was entered in.)
- Data structures that store data per room should use `ListIndex` as a key instead of `GridIndex`, since the former is unique across different dimensions.

???- note "Notes"
    ![Room Grid indices](images/infographics/RoomGridIndices.png)
___
### Has·Water {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasWater  {: .copyable aria-label='Variables' }

___
### List·Index {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int ListIndex  {: .copyable aria-label='Variables' }

The index for this room corresponding to the `Level.GetRooms().Get()` method. In other words, this is equal to the order that the room was created by the floor generation algorithm.

Use this as an index for data structures that store data per room, since it is unique across different dimensions.

___
### No·Reward {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean NoReward  {: .copyable aria-label='Variables' }

___
### Override·Data {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [RoomConfigRoom](RoomConfig_Room.md) OverrideData  {: .copyable aria-label='Variables' }
The room variant is in Data. Because Room::Init uses a mix of data, one from level layout and one from replacement data like minibosses, we need to hold the new room data somewhere.
___
### Pits·Count {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int PitsCount  {: .copyable aria-label='Variables' }

___
### Poop·Count {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int PoopCount  {: .copyable aria-label='Variables' }

___
### Pressure·Plates·Triggered {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean PressurePlatesTriggered  {: .copyable aria-label='Variables' }

___
### Sacrifice·Done {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean SacrificeDone  {: .copyable aria-label='Variables' }

___
### Safe·Grid·Index {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int SafeGridIndex  {: .copyable aria-label='Variables' }

- For a 1x1 room, this is equal to the 1x1 grid index of the room.
- For a room bigger than a 1x1 room, this is equal to the top left 1x1 quadrant.
- For `RoomType.ROOMSHAPE_LTL` rooms (i.e. rooms that look like a "J"), this is equal to the top right 1x1 quadrant.
- Note that **this value is different** than the value returned by `Level:GetCurrentRoomIndex()`. (That function returns the 1x1 quadrant that the room was entered in.)
- Data structures that store data per room should use `ListIndex` as a key instead of `SafeGridIndex`, since the former is unique across different dimensions.

???- note "Notes"
    ![Room Grid indices](images/infographics/RoomGridIndices.png)
___
### Shop·Item·Discount·Idx {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int ShopItemDiscountIdx  {: .copyable aria-label='Variables' }

___
### Shop·Item·Idx {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int ShopItemIdx  {: .copyable aria-label='Variables' }

___
### Spawn·Seed {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int SpawnSeed  {: .copyable aria-label='Variables' }
used to spawn entities at room load and initialize enemy drop seeds
___
### Surprise·Miniboss {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean SurpriseMiniboss  {: .copyable aria-label='Variables' }

___
### Visited·Count {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int VisitedCount  {: .copyable aria-label='Variables' }
how often the room has been visited
___
