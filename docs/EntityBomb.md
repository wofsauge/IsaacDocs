---
tags:
  - Class
---
# Class "EntityBomb"

???+ info
    You can get this class by using the following function:

    * [Entity.ToBomb()](Entity.md#tobomb)
    * [EntityPlayer.FireBomb()](EntityPlayer.md#firebomb)

    ???+ example "Example Code"
        `local entity = Isaac.GetPlayer():FireBomb(Vector(0,0), Vector(1,1))`

## Class Diagram
--8<-- "docs/snippets/EntityClassDiagram.md"

## Functions
### Add·Tear·Flags () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddTearFlags ( [TearFlags](enums/TearFlags.md) Flags ) {: .copyable aria-label='Functions' }

___
### Clear·Tear·Flags () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void ClearTearFlags ( [TearFlags](enums/TearFlags.md) Flags ) {: .copyable aria-label='Functions' }

___
### Has·Tear·Flags () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean HasTearFlags ( [TearFlags](enums/TearFlags.md) Flags ) {: .copyable aria-label='Functions' }

___
### Set·Explosion·Countdown () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetExplosionCountdown ( int Countdown ) {: .copyable aria-label='Functions' }

___
## Variables
### Explosion·Damage {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float ExplosionDamage  {: .copyable aria-label='Variables' }

___
### Flags {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### [TearFlags](enums/TearFlags.md) Flags  {: .copyable aria-label='Variables' }

Uses [TearFlags](enums/TearFlags.md) to alter the behavior of the bomb.
___
### Is·Fetus {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean IsFetus  {: .copyable aria-label='Variables' }

___
### Radius·Multiplier {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float RadiusMultiplier  {: .copyable aria-label='Variables' }

___
