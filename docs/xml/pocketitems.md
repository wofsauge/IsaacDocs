---
tags:
  - File
---
# File "pocketitems.xml"

**Resource-Folder**{: .xmlInfo .red}: Using this file in a resource folder of a mod will replace the original file.

**Content-Folder**{: .xmlInfo .green }: Using this file in a content folder will add new cards and pill effects.

`pocketitems.xml` is used for two significantly different purposes: Adding cards, and adding pill effects. These have different xml syntaxes, seen below.

## Cards & Runes

Cards are marked by `<card ... />`, like so:


```xml
<card type="tarot" pickup="1" description="Where journey begins" id="1" name="0 - The Fool" announcer="375" announcerdelay="60" mimiccharge="2" />
```
Runes use the same attributes as cards, but are marked by `<rune ... />` or the type equal `rune`. In the vanilla files, all runes except the soul stones use the `<rune>` tag and type. Soul stones use the `<card>` tag and the `rune` type, but seem to act the same as other runes regardless. An example for a rune would be:
```xml
<rune type="rune" pickup="3" achievement="89" description="Some description" id="32" name="Some Rune" announcer="341" mimiccharge="2" />
```


| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|name|string|The name of the card.|
|description|string|The description of the card.|
|hud|string|The name of the card's front animation in `content/gfx/ui_cardfronts.anm2`, which is only used in mods.|
|type|string|Either `tarot`, `tarot_reverse`, `suit`, `special`, `rune`, or `object`. All types other than `object` and `rune` can be mimicked with Blank Card, while cards of type `rune` can be mimicked with Clear Rune. [ ](#){: .reporplus .tooltip .badge }|
|mimiccharge|int|The amount of charge the card should take to mimic with Blank Card / Clear Rune. [ ](#){: .reporplus .tooltip .badge }|
|pickup|int|The entities2.xml subtype corresponding to this card's pickup. [ ](#){: .reporplus .tooltip .badge }|
|announcer|int|The sound ID to play when the card is used.|
|announcerdelay|int|The delay in frames between card use and the sound provided being played.|
|achievement|int|Ties the card to a vanilla achievement.|
|greedmode|bool|Is the pocketitem available in greedmode. Default = true|

In both Afterbirth+ and Repentance, when adding a custom card you must include the `hud` tag, and an anm2 in your mod's `content/gfx/` folder called `ui_cardfronts.anm2`. This anm2 must contain an animation with the same name as specified in the `hud` tag, which will be displayed in the HUD as your card's front. Once you've added a card to the game, you'll be able to get its id through lua by using the `Isaac.GetCardIdByName(string cardHudName)` function, which takes the name specified in the `hud` tag.

**If the card uses the same backside as an already existing pickup**, you should set `pickup` to the subtype of the existing pickup and not worry about `entities2.xml`. Otherwise, you can use the `pickup` tag in Repentance, to set the card's HUD and pickup visuals through a single anm2. In order to use it, you must add a matching `entities2.xml` entry with the tarot card type and variant (5.300), using the subtype specified in the `pickup` tag, as seen below:


In `pocketitems.xml`:
```xml
<card type="object" name="Custom Object" description="" hud="Custom Object" pickup="160"/>
```


In `content/entities2.xml`:
```xml
<entities anm2root="gfx/" version="5">
<entity anm2path="custom_object.anm2" baseHP="0" boss="0" champion="0" collisionDamage="0" collisionMass="3" collisionRadius="12" friction="1" id="5" name="Custom Object" numGridCollisionPoints="24" shadowSize="16" stageHP="0" variant="300" subtype="160">
	   <preload-snd id="8" /> <!-- BOOK_PAGE_TURN_12 -->
</entity>
</entities>
```


The anm2 specified in `entities2.xml` should have the animations HUD and HUDSmall, alongside general pickup animations. See `gfx/05.301_tarot card.anm2` in the vanilla resources for an example! Even if you put the `entities2.xml` in the `content` directory, you should add the `anm2` file in the `resources` directory, otherwise the game won't find it. For example, with the provided `entities2.xml`, you would need to place the animation file at `resources/gfx/custom_object.anm2`.

Note that the subtype used in `entities2.xml` and the `pickup` tag **cannot** be used to spawn your card, and will instead crash the game. You must spawn / give your card via the card id, which you can obtain from `Isaac.GetCardIdByName(string cardHudName)` as described above. You can also check your card's current ID easily in the console by typing `g kID` and checking autocomplete; the last base game card is `k97`, the Soul of Jacob, so modded ids will start at `k98`.

Unlike in Afterbirth+, cards added in `pocketitems.xml` get automatically added to the card pool.

## Pill Effects

Pill effects are significantly easier to add than cards, and are also automatically added to the pill pool when created. They are marked by `<pilleffect ... />`, like so:

```xml
<pilleffect announcer2="760" id="0" name="Bad Gas" announcer="328" class="1+" mimiccharge="1" />
```


| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|name|string|Name of the pill effect|
|description|string|Description of the pill effect (optional, used in I found pills)[ ](#){: .reporplus .tooltip .badge }|
|class|string|A number from 0 - 3, indicating Joke, Minor, Medium, or Major effects. A `+` or `-` can be appended to note whether the pill is positive or negative, or excluded to denote neutral pills.[ ](#){: .reporplus .tooltip .badge }|
|mimiccharge|int|Amount of charge the pill should take to mimic with Placebo[ ](#){: .reporplus .tooltip .badge }|
|announcer|int|Sound ID to play when the pill is used|
|announcer2|int|Sound ID to play when the pill is used as a horse pill[ ](#){: .reporplus .tooltip .badge }|
|announcerdelay|int|Delay in frames between pill use and the sound provided being played|
|achievement|int|Ties the pill effect to a vanilla achievement|
|greedmode|bool|Is the pocketitem available in greedmode. Default = true|


Example of a `pocketitems.xml` file that adds one new card and one new pill effect:

```xml
<pocketitems>
    <card type="object" name="Custom Object" description="It's custom!" hud="Custom Object" pickup="160"/>
    <pilleffect name="Damage Up" class="3+" mimiccharge="12" />
</pocketitems>
```
