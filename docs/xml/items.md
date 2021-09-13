# File "items.xml"

old tutorial: [https://www.reddit.com/r/themoddingofisaac/comments/3mub9c/ways_to_modify_items/](https://www.reddit.com/r/themoddingofisaac/comments/3mub9c/ways_to_modify_items/)

**Resource-Folder**{: .xmlInfo .red}: Using this file in a resource folder of a mod will replace the original file.

**Content-Folder**{: .xmlInfo .green}: Using this file in a content folder of a mod will add new items.


| Variable Name | Possible Values | Description |
|:--|:--|:--|
| id | int | used for adding costumes to items (don't use ID otherwise!)
| cache | string | Possible values : [firedelay, damage, speed, range, tearcolor, tearflag, color, size. shotspeed, all, luck, flying, weapon, familiars]
| name | string |  |
| description | string |  |
| gfx | string | path to the item image |
| tags | string | multiple tags must be separated with a space; see below for possible values and descriptions |
| bombs | int |  |
| keys | int |  |
| coins | int |  |
| hearts | int | number of healed red hearts |
| soulhearts | int |  |
| blackhearts | int |  |
| maxhearts |  | number of added heart containers (not full by default) |
| maxcharges | int | |
| chargetype | string | Possible values: [normal, timed, special]|
| cooldown | int | frames duration of the effect |
| passivecache | bool | calls a cache evaluation when picked up (Ex: mom's box) |
| special | bool |  |
| initcharge | int | (Example: Everything Jar[ ](#){: .rep .tooltip .badge }) |
| devilprice | int | Possible values: ['1','2'] |
| shopprice | int |  |
| addcostumeonpickup | bool |  |
| persistent | bool | allows the effect to persist between rooms |
| achievement | int | tie the item to be unlocked by a vanilla achievement |
| quality | int | Possible values: ['0', '1', '2', '3', '4']
| hidden | bool | Prevent item from appearing on pedestals (e.g Sumptorium or Bag of Crafting)

## Tags Documentation

| Tag Name | Description |
|:--|:--|
| angel | Item counts towards the ***Seraphim*** transformation |
| baby | Item counts towards the ***Conjoined*** transformation |
| battery | Item counts towards the unlock condition for ***Jumper Cables*** |
| bob | Item counts towards the ***Bob*** transformation |
| book | Item counts towards the ***Bookworm*** transformtion |
| dead | Item counts towards the unlock condition for ***The Parasite*** |
| devil | Item counts towards the ***Leviathan*** transformation |
| fly | Item counts towards the ***Beelzebub*** transformation |
| food | Item is considered food by ***Binge Eater*** |
| guppy | Item counts towards the ***Guppy*** transformation |
| mom | Item counts towards the ***Yes Mother?*** transformation, and the unlock condition for ***Mom's Contact*** |
| monstermanual | Item effect can be replicated by ***Monster Manual*** |
| mushroom | Item counts towards the ***Fun Guy*** transformation |
| nocantrip | Item is backlisted during the ***Cantripped!*** challenge |
| nogreed | Item is blacklisted from ***Greed Mode*** |
| nokeeper | Item is blacklisted while playing as ***The Keeper*** |
| nolostbr | Item is blacklisted while playing as ***The Lost*** if you are carrying ***Birthright*** |
| offensive | Item is whitelisted while playing as ***Tainted Lost*** |
| poop | Item counts towards the ***Oh Crap*** transformation |
| quest | Item is unaffected by character gimmicks (b.isaac's inventory, b.cain's item decomposition), is retained through rerolls, and is shared between the forms of tainted lazarus |
| spider | Item counts towards the ***Spider Baby*** transformation |
| stars | Item counts towards the unlock condition for the ***Planetarium*** roomtype |
| summonable | Item can be summoned by ***Lemegeton*** and ***Modeling Clay*** |
| syringe | Item counts towards the ***Spun*** transformation, and the unlock condition for ***Little Baggy*** |
| tearsup | Item counts towards the unlock condition for ***Lachryphagy*** |
| tech | Item counts towards the unlock condition for ***Technology Zero*** |
| uniquefamiliar| Item cannot be duplicated by ***Box of Friends***, and will not be granted by ***Soul of Lilith*** if already owned |
