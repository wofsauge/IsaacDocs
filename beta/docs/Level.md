# Class "Level"
## Functions
[ ](#){: .abp .tooltip .badge }
### AddAngelRoomChance () {: aria-label='Functions' }
#### void AddAngelRoomChance ( float Chance)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### AddCurse () {: aria-label='Functions' }
#### void AddCurse ( [LevelCurse](../enums/LevelCurse) Curse, boolean ShowName )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ApplyBlueMapEffect () {: aria-label='Functions' }
#### void ApplyBlueMapEffect ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ApplyCompassEffect () {: aria-label='Functions' }
#### void ApplyCompassEffect ( boolean Persistent)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ApplyMapEffect () {: aria-label='Functions' }
#### void ApplyMapEffect ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### CanOpenChallengeRoom () {: aria-label='Functions' }
#### boolean CanOpenChallengeRoom ( int RoomIndex)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### CanSpawnDevilRoom () {: aria-label='Functions' }
#### boolean CanSpawnDevilRoom ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### CanStageHaveCurseOfLabyrinth () {: aria-label='Functions' }
#### boolean CanStageHaveCurseOfLabyrinth ( [LevelStage](../enums/LevelStage) Stage)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ChangeRoom () {: aria-label='Functions' }
#### void ChangeRoom ( int RoomIndex)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### DisableDevilRoom () {: aria-label='Functions' }
#### void DisableDevilRoom ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ForceHorsemanBoss () {: aria-label='Functions' }
#### boolean ForceHorsemanBoss ( int Seed)  {: aria-label='Functions' }
return true on success 
___ 
[ ](#){: .abp .tooltip .badge }
### GetAbsoluteStage () {: aria-label='Functions' }
#### [LevelStage](../enums/LevelStage) GetAbsoluteStage ( )  {: aria-label='Functions' }
Returns the absolute stage, if its greed mode its converted to equivalent one. 
___ 
[ ](#){: .abp .tooltip .badge }
### GetAngelRoomChance () {: aria-label='Functions' }
#### float GetAngelRoomChance ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCanSeeEverything () {: aria-label='Functions' }
#### boolean GetCanSeeEverything ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCurrentRoom () {: aria-label='Functions' }
#### [Room](../RoomConfig_Room) GetCurrentRoom ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCurrentRoomDesc () {: aria-label='Functions' }
####  [RoomDescriptor](../RoomDescriptor) GetCurrentRoomDesc ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCurrentRoomIndex () {: aria-label='Functions' }
#### int GetCurrentRoomIndex ( )  {: aria-label='Functions' }

##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
This will always return the roomindex on the levelgrid, on which you entered the current room from. (see black entries in graphic below) 
___ 
[ ](#){: .abp .tooltip .badge }
### GetCurseName () {: aria-label='Functions' }
#### string GetCurseName ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCurses () {: aria-label='Functions' }
#### int GetCurses ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetDevilAngelRoomRNG () {: aria-label='Functions' }
#### [RNG](../RNG) GetDevilAngelRoomRNG ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetDungeonPlacementSeed () {: aria-label='Functions' }
#### int GetDungeonPlacementSeed ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetEnterPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetEnterPosition ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetHeartPicked () {: aria-label='Functions' }
#### boolean GetHeartPicked ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetLastBossRoomListIndex () {: aria-label='Functions' }
#### int GetLastBossRoomListIndex ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetLastRoomDesc () {: aria-label='Functions' }
####  [RoomDescriptor](../RoomDescriptor) GetLastRoomDesc ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetName () {: aria-label='Functions' }
#### string GetName ( [LevelStage](../enums/LevelStage) Stage, [StageType](../enums/StageType) Type, int Curses, int InfiniteLevel, boolean Dyslexia )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetNonCompleteRoomIndex () {: aria-label='Functions' }
#### int GetNonCompleteRoomIndex ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetPreviousRoomIndex () {: aria-label='Functions' }
#### int GetPreviousRoomIndex ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetRandomRoomIndex () {: aria-label='Functions' }
#### int GetRandomRoomIndex ( boolean IAmErrorRoom, int Seed )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetRoomByIdx () {: aria-label='Functions' }
####  [RoomDescriptor](../RoomDescriptor) GetRoomByIdx ( int RoomIdx)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetRoomCount () {: aria-label='Functions' }
#### int GetRoomCount ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetRooms () {: aria-label='Functions' }
#### LuaArrayProxy<RoomDescriptor, true> GetRooms ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetStage () {: aria-label='Functions' }
#### [LevelStage](../enums/LevelStage) GetStage ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetStageType () {: aria-label='Functions' }
#### [StageType](../enums/StageType) GetStageType ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetStartingRoomIndex () {: aria-label='Functions' }
#### int GetStartingRoomIndex ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetStateFlag () {: aria-label='Functions' }
#### boolean GetStateFlag ( StateFlag StateFlag)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasBossChallenge () {: aria-label='Functions' }
#### boolean HasBossChallenge ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### InitializeDevilAngelRoom () {: aria-label='Functions' }
#### void InitializeDevilAngelRoom ( boolean ForceAngel, boolean ForceDevil )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsAltStage () {: aria-label='Functions' }
#### boolean IsAltStage ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsDevilRoomDisabled () {: aria-label='Functions' }
#### boolean IsDevilRoomDisabled ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsNextStageAvailable () {: aria-label='Functions' }
#### boolean IsNextStageAvailable ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### QueryRoomTypeIndex () {: aria-label='Functions' }
#### int QueryRoomTypeIndex ( [RoomType](../enums/RoomType) RoomType, boolean Visited, [RNG](../RNG) rng )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveCompassEffect () {: aria-label='Functions' }
#### void RemoveCompassEffect ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveCurse () {: aria-label='Functions' }
#### void RemoveCurse ( [LevelCurse](../enums/LevelCurse) Curse)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveCurses () {: aria-label='Functions' }
#### void RemoveCurses ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetCanSeeEverything () {: aria-label='Functions' }
#### void SetCanSeeEverything ( boolean Value)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetHeartPicked () {: aria-label='Functions' }
#### void SetHeartPicked ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetNextStage () {: aria-label='Functions' }
#### void SetNextStage ( )  {: aria-label='Functions' }

This function teleports you directly to the next stage without playing the leveltransition or updating the floors backdrop. Use other functions to fix those issues.
___ 
[ ](#){: .abp .tooltip .badge }
### SetRedHeartDamage () {: aria-label='Functions' }
#### void SetRedHeartDamage ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetStage () {: aria-label='Functions' }
#### void SetStage ( [LevelStage](../enums/LevelStage) Stage, [StageType](../enums/StageType) [StageType](../enums/StageType) )  {: aria-label='Functions' }
for SetStage/SetNextStage to have effect, call Init afterward 
___ 
[ ](#){: .abp .tooltip .badge }
### SetStateFlag () {: aria-label='Functions' }
#### void SetStateFlag ( StateFlag StateFlag, boolean Val )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ShowMap () {: aria-label='Functions' }
#### void ShowMap ( )  {: aria-label='Functions' }
Show's all map (world/sun card effect) except the top secret room. 
___ 
[ ](#){: .abp .tooltip .badge }
### ShowName () {: aria-label='Functions' }
#### void ShowName ( boolean Sticky)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### UncoverHiddenDoor () {: aria-label='Functions' }
#### void UncoverHiddenDoor ( int CurrentRoomIdx, [DoorSlot](../enums/DoorSlot) Slot )  {: aria-label='Functions' }
Uncovers the door on both sides by modifying the saved grid entities for neighboring room. 
___ 
[ ](#){: .abp .tooltip .badge }
### Update () {: aria-label='Functions' }
#### void Update ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### UpdateVisibility () {: aria-label='Functions' }
#### void UpdateVisibility ( )  {: aria-label='Functions' }

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
#### [Vector](../Vector) DungeonReturnPosition  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
## Variables
### DungeonReturnRoomIndex {: aria-label='Variables' }
#### int DungeonReturnRoomIndex  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### EnterDoor {: aria-label='Variables' }
#### int EnterDoor  {: aria-label='Variables' }

  This value defines on which doorslot you entered the room.
##### :fontawesome-solid-bug: Bugs {: .subHeader .bugs }
Changing this value has no impact on anything. the EnterDoor value is always determined by the LeaveDoor Value and the game itself.
___ 
[ ](#){: .abp .tooltip .badge }
### GreedModeWave {: aria-label='Variables' }
#### int GreedModeWave  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### LeaveDoor {: aria-label='Variables' }
#### int LeaveDoor  {: aria-label='Variables' }

  This value defines on which doorslot you are positioned after the transition. You will always end up at the oposite side of the door specified. Example: LeaveDoor=1 (Up0) will position you at Doorslot Down0 (Logic: Doorslot+2)
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
if level.LeaveDoor is set to anything other than -1, the function will transition based on the room you are currently in.
___ 
