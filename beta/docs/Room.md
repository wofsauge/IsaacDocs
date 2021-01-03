# Class "Room"
___ 
## boolean CheckLine (Vector Pos1, Vector Pos2, LinecheckMode Mode, integer GridPathThreshold, boolean IgnoreWalls, boolean IgnoreCrushable )
returns true if there is a direct line of sight between Pos1 and Pos2 returns false if the line is obstructed 
#### Notes
LinecheckModes:
0 : makes the line check collide with anything that impedes ground movement
1 : is a cheaper version of 0, but is not as reliable
2 : is used for explosions, it only collides with walls and indestructible blocks
3 : is a line check that only collides with obstacles that can block projectiles
___ 
## boolean DamageGrid (integer Index, integer Damage )
Damage Grid Entities currently this concerns <a class="el" href="class_grid_entity_poop.html">GridEntityPoop</a> and GridEntity_Fire returns true if damageable entity was found (and possibly damaged) return false if not used by tears, bombs, some NPCs, etc 
___ 
## boolean DestroyGrid (integer Index, boolean Immediate )
calls DamageGrid internally to damage Poop/Fire removes rocks and opens secret doors returns true if something was destroyed returns false if not used for explosions mostly 
___ 
## void EmitBloodFromWalls (integer Duration, integer Count )

___ 
## Vector FindFreePickupSpawnPosition (Vector Pos, float InitialStep, boolean AvoidActiveEntities )
Starting from Pos, will try to find a free spawn position where a newly spawned pickup item will not collide with already spawned pickup items, or solid grid elements such as rocks, or pits The returned position will be aligned to the grid. If no free position is found, the original position (aligned to the grid) is returned. 
___ 
## Vector FindFreeTilePosition (Vector Pos, float DistanceThreshold )
Finds the nearest free tile based on position Stops immediately if the tile sampled has a squared distance less than DistanceThresholdSQ 
___ 
## integer GetAliveBossesCount ()

___ 
## integer GetAliveEnemiesCount ()

___ 
## integer GetAwardSeed ()

___ 
## Backdrop::Backdrop GetBackdropType ()

Returns the BackdropType (Background) of the current room.
#### Notes
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
## BossId GetBossID ()

This will return the subtype of the current room, since this value is used to determine the boss-portrait to display when entering.
___ 
## Vector GetBottomRightPos ()
returns bottom right position inside of walls 
___ 
## integer GetBrokenWatchState ()

___ 
## Vector GetCenterPos ()
returns the room center position 
___ 
## integer GetClampedGridIndex (Vector Position)
converts float position (x,y) to grid index (similar to ingrid) clamps the values if out of bounds 
___ 
## Vector GetClampedPosition (Vector Pos, float Margin )
returns Pos clamped to room borders inside of walls 
___ 
## integer GetDecorationSeed ()

___ 
## integer GetDeliriumDistance ()

___ 
## float GetDevilRoomChance ()

___ 
## GridEntityDoor GetDoor (DoorSlot Slot)

___ 
## Vector GetDoorSlotPosition (DoorSlot Slot)

___ 
## integer GetDungeonRockIdx ()

___ 
## EntityList GetEntities ()

___ 
## integer GetFrameCount ()

___ 
## GridCollisionClass GetGridCollision (integer GridIndex)

Returns the <a class="el" href="group__enums.html#ga4c0d9bdd063a76821a5ad3030f586e17">GridCollisionClass</a> of the grid entity at this grid index.
___ 
## GridCollisionClass GetGridCollisionAtPos (Vector Pos)

Returns the <a class="el" href="group__enums.html#ga4c0d9bdd063a76821a5ad3030f586e17">GridCollisionClass</a> of the grid entity at this position in the room.
___ 
## GridEntity GetGridEntity (integer Index)

Returns the <a class="el" href="class_grid_entity.html">GridEntity</a> at this grid index.
___ 
## GridEntity GetGridEntityFromPos (Vector Position)

Returns the <a class="el" href="class_grid_entity.html">GridEntity</a> at this position in the room.
___ 
## integer GetGridHeight ()

___ 
## integer GetGridIndex (Vector Position)
converts float position (x,y) to grid index returns -1 for invalid index 
___ 
## integer GetGridPath (integer Index)

___ 
## integer GetGridPathFromPos (integer Index)

___ 
## Vector GetGridPosition (integer GridIndex)
converts grid index to float (x,y) position undefined behaviour for invalid index 
___ 
## integer GetGridSize ()

___ 
## integer GetGridWidth ()

___ 
## Vector GetLaserTarget (Vector Pos, Vector Dir )
returns the hit position for a laser beam (Technology, Robo-Baby) usually, the first poop, fire, rock, TNT, or wall encountered on a straight line 
___ 
## float GetLightingAlpha ()

___ 
## LRoomAreaDesc GetLRoomAreaDesc ()

___ 
## LRoomTileDesc GetLRoomTileDesc ()

___ 
## integer GetNextShockwaveId ()

___ 
## Vector GetRandomPosition (float Margin)
returns random non tile aligned position 
___ 
## integer GetRandomTileIndex (integer Seed)

___ 
## boolean GetRedHeartDamage ()

___ 
## const Vector GetRenderScrollOffset ()
The camera scroll offset and screen shake offsets are both represented here. 
___ 
## const Vector GetRenderSurfaceTopLeft ()
The position the floor and wall textures will be rendered at. 
___ 
## RoomConfig::Stage GetRoomConfigStage ()
returns the original stage the room was designed for (useful for The Void) 
___ 
## RoomShape GetRoomShape ()

___ 
## BossId GetSecondBossID ()

___ 
## CollectibleType GetSeededCollectible (integer Seed)

___ 
## integer GetShopLevel ()

___ 
## integer GetSpawnSeed ()

___ 
## integer GetTintedRockIdx ()

___ 
## Vector GetTopLeftPos ()
returns top left position inside of walls 
___ 
## RoomType GetType ()

___ 
## boolean HasSlowDown ()

___ 
## boolean HasTriggerPressurePlates ()

___ 
## boolean HasWater ()

___ 
## boolean HasWaterPits ()

___ 
## boolean IsAmbushActive ()

___ 
## boolean IsAmbushDone ()

___ 
## boolean IsClear ()

___ 
## boolean IsCurrentRoomLastBoss ()

___ 
## boolean IsDoorSlotAllowed (DoorSlot Slot)
Returns whether this room design may have a door at a given position, disregarding whether those doors exist. 
___ 
## boolean IsFirstEnemyDead ()

___ 
## boolean IsFirstVisit ()
Broken Watch <a class="el" href="class_room.html">Room</a> State - 0 = no watch effect, 1 = speed down, 2 = speed up. 
___ 
## boolean IsInitialized ()

___ 
## boolean IsLShapedRoom ()

___ 
## boolean IsPositionInRoom (Vector Pos, float Margin )

___ 
## boolean IsSacrificeDone ()

___ 
## void KeepDoorsClosed ()

___ 
## void MamaMegaExplossion ()

___ 
## void PlayMusic ()

___ 
## void RemoveDoor (DoorSlot Slot)

___ 
## void RemoveGridEntity (integer GridIndex, integer PathTrail, boolean KeepDecoration )

___ 
## void Render ()

___ 
## void RespawnEnemies ()
for D7 collectible 
___ 
## Vector ScreenWrapPosition (Vector Pos, float Margin )

Returns Pos, screen-wrapped (if it is just outside the room on the right it will be moved to the left side of the room, etc)
#### Notes
 This only wraps the point once, so if it has crossed multiple wrapping planes it will only wrap on the one it's closest to. For wrapping a position that has crossed two planes (outside a room in the top left for instance) call this function iteratively. 
___ 
## void SetAmbushDone (boolean Value)

___ 
## void SetBrokenWatchState (integer State)

___ 
## void SetCardAgainstHumanity ()

___ 
## void SetClear (boolean Clear)
Needed for angel room, so the clear flag can be set to false when the angel spawns void SetClear(bool Clear) {m_Desc-&gt;Clear = Clear;} 
___ 
## void SetFirstEnemyDead (boolean Value)

___ 
## void SetFloorColor (Color FloorColor)

Allows you to apply a color modifier to the floor texture of the current room.
#### Example Code
This code changes the floorcolor to red.
```lua
Game():GetRoom():SetFloorColor(Color(1,1,1,1,255,0,0))
```
___ 
## boolean SetGridPath (integer Index, integer Value )

___ 
## void SetRedHeartDamage ()

___ 
## void SetSacrificeDone (boolean Done)

___ 
## void SetShockwaveParam (integer ShockwaveId, ShockwaveParams Params )

___ 
## void SetSlowDown (integer Duration)

___ 
## void SetWallColor (Color WallColor)

Allows you to apply a color modifier to the wall texture of the current room.
#### Example Code
This code changes the wallcolor to red.
```lua
Game():GetRoom():SetWallColor(Color(1,1,1,1,255,0,0))
```
___ 
## void ShopReshuffle (boolean KeepCollectibleIdx, boolean ReselectSaleItem )

___ 
## void ShopRestockFull ()

___ 
## void ShopRestockPartial ()

___ 
## void SpawnClearAward ()

___ 
## boolean SpawnGridEntity (integer GridIndex, GridEntityType Type, integer Variant, integer Seed, integer VarData )

___ 
## boolean TryMakeBridge (GridEntity pit)

___ 
## void TryPlaceLadder (Vector PlayerPos, Vector PlayerVelocity, Entity Ladder )

___ 
## boolean TrySpawnBlueWombDoor (boolean FirstTime, boolean IgnoreTime )

___ 
## boolean TrySpawnBossRushDoor (boolean IgnoreTime)

___ 
## boolean TrySpawnDevilRoomDoor (boolean Animate)

___ 
## boolean TrySpawnMegaSatanRoomDoor ()

___ 
## boolean TrySpawnTheVoidDoor ()

___ 
## void TurnGold ()

___ 
## void Update ()

Updates the current room.
#### Notes
Calling this function is NOT needed to apply changes!
This function is pretty useless 
___ 
## Vector WorldToScreenPosition (Vector WorldPos)
Converts an entity position to one that can be used to render to the screen. 
___ 
