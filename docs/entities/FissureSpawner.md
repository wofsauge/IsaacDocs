# Information for "Fissure Spawner"

A Fissure Spawner (1000.192) is an entity included in the Repentance DLC. It spawns Fissure enemies over and over until the room is cleared.

These entities are special in that their behavior is contingent upon their sub-type. The sub-type is the composition of three separate properties. To get the individual values, the sub-type needs to be split into 3 blocks with 4 bits.

- The first block (blue) is used to define the spawning delay (in game frames).
- The second block (red) is used to define the speed. The value is measured in tiles and a +0.5 modifier is applied. In other words, a value of 0 will result in the fissure moving 0.5 tiles per jump.
- The third block (green) is used to define the angle at which the fissures will launch.

[![](../images/infographics/FissureSubtype.png)](../images/infographics/FissureSubtype.png)
