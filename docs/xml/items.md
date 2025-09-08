---
tags:
  - File
---
# File "items.xml"

old tutorial: [https://www.reddit.com/r/themoddingofisaac/comments/3mub9c/ways_to_modify_items/](https://www.reddit.com/r/themoddingofisaac/comments/3mub9c/ways_to_modify_items/)

**Resource-Folder**{: .xmlInfo .red}: Using this file in a resource folder of a mod will replace the original file.

**Content-Folder**{: .xmlInfo .green}: Using this file in a content folder of a mod will add new items.


| Variable Name | Possible Values | Description |
|:--|:--|:--|
| id | int | Used for associating costumes and death-portrait/collection-page sprites with an item. |
| cache | string | Possible values : [firedelay, damage, speed, range, tearcolor, tearflag, color, size. shotspeed, all, luck, flying, weapon, familiars]. |
| name | string |  |
| description | string |  |
| gfx | string | Path to the item image. Must be a .png saved at a bit-depth of 32 bits. |
| tags | string | Multiple tags must be separated with a space; see below for possible values and descriptions. |
| bombs | int |  |
| keys | int |  |
| coins | int |  |
| hearts | int | Distinct from MaxHearts, must be granted alongside MaxHearts in order to grant filled heart containers. |
| soulhearts | int |  |
| blackhearts | int |  |
| maxhearts | int | Number of added empty heart containers. |
| maxcharges | int | When chargetype is set to `timed`, this attribute is used to define the cooldown of the item in frames. |
| chargetype | string | Possible values: [normal, timed, special]|
| cooldown | int | Number of frames until this item's associated CollectibleEffect is auto-removed if granted. CollectibleEffects are automatically granted by active items on use. |
| passivecache | bool | Calls a cache evaluation when picked up (used for acive items, e.g. Mom's Box). |
| special | bool |  |
| initcharge | int | How many charges should this active item have when first picked up (e.g. Everything Jar[ ](#){: .reporplus .tooltip .badge }). |
| devilprice | int | Possible values: ['1','2'] |
| shopprice | int |  |
| addcostumeonpickup | bool |  |
| persistent | bool | Determines whether the item's associated CollectibleEffect is retained when transitioning between rooms, or across save & continue. CollectibleEffects are automatically granted by active items on use. False by default. |
| achievement | int | Ties the item to be unlocked by a vanilla achievement. |
| quality | int | Possible values: ['0', '1', '2', '3', '4']. |
| craftquality | int | Possible values: ['-1', '0', '1', '2', '3', '4']. A value of -1 prevents this item from appearing in Bag of Crafting. |
| hidden | bool | Prevents the item from appearing in Death Certificate, or on the collection menu (e.g. Familiar-ItemType Damocles). |
| cleareffectsonremove | bool | Clears any effects of the item upon removal. Note: This is currently not used by any vanilla item. |

## Tags Documentation

| Tag Name | Description |
|:--|:--|
| dead | Dead things (for the Parasite unlock) |
| syringe | Syringes (for Little Baggy and the Spun! transformation) |
| mom | Mom's things (for Mom's Contact and the Yes Mother? transformation) |
| tech | Technology items (for the Technology Zero unlock) |
| battery | Battery items (for the Jumper Cables unlock) |
| guppy | Guppy items (Guppy transformation) |
| fly | Fly items (Beelzebub transformation) |
| bob | Bob items (Bob transformation) |
| mushroom | Mushroom items (Fun Guy transformation) |
| baby | Baby items (Conjoined transformation) |
| angel | Angel items (Seraphim transformation) |
| devil | Devil items (Leviathan transformation) |
| poop | Poop items (Oh Shit transformation) |
| book | Book items (Book Worm transformation) |
| spider | Spider items (Spider Baby transformation) |
| quest | Quest item (cannot be rerolled or randomly obtained) |
| monstermanual | Can be spawned by Monster Manual |
| nogreed | Cannot appear in Greed Mode |
| food | Food item (for Binge Eater) |
| tearsup | Tears up item (for Lachryphagy unlock detection) |
| offensive | Whitelisted item for Tainted Lost |
| nokeeper | Blacklisted item for Keeper/Tainted Keeper |
| nolostbr | Blacklisted item for Lost's Birthright |
| stars | Star themed items (for the Planetarium unlock) |
| summonable | Summonable items (for Lemegeton) |
| nocantrip | Can't be obtained in Cantripped challenge |
| wisp | Active items that have wisps attached to them (automatically set) |
| uniquefamiliar | Unique familiars that cannot be duplicated |
| nochallenge | Items that shouldn't be obtainable in challenges |
| nodaily | Items that shouldn't be obtainable in daily runs (since you can't have modded items in daily runs, this tag isn't neccessary) |
| lazarusshared | Items that should be shared between Tainted Lazarus' forms |
| lazarussharedglobal | Items that should be shared between Tainted Lazarus' forms but only through global checks (such as EntityPlayer:HasCollectible) |
| noeden | Items that can't be randomly rolled |
