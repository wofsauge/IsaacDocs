# File "items_metadata.xml"
This file is used to define additional informations for Collectibles or Trinkets. This includes the quality, and special properties like transformations or gameplay interactions.

**Resource-Folder**{: .xmlInfo .red}: Using this file in a resource folder of a mod will replace the original file.

**Content-Folder**{: .xmlInfo .green}: Using this file in a content folder of a mod will add new items.


| Variable-Name | Possible Values | Description |
|:--|:--|:--|
| id | int | ID of the corresponding Collectible or Trinket|
| quality | int | Possible values: ['0', '1', '2', '3', '4'] |
| tags | string | Multiple tags must be split with a space. <br>Possible values: ['', 'battery', 'bob', 'mushroom', 'nogreed', 'nolostbr', 'offensive', 'summonable', 'poop', 'tearsup', 'uniquefamiliar', 'mom', 'baby', 'quest', 'food', 'spider', 'monstermanual', 'devil', 'book', 'fly', 'stars', 'nokeeper', 'nocantrip', 'angel', 'syringe', 'dead', 'guppy', 'tech'] |
