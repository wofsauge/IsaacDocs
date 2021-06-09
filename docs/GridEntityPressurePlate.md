# Class "GridEntityPressurePlate"
### Inherits from Class: {: .inheritance }
[GridEntity](GridEntity.md)
## Functions
### Reward () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Reward ( ) {: .copyable aria-label='Functions' }
Triggers the spawning of the reward as if the plate would be pressed, without actually pressing it.

???- info "Greed mode behavior"
    When in greedmode and used on the Greedmode-pressureplate, it has multiple effects:

    When no wave is active, it will spawn a random reward analog to the normal pressure plate pool.

    When a wave is active, it will spawn a wave, wihtout increasing the wave counter.

___ 
## Variables
### Greed·Mode·RNG {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [RNG](../abp/RNG) GreedModeRNG {: .copyable aria-label='Variables' }
RNG object that determines the RNG of anything GreedMode related.

___ 
### Next·Greed·Animation {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### string NextGreedAnimation  {: .copyable aria-label='Variables' }
Defines the animation that the greed-mode pressureplate should play. This effect is only visual!

Every Animation defined in the "grid_pressureplate.anm2" file can be used as an input. Any other input will crash the game!

___ 
### Timer·Plate {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Sprite](../abp/Sprite) TimerPlate  {: .copyable aria-label='Variables' data-altreturn='nil' }
Reference to the Sprite of the Timerplate beneath the pressureplate in Greed mode.

___ 
