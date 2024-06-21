---
tags:
  - FAQ
---

# Modding FAQ: Basic Information

## How do I install a mod? {: .subHeader}

Simply press the "**Subscribe**" button on the mod's Steam Workshop page. This will automatically download and install the mod. Just start your game again afterwards, and the mod will be listed in the "Mods" menu in the main menu where it can be activated/deactivated.

## Why is a mod that I subscribed to not visible in the "mods" menu? {: .subHeader}

If mods are not visible in the mods folder even after you subscribed to the mod on the Steam Workshop, it could be caused by the following:

1. You do not own Afterbirth and Afterbirth+. All Steam Workshop mods require those two DLCs to be installed in order for them to work correctly.

2. The game did not install the mod correctly. Try uninstalling the mod, launching the game and waiting for it to reach the intro cutscene/title screen, closing the game, installing the mod again, then launching the game once more. If that doesn't work, try restarting steam.

3. **(Only in Afterbirth+)** Your Windows / Mac username contains characters that are not part of the standard English alphabet. Since the game is not able to interpret those correctly, it will not be able to find the mods folder. In order to fix this issue, you have to create a new user on your computer which name only contains English characters.

## I enabled a mod and now my game is crashing. How can I fix this? {: .subHeader}

You can try looking through the [log.txt file](#my-mod-or-a-mod-i-downloaded-is-causing-errors-where-is-the-logtxt-file-located--subheader) to see if anything interesting is there. However, in the vast majority of cases, the log will not show any helpful information when the game crashes.

Instead, you can find the problem by disabling your mods one by one until you find the exact mod that is causing the crash. Then, you can report it to the developer of the mod, or try to manually fix the code yourself.

Note that whenever you enable or disable a mod, you should completely close and re-open the game (because the game does not load resources properly when you enable/disable a mod via the in-game menu).

## Do mods disable achievements? {: .subHeader}

**Mods do not disable achievements**, as long as you have killed Mom (i.e. the boss of Depths II) at least once on the save file. Killing Mom on challenges or daily runs does not count.

## Do I need to have all of the DLCs installed to use mods? {: .subHeader}

You must have at least the base game (Rebirth), the first DLC (Afterbirth), and the second DLC (Afterbirth+) installed to use mods.

The third DLC (Repentance) is not required, but it is recommended, as since it adds new modding features, many new mods are not backwards compatible with Afterbirth+.

## Do Rebirth / Afterbirth mods work with Afterbirth+ / Repentance? {: .subHeader}

This depends on the mod. However, in most cases, they do not work.

## My mod or a mod I downloaded is causing errors. Where is the log.txt file located? {: .subHeader}

If the Lua interpreters encounters an error in the code, it will write it to the game's log.txt file. As a player, you can provide this file to the mod's developer, and as the mod developer, you can use it to pinpoint what line causes the error.

By default, this file is located at:

```
C:\Users\[username]\Documents\My Games\Binding of Isaac Repentance\log.txt
```

Open this file and search it carefully for Lua-related errors. (Ctrl + F for "error" is a good start.) This will often tell you the line number that you messed up on.

## When is the log.txt cleared? {: .subHeader}

Every time that you open the game, all of the contents of the log.txt is deleted. Thus, if you need information from the log after a bug occurs, make sure that you do not re-launch the game.

## Where is the options file? (options.ini) {: .subHeader}

By default, the options.ini file is located at:

```
C:\Users\[username]\Documents\My Games\Binding of Isaac Repentance\options.ini
```

## Who can I hire/commission to program an Isaac mod for me? {: .subHeader}

Some members of the community can be hired to create mods. For specific recommendations, you can ask in the **[:fontawesome-brands-discord: official Discord server](https://discord.gg/isaac)**.