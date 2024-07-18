---
tags:
  - FAQ
---

# Modding FAQ: Lua

## What does the colon operator in Lua do? {: .subHeader}

In Lua, you can invoke module functions (i.e. functions that are attached to a table) in two different ways:

```lua
foo.bar()
foo:bar()
```

A period invokes the function in the "normal" way. A colon invokes the function in a special way that is syntactic sugar for passing the module as the first argument. For example, the following two function calls are equivalent:

```lua
foo.bar(foo, arg1, arg2)
foo:bar(arg1, arg2)
```

The point of using the colon is that it is a convenience to save you from typing out the longer function call, at the cost of some obfuscation for those not familiar with Lua. This feature is included in the language since doing this is such a common task. (Lua modules are often used to emulate Java-style classes.)

It is idiomatic in Lua to invoke any function that is part of a module with a colon, and you should follow this convention when writing your own code. Additionally, most API class methods should be invoked with a colon. However, there are exceptions; methods marked as "static", or from object-independant classes (e.g. `Isaac`, `Input`, `Options`), are not invoked with a colon.

```lua
-- This is the normal case, illustrated with the `EntityPlayer` class.
local player = Isaac.GetPlayer()
player.AddCollectible(CollectibleType.COLLECTIBLE_SAD_ONION) -- Fails because the method expects the class as the first argument.
player:AddCollectible(CollectibleType.COLLECTIBLE_SAD_ONION) -- Works.

-- This is the special case, illustrated with the `Isaac` class.
Isaac.DebugString("foo") -- Works.
Isaac:DebugString("foo") -- Fails because the method does not expect the class as the first argument.

-- Another special case is with static methods.
-- Imagine that we have a laser already, provided by the `MC_POST_LASER_UPDATE` callback.
-- Like most classes, we are supposed to use a colon.
laser.SetMaxDistance(50) -- Fails because the method expects the class as the first argument.
laser:SetMaxDistance(50) -- Works.
-- But static methods are different.
laser.ShootAngle(...) -- Works (because `ShootAngle` is a static method).
laser:ShootAngle(...) -- Fails because the method does not expect the class as the first argument.
-- Obviously, you can also invoke static methods without an instantiated class. (That's the point of them being static.)
EntityLaser.ShootAngle(...) -- Works.
EntityLaser:ShootAngle(...) -- Fails because the method does not expect the class as the first argument.
```

## What is the difference between `pairs` and `ipairs`? {: .subHeader}

- `pairs` is for iterating over Lua tables that represent a [map](https://en.wikipedia.org/wiki/Associative_array). In other words, something with key/value associations.
- `ipairs` is for iterating over Lua tables that represent an [array](https://en.wikipedia.org/wiki/Array_data_structure). In other words, something that contains a list of elements.

Code speaks louder than words:

```lua
local map = {
  foo = "bar",
  baz = 123,
}

for key, value in pairs(map) do
  print(key) -- Prints foo, baz
  print(value) -- Prints bar, 123
end
```

```lua
local array = {
  123,
  456,
  789,
}

for i, element in ipairs(array) do
  print(i) -- Prints 1, 2, 3
  print(element) -- Prints 123, 456, 789
end
```

Since Lua is [untyped](https://www.tutorialspoint.com/What-are-the-differences-between-untyped-and-dynamically-typed-programming-languages) and uses tables to represent multiple different data structures, `pairs` and `ipairs` serve as a flag to tell the reader what the underlying data structure really is.

## How do I prevent the player from shooting arbitrarily? {: .subHeader}

You can set `canShoot` to `false` when defining a player in xml. If you want to be able to arbitrarily toggle their ability to shoot, you can either use REPENTOGON's [`EntityPlayer.SetCanShoot`](https://repentogon.com/EntityPlayer.html#setcanshoot) function, or you can do the following:

=== ":material-language-lua: Lua"
    ```lua
    --- Written by Zamiel, technique created by im_tem
    -- @param player EntityPlayer
    -- @param enabled boolean
    -- @param modifyCostume boolean
    function setBlindfold(player, enabled, modifyCostume)
      local game = Game()
      local character = player:GetPlayerType()
      local challenge = Isaac.GetChallenge()

      if enabled then
        game.Challenge = Challenge.CHALLENGE_SOLAR_SYSTEM -- This challenge has a blindfold
        player:ChangePlayerType(character)
        game.Challenge = challenge

        -- The costume is applied automatically
        if not modifyCostume then
          player:TryRemoveNullCostume(NullItemID.ID_BLINDFOLD)
        end
      else
        game.Challenge = Challenge.CHALLENGE_NULL
        player:ChangePlayerType(character)
        game.Challenge = challenge

        if modifyCostume then
          player:TryRemoveNullCostume(NullItemID.ID_BLINDFOLD)
        end
      end
    end
    ```

=== ":material-language-typescript: TypeScript"
    If you are using [:material-language-typescript:IsaacScript](https://isaacscript.github.io/), then all you have to do is call the `setBlindfold` function, like so:

    ```ts
    const player = Isaac.GetPlayer();
    setBlindfold(player, true);
    ```

## How do I apply a costume to my character? {: .subHeader}

This is called a "null costume" and it is accomplished via the [`EntityPlayer.AddNullCostume()`](../EntityPlayer.md#addnullcostume) method. For more information, see [Lytebringr's 8th video](https://www.youtube.com/watch?v=R1CdCyGL1DQ&list=PLMZJyHSWa_My5DDoTQcKCgs475xIpQHSF&index=9).

The follow is an example of a mod adding a null costume:

```lua
local mod = RegisterMod("My Mod", 1)
local MY_NULL_COSTUME_ID = Isaac.GetCostumeIdByPath("gfx/characters/bar.anm2")

-- For EntityType.ENTITY_PLAYER (1)
local PlayerVariant = {
  PLAYER = 0,
  COOP_BABY = 1,
}

function mod:postPlayerInit(player)
  if player.Variant == PlayerVariant.PLAYER then
    player:AddNullCostume(MY_NULL_COSTUME_ID)
  end
end

mod:AddCallback(ModCallbacks.MC_POST_PLAYER_INIT, mod.postPlayerInit)
```

## How do I get a familiar to follow the player like Brother Bobby does? {: .subHeader}

=== ":material-language-lua: Lua"
    ```lua
    function postFamiliarInitMyFamiliar(familiar)
      familiar:AddToFollowers()
    end

    function postFamiliarUpdateMyFamiliar(familiar)
      familiar:FollowParent()
    end
    ```

=== ":material-language-typescript: TypeScript"
    ```ts
    function postFamiliarInitMyFamiliar(familiar: EntityFamiliar) {
      familiar.AddToFollowers();
    }

    function postFamiliarUpdateMyFamiliar(familiar: EntityFamiliar) {
      familiar.FollowParent();
    }
    ```

## How do I iterate over a list object from the API? {: .subHeader}

Sometimes you will be provided with objects in the API which store a list of objects, but are not tables, like the [GetRooms](../Level.md#getrooms) method from [Level](../Level.md).

Here's an example of how to iterate over the list object in Lua:

=== ":material-language-lua: Lua"

    ```lua
    local game = Game()
    local level = game:GetLevel()
    local rooms = level:GetRooms()
    for i = 0, rooms.Size - 1 do
      local room = rooms:Get(i)
      -- Do something with the room
    end
    ```

=== ":material-language-typescript: TypeScript"

    In IsaacScript, you could implement the code on the Lua tab in the exact same way. However, for this specific case, you can simply use a helper function to iterate over the rooms directly:

    ```ts
    for (const roomDescriptor of getRooms()) {
      // Do something with the room
    }
    ```

## How do you use StageAPI to add new bosses? {: .subHeader}

This is an example code snippet from Xalum:

```lua
mod.StageAPIBosses = {
    StageAPI.AddBossData("The Baron", {
        Name = "The Baron",
        Portrait = "gfx/bosses/baron/portrait_baron.png",
        Bossname = "gfx/bosses/baron/name_baron.png",
        Rooms = StageAPI.RoomsList("BaronBossRooms", include("resources.luarooms.boss_baron"))
    }),

    StageAPI.AddBossData("High Amon", {
        Name = "High Amon",
        Portrait = "gfx/bosses/amon/portrait_amon.png",
        Bossname = "gfx/bosses/amon/name_amon.png",
        Rooms = StageAPI.RoomsList("AmonBossRooms", include("resources.luarooms.boss_amon"))
    }),
}

StageAPI.AddBossToBaseFloorPool({BossID = "The Baron", Weight = 1.5}, LevelStage.STAGE3_1, StageType.STAGETYPE_AFTERBIRTH)
StageAPI.AddBossToBaseFloorPool({BossID = "High Amon", AlwaysReplaceSubtype = 83, OnlyReplaceSubtype = 83}, LevelStage.STAGE2_1, StageType.STAGETYPE_REPENTANCE_B)
```