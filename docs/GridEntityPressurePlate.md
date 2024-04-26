---
tags:
  - Class
---
# Class "GridEntityPressurePlate"

???+ info
    You can get this class by using the following function:

    * [GridEntity.ToPressurePlate()](GridEntity.md#topressureplate)

    ???+ example "Example Code"
        `Game():GetRoom():GetGridEntity(25):ToPressurePlate()`

## Class Diagram
--8<-- "docs/snippets/GridEntityClassDiagram.md"
## Functions
### Reward () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Reward ( ) {: .copyable aria-label='Functions' }
Triggers the spawning of the reward as if the plate would be pressed, without actually pressing it.

???- info "Greed mode behavior"
    When in greedmode and used on the Greedmode-pressureplate, it has multiple effects:

    When no wave is active, it will spawn a random reward analog to the normal pressure plate pool.

    When a wave is active, it will spawn a wave, wihtout increasing the wave counter.

___
## Variables
### Greed·Mode·RNG {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [RNG](RNG.md) GreedModeRNG {: .copyable aria-label='Variables' }
RNG object that determines the RNG of anything GreedMode related.

___
### Next·Greed·Animation {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### string NextGreedAnimation  {: .copyable aria-label='Variables' }
Defines the animation that the greed-mode pressureplate should play. This effect is only visual!

Every Animation defined in the "grid_pressureplate.anm2" file can be used as an input. Any other input will crash the game!

___
### Timer·Plate {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Sprite](Sprite.md) TimerPlate  {: .copyable aria-label='Variables' data-altreturn='nil' }
Reference to the Sprite of the Timerplate beneath the pressureplate in Greed mode.

___
