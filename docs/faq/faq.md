# The Binding of Isaac: Repentance Modding FAQ

## General

### Do mods disable Achievements? {: .subHeader}
**Mods don't disable achievements**, as long as you have killed Mom (End Boss of Depths II and related floors) at least once on the savefile. Killing her on challenges or dailies doesn't count.


### How do I install a mod? {: .subHeader}
Simply press the "**Subscribe**" button on the mod's Steam Workshop page. This will automatically download and install the mod. Just start your game again afterwards, and the mod will be listed in the "Mods" menu in the main menu where it can be activated/deactivated.


### Do I need to have all DLCs installed to use mods? {: .subHeader}
**Yes**, you need the basegame "Rebirth", the first DLC "Afterbirth" and the second DLC "Afterbirth+" installed to use mods. Although the third DLC "Repentance" is not required, it's recommended as it adds new modding features meaning newer mods may not be compatible with just Afterbirth+.


### Do Rebirth / Afterbirth mods work with Afterbirth+ / Repentance? {: .subHeader}
This depends on the mod, but in most cases, they don't work.


### How do I open the Debug console? {: .subHeader}
In Afterbirth+, the Debug console is accessable as long as you have at least one mod activated.

In Repentance, you enable the Debug console by setting the options.ini option "EnableDebugConsole" from "0" to "1".

To open the console, press the **grave/tilde (~)** key while in a run, or the appropriate key according to the keyboard used, as listed [**HERE**](https://bindingofisaacrebirth.gamepedia.com/Debug_Console).

For a list of console commands, take a look at the wiki: [BoI Wiki](https://bindingofisaacrebirth.gamepedia.com/Debug_Console)


### How do I get started modding Isaac? (getting started) {: .subHeader}

We generally recommend that people watch the Lytebringr's series of [video tutorials on YouTube](https://www.youtube.com/playlist?list=PLMZJyHSWa_My5DDoTQcKCgs475xIpQHSF). These videos were made for Afterbirth+, but not much has changed now that Repentance DLC is out, so they are still your best bet for learning the ropes.

The main difference is that the location of [the mods directory has changed](#where-is-the-directoryfolder-for-mods-located).

Other resources:

- [Written tutorials](../tutorials/ExampleProject.md)
- [Collection of useful tools](../tutorials/Tools.md)
- [AgentCucco's Video Tutorials](https://www.youtube.com/playlist?list=PLUYzSIp7NO8cEer2FmtxSXlXoMFirvYDN) (playlist)
- Alternative modding language [IsaacScript](https://isaacscript.github.io/): [text-based tutorial](https://isaacscript.github.io/docs/example-mod)

### Where can I see the code for [some vanilla item] or [some vanilla mechanic]? {: .subHeader}

You can't. The game is programmed in the C++ programming language and the source code is proprietary.

This means that if you want to make a custom item that works in a similar way to a vanilla item, you will have to completely re-implement it yourself from scratch. (You can often use the wiki as an implementation reference.)

This also means that if you want to change the way a vanilla item works, you will often have to re-implement the item from scratch.

### Who can I hire/comission to program an Isaac mod for me? {: .subHeader}

Some members of the community can be comissioned to create mods for you. To get up-to-date informations on this topic, join the **[:fontawesome-brands-discord: Official BoI Discord-Server](https://discord.gg/isaac)**.


## Assets

### Where is the directory/folder for mods located? {: .subHeader}
All mods are located in this location:

=== ":fontawesome-brands-windows: **Windows**"

    ```
    Repentance:
    ...\Steam\steamapps\common\The Binding of Isaac Rebirth\mods\

    Afterbirth+:
    C:\Users\[YOURUSERNAME]\Documents\My Games\Binding of Isaac Afterbirth+ Mods\
    ```

=== ":fontawesome-brands-apple: **Mac OS**"

    ```
    Afterbirth+:
    /Users/[YOURUSERNAME]/Library/Application Support/Binding of Isaac Afterbirth+ Mods
    ```

=== ":fontawesome-brands-linux: **Linux**"

    ```
    Afterbirth+:
    /Steam/steamapps/compatdata/250900/pfx/drive_c/users/steamuser/Documents/My Games/Binding of Isaac Afterbirth+ Mods
    ```


### How do I unpack the game files? How do I use the resource extractor? {: .subHeader}

By default, the game's resources are located here:

```
C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\resources
```

However, this directory will be mostly empty unless you run the provided resource extractor. It is located here:

```
C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\tools\ResourceExtractor\ResourceExtractor.exe
```

Once you run the extractor, the resources directory will fill up with all of the XML files, ANM2 files, images, and other various files that the game uses.

???+ info
    Note that you also have to re-run the resource extractor every time that there is a vanilla patch.




### How do I make sprites in the Isaac style? {: .subHeader}
A good point to start, is by watching [this video](https://www.youtube.com/watch?v=cJ68vYqzSm0) by LeatherIceCream who explains the process fast and easy to understand.

In addition its best to use ingame sprites as a reference for styles, colors and dimensions.


### What is the ID of [the sound effect that I care about]? {: .subHeader}

Use [this mod](misc/sounds-display.lua), which will tell you what the ID of any currently playing sound effect is.


### How do I overwrite vanilla music? {: .subHeader}

- For normal music replacement, you can blow away the respective vanilla resource files.
- For dynamic replacement, use Taz's [Music Mod Callback](https://steamcommunity.com/sharedfiles/filedetails/?id=2491006386).


### What are ANM2 files? {: .subHeader}

- In Isaac, animations are represented by anm2 files in the `resources/gfx` folder.
- Each entity in the game has an associated anm2 file.
- Additionally, UI elements are rendered using various anm2 files (in the `resources/gfx/ui` folder).
- anm2 files are XML files with a different file extension.
- To edit the vanilla animations or add new animations, you can:
  - Edit the files directly using a text editor. (Kilburn does this.)
  - Edit the files using the provided Isaac Animation Editor, which is located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\tools\IsaacAnimationEditor\IsaacAnimationEditor.exe`

### How do I edit rooms? {: .subHeader}

The official room editor is provided with the game and is located at:<br>
`C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\tools\RoomEditor\RoomEditor.exe`

This was the tool that Edmund used to create all of the rooms for Rebirth and Afterbirth. However, the official editor is not very good and does not work properly with any Repentance rooms.

In 2014, Chronometrics made a 3rd party room editor called [Basement Renovator](https://github.com/Basement-Renovator/Basement-Renovator) to improve upon the official editor. It is open-source and is located on GitHub. Since Basement Renovator is so much better than the official room editor, even the official developers now use Basement Renovator. (This is why none of the Repentance rooms will work in the official editor.)

Basement Renovator is written in Python, so you can either run it from source or download a pre-bundled exe file from the [releases page](https://github.com/Basement-Renovator/Basement-Renovator/releases).

## Coding

### How do I do X? How do I code X? {: .subHeader}

The fastest way to figure out how to do something is to download a few mods that provide similar functionality to what you want to do, and then study the code.

### What is a callback? {: .subHeader}

Mods affect the game by putting code inside of *callbacks*. Each callback fires when a particular event happens in the game. There are 72 different callbacks to choose from, so you have to choose the right one depending on what you want to do.

For example, the most basic callback is `MC_POST_GAME_STARTED`, which fires once at the beginning of a new run. You would put code in here to do something custom at the beginning of every run.

Another common callback that mods use is `MC_POST_UPDATE`, which fires on every single update frame (i.e. 30 times per second). You would put code in this callback for custom items that have constant effects.

Go through the [official docs](https://wofsauge.github.io/IsaacDocs/rep/enums/ModCallbacks.html) and read what all of the callbacks do so that you can get familiar with them.


### What is Single Line Responsibility (SLR)? {: .subHeader}

When writing code, put some effort into making it look nice and be easy to read for others, especially if you are showing it to other people or asking for help. In this vein, it is a good idea to follow the "single line responsibility" rule - meaning that **one line** should only do **one thing**. Read [this blog](https://midu.dev/single-line-responsability-haz-una-cosa-por-linea/) for more details about why SLR is great.


### How do I apply a costume to my character? {: .subHeader}

This is called a "null costume" and it is accomplished via the `EntityPlayer.AddNullCostume()` method. For more information, see [Lytebringr's 8th video](https://www.youtube.com/watch?v=R1CdCyGL1DQ&list=PLMZJyHSWa_My5DDoTQcKCgs475xIpQHSF&index=9).

???- example "Example code"
    The follow is an example of a mod adding a null costume:

    ```lua
    local MOD_NAME = "My Mod"

    -- For EntityType.ENTITY_PLAYER (1)
    local PlayerVariant = {
      PLAYER = 0,
      COOP_BABY = 1,
    }

    local PlayerTypeCustom = {
      FOO = Isaac.GetPlayerTypeByName("Foo"),
    }

    local NullItemIDCustom = {
      BAR = Isaac.GetCostumeIdByPath("gfx/characters/bar.anm2"),
    }

    local mod = RegisterMod(MOD_NAME, 1)

    function mod:postPlayerInit(player)
      local character = player:GetPlayerType()

      if (
        player.Variant == PlayerVariant.PLAYER
        and character == PlayerTypeCustom.FOO
      ) then
        player:AddNullCostume(NullItemIDCustom.BAR)
      end
    end
    mod:AddCallback(ModCallbacks.MC_POST_PLAYER_INIT, mod.postPlayerInit)
    ```



### How do I make the costume on my custom character persistent? {: .subHeader}

Use [Sanio's "Character Costume Protector" library](https://steamcommunity.com/sharedfiles/filedetails/?id=2541362255) for this, or study the source code and re-implement it yourself.

For a reference implementation, see [Andrew the Bunny Knight](https://steamcommunity.com/sharedfiles/filedetails/?id=2531089854).

### How do I create a new floor/level/stage? {: .subHeader}

Unfortunately, Isaac does not natively support modded custom floors. BudJMT and DeadInfinity have built a custom system called [StageAPI](https://github.com/Meowlala/BOIStageAPI15) that allows mods to add custom floors in a hacky way. However, StageAPI is not easy to use, so unless you are already an experienced Isaac modder & coder, you should stick to more simple projects.


### How do I modify the Devil Room / Angel Room chances? {: .subHeader}

There is no built-in way to do this, so you will have to get inventive. For the most control, you can delete all vanilla Devil/Angel doors and completely re-implement the system from scratch. Otherwise, you can temporarily give items to the player such as Goat Head or Rosary Bead, or use things like [Game.SetLastDevilRoomStage()](SetLastDevilRoomStage ) or [Level.SetRedHeartDamage()](https://wofsauge.github.io/IsaacDocs/rep/Level.html#setredheartdamage). You also might want to use [LevelStateFlags](https://wofsauge.github.io/IsaacDocs/rep/enums/LevelStateFlag.html).


### How do I get a familiar to follow the player like Brother Bobby does? {: .subHeader}

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


### How do you use StageAPI to add new bosses? {: .subHeader}

See [this screenshot](https://cdn.discordapp.com/attachments/205854782542315520/895485829458325604/unknown.png) from Xalum.

### How do I know when a player has picked up a collectible item? {: .subHeader}

There is no vanilla callback for this. As a workaround, you can check `EntityPlayer.IsItemQueueEmpty()` on every PostUpdate frame, and then check `EntityPlayer.QueuedItem` when it is not empty. Obviously, this will not work for items that never get queued.

For IsaacScript users, you can use the provided `[MC_POST_ITEM_PICKUP](https://isaacscript.github.io/docs/function-signatures-custom#mc_post_item_pickup)` callback.

If you want to implement this callback yourself, the source code / algorithm is provided [here](https://github.com/IsaacScript/isaacscript-common/blob/main/src/callbacks/itemPickup.ts).


### How do you tell what the entity type, variant, or subtype of a particular entity is? {: .subHeader}

You can:

1) Type "spawn x" into the in-game console. For example, "spawn confessional" would show that the Confessional entity has an identifier of 6.17. This means that it has an entity type of 6 and a variant of 17.
2) Or, you can ctrl+f in the "resources-dlc3/entities2.xml" file for the entity you want.


### How do I blindfold the player? {: .subHeader}

=== ":material-language-lua: Lua"
    If you are using Lua, then copy-paste the following function into your mod and/or standard library:

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
    If you are using [IsaacScript](https://isaacscript.github.io/), then all you have to do is call the `setBlindfold` function, like so:

    ```ts
    const player = Isaac.GetPlayer();
    setBlindfold(player, true);
    ```



## Lua

### How do I iterate over a list object from the API? {: .subHeader}

For example, in Lua:

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

    ```ts
    const game = Game();
    const level = game.GetLevel();
    const rooms = level.GetRooms();
    for (let i = 0; i < rooms.Size; i++) {
      const room = rooms.Get(i);
      // Do something with the room
    }
    ```


### What is the difference between `require` and `include`? {: .subHeader}
See the [docs](../tutorials/Using-Additional-Lua-Files.md).


### What is the difference between `pairs` and `ipairs`? {: .subHeader}

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


### What does the colon operator in Lua do? {: .subHeader}

In Lua, you can invoke module functions (i.e. functions that are attached to a table) in two different ways:

```lua
foo.bar()
foo:bar()
```

A period invokes the function in the "normal" way. A colon invokes the function in a special way that is syntactic sugar for passing the module as the first argument. For example, the following two function calls are equivalent:

```lua
foo.bar(foo, arg1, arg2)
foo:bar(arg1, arg)
```

The point of using the colon is that it is a convienence to save you from typing out the longer function call, at the cost of some obfucation for those not familiar with Lua. This feature is included in the language since doing this is such a common task. (Lua modules are often used to emulate Java-style classes.)

In general, it is idiomatic in Lua to invoke any function that is part of a module with a colon, and you should follow this convention when writing your own code. Additionally, most API class methods should be invoked with a colon. However, the `Isaac` class is an exception:

```lua
Isaac.DebugString("foo") -- Works fine
Isaac:DebugString("foo") -- Fails because the method does not expect the class as the first argument
```
