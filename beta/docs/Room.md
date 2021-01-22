# Class "Room"
## Functions
### CheckLine () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CheckLine ( [Vector](../Vector) Pos1, [Vector](../Vector) Pos2, LinecheckMode Mode, int GridPathThreshold, boolean IgnoreWalls, boolean IgnoreCrushable ) {: .copyable aria-label='Functions' }
returns true if there is a direct line of sight between Pos1 and Pos2 returns false if the line is obstructed 

???- note "Notes"
    LinecheckModes:
    0 : makes the line check collide with anything that impedes ground movement
    1 : is a cheaper version of 0, but is not as reliable
    2 : is used for explosions, it only collides with walls and indestructible blocks
    3 : is a line check that only collides with obstacles that can block projectiles
___ 
### DamageGrid () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean DamageGrid ( int Index, int Damage ) {: .copyable aria-label='Functions' }
Damage Grid Entities currently this concerns [GridEntityPoop](../GridEntityPoop) and GridEntity_Fire returns true if damageable entity was found (and possibly damaged) return false if not used by tears, bombs, some NPCs, etc
___ 
### DestroyGrid () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean DestroyGrid ( int Index, boolean Immediate ) {: .copyable aria-label='Functions' }
calls DamageGrid internally to damage Poop/Fire removes rocks and opens secret doors returns true if something was destroyed returns false if not used for explosions mostly 
___ 
### EmitBloodFromWalls () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void EmitBloodFromWalls ( int Duration, int Count ) {: .copyable aria-label='Functions' }

___ 
### FindFreePickupSpawnPosition () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) FindFreePickupSpawnPosition ( [Vector](../Vector) Pos, float InitialStep, boolean AvoidActiveEntities ) {: .copyable aria-label='Functions' }
Starting from Pos, will try to find a free spawn position where a newly spawned pickup item will not collide with already spawned pickup items, or solid grid elements such as rocks, or pits The returned position will be aligned to the grid. If no free position is found, the original position (aligned to the grid) is returned. 
___ 
### FindFreeTilePosition () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) FindFreeTilePosition ( [Vector](../Vector) Pos, float DistanceThreshold ) {: .copyable aria-label='Functions' }
Finds the nearest free tile based on position Stops immediately if the tile sampled has a squared distance less than DistanceThresholdSQ 
___ 
### GetAliveBossesCount () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetAliveBossesCount ( ) {: .copyable aria-label='Functions' }

___ 
### GetAliveEnemiesCount () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetAliveEnemiesCount ( ) {: .copyable aria-label='Functions' }

___ 
### GetAwardSeed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetAwardSeed ( ) {: .copyable aria-label='Functions' }

___ 
### GetBackdropType () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
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
### GetBossID () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### BossId GetBossID ( ) {: .copyable aria-label='Functions' }

This will return the subtype of the current room, since this value is used to determine the boss-portrait to display when entering.
___ 
### GetBottomRightPos () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetBottomRightPos ( ) {: .copyable aria-label='Functions' }
returns bottom right position inside of walls 
___ 
### GetBrokenWatchState () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetBrokenWatchState ( ) {: .copyable aria-label='Functions' }

___ 
### GetCenterPos () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetCenterPos ( ) {: .copyable aria-label='Functions' }
returns the room center position 
___ 
### GetClampedGridIndex () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetClampedGridIndex ( [Vector](../Vector) Position ) {: .copyable aria-label='Functions' }
converts float position (x,y) to grid index (similar to ingrid) clamps the values if out of bounds 
___ 
### GetClampedPosition () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetClampedPosition ( [Vector](../Vector) Pos, float Margin ) {: .copyable aria-label='Functions' }
returns Pos clamped to room borders inside of walls 
___ 
### GetDecorationSeed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetDecorationSeed ( ) {: .copyable aria-label='Functions' }

___ 
### GetDeliriumDistance () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetDeliriumDistance ( ) {: .copyable aria-label='Functions' }

___ 
### GetDevilRoomChance () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float GetDevilRoomChance ( ) {: .copyable aria-label='Functions' }

___ 
### GetDoor () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [GridEntityDoor](../GridEntityDoor) GetDoor ( [DoorSlot](../enums/DoorSlot) Slot ) {: .copyable aria-label='Functions' }

___ 
### GetDoorSlotPosition () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetDoorSlotPosition ( [DoorSlot](../enums/DoorSlot) Slot ) {: .copyable aria-label='Functions' }

___ 
### GetDungeonRockIdx () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetDungeonRockIdx ( ) {: .copyable aria-label='Functions' }

___ 
### GetEntities () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [EntityList](../CppContainer_EntityList) GetEntities ( ) {: .copyable aria-label='Functions' }

___ 
### GetFrameCount () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetFrameCount ( ) {: .copyable aria-label='Functions' }

___ 
### GetGridCollision () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [GridCollisionClass](../enums/GridCollisionClass) GetGridCollision ( int GridIndex ) {: .copyable aria-label='Functions' }

Returns the [GridCollisionClass](../enums/GridCollisionClass) of the grid entity at this grid index.
___ 
### GetGridCollisionAtPos () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [GridCollisionClass](../enums/GridCollisionClass) GetGridCollisionAtPos ( [Vector](../Vector) Pos ) {: .copyable aria-label='Functions' }

Returns the [GridCollisionClass](../enums/GridCollisionClass) of the grid entity at this position in the room.
___ 
### GetGridEntity () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [GridEntity](../GridEntity) GetGridEntity ( int Index ) {: .copyable aria-label='Functions' }

Returns the [GridEntity](../GridEntity) at this grid index.
___ 
### GetGridEntityFromPos () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [GridEntity](../GridEntity) GetGridEntityFromPos ( [Vector](../Vector) Position ) {: .copyable aria-label='Functions' }

Returns the [GridEntity](../GridEntity) at this position in the room.
___ 
### GetGridHeight () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetGridHeight ( ) {: .copyable aria-label='Functions' }

___ 
### GetGridIndex () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetGridIndex ( [Vector](../Vector) Position ) {: .copyable aria-label='Functions' }
converts float position (x,y) to grid index returns -1 for invalid index 
___ 
### GetGridPath () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetGridPath ( int Index ) {: .copyable aria-label='Functions' }

___ 
### GetGridPathFromPos () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetGridPathFromPos ( int Index ) {: .copyable aria-label='Functions' }

___ 
### GetGridPosition () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetGridPosition ( int GridIndex ) {: .copyable aria-label='Functions' }
converts grid index to float (x,y) position undefined behaviour for invalid index 
___ 
### GetGridSize () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetGridSize ( ) {: .copyable aria-label='Functions' }

___ 
### GetGridWidth () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetGridWidth ( ) {: .copyable aria-label='Functions' }

___ 
### GetLaserTarget () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetLaserTarget ( [Vector](../Vector) Pos, [Vector](../Vector) Dir ) {: .copyable aria-label='Functions' }
returns the hit position for a laser beam (Technology, Robo-Baby) usually, the first poop, fire, rock, TNT, or wall encountered on a straight line 
___ 
### GetLightingAlpha () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float GetLightingAlpha ( ) {: .copyable aria-label='Functions' }

___ 
### GetLRoomAreaDesc () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### LRoomAreaDesc GetLRoomAreaDesc ( ) {: .copyable aria-label='Functions' }

___ 
### GetLRoomTileDesc () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### LRoomTileDesc GetLRoomTileDesc ( ) {: .copyable aria-label='Functions' }

___ 
### GetNextShockwaveId () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNextShockwaveId ( ) {: .copyable aria-label='Functions' }

___ 
### GetRandomPosition () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetRandomPosition ( float Margin ) {: .copyable aria-label='Functions' }
returns random non tile aligned position 
___ 
### GetRandomTileIndex () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetRandomTileIndex ( int Seed ) {: .copyable aria-label='Functions' }

___ 
### GetRedHeartDamage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean GetRedHeartDamage ( ) {: .copyable aria-label='Functions' }

___ 
### GetRenderScrollOffset () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
####  [Vector](../Vector) GetRenderScrollOffset ( ) {: .copyable aria-label='Functions' }
The camera scroll offset and screen shake offsets are both represented here. 
___ 
### GetRenderSurfaceTopLeft () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
####  [Vector](../Vector) GetRenderSurfaceTopLeft ( ) {: .copyable aria-label='Functions' }
The position the floor and wall textures will be rendered at. 
___ 
### GetRoomConfigStage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### RoomConfig::Stage GetRoomConfigStage ( ) {: .copyable aria-label='Functions' }
returns the original stage the room was designed for (useful for The Void) 
___ 
### GetRoomShape () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [RoomShape](../enums/RoomShape) GetRoomShape ( ) {: .copyable aria-label='Functions' }

___ 
### GetSecondBossID () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### BossId GetSecondBossID ( ) {: .copyable aria-label='Functions' }

___ 
### GetSeededCollectible () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [CollectibleType](../enums/CollectibleType) GetSeededCollectible ( int Seed ) {: .copyable aria-label='Functions' }

___ 
### GetShopLevel () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetShopLevel ( ) {: .copyable aria-label='Functions' }

___ 
### GetSpawnSeed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetSpawnSeed ( ) {: .copyable aria-label='Functions' }

___ 
### GetTintedRockIdx () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetTintedRockIdx ( ) {: .copyable aria-label='Functions' }

___ 
### GetTopLeftPos () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) GetTopLeftPos ( ) {: .copyable aria-label='Functions' }
returns top left position inside of walls 
___ 
### GetType () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [RoomType](../enums/RoomType) GetType ( ) {: .copyable aria-label='Functions' }

___ 
### HasSlowDown () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasSlowDown ( ) {: .copyable aria-label='Functions' }

___ 
### HasTriggerPressurePlates () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasTriggerPressurePlates ( ) {: .copyable aria-label='Functions' }

___ 
### HasWater () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasWater ( ) {: .copyable aria-label='Functions' }

___ 
### HasWaterPits () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasWaterPits ( ) {: .copyable aria-label='Functions' }

___ 
### IsAmbushActive () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsAmbushActive ( ) {: .copyable aria-label='Functions' }

___ 
### IsAmbushDone () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsAmbushDone ( ) {: .copyable aria-label='Functions' }

___ 
### IsClear () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsClear ( ) {: .copyable aria-label='Functions' }

___ 
### IsCurrentRoomLastBoss () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsCurrentRoomLastBoss ( ) {: .copyable aria-label='Functions' }

___ 
### IsDoorSlotAllowed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsDoorSlotAllowed ( [DoorSlot](../enums/DoorSlot) Slot ) {: .copyable aria-label='Functions' }
Returns whether this room design may have a door at a given position, disregarding whether those doors exist. 
___ 
### IsFirstEnemyDead () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsFirstEnemyDead ( ) {: .copyable aria-label='Functions' }

___ 
### IsFirstVisit () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsFirstVisit ( ) {: .copyable aria-label='Functions' }

___ 
### IsInitialized () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsInitialized ( ) {: .copyable aria-label='Functions' }

___ 
### IsLShapedRoom () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsLShapedRoom ( ) {: .copyable aria-label='Functions' }

___ 
### IsPositionInRoom () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsPositionInRoom ( [Vector](../Vector) Pos, float Margin ) {: .copyable aria-label='Functions' }

___ 
### IsSacrificeDone () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsSacrificeDone ( ) {: .copyable aria-label='Functions' }

___ 
### KeepDoorsClosed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void KeepDoorsClosed ( ) {: .copyable aria-label='Functions' }

___ 
### MamaMegaExplossion () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void MamaMegaExplossion ( ) {: .copyable aria-label='Functions' }

___ 
### PlayMusic () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void PlayMusic ( ) {: .copyable aria-label='Functions' }

___ 
### RemoveDoor () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveDoor ( [DoorSlot](../enums/DoorSlot) Slot ) {: .copyable aria-label='Functions' }

___ 
### RemoveGridEntity () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveGridEntity ( int GridIndex, int PathTrail, boolean KeepDecoration ) {: .copyable aria-label='Functions' }

___ 
### Render () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Render ( ) {: .copyable aria-label='Functions' }

___ 
### RespawnEnemies () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RespawnEnemies ( ) {: .copyable aria-label='Functions' }
for D7 collectible 
___ 
### ScreenWrapPosition () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) ScreenWrapPosition ( [Vector](../Vector) Pos, float Margin ) {: .copyable aria-label='Functions' }

Returns Pos, screen-wrapped (if it is just outside the room on the right it will be moved to the left side of the room, etc)

???- note "Notes"
     This only wraps the point once, so if it has crossed multiple wrapping planes it will only wrap on the one it's closest to. For wrapping a position that has crossed two planes (outside a room in the top left for instance) call this function iteratively. 
___ 
### SetAmbushDone () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetAmbushDone ( boolean Value ) {: .copyable aria-label='Functions' }

___ 
### SetBrokenWatchState () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetBrokenWatchState ( int State ) {: .copyable aria-label='Functions' }

___ 
### SetCardAgainstHumanity () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetCardAgainstHumanity ( ) {: .copyable aria-label='Functions' }

___ 
### SetClear () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetClear ( boolean Clear ) {: .copyable aria-label='Functions' }
Needed for angel room, so the clear flag can be set to false when the angel spawns void SetClear(bool Clear) {m_Desc-&gt;Clear = Clear;} 
___ 
### SetFirstEnemyDead () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetFirstEnemyDead ( boolean Value ) {: .copyable aria-label='Functions' }

___ 
### SetFloorColor () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetFloorColor ( [Color](../Color) FloorColor ) {: .copyable aria-label='Functions' }

Allows you to apply a color modifier to the floor texture of the current room.

???- example "Example Code"
    This code changes the floorcolor to red.
    ```lua 
    Game():GetRoom():SetFloorColor(Color(1,1,1,1,255,0,0))
    ```

___ 
### SetGridPath () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean SetGridPath ( int Index, int Value ) {: .copyable aria-label='Functions' }

___ 
### SetRedHeartDamage () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetRedHeartDamage ( ) {: .copyable aria-label='Functions' }

___ 
### SetSacrificeDone () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetSacrificeDone ( boolean Done ) {: .copyable aria-label='Functions' }

___ 
### SetShockwaveParam () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetShockwaveParam ( int ShockwaveId, [ShockwaveParams](../ShockwaveParams) Params ) {: .copyable aria-label='Functions' }

___ 
### SetSlowDown () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetSlowDown ( int Duration ) {: .copyable aria-label='Functions' }

___ 
### SetWallColor () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetWallColor ( [Color](../Color) WallColor ) {: .copyable aria-label='Functions' }

Allows you to apply a color modifier to the wall texture of the current room.

???- example "Example Code"
    This code changes the wallcolor to red.
    ```lua 
    Game():GetRoom():SetWallColor(Color(1,1,1,1,255,0,0))
    ```

___ 
### ShopReshuffle () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ShopReshuffle ( boolean KeepCollectibleIdx, boolean ReselectSaleItem ) {: .copyable aria-label='Functions' }

___ 
### ShopRestockFull () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ShopRestockFull ( ) {: .copyable aria-label='Functions' }

___ 
### ShopRestockPartial () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ShopRestockPartial ( ) {: .copyable aria-label='Functions' }

___ 
### SpawnClearAward () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SpawnClearAward ( ) {: .copyable aria-label='Functions' }

___ 
### SpawnGridEntity () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean SpawnGridEntity ( int GridIndex, [GridEntityType](../enums/GridEntityType) Type, int Variant, int Seed, int VarData ) {: .copyable aria-label='Functions' }

___ 
### TryMakeBridge () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean TryMakeBridge ( [GridEntity](../GridEntity) pit ) {: .copyable aria-label='Functions' }

___ 
### TryPlaceLadder () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void TryPlaceLadder ( [Vector](../Vector) PlayerPos, [Vector](../Vector) PlayerVelocity, [Entity](../Entity) Ladder ) {: .copyable aria-label='Functions' }

___ 
### TrySpawnBlueWombDoor () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean TrySpawnBlueWombDoor ( boolean FirstTime, boolean IgnoreTime ) {: .copyable aria-label='Functions' }

___ 
### TrySpawnBossRushDoor () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean TrySpawnBossRushDoor ( boolean IgnoreTime ) {: .copyable aria-label='Functions' }

___ 
### TrySpawnDevilRoomDoor () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean TrySpawnDevilRoomDoor ( boolean Animate ) {: .copyable aria-label='Functions' }

___ 
### TrySpawnMegaSatanRoomDoor () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean TrySpawnMegaSatanRoomDoor ( ) {: .copyable aria-label='Functions' }

___ 
### TrySpawnTheVoidDoor () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean TrySpawnTheVoidDoor ( ) {: .copyable aria-label='Functions' }

___ 
### TurnGold () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void TurnGold ( ) {: .copyable aria-label='Functions' }

___ 
### Update () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Update ( ) {: .copyable aria-label='Functions' }

Updates the current room.

???- note "Notes"
    Calling this function is NOT needed to apply changes!
    This function is pretty useless 
___ 
### WorldToScreenPosition () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) WorldToScreenPosition ( [Vector](../Vector) WorldPos ) {: .copyable aria-label='Functions' }
Converts an entity position to one that can be used to render to the screen. 
___ 
