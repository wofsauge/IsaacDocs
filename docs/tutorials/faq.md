# Modding FAQ

## Afterbirth+

### Do mods disable Achievements? {: .subHeader}
**Mods don't disable achievements**, as long as you have killed mom (Endboss of Necropolis or Depths 2) at least once on the savefile. Killing her on challenges or dailies doesnt count.

### How do i install a mod? {: .subHeader}
Simply press the "**subscribe**" button on the Workshop page. This will automatically download and install the mod. Just start your game again afterwards, and the mod will be listed in the "mods" menu in the main menu where it can be activated/deactivated.

### Do i need to have all DLCs installed to use mods? {: .subHeader}
**Yes**, you need the basegame "Rebirth", the first DLC "Afterbirth" and the second DLC "Afterbirth+" installed to use mods.

### Do Rebirth / Afterbirth mods work with Afterbirth+? {: .subHeader}
This depends on the mod, but in most cases, they don't work.

### How do i open the Debug console? {: .subHeader}
The Debug console is accessable as long as you have at least one mod activated. 

To open the console, press the **grave/tilde (~)** key while in a run, or the appropriate key according to the keyboard used, as listed [**HERE**](https://bindingofisaacrebirth.gamepedia.com/Debug_Console).

For a list of console commands, take a look at the wiki: [BoI Wiki](https://bindingofisaacrebirth.gamepedia.com/Debug_Console)

### Where can i find the mod files? {: .subHeader}
All mods are located in this location:

:fontawesome-brands-windows: **Windows**:
```lua
C:\Users\[YOURUSERNAME]\Documents\My Games\Binding of Isaac Afterbirth+ Mods\
```


:fontawesome-brands-linux: **Linux**:
```lua
/Steam/steamapps/compatdata/250900/pfx/drive_c/users/steamuser/Documents/My Games/Binding of Isaac Afterbirth+ Mods
```

### Mods are not visible in "mods" menu after subscription {: .subHeader}
if mods are not visible in the mods folder even after you subscribed to the mod on the Steam Workshop, it could be caused by the following:

1. You dont own all DLCs (Afterbirth and Afterbirth+). All Steam Workshop mods require those two DLCs to be installed in order for them to work correctly.

1. Your Windows / Mac Username does contain special characters, that are not part of the standard english alphabet. Since the game is not able to interpret those correctly, it cant find the mods folder. In order to fix this issue, you sadly have to create a new Windows User on your computer which name only contains english characters.

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
1. Find your Binding of Isaac Afterbirth+ Mods folder (See [here](#where-can-i-find-the-mod-files) )
1. Delete the folder of the broken mod
1. Open the game, then close it after it finished loading (intro cutscene plays)
1. Resubscribe to the mod
1. Open the game again. **DON'T** close the game when it seems to not respond anymore

This process will delete all instances of the mod files, allowing steam to try and download them all again.

