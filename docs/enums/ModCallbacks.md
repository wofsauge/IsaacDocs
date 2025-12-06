---
tags:
  - Enum

search:
  boost: 3
---
# Enum "ModCallbacks"
Execution order diagram: [![callback diagram](../images/infographics/Isaac Callbacks.svg){: width='500' }](../images/infographics/Isaac Callbacks.svg)

### MC_NPC_UPDATE {: .copyable }
Called after an NPC is updated.

Returning any value will have no effect on later callback executions.

???- warning "Warning"
    This callback will NOT fire when the NPC is playing the "Appear" animation. For example, when a Gaper spawns, it will fire on frame 1, then on frame 31 and onwards.

???- example "Example Code"
    This code will print "Hello World!" for every NPC Update.
    ```lua
    function mod:myFunction(entity) -- 'entity' contains a reference to the NPC
        print("Hello World!")
    end
    mod:AddCallback(ModCallbacks.MC_NPC_UPDATE, mod.myFunction)
    ```

    This function will only print "Gaper found", if the NPC is of the type "ENTITY_GAPER".
    ```lua
    function mod:myFunction2(entity) -- 'entity' contains a reference to the NPC
        print("Gaper found!")
    end
    mod:AddCallback(ModCallbacks.MC_NPC_UPDATE, mod.myFunction2, EntityType.ENTITY_GAPER)
    ```

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|0 |MC_NPC_UPDATE {: .copyable } | ([EntityNPC](../EntityNPC.md))|[EntityType](EntityType.md) | void |

### MC_POST_UPDATE {: .copyable }
Called after every game update.

Returning any value will have no effect on later callback executions.

???- info "Execution informations"
    This callback is called 30 times per second. It will not be called, when its paused (for example on screentransitions or on the pause menu).

???- example "Example Code"
    This code will print "Hello World!" for every Game Update.
    ```lua
    function mod:myFunction()
        print("Hello World!")
    end
    mod:AddCallback(ModCallbacks.MC_POST_UPDATE, mod.myFunction)
    ```

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|1 |MC_POST_UPDATE {: .copyable } | - | - | void |

### MC_POST_RENDER {: .copyable }
Called after every game render (60 times per second).

Returning any value will have no effect on later callback executions.

???- info  "Execution informations"
    It is highly recommended to only use this function when you want to render something. Its not recommended to use this function for things which are not frequently used or need constant recalculation.

???- example "Example Code"
    This code will print "Hello World!" everytime the game renders.
    ```lua
    function mod:myFunction()
        print("Hello World!")
    end
    mod:AddCallback(ModCallbacks.MC_POST_RENDER, mod.myFunction)
    ```

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|2 |MC_POST_RENDER {: .copyable } | - | - | void |

### MC_USE_ITEM {: .copyable }
Called when an active item is used, or when any item is passed through EntityPlayer.UseActiveItem.

The item [RNG](../RNG.md) allows for the item's random events to be seeded.

Return true to show the "use item" animation, otherwise false.Returning any value will have no effect on later callback executions.

If a table is returned instead of a boolean, the following fields can be set to a non-nil value for extra functionality:

* Discharge: Determines whether the item should be discharged or not after being used
* Remove: Determines whether the item should be removed from the player or not after being used
* ShowAnim: Plays the default use animation if set to true (equivalent to simply returning true in AB+)

???- info "Note"
    The "Discharge" field dictates whether the Book of Virtues should generate a wisp. Setting it to `false` prevents the wisp from spawning.

???- example "Example Code"
    This code will print "Hello World!" everytime an active item is used.
    ```lua
    function mod:myFunction(collectibleID, rngObj, playerWhoUsedItem, useFlags, activeSlot, varData)
        print("Hello World!")
    end
    mod:AddCallback(ModCallbacks.MC_USE_ITEM, mod.myFunction)
    ```

    This code showcases how the return value can be used to alter the behavior of the item usage. Here, it will cause the item to not discharge, not be removed on use and not show the use animation.
    ```lua
    function mod:myFunction2(collectibleID, rngObj, playerWhoUsedItem, useFlags, activeSlot, varData)
        return {
            Discharge = false,
            Remove = false,
            ShowAnim = false,
        }
    end
    mod:AddCallback(ModCallbacks.MC_USE_ITEM, mod.myFunction2)
    ```

    This code will only print "D6 used!" when the D6 is used.
    ```lua
    function mod:myFunction3(collectibleID, rngObj, playerWhoUsedItem, useFlags, activeSlot, varData)
        print("D6 used!")
    end
    mod:AddCallback(ModCallbacks.MC_USE_ITEM, mod.myFunction3, CollectibleType.COLLECTIBLE_D6)
    ```

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|3 |MC_USE_ITEM {: .copyable } | ([CollectibleType](CollectibleType.md),<br>[RNG](../RNG.md),<br>[EntityPlayer](../EntityPlayer.md),<br>[UseFlags](UseFlag.md) [int],<br>[ActiveSlot](ActiveSlot.md),<br>CustomVarData [int])|[CollectibleType](CollectibleType.md) | boolean |

### MC_POST_PEFFECT_UPDATE {: .copyable }
Called for each player, each frame, after the player evaluates the effects of items that must be constantly evaluated.

Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|4 |MC_POST_PEFFECT_UPDATE {: .copyable } | ([EntityPlayer](../EntityPlayer.md))|[PlayerType](PlayerType.md) | void |

### MC_USE_CARD {: .copyable }
Called when a card/rune is used.

Returning any value will have no effect on later callback executions.

???- example "Example Code"
    This code will print "Hello World!" everytime any card is used.
    ```lua
    function mod:myFunction(cardID, playerWhoUsedItem, useFlags)
        print("Hello World!")
    end
    mod:AddCallback(ModCallbacks.MC_USE_CARD, mod.myFunction)
    ```

    This code will only print "Fool card used!" when the Fool card is used.
    ```lua
    function mod:myFunction2(cardID, playerWhoUsedItem, useFlags)
        print("Fool card used!")
    end
    mod:AddCallback(ModCallbacks.MC_USE_CARD, mod.myFunction2, Card.CARD_FOOL)
    ```

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|5 |MC_USE_CARD {: .copyable } | ([Card](Card.md),<br>[EntityPlayer](../EntityPlayer.md),<br>[UseFlags](UseFlag.md) [int]|[Card](Card.md) | void |

### MC_FAMILIAR_UPDATE {: .copyable }
Called every frame for each familiar.

Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|6 |MC_FAMILIAR_UPDATE {: .copyable } | ([EntityFamiliar](../EntityFamiliar.md))|[FamiliarVariant](FamiliarVariant.md) | void |

### MC_FAMILIAR_INIT {: .copyable }
Called just after a familiar is initialized.

Returning any value will have no effect on later callback executions.

???- warning "Warning"
    Accessing the initialized entity does provide incomplete data in some use cases. Only Position, Velocity, SpawnerType, SpawnerVariant, SpawnerEntity and some others are set before PostInit callbacks are called and are therefore accessible. Some other attributes (i.e. effect attributes or tear flags) will not be set. If you want to access those values, you need to hook into MC_POST_PEFFECT_UPDATE and check those attributes on the first possible frame.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|7 |MC_FAMILIAR_INIT {: .copyable } | ([EntityFamiliar](../EntityFamiliar.md))|[FamiliarVariant](FamiliarVariant.md) | void |

### MC_EVALUATE_CACHE {: .copyable }
Called one or more times when a player's stats are re-evaluated. For example, this will fire after the player picks up a collectible item that grants stats or uses a stat pill.

The optional parameter can be used to specify a CacheFlag. It must be a singular CacheFlag, a composition of two or more CacheFlags will not work.

Returning any value will have no effect on later callback executions.

Use this callback to implement anything that changes the player's stats, familiars, flying, weapons, and so on.

Custom collectibles and trinkets annotate which specific stats they affect with the "cache" tag in the "items.xml" file. For example, a custom passive collectible that increases tear rate and damage should have an "items.xml" entry with something along the lines of:

```xml
  <passive
    name="Foo"
    description="My cool item"
    gfx="foo.png"
    cache="damage firedelay"
  />
```

With this entry, the `MC_EVALUATE_CACHE` callback will fire twice when Foo item is picked up by the player, once with `CacheFlag.CACHE_DAMAGE`, and once with `CacheFlag.CACHE_FIREDELAY`.

The stats for vanilla items and effects are applied before the callback is fired for any modded effects.

You can force this callback to fire in other callbacks by 1) manually adding the appropriate cache flags to the player, and 2) calling the `EntityPlayer.EvaluateItems` method. For example:

```lua
-- My custom item changes the player's damage on every frame
function barPostPEffectUpdate(player)
  player:AddCacheFlags(CacheFlag.CACHE_DAMAGE)
  player:EvaluateItems() -- The "MC_EVALUATE_CACHE" callback will now fire.
end
```

Note that the value passed to the callback will always be an exact value of the CacheFlag enum. It is never a composition of two or more CacheFlags. Thus, you should always use normal equality instead of bitwise operators when comparing the cache flag.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|8 |MC_EVALUATE_CACHE {: .copyable } | ([EntityPlayer](../EntityPlayer.md),<br>[CacheFlag](CacheFlag.md))|[CacheFlag](CacheFlag.md) | void |

### MC_POST_PLAYER_INIT {: .copyable }
Called after a Player Entity is initialized.

The optional parameter can be used to specify a Player Variant. 0 = Player, 1 = Co-Op-Baby

Returning any value will have no effect on later callback executions.

???- warning "Warning"
    Accessing the initialized entity does provide incomplete data in some use cases. Only Position, Velocity, SpawnerType, SpawnerVariant, SpawnerEntity and some others are set before PostInit callbacks are called and are therefore accessible. Some other attributes (i.e. effect attributes or tear flags) will not be set. If you want to access those values, you need to hook into MC_POST_PEFFECT_UPDATE and check those attributes on the first possible frame.

???- info "Conditional Behaviour [ ](#){: .reporplus .tooltip .badge }"
    This callback causes many `EntityPlayer` methods to silently fail if the methods are called while continuing a saved run. This behavior was intentionally added by Kilburn in the Repentance DLC in order to make it easier for modders to add starting items to custom characters. (This behavior obviaties the need for modders to use filtration logic to distinguish between the cases of a new run/Genesis use/co-op spawn and a continued run.)

    The following EntityPlayer methods are known to fail:

    ```lua
    AddCollectible
    AddTrinket
    AddKeys
    AddCoins
    AddBombs
    AddGoldenBomb
    AddGoldenKey
    AddGigaBombs
    AddMaxHearts
    AddHearts
    AddBlackHearts
    AddSoulHearts
    AddRottenHearts
    AddBoneHearts
    AddGoldenHearts
    AddEternalHearts
    AddBrokenHearts
    AddCard
    AddPill
    AddPrettyFly
    AddJarFlies
    AddJarHearts
    AddSoulCharge
    AddBloodCharge
    AddPoopMana
    SetPocketActiveItem
    ```

    The following EntityPlayer methods have been verified to continue firing:

    ```lua
    AddBlueFlies
    AddBlueSpider
    AddWisp
    AddItemWisp
    AddSwarmFlyOrbital
    AddFriendlyDip
    ```


|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|9 |MC_POST_PLAYER_INIT {: .copyable } | ([EntityPlayer](../EntityPlayer.md))|PlayerVariant* | void |

### MC_USE_PILL {: .copyable }
Called when a pill is used.

Returning any value will have no effect on later callback executions.

???- example "Example Code"
    This code will print "Hello World!" everytime any pill is used.
    ```lua
    function mod:myFunction(pillEffectID, playerWhoUsedItem, useFlags)
        print("Hello World!")
    end
    mod:AddCallback(ModCallbacks.MC_USE_PILL, mod.myFunction)
    ```

    This code will only print "Bad Gas Pill used!" when the Fool pill is used.
    ```lua
    function mod:myFunction2(pillEffectID, playerWhoUsedItem, useFlags)
        print("Bad Gas Pill used!")
    end
    mod:AddCallback(ModCallbacks.MC_USE_PILL, mod.myFunction2, PillEffect.PILLEFFECT_BAD_GAS)
    ```

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|10 |MC_USE_PILL {: .copyable } | ([PillEffect](PillEffect.md),<br>[EntityPlayer](../EntityPlayer.md),<br>[UseFlags](UseFlag.md) [int])|[PillEffect](PillEffect.md) | void |

### MC_ENTITY_TAKE_DMG {: .copyable }
Called before new damage is applied.

If the entity has a DAMAGE_COUNTDOWN flag, it will ignore any other DAMAGE_COUNTDOWN hits for the duration specified.

Return true or nil if the entity or player should sustain the damage, otherwise false to ignore it. If the entity is an [EntityPlayer](../EntityPlayer.md), the DamageAmount is the integer number of half-hearts of damage that the player will take. Otherwise, DamageAmount is a number of hit points.

???+ bug
    Returning any value besides nil will prevent later callbacks from being executed.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|11 |MC_ENTITY_TAKE_DMG {: .copyable } | (Entity [[Entity](../Entity.md)],<br>Amount [float],<br>[DamageFlags](DamageFlag.md) [int],<br>Source [[EntityRef](../EntityRef.md)],<br>CountdownFrames [int])|[EntityType](EntityType.md) | boolean |

### MC_POST_CURSE_EVAL {: .copyable }

This callback is fired after the current Level has calculated it's seeded curses but before obligatory curses are applied or banned curses are removed (mainly due to challenges).

If the player enters a level with the Black Candle effect, this callback is skipped.

Curses is a bitmask containing current [curses](LevelCurse.md). if a number is returned it will be used as the new curse bitmask, overwriting the original one. Use `Isaac.GetCurseIdByName()` to get the curseID.

If a number is returned, it will be the "Curses" arg for later executed callbacks.

???+ bug
    Returning a value that is not an integer or nil will cause the game to crash.

???+ warning "Warning"
    The last callback to return a valid return value wins out and overwrites previous callbacks' return values

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|12 |MC_POST_CURSE_EVAL {: .copyable } | ([Curses](LevelCurse.md) [int]) | - | int |

### MC_INPUT_ACTION {: .copyable }

This callback fires every time the game polls for a [ButtonAction](ButtonAction.md) input, often several times per frame even for the same action. Since it has to do with polling, it fires regardless of whether or not the player is actually pressing any particular input.

This callback is used to arbitrarily change inputs. For example, you can completely disable the player from pressing a certain button. Or, you can force the player to press a specific button, and so on. If all you want to do is *read* if an input is pressed or not, then you should not use this callback, and instead use the `Input.IsActionTriggered` method in the `MC_POST_RENDER` callback.

This callback will not affect any custom mod code that is reading user input via the `Input` class.

- [Entity](../Entity.md) - The entity that is requesting the input. Most of the time this will be a player. However, it can also be nil if the input is not read from an entity class, or an entity being controlled by Friend Finder.
- [InputHook](InputHook.md) - This determines the kind of input that is being polled. This corresponds to the `Input.IsActionTriggered`, `Input.IsActionPressed`, and `Input.GetActionValue` methods, which trigger this callback.

Return nil if you do not want to overwrite the input. If you do want to overwrite the input, then you have to return a boolean for the `IS_ACTION_PRESSED` (0) and `IS_ACTION_TRIGGERED` (1) input hooks, or a float between 0.0 and 1.0 for the `GET_ACTION_VALUE` (2) input hook.

Returning any value will have no effect on later callback executions.

???- info "Execution information"
    This callback is called roughly 1470 times a second.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|13 |MC_INPUT_ACTION {: .copyable } | ([Entity](../Entity.md),<br>[InputHook](InputHook.md),<br>[ButtonAction](ButtonAction.md))|[InputHook](InputHook.md) | boolean or float |

### MC_LEVEL_GENERATOR  {: .copyable }

???+ bug
    This callback doesn't work right now and will never be called by the game!

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|14 |MC_LEVEL_GENERATOR  {: .copyable }  | - | - | void |

### MC_POST_GAME_STARTED {: .copyable }

This function gets called when you start a game. The boolean value is true when you continue a run, false when you start a new one.

This callback will be called after MC_POST_NEW_ROOM and after MC_POST_NEW_LEVEL.

Returning any value will have no effect on later callback executions.

???- example "Example code"
    ```lua
    local function onStart(_,bool)
    	print(bool)
    end
    mod:AddCallback(ModCallbacks.MC_POST_GAME_STARTED, onStart)
    ```

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|15 |MC_POST_GAME_STARTED {: .copyable } | (IsContinued [bool]) | - | void |

### MC_POST_GAME_END {: .copyable }

This function gets called when the game over screen appears, or when the an ending starts playing. The boolean value is true when you died and got a game over, false when you won and got an ending.

Returning any value will have no effect on later callback executions.

???- example "Example code"
    ```lua
    local function onEnd(_,bool)
        print(bool)
    end
    mod:AddCallback(ModCallbacks.MC_POST_GAME_END, onEnd)
    ```

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|16 |MC_POST_GAME_END {: .copyable } | (IsGameOver [bool]) | - | void |

### MC_PRE_GAME_EXIT {: .copyable }


This function gets called when you quit a run. The boolean value is true when the game would normally create a continuable save, false when it wouldn't. Called twice when the game plays an ending.

Returning any value will have no effect on later callback executions.

???- example "Example code"
    ```lua
    local function onExit(_,bool)
        print(bool)
    end
    mod:AddCallback(ModCallbacks.MC_PRE_GAME_EXIT, onExit)
    ```

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|17 |MC_PRE_GAME_EXIT {: .copyable } | (ShouldSave [bool]) | - | void |

### MC_POST_NEW_LEVEL {: .copyable }
This triggers after transitioning a level or stage.

Unintuitively, it is always called **after** MC_POST_NEW_ROOM.

Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|18 |MC_POST_NEW_LEVEL {: .copyable } | -  | - | void |

### MC_POST_NEW_ROOM {: .copyable }
This triggers after entering a room.

Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|19 |MC_POST_NEW_ROOM {: .copyable } | -  | - | void |

### MC_GET_CARD {: .copyable }
This callback is used for handling Card Pools.

Because not all cards have the same chance to spawn, use [RNG](../RNG.md) for a seeded random selection.

You can use the boolean values as a filter for the selection.

The return value determines, what [Card](Card.md) will be spawned. Return nil to not replace the spawned card.

Returned values will not update the "[Card](Card.md)" arg of later executed callbacks.

The `IncludePlayingCards` argument is whether to include cards of type `ItemConfigCardType.SUIT`. (This was confirmed by looking at the LuaJIT API code in the Nintendo Switch version files.)

???+ bug
    Returning a value that is not an integer or nil will cause the game to crash. Returning an invalid [Card](Card.md) will crash the game if the card is collected.

???+ warning "Warning"
    The last callback to return a valid return value wins out and overwrites previous callbacks' return values

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|20 |MC_GET_CARD {: .copyable } | ([RNG](../RNG.md),<br>[Card](Card.md),<br>IncludePlayingCards [bool],<br>IncludeRunes [bool],<br>OnlyRunes [bool]) | - | [Card](Card.md) |

### MC_GET_SHADER_PARAMS {: .copyable }
Returns a table containing a key -> value pair for custom shader parameters.

Will skip remaining callbacks when returning a table.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|21 |MC_GET_SHADER_PARAMS {: .copyable } | (ShaderName [string]) | - | table |

### MC_EXECUTE_CMD {: .copyable }
Returns a string separated by `<br />` (newline) per output line CMD is the first word of the Console input.

The parameters are the rest of the Input.

???+ info "Important"
    This function is NOT called for default game commands like Spawn or Debug.

Returning a string will print it to the console.

Returning any value will have no effect on later callback executions.

???+ bug
    Returning any value beside nil will cause the game to crash, including a string.

???- example "Example code"
    ```lua
    function mod.oncmd(_, command, args)
        print(command)
        print(args)
    end
    mod:AddCallback(ModCallbacks.MC_EXECUTE_CMD, mod.oncmd)
    -- executing command "Test apple 1 Pear test" prints
    -- Test
    -- apple 1 Pear test
    ```

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|22 |MC_EXECUTE_CMD {: .copyable } | (CMD [string],<br>Parameters [string]) | - | string |

### MC_PRE_USE_ITEM {: .copyable }
Called before an item is used.

Return true to prevent the default code of an item to be triggered. This will still discharge the item.

???+ bug
    Returning any value besides nil will also prevent later callbacks from being executed.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|23 |MC_PRE_USE_ITEM {: .copyable } | ([CollectibleType](CollectibleType.md),<br>[RNG](../RNG.md),<br>[EntityPlayer](../EntityPlayer.md),<br>[UseFlags](UseFlag.md) [int],<br>[ActiveSlot](ActiveSlot.md),<br>CustomVarData [int])|[CollectibleType](CollectibleType.md) | boolean |

### MC_PRE_ENTITY_SPAWN {: .copyable }
Called right before an entity is spawned.

Optional: Return a table with new values `{ Type, Variant, Subtype, Seed }` to override these values of the spawned entity.

If you want to prevent an entity from spawning, you cannot return an `EntityType` of 0, since that will cause the game to crash.

Sometimes, if you return a type other than the original type (e.g. replacing a pickup with an effect), the game will crash. Thus, you should replace a pickup with a new pickup, and so on.

???+ bug
    Returning a value that is not a table or nil will cause the game to crash.

???+ warning "Warning"
    The last callback to return a valid return value wins out and overwrites previous callbacks' return values

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|24 |MC_PRE_ENTITY_SPAWN {: .copyable } | ([EntityType](EntityType.md),<br>Variant [int],<br>SubType [int],<br>Position [Vector],<br>Velocity [Vector],<br>Spawner [[Entity](../Entity.md)],<br>Seed [int]) | - | table |

### MC_POST_FAMILIAR_RENDER {: .copyable }
Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|25 |MC_POST_FAMILIAR_RENDER {: .copyable } | ([EntityFamiliar](../EntityFamiliar.md),<br>RenderOffset [Vector])|[FamiliarVariant](FamiliarVariant.md) | void |

### MC_PRE_FAMILIAR_COLLISION {: .copyable }
The Low value is true, when the entity collided with the collider first. Its false if the collider collides first.

Return true to ignore collision, false to collide but not execute internal code and nil to continue with internal code (example: taking damage on contact).
Returning any non-nil value will skip remaining callbacks.


|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|26 |MC_PRE_FAMILIAR_COLLISION {: .copyable } | ([EntityFamiliar](../EntityFamiliar.md),<br>Collider [[Entity](../Entity.md)],<br>Low [bool])|[FamiliarVariant](FamiliarVariant.md) | boolean |

### MC_POST_NPC_INIT {: .copyable }
Returning any value will have no effect on later callback executions.

Will also be called if Delirium morphs into given EntityType.

???- warning "Warning"
    Accessing the initialized entity does provide incomplete data in some use cases. Only Position, Velocity, SpawnerType, SpawnerVariant, SpawnerEntity and some others are set before PostInit callbacks are called and are therefore accessible. Some other attributes (i.e. effect attributes or tear flags) will not be set. If you want to access those values, you need to hook into MC_NPC_UPDATE and check those attributes on the first possible frame.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|27 |MC_POST_NPC_INIT {: .copyable } | ([EntityNPC](../EntityNPC.md))|[EntityType](EntityType.md) | void |

### MC_POST_NPC_RENDER {: .copyable }
Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|28 |MC_POST_NPC_RENDER {: .copyable } | ([EntityNPC](../EntityNPC.md),<br>RenderOffset [Vector])|[EntityType](EntityType.md) | void |

### MC_POST_NPC_DEATH {: .copyable }
Gets called after the Death animation is played.

Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|29 |MC_POST_NPC_DEATH {: .copyable } | ([EntityNPC](../EntityNPC.md))|[EntityType](EntityType.md) | void |

### MC_PRE_NPC_COLLISION {: .copyable }
The Low value is true, when the entity collided with the collider first. Its false if the collider collides first.

Return true to ignore collision, false to collide but not execute internal code and nil to continue with internal code (example: taking damage on contact).
Returning any non-nil value will skip remaining callbacks.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|30 |MC_PRE_NPC_COLLISION {: .copyable } | ([EntityNPC](../EntityNPC.md),<br>Collider [[Entity](../Entity.md)],<br>Low [bool])|[EntityType](EntityType.md) | boolean |

### MC_POST_PLAYER_UPDATE {: .copyable }
The optional parameter can be used to specify a Player Variant. 0 = Player, 1 = Co-Op-Baby

Returning any value will have no effect on later callback executions.

???- info "Execution informations"
    This callback is called 60 times per second

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|31 |MC_POST_PLAYER_UPDATE {: .copyable } | ([EntityPlayer](../EntityPlayer.md))|PlayerVariant* | void |

### MC_POST_PLAYER_RENDER {: .copyable }
The optional parameter can be used to specify a Player Variant. 0 = Player, 1 = Co-Op-Baby

Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|32 |MC_POST_PLAYER_RENDER {: .copyable } | ([EntityPlayer](../EntityPlayer.md),<br>RenderOffset [Vector])|PlayerVariant* | void |

### MC_PRE_PLAYER_COLLISION {: .copyable }
The Low value is true, when the entity collided with the collider first. Its false if the collider collides first.

Return true to ignore collision, false to collide but not execute internal code and nil to continue with internal code (example: taking damage on contact).
Returning any non-nil value will skip remaining callbacks.

The optional parameter can be used to specify a Player Variant. 0 = Player, 1 = Co-Op-Baby

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|33 |MC_PRE_PLAYER_COLLISION {: .copyable } | ([EntityPlayer](../EntityPlayer.md),<br>Collider [[Entity](../Entity.md)],<br>Low [bool])|PlayerVariant* | boolean |

### MC_POST_PICKUP_INIT {: .copyable }
Returning any value will have no effect on later callback executions.

???- warning "Warning"
    Accessing the initialized entity does provide incomplete data in some use cases. Only Position, Velocity, SpawnerType, SpawnerVariant, SpawnerEntity and some others are set before PostInit callbacks are called and are therefore accessible. Some other attributes (i.e. effect attributes or tear flags) will not be set. If you want to access those values, you need to hook into MC_POST_PICKUP_UPDATE and check those attributes on the first possible frame.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|34 |MC_POST_PICKUP_INIT {: .copyable } | ([EntityPickup](../EntityPickup.md))|[PickupVariant](PickupVariant.md) | void |

### MC_POST_PICKUP_UPDATE {: .copyable }
Returning any value will have no effect on later callback executions.

???- info "Execution informations"
    This callback will be called on the 1st frame that the entity exists. It will only be called on the 0th frame, when you enter a room that already contains a spawned pickup.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|35 |MC_POST_PICKUP_UPDATE {: .copyable } | ([EntityPickup](../EntityPickup.md))|[PickupVariant](PickupVariant.md) | void |

### MC_POST_PICKUP_RENDER {: .copyable }
Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|36 |MC_POST_PICKUP_RENDER {: .copyable } | ([EntityPickup](../EntityPickup.md),<br>RenderOffset [Vector])|[PickupVariant](PickupVariant.md) | void |

### MC_POST_PICKUP_SELECTION {: .copyable }
Called after a Pickup was choosen from a list of random pickups to be spawned.Return nil to continue with default game code.

Return a table `{ Variant, Subtype }` to override the specified values. This does also affect later executed callbacks.

???+ bug
    Returning a value that is not a table or nil will cause the game to crash.

???+ warning "Warning"
    The last callback to return a valid return value wins out and overwrites previous callbacks' return values

???+ bug
    [EntityPickup](../EntityPickup.md) does contain the Type/variant of the pickup to spawn, but is otherwise an empty class with empty / zeroed values.

    This Callback is also called when entering a room that contains pickups that are already selected. It is also called when the player drops a card. Those facts make this callback useless to use for handling pickup pools.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|37 |MC_POST_PICKUP_SELECTION {: .copyable } | ([EntityPickup](../EntityPickup.md),<br>Variant [int],<br>Subtype [int]) | - | table |

### MC_PRE_PICKUP_COLLISION {: .copyable }
The Low value is true, when the entity collided with the collider first. Its false if the collider collides first.

Return true to ignore collision, false to collide but not execute internal code and nil to continue with internal code (example: taking damage on contact).
Returning any non-nil value will skip remaining callbacks.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|38 |MC_PRE_PICKUP_COLLISION {: .copyable } | ([EntityPickup](../EntityPickup.md),<br>Collider [[Entity](../Entity.md)],<br>Low [bool])|[PickupVariant](PickupVariant.md) | boolean |

### MC_POST_TEAR_INIT {: .copyable }
Returning any value will have no effect on later callback executions.

???- warning "Warning"
    Accessing the initialized entity does provide incomplete data in some use cases. Only Position, Velocity, SpawnerType, SpawnerVariant, SpawnerEntity and some others are set before PostInit callbacks are called and are therefore accessible. Some other attributes (i.e. effect attributes or tear flags) will not be set. If you want to access those values, you need to hook into MC_POST_TEAR_UPDATE and check those attributes on the first possible frame.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|39 |MC_POST_TEAR_INIT {: .copyable } | ([EntityTear](../EntityTear.md))|[TearVariant](TearVariant.md) | void |

### MC_POST_TEAR_UPDATE {: .copyable }
Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|40 |MC_POST_TEAR_UPDATE {: .copyable } | ([EntityTear](../EntityTear.md))|[TearVariant](TearVariant.md) | void |

### MC_POST_TEAR_RENDER {: .copyable }
Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|41 |MC_POST_TEAR_RENDER {: .copyable } | ([EntityTear](../EntityTear.md),<br>RenderOffset [Vector])|[TearVariant](TearVariant.md) | void |

### MC_PRE_TEAR_COLLISION {: .copyable }
The Low value is true, when the entity collided with the collider first. Its false if the collider collides first.

Return true to ignore collision, false to collide but not execute internal code and nil to continue with internal code (example: taking damage on contact).
Returning any non-nil value will skip remaining callbacks.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|42 |MC_PRE_TEAR_COLLISION {: .copyable } | ([EntityTear](../EntityTear.md),<br>Collider [[Entity](../Entity.md)],<br>Low [bool])|[TearVariant](TearVariant.md) | boolean |

### MC_POST_PROJECTILE_INIT {: .copyable }
Returning any value will have no effect on later callback executions.

???- warning "Warning"
    Accessing the initialized entity does provide incomplete data in some use cases. Only Position, Velocity, SpawnerType, SpawnerVariant, SpawnerEntity and some others are set before PostInit callbacks are called and are therefore accessible. Some other attributes (i.e. effect attributes or tear flags) will not be set. If you want to access those values, you need to hook into MC_POST_PROJECTILE_UPDATE and check those attributes on the first possible frame.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|43 |MC_POST_PROJECTILE_INIT {: .copyable } | ([EntityProjectile](../EntityProjectile.md))|[ProjectileVariant](ProjectileVariant.md) | void |

### MC_POST_PROJECTILE_UPDATE {: .copyable }
Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|44 |MC_POST_PROJECTILE_UPDATE {: .copyable } | ([EntityProjectile](../EntityProjectile.md))|[ProjectileVariant](ProjectileVariant.md) | void |

### MC_POST_PROJECTILE_RENDER {: .copyable }
Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|45 |MC_POST_PROJECTILE_RENDER {: .copyable } | ([EntityProjectile](../EntityProjectile.md),<br>RenderOffset [Vector])|[ProjectileVariant](ProjectileVariant.md) | void |

### MC_PRE_PROJECTILE_COLLISION {: .copyable }
The Low value is true, when the entity collided with the collider first. Its false if the collider collides first.

Return true to ignore collision, false to collide but not execute internal code and nil to continue with internal code (example: taking damage on contact).
Returning any non-nil value will skip remaining callbacks.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|46 |MC_PRE_PROJECTILE_COLLISION {: .copyable } | ([EntityProjectile](../EntityProjectile.md),<br>Collider [[Entity](../Entity.md)],<br>Low [bool])|[ProjectileVariant](ProjectileVariant.md) | boolean |

### MC_POST_LASER_INIT {: .copyable }
Returning any value will have no effect on later callback executions.

???- warning "Warning"
    Accessing the initialized entity does provide incomplete data in some use cases. Only Position, Velocity, SpawnerType, SpawnerVariant, SpawnerEntity and some others are set before PostInit callbacks are called and are therefore accessible. Some other attributes (i.e. effect attributes or tear flags) will not be set. If you want to access those values, you need to hook into MC_POST_LASER_UPDATE and check those attributes on the first possible frame.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|47 |MC_POST_LASER_INIT {: .copyable } | ([EntityLaser](../EntityLaser.md))|LaserVariant | void |

### MC_POST_LASER_UPDATE {: .copyable }
Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|48 |MC_POST_LASER_UPDATE {: .copyable } | ([EntityLaser](../EntityLaser.md))|LaserVariant | void |

### MC_POST_LASER_RENDER {: .copyable }
Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|49 |MC_POST_LASER_RENDER {: .copyable } | ([EntityLaser](../EntityLaser.md),<br>RenderOffset [Vector])|LaserVariant | void |

### MC_POST_KNIFE_INIT {: .copyable }
Returning any value will have no effect on later callback executions.


???+ note
    The optional parameter is a SubType and **NOT** a Variant!

???- warning "Warning"
    Accessing the initialized entity does provide incomplete data in some use cases. Only Position, Velocity, SpawnerType, SpawnerVariant, SpawnerEntity and some others are set before PostInit callbacks are called and are therefore accessible. Some other attributes (i.e. effect attributes or tear flags) will not be set. If you want to access those values, you need to hook into MC_POST_KNIFE_UPDATE and check those attributes on the first possible frame.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|50 |MC_POST_KNIFE_INIT {: .copyable } | ([EntityKnife](../EntityKnife.md))|KnifeSubType * | void |

### MC_POST_KNIFE_UPDATE {: .copyable }
Returning any value will have no effect on later callback executions.

???+ note
    The optional parameter is a SubType and **NOT** a Variant!

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|51 |MC_POST_KNIFE_UPDATE {: .copyable } | ([EntityKnife](../EntityKnife.md))|KnifeSubType * | void |

### MC_POST_KNIFE_RENDER {: .copyable }
Returning any value will have no effect on later callback executions.

???+ note
    The optional parameter is a SubType and **NOT** a Variant!

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|52 |MC_POST_KNIFE_RENDER {: .copyable } | ([EntityKnife](../EntityKnife.md),<br>RenderOffset [Vector])|KnifeSubType * | void |

### MC_PRE_KNIFE_COLLISION {: .copyable }
The Low value is true, when the entity collided with the collider first. Its false if the collider collides first.

Return true to ignore collision, false to collide but not execute internal code and nil to continue with internal code (example: taking damage on contact).
Returning any non-nil value will skip remaining callbacks.

???+ note
    The optional parameter is a SubType and **NOT** a Variant!

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|53 |MC_PRE_KNIFE_COLLISION {: .copyable } | ([EntityKnife](../EntityKnife.md),<br>Collider [[Entity](../Entity.md)],<br>Low [bool])|KnifeSubType * | boolean |

### MC_POST_EFFECT_INIT {: .copyable }
Returning any value will have no effect on later callback executions.

???- warning "Warning"
    Accessing the initialized entity does provide incomplete data in some use cases. Only Position, Velocity, SpawnerType, SpawnerVariant, SpawnerEntity and some others are set before PostInit callbacks are called and are therefore accessible. Some other attributes (i.e. effect attributes or tear flags) will not be set. If you want to access those values, you need to hook into MC_POST_EFFECT_UPDATE and check those attributes on the first possible frame.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|54 |MC_POST_EFFECT_INIT {: .copyable } | ([EntityEffect](../EntityEffect.md))|[EffectVariant](EffectVariant.md) | void |

### MC_POST_EFFECT_UPDATE {: .copyable }
Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|55 |MC_POST_EFFECT_UPDATE {: .copyable } | ([EntityEffect](../EntityEffect.md))|[EffectVariant](EffectVariant.md) | void |

### MC_POST_EFFECT_RENDER {: .copyable }
Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|56 |MC_POST_EFFECT_RENDER {: .copyable } | ([EntityEffect](../EntityEffect.md),<br>RenderOffset [Vector])|[EffectVariant](EffectVariant.md) | void |

### MC_POST_BOMB_INIT {: .copyable }
Returning any value will have no effect on later callback executions.

???- warning "Warning"
    Accessing the initialized entity does provide incomplete data in some use cases. Only Position, Velocity, SpawnerType, SpawnerVariant, SpawnerEntity and some others are set before PostInit callbacks are called and are therefore accessible. Some other attributes (i.e. effect attributes or tear flags) will not be set. If you want to access those values, you need to hook into MC_POST_BOMB_UPDATE and check those attributes on the first possible frame.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|57 |MC_POST_BOMB_INIT {: .copyable } | ([EntityBomb](../EntityBomb.md))|[BombVariant](BombVariant.md) | void |

### MC_POST_BOMB_UPDATE {: .copyable }
Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|58 |MC_POST_BOMB_UPDATE {: .copyable } | ([EntityBomb](../EntityBomb.md))|[BombVariant](BombVariant.md) | void |

### MC_POST_BOMB_RENDER {: .copyable }
Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|59 |MC_POST_BOMB_RENDER {: .copyable } | ([EntityBomb](../EntityBomb.md),<br>Offset [Vector])|[BombVariant](BombVariant.md) | void |

### MC_PRE_BOMB_COLLISION {: .copyable }
The Low value is true, when the entity collided with the collider first. Its false if the collider collides first.

Return true to ignore collision, false to collide but not execute internal code and nil to continue with internal code (example: taking damage on contact).
Returning any non-nil value will skip remaining callbacks.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|60 |MC_PRE_BOMB_COLLISION {: .copyable } | ([EntityBomb](../EntityBomb.md),<br>Collider [[Entity](../Entity.md)],<br>Low [bool])|[BombVariant](BombVariant.md) | boolean |

### MC_POST_FIRE_TEAR {: .copyable }
Called when the player fires a tear.

Returning any value will have no effect on later callback executions.

For Afterbirth+, this is not called for other weapons or tears fired with Incubus. In Repentance, it works for tears fired with Incubus.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|61 |MC_POST_FIRE_TEAR {: .copyable } | ([EntityTear](../EntityTear.md)) | - | void |

### MC_PRE_GET_COLLECTIBLE {: .copyable }

This callback is called when the game needs to get a new random item from an item pool.

You can return an integer from this callback in order to change the returned collectible type.

It is not called for "scripted" drops (like Mr. Boom from Wrath) and manually spawned items.

Returned values will not alter args of later executed callbacks.

Returning any non nil value will cause **MC_POST_GET_COLLECTIBLE** to be skipped.

???+ bug
    Returning a value that is not a [CollectibleType](CollectibleType.md) or nil will cause the game to crash.

???+ warning "Warning"
    The last callback to return a valid return value wins out and overwrites previous callbacks' return values

???- info "Notes"
    **ItemPoolType** always refers to what the original requested item pool was, regardless of whether or not Chaos has
    meddled with the item pools. However, you can know which item pool is actually going to be used by checking what [ItemPool::GetLastPool()](../ItemPool.md#getlastpool) returns.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|62 |MC_PRE_GET_COLLECTIBLE {: .copyable } | ([ItemPoolType](ItemPoolType.md),<br>Decrease [bool],<br>Seed [int]) | - | [CollectibleType](CollectibleType.md) |

### MC_POST_GET_COLLECTIBLE {: .copyable }
This function is called right after MC_PRE_GET_COLLECTIBLE and determines the Collectible that will be spawned from the given [ItemPoolType](ItemPoolType.md).

If any non nil value was returned to **MC_PRE_GET_COLLECTIBLE** then this callback will be skipped.

You can return an integer from this callback in order to change the returned collectible type.

Returned values will not update the "SelectedCollectible" arg of later executed callbacks.

???- info "Notes"
    **ItemPoolType** always refers to what the original requested item pool was, regardless of whether or not Chaos has
    meddled with the item pools. However you can know which item pool was actually used by checking what [ItemPool::GetLastPool()](../ItemPool.md#getlastpool) returns.

???+ bug
    Returning a value that is not a [CollectibleType](CollectibleType.md) or nil will cause the game to crash.

???+ warning "Warning"
    The last callback to return a valid return value wins out and overwrites previous callbacks' return values


|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|63 |MC_POST_GET_COLLECTIBLE {: .copyable } | (SelectedCollectible [[CollectibleType](CollectibleType.md)],<br>[ItemPoolType](ItemPoolType.md),<br>Decrease [bool],<br>Seed [int]) | - | [CollectibleType](CollectibleType.md) |

### MC_GET_PILL_COLOR {: .copyable }

This function is called, when the game is spawning a pill and needs to determine its PillColor.

Return a PillColor to specify a Pillcolor that needs to be choosen. Return nothing to let it be handled by the game.

Returned values will not alter the args of later executed callbacks.

???+ bug
    Returning a value that is not an integer or nil will cause the game to crash.

???+ warning "Warning"
    The last callback to return a valid return value wins out and overwrites previous callbacks' return values

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|64 |MC_GET_PILL_COLOR {: .copyable } | (Seed [int]) | - | [PillColor](PillColor.md) |

### MC_GET_PILL_EFFECT {: .copyable }
Called every frames when the game get the [PillEffect](PillEffect.md) of a pill. The effect of the pill can be choosed by returning the chosen [PillEffect](PillEffect.md).

The effect is applied to every pill of the same PillColor, not to a single pill.

Returned values will not update the "SelectedPillEffect" arg of later executed callbacks.

???+ bug
    Returning a value that is not an integer or nil will cause the game to crash.

???+ warning "Warning"
    The last callback to return a valid return value wins out and overwrites previous callbacks' return values

???- example "Example code"
    This code turn "Bad Trip" pills into "Balls of Steel" pills.
    ```lua
    function mod:getPillEffect(pillEffect, pillColor)
        if pillEffect == PillEffect.PILLEFFECT_BAD_TRIP then
        return PillEffect.PILLEFFECT_BALLS_OF_STEEL
        end
    end
    mod:AddCallback(ModCallbacks.MC_GET_PILL_EFFECT, mod.getPillEffect)
    ```

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|65 |MC_GET_PILL_EFFECT {: .copyable } | (SelectedPillEffect [[PillEffect](PillEffect.md)],<br>PillColor) | - | [[PillEffect](PillEffect.md)] |

### MC_GET_TRINKET {: .copyable }
Called when a [TrinketType](TrinketType.md) of a Trinket needs to be determined.

A [TrinketType](TrinketType.md) can be returned to change the SelectedTrinket.

Returned values will not update the "SelectedTrinket" arg of later executed callbacks.

???+ bug
    Returning a value that is not a [TrinketType](TrinketType.md) or nil will cause the game to crash.

???+ warning "Warning"
    The last callback to return a valid return value wins out and overwrites previous callbacks' return values

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|66 |MC_GET_TRINKET {: .copyable } | (SelectedTrinket [[TrinketType](TrinketType.md)],<br>[RNG](../RNG.md)) | - | [[TrinketType](TrinketType.md)] |

### MC_POST_ENTITY_REMOVE {: .copyable }
Called whenever an [Entity](../Entity.md) gets removed by the game. This includes deaths, kills, removals and even unloading an entity on room transition or ending a run.

Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|67 |MC_POST_ENTITY_REMOVE {: .copyable } | ([Entity](../Entity.md))|[EntityType](EntityType.md) | void |

### MC_POST_ENTITY_KILL {: .copyable }
Called right before a death animation is triggered for an [Entity](../Entity.md).

Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|68 |MC_POST_ENTITY_KILL {: .copyable } | ([Entity](../Entity.md))|[EntityType](EntityType.md) | void |

### MC_PRE_NPC_UPDATE {: .copyable }
Return true if the internal AI of an NPC should be ignored, nil/nothing otherwise. Returning any non-nil value will skip remaining callbacks.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|69 |MC_PRE_NPC_UPDATE {: .copyable } | ([EntityNPC](../EntityNPC.md)) |[EntityType](EntityType.md) | boolean |

### MC_PRE_SPAWN_CLEAN_AWARD {: .copyable }
This function is triggered in every room that can be cleared, including boss and angel rooms, and even when it normally would not spawn a reward.

This Callback also handles special spawns, such as Trapdoors after a boss is killed, awarding Completion Marks to the current characters,
and ending the run in a few cases (Mom, Mega Satan and The Beast). Therefore returning true here will also cancel these events.

Return true if the spawn routine should be ignored, nil/nothing otherwise. Returning any non-nil value will skip remaining callbacks.

???+ bug
    Returning true will cause the room's award seed to not advance, causing subsequent calls of this callback in the same room to have the same RNG object. To fix this you can use the following snippet to manually update the award seed.
    ```lua
    function mod:preSpawnCleanAward(rng)
        local level = Game():GetLevel()
        local roomDesc = level:GetRoomDesc(level:GetCurrentRoomIndex())
        roomDesc.AwardSeed = rng:GetSeed()
        return true
    end
    mod:AddCallback(ModCallbacks.MC_PRE_SPAWN_CLEAN_AWARD, mod.preSpawnCleanAward)
    ```

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|70 |MC_PRE_SPAWN_CLEAN_AWARD {: .copyable } | ([RNG](../RNG.md),<br>SpawnPosition [Vector]) | - | boolean |

### MC_PRE_ROOM_ENTITY_SPAWN {: .copyable }
This is called when entering a new room, before spawning entities which are part of its layout. Grid entities will also trigger this callback and their type will the same as the type used by the gridspawn command. Because of this, effects are assigned the type 999 instead of 1000 in this callback.

Optional: Return a table with new values { Type, Variant, Subtype }. Returning such a table will override any replacements that might naturally occur i.e. enemy variants.

Returning any value will have no effect on later callback executions.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .alldlc .tooltip .badge }|71 |MC_PRE_ROOM_ENTITY_SPAWN {: .copyable } | ([EntityType](EntityType.md),<br>Variant [int],<br>SubType [int],<br>GridIndex [int],<br>Seed [int]) | - | table |

### MC_PRE_ENTITY_DEVOLVE {: .copyable }
This is called when an entity is devolved through D10 or similar.

Returns true if the internal devolving behavior should be ignored - When returning true, this callback is responsible for spawning the devolved entity and removing the original one.

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .reporplus .tooltip .badge }|72 |MC_PRE_ENTITY_DEVOLVE {: .copyable } | ([Entity](../Entity.md)) | - | boolean |

### MC_PRE_MOD_UNLOAD {: .copyable }
This is called right before any mod is unloaded (when disabling a mod or reloading it using luamod), the mod's table is passed as an argument

|DLC|Value|Name|Function Args|Optional Args|Return Type|
|:--|:--|:--|:--|:--|:--|
|[ ](#){: .reporplus .tooltip .badge }|73 |MC_PRE_MOD_UNLOAD {: .copyable } | table Mod | - | void |
