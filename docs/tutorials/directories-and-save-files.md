---
tags:
  - Tutorial
---
# [Tutorial] Directories & Save Files Explanation (Repentance)

This guide assumes you are on :fontawesome-brands-windows: Windows.

## 1 - The Game Directory

By default, the game directly is located at:

```
C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth
```
This contains the game executable, "isaac-ng.exe", as well as some other miscellaneous files.

<br>

## 2 - The "resources" Directory

- By default, this is located at:

```
C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\resources
```

- This is just a subdirectory of the game directory above.
- By default, this ONLY contains the "packed" directory and the "scripts" directory.
- The "packed" directory contains all kinds of game resources, like the sound effects and the graphics. (They are all packed into ".a" files.)
- The "scripts" directory contains some Lua scripts that are needed by the game in order to make mods work properly.
- You can put a "config.ini" file in the resources directory to set certain graphic options that are not available from the in-game options menu. For more information, see this thread: [https://steamcommunity.com/app/250900/discussions/0/613941122558099449/](https://steamcommunity.com/app/250900/discussions/0/613941122558099449/)
- Afterbirth+ and Repentance come with an unpacker program that will unpack all of the files in the "packed" directory. This is called the "Resource Extractor". If you want, you can run it and your resources directory will fill up with all kinds of stuff. Afterwards, you can examine and replace individual game assets. By default, the unpacker is located at:

```
C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\tools\ResourceExtractor\ResourceExtractor.exe
```

- After unpacking everything, if you edit or overwrite any custom game assets, they will permanently take effect. However, this will ONLY work if you rename the "packed" directory to something else, as the packed files take priority.
- Note that if a mod is enabled in the in-game "Mods" menu, and it has a resource file of the same name, it will overwrite what is in this directory.
- Also note that every time after Nicalis patches the game, you should nuke all of the unpacked files and redo this entire process from scratch, or else you will be playing on game files meant for a previous patch.

<br>

## 3 - The "resources-dlc3" Directory

- By default, this is located at:

```
C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\resources-dlc3
```

- This is similar to the "resources" directory, but it contains the files for Repentance. If a file is present in the "resources-dlc3" directory, it will take precedence over the same file in the "resources" directory.

<br>

## 4 - The Documents "Save Data" Directory

- By default, this is located at:

```
C:\Users\[username]\Documents\My Games\Binding of Isaac Repentance
```

- The "[username]" above refers to your Windows username.
- This folder contains the "log.txt" file, which is used by certain programs such as the Rebirth Item Tracker.
- This folder also contains the "inputconfigs.dat" file, which contains all your key bindings. (It is just a text file, so you can open it in Notepad to edit it if you want.)
- This folder also contains the "options.ini" file, which contains some values that you can set using the in-game menus. (This is also just a text file, so you can open it in Notepad to edit it if you want.)
- The "options.ini" file also contains some values that are NOT in the in-game menu. One such value is "SteamCloud". By default, it will have "SteamCloud=1".
- If "SteamCloud" is set to 1, the game will look for save data from the Steam save data directory, listed below as #5.
- If "SteamCloud" is set to 0, the game will look for save data from the same directory that the "options.ini" file is in (the "Documents" save data directory).

<br>

## 5 - The Steam "Save Data" Directory

- By default, this is located at:

```
C:\Program Files (x86)\Steam\userdata\[Steam ID]\250900\remote
```

- The "[Steam ID]" above refers to your Steam ID number. If you don't know it, just look inside the "userdata" directory, as there will probably only be one subdirectory there.

<br>

## #6 - The "mods" Directory

- By default, this is located at:

```
C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\mods
```

- This contains directories for each Steam Workshop mod that is installed.
- Mods that appear in the in-game "Mods" menu will correspond to the directories here.
- By clicking on the "Subscribe" button on a mod's Steam Workshop page, the respective mod will automatically get downloaded here (and be turned on the next time you launch the game).

<br>

## #7 - The "Cached Steam Mods" Directory

- By default, this is located at:

```
C:\Program Files (x86)\Steam\steamapps\workshop\content\250900
```

- This is where mods from the Steam Workshop get downloaded to before they are sent to the "real" mods directory.
- If you are unsubscribing from a mod for the purposes of redownloading it from Steam, you must also delete this directory in order to force a true redownload. Otherwise, Steam will just copy the mod from its cached directory.

<br>

## Should I have "SteamCloud" on or off?

- Either way is fine, but we recommend that you turn it off, since it will prevent your save files from accidentally being deleted in case Steam messes up. Also, it becomes easier to manage your save files, since they will just exist in the same directory as everything else (options.ini, log.txt, and so on).

<br>

## What are the save files called?

If you do not use SteamCloud, folder #4 will contain the files:

- persistentgamedata1.dat
- persistentgamedata2.dat
- persistentgamedata3.dat

If you use SteamCloud, folder #5 will contain the files:

- rep_persistentgamedata1.dat
- rep_persistentgamedata2.dat
- rep_persistentgamedata3.dat

These correspond to save file slots 1, 2, and 3 respectively. If an in-game save slot is blank, the corresponding ".dat" file may not exist.

Furthermore, each save file slot may have a corresponding ".dat" file that contains the status of the current run, so that it may be resumed by the "Continue" feature. These files are called:

- gamestate1.dat
- gamestate2.dat
- gamestate3.dat

Furthermore, the game occasionally makes backups of the various save files. It will prepend the date to the name of the save file. For example, this is the name of a slot 1 save file backed up on January 15th, 2017:

- 20170115.persistentgamedata1.dat

<br>

## Additional Reading

- This is a blog from Simon at Nicalis discussing some known issues: [https://steamcommunity.com/app/250900/discussions/0/613941122558099449/](https://steamcommunity.com/app/250900/discussions/0/613941122558099449/)

<br>

## :fontawesome-brands-apple: MacOS File Locations

Save data directory (for Afterbirth+):

```
/Users/[username]/Library/Application Support/Binding of Isaac Afterbirth+
```

Steam Cloud remote directory (for Afterbirth+):

```
/Users/[username]/Library/Application Support/Steam/userdata/[account id]/250900/remote
```

Unpacked resources directory (for Afterbirth+):

```
/Users/[username]/Library/Application Support/Steam/steamapps/common/The Binding of Isaac Rebirth/tools/ResourceExtractor
```
