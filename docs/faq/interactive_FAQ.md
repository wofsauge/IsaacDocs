---
tags:
  - FAQ
---
# Interactive Mod installation fixing
This page provides an interactive debugging tool, which helps you to find out how to fix the most common issues that cause a mod to not work correctly.

## Interactive FAQ

[](#){: .interactiveFAQ }

[Restart Questionaire :material-restart:](javascript:setQuestion(&#39;START&#39;)){ .md-button }



<script>
INTERACTIVE_questions = {
    "START" : {
      text: "Can you see a 'Mods' menu in your main menu screen?",
      image: "../images/faq/main_menu_mods.png",
      answers: [
        { text: "Yes", link: "MOD_MENU_1" },
        { text: "No", link: "DLC_MISSING" },
        { text: "Game crashes", link: "GENERIC_CRASH" },
      ],
    },
    "GENERIC_CRASH" : {
      text: "When does the crash happen?",
      answers: [
        { text: "On game launch", link: "CRASH_STARTUP" },
        { text: "when loading a savegame", link: "CRASH_CHAR_CONTINUE" },
        { text: "when starting a run", link: "CRASH_RUN" },
        { text: "while playing the game", link: "CRASH_RUN" },
      ],
    },
    "CRASH_STARTUP" : {
      text: "When the game crashes directly when launching the game, this means that an invalid '.xml' file is inside one of the mods you have installed. Please unsubscribe or deinstall all mods you have installed in the timeframe between the crash and the game working fine.",
    },
    "CRASH_CHAR_CONTINUE" : {
      text: "A crash happening when loading a savegame is most likely caused, by having a continuable run active, which was played with a modded character which was deinstalled recently.<br>Please reinstall the character mod and start a run with a vanilla character, for example Isaac.",
    },
    "CRASH_RUN" : {
      text: 'A crash happening on starting a run or while playing is most likely caused by a mod encountering a critical error. Please contact the mod creator, or visit the Modding Discord server and ask for help: <a href="https://discord.gg/KbevtvgD4z">Join the Official Modding Of Isaac Discord-Server</a>',
    },
    "DLC_MISSING" : {
      text: "You need to have at least the 'Afterbirth+' DLC or 'Repentance' installed to use Steam Workshop mods.<br>To get mods compatible with the base game (Rebirth) or Afterbirth (DLC 1), please check out <a href=\"https://moddingofisaac.com/\">https://moddingofisaac.com/</a>",
      image: "../images/faq/abp_rep.png",
    },
    "MOD_MENU_1" : {
      text: "Does the mod in question appear on the mods menu?",
      image: "../images/faq/menu_mods.png",
      answers: [
        { text: "Yes", link: "MOD_MENU_2" },
        { text: "No", link: "INSTALL" },
      ],
    },
    "INSTALL" : {
      text: "On what plattform do you own the game on?",
      answers: [
        { text: "Steam", link: "WORKSHOP_INSTALL" },
        { text: "Epic Games or GOG", link: "MANUAL_INSTALL" },
        { text: "Pirated & Others", link: "MANUAL_INSTALL" },
      ],
    },
    "WORKSHOP_INSTALL" : {
      text: 'Make sure you have subscribed to the mod on the Steam Workshop and have relaunched the game afterwards.',
      answers: [
        { text: "Still doesnt show up", link: "ERROR_STEAM_WORKSHOP" },
      ],
    },
    "ERROR_STEAM_WORKSHOP" : {
      text: 'Do you only have Afterbirth+ installed and does your Windows username contain letters that are not in the English alphabet?',
      answers: [
        { text: "Non English characters", link: "WINDOWS_USER" },
        //{ text: "I have Repentance", link: "INSTALL" },
      ],
    },
    "WINDOWS_USER" : {
      text: "If your Windows username contain non-English letters, mods cant be found by the game when only Afterbirth+ DLC is installed. To fix this issue here are some solutions:<br>\
      <ul><li>Create a new Windows user that only has english letters in its name. Then play the game on this user account</li> \
      <li>Buy the 'Repentance' DLC</li></ul>",
    },

    "MANUAL_INSTALL" : {
      text: 'Mods for Epic Games, GOG or Cracked games need to be installed manually. Here is a guide on how to install mods <br> \
      <ol><li>Download the mod. Some mods do offer download links via Github or file sharing sites. If that is not the case, you can use a steam Workshop downloader tool of your choice.</li>\
<li>If needed, extract the content of the ".zip" file you downloaded into a seperate folder. </li>\
<li>Put the extracted folder into your mods folder. The folders are:<br>\
   <b>Repentance</b>: ..\\steamapps\\common\\The Binding of Isaac Rebirth\\mods\\<br> \
   <b>Afterbirth+</b>: ..\\Documents\\My Games\\Binding of Isaac Afterbirth+ Mods\\<br></li>\
<li>Make sure the <b>"metadata.xml"</b> file of the mod is right at the top most level of the folder you copied into the mods-folder, making the folder structure looking like this: <br>...\\The Binding of Isaac Rebirth\\mods\\[My Cool Mod folder]\\metadata.xml</li></ol><br>\
The folder structure should now look like shown in the screenshot.',
      image: "../images/faq/manual_install.png",
    },
    "MOD_MENU_2" : {
      text: "What color does the mod have in the mod list?",
      image: "../images/faq/menu_mods.png",
      answers: [
        { text: "Looks like 'a deactived mod'", link: "MOD_NOT_ACTIVE" },
        { text: "Looks like 'an active mod'", link: "MODS_NOT_WORK" },
      ],
    },
    "MOD_NOT_ACTIVE" : {
      text: 'Press tab on the mod\'s list until mods become dark, if the mod in question is still faint then scroll down and press space on it until its dark.',
      image: "../images/faq/menu_mods.png",
    },
    "MODS_NOT_WORK" : {
      text: 'Do most of your installed and enabled mods not work?',
      answers: [
        { text: "Yes", link: "VERIFY_CACHE" },
        { text: "No, most work fine", link: "CONSOLE_ERROR" },
      ],
    },
    "VERIFY_CACHE" : {
      text: 'Some of your game files might be corrupted. Please <a href="https://inxile.zendesk.com/hc/en-us/articles/115004662908">verify the game files</a>, restart your game and try again.',
    },
    "CONSOLE_ERROR" : {
      text: 'Do you see any Error messages in the debug console?<br>You can learn on how to open the console here: <a href="https://bindingofisaacrebirth.fandom.com/wiki/Debug_Console">Binding of Isaac Wiki</a>',
      answers: [
        { text: "Yes", link: "SEND_ERROR_TO_CREATOR" },
        { text: "No", link: "UNKNOWN_REASON" },
      ],
    },
    "SEND_ERROR_TO_CREATOR" : {
      text: 'The Mod doesnt work, because it encounters an error, please take a screenshot of the error message or write it down and send it to the mod developer.',
    },
    "UNKNOWN_REASON" : {
      text: 'There seems to be another unknown reason for the mod to not work. Please contact the mod creator, or visit the Modding Discord server and ask for help: <a href="https://discord.gg/KbevtvgD4z">Join the Official Modding Of Isaac Discord-Server</a>',
    },
  };
    </script>