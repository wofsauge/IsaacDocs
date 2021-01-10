# Class "Room"
## Functions
### CheckLine () {: aria-label='Functions' }
#### boolean CheckLine ( [Vector](../Vector) Pos1, [Vector](../Vector) Pos2, LinecheckMode Mode, int GridPathThreshold, boolean IgnoreWalls, boolean IgnoreCrushable )  {: aria-label='Functions' }
returns true if there is a direct line of sight between Pos1 and Pos2 returns false if the line is obstructed 
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
LinecheckModes:
0 : makes the line check collide with anything that impedes ground movement
1 : is a cheaper version of 0, but is not as reliable
2 : is used for explosions, it only collides with walls and indestructible blocks
3 : is a line check that only collides with obstacles that can block projectiles
___ 
### DamageGrid () {: aria-label='Functions' }
#### boolean DamageGrid ( int Index, int Damage )  {: aria-label='Functions' }
Damage Grid Entities currently this concerns <a class="el" href="class_grid_entity_poop.html">GridEntityPoop</a> and GridEntity_Fire returns true if damageable entity was found (and possibly damaged) return false if not used by tears, bombs, some NPCs, etc  WRONG PARSING {: .WRONG_PARSE } 
___ 
### DestroyGrid () {: aria-label='Functions' }
#### boolean DestroyGrid ( int Index, boolean Immediate )  {: aria-label='Functions' }
calls DamageGrid internally to damage Poop/Fire removes rocks and opens secret doors returns true if something was destroyed returns false if not used for explosions mostly 
___ 
### EmitBloodFromWalls () {: aria-label='Functions' }
#### void EmitBloodFromWalls ( int Duration, int Count )  {: aria-label='Functions' }

___ 
### FindFreePickupSpawnPosition () {: aria-label='Functions' }
#### [Vector](../Vector) FindFreePickupSpawnPosition ( [Vector](../Vector) Pos, float InitialStep, boolean AvoidActiveEntities )  {: aria-label='Functions' }
Starting from Pos, will try to find a free spawn position where a newly spawned pickup item will not collide with already spawned pickup items, or solid grid elements such as rocks, or pits The returned position will be aligned to the grid. If no free position is found, the original position (aligned to the grid) is returned. 
___ 
### FindFreeTilePosition () {: aria-label='Functions' }
#### [Vector](../Vector) FindFreeTilePosition ( [Vector](../Vector) Pos, float DistanceThreshold )  {: aria-label='Functions' }
Finds the nearest free tile based on position Stops immediately if the tile sampled has a squared distance less than DistanceThresholdSQ 
___ 
### GetAliveBossesCount () {: aria-label='Functions' }
#### int GetAliveBossesCount ( )  {: aria-label='Functions' }

___ 
### GetAliveEnemiesCount () {: aria-label='Functions' }
#### int GetAliveEnemiesCount ( )  {: aria-label='Functions' }

___ 
### GetAwardSeed () {: aria-label='Functions' }
#### int GetAwardSeed ( )  {: aria-label='Functions' }

___ 
### GetBackdropType () {: aria-label='Functions' }
#### Backdrop::Backdrop GetBackdropType ( )  {: aria-label='Functions' }

Returns the BackdropType (Background) of the current room.
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
BackdropTypes


ID
Backdrop

ID
Backdrop


1
Basement

15
Cathedral


2
Cellar

16
Dark Room


3
Burning Basement

17
Chest


4
Caves

18
Mega Satan


5
Catacombs

19
Library


6
Drowned Caves

20
Shop


7
Depths

21
Isaacs Room


8
Necropolis

22
Barren Room


9
Dank Depths

23
Secret Room


10
Womb

24
Dice Room


11
Utero

25
Arcade


12
Scarred Womb

26
Error Room


13
Blue Womb (Hush)
 
27
Blue Secret


14
Sheol

28
Ultra Greed Shop
___ 
### GetBossID () {: aria-label='Functions' }
#### BossId GetBossID ( )  {: aria-label='Functions' }

This will return the subtype of the current room, since this value is used to determine the boss-portrait to display when entering.
___ 
### GetBottomRightPos () {: aria-label='Functions' }
#### [Vector](../Vector) GetBottomRightPos ( )  {: aria-label='Functions' }
returns bottom right position inside of walls 
___ 
### GetBrokenWatchState () {: aria-label='Functions' }
#### int GetBrokenWatchState ( )  {: aria-label='Functions' }

___ 
### GetCenterPos () {: aria-label='Functions' }
#### [Vector](../Vector) GetCenterPos ( )  {: aria-label='Functions' }
returns the room center position 
___ 
### GetClampedGridIndex () {: aria-label='Functions' }
#### int GetClampedGridIndex ( [Vector](../Vector) Position)  {: aria-label='Functions' }
converts float position (x,y) to grid index (similar to ingrid) clamps the values if out of bounds 
___ 
### GetClampedPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetClampedPosition ( [Vector](../Vector) Pos, float Margin )  {: aria-label='Functions' }
returns Pos clamped to room borders inside of walls 
___ 
### GetDecorationSeed () {: aria-label='Functions' }
#### int GetDecorationSeed ( )  {: aria-label='Functions' }

___ 
### GetDeliriumDistance () {: aria-label='Functions' }
#### int GetDeliriumDistance ( )  {: aria-label='Functions' }

___ 
### GetDevilRoomChance () {: aria-label='Functions' }
#### float GetDevilRoomChance ( )  {: aria-label='Functions' }

___ 
### GetDoor () {: aria-label='Functions' }
#### [GridEntityDoor](../GridEntityDoor) GetDoor ( [DoorSlot](../enums/DoorSlot) Slot)  {: aria-label='Functions' }

___ 
### GetDoorSlotPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetDoorSlotPosition ( [DoorSlot](../enums/DoorSlot) Slot)  {: aria-label='Functions' }

___ 
### GetDungeonRockIdx () {: aria-label='Functions' }
#### int GetDungeonRockIdx ( )  {: aria-label='Functions' }

___ 
### GetEntities () {: aria-label='Functions' }
#### [EntityList](../CppContainer_EntityList) GetEntities ( )  {: aria-label='Functions' }

___ 
### GetFrameCount () {: aria-label='Functions' }
#### int GetFrameCount ( )  {: aria-label='Functions' }

___ 
### GetGridCollision () {: aria-label='Functions' }
#### [GridCollisionClass](../enums/GridCollisionClass) GetGridCollision ( int GridIndex)  {: aria-label='Functions' }

Returns the <a class="el" href="group__enums.html#ga4c0d9bdd063a76821a5ad3030f586e17">GridCollisionClass</a> of the grid entity at this grid index. WRONG PARSING {: .WRONG_PARSE } 
___ 
### GetGridCollisionAtPos () {: aria-label='Functions' }
#### [GridCollisionClass](../enums/GridCollisionClass) GetGridCollisionAtPos ( [Vector](../Vector) Pos)  {: aria-label='Functions' }

Returns the <a class="el" href="group__enums.html#ga4c0d9bdd063a76821a5ad3030f586e17">GridCollisionClass</a> of the grid entity at this position in the room. WRONG PARSING {: .WRONG_PARSE } 
___ 
### GetGridEntity () {: aria-label='Functions' }
#### [GridEntity](../GridEntity) GetGridEntity ( int Index)  {: aria-label='Functions' }

Returns the <a class="el" href="class_grid_entity.html">GridEntity</a> at this grid index. WRONG PARSING {: .WRONG_PARSE } 
___ 
### GetGridEntityFromPos () {: aria-label='Functions' }
#### [GridEntity](../GridEntity) GetGridEntityFromPos ( [Vector](../Vector) Position)  {: aria-label='Functions' }

Returns the <a class="el" href="class_grid_entity.html">GridEntity</a> at this position in the room. WRONG PARSING {: .WRONG_PARSE } 
___ 
### GetGridHeight () {: aria-label='Functions' }
#### int GetGridHeight ( )  {: aria-label='Functions' }

___ 
### GetGridIndex () {: aria-label='Functions' }
#### int GetGridIndex ( [Vector](../Vector) Position)  {: aria-label='Functions' }
converts float position (x,y) to grid index returns -1 for invalid index 
___ 
### GetGridPath () {: aria-label='Functions' }
#### int GetGridPath ( int Index)  {: aria-label='Functions' }

___ 
### GetGridPathFromPos () {: aria-label='Functions' }
#### int GetGridPathFromPos ( int Index)  {: aria-label='Functions' }

___ 
### GetGridPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetGridPosition ( int GridIndex)  {: aria-label='Functions' }
converts grid index to float (x,y) position undefined behaviour for invalid index 
___ 
### GetGridSize () {: aria-label='Functions' }
#### int GetGridSize ( )  {: aria-label='Functions' }

___ 
### GetGridWidth () {: aria-label='Functions' }
#### int GetGridWidth ( )  {: aria-label='Functions' }

___ 
### GetLaserTarget () {: aria-label='Functions' }
#### [Vector](../Vector) GetLaserTarget ( [Vector](../Vector) Pos, [Vector](../Vector) Dir )  {: aria-label='Functions' }
returns the hit position for a laser beam (Technology, Robo-Baby) usually, the first poop, fire, rock, TNT, or wall encountered on a straight line 
___ 
### GetLightingAlpha () {: aria-label='Functions' }
#### float GetLightingAlpha ( )  {: aria-label='Functions' }

___ 
### GetLRoomAreaDesc () {: aria-label='Functions' }
#### LRoomAreaDesc GetLRoomAreaDesc ( )  {: aria-label='Functions' }

___ 
### GetLRoomTileDesc () {: aria-label='Functions' }
#### LRoomTileDesc GetLRoomTileDesc ( )  {: aria-label='Functions' }

___ 
### GetNextShockwaveId () {: aria-label='Functions' }
#### int GetNextShockwaveId ( )  {: aria-label='Functions' }

___ 
### GetRandomPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetRandomPosition ( float Margin)  {: aria-label='Functions' }
returns random non tile aligned position 
___ 
### GetRandomTileIndex () {: aria-label='Functions' }
#### int GetRandomTileIndex ( int Seed)  {: aria-label='Functions' }

___ 
### GetRedHeartDamage () {: aria-label='Functions' }
#### boolean GetRedHeartDamage ( )  {: aria-label='Functions' }

___ 
### GetRenderScrollOffset () {: aria-label='Functions' }
####  [Vector](../Vector) GetRenderScrollOffset ( )  {: aria-label='Functions' }
The camera scroll offset and screen shake offsets are both represented here. 
___ 
### GetRenderSurfaceTopLeft () {: aria-label='Functions' }
####  [Vector](../Vector) GetRenderSurfaceTopLeft ( )  {: aria-label='Functions' }
The position the floor and wall textures will be rendered at. 
___ 
### GetRoomConfigStage () {: aria-label='Functions' }
#### RoomConfig::Stage GetRoomConfigStage ( )  {: aria-label='Functions' }
returns the original stage the room was designed for (useful for The Void) 
___ 
### GetRoomShape () {: aria-label='Functions' }
#### [RoomShape](../enums/RoomShape) GetRoomShape ( )  {: aria-label='Functions' }

___ 
### GetSecondBossID () {: aria-label='Functions' }
#### BossId GetSecondBossID ( )  {: aria-label='Functions' }

___ 
### GetSeededCollectible () {: aria-label='Functions' }
#### [CollectibleType](../enums/CollectibleType) GetSeededCollectible ( int Seed)  {: aria-label='Functions' }

___ 
### GetShopLevel () {: aria-label='Functions' }
#### int GetShopLevel ( )  {: aria-label='Functions' }

___ 
### GetSpawnSeed () {: aria-label='Functions' }
#### int GetSpawnSeed ( )  {: aria-label='Functions' }

___ 
### GetTintedRockIdx () {: aria-label='Functions' }
#### int GetTintedRockIdx ( )  {: aria-label='Functions' }

___ 
### GetTopLeftPos () {: aria-label='Functions' }
#### [Vector](../Vector) GetTopLeftPos ( )  {: aria-label='Functions' }
returns top left position inside of walls 
___ 
### GetType () {: aria-label='Functions' }
#### [RoomType](../enums/RoomType) GetType ( )  {: aria-label='Functions' }

___ 
### HasSlowDown () {: aria-label='Functions' }
#### boolean HasSlowDown ( )  {: aria-label='Functions' }

___ 
### HasTriggerPressurePlates () {: aria-label='Functions' }
#### boolean HasTriggerPressurePlates ( )  {: aria-label='Functions' }

___ 
### HasWater () {: aria-label='Functions' }
#### boolean HasWater ( )  {: aria-label='Functions' }

___ 
### HasWaterPits () {: aria-label='Functions' }
#### boolean HasWaterPits ( )  {: aria-label='Functions' }

___ 
### IsAmbushActive () {: aria-label='Functions' }
#### boolean IsAmbushActive ( )  {: aria-label='Functions' }

___ 
### IsAmbushDone () {: aria-label='Functions' }
#### boolean IsAmbushDone ( )  {: aria-label='Functions' }

___ 
### IsClear () {: aria-label='Functions' }
#### boolean IsClear ( )  {: aria-label='Functions' }

___ 
### IsCurrentRoomLastBoss () {: aria-label='Functions' }
#### boolean IsCurrentRoomLastBoss ( )  {: aria-label='Functions' }

___ 
### IsDoorSlotAllowed () {: aria-label='Functions' }
#### boolean IsDoorSlotAllowed ( [DoorSlot](../enums/DoorSlot) Slot)  {: aria-label='Functions' }
Returns whether this room design may have a door at a given position, disregarding whether those doors exist. 
___ 
### IsFirstEnemyDead () {: aria-label='Functions' }
#### boolean IsFirstEnemyDead ( )  {: aria-label='Functions' }

___ 
### IsFirstVisit () {: aria-label='Functions' }
#### boolean IsFirstVisit ( )  {: aria-label='Functions' }
Broken Watch <a class="el" href="class_room.html">Room</a> State - 0 = no watch effect, 1 = speed down, 2 = speed up.  WRONG PARSING {: .WRONG_PARSE } 
___ 
### IsInitialized () {: aria-label='Functions' }
#### boolean IsInitialized ( )  {: aria-label='Functions' }

___ 
### IsLShapedRoom () {: aria-label='Functions' }
#### boolean IsLShapedRoom ( )  {: aria-label='Functions' }

___ 
### IsPositionInRoom () {: aria-label='Functions' }
#### boolean IsPositionInRoom ( [Vector](../Vector) Pos, float Margin )  {: aria-label='Functions' }

___ 
### IsSacrificeDone () {: aria-label='Functions' }
#### boolean IsSacrificeDone ( )  {: aria-label='Functions' }

___ 
### KeepDoorsClosed () {: aria-label='Functions' }
#### void KeepDoorsClosed ( )  {: aria-label='Functions' }

___ 
### MamaMegaExplossion () {: aria-label='Functions' }
#### void MamaMegaExplossion ( )  {: aria-label='Functions' }

___ 
### PlayMusic () {: aria-label='Functions' }
#### void PlayMusic ( )  {: aria-label='Functions' }

___ 
### RemoveDoor () {: aria-label='Functions' }
#### void RemoveDoor ( [DoorSlot](../enums/DoorSlot) Slot)  {: aria-label='Functions' }

___ 
### RemoveGridEntity () {: aria-label='Functions' }
#### void RemoveGridEntity ( int GridIndex, int PathTrail, boolean KeepDecoration )  {: aria-label='Functions' }

___ 
### Render () {: aria-label='Functions' }
#### void Render ( )  {: aria-label='Functions' }

___ 
### RespawnEnemies () {: aria-label='Functions' }
#### void RespawnEnemies ( )  {: aria-label='Functions' }
for D7 collectible 
___ 
### ScreenWrapPosition () {: aria-label='Functions' }
#### [Vector](../Vector) ScreenWrapPosition ( [Vector](../Vector) Pos, float Margin )  {: aria-label='Functions' }

Returns Pos, screen-wrapped (if it is just outside the room on the right it will be moved to the left side of the room, etc)
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
 This only wraps the point once, so if it has crossed multiple wrapping planes it will only wrap on the one it's closest to. For wrapping a position that has crossed two planes (outside a room in the top left for instance) call this function iteratively. 
___ 
### SetAmbushDone () {: aria-label='Functions' }
#### void SetAmbushDone ( boolean Value)  {: aria-label='Functions' }

___ 
### SetBrokenWatchState () {: aria-label='Functions' }
#### void SetBrokenWatchState ( int State)  {: aria-label='Functions' }

___ 
### SetCardAgainstHumanity () {: aria-label='Functions' }
#### void SetCardAgainstHumanity ( )  {: aria-label='Functions' }

___ 
### SetClear () {: aria-label='Functions' }
#### void SetClear ( boolean Clear)  {: aria-label='Functions' }
Needed for angel room, so the clear flag can be set to false when the angel spawns void SetClear(bool Clear) {m_Desc-&gt;Clear = Clear;} 
___ 
### SetFirstEnemyDead () {: aria-label='Functions' }
#### void SetFirstEnemyDead ( boolean Value)  {: aria-label='Functions' }

___ 
### SetFloorColor () {: aria-label='Functions' }
#### void SetFloorColor ( [Color](../Color) FloorColor)  {: aria-label='Functions' }

Allows you to apply a color modifier to the floor texture of the current room.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code changes the floorcolor to red.
```cpp 
Game():GetRoom():SetFloorColor(Color(1,1,1,1,255,0,0))
```

___ 
### SetGridPath () {: aria-label='Functions' }
#### boolean SetGridPath ( int Index, int Value )  {: aria-label='Functions' }

___ 
### SetRedHeartDamage () {: aria-label='Functions' }
#### void SetRedHeartDamage ( )  {: aria-label='Functions' }

___ 
### SetSacrificeDone () {: aria-label='Functions' }
#### void SetSacrificeDone ( boolean Done)  {: aria-label='Functions' }

___ 
### SetShockwaveParam () {: aria-label='Functions' }
#### void SetShockwaveParam ( int ShockwaveId, [ShockwaveParams](../ShockwaveParams) Params )  {: aria-label='Functions' }

___ 
### SetSlowDown () {: aria-label='Functions' }
#### void SetSlowDown ( int Duration)  {: aria-label='Functions' }

___ 
### SetWallColor () {: aria-label='Functions' }
#### void SetWallColor ( [Color](../Color) WallColor)  {: aria-label='Functions' }

Allows you to apply a color modifier to the wall texture of the current room.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code changes the wallcolor to red.
```cpp 
Game():GetRoom():SetWallColor(Color(1,1,1,1,255,0,0))
```

___ 
### ShopReshuffle () {: aria-label='Functions' }
#### void ShopReshuffle ( boolean KeepCollectibleIdx, boolean ReselectSaleItem )  {: aria-label='Functions' }

___ 
### ShopRestockFull () {: aria-label='Functions' }
#### void ShopRestockFull ( )  {: aria-label='Functions' }

___ 
### ShopRestockPartial () {: aria-label='Functions' }
#### void ShopRestockPartial ( )  {: aria-label='Functions' }

___ 
### SpawnClearAward () {: aria-label='Functions' }
#### void SpawnClearAward ( )  {: aria-label='Functions' }

___ 
### SpawnGridEntity () {: aria-label='Functions' }
#### boolean SpawnGridEntity ( int GridIndex, [GridEntityType](../enums/GridEntityType) Type, int Variant, int Seed, int VarData )  {: aria-label='Functions' }

___ 
### TryMakeBridge () {: aria-label='Functions' }
#### boolean TryMakeBridge ( [GridEntity](../GridEntity) pit)  {: aria-label='Functions' }

___ 
### TryPlaceLadder () {: aria-label='Functions' }
#### void TryPlaceLadder ( [Vector](../Vector) PlayerPos, [Vector](../Vector) PlayerVelocity, [Entity](../Entity) Ladder )  {: aria-label='Functions' }

___ 
### TrySpawnBlueWombDoor () {: aria-label='Functions' }
#### boolean TrySpawnBlueWombDoor ( boolean FirstTime, boolean IgnoreTime )  {: aria-label='Functions' }

___ 
### TrySpawnBossRushDoor () {: aria-label='Functions' }
#### boolean TrySpawnBossRushDoor ( boolean IgnoreTime)  {: aria-label='Functions' }

___ 
### TrySpawnDevilRoomDoor () {: aria-label='Functions' }
#### boolean TrySpawnDevilRoomDoor ( boolean Animate)  {: aria-label='Functions' }

___ 
### TrySpawnMegaSatanRoomDoor () {: aria-label='Functions' }
#### boolean TrySpawnMegaSatanRoomDoor ( )  {: aria-label='Functions' }

___ 
### TrySpawnTheVoidDoor () {: aria-label='Functions' }
#### boolean TrySpawnTheVoidDoor ( )  {: aria-label='Functions' }

___ 
### TurnGold () {: aria-label='Functions' }
#### void TurnGold ( )  {: aria-label='Functions' }

___ 
### Update () {: aria-label='Functions' }
#### void Update ( )  {: aria-label='Functions' }

Updates the current room.
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
Calling this function is NOT needed to apply changes!
This function is pretty useless 
___ 
### WorldToScreenPosition () {: aria-label='Functions' }
#### [Vector](../Vector) WorldToScreenPosition ( [Vector](../Vector) WorldPos)  {: aria-label='Functions' }
Converts an entity position to one that can be used to render to the screen. 
___ 
