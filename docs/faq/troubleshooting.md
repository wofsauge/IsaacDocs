# Troubleshooting FAQ

### Why is my sprite showing up in-game as a black or red square? {: .subHeader}

This happens when the sprite is saved with the wrong bit depth. Set it at 32-bit depth specifically. (Don't set it to be "Automatic".)


### Mods are not visible in "mods" menu after subscription {: .subHeader}
if mods are not visible in the mods folder even after you subscribed to the mod on the Steam Workshop, it could be caused by the following:

1. You dont own all DLCs (Afterbirth and Afterbirth+). All Steam Workshop mods require those two DLCs to be installed in order for them to work correctly.

2. (Only in AB+:) Your Windows / Mac Username does contain special characters, that are not part of the standard english alphabet. Since the game is not able to interpret those correctly, it cant find the mods folder. In order to fix this issue, you sadly have to create a new Windows User on your computer which name only contains english characters.

### A mod doesn't work correctly {: .subHeader}
If a mod doesn`t work for you, there are multiple possible solutions:

1. Check if the mod is listed and enabled in the "mods" menu. See the question aboth if that is not the case.
2. Close the game, unsubscribe from the mod on the Workshop, delete the Mod
3. Check if the Debug Console contains any Error messages. [How to open the Console](https://bindingofisaacrebirth.gamepedia.com/Debug_Console).

    * If the error message reads  `... attempt to call a nil value (global 'RegisterMod')`, your game files are corrupt and you need to do **Step 5**.

4. Disable all other mods you have installed and see if one of those caused any errors.

5. Execute the "Verify Game cache files" function in steam for the Game. Step by step guide can be found here Verify Game Cache Files [inxile.zendesk.com](https://inxile.zendesk.com/hc/en-us/articles/115004662908-Verify-game-cache-files-Steam-)


### A big mod has invisible enemies, and everything seems broken {: .subHeader}
It is highly likely that this is due to Steam not downloading all of the mod's files, rather than any error in the mod.

Here are a couple of steps you can take to try to fix it:

1. Close the game
1. Unsubscribe from the mod on Steam
1. Find your mods folder (See [here](#where-can-i-find-the-mod-files) )
1. Delete the folder of the broken mod
1. Open the game, then close it after it finished loading (intro cutscene plays)
1. Resubscribe to the mod
1. Open the game again. **DON'T** close the game when it seems to not respond anymore

This process will delete all instances of the mod files, allowing steam to try and download them all again.


### Why isn't my code working? How do I know when errors occur? Where is the log.txt file located? {: .subHeader}

Lua is an interpreted language, which means that if you make a typo or have otherwise bad code, you will only be able to discover it once the program actually runs. If the Lua interpreters encounters an error, it will write it to the game's log.txt file.

By default, this file is located at: `C:\Users\[username]\Documents\My Games\Binding of Isaac Repentance\log.txt`

Open this file and search it carefully for Lua-related errors. (Ctrl + f for "error" is a good start.) This will often tell you the line number that you messed up on.

It is also recommended to set `FadedConsoleDisplay=1` in the options.ini file so that it is a little bit more easy to discover errors while you play.

For people comfortable with command-line applications, use my [isaac-log-viewer](https://github.com/Zamiell/isaac-log-viewer) script and have it running on a second monitor as you code & test.


### When is the log.txt cleared? {: .subHeader}

Every time that you open the game, all of the contents of the log.txt is deleted. Thus, if you need information from the log after a bug occurs, make sure that you do not re-launch the game.


### How do I troubleshoot my code? {: .subHeader}

When you write programs, they may not work right away. Your first reaction should not be to paste a bunch of code into Discord and ask "why doesn't this work?". Doing that means you aren't putting forth very much effort to try and solve the problem on your own.

The tried-and-true method to figure out almost any bug is called "print debugging". In Isaac, this means printing out a bunch of messages to the log.txt file so that you can view it and see which parts of your code are being executed, and which are not. So, go to a bunch of places in your code and add `Isaac.DebugString("GETTING HERE 1")`, `Isaac.DebugString("GETTING HERE 2")`, and so on. Then, run your code (i.e. walk around in-game and trigger the bug), and study the log.txt file to try and see what is happening.

Often times, the reason that your code is not working is that your variables are not what you think they are. So, print out what the variables are at each step of the way so that you can confirm that they are what you think they are. Use something along the lines of: `Isaac.DebugString("GETTING HERE - FOO IS: " .. tostring(foo))`


### I modified an XML file and the game crashes when I open it or when I go into a new run. {: .subHeader}

A crash means that the XML file is invalid, meaning that you messed up somewhere while editing the file. Start over from scratch and make tiny edits one at a time until you find the exact part that crashes the game.

Another helpful troubleshooting tool is validators like [xmlvalidation.com](https://www.xmlvalidation.com/).


### I enabled a mod and now my game is crashing. How can I fix this? {: .subHeader}

You can try looking through the log.txt file to see if anything interesting is there. However, in the vast majority of cases, the log will not show any helpful information when the game crashes.

Instead, you can find the problem by disabling your mods one by one until you find the exact mod that is causing the crash. Then, you can report it to the developer of the mod, or try to manually fix the code yourself.


### My mod is causing the game to crash. How do I figure out which line of code is causing the crash? {: .subHeader}

First, check out the log.txt file for clues as to why the game is crashing. However, in the vast majority of cases, the log will not show any helpful information when the game crashes.

If you are programming your mod in Lua, then your only option is to insert a lot of print statements to try and narrow down where the crash is occurring.

If you are programming your mod in TypeScript using the [IsaacScript framework](https://isaacscript.github.io/), then you can use [this crash debug plugin](https://github.com/IsaacScript/isaacscript/blob/main/src/plugins/addCrashDebugStatements.ts) that will put the exact line that the mod is crashing at in the log.txt, which is extremely handy.
