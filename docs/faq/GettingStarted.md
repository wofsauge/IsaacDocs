---
tags:
  - FAQ
---

# Modding FAQ: Getting Started

## How do I get started modding Isaac? (getting started) {: .subHeader}

We generally recommend that people watch the [Lytebringr's series of video tutorials on YouTube](https://www.youtube.com/playlist?list=PLMZJyHSWa_My5DDoTQcKCgs475xIpQHSF). These videos were made after the Afterbirth+ DLC was released, but not much has changed now that Repentance DLC is out, so they are still your best bet for learning the ropes.

The main difference is that the location of [the mods directory has changed](#where-is-the-directoryfolder-for-mods-located).

Other resources:

- [Written tutorials](../tutorials/ExampleProject.md)
- [Collection of useful tools](../tutorials/Tools.md)
- [AgentCucco's Video Tutorials](https://www.youtube.com/playlist?list=PLUYzSIp7NO8cEer2FmtxSXlXoMFirvYDN) (playlist)
- [:material-language-typescript:IsaacScript "Green Candle" tutorial](https://isaacscript.github.io/main/example-mod)
- [catinsurance's Repentance Modding Tutorials](https://youtube.com/playlist?list=PLkIbky8_pFUpqAF9l7dh_YsEV-zpJ4q50)

## How do I make sprites in the Isaac style? {: .subHeader}

Watch [this video](https://www.youtube.com/watch?v=cJ68vYqzSm0) by LeatherIceCream, who explains the process.

## How do I open the debug console? {: .subHeader}

In Afterbirth+, the debug console is enabled as long as you have at least one mod activated.

In Repentance, the debug console is enabled according to the "EnableDebugConsole" setting in the options.ini file. By default, it is set to "0", so if you want to use the debug console, you must change it from "0" to "1". 
The options.ini file is located here:

=== ":fontawesome-brands-windows: **Windows**"

    ```
    Repentance+:
    C:\Users\[username]\Documents\My Games\Binding of Isaac Repentance+\options.ini
    
    Repentance:
    C:\Users\[username]\Documents\My Games\Binding of Isaac Repentance\options.ini

    Afterbirth+:
    C:\Users\[username]\Documents\My Games\Binding of Isaac Afterbirth+\options.ini
    ```

=== ":fontawesome-brands-apple: **Mac OS**"

    ```
    Repentance+:
    /Users/[username]/Library/Application Support/Binding of Isaac Repentance+\options.ini
    
    Repentance:
    C/Users/[username]/Library/Application Support/Binding of Isaac Repentance\options.ini

    Afterbirth+:
    /Users/[username]/Library/Application Support/Binding of Isaac Afterbirth+/options.ini
    ```

=== ":fontawesome-brands-linux: **Linux**"

    ```
    Repentance+:
    ~/.steam/steamapps/compatdata/250900/pfx/users/steamuser/Documents/My Games/Binding of Isaac Repentance+\options.ini
    
    Repentance:
    ~/.steam/steamapps/compatdata/250900/pfx/users/steamuser/Documents/My Games/Binding of Isaac Repentance\options.ini

    Afterbirth+:
    ~/.steam/steamapps/compatdata/250900/pfx/users/steamuser/Documents/My Games/Binding of Isaac Afterbirth+/options.ini
    ```
    


To open the console, press the **grave/tilde (~)** key while in a run. If you are on a non-English keyboard, see the [wiki page on the debug console](https://bindingofisaacrebirth.gamepedia.com/Debug_Console) for more information.

The wiki also has a [list of every console command](https://bindingofisaacrebirth.gamepedia.com/Debug_Console).

## Where is the directory/folder for mods located? {: .subHeader}

All mods are located in this location:

=== ":fontawesome-brands-windows: **Windows**"

    ```
    Repentance:
    C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\mods\

    Afterbirth+:
    C:\Users\[username]\Documents\My Games\Binding of Isaac Afterbirth+ Mods\
    ```

=== ":fontawesome-brands-apple: **Mac OS**"

    ```
    Afterbirth+:
    /Users/[username]/Library/Application Support/Binding of Isaac Afterbirth+ Mods
    ```

=== ":fontawesome-brands-linux: **Linux**"

    ```
    Afterbirth+:
    /Steam/steamapps/compatdata/250900/pfx/drive_c/users/steamuser/Documents/My Games/Binding of Isaac Afterbirth+ Mods
    ```

## How do I unpack the game files? How do I use the resource extractor? {: .subHeader}

By default, the game's resources are located here:

```
C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\resources
```

However, this directory will be mostly empty unless you run the provided resource extractor. It is located here:

```
C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\tools\ResourceExtractor\ResourceExtractor.exe
```

Once you run the extractor, the resources directory will fill up with all of the XML files, ANM2 files, images, and other various files that the game uses.

Note that you also have to re-run the resource extractor every time that there is a vanilla patch.

## What are ANM2 files? {: .subHeader}

- In Isaac, animations are represented by anm2 files in the `resources/gfx` folder.
- Each entity in the game has an associated anm2 file.
- Additionally, most UI elements are rendered using various anm2 files (in the `resources/gfx/ui` folder).
- anm2 files are XML files with a different file extension.
- To edit the vanilla animations or add new animations, you can either:
    - Edit the files directly using a text editor, which is what Repentance developer Kilburn did.
    - Edit the files using the provided Isaac Animation Editor, which is located at: `C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\tools\IsaacAnimationEditor\IsaacAnimationEditor.exe`

## I modified an XML file and the game crashes when I open it or when I go into a new run. {: .subHeader}

A crash means that the XML file is invalid, meaning that you messed up somewhere while editing the file. Start over from scratch and make tiny edits one at a time until you find the exact part that crashes the game, or use an xml validator such as [xmlvalidation.com](https://www.xmlvalidation.com/).

## How do you tell what the entity type, variant, or subtype of a particular entity is? {: .subHeader}

You can:

1. Type `spawn x` into the in-game console. For example, `spawn confessional` would show that the Confessional entity has an identifier of 6.17. This means that it has an entity type of 6 and a variant of 17.
2. Or, you can Ctrl+F in the `resources-dlc3/entities2.xml` file for the entity you want.

## How do I edit rooms? {: .subHeader}

In 2014, Chronometrics made a 3rd party room editor called [Basement Renovator](https://github.com/Basement-Renovator/Basement-Renovator) to improve upon the official editor. It is open-source and located on GitHub. The Repentance developers use this over the official editor, which is why Repentance rooms only work in Basement Renovator.

The official room editor is still provided with the game and is located at:

```
C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\tools\RoomEditor\RoomEditor.exe
```

Basement Renovator is written in Python, so you can either run it from source or download a pre-bundled exe file from the [releases page](https://github.com/Basement-Renovator/Basement-Renovator/releases).

## How do I overwrite vanilla music? {: .subHeader}

- For normal music replacement, you can blow away the respective vanilla resource files.
- For dynamic replacement, either:
    - Require [REPENTOGON](https://repentogon.com/) and use [this callback](https://repentogon.com/enums/ModCallbacks.html?h=music#mc_pre_music_play).
    - Use Taz's [Music Mod Callback](https://steamcommunity.com/sharedfiles/filedetails/?id=2491006386).
