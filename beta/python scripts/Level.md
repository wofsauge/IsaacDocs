# Class "Level"
## Functions
### AddAngelRoomChance () {: aria-label='Functions' }
#### void AddAngelRoomChance ( float Chance)  {: aria-label='Functions' }

___ 
### AddCurse () {: aria-label='Functions' }
#### void AddCurse ( LevelCurse Curse, boolean ShowName )  {: aria-label='Functions' }

___ 
### ApplyBlueMapEffect () {: aria-label='Functions' }
#### void ApplyBlueMapEffect ( )  {: aria-label='Functions' }

___ 
### ApplyCompassEffect () {: aria-label='Functions' }
#### void ApplyCompassEffect ( boolean Persistent)  {: aria-label='Functions' }

___ 
### ApplyMapEffect () {: aria-label='Functions' }
#### void ApplyMapEffect ( )  {: aria-label='Functions' }

___ 
### CanOpenChallengeRoom () {: aria-label='Functions' }
#### boolean CanOpenChallengeRoom ( int RoomIndex)  {: aria-label='Functions' }

___ 
### CanSpawnDevilRoom () {: aria-label='Functions' }
#### boolean CanSpawnDevilRoom ( )  {: aria-label='Functions' }

___ 
### CanStageHaveCurseOfLabyrinth () {: aria-label='Functions' }
#### boolean CanStageHaveCurseOfLabyrinth ( LevelStage Stage)  {: aria-label='Functions' }

___ 
### ChangeRoom () {: aria-label='Functions' }
#### void ChangeRoom ( int RoomIndex)  {: aria-label='Functions' }

___ 
### DisableDevilRoom () {: aria-label='Functions' }
#### void DisableDevilRoom ( )  {: aria-label='Functions' }

___ 
### ForceHorsemanBoss () {: aria-label='Functions' }
#### boolean ForceHorsemanBoss ( int Seed)  {: aria-label='Functions' }
return true on success 
___ 
### GetAbsoluteStage () {: aria-label='Functions' }
#### LevelStage GetAbsoluteStage ( )  {: aria-label='Functions' }
Returns the absolute stage, if its greed mode its converted to equivalent one. 
___ 
### GetAngelRoomChance () {: aria-label='Functions' }
#### float GetAngelRoomChance ( )  {: aria-label='Functions' }

___ 
### GetCanSeeEverything () {: aria-label='Functions' }
#### boolean GetCanSeeEverything ( )  {: aria-label='Functions' }

___ 
### GetCurrentRoom () {: aria-label='Functions' }
#### [Room](../RoomConfig_Room) GetCurrentRoom ( )  {: aria-label='Functions' }

___ 
### GetCurrentRoomDesc () {: aria-label='Functions' }
####  [RoomDescriptor](../RoomDescriptor) GetCurrentRoomDesc ( )  {: aria-label='Functions' }

___ 
### GetCurrentRoomIndex () {: aria-label='Functions' }
#### int GetCurrentRoomIndex ( )  {: aria-label='Functions' }

##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
This will always return the roomindex on the levelgrid, on which you entered the current room from. (see black entries in graphic below) 
___ 
### GetCurseName () {: aria-label='Functions' }
#### string GetCurseName ( )  {: aria-label='Functions' }

___ 
### GetCurses () {: aria-label='Functions' }
#### int GetCurses ( )  {: aria-label='Functions' }

___ 
### GetDevilAngelRoomRNG () {: aria-label='Functions' }
#### [RNG](../RNG) GetDevilAngelRoomRNG ( )  {: aria-label='Functions' }

___ 
### GetDungeonPlacementSeed () {: aria-label='Functions' }
#### int GetDungeonPlacementSeed ( )  {: aria-label='Functions' }

___ 
### GetEnterPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetEnterPosition ( )  {: aria-label='Functions' }

___ 
### GetHeartPicked () {: aria-label='Functions' }
#### boolean GetHeartPicked ( )  {: aria-label='Functions' }

___ 
### GetLastBossRoomListIndex () {: aria-label='Functions' }
#### int GetLastBossRoomListIndex ( )  {: aria-label='Functions' }

___ 
### GetLastRoomDesc () {: aria-label='Functions' }
####  [RoomDescriptor](../RoomDescriptor) GetLastRoomDesc ( )  {: aria-label='Functions' }

___ 
### GetName () {: aria-label='Functions' }
#### string GetName ( LevelStage Stage, StageType Type, int Curses, int InfiniteLevel, boolean Dyslexia )  {: aria-label='Functions' }

___ 
### GetNonCompleteRoomIndex () {: aria-label='Functions' }
#### int GetNonCompleteRoomIndex ( )  {: aria-label='Functions' }

___ 
### GetPreviousRoomIndex () {: aria-label='Functions' }
#### int GetPreviousRoomIndex ( )  {: aria-label='Functions' }

___ 
### GetRandomRoomIndex () {: aria-label='Functions' }
#### int GetRandomRoomIndex ( boolean IAmErrorRoom, int Seed )  {: aria-label='Functions' }

___ 
### GetRoomByIdx () {: aria-label='Functions' }
####  [RoomDescriptor](../RoomDescriptor) GetRoomByIdx ( int RoomIdx)  {: aria-label='Functions' }

___ 
### GetRoomCount () {: aria-label='Functions' }
#### int GetRoomCount ( )  {: aria-label='Functions' }

___ 
### GetRooms () {: aria-label='Functions' }
#### LuaArrayProxy<RoomDescriptor, true> GetRooms ( )  {: aria-label='Functions' }

___ 
### GetStage () {: aria-label='Functions' }
#### LevelStage GetStage ( )  {: aria-label='Functions' }

___ 
### GetStageType () {: aria-label='Functions' }
#### StageType GetStageType ( )  {: aria-label='Functions' }

___ 
### GetStartingRoomIndex () {: aria-label='Functions' }
#### int GetStartingRoomIndex ( )  {: aria-label='Functions' }

___ 
### GetStateFlag () {: aria-label='Functions' }
#### boolean GetStateFlag ( StateFlag StateFlag)  {: aria-label='Functions' }

___ 
### HasBossChallenge () {: aria-label='Functions' }
#### boolean HasBossChallenge ( )  {: aria-label='Functions' }

___ 
### InitializeDevilAngelRoom () {: aria-label='Functions' }
#### void InitializeDevilAngelRoom ( boolean ForceAngel, boolean ForceDevil )  {: aria-label='Functions' }

___ 
### IsAltStage () {: aria-label='Functions' }
#### boolean IsAltStage ( )  {: aria-label='Functions' }

___ 
### IsDevilRoomDisabled () {: aria-label='Functions' }
#### boolean IsDevilRoomDisabled ( )  {: aria-label='Functions' }

___ 
### IsNextStageAvailable () {: aria-label='Functions' }
#### boolean IsNextStageAvailable ( )  {: aria-label='Functions' }

___ 
### QueryRoomTypeIndex () {: aria-label='Functions' }
#### int QueryRoomTypeIndex ( RoomType RoomType, boolean Visited, [RNG](../RNG) rng )  {: aria-label='Functions' }

___ 
### RemoveCompassEffect () {: aria-label='Functions' }
#### void RemoveCompassEffect ( )  {: aria-label='Functions' }

___ 
### RemoveCurse () {: aria-label='Functions' }
#### void RemoveCurse ( LevelCurse Curse)  {: aria-label='Functions' }

___ 
### RemoveCurses () {: aria-label='Functions' }
#### void RemoveCurses ( )  {: aria-label='Functions' }

___ 
### SetCanSeeEverything () {: aria-label='Functions' }
#### void SetCanSeeEverything ( boolean Value)  {: aria-label='Functions' }

___ 
### SetHeartPicked () {: aria-label='Functions' }
#### void SetHeartPicked ( )  {: aria-label='Functions' }

___ 
### SetNextStage () {: aria-label='Functions' }
#### void SetNextStage ( )  {: aria-label='Functions' }

This function teleports you directly to the next stage without playing the leveltransition or updating the floors backdrop. Use other functions to fix those issues.
___ 
### SetRedHeartDamage () {: aria-label='Functions' }
#### void SetRedHeartDamage ( )  {: aria-label='Functions' }

___ 
### SetStage () {: aria-label='Functions' }
#### void SetStage ( LevelStage Stage, StageType StageType )  {: aria-label='Functions' }
for SetStage/SetNextStage to have effect, call Init afterward 
___ 
### SetStateFlag () {: aria-label='Functions' }
#### void SetStateFlag ( StateFlag StateFlag, boolean Val )  {: aria-label='Functions' }

___ 
### ShowMap () {: aria-label='Functions' }
#### void ShowMap ( )  {: aria-label='Functions' }
Show's all map (world/sun card effect) except the top secret room. 
___ 
### ShowName () {: aria-label='Functions' }
#### void ShowName ( boolean Sticky)  {: aria-label='Functions' }

___ 
### UncoverHiddenDoor () {: aria-label='Functions' }
#### void UncoverHiddenDoor ( int CurrentRoomIdx, DoorSlot Slot )  {: aria-label='Functions' }
Uncovers the door on both sides by modifying the saved grid entities for neighboring room. 
___ 
### Update () {: aria-label='Functions' }
#### void Update ( )  {: aria-label='Functions' }

___ 
### UpdateVisibility () {: aria-label='Functions' }
#### void UpdateVisibility ( )  {: aria-label='Functions' }

##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
Whenever you update the visibility of a room on the minimap, it won't update the map automatically, since it is cached. You have to explicitly call  UpdateVisibility() afterwards to apply any changes.
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
### DungeonReturnPosition () {: aria-label='Functions' }
#### [Vector](../Vector) DungeonReturnPosition  {: aria-label='Functions' }

___ 
## Variables
### DungeonReturnRoomIndex {: aria-label='Variables' }
#### int DungeonReturnRoomIndex  {: aria-label='Variables' }

___ 
### EnterDoor {: aria-label='Variables' }
#### int EnterDoor  {: aria-label='Variables' }

    This value defines on which doorslot you entered the room.
##### :fontawesome-solid-bug: Bugs {: .subHeader .bugs }
Changing this value has no impact on anything. the EnterDoor value is always determined by the LeaveDoor Value and the game itself.
___ 
### GreedModeWave {: aria-label='Variables' }
#### int GreedModeWave  {: aria-label='Variables' }

___ 
### LeaveDoor {: aria-label='Variables' }
#### int LeaveDoor  {: aria-label='Variables' }

    This value defines on which doorslot you are positioned after the transition. You will always end up at the oposite side of the door specified. Example: LeaveDoor=1 (Up0) will position you at Doorslot Down0 (Logic: Doorslot+2)
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
if level.LeaveDoor is set to anything other than -1, the function will transition based on the room you are currently in.
___ 
