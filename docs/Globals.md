---
tags:
  - Globals
search:
  boost: 2
---
# Globals

Global variables are variables that every mod has access to. In Isaac modding, the global environment is a mix of things provided by the Lua standard library and things provided by the Isaac API.

### Getting the Global Variables

You can print out the current global variables with the following Lua code:

```lua
local function getSortedTableKeys(t)
  local tableKeys = {}
  for key, _ in pairs(t) do
    table.insert(tableKeys, key)
  end
  table.sort(tableKeys)

  return tableKeys
end

local function printSortedTableKeys(t)
  local sortedTableKeys = getSortedTableKeys(t)
  for _, key in ipairs(sortedTableKeys) do
    Isaac.DebugString(tostring(key))
  end
end

local function printAllGlobals()
  Isaac.DebugString("All globals:")
  Isaac.DebugString("------------")
  printSortedTableKeys(_G)
end

printAllGlobals()
```

Another option is to use Taz's [Global Variable Menu](https://steamcommunity.com/sharedfiles/filedetails/?id=1800338130) mod.

### Vanilla

This is a list of every global variable that is available in the Lua environment, by default:

- ActionTriggers
- ActiveSlot
- BabySubType
- BackdropType
- BatterySubType
- BedSubType
- BitSet128
- BombSubType
- BombVariant
- ButtonAction
- CacheFlag
- Card
- Challenge
- ChampionColor
- ChestSubType
- CoinSubType
- CollectibleType
- Color
- CppContainer
- DamageFlag
- Difficulty
- Direction
- DoorSlot
- DoorState
- DoorVariant
- EffectVariant
- Entity
- EntityBomb
- EntityCollisionClass
- EntityEffect
- EntityFamiliar
- EntityFlag
- EntityGridCollisionClass
- EntityKnife
- EntityLaser
- EntityNPC
- EntityPartition
- EntityPickup
- EntityPlayer
- EntityProjectile
- EntityPtr
- EntityRef
- EntityTear
- EntityType
- FamiliarVariant
- Font
- Game
- GameStateFlag
- GetPtrHash
- GridCollisionClass
- GridEntity
- GridEntityDesc
- GridEntityDoor
- GridEntityPit
- GridEntityPoop
- GridEntityPressurePlate
- GridEntityRock
- GridEntitySpikes
- GridEntityTNT
- GridEntityType
- GridRooms
- HUD
- HeartSubType
- Input
- InputHook
- Isaac
- ItemConfig
- ItemPool
- ItemPoolType
- ItemType
- KColor
- KeySubType
- Keyboard
- LaserOffset
- LaserSubType
- Level
- LevelCurse
- LevelStage
- LevelStateFlag
- LocustSubtypes
- ModCallbacks
- Mouse
- Music
- MusicManager
- NpcState
- NullItemID
- Options
- PathFinder
- PickupPrice
- PickupVariant
- PillColor
- PillEffect
- PlayerForm
- PlayerSpriteLayer
- PlayerType
- PlayerTypes
- PoopPickupSubType
- PoopSpellType
- ProjectileFlags
- ProjectileParams
- ProjectileVariant
- QueueItemData
- REPENTANCE
- RNG
- Random
- RandomVector
- RegisterMod
- RenderMode
- Room
- RoomConfig
- RoomDescriptor
- RoomShape
- RoomTransitionAnim
- RoomType
- SFXManager
- SackSubType
- SeedEffect
- Seeds
- SkinColor
- SortingLayer
- SoundEffect
- Sprite
- StageType
- StartDebug
- TearFlags
- TearParams
- TearVariant
- TemporaryEffect
- TemporaryEffects
- TrinketType
- UseFlag
- Vector
- WeaponType
- _G
- _VERSION
- assert
- collectgarbage
- coroutine
- dofile
- error
- getmetatable
- include
- ipairs
- load
- math
- next
- pairs
- pcall
- print
- rawequal
- rawget
- rawlen
- rawset
- require
- select
- setmetatable
- string
- table
- tonumber
- tostring
- type
- utf8
- xpcall

### With the "--luadebug" flag

Having the "--luadebug" flag turned on changes the default global variables slightly.

The following global variables are added:

- debug
- io
- loadfile
- os
- package

### Mods

Mods can also add extra global variables to the environment. You can find out which variables are provided by mods by cross-referencing the current global variables to the previous list.
