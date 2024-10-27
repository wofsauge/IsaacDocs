# Entity Overview

## Introduction

Almost everything in the Binding of Isaac is considered to be an *entity*.

Mods for the game typically add new custom entities, arbitrarily spawn entities at special times, or modify existing entities.

<br>

## Entities and Grid Entities

There are two different forms of entities:

### 1) Entities

Most things in the game are "normal" entities. This includes players, enemies, tears, projectiles, and more.

Normal entities are represented by the `Entity` API class.

Vanilla entities are defined in the "resources/entities2.xml" file. Mods can create custom entities by creating the "content/entities2.xml" file and adding entries to it.

Mods can spawn entities with the `Isaac.Spawn` or `Game.Spawn` methods. The former should be used when the seed of the entity does not matter. Otherwise, use the latter and specify the seed.

???+ bug "Bug"
    Because the random seed to spawn an entity with `Isaac.Spawn` is generated using the `Random()` function, there is a chance that the entity's InitSeed is set to 0, which causes a crash if the entity needs to use RNG. If you need to spawn an entity with a random seed, you should always use `Game():Spawn()` with a helper function that calls `Random()` and arbitrarily sets the seed to 1 when the seed is 0.

Hint: Nearly everything that you spawn should use have a specified seed, so that the rerolls and other random effects are consistent when replaying through the same seed. (This is how the vanilla game works.)

### 2) Grid Entities

Grid entities are special entities that are aligned with a grid tile. This includes rocks, pots, and so on.

Grid entities are represented by the `GridEntity` API class.

Vanilla grid entities are not defined in an XML file. Mods cannot create custom grid entities.

Mods can spawn grid entities with the `Isaac.GridSpawn` or `Room.SpawnGridEntity` methods. The former should be used when the seed of the grid entity does not matter. Otherwise, use the latter and specify the seed.

<br>

## Type, Variant, and SubType

Three integers make up the identity of an entity: `EntityType`, `Variant`, and `SubType`. These three values are often represented as a string with a period as a separator.

- `EntityType` corresponds to the major entity type. For example, a Frowning Gaper (10.0.0) is different from a Pooter (14.0.0).
- `Variant` corresponds to different kinds of the same `EntityType`. For example, a Frowning Gaper (10.0.0) is different from a Flaming Gaper (10.2.0).
- `SubType` corresponds to different kinds of the same `EntityType` and `Variant` combination. For example, a Sad Onion (5.100.1) is different from an Inner Eye (5.100.2).

The `Entity` API class contains all three of these values as properties. The `GridEntity` API class offers a `GetType` and `GetVariant` method. (Grid entities do not use sub-types.)

You can make a helper function for getting the ID of an entity:

```lua
-- Helper function to get a string containing an entity's type, variant, and sub-type.
local function getEntityID(entity)
  return tostring(entity.Type) .. "." .. tostring(entity.Variant) .. "." .. tostring(entity.SubType)
end
```

```lua
-- Helper function to get a string containing a grid entity's type and variant.
local function getGridEntityID(gridEntity)
  local gridEntityType = gridEntity:GetType()
  local gridEntityVariant = gridEntity:GetVariant()
  return tostring(gridEntityType) .. "." .. tostring(gridEntityVariant)
end
```

If you are using [IsaacScript](https://isaacscript.github.io/), these two functions are already included in the standard library, so don't bother making them yourself.

<br>
