---
tags:
  - Tutorial
---
# [Tutorial] Adding Costumes to items without LUA

#### :fontawesome-solid-code: Example mod & code can be found here:

[→ Download the example mod for this Tutorial ←](../customData/costumes%20examplemod.zip)

## Default costume types
### Defining items

Before adding a costume to an item or trinket, we first need to define items. This can be done by creating an empty **"items.xml"** file in your mods **"content"** folder. If that folder does not exist already, create it.

Then add the desired amount of items to your items.xml file. It could then look like this:
```xml
<items gfxroot="gfx/items/" version="1">
	<passive id="1" name="test item 1" description="Some passive item" gfx="testitem_1.png" />
    <active id="2" name="test item 2" description="Some active item" gfx="testitem_2.png" />
	<passive id="999" name="test item 999" description="Some passive item but high ID" gfx="testitem_999.png" />
	<familiar id="3" name="test item 3" description="Some familiar item" gfx="testitem_3.png" />
	<trinket id="4" name="test item 4" description="Some trinket" gfx="testitem_4.png" />
</items>
```
Note that we also defined IDs for each item. **Those IDs are used to assign the Items to their costume!**

IDs located in a "content/items.xml" file are only locally used by the mod. They dont affect other mods and will **NOT** override existing vanilla items! They will also not define their ingame ID!

### Defining the costumes

Now that we defined some items, we now define our costumes in a **"costumes2.xml"** file.

**IMPORTANT:** The costume ID and costume Type must be equal to the item id and item type!
```xml
<costumes anm2root="gfx/">
	<!-- Load order is top to bottom. It is NOT based on the id -->
    <costume id="1" anm2path="characters/test_costume_1.anm2" type="passive" />
    <costume id="2" anm2path="characters/test_costume_2.anm2" type="active" />
    <costume id="999" anm2path="characters/test_costume_999.anm2" type="passive" />
    <costume id="3" anm2path="characters/test_costume_3.anm2" type="familiar" />
    <costume id="4" anm2path="characters/test_costume_4.anm2" type="trinket" />
</costumes>
```

### Effects of the item type to the costume:

|Itemtype|Effect|
|--- |--- |
|**passive**|Costume gets added when the pickup animation is finished playing. Costumes gets removed, when the item is removed.|
|**active**|Costume gets added when the item is used. It gets removed when you change the room.|
|**trinket**|Costume gets added when the pickup animation is finished playing. Costumes gets removed, when the trinket is removed.|
|**familiar**|Costume gets added when the pickup animation is finished playing. Costumes gets removed, when the item is removed.|

#### Further Informations:

*   If a costumeID can't be associated with an itemid, the game crashes.
*   **Transformations** still must be added using the Null Costume method (LUA-based)
*   Costumes of type **none** actually have a null item associated with it. These Nullcostumes can be added using LUA.

* * *

## Adding Nullcostumes

Nullcostumes are costumes that dont have an actual item attached to them. Therefore, they can be used to add temporary costumes like for example Transformations.

The following code adds a nullcostume to the player in two different ways. Choose the one that fits your neededs.

### :fontawesome-solid-code: costumes2.xml {: .subHeader .example_code}

Define a null costume in the "costumes2.xml" file by setting the type to "none". DONT set an ID!
```xml
<costumes anm2root="gfx/">
    <costume anm2path="characters/some_null_costume.anm2" type="none" />
</costumes>
```
### :fontawesome-solid-code: main.lua {: .subHeader .example_code}

Get the automatically generated CostumeID of the null-Costume, and then apply it to the player

```lua
-- get the internal costumeID
    NullItemID.ID_SOME_NULL_COSTUME = Isaac.GetCostumeIdByPath("gfx/characters/some_null_costume.anm2")

-- adding a nullcostume using "AddNullCostume" (persistent till its removed / run is restarted)
function mod:myFunction1(player)
    print("adding null costume")
    if(somethingHappend) then
        player:AddNullCostume (NullItemID.ID_SOME_NULL_COSTUME)
    end
    -- removing the null costume
    if(somethingDifferentHappend) then
        player:TryRemoveNullCostume(NullItemID.ID_SOME_NULL_COSTUME)
    end
end
mod:AddCallback(ModCallbacks.MC_POST_PLAYER_UPDATE, mod.myFunction1, 0)

-- adding a nullcostume using "NullEffects" (persists for current room and gets removed afterwards)
function mod:myFunction2(player)
    if not player:GetEffects():HasNullEffect(NullItemID.ID_SOME_NULL_COSTUME) then
        print("adding null costume") -- will get triggered everytime the room is changed
        player:GetEffects():AddNullEffect(NullItemID.ID_SOME_NULL_COSTUME, true)
    end
end
mod:AddCallback(ModCallbacks.MC_POST_PLAYER_UPDATE, mod.myFunction2, 0)
```

* * *

Special thanks to _**Piber20**_ and _**JSG**_ for figuring out these methods!