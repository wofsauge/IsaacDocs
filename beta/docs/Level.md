# Class "Level"
___ 
## void AddAngelRoomChance (float Chance)

___ 
## void AddCurse (LevelCurse Curse, boolean ShowName )

___ 
## void ApplyBlueMapEffect ()

___ 
## void ApplyCompassEffect (boolean Persistent)

___ 
## void ApplyMapEffect ()

___ 
## boolean CanOpenChallengeRoom (integer RoomIndex)

___ 
## boolean CanSpawnDevilRoom ()

___ 
## boolean CanStageHaveCurseOfLabyrinth (LevelStage Stage)

___ 
## void ChangeRoom (integer RoomIndex)

___ 
## void DisableDevilRoom ()

___ 
## boolean ForceHorsemanBoss (integer Seed)
return true on success 
___ 
## LevelStage GetAbsoluteStage ()
Returns the absolute stage, if its greed mode its converted to equivalent one. 
___ 
## float GetAngelRoomChance ()

___ 
## boolean GetCanSeeEverything ()

___ 
## Room GetCurrentRoom ()

___ 
## const RoomDescriptor GetCurrentRoomDesc ()

___ 
## integer GetCurrentRoomIndex ()

#### Notes
This will always return the roomindex on the levelgrid, on which you entered the current room from. (see black entries in graphic below) 
___ 
## string GetCurseName ()

___ 
## integer GetCurses ()

___ 
## RNG GetDevilAngelRoomRNG ()

___ 
## integer GetDungeonPlacementSeed ()

___ 
## Vector GetEnterPosition ()

___ 
## boolean GetHeartPicked ()

___ 
## integer GetLastBossRoomListIndex ()

___ 
## const RoomDescriptor GetLastRoomDesc ()

___ 
## string GetName (LevelStage Stage, StageType Type, integer Curses, int InfiniteLevel, boolean Dyslexia )

___ 
## integer GetNonCompleteRoomIndex ()

___ 
## integer GetPreviousRoomIndex ()

___ 
## integer GetRandomRoomIndex (boolean IAmErrorRoom, integer Seed )

___ 
## const RoomDescriptor GetRoomByIdx (integer RoomIdx)

___ 
## integer GetRoomCount ()

___ 
## LuaArrayProxy<RoomDescriptor, true> GetRooms ()

___ 
## LevelStage GetStage ()

___ 
## StageType GetStageType ()

___ 
## integer GetStartingRoomIndex ()

___ 
## boolean GetStateFlag (StateFlag StateFlag)

___ 
## boolean HasBossChallenge ()

___ 
## void InitializeDevilAngelRoom (boolean ForceAngel, boolean ForceDevil )

___ 
## boolean IsAltStage ()

___ 
## boolean IsDevilRoomDisabled ()

___ 
## boolean IsNextStageAvailable ()

___ 
## integer QueryRoomTypeIndex (RoomType RoomType, boolean Visited, RNG rng )

___ 
## void RemoveCompassEffect ()

___ 
## void RemoveCurse (LevelCurse Curse)

___ 
## void RemoveCurses ()

___ 
## void SetCanSeeEverything (boolean Value)

___ 
## void SetHeartPicked ()

___ 
## void SetNextStage ()

This function teleports you directly to the next stage without playing the leveltransition or updating the floors backdrop. Use other functions to fix those issues.
___ 
## void SetRedHeartDamage ()

___ 
## void SetStage (LevelStage Stage, StageType StageType )
for SetStage/SetNextStage to have effect, call Init afterward 
___ 
## void SetStateFlag (StateFlag StateFlag, boolean Val )

___ 
## void ShowMap ()
Show's all map (world/sun card effect) except the top secret room. 
___ 
## void ShowName (boolean Sticky)

___ 
## void UncoverHiddenDoor (integer CurrentRoomIdx, DoorSlot Slot )
Uncovers the door on both sides by modifying the saved grid entities for neighboring room. 
___ 
## void Update ()

___ 
## void UpdateVisibility ()

#### Notes
Whenever you update the visibility of a room on the minimap, it won't update the map automatically, since it is cached. You have to explicitly call  afterwards to apply any changes.
#### Example Code
This code 
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
```lua
 UpdateVisibility()
```
___ 
## Vector DungeonReturnPosition

___ 
## integer DungeonReturnRoomIndex

___ 
## integer EnterDoor

    This value defines on which doorslot you entered the room.
#### Bugs
Changing this value has no impact on anything. the EnterDoor value is always determined by the LeaveDoor Value and the game itself.
___ 
## integer GreedModeWave

___ 
## integer LeaveDoor

    This value defines on which doorslot you are positioned after the transition. You will always end up at the oposite side of the door specified. Example: LeaveDoor=1 (Up0) will position you at Doorslot Down0 (Logic: Doorslot+2)
#### Notes
if level.LeaveDoor is set to anything other than -1, the function will transition based on the room you are currently in.
___ 
