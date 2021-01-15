# Class "Level"
## Functions
[ ](#){: .abp .tooltip .badge }
### AddAngelRoomChance () {: aria-label='Functions' }
#### void AddAngelRoomChance ( float Chance)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddCurse () {: aria-label='Functions' }
#### void AddCurse ( [LevelCurse](../enums/LevelCurse) Curse, boolean ShowName )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ApplyBlueMapEffect () {: aria-label='Functions' }
#### void ApplyBlueMapEffect ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ApplyCompassEffect () {: aria-label='Functions' }
#### void ApplyCompassEffect ( boolean Persistent)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ApplyMapEffect () {: aria-label='Functions' }
#### void ApplyMapEffect ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### CanOpenChallengeRoom () {: aria-label='Functions' }
#### boolean CanOpenChallengeRoom ( int RoomIndex)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### CanSpawnDevilRoom () {: aria-label='Functions' }
#### boolean CanSpawnDevilRoom ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### CanStageHaveCurseOfLabyrinth () {: aria-label='Functions' }
#### boolean CanStageHaveCurseOfLabyrinth ( [LevelStage](../enums/LevelStage) Stage)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ChangeRoom () {: aria-label='Functions' }
#### void ChangeRoom ( int RoomIndex)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### DisableDevilRoom () {: aria-label='Functions' }
#### void DisableDevilRoom ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ForceHorsemanBoss () {: aria-label='Functions' }
#### boolean ForceHorsemanBoss ( int Seed)  {: .copyable aria-label='Functions' }
return true on success 
___ 
[ ](#){: .abp .tooltip .badge }
### GetAbsoluteStage () {: aria-label='Functions' }
#### [LevelStage](../enums/LevelStage) GetAbsoluteStage ( )  {: .copyable aria-label='Functions' }
Returns the absolute stage, if its greed mode its converted to equivalent one. 
___ 
[ ](#){: .abp .tooltip .badge }
### GetAngelRoomChance () {: aria-label='Functions' }
#### float GetAngelRoomChance ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCanSeeEverything () {: aria-label='Functions' }
#### boolean GetCanSeeEverything ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCurrentRoom () {: aria-label='Functions' }
#### [Room](../RoomConfig_Room) GetCurrentRoom ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCurrentRoomDesc () {: aria-label='Functions' }
####  [RoomDescriptor](../RoomDescriptor) GetCurrentRoomDesc ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCurrentRoomIndex () {: aria-label='Functions' }
#### int GetCurrentRoomIndex ( )  {: .copyable aria-label='Functions' }

##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
This will always return the roomindex on the levelgrid, on which you entered the current room from. (see black entries in graphic below) 
___ 
[ ](#){: .abp .tooltip .badge }
### GetCurseName () {: aria-label='Functions' }
#### string GetCurseName ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCurses () {: aria-label='Functions' }
#### int GetCurses ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetDevilAngelRoomRNG () {: aria-label='Functions' }
#### [RNG](../RNG) GetDevilAngelRoomRNG ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetDungeonPlacementSeed () {: aria-label='Functions' }
#### int GetDungeonPlacementSeed ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetEnterPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetEnterPosition ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetHeartPicked () {: aria-label='Functions' }
#### boolean GetHeartPicked ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetLastBossRoomListIndex () {: aria-label='Functions' }
#### int GetLastBossRoomListIndex ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetLastRoomDesc () {: aria-label='Functions' }
####  [RoomDescriptor](../RoomDescriptor) GetLastRoomDesc ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetName () {: aria-label='Functions' }
#### string GetName ( [LevelStage](../enums/LevelStage) Stage, [StageType](../enums/StageType) Type, int Curses, int InfiniteLevel, boolean Dyslexia )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetNonCompleteRoomIndex () {: aria-label='Functions' }
#### int GetNonCompleteRoomIndex ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetPreviousRoomIndex () {: aria-label='Functions' }
#### int GetPreviousRoomIndex ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetRandomRoomIndex () {: aria-label='Functions' }
#### int GetRandomRoomIndex ( boolean IAmErrorRoom, int Seed )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetRoomByIdx () {: aria-label='Functions' }
####  [RoomDescriptor](../RoomDescriptor) GetRoomByIdx ( int RoomIdx)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetRoomCount () {: aria-label='Functions' }
#### int GetRoomCount ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetRooms () {: aria-label='Functions' }
#### LuaArrayProxy<RoomDescriptor, true> GetRooms ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetStage () {: aria-label='Functions' }
#### [LevelStage](../enums/LevelStage) GetStage ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetStageType () {: aria-label='Functions' }
#### [StageType](../enums/StageType) GetStageType ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetStartingRoomIndex () {: aria-label='Functions' }
#### int GetStartingRoomIndex ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetStateFlag () {: aria-label='Functions' }
#### boolean GetStateFlag ( StateFlag StateFlag)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasBossChallenge () {: aria-label='Functions' }
#### boolean HasBossChallenge ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### InitializeDevilAngelRoom () {: aria-label='Functions' }
#### void InitializeDevilAngelRoom ( boolean ForceAngel, boolean ForceDevil )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsAltStage () {: aria-label='Functions' }
#### boolean IsAltStage ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsDevilRoomDisabled () {: aria-label='Functions' }
#### boolean IsDevilRoomDisabled ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsNextStageAvailable () {: aria-label='Functions' }
#### boolean IsNextStageAvailable ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### QueryRoomTypeIndex () {: aria-label='Functions' }
#### int QueryRoomTypeIndex ( [RoomType](../enums/RoomType) RoomType, boolean Visited, [RNG](../RNG) rng )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveCompassEffect () {: aria-label='Functions' }
#### void RemoveCompassEffect ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveCurse () {: aria-label='Functions' }
#### void RemoveCurse ( [LevelCurse](../enums/LevelCurse) Curse)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveCurses () {: aria-label='Functions' }
#### void RemoveCurses ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetCanSeeEverything () {: aria-label='Functions' }
#### void SetCanSeeEverything ( boolean Value)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetHeartPicked () {: aria-label='Functions' }
#### void SetHeartPicked ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetNextStage () {: aria-label='Functions' }
#### void SetNextStage ( )  {: .copyable aria-label='Functions' }

This function teleports you directly to the next stage without playing the leveltransition or updating the floors backdrop. Use other functions to fix those issues.
___ 
[ ](#){: .abp .tooltip .badge }
### SetRedHeartDamage () {: aria-label='Functions' }
#### void SetRedHeartDamage ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetStage () {: aria-label='Functions' }
#### void SetStage ( [LevelStage](../enums/LevelStage) Stage, [StageType](../enums/StageType) [StageType](../enums/StageType) )  {: .copyable aria-label='Functions' }
for SetStage/SetNextStage to have effect, call Init afterward 
___ 
[ ](#){: .abp .tooltip .badge }
### SetStateFlag () {: aria-label='Functions' }
#### void SetStateFlag ( StateFlag StateFlag, boolean Val )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ShowMap () {: aria-label='Functions' }
#### void ShowMap ( )  {: .copyable aria-label='Functions' }
Show's all map (world/sun card effect) except the top secret room. 
___ 
[ ](#){: .abp .tooltip .badge }
### ShowName () {: aria-label='Functions' }
#### void ShowName ( boolean Sticky)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### UncoverHiddenDoor () {: aria-label='Functions' }
#### void UncoverHiddenDoor ( int CurrentRoomIdx, [DoorSlot](../enums/DoorSlot) Slot )  {: .copyable aria-label='Functions' }
Uncovers the door on both sides by modifying the saved grid entities for neighboring room. 
___ 
[ ](#){: .abp .tooltip .badge }
### Update () {: aria-label='Functions' }
#### void Update ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### UpdateVisibility () {: aria-label='Functions' }
#### void UpdateVisibility ( )  {: .copyable aria-label='Functions' }

##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
Whenever you update the visibility of a room on the minimap, it won't update the map automatically, since it is cached. You have to explicitly call UpdateVisibility() afterwards to apply any changes.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code 
```cpp 
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
[ ](#){: .abp .tooltip .badge }
### DungeonReturnPosition () {: aria-label='Functions' }
#### [Vector](../Vector) DungeonReturnPosition  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
## Variables
### DungeonReturnRoomIndex {: aria-label='Variables' }
#### int DungeonReturnRoomIndex  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### EnterDoor {: aria-label='Variables' }
#### int EnterDoor  {: .copyable aria-label='Variables' }

  This value defines on which doorslot you entered the room.
##### :fontawesome-solid-bug: Bugs {: .subHeader .bugs }
Changing this value has no impact on anything. the EnterDoor value is always determined by the LeaveDoor Value and the game itself.
___ 
[ ](#){: .abp .tooltip .badge }
### GreedModeWave {: aria-label='Variables' }
#### int GreedModeWave  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### LeaveDoor {: aria-label='Variables' }
#### int LeaveDoor  {: .copyable aria-label='Variables' }

  This value defines on which doorslot you are positioned after the transition. You will always end up at the oposite side of the door specified. Example: LeaveDoor=1 (Up0) will position you at Doorslot Down0 (Logic: Doorslot+2)
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
if level.LeaveDoor is set to anything other than -1, the function will transition based on the room you are currently in.
___ 
