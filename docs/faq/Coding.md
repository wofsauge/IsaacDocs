---
tags:
  - FAQ
---

# Modding FAQ: Coding

## How do I understand the docs? {: .subHeader}

Below is a breakdown of a documented function.

![img](../images/docs_reading_guide.png)

```lua
local player = Isaac.GetPlayer(0)
local hasTrinket = player:HasTrinket(TrinketType.TRINKET_SWALLOWED_PENNY) -- Notice how that second argument was optional, hence the equals sign.
print(hasTrinket) -- Either "true" if the player had it, or "false" if they didn't.
```

## How do I do X? How do I code X? {: .subHeader}

The fastest way to figure out how to do something is to download a few mods that provide similar functionality to what you want to do, and then study the code. Attempt to understand why things were made the way they were before attempting to replicate them yourself.

## Where can I see the code for [some vanilla item] or [some vanilla mechanic]? {: .subHeader}

You can't. The game is programmed in the C++ programming language and the source code is not publicly available.

This means that if you want to make a custom item that works in a similar way to a vanilla item, you will have to completely re-implement it yourself from scratch. (You can often use the wiki as an implementation reference.)

This also means that if you want to change the way a vanilla item works, you will often have to re-implement the item from scratch.

## What is a callback? {: .subHeader}

Mods affect the game by putting code inside of *callbacks*. Each callback fires when a particular event happens in the game. There are [74 different callbacks](../enums/ModCallbacks.md) to choose from, so you have to choose the right one depending on what you want to do.

For example, the most basic callback is `MC_POST_GAME_STARTED`, which fires once at the beginning of a new or continued run. You would connect a function to this to do something custom at the beginning of every run.

Another common callback that mods use is `MC_POST_UPDATE`, which fires on every single update frame (i.e. 30 times per second). You would connect a function to this callback for custom items that have constant effects.

Go through the [ModCallbacks page](../enums/ModCallbacks.md) and read what all of the callbacks do so that you can get familiar with them.

## What is the difference between `require` and `include`? {: .subHeader}

See the [tutorial on using additional Lua files](../tutorials/Using-Additional-Lua-Files.md).

## How do I know when a player has picked up a collectible item? {: .subHeader}

If you're using the script extender [REPENTOGON](https://repentogon.com/), then you can use the [MC_POST_ADD_COLLECTIBLE](https://repentogon.com/enums/ModCallbacks.html#mc_post_add_collectible) callback.

Otherwise, there is no vanilla callback for this. As a workaround, you can check `EntityPlayer.IsItemQueueEmpty()` on every PostUpdate frame, and then check `EntityPlayer.QueuedItem` when it is not empty. Obviously, this will not work for items that never get queued.

For :material-language-typescript:[IsaacScript](https://isaacscript.github.io/) users, you can use the provided [:material-language-typescript:MC_POST_ITEM_PICKUP](https://isaacscript.github.io/docs/function-signatures-custom#mc_post_item_pickup) callback.

If you want to implement this callback yourself, the source code / algorithm is provided [here](https://github.com/IsaacScript/isaacscript/blob/main/packages/isaacscript-common/src/classes/features/callbackLogic/ItemPickupDetection.ts).

## What is the ID of [the sound effect that I care about]? {: .subHeader}

If you have [REPENTOGON](https://repentogon.com/) installed, you can [this mod](https://steamcommunity.com/sharedfiles/filedetails/?id=3190950157) that gives you detailed information about a playing sound, including a button to copy its enumerator to your clipboard. Otherwise, use [this mod](misc/sounds-display.lua), which will tell you what the ID of any currently playing sound effect is.

## How do I make my custom character start with a smelted / gulped trinket? {: .subHeader}

If you're using the script extender [REPENTOGON](https://repentogon.com), you can use [this method of the player](https://repentogon.com/EntityPlayer.html?h=add#addsmeltedtrinket). Otherwise, you must accomplish this manually via code.

## How do I modify the Devil Room / Angel Room chances? {: .subHeader}

If using the script extender [REPENTOGON](https://repentogon.com), you can check out the [multiple Devil/Angel room chance callbacks](https://repentogon.com/examples/DealChance.html).

Otherwise, there is no built-in way to do this, so you will have to get inventive. For the most control, you can delete all vanilla Devil/Angel doors and completely re-implement the system from scratch. Otherwise, you can temporarily give items to the player such as Goat Head or Rosary Bead, or use things like [Game.SetLastDevilRoomStage()](../Game.md#setlastdevilroomstage), [Level.SetRedHeartDamage()](../Level.md#setredheartdamage), and [Level.AddAngelRoomChance()](../Level.md#addangelroomchance). You also might want to use [LevelStateFlags](../enums/LevelStateFlag.md).

## How do I create a new floor/level/stage? {: .subHeader}

Unfortunately, Isaac does not natively support modded custom floors. BudJMT and DeadInfinity have built a custom system called [StageAPI](https://github.com/Meowlala/BOIStageAPI15) that allows mods to add custom floors in a hacky way. However, StageAPI is not easy to use, so unless you are already an experienced Isaac modder & coder, you should stick to more simple projects.

## How do I make the costume on my custom character persistent? {: .subHeader}

Use [Sanio's "Character Costume Protector" library](https://steamcommunity.com/sharedfiles/filedetails/?id=2541362255) for this, or study the source code and re-implement it yourself.

For a reference implementation, see [Andrew the Bunny Knight](https://steamcommunity.com/sharedfiles/filedetails/?id=2531089854).

## What does the "[INFO] - [warn] item pool ran out of repicks" message mean in the "log.txt" file?  {: .subHeader}

This message means that the game attempted to get a new random collectible type from an item pool, but the item pool was all out of items. When an item pool is depleted like this, the game reverts to getting a random collectible from the Treasure Room pool instead, since that is the default pool. In the case that the Treasure Room pool itself was depleted, then the game will return `CollectibleType.COLLECTIBLE_BREAKFAST` instead.

If your mod is causing this message, it is likely a sign that you have a problem in your logic somewhere. Perhaps you are spawning a ton of random collectibles by accident, which would subsequently deplete the room's item pool. You might also want to examine the logic in any `MC_PRE_GET_COLLECTIBLE` or `MC_POST_GET_COLLECTIBLE` callbacks.