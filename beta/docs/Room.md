# Class "Room"
## Functions
[ ](#){: .abp .tooltip .badge }
### CheckLine () {: aria-label='Functions' }
#### boolean CheckLine ( [Vector](../Vector) Pos1, [Vector](../Vector) Pos2, LinecheckMode Mode, int GridPathThreshold, boolean IgnoreWalls, boolean IgnoreCrushable ) {: .copyable aria-label='Functions' }
returns true if there is a direct line of sight between Pos1 and Pos2 returns false if the line is obstructed 

???- note "Notes"
    LinecheckModes:
    0 : makes the line check collide with anything that impedes ground movement
    1 : is a cheaper version of 0, but is not as reliable
    2 : is used for explosions, it only collides with walls and indestructible blocks
    3 : is a line check that only collides with obstacles that can block projectiles
___ 
[ ](#){: .abp .tooltip .badge }
### DamageGrid () {: aria-label='Functions' }
#### boolean DamageGrid ( int Index, int Damage ) {: .copyable aria-label='Functions' }
Damage Grid Entities currently this concerns <a class="el" href="class_grid_entity_poop.html">GridEntityPoop</a> and GridEntity_Fire returns true if damageable entity was found (and possibly damaged) return false if not used by tears, bombs, some NPCs, etc  WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### DestroyGrid () {: aria-label='Functions' }
#### boolean DestroyGrid ( int Index, boolean Immediate ) {: .copyable aria-label='Functions' }
calls DamageGrid internally to damage Poop/Fire removes rocks and opens secret doors returns true if something was destroyed returns false if not used for explosions mostly 
___ 
[ ](#){: .abp .tooltip .badge }
### EmitBloodFromWalls () {: aria-label='Functions' }
#### void EmitBloodFromWalls ( int Duration, int Count ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### FindFreePickupSpawnPosition () {: aria-label='Functions' }
#### [Vector](../Vector) FindFreePickupSpawnPosition ( [Vector](../Vector) Pos, float InitialStep, boolean AvoidActiveEntities ) {: .copyable aria-label='Functions' }
Starting from Pos, will try to find a free spawn position where a newly spawned pickup item will not collide with already spawned pickup items, or solid grid elements such as rocks, or pits The returned position will be aligned to the grid. If no free position is found, the original position (aligned to the grid) is returned. 
___ 
[ ](#){: .abp .tooltip .badge }
### FindFreeTilePosition () {: aria-label='Functions' }
#### [Vector](../Vector) FindFreeTilePosition ( [Vector](../Vector) Pos, float DistanceThreshold ) {: .copyable aria-label='Functions' }
Finds the nearest free tile based on position Stops immediately if the tile sampled has a squared distance less than DistanceThresholdSQ 
___ 
[ ](#){: .abp .tooltip .badge }
### GetAliveBossesCount () {: aria-label='Functions' }
#### int GetAliveBossesCount ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetAliveEnemiesCount () {: aria-label='Functions' }
#### int GetAliveEnemiesCount ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetAwardSeed () {: aria-label='Functions' }
#### int GetAwardSeed ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetBackdropType () {: aria-label='Functions' }
#### Backdrop::Backdrop GetBackdropType ( ) {: .copyable aria-label='Functions' }

Returns the BackdropType (Background) of the current room.

???- note "Notes"
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
[ ](#){: .abp .tooltip .badge }
### GetBossID () {: aria-label='Functions' }
#### BossId GetBossID ( ) {: .copyable aria-label='Functions' }

This will return the subtype of the current room, since this value is used to determine the boss-portrait to display when entering.
___ 
[ ](#){: .abp .tooltip .badge }
### GetBottomRightPos () {: aria-label='Functions' }
#### [Vector](../Vector) GetBottomRightPos ( ) {: .copyable aria-label='Functions' }
returns bottom right position inside of walls 
___ 
[ ](#){: .abp .tooltip .badge }
### GetBrokenWatchState () {: aria-label='Functions' }
#### int GetBrokenWatchState ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetCenterPos () {: aria-label='Functions' }
#### [Vector](../Vector) GetCenterPos ( ) {: .copyable aria-label='Functions' }
returns the room center position 
___ 
[ ](#){: .abp .tooltip .badge }
### GetClampedGridIndex () {: aria-label='Functions' }
#### int GetClampedGridIndex ( [Vector](../Vector) Position ) {: .copyable aria-label='Functions' }
converts float position (x,y) to grid index (similar to ingrid) clamps the values if out of bounds 
___ 
[ ](#){: .abp .tooltip .badge }
### GetClampedPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetClampedPosition ( [Vector](../Vector) Pos, float Margin ) {: .copyable aria-label='Functions' }
returns Pos clamped to room borders inside of walls 
___ 
[ ](#){: .abp .tooltip .badge }
### GetDecorationSeed () {: aria-label='Functions' }
#### int GetDecorationSeed ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetDeliriumDistance () {: aria-label='Functions' }
#### int GetDeliriumDistance ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetDevilRoomChance () {: aria-label='Functions' }
#### float GetDevilRoomChance ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetDoor () {: aria-label='Functions' }
#### [GridEntityDoor](../GridEntityDoor) GetDoor ( [DoorSlot](../enums/DoorSlot) Slot ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetDoorSlotPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetDoorSlotPosition ( [DoorSlot](../enums/DoorSlot) Slot ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetDungeonRockIdx () {: aria-label='Functions' }
#### int GetDungeonRockIdx ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetEntities () {: aria-label='Functions' }
#### [EntityList](../CppContainer_EntityList) GetEntities ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetFrameCount () {: aria-label='Functions' }
#### int GetFrameCount ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetGridCollision () {: aria-label='Functions' }
#### [GridCollisionClass](../enums/GridCollisionClass) GetGridCollision ( int GridIndex ) {: .copyable aria-label='Functions' }

Returns the <a class="el" href="group__enums.html#ga4c0d9bdd063a76821a5ad3030f586e17">GridCollisionClass</a> of the grid entity at this grid index. WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### GetGridCollisionAtPos () {: aria-label='Functions' }
#### [GridCollisionClass](../enums/GridCollisionClass) GetGridCollisionAtPos ( [Vector](../Vector) Pos ) {: .copyable aria-label='Functions' }

Returns the <a class="el" href="group__enums.html#ga4c0d9bdd063a76821a5ad3030f586e17">GridCollisionClass</a> of the grid entity at this position in the room. WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### GetGridEntity () {: aria-label='Functions' }
#### [GridEntity](../GridEntity) GetGridEntity ( int Index ) {: .copyable aria-label='Functions' }

Returns the <a class="el" href="class_grid_entity.html">GridEntity</a> at this grid index. WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### GetGridEntityFromPos () {: aria-label='Functions' }
#### [GridEntity](../GridEntity) GetGridEntityFromPos ( [Vector](../Vector) Position ) {: .copyable aria-label='Functions' }

Returns the <a class="el" href="class_grid_entity.html">GridEntity</a> at this position in the room. WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### GetGridHeight () {: aria-label='Functions' }
#### int GetGridHeight ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetGridIndex () {: aria-label='Functions' }
#### int GetGridIndex ( [Vector](../Vector) Position ) {: .copyable aria-label='Functions' }
converts float position (x,y) to grid index returns -1 for invalid index 
___ 
[ ](#){: .abp .tooltip .badge }
### GetGridPath () {: aria-label='Functions' }
#### int GetGridPath ( int Index ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetGridPathFromPos () {: aria-label='Functions' }
#### int GetGridPathFromPos ( int Index ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetGridPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetGridPosition ( int GridIndex ) {: .copyable aria-label='Functions' }
converts grid index to float (x,y) position undefined behaviour for invalid index 
___ 
[ ](#){: .abp .tooltip .badge }
### GetGridSize () {: aria-label='Functions' }
#### int GetGridSize ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetGridWidth () {: aria-label='Functions' }
#### int GetGridWidth ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetLaserTarget () {: aria-label='Functions' }
#### [Vector](../Vector) GetLaserTarget ( [Vector](../Vector) Pos, [Vector](../Vector) Dir ) {: .copyable aria-label='Functions' }
returns the hit position for a laser beam (Technology, Robo-Baby) usually, the first poop, fire, rock, TNT, or wall encountered on a straight line 
___ 
[ ](#){: .abp .tooltip .badge }
### GetLightingAlpha () {: aria-label='Functions' }
#### float GetLightingAlpha ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetLRoomAreaDesc () {: aria-label='Functions' }
#### LRoomAreaDesc GetLRoomAreaDesc ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetLRoomTileDesc () {: aria-label='Functions' }
#### LRoomTileDesc GetLRoomTileDesc ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetNextShockwaveId () {: aria-label='Functions' }
#### int GetNextShockwaveId ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetRandomPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetRandomPosition ( float Margin ) {: .copyable aria-label='Functions' }
returns random non tile aligned position 
___ 
[ ](#){: .abp .tooltip .badge }
### GetRandomTileIndex () {: aria-label='Functions' }
#### int GetRandomTileIndex ( int Seed ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetRedHeartDamage () {: aria-label='Functions' }
#### boolean GetRedHeartDamage ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetRenderScrollOffset () {: aria-label='Functions' }
####  [Vector](../Vector) GetRenderScrollOffset ( ) {: .copyable aria-label='Functions' }
The camera scroll offset and screen shake offsets are both represented here. 
___ 
[ ](#){: .abp .tooltip .badge }
### GetRenderSurfaceTopLeft () {: aria-label='Functions' }
####  [Vector](../Vector) GetRenderSurfaceTopLeft ( ) {: .copyable aria-label='Functions' }
The position the floor and wall textures will be rendered at. 
___ 
[ ](#){: .abp .tooltip .badge }
### GetRoomConfigStage () {: aria-label='Functions' }
#### RoomConfig::Stage GetRoomConfigStage ( ) {: .copyable aria-label='Functions' }
returns the original stage the room was designed for (useful for The Void) 
___ 
[ ](#){: .abp .tooltip .badge }
### GetRoomShape () {: aria-label='Functions' }
#### [RoomShape](../enums/RoomShape) GetRoomShape ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetSecondBossID () {: aria-label='Functions' }
#### BossId GetSecondBossID ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetSeededCollectible () {: aria-label='Functions' }
#### [CollectibleType](../enums/CollectibleType) GetSeededCollectible ( int Seed ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetShopLevel () {: aria-label='Functions' }
#### int GetShopLevel ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetSpawnSeed () {: aria-label='Functions' }
#### int GetSpawnSeed ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetTintedRockIdx () {: aria-label='Functions' }
#### int GetTintedRockIdx ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetTopLeftPos () {: aria-label='Functions' }
#### [Vector](../Vector) GetTopLeftPos ( ) {: .copyable aria-label='Functions' }
returns top left position inside of walls 
___ 
[ ](#){: .abp .tooltip .badge }
### GetType () {: aria-label='Functions' }
#### [RoomType](../enums/RoomType) GetType ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasSlowDown () {: aria-label='Functions' }
#### boolean HasSlowDown ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasTriggerPressurePlates () {: aria-label='Functions' }
#### boolean HasTriggerPressurePlates ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasWater () {: aria-label='Functions' }
#### boolean HasWater ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasWaterPits () {: aria-label='Functions' }
#### boolean HasWaterPits ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsAmbushActive () {: aria-label='Functions' }
#### boolean IsAmbushActive ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsAmbushDone () {: aria-label='Functions' }
#### boolean IsAmbushDone ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsClear () {: aria-label='Functions' }
#### boolean IsClear ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsCurrentRoomLastBoss () {: aria-label='Functions' }
#### boolean IsCurrentRoomLastBoss ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsDoorSlotAllowed () {: aria-label='Functions' }
#### boolean IsDoorSlotAllowed ( [DoorSlot](../enums/DoorSlot) Slot ) {: .copyable aria-label='Functions' }
Returns whether this room design may have a door at a given position, disregarding whether those doors exist. 
___ 
[ ](#){: .abp .tooltip .badge }
### IsFirstEnemyDead () {: aria-label='Functions' }
#### boolean IsFirstEnemyDead ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsFirstVisit () {: aria-label='Functions' }
#### boolean IsFirstVisit ( ) {: .copyable aria-label='Functions' }
Broken Watch <a class="el" href="class_room.html">Room</a> State - 0 = no watch effect, 1 = speed down, 2 = speed up.  WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### IsInitialized () {: aria-label='Functions' }
#### boolean IsInitialized ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsLShapedRoom () {: aria-label='Functions' }
#### boolean IsLShapedRoom ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsPositionInRoom () {: aria-label='Functions' }
#### boolean IsPositionInRoom ( [Vector](../Vector) Pos, float Margin ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsSacrificeDone () {: aria-label='Functions' }
#### boolean IsSacrificeDone ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### KeepDoorsClosed () {: aria-label='Functions' }
#### void KeepDoorsClosed ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### MamaMegaExplossion () {: aria-label='Functions' }
#### void MamaMegaExplossion ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### PlayMusic () {: aria-label='Functions' }
#### void PlayMusic ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveDoor () {: aria-label='Functions' }
#### void RemoveDoor ( [DoorSlot](../enums/DoorSlot) Slot ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveGridEntity () {: aria-label='Functions' }
#### void RemoveGridEntity ( int GridIndex, int PathTrail, boolean KeepDecoration ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Render () {: aria-label='Functions' }
#### void Render ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RespawnEnemies () {: aria-label='Functions' }
#### void RespawnEnemies ( ) {: .copyable aria-label='Functions' }
for D7 collectible 
___ 
[ ](#){: .abp .tooltip .badge }
### ScreenWrapPosition () {: aria-label='Functions' }
#### [Vector](../Vector) ScreenWrapPosition ( [Vector](../Vector) Pos, float Margin ) {: .copyable aria-label='Functions' }

Returns Pos, screen-wrapped (if it is just outside the room on the right it will be moved to the left side of the room, etc)

???- note "Notes"
     This only wraps the point once, so if it has crossed multiple wrapping planes it will only wrap on the one it's closest to. For wrapping a position that has crossed two planes (outside a room in the top left for instance) call this function iteratively. 
___ 
[ ](#){: .abp .tooltip .badge }
### SetAmbushDone () {: aria-label='Functions' }
#### void SetAmbushDone ( boolean Value ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetBrokenWatchState () {: aria-label='Functions' }
#### void SetBrokenWatchState ( int State ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetCardAgainstHumanity () {: aria-label='Functions' }
#### void SetCardAgainstHumanity ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetClear () {: aria-label='Functions' }
#### void SetClear ( boolean Clear ) {: .copyable aria-label='Functions' }
Needed for angel room, so the clear flag can be set to false when the angel spawns void SetClear(bool Clear) {m_Desc-&gt;Clear = Clear;} 
___ 
[ ](#){: .abp .tooltip .badge }
### SetFirstEnemyDead () {: aria-label='Functions' }
#### void SetFirstEnemyDead ( boolean Value ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetFloorColor () {: aria-label='Functions' }
#### void SetFloorColor ( [Color](../Color) FloorColor ) {: .copyable aria-label='Functions' }

Allows you to apply a color modifier to the floor texture of the current room.

???- example "Example Code"
    This code changes the floorcolor to red.
    ```lua 
    Game():GetRoom():SetFloorColor(Color(1,1,1,1,255,0,0))
    ```

___ 
[ ](#){: .abp .tooltip .badge }
### SetGridPath () {: aria-label='Functions' }
#### boolean SetGridPath ( int Index, int Value ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetRedHeartDamage () {: aria-label='Functions' }
#### void SetRedHeartDamage ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetSacrificeDone () {: aria-label='Functions' }
#### void SetSacrificeDone ( boolean Done ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetShockwaveParam () {: aria-label='Functions' }
#### void SetShockwaveParam ( int ShockwaveId, [ShockwaveParams](../ShockwaveParams) Params ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetSlowDown () {: aria-label='Functions' }
#### void SetSlowDown ( int Duration ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetWallColor () {: aria-label='Functions' }
#### void SetWallColor ( [Color](../Color) WallColor ) {: .copyable aria-label='Functions' }

Allows you to apply a color modifier to the wall texture of the current room.

???- example "Example Code"
    This code changes the wallcolor to red.
    ```lua 
    Game():GetRoom():SetWallColor(Color(1,1,1,1,255,0,0))
    ```

___ 
[ ](#){: .abp .tooltip .badge }
### ShopReshuffle () {: aria-label='Functions' }
#### void ShopReshuffle ( boolean KeepCollectibleIdx, boolean ReselectSaleItem ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ShopRestockFull () {: aria-label='Functions' }
#### void ShopRestockFull ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ShopRestockPartial () {: aria-label='Functions' }
#### void ShopRestockPartial ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SpawnClearAward () {: aria-label='Functions' }
#### void SpawnClearAward ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SpawnGridEntity () {: aria-label='Functions' }
#### boolean SpawnGridEntity ( int GridIndex, [GridEntityType](../enums/GridEntityType) Type, int Variant, int Seed, int VarData ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### TryMakeBridge () {: aria-label='Functions' }
#### boolean TryMakeBridge ( [GridEntity](../GridEntity) pit ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### TryPlaceLadder () {: aria-label='Functions' }
#### void TryPlaceLadder ( [Vector](../Vector) PlayerPos, [Vector](../Vector) PlayerVelocity, [Entity](../Entity) Ladder ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### TrySpawnBlueWombDoor () {: aria-label='Functions' }
#### boolean TrySpawnBlueWombDoor ( boolean FirstTime, boolean IgnoreTime ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### TrySpawnBossRushDoor () {: aria-label='Functions' }
#### boolean TrySpawnBossRushDoor ( boolean IgnoreTime ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### TrySpawnDevilRoomDoor () {: aria-label='Functions' }
#### boolean TrySpawnDevilRoomDoor ( boolean Animate ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### TrySpawnMegaSatanRoomDoor () {: aria-label='Functions' }
#### boolean TrySpawnMegaSatanRoomDoor ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### TrySpawnTheVoidDoor () {: aria-label='Functions' }
#### boolean TrySpawnTheVoidDoor ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### TurnGold () {: aria-label='Functions' }
#### void TurnGold ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Update () {: aria-label='Functions' }
#### void Update ( ) {: .copyable aria-label='Functions' }

Updates the current room.

???- note "Notes"
    Calling this function is NOT needed to apply changes!
    This function is pretty useless 
___ 
[ ](#){: .abp .tooltip .badge }
### WorldToScreenPosition () {: aria-label='Functions' }
#### [Vector](../Vector) WorldToScreenPosition ( [Vector](../Vector) WorldPos ) {: .copyable aria-label='Functions' }
Converts an entity position to one that can be used to render to the screen. 
___ 
