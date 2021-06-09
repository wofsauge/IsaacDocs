# Informations for "Spike Ball and Chain"

Spikechains must be on either Top, Right, Bottom or Left side of a block in order to be attached and spin around it.

The Spikeball and Chain entity does have a special method of interpreting its SubType.

The SubType value of the entity needs to be split into 3 blocks with 4 bit each.

The first block (In Image: Blue) is used to define the spinning direction. 0000 = Clock wise. 0001 = counter clock wise. Any other value will crash the game.

The second block (Red) is used to define the Speed. 0000 will cause the ball to not move at all. 0001 moves it at ~ 24 seconds per round. 1111 at <2 seconds per round.

The last block (In Image: Green) is used to define the distance of the ball to the source block. The distance is measured in Blocks. 0010 = 2 in Decimal, therefore 2 blocks distance to the source.

[![](../rep/images/infographics/ballAndChain.png)](../rep/images/infographics/ballAndChain.png)