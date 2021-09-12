# Informations for "Fissure Spawner"

Fissure Spawners do have a special method of interpreting their SubType.

The SubType value of the entity needs to be split into 3 blocks with 4 bit each.

The first block (In Image: Blue) is used to define the spawning Delay.

The second block (Red) is used to define the Speed, aka. the blocks the fissure will fly before hitting the ground. It will jump the given value +0.5 blocks. With value 0, it therefore will land on the edge of the next tile, which is closest to the spawner.

The last block (In Image: Green) is used to define the angle in which the fissures will launch.

[![](../images/infographics/FissureSubtype.png)](../images/infographics/FissureSubtype.png)