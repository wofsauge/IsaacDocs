# Class "Level"
## Functions
### AddAngelRoomChance () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddAngelRoomChance ( float Chance ) {: .copyable aria-label='Functions' }

___ 
### AddCurse () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddCurse ( [LevelCurse](../enums/LevelCurse) Curse, boolean ShowName ) {: .copyable aria-label='Functions' }

___ 
### ApplyBlueMapEffect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ApplyBlueMapEffect ( ) {: .copyable aria-label='Functions' }

___ 
### ApplyCompassEffect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ApplyCompassEffect ( boolean Persistent ) {: .copyable aria-label='Functions' }

___ 
### ApplyMapEffect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ApplyMapEffect ( ) {: .copyable aria-label='Functions' }

___ 
### CanOpenChallengeRoom () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanOpenChallengeRoom ( int RoomIndex ) {: .copyable aria-label='Functions' }

___ 
### CanSpawnDevilRoom () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanSpawnDevilRoom ( ) {: .copyable aria-label='Functions' }

___ 
### CanStageHaveCurseOfLabyrinth () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanStageHaveCurseOfLabyrinth ( [LevelStage](../enums/LevelStage) Stage ) {: .copyable aria-label='Functions' }

___ 
### ChangeRoom () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ChangeRoom ( int RoomIndex ) {: .copyable aria-label='Functions' }

___ 
### DisableDevilRoom () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DisableDevilRoom ( ) {: .copyable aria-label='Functions' }

___ 
### ForceHorsemanBoss () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean ForceHorsemanBoss ( int Seed ) {: .copyable aria-label='Functions' }
return true on success 
___ 
### GetAbsoluteStage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [LevelStage](../enums/LevelStage) GetAbsoluteStage ( ) {: .copyable aria-label='Functions' }
Returns the absolute stage, if its greed mode its converted to equivalent one. 
___ 
### GetAngelRoomChance () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float GetAngelRoomChance ( ) {: .copyable aria-label='Functions' }

___ 
### GetCanSeeEverything () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean GetCanSeeEverything ( ) {: .copyable aria-label='Functions' }

___ 
### GetCurrentRoom () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Room](../RoomConfig_Room) GetCurrentRoom ( ) {: .copyable aria-label='Functions' }

___ 
### GetCurrentRoomDesc () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
####  [RoomDescriptor](../RoomDescriptor) GetCurrentRoomDesc ( ) {: .copyable aria-label='Functions' }

___ 
### GetCurrentRoomIndex () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetCurrentRoomIndex ( ) {: .copyable aria-label='Functions' }


???- note "Notes"
    This will always return the roomindex on the levelgrid, on which you entered the current room from. (see black entries in graphic below) 
___ 
### GetCurseName () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### string GetCurseName ( ) {: .copyable aria-label='Functions' }

___ 
### GetCurses () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetCurses ( ) {: .copyable aria-label='Functions' }

___ 
### GetDevilAngelRoomRNG () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [RNG](../RNG) GetDevilAngelRoomRNG ( ) {: .copyable aria-label='Functions' }

___ 
### GetDungeonPlacementSeed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetDungeonPlacementSeed ( ) {: .copyable aria-label='Functions' }

___ 
### GetEnterPosition () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetEnterPosition ( ) {: .copyable aria-label='Functions' }

___ 
### GetHeartPicked () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean GetHeartPicked ( ) {: .copyable aria-label='Functions' }

___ 
### GetLastBossRoomListIndex () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetLastBossRoomListIndex ( ) {: .copyable aria-label='Functions' }

___ 
### GetLastRoomDesc () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
####  [RoomDescriptor](../RoomDescriptor) GetLastRoomDesc ( ) {: .copyable aria-label='Functions' }

___ 
### GetName () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### string GetName ( [LevelStage](../enums/LevelStage) Stage, [StageType](../enums/StageType) Type, int Curses, int InfiniteLevel, boolean Dyslexia ) {: .copyable aria-label='Functions' }

___ 
### GetNonCompleteRoomIndex () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNonCompleteRoomIndex ( ) {: .copyable aria-label='Functions' }

___ 
### GetPreviousRoomIndex () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetPreviousRoomIndex ( ) {: .copyable aria-label='Functions' }

___ 
### GetRandomRoomIndex () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetRandomRoomIndex ( boolean IAmErrorRoom, int Seed ) {: .copyable aria-label='Functions' }

___ 
### GetRoomByIdx () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
####  [RoomDescriptor](../RoomDescriptor) GetRoomByIdx ( int RoomIdx ) {: .copyable aria-label='Functions' }

___ 
### GetRoomCount () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetRoomCount ( ) {: .copyable aria-label='Functions' }

___ 
### GetRooms () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### LuaArrayProxy<RoomDescriptor, true> GetRooms ( ) {: .copyable aria-label='Functions' }

___ 
### GetStage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [LevelStage](../enums/LevelStage) GetStage ( ) {: .copyable aria-label='Functions' }

___ 
### GetStageType () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [StageType](../enums/StageType) GetStageType ( ) {: .copyable aria-label='Functions' }

___ 
### GetStartingRoomIndex () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetStartingRoomIndex ( ) {: .copyable aria-label='Functions' }

___ 
### GetStateFlag () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean GetStateFlag ( StateFlag StateFlag ) {: .copyable aria-label='Functions' }

___ 
### HasBossChallenge () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasBossChallenge ( ) {: .copyable aria-label='Functions' }

___ 
### InitializeDevilAngelRoom () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void InitializeDevilAngelRoom ( boolean ForceAngel, boolean ForceDevil ) {: .copyable aria-label='Functions' }

___ 
### IsAltStage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsAltStage ( ) {: .copyable aria-label='Functions' }

___ 
### IsDevilRoomDisabled () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsDevilRoomDisabled ( ) {: .copyable aria-label='Functions' }

___ 
### IsNextStageAvailable () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsNextStageAvailable ( ) {: .copyable aria-label='Functions' }

___ 
### QueryRoomTypeIndex () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int QueryRoomTypeIndex ( [RoomType](../enums/RoomType) RoomType, boolean Visited, [RNG](../RNG) rng ) {: .copyable aria-label='Functions' }

___ 
### RemoveCompassEffect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveCompassEffect ( ) {: .copyable aria-label='Functions' }

___ 
### RemoveCurse () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveCurse ( [LevelCurse](../enums/LevelCurse) Curse ) {: .copyable aria-label='Functions' }

___ 
### RemoveCurses () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveCurses ( ) {: .copyable aria-label='Functions' }

___ 
### SetCanSeeEverything () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetCanSeeEverything ( boolean Value ) {: .copyable aria-label='Functions' }

___ 
### SetHeartPicked () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetHeartPicked ( ) {: .copyable aria-label='Functions' }

___ 
### SetNextStage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetNextStage ( ) {: .copyable aria-label='Functions' }

This function teleports you directly to the next stage without playing the leveltransition or updating the floors backdrop. Use other functions to fix those issues.
___ 
### SetRedHeartDamage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetRedHeartDamage ( ) {: .copyable aria-label='Functions' }

___ 
### SetStage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetStage ( [LevelStage](../enums/LevelStage) Stage, [StageType](../enums/StageType) [StageType](../enums/StageType ) {: .copyable aria-label='Functions' }
for SetStage/SetNextStage to have effect, call Init afterward 
___ 
### SetStateFlag () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetStateFlag ( StateFlag StateFlag, boolean Val ) {: .copyable aria-label='Functions' }

___ 
### ShowMap () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ShowMap ( ) {: .copyable aria-label='Functions' }
Show's all map (world/sun card effect) except the top secret room. 
___ 
### ShowName () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ShowName ( boolean Sticky ) {: .copyable aria-label='Functions' }

___ 
### UncoverHiddenDoor () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void UncoverHiddenDoor ( int CurrentRoomIdx, [DoorSlot](../enums/DoorSlot) Slot ) {: .copyable aria-label='Functions' }
Uncovers the door on both sides by modifying the saved grid entities for neighboring room. 
___ 
### Update () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Update ( ) {: .copyable aria-label='Functions' }

___ 
### UpdateVisibility () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
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
### DungeonReturnPosition () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) DungeonReturnPosition  {: .copyable aria-label='Functions' }

___ 
## Variables
### DungeonReturnRoomIndex {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int DungeonReturnRoomIndex  {: .copyable aria-label='Variables' }

___ 
### EnterDoor {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int EnterDoor  {: .copyable aria-label='Variables' }

    This value defines on which doorslot you entered the room.

???+ bug "Bugs"
    Changing this value has no impact on anything. the EnterDoor value is always determined by the LeaveDoor Value and the game itself.
___ 
### GreedModeWave {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int GreedModeWave  {: .copyable aria-label='Variables' }

___ 
### LeaveDoor {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int LeaveDoor  {: .copyable aria-label='Variables' }

    This value defines on which doorslot you are positioned after the transition. You will always end up at the oposite side of the door specified. Example: LeaveDoor=1 (Up0) will position you at Doorslot Down0 (Logic: Doorslot+2)

???- note "Notes"
    if level.LeaveDoor is set to anything other than -1, the function will transition based on the room you are currently in.
___ 
