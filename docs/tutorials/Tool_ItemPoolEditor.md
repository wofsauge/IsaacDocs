---
tags:
  - Tools
  - Tutorial
---
# [Tutorial] Official ItemPool Editor

The official **Itempool Editor** tool can be found in the "Tools" folder inside your game files.

It can be used to edit the "itempools.xml" file of the game or create new ones.

???+ warning "Repentance Support"

    As of right now, the itempool editor delivered with the game is out-of-Date. It only contains the items till AB+ boosterpack 4. Therefore, its missing all the Repentance items, Itempools and ~25 AB+ items.

    ### How to Fix
    To Fix this issue, you can replace the "Config.ini" file of the Tool with the "Config.ini" file provided here: [Fixed Config.ini file for Repentance](../customData/ItemPoolEditor_Config_for_Rep.zip)


## UI
![](../images/itempool_editor.png){: width='400' }

1. **List of Items**: The item list contains all items of the game. If a name is written in **bold** letters, it means that this item is in the current itempool. **Double click** on an entry to add it to the currently selected itempool.

2. **Itempool Dropdown**: A dropdown menu to choose from all available itempools you can edit.

3. **Pool Content Table**: Lists all items that are in the selected itempool. **Slow double click** to edit the Weight, Decreased By and Remove On attributes.

4. **Buttons**: Use the **Remove** button to remove the selected item from the Itempool content table. Use the *Save** button to save the changes. Use the **Load** button to load an "itempools.xml" file

5. **Status bar**: Shows you informations about the selected item. This includes the chance of it being chosen from the pool and how often it can be drawn from the itempool.