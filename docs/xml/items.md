# File "items.xml"

old tutorial: [https://www.reddit.com/r/themoddingofisaac/comments/3mub9c/ways_to_modify_items/](https://www.reddit.com/r/themoddingofisaac/comments/3mub9c/ways_to_modify_items/)

**Resource-Folder**{: .xmlInfo .red}: Using this file in a resource folder of a mod will replace the original file.

**Content-Folder**{: .xmlInfo .green}: Using this file in a content folder of a mod will add new items.


| Variable-Name | Possible Values | Description |
|:--|:--|:--|
| id | int | used for adding customes to items (don't use ID otherwise!)
| cache | string | Possible values : [firedelay, damage, speed, range, tearcolor, tearflag, color, size. shotspeed, all, luck, flying, weapon, familiars]
| name | string |  |
| description | string |  |
| gfx | string | path to the item image |
| tags | string | Possible values: [dead, baby, fly, syringe, mom, book, poop, fly, baby, mushroom, angel, devil, guppy, spider, bob, quest, battery] |
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
