---
tags:
  - Class
---
# Class "Level"

???+ info
    You can get this class by using the following functions:

    * [Game:GetLevel()](Game.md#getlevel)

    ???+ example "Example Code"
        ```lua
        local level = Game():GetLevel()
        ```

## Functions
### Add·Angel·Room·Chance () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void AddAngelRoomChance ( float Chance ) {: .copyable aria-label='Functions' }
Adds `Chance` to the Angel deal modifier. See [GetAngelRoomChance](Level.md#getangelroomchance) for more information.
___
### Add·Curse () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void AddCurse ( [LevelCurse](enums/LevelCurse.md) Curse, boolean ShowName ) {: .copyable aria-label='Functions' }

???+ info
    As entries in curses.xml enumerate from 1 instead of 0, the LevelCurse bitmask value for a new curse must be acquired by doing 1 << (Isaac.GetCurseIdByName("...") - 1). This bitmask value is what's accepted by Level:AddCurse and the return value of MC_POST_CURSE_EVAL.
___
### Apply·Blue·Map·Effect () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ApplyBlueMapEffect ( ) {: .copyable aria-label='Functions' }

___
### Apply·Compass·Effect () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ApplyCompassEffect ( boolean Persistent ) {: .copyable aria-label='Functions' }

___
### Apply·Map·Effect () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ApplyMapEffect ( ) {: .copyable aria-label='Functions' }

___
### Can·Open·Challenge·Room () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean CanOpenChallengeRoom ( int RoomIndex ) {: .copyable aria-label='Functions' }
Returns whether or not a Challenge Room door will be open. You must pass this method a valid grid index on the floor. It does not matter if the grid index is actually attached to the Challenge Room or not. This method will always return `false` if an invalid or a negative grid index is passed.

___
### Can·Spawn·Devil·Room () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean CanSpawnDevilRoom ( ) {: .copyable aria-label='Functions' }

___
### Can·Stage·Have·Curse·Of·Labyrinth () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean CanStageHaveCurseOfLabyrinth ( [LevelStage](enums/LevelStage.md) Stage ) {: .copyable aria-label='Functions' }

___
### Change·Room () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void ChangeRoom ( int RoomIndex, int Dimension = -1 ) {: .copyable aria-label='Functions' }

???+ bug "Bugs"
    This method does not update the fxlayers properly. Do not use this method and use `Game.ChangeRoom` instead.

___
### Disable·Devil·Room () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void DisableDevilRoom ( ) {: .copyable aria-label='Functions' }

___
### Force·Horseman·Boss () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean ForceHorsemanBoss ( int Seed ) {: .copyable aria-label='Functions' }
Returns `true` on success.
___
### Get·Absolute·Stage () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [LevelStage](enums/LevelStage.md) GetAbsoluteStage ( ) {: .copyable aria-label='Functions' }
In non-Greed Mode, returns the same thing as the `GetStage()` method. In Greed Mode, returns the adjusted stage similar to what it would be in non-Greed Mode.

For example:

- On Greed Mode Basement, `GetStage()` returns 1, and `GetAbsoluteStage()` returns 1.
- On Greed Mode Caves, `GetStage()` returns 2, and `GetAbsoluteStage()` returns 3.
- On Greed mode Depths, `GetStage()` returns 3, and `GetAbsoluteStage()` returns 5.

___
### Get·Angel·Room·Chance () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### float GetAngelRoomChance ( ) {: .copyable aria-label='Functions' }
Gets the modifier value of the chance for this floor's deal to be an Angel room. Specifically, the actual effective chance for a deal to be an Angel room is 50% plus this value.

???+ info
    If this value is above `0.0`, deals can become Angel rooms even if a player has already taken a Devil deal item. If the chance is positive and a deal room has not spawned yet, the deal is guaranteed to be an Angel room.

    Under normal circumstances, setting this value to below `0.0` will _not_ reduce the chance for an Angel room, as values below `0.0` are usually ignored. A negative value will only affect Angel room chance if the player has an item that enables visiting Angel rooms even if a Devil deal has already been taken, such as Book of Virtues or Act of Contrition.

___
### Get·Can·See·Everything () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean GetCanSeeEverything ( ) {: .copyable aria-label='Functions' }

___
### Get·Current·Room () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Room](Room.md) GetCurrentRoom ( ) {: .copyable aria-label='Functions' }

___
### Get·Current·Room·Desc () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .alldlc .tooltip .badge }
#### const [RoomDescriptor](RoomDescriptor.md) GetCurrentRoomDesc ( ) {: .copyable aria-label='Functions' }
This functions returns a read only version of the [RoomDescriptor](RoomDescriptor.md) of the current room. If you want to edit the [RoomDescriptor](RoomDescriptor.md), use `GetRoomByIdx()` with `GetCurrentRoomIndex()` instead.

???- example "Example Code"
    This gets the current rooms [RoomDescriptor](RoomDescriptor.md) class in read only and writeable versions.
    ```lua
    local level = Game():GetLevel()
    local readOnlyRoomDesc = level:GetCurrentRoomDesc()
    local writeableRoomDesc = level:GetRoomByIdx(level:GetCurrentRoomIndex())
    ```
___
### Get·Current·Room·Index () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetCurrentRoomIndex ( ) {: .copyable aria-label='Functions' }


???- note "Notes"
    This will always return the roomindex on the levelgrid, on which you entered the current room from. (see black entries in graphic below)

    ![Room Grid indices](images/infographics/RoomGridIndices.png)
___
### Get·Curse·Name () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### string GetCurseName ( ) {: .copyable aria-label='Functions' }

___
### Get·Curses () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [LevelCurse](enums/LevelCurse.md) GetCurses ( ) {: .copyable aria-label='Functions' }

___
### Get·Devil·Angel·Room·RNG () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [RNG](RNG.md) GetDevilAngelRoomRNG ( ) {: .copyable aria-label='Functions' }

___
### Get·Dungeon·Placement·Seed () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetDungeonPlacementSeed ( ) {: .copyable aria-label='Functions' }

___
### Get·Enter·Position () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) GetEnterPosition ( ) {: .copyable aria-label='Functions' }

___
### Get·Heart·Picked () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean GetHeartPicked ( ) {: .copyable aria-label='Functions' }

___
### Get·Last·Boss·Room·List·Index () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetLastBossRoomListIndex ( ) {: .copyable aria-label='Functions' }

___
### Get·Last·Room·Desc () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .alldlc .tooltip .badge }
#### const [RoomDescriptor](RoomDescriptor.md) GetLastRoomDesc ( ) {: .copyable aria-label='Functions' }

___
### Get·Name () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### string GetName ( ) {: .copyable aria-label='Functions' }

___
### Get·Non·Complete·Room·Index () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetNonCompleteRoomIndex ( ) {: .copyable aria-label='Functions' }

___
### Get·Planetarium·Chance () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### float GetPlanetariumChance ( ) {: .copyable aria-label='Functions' }
Returns the probability of getting a Planetarium (in the 0-1 range)

___
### Get·Previous·Room·Index () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetPreviousRoomIndex ( ) {: .copyable aria-label='Functions' }

___
### Get·Random·Room·Index () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetRandomRoomIndex ( boolean IAmErrorRoom, int Seed ) {: .copyable aria-label='Functions' }

___
### Get·Room·By·Idx () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### [RoomDescriptor](RoomDescriptor.md) GetRoomByIdx ( int RoomIdx, int Dimension = -1 ) {: .copyable aria-label='Functions' }

???- example "Example Code"
    This gets the current rooms [RoomDescriptor](RoomDescriptor.md) class.
    ```lua
    local level = Game():GetLevel()
    local curRoomDesc = level:GetRoomByIdx(level:GetCurrentRoomIndex())
    ```

???- info "Dimension Info"
    Dimension: ID of the dimension to get the room from

		* -1: Current dimension
		* 0: Main dimension
		* 1: Secondary dimension, used by Downpour mirror dimension and Mines escape sequence
		* 2: Death Certificate dimension

???- warn "Warning"
    This function always returns a valid RoomDescriptor object, so error checking is recommended. The `Data` property of an invalid RoomDescriptor object is `nil`.

___
### Get·Room·Count () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetRoomCount ( ) {: .copyable aria-label='Functions' }

___
### Get·Rooms () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [RoomDescriptor List](CppContainer_ArrayProxy_RoomDescriptor.md) GetRooms ( ) {: .copyable aria-label='Functions' }

???- example "Example Code"
    This code itterates over every room descriptor and prints the clear status of the room.
    ```lua
    local rooms = Game():GetLevel():GetRooms()
    for i = 0, rooms.Size-1 do
        local room = rooms:Get(i)
	print(room.Clear)
    end
    ```

___
### Get·Stage () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [LevelStage](enums/LevelStage.md) GetStage ( ) {: .copyable aria-label='Functions' }

___
### Get·Stage·Type () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [StageType](enums/StageType.md) GetStageType ( ) {: .copyable aria-label='Functions' }

___
### Get·Starting·Room·Index () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetStartingRoomIndex ( ) {: .copyable aria-label='Functions' }
Returns the gridindex of the starting room of the current level.

___
### Get·State·Flag () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean GetStateFlag ( [LevelStateFlag](enums/LevelStateFlag.md) LevelStateFlag) {: .copyable aria-label='Functions' }

___
### Has·Boss·Challenge () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean HasBossChallenge ( ) {: .copyable aria-label='Functions' }

___
### Initialize·Devil·Angel·Room () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void InitializeDevilAngelRoom ( boolean ForceAngel, boolean ForceDevil ) {: .copyable aria-label='Functions' }
By calling this function, it "locks in" the choice between a Devil Room and an Angel Room for the current floor.

Once the room is initialized, the appropriate door will spawn after killing the boss.

This function still works to grant a Devil Room even if the player has the Eucharist.

Calling this function twice will have no effect, because the room will already have been initialized. For example, this means that if you force an Angel Room, you can't change it back to a Devil Room later on.

However, you can get around this restriction by calling `level:GetRoomByIdx(GridRooms.ROOM_DEVIL_IDX).Data = nil`, which will uninitialize the room.
___
### Is·Alt·Stage () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean IsAltStage ( ) {: .copyable aria-label='Functions' }
Returns `true` if the level's [StageType](enums/StageType.md) is not `StageType.STAGE_ORIGINAL`.

___
### Is·Ascent () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### boolean IsAscent ( ) {: .copyable aria-label='Functions' }
Returns `true` if the player is in the Ascent.

___
### Is·Devil·Room·Disabled () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean IsDevilRoomDisabled ( ) {: .copyable aria-label='Functions' }

___
### Is·Next·Stage·Available () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean IsNextStageAvailable ( ) {: .copyable aria-label='Functions' }
Returns `false` if on a final floor (Chest/Dark Room, The Void, Home). Returns `true` otherwise, including cases where the next stage is technically not available such as not having the Polaroid or Negative when entering its respective Big Chest or beating Hush for the first time.

___
### Is·Pre·Ascent () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### boolean IsPreAscent ( ) {: .copyable aria-label='Functions' }
Returns `true` if the player is in the version of Mausoleum/Gehenna II leading to the Ascent.

___
### Make·Red·Room·Door () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### boolean MakeRedRoomDoor ( int CurrentRoomIdx, DoorSlot Slot ) {: .copyable aria-label='Functions' }
Attempts to create a red room door in the given room at the given door slot. Returns `true` on success.

???- note "Notes"
	This function can be used to create rooms not connected to any other room. For example, calling `MakeRedRoomDoor(2, DoorSlot.DOOR_LEFT0)` will create a room where `Slot` of `CurrentRoomIdx` would connect to, in this case grid index 1.

	Rooms can also be forced to be created by setting [Challenge](Game.md#challenge) to Red Redemption (`Challenge.CHALLENGE_RED_REDEMPTION`). Note that creating a room connected to an otherwise invalid slot will cause the door to lead to an Error room!
___
### Query·Room·Type·Index () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### int QueryRoomTypeIndex ( [RoomType](enums/RoomType.md) RoomType, boolean Visited, [RNG](RNG.md) rng, boolean IgnoreGroup = false ) {: .copyable aria-label='Functions' }
IgnoreGroup: If set to `true`, includes rooms that do not have the same group ID as the current room (currently unused)
___
### Remove·Compass·Effect () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void RemoveCompassEffect ( ) {: .copyable aria-label='Functions' }

___
### Remove·Curses () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void RemoveCurses ( [LevelCurse](enums/LevelCurse.md) Curses ) {: .copyable aria-label='Functions' }
Curses: A bitmask of LevelCurse that indicates which curses will be removed

???- example "Example Code"
    This example removes curse of darkness and curse of the blind
    ```lua
    Game():GetLevel():RemoveCurses(LevelCurse.CURSE_OF_DARKNESS | LevelCurse.CURSE_OF_BLIND)
    ```
___
### Set·Can·See·Everything () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetCanSeeEverything ( boolean Value ) {: .copyable aria-label='Functions' }

___
### Set·Heart·Picked () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetHeartPicked ( ) {: .copyable aria-label='Functions' }

___
### Set·Next·Stage () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetNextStage ( ) {: .copyable aria-label='Functions' }
This function puts you in the next stage without applying any of the floor changes. For the changes to fully apply, either use the `reseed` [console command](tutorials/DebugConsole.md#reseed), or [Game.StartStageTransition](Game.md#startstagetransition).
___
### Set·Red·Heart·Damage () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetRedHeartDamage ( ) {: .copyable aria-label='Functions' }

___
### Set·Stage () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetStage ( int StageOffset, int StageTypeOffset ) {: .copyable aria-label='Functions' }
This function changes the current floor, and it's stage. For the changes to fully apply, either use the `reseed` [console command](tutorials/DebugConsole.md#reseed), or [Game.StartStageTransition](Game.md#startstagetransition).

StageOffset acts as the new "floor":

* 1 would be equally difficult to Basement I,
* 2 would be equally difficult to Basement II,
* 3 would be equally difficult to Caves I

StageTypeOffset tells the game what "stage" to use, based on the listed IDs in [stages.xml](xml/stages.md), however, the default stage of the floor's ID will be added on top of this

* StageOffset = 1 uses the stage at ID: StageTypeOffset + 1(Basement's stage ID),
* StageOffset = 2 uses the stage at ID: StageTypeOffset + 1(Same as StageOffset 1),
* StageOffset = 3 uses the stage at ID: StageTypeOffset + 4(Caves' stage ID)

If you wish to directly use a stage ID, you can subtract the default stage for any given floor using a function like:
```lua
local function defaultStageOfFloor(StageOffset)
	if (StageOffset == 0) then
		print("Attempting to get default stage of floor 0. This is not recommended")
		Isaac.DebugString("Attempting to get default stage of floor 0. This is not recommended")
		return 0
	elseif (StageOffset <= 8) then
		return math.ceil(StageOffset/2) * 3 -2
	else
		return 10 + (StageOffset-8) * 2
	end
end
```
???- note "Notes"
	If you pass StageOffset = 0, the function acts (seemingly) arbitrarily, though it is still possible to use

	StageOffset = -1 has an unusually small floor

	StageOffsets 9, 12, and 13 are all seemingly hardcoded in some ways. Blue Womb seems to have it's backdrop and layout forced, while The Void and Home seems to force their name and backdrop

___
### Set·State·Flag () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetStateFlag ( [LevelStateFlag](enums/LevelStateFlag.md) LevelStateFlag, boolean Val ) {: .copyable aria-label='Functions' }

___
### Show·Map () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ShowMap ( ) {: .copyable aria-label='Functions' }
Show's all map (world/sun card effect) except the top secret room.
___
### Show·Name () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void ShowName ( boolean Sticky ) {: .copyable aria-label='Functions' }

___
### Uncover·Hidden·Door () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void UncoverHiddenDoor ( int CurrentRoomIdx, [DoorSlot](enums/DoorSlot.md) Slot ) {: .copyable aria-label='Functions' }
Uncovers the door on both sides by modifying the saved grid entities for neighboring room.
___
### Update () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void Update ( ) {: .copyable aria-label='Functions' }

___
### Update·Visibility () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void UpdateVisibility ( ) {: .copyable aria-label='Functions' }

???- note "Notes"
    Whenever you update the visibility of a room on the minimap, it won't update the map automatically, since it is cached. You have to explicitly call  UpdateVisibility() afterwards to apply any changes.

???- example "Example Code"
    This code
    ```lua
    -- Local variables
    local game = Game()
    local level = game:GetLevel()

    -- Give the player the Compass effect, which will display all of the floor's special rooms on the mini-map
    level:ApplyCompassEffect()

    -- Remove the icon for the Treasure Room specifically
    local treasureIndex = level:QueryRoomTypeIndex(RoomType.ROOM_TREASURE, false, RNG())
    local treasureRoom = level:GetRoomByIdx(treasureIndex)
    treasureRoom.DisplayFlags = 0

    -- Since the mini-map is cached, changing display flags won't update it unless we explicitly call this function
    level:UpdateVisibility()

    ```

___
## Variables
### Dungeon·Return·Position {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) DungeonReturnPosition {: .copyable aria-label='Variables' }

___
### Dungeon·Return·Room·Index {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int DungeonReturnRoomIndex  {: .copyable aria-label='Variables' }

___
### Enter·Door {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int EnterDoor  {: .copyable aria-label='Variables' }

This value defines on which doorslot you entered the room.

???+ bug "Bugs"
    Changing this value has no impact on anything. the EnterDoor value is always determined by the LeaveDoor Value and the game itself.
___
### Greed·Mode·Wave {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int GreedModeWave  {: .copyable aria-label='Variables' }

___
### Leave·Door {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### int LeaveDoor  {: .copyable aria-label='Variables' }

This value defines on which doorslot you are positioned after the transition. You will always end up at the oposite side of the door specified. Example: LeaveDoor=1 (Up0) will position you at Doorslot Down0 (Logic: Doorslot+2)

???- note "Notes"
    if level.LeaveDoor is set to anything other than -1, the function will transition based on the room you are currently in.
___
