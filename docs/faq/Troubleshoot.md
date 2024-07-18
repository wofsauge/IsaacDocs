---
tags:
  - FAQ
---

# Modding FAQ: Troubleshooting

## Why is my sprite showing up in-game as a black or red square? {: .subHeader}

This happens when the sprite is saved with the wrong bit depth. Set it at 32-bit depth specifically. **Don't set it to be "Automatic".**

=== "![paint.net](misc/paintNetIcon.png) **Paint.NET**"

    ![paint.net](misc/32bit_paintNET.png)

=== "![photoshop](misc/photoshopIcon.png) **Photoshop**"

    ![photoshop](misc/32bit_photoshop.png)


## Why is my character/familiar/enemy invisible in game? {: .subHeader}

Files must go into specific directories, or they won't work. It's likely you entered the file path incorrectly when providing the `.anm2` file for your entity. Note that in Repentance, the location of [the mods directory is different](./GettingStarted.md#where-is-the-directoryfolder-for-mods-located) from where it was located in Afterbirth+.

## How do I troubleshoot my code? {: .subHeader}

The tried-and-true method to figure out almost any bug is called "print debugging". In Isaac, this means printing out a bunch of messages to the log.txt file (or the debug console using `print()`) so that you can view it and see which parts of your code are being executed, and which are not. So, go to a bunch of places in your code and add `Isaac.DebugString("GETTING HERE 1")`, `Isaac.DebugString("GETTING HERE 2")`, and so on. Then, run your code (i.e. walk around in-game and trigger the bug), and study the log.txt file to try and see what is happening.

Often times, the reason that your code is not working is that your variables are not what you think they are. So, print out what the variables are at each step of the way so that you can confirm that they are what you think they are. Use something along the lines of: `Isaac.DebugString("GETTING HERE - FOO IS: " .. tostring(foo))`

There is a log viewer built in to [REPENTOGON](https://repentogon.com/). You might also want to use a log viewer like [this one by Zamiel](https://github.com/Zamiell/isaac-log-viewer) or [this one for Afterbirth+ by pipe01](https://github.com/pipe01/abp-log/releases/tag/v0.3).

## My mod is causing the game to crash. How do I figure out which line of code is causing the crash? {: .subHeader}

First, check out the log.txt file for clues as to why the game is crashing. However, in the vast majority of cases, the log will not show any helpful information when the game crashes.

If you are programming your mod in Lua, then your only option is to insert a lot of print statements to try and narrow down where the crash is occurring.

If you are programming your mod in :material-language-typescript:TypeScript using the [IsaacScript framework](https://isaacscript.github.io/), then you can use [this crash debug plugin](https://github.com/IsaacScript/isaacscript/blob/main/src/plugins/addCrashDebugStatements.ts) that will put the exact line that the mod is crashing at in the log.txt, which is extremely handy.