---
tags:
  - Class
---
# Class "Room"

???+ info
    You can get this class by using the following functions:

    * [Game:GetRoom()](Game.md#getroom)
    * [Level:GetCurrentRoom()](Level.md#getcurrentroom)

    ???+ example "Example Code"
        ```lua
        local room = Game():GetRoom()
        ```

## Functions
### Check·Line () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean CheckLine ( [Vector](Vector.md) Pos1, [Vector](Vector.md) Pos2, LinecheckMode Mode, int GridPathThreshold = 0, boolean IgnoreWalls = false, boolean IgnoreCrushable = false ) {: .copyable aria-label='Functions' }
Returns 2 values:
		* boolean: true if there are no obstructions between Pos1 and Pos2, false otherwise
		* Vector: first hit position from Pos1 to Pos2 (returns Pos2 if the line didn't hit anything)

???+ note "LinecheckMode notes"
    LinecheckMode pseudo-enumeration:

    **0** : makes the line check collide with anything that impedes ground movement

    **1** : is a cheaper version of 0, but is not as reliable (For example, can return true if line of sight can be gained between diagonally adjacent rocks)

    **2** : is used for explosions, it only collides with walls and indestructible blocks

    **3** : is a line check that only collides with obstacles that can block projectiles

???+ note "GridPathThreshold notes"
    GridPath values pseudo-enumeration:

    **900**  : Set by some enemies when they pass through a tile. De-prioritises the tile for pathfinders. Degrades over time in steps of 100.

    **950**  : Set by fire places. De-prioritises the tile for pathfinders. Does not degrade.

    **1000** : Set by grid entities. Invalidates the tile for pathfinders. Impedes grounded player movement. Does not degrade.

    **3000** : Set by pits. Invalidates the tile for pathfinders. Impedes grounded player movement. Does not degrade.

    **3999** : Set by grimaces. Invalidates the tile for pathfinders. Impedes grounded player movement. Drops to 900 and then degrades over time in steps of 100 (Grimaces reset value every frame).
___
### Damage·Grid () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean DamageGrid ( int Index, int Damage ) {: .copyable aria-label='Functions' }
Damage Grid Entities currently this concerns [GridEntityPoop](GridEntityPoop.md) and GridEntity_Fire returns true if damageable entity was found (and possibly damaged) return false if not used by tears, bombs, some NPCs, etc
___
### Destroy·Grid () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean DestroyGrid ( int Index, boolean Immediate ) {: .copyable aria-label='Functions' }
Calls DamageGrid internally to damage Poop/Fire removes rocks and opens secret doors.
Returns `true` if something was destroyed.
___
### Emit·Blood·From·Walls () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void EmitBloodFromWalls ( int Duration, int Count ) {: .copyable aria-label='Functions' }

___
### Find·Free·Pickup·Spawn·Position () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [Vector](Vector.md) FindFreePickupSpawnPosition ( [Vector](Vector.md) Pos, float InitialStep = 0, boolean AvoidActiveEntities = false, boolean AllowPits = false ) {: .copyable aria-label='Functions' }
Starting from `Pos`, will try to find a free spawn position where a newly spawned pickup item will not collide with already spawned pickup items, or solid grid elements such as rocks, or pits The returned position will be aligned to the grid. If no free position is found, the original position (aligned to the grid) is returned.
___
### Find·Free·Tile·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) FindFreeTilePosition ( [Vector](Vector.md) Pos, float DistanceThreshold ) {: .copyable aria-label='Functions' }
Finds the nearest free tile based on position Stops immediately if the tile sampled has a squared distance less than `DistanceThresholdSQ`.
___
### Get·Alive·Bosses·Count () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetAliveBossesCount ( ) {: .copyable aria-label='Functions' }

___
### Get·Alive·Enemies·Count () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetAliveEnemiesCount ( ) {: .copyable aria-label='Functions' }

___
### Get·Award·Seed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetAwardSeed ( ) {: .copyable aria-label='Functions' }

___
### Get·Backdrop·Type () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [BackdropType](enums/BackdropType.md) GetBackdropType ( ) {: .copyable aria-label='Functions' }
Returns the BackdropType of the current room.

___
### Get·Boss·ID () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetBossID ( ) {: .copyable aria-label='Functions' }
Returns the boss ID of the first boss in the room. Returns 0 otherwise.

This will return the sub-type of the current room, since this value is used to determine the boss portrait to display when entering.

A boss ID is not equal to the entity type of the boss; it is a separate value in the entities2.xml file inside the "bossID" attribute.

___
### Get·Bottom·Right·Pos () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetBottomRightPos ( ) {: .copyable aria-label='Functions' }
Returns bottom right position of the room, inside of the wall border.

___
### Get·Broken·Watch·State () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetBrokenWatchState ( ) {: .copyable aria-label='Functions' }
Returns whether the room is slowed down, sped up or neither.

???+ note Notes
    Return values:

    **0**: Room is neither slowed down nor sped up

    **1**: Room is slowed down, either because of the Broken Watch or because of the I'm Drowsy pill

    **2**: Room is sped up, either because of the Broken Watch or because of the I'm Excited!!! pill
    
___
### Get·Center·Pos () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetCenterPos ( ) {: .copyable aria-label='Functions' }
Returns the room center position.

___
### Get·Clamped·Grid·Index () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetClampedGridIndex ( [Vector](Vector.md) Position ) {: .copyable aria-label='Functions' }
Returns the grid index located at `Position`. Clamps to the nearest grid index if `Position` is out of bounds.

___
### Get·Clamped·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetClampedPosition ( [Vector](Vector.md) Pos, float Margin ) {: .copyable aria-label='Functions' }
Returns `Pos` clamped to within the room's walls with a radius of `Margin` units away from out of bounds.

___
### Get·Decoration·Seed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetDecorationSeed ( ) {: .copyable aria-label='Functions' }

___
### Get·Delirium·Distance () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetDeliriumDistance ( ) {: .copyable aria-label='Functions' }

___
### Get·Devil·Room·Chance () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### float GetDevilRoomChance ( ) {: .copyable aria-label='Functions' }

This gives the total devil deal percentage for the floor. It doesn't split it into devil and angel percentages as seen in the found hud. It's effectively the Duality percentage. This will return a value for illegal floors (e.g. Basement I) so be careful. The value can be greater than 100%.

???- example "Example Code"
    ```lua
    -- this code shows how to convert room:GetDevilRoomChance into the separate devil and angel percentages shown in the found hud
    -- this code is current for Repentance as of Jan 2024, other versions might have different values
    local game = Game()
    
    local function anyPlayerHasCollectible(collectible)
      for i = 0, game:GetNumPlayers() - 1 do
        local player = game:GetPlayer(i)
        
        if player:HasCollectible(collectible, false) then
          return true
        end
      end
      
      return false
    end
    
    local function anyPlayerHasTrinket(trinket)
      for i = 0, game:GetNumPlayers() - 1 do
        local player = game:GetPlayer(i)
        
        if player:HasTrinket(trinket, false) then
          return true
        end
      end
      
      return false
    end
    
    local function getDevilAngelRoomChance()
      local level = game:GetLevel()
      local room = level:GetCurrentRoom()
      local totalChance = math.min(room:GetDevilRoomChance(), 1.0)
      
      local angelRoomSpawned = game:GetStateFlag(GameStateFlag.STATE_FAMINE_SPAWNED) -- repurposed
      local devilRoomSpawned = game:GetStateFlag(GameStateFlag.STATE_DEVILROOM_SPAWNED)
      local devilRoomVisited = game:GetStateFlag(GameStateFlag.STATE_DEVILROOM_VISITED)
      
      local devilRoomChance = 1.0
      if anyPlayerHasCollectible(CollectibleType.COLLECTIBLE_EUCHARIST) then
        devilRoomChance = 0.0
      elseif devilRoomSpawned and devilRoomVisited and game:GetDevilRoomDeals() > 0 then -- devil deals locked in
        if anyPlayerHasCollectible(CollectibleType.COLLECTIBLE_BOOK_OF_VIRTUES) or
           anyPlayerHasCollectible(CollectibleType.COLLECTIBLE_ACT_OF_CONTRITION) or
           level:GetAngelRoomChance() > 0.0 -- confessional, sac room
        then
          devilRoomChance = 0.5
        end
      elseif devilRoomSpawned or anyPlayerHasCollectible(CollectibleType.COLLECTIBLE_BOOK_OF_VIRTUES) or level:GetAngelRoomChance() > 0.0 then
        if not (devilRoomVisited or angelRoomSpawned) then
          devilRoomChance = 0.0
        else
          devilRoomChance = 0.5
        end
      end
      
      -- https://bindingofisaacrebirth.fandom.com/wiki/Angel_Room#Angel_Room_Generation_Chance
      if devilRoomChance == 0.5 then
        if anyPlayerHasTrinket(TrinketType.TRINKET_ROSARY_BEAD) then
          devilRoomChance = devilRoomChance * (1.0 - 0.5)
        end
        if game:GetDonationModAngel() >= 10 then -- donate 10 coins
          devilRoomChance = devilRoomChance * (1.0 - 0.5)
        end
        if anyPlayerHasCollectible(CollectibleType.COLLECTIBLE_KEY_PIECE_1) then
          devilRoomChance = devilRoomChance * (1.0 - 0.25)
        end
        if anyPlayerHasCollectible(CollectibleType.COLLECTIBLE_KEY_PIECE_2) then
          devilRoomChance = devilRoomChance * (1.0 - 0.25)
        end
        if level:GetStateFlag(LevelStateFlag.STATE_EVIL_BUM_KILLED) then
          devilRoomChance = devilRoomChance * (1.0 - 0.25)
        end
        if level:GetStateFlag(LevelStateFlag.STATE_BUM_LEFT) and not level:GetStateFlag(LevelStateFlag.STATE_EVIL_BUM_LEFT) then
          devilRoomChance = devilRoomChance * (1.0 - 0.1)
        end
        if level:GetStateFlag(LevelStateFlag.STATE_EVIL_BUM_LEFT) and not level:GetStateFlag(LevelStateFlag.STATE_BUM_LEFT) then
          devilRoomChance = devilRoomChance * (1.0 + 0.1)
        end
        if level:GetAngelRoomChance() > 0.0 or
           (level:GetAngelRoomChance() < 0.0 and (anyPlayerHasCollectible(CollectibleType.COLLECTIBLE_BOOK_OF_VIRTUES) or anyPlayerHasCollectible(CollectibleType.COLLECTIBLE_ACT_OF_CONTRITION)))
        then
          devilRoomChance = devilRoomChance * (1.0 - level:GetAngelRoomChance())
        end
        if anyPlayerHasCollectible(CollectibleType.COLLECTIBLE_BOOK_OF_VIRTUES) then
          devilRoomChance = devilRoomChance * (1.0 - 0.25)
        end
        devilRoomChance = math.max(0.0, math.min(devilRoomChance, 1.0))
      end
      
      local angelRoomChance = 1.0 - devilRoomChance
      return totalChance * devilRoomChance, totalChance * angelRoomChance
    end
    ```
___
### Get·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityDoor](GridEntityDoor.md) GetDoor ( [DoorSlot](enums/DoorSlot.md) Slot ) {: .copyable aria-label='Functions' data-altreturn='nil' }
Returns the [GridEntityDoor](GridEntityDoor.md) at the given [DoorSlot](enums/DoorSlot.md) position. Returns `nil` if no Door is located there.

___
### Get·Door·Slot·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetDoorSlotPosition ( [DoorSlot](enums/DoorSlot.md) Slot ) {: .copyable aria-label='Functions' }

___
### Get·Dungeon·Rock·Idx () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetDungeonRockIdx ( ) {: .copyable aria-label='Functions' }

___
### Get·Enemy·Damage·Inflicted () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### float GetEnemyDamageInflicted ( ) {: .copyable aria-label='Functions' }
Returns the total amount of HP lost by all enemies in the room within the current frame.

This is used by items that charge on damage inflicted, such as Berserk.

___
### Get·Entities () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityList](CppContainer_EntityList.md) GetEntities ( ) {: .copyable aria-label='Functions' }
Returns an raw pointer to the array that stores all entities in the current room. Therefore, iterating over the return value will always iterate over the entities present in the room during the current logic frame, regardless of then the initial instance of GetEntities was created.

This behavior is different to [`Isaac.GetRoomEntities()`](Isaac.md#getroomentities), which returns an iterable table of the entities in the room at the time the function was called. **For most usecases, its advised to use [`Isaac.GetRoomEntities()`](Isaac.md#getroomentities)**!

???- example "Example Code"
    This code prints the Type, Variant and SubType of each entity in the room.

    ```lua
    local room = Game():GetRoom()
    local roomEntities = room:GetEntities()
    for i = 0, #roomEntities - 1 do
        local entity = roomEntities:Get(i)
        print(entity.Type, entity.Variant, entity.SubType)
    end

    ```
___
### Get·Frame·Count () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetFrameCount ( ) {: .copyable aria-label='Functions' }
Returns the amount of frames the room has been active for. Resets to `0` when the player leaves the room or the run is exited.

___
### Get·Grid·Collision () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridCollisionClass](enums/GridCollisionClass.md) GetGridCollision ( int GridIndex ) {: .copyable aria-label='Functions' }

Returns the [GridCollisionClass](enums/GridCollisionClass.md) of the grid entity at this grid index.

___
### Get·Grid·Collision·At·Pos () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridCollisionClass](enums/GridCollisionClass.md) GetGridCollisionAtPos ( [Vector](Vector.md) Pos ) {: .copyable aria-label='Functions' }
Returns the [GridCollisionClass](enums/GridCollisionClass.md) of the grid entity at this position in the room.

___
### Get·Grid·Entity () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntity](GridEntity.md) GetGridEntity ( int Index ) {: .copyable aria-label='Functions' data-altreturn='nil' }
Returns the [GridEntity](GridEntity.md) at this grid index. Returns `nil` when no [GridEntity](GridEntity.md) is found.

___
### Get·Grid·Entity·From·Pos () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntity](GridEntity.md) GetGridEntityFromPos ( [Vector](Vector.md) Position ) {: .copyable aria-label='Functions' data-altreturn='nil' }
Returns the [GridEntity](GridEntity.md) at this position in the room. Returns `nil` when no [GridEntity](GridEntity.md) is found.

___
### Get·Grid·Height () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGridHeight ( ) {: .copyable aria-label='Functions' }

___
### Get·Grid·Index () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGridIndex ( [Vector](Vector.md) Position ) {: .copyable aria-label='Functions' }
Returns the grid index located at `Position`. Returns `-1` for invalid index.
___
### Get·Grid·Path () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGridPath ( int Index ) {: .copyable aria-label='Functions' }
Grid path is a property of a grid square that represents the "cost" of traveling over this grid cell. Its used for the path finding algorithms which search the cheapest path to a given location. If a grid cell has a value higher than 0, it can prevent grid entities from being spawned on that square. Thus, you can get around it by resetting the grid path to 0, and then spawning the grid entity.

???+ note "notes"
    GridPath values pseudo-enumeration:

    **900**  : Set by some enemies when they pass through a tile. De-prioritises the tile for pathfinders. Degrades over time in steps of 100.

    **950**  : Set by fire places. De-prioritises the tile for pathfinders. Does not degrade.

    **1000** : Set by grid entities. Invalidates the tile for pathfinders. Impedes grounded player movement. Does not degrade.

    **3000** : Set by pits. Invalidates the tile for pathfinders. Impedes grounded player movement. Does not degrade.

    **3999** : Set by grimaces. Invalidates the tile for pathfinders. Impedes grounded player movement. Drops to 900 and then degrades over time in steps of 100 (Grimaces reset value every frame).
___
### Get·Grid·Path·From·Pos () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGridPathFromPos ( [Vector](Vector.md) Position ) {: .copyable aria-label='Functions' }

???+ note "notes"
    GridPath values pseudo-enumeration:

    **900**  : Set by some enemies when they pass through a tile. De-prioritises the tile for pathfinders. Degrades over time in steps of 100.

    **950**  : Set by fire places. De-prioritises the tile for pathfinders. Does not degrade.

    **1000** : Set by grid entities. Invalidates the tile for pathfinders. Impedes grounded player movement. Does not degrade.

    **3000** : Set by pits. Invalidates the tile for pathfinders. Impedes grounded player movement. Does not degrade.

    **3999** : Set by grimaces. Invalidates the tile for pathfinders. Impedes grounded player movement. Drops to 900 and then degrades over time in steps of 100 (Grimaces reset value every frame).
___
### Get·Grid·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetGridPosition ( int GridIndex ) {: .copyable aria-label='Functions' }
Returns the world position of `GridIndex`, even if `GridIndex` is invalid.
___
### Get·Grid·Size () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGridSize ( ) {: .copyable aria-label='Functions' }

___
### Get·Grid·Width () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGridWidth ( ) {: .copyable aria-label='Functions' }

___
### Get·Laser·Target () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetLaserTarget ( [Vector](Vector.md) Pos, [Vector](Vector.md) Dir ) {: .copyable aria-label='Functions' }
Returns the hit position for a laser beam (Technology, Robo-Baby). Usually this is the first poop, fire, rock, TNT, or wall encountered in a straight line.

___
### Get·Lava·Intensity () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### float GetLavaIntensity ( ) {: .copyable aria-label='Functions' }
Usually returns 1, unless the lava is in the process of being cooled down by Flush! or other room flooding effects, in which case this will gradually decrease down to 0.

___
### Get·Lighting·Alpha () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### float GetLightingAlpha ( ) {: .copyable aria-label='Functions' }

___
### Get·LRoom·Area·Desc () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### LRoomAreaDesc GetLRoomAreaDesc ( ) {: .copyable aria-label='Functions' }

???+ bug "Bug"
    Since it returns UserData, this function is unusable and therefore broken.
___
### Get·LRoom·Tile·Desc () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### LRoomTileDesc GetLRoomTileDesc ( ) {: .copyable aria-label='Functions' }

???+ bug "Bug"
    Since it returns UserData, this function is unusable and therefore broken.
___
### Get·Random·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetRandomPosition ( float Margin ) {: .copyable aria-label='Functions' }
Returns a random position in the room with a radius of `Margin` units away from any obstacles. This position is not alligned with the grid.

___
### Get·Random·Tile·Index () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetRandomTileIndex ( int Seed ) {: .copyable aria-label='Functions' }

___
### Get·Red·Heart·Damage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean GetRedHeartDamage ( ) {: .copyable aria-label='Functions' }
Returns `true` if the player took non-self inflicted damage to a red heart container while in the room. Resets to `false` if the player leaves the room or exits the run.

___
### Get·Render·Mode () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [RenderMode](enums/RenderMode.md) GetRenderMode ( ) {: .copyable aria-label='Functions' }
Returns a RenderMode enum which can be used to render entities differently depending on context (i.e. custom water reflections).
___
### Get·Render·Scroll·Offset () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Vector](Vector.md) GetRenderScrollOffset ( ) {: .copyable aria-label='Functions' }
The camera scroll offset and screen shake offsets are both represented here.
___
### Get·Render·Surface·Top·Left () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Vector](Vector.md) GetRenderSurfaceTopLeft ( ) {: .copyable aria-label='Functions' }
The position the floor and wall textures will be rendered at.
___
### Get·Room·Config·Stage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetRoomConfigStage ( ) {: .copyable aria-label='Functions' }
Returns the ID of the stage the room was designed for.

???- note "Stage IDs (corresponds to IDs in stages.xml)"

	|DLC|ID|Stage|Comment|
	|:--|:--|:--|:--|
	|[ ](#){: .abrep .tooltip .badge }|0 |Special Rooms |  |
	|[ ](#){: .abrep .tooltip .badge }|1 |Basement |  |
	|[ ](#){: .abrep .tooltip .badge }|2 |Cellar |  |
	|[ ](#){: .abrep .tooltip .badge }|3 |Burning Basement |  |
	|[ ](#){: .abrep .tooltip .badge }|4 |Caves |  |
	|[ ](#){: .abrep .tooltip .badge }|5 |Catacombs |  |
	|[ ](#){: .abrep .tooltip .badge }|6 |Flooded Caves |  |
	|[ ](#){: .abrep .tooltip .badge }|7 |Depths |  |
	|[ ](#){: .abrep .tooltip .badge }|8 |Necropolis |  |
	|[ ](#){: .abrep .tooltip .badge }|9 |Dank Depths |  |
	|[ ](#){: .abrep .tooltip .badge }|10 |Womb |  |
	|[ ](#){: .abrep .tooltip .badge }|11 |Utero |  |
	|[ ](#){: .abrep .tooltip .badge }|12 |Scarred Womb |  |
	|[ ](#){: .abrep .tooltip .badge }|13 |Blue Womb |  |
	|[ ](#){: .abrep .tooltip .badge }|14 |Sheol |  |
	|[ ](#){: .abrep .tooltip .badge }|15 |Cathedral |  |
	|[ ](#){: .abrep .tooltip .badge }|16 |Dark Room |  |
	|[ ](#){: .abrep .tooltip .badge }|17 |Chest |  |
	|[ ](#){: .abp .tooltip .badge }|18 |Greed Special Rooms |  |
	|[ ](#){: .abp .tooltip .badge }|19 |Greed Basement |  |
	|[ ](#){: .abp .tooltip .badge }|20 |Greed Caves |  |
	|[ ](#){: .abp .tooltip .badge }|21 |Greed Depths |  |
	|[ ](#){: .abp .tooltip .badge }|22 |Greed Womb |  |
	|[ ](#){: .abp .tooltip .badge }|23 |Greed Sheol |  |
	|[ ](#){: .abrep .tooltip .badge }|24 |The Shop |  |
	|[ ](#){: .abrep .tooltip .badge }|25 |Ultra Greed |  |
	|[ ](#){: .abrep .tooltip .badge }|26 |The Void |  |
	|[ ](#){: .rep .tooltip .badge }|27 |Downpour |  |
	|[ ](#){: .rep .tooltip .badge }|28 |Dross |  |
	|[ ](#){: .rep .tooltip .badge }|29 |Mines |  |
	|[ ](#){: .rep .tooltip .badge }|30 |Ashpit |  |
	|[ ](#){: .rep .tooltip .badge }|31 |Mausoleum |  |
	|[ ](#){: .rep .tooltip .badge }|32 |Gehenna |  |
	|[ ](#){: .rep .tooltip .badge }|33 |Corpse |  |
	|[ ](#){: .rep .tooltip .badge }|35 |Home |The Stage ID of 34 does not exist. |
	|[ ](#){: .rep .tooltip .badge }|36 |Backwards |These rooms are used during the Ascent. |

___
### Get·Room·Shape () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [RoomShape](enums/RoomShape.md) GetRoomShape ( ) {: .copyable aria-label='Functions' }

___
### Get·Second·Boss·ID () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetSecondBossID ( ) {: .copyable aria-label='Functions' }
Returns the boss ID of the second boss in a double trouble room. Returns 0 otherwise.

A boss ID is not equal to the entity type of the boss; it is a separate value in the entities2.xml file inside the "bossID" attribute.

Checking for this value is not sufficient to detect a Double Trouble room because a Double Trouble room can contain two of the same boss. If this is the case, then the value of the second boss ID will be equal to 0.

___
### Get·Seeded·Collectible () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [CollectibleType](enums/CollectibleType.md) GetSeededCollectible ( int Seed, bool NoDecrease = false ) {: .copyable aria-label='Functions' }
When `NoDecrease` is true, returned collectibles will not be removed from the pools they came from.

___
### Get·Shop·Level () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetShopLevel ( ) {: .copyable aria-label='Functions' }

___
### Get·Spawn·Seed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetSpawnSeed ( ) {: .copyable aria-label='Functions' }

___
### Get·Tinted·Rock·Idx () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetTintedRockIdx ( ) {: .copyable aria-label='Functions' }

___
### Get·Top·Left·Pos () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetTopLeftPos ( ) {: .copyable aria-label='Functions' }
Returns the top-left position inside of the walls.
___
### Get·Type () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [RoomType](enums/RoomType.md) GetType ( ) {: .copyable aria-label='Functions' }

___
### Get·Water·Current () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [Vector](Vector.md) GetWaterCurrent ( ) {: .copyable aria-label='Functions' }
Returns a vector corresponding to any water current in the room.

___
### Has·Curse·Mist () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean HasCurseMist ( ) {: .copyable aria-label='Functions' }
Returns `true` if the player is inside the abandoned mineshaft.

___
### Has·Lava () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean HasLava ( ) {: .copyable aria-label='Functions' }
Returns `true` if the room contains lava.

???- warning "Warning"
    This function will return `true` if the room contains lava even if there are no pits to make the lava visible.

___
### Has·Slow·Down () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasSlowDown ( ) {: .copyable aria-label='Functions' }

Returns whether the room is currently under the effect of the I'm Drowsy pill or not. The function will also return `true` if a call to [SetSlowDown](#setslowdown) was performed earlier and the specified `Duration` has not yet expired.

Note that this function will return `false` if the effect of the I'm Drowsy pill was triggered through the Broken Watch. To check for that scenario, use the [GetBrokenWatchState](#getbrokenwatchstate) function.

This function will also return `false` if the player is under the effect of the Stop Watch. To check for that scenario, check whether or not the player has the Stop Watch in their posession.

___
### Has·Trigger·Pressure·Plates () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasTriggerPressurePlates ( ) {: .copyable aria-label='Functions' }
Returns `true` if there are one or more pressure plates in the room. 

???- warning "Warning"
    In order to see if the pressure plates are pressed or not, you will have to iterate over the grid entities in the room.

___
### Has·Water () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasWater ( ) {: .copyable aria-label='Functions' }

___
### Has·Water·Pits () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasWaterPits ( ) {: .copyable aria-label='Functions' }
Returns `true` if the room contains pits that have liquid in them (e.g. lava in Mines, tar in Dank Depths, etc.).

___
### Invalidate·Pickup·Vision () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void InvalidatePickupVision ( ) {: .copyable aria-label='Functions' }
Causes chest previews from Guppy's Eye to be updated on the next frame.

___
### Is·Ambush·Active () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsAmbushActive ( ) {: .copyable aria-label='Functions' }

___
### Is·Ambush·Done () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsAmbushDone ( ) {: .copyable aria-label='Functions' }

___
### Is·Clear () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsClear ( ) {: .copyable aria-label='Functions' }

___
### Is·Current·Room·Last·Boss () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsCurrentRoomLastBoss ( ) {: .copyable aria-label='Functions' }
Returns `true` if the current room is the second boss room when on an XL floor. Returns `false` otherwise.

___
### Is·Door·Slot·Allowed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsDoorSlotAllowed ( [DoorSlot](enums/DoorSlot.md) Slot ) {: .copyable aria-label='Functions' }
Returns whether or not the supplied door slot is valid for the current room. This is contingent on the room definition in the STB/XML file. (Basement Renovator displays valid doors as brown and invalid doors as white.) The value returned by this method is independent of whether or not a door currently exists at the given slot.

For example, in the starting room of a floor, this method would return true for `DoorSlot.LEFT0`, `DoorSlot.UP0`, `Doorslot.RIGHT0`, and `DoorSlot.DOWN0`, and false for all other values (regardless of what doors happen to exist or not).

For example, there is a relatively common 1x1 room in the Caves with 4 Boom Flies and a narrow bridge from the top door to the bottom door. In this room, the doors on the left side and the right side are disabled. In this room, this method would return true for `DoorSlot.UP0` and `DoorSlot.DOWN0`, and false for all other values (regardless of what doors happen to exist or not).

___
### Is·First·Enemy·Dead () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsFirstEnemyDead ( ) {: .copyable aria-label='Functions' }

___
### Is·First·Visit () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsFirstVisit ( ) {: .copyable aria-label='Functions' }

___
### Is·Initialized () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsInitialized ( ) {: .copyable aria-label='Functions' }

___
### Is·LShaped·Room () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsLShapedRoom ( ) {: .copyable aria-label='Functions' }

___
### Is·Mirror·World () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean IsMirrorWorld ( ) {: .copyable aria-label='Functions' }
Returns true if the player is inside the mirror dimension.

___
### Is·Position·In·Room () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsPositionInRoom ( [Vector](Vector.md) Pos, float Margin ) {: .copyable aria-label='Functions' }
Returns `true` if the given position is inside the room. `Margin` is used as a radius around the position that also needs to be inside the room boundaries. The Room boundary is the position between the walkable area and the walls. Therefore, positions inside walls and the black void do count as "outside" the room.

___
### Is·Sacrifice·Done () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsSacrificeDone ( ) {: .copyable aria-label='Functions' }

___
### Keep·Doors·Closed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void KeepDoorsClosed ( ) {: .copyable aria-label='Functions' }

___
### Mama·Mega·Explosion () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void MamaMegaExplosion ( [Vector](Vector.md) Position ) {: .copyable aria-label='Functions' }

___
### Play·Music () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void PlayMusic ( ) {: .copyable aria-label='Functions' }
Plays the music track used by this room. Useful for resetting music after playing a different track.

___
### Remove·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveDoor ( [DoorSlot](enums/DoorSlot.md) Slot ) {: .copyable aria-label='Functions' }

___
### Remove·Grid·Entity () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveGridEntity ( int GridIndex, int PathTrail, boolean KeepDecoration ) {: .copyable aria-label='Functions' }

* `GridIndex` is the location of the grid as shown with the `debug 11` console command.
* `PathTrail` is the "cost" to leave behind on the square. In most cases, you would want to pass 0 for this argument.

Note that after removing a grid entity, you cannot spawn another grid entity on the same tile until a frame has passed. If doing this is absolutely required, you can get around the restriction in two different ways:

1. By calling the [`Room:Update()`](#update) method between removing the old grid entity and spawning the new one, you can simulate a frame passing. However, this can have other unwanted side effects, so it is only recommended to do this as a last resort. Specifically, `Room:Update` will update every entity in the room, including the player, causing them to continue to move in the direction that they are already moving. Furthermore, if `Room:Update` is called in the PostNewRoom callback, it will still cause the player to drift, even though they are standing still. (This is because their velocity has not been zeroed out at time that the callback fires.)
2. By calling [`GridEntity:Update()`](GridEntity.md#update) on the removed grid entity after it is removed, you will be able to immediately spawn another grid entity on the same tile. However, the new grid entity will be automatically removed at the end of the frame, so you must spawn it again on the next frame. This method can also lead to unwanted side effects, such as an explosion not destroying a rock properly (because it would be erronenously respawned on the subsequent frame).

___
### Render () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Render ( ) {: .copyable aria-label='Functions' }

___
### Respawn·Enemies () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RespawnEnemies ( ) {: .copyable aria-label='Functions' }
Used by the D7 collectible.
___
### Screen·Wrap·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) ScreenWrapPosition ( [Vector](Vector.md) Pos, float Margin ) {: .copyable aria-label='Functions' }
Returns `Pos`, screen-wrapped (if it is just outside the room on the right it will be moved to the left side of the room, etc)

???- note "Notes"
     This only wraps the point once, so if it has crossed multiple wrapping planes it will only wrap on the one it's closest to. For wrapping a position that has crossed two planes (outside a room in the top left for instance) call this function iteratively.
___
### Set·Ambush·Done () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetAmbushDone ( boolean Value ) {: .copyable aria-label='Functions' }

___
### Set·Broken·Watch·State () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetBrokenWatchState ( int State ) {: .copyable aria-label='Functions' }
Speed up, slow down or remove either of these states from the current room. See the notes section in [GetBrokenWatchState](#getbrokenwatchstate) for the different values of `State`.

___
### Set·Card·Against·Humanity () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetCardAgainstHumanity ( ) {: .copyable aria-label='Functions' }

___
### Set·Clear () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetClear ( boolean Clear ) {: .copyable aria-label='Functions' }
Needed for Angel rooms so that the clear flag can be set to false when an Angel spawns.

___
### Set·First·Enemy·Dead () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetFirstEnemyDead ( boolean Value ) {: .copyable aria-label='Functions' }

___
### Set·Floor·Color () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetFloorColor ( [Color](Color.md) FloorColor ) {: .copyable aria-label='Functions' }
Allows you to apply a color modifier to the floor texture of the current room.

???- example "Example Code"
    This code changes the floor color to red.
    ```lua
    Game():GetRoom():SetFloorColor(Color(1,1,1,1,255,0,0))
    ```

___
### Set·Grid·Path () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean SetGridPath ( int Index, int Value ) {: .copyable aria-label='Functions' }
Grid path is a property of a grid square that represents the "cost" of traveling over this grid cell. Its used for the path finding algorithms which search the cheapest path to a given location. If a grid cell has a value higher than `0`, it can prevent grid entities from being spawned on that square. Thus, you can get around it by resetting the grid path to 0, and then spawning the grid entity.

???+ note "notes"
    GridPath values pseudo-enumeration:

    **900**  : Set by some enemies when they pass through a tile. De-prioritises the tile for pathfinders. Degrades over time in steps of 100.

    **950**  : Set by fire places. De-prioritises the tile for pathfinders. Does not degrade.

    **1000** : Set by grid entities. Invalidates the tile for pathfinders. Impedes grounded player movement. Does not degrade.

    **3000** : Set by pits. Invalidates the tile for pathfinders. Impedes grounded player movement. Does not degrade.

    **3999** : Set by grimaces. Invalidates the tile for pathfinders. Impedes grounded player movement. Drops to 900 and then degrades over time in steps of 100 (Grimaces reset value every frame).
___
### Set·Red·Heart·Damage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetRedHeartDamage ( ) {: .copyable aria-label='Functions' }

___
### Set·Sacrifice·Done () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetSacrificeDone ( boolean Done ) {: .copyable aria-label='Functions' }

___
### Set·Slow·Down () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetSlowDown ( int Duration ) {: .copyable aria-label='Functions' }
Apply a slow down effect for `Duration` logic frames (there are 30 logic frames per second).

Using a negative `Duration` will not do anything at all, instead of making the slow down permanent as one might expect.

???+ bug Bugs
    This function will only apply a slow down effect on the player and not on all entities of the room. If you want to apply a slow down effect on all entities in the room, consider using [SetBrokenWatchState](#setbrokenwatchstate) with a `State` of `1` and add a timer to your script in order to count the elapsed frames.

___
### Set·Wall·Color () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetWallColor ( [Color](Color.md) WallColor ) {: .copyable aria-label='Functions' }
Allows you to apply a color modifier to the wall texture of the current room.

???- example "Example Code"
    This code changes the wall color to red.
    ```lua
    Game():GetRoom():SetWallColor(Color(1,1,1,1,255,0,0))
    ```

___
### Shop·Reshuffle () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ShopReshuffle ( boolean KeepCollectibleIdx, boolean ReselectSaleItem ) {: .copyable aria-label='Functions' }

___
### Shop·Restock·Full () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ShopRestockFull ( ) {: .copyable aria-label='Functions' }
Effectively acts like a use of a Reroll Machine, restocking shops and rerolling items.

___
### Shop·Restock·Partial () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ShopRestockPartial ( ) {: .copyable aria-label='Functions' }

___
### Spawn·Clear·Award () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SpawnClearAward ( ) {: .copyable aria-label='Functions' }

___
### Spawn·Grid·Entity () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean SpawnGridEntity ( int GridIndex, [GridEntityType](enums/GridEntityType.md) Type, int Variant, int Seed, int VarData ) {: .copyable aria-label='Functions' }

___
### Stop·Rain () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void StopRain ( ) {: .copyable aria-label='Functions' }
Stops any rain effects in the room.

___
### Trigger·Clear () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void TriggerClear ( boolean Silent = false ) {: .copyable aria-label='Functions' }
Triggers all room clear effects (does not actually clear the room).
Door opening sounds can be muted by setting Silent to `true`.

___
### Try·Make·Bridge () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TryMakeBridge ( [GridEntity](GridEntity.md) pit, [GridEntity](GridEntity.md) rock ) {: .copyable aria-label='Functions' }
Tries to create a bridge over a given pit. Returns `true` if the creation was successful. Returns `false` otherwise.

___
### Try·Place·Ladder () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void TryPlaceLadder ( [Vector](Vector.md) PlayerPos, [Vector](Vector.md) PlayerVelocity, [Entity](Entity.md) Ladder ) {: .copyable aria-label='Functions' }
This function was removed with Repentance.

___
### Try·Spawn·Blue·Womb·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TrySpawnBlueWombDoor ( boolean FirstTime = true, boolean IgnoreTime = false, boolean Force = false ) {: .copyable aria-label='Functions' }
Attempts to spawn a door to the Blue Womb.
This usually does nothing outside of Mom's Heart's boss room unless `Force` is set to `true`.

___
### Try·Spawn·Boss·Rush·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TrySpawnBossRushDoor ( boolean IgnoreTime = false, boolean Force = false ) {: .copyable aria-label='Functions' }
Attempts to spawn a door to the Boss Rush.
This usually does nothing outside of Mom's boss room unless `Force` is set to `true`.

___
### Try·Spawn·Devil·Room·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TrySpawnDevilRoomDoor ( boolean Animate = false, boolean Force = false ) {: .copyable aria-label='Functions' }
Attempts to spawn a door to the Devil or Angel room.
This usually does nothing inside of non-boss rooms unless `Force` is set to `true`.

___
### Try·Spawn·Mega·Satan·Room·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TrySpawnMegaSatanRoomDoor ( boolean Force = false ) {: .copyable aria-label='Functions' }
Attempts to spawn a door to Mega Satan.
This usually does nothing outside of the starting room of the Chest/Dark Room unless `Force` is set to `true`

___
### Try·Spawn·Secret·Exit () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean TrySpawnSecretExit ( boolean Animate = false, boolean Force = false ) {: .copyable aria-label='Functions' }
Attempts to spawn a door to the Downpour, Mines or Mausoleum depending on the current floor.
This usually does nothing outside of boss rooms unless `Force` is set to `true`.

___
### Try·Spawn·Secret·Shop () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean TrySpawnSecretShop ( boolean Force = false ) {: .copyable aria-label='Functions' }
Attempts to spawn a trapdoor to the Member Card shop within the current room.
This usually does nothing outside of shops or if the player doesn't hold a Member Card unless `Force` is set to `true`.

___
### Try·Spawn·Special·Quest·Door () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean TrySpawnSpecialQuestDoor ( ) {: .copyable aria-label='Functions' }
Attempts to spawn either a door to the Mirror Dimension in Downpour, or the abandoned mineshaft in the Mines.

___
### Try·Spawn·The·Void·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TrySpawnTheVoidDoor ( boolean Force = false ) {: .copyable aria-label='Functions' }
Attempts to spawn a door to a room containing a Void portal
This usually does nothing outside of Hush's boss room unless `Force` is set to `true`.

___
### Turn·Gold () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void TurnGold ( ) {: .copyable aria-label='Functions' }
Applies a gold tint to all grid entities in the room. This is the same effect that the game does after defeating Ultra Greedier.

___
### Update () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Update ( ) {: .copyable aria-label='Functions' }
Updates the current room.

**It is recommended to call this function after calling [Room:RemoveGridEntity()](#removegridentity) in order to correctly apply the changes.**

???- note "Notes"
    Calling this function is needed to apply some changes like spawning a trapdoor where a pit already exists.

    To do this, remove the pit, call the Update() function and then spawn the trapdoor.

???+ bug "Bug"
    As mentioned in the Repentance API Issue Tracker, [calling room:Update() as a part of card functionality forces an instant use of pocket active items](https://github.com/Meowlala/RepentanceAPIIssueTracker/issues/211).

___
### World·To·Screen·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) WorldToScreenPosition ( [Vector](Vector.md) WorldPos ) {: .copyable aria-label='Functions' }
Converts an entity position to one that can be used to render to the screen.
___
