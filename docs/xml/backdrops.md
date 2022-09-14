---
tags:
  - File
---
# File "backdrops.xml"

This file is used to store informations about the backdrops and sprites used in the stages.

old tutorial: https://www.reddit.com/r/themoddingofisaac/comments/34bhi4/backdrops_explained/

**Resource-Folder**{: .xmlInfo }: Using this file in a resource folder of a mod is not tested yet.

**Content-Folder**{: .xmlInfo }: Using this file in a content folder of a mod is not tested yet.

| Variable-Name | Possible Values | Description |
|:--|:--|:--|
|id|int|ID of the stage|
|gfx|string|.png filename of the main backdrop file|
|walls|int|Number of wall sprites in the backdrop file|
|wallvariants|int|Number of wall tiles per wall sprite|
|floors|int|Number of floor sprites in the backdrop file|
|floorvariants|int|Number of floor variants|
|lfloorgfx|string|.png filename for special L-shape floor sprites|
|nfloorgfx|string|.png filename for special long or narrow floor sprites|
|props|string|Anm2 filename for props used in this stage|
|rocks|string|.png filename for rock sprites used on that stage|
|pit|string|.png filename for pit sprites used on that stage|
|bridge|string|.png filename for pit sprites used on that stage|
|door|string|.png filename for door sprites used on that stage|
|holeinwall|string|.png filename for hole-in-wall sprites used on that stage|
|watergfx|string|.png filename for the water sprites used on that stage|
|waterpit|string|.png filename for water-holding pits used on that stage|
|spikes|string|.png filename for spike sprites used on that stage|
|reversewatergfx|boolean|Should the water gfx animation be reversed on that stage|
|waterpitsmode|string|**Use not known yet...** Possible values: [0,1,2]|