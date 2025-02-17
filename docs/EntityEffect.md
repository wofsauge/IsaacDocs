---
tags:
  - Class
---
# Class "EntityEffect"

???+ info
    You can get this class by using the following function:

    * [Entity.ToEffect()](Entity.md#toeffect)
    * [EntityNPC.MakeSplat()](EntityNPC.md#makesplat)

    ???+ example "Example Code"
        `local entity = Isaac.GetRoomEntities()[1]:ToEffect()`

## Class Diagram
--8<-- "docs/snippets/EntityClassDiagram.md"
## Functions
### Follow·Parent () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void FollowParent ( [Entity](Entity.md) Parent ) {: .copyable aria-label='Functions' }

___
### Is·Player·Creep () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### static boolean IsPlayerCreep ( [EffectVariant](enums/EffectVariant.md) Variant ) {: .copyable aria-label='Functions' }

___
### Set·Damage·Source () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetDamageSource ( [EntityType](enums/EntityType.md) DamageSource ) {: .copyable aria-label='Functions' }

___
### Set·Radii () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetRadii ( float min, float max ) {: .copyable aria-label='Functions' }
For shockwaves.
___
### Set·Timeout () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetTimeout ( int Timeout ) {: .copyable aria-label='Functions' }

___
## Variables
### Damage·Source {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int DamageSource  {: .copyable aria-label='Variables' }

___
### Falling·Acceleration {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float FallingAcceleration  {: .copyable aria-label='Variables' }

___
### Falling·Speed {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float FallingSpeed  {: .copyable aria-label='Variables' }

___
### Is·Following {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsFollowing  {: .copyable aria-label='Variables' }

___
### Life·Span {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int LifeSpan  {: .copyable aria-label='Variables' }

___
### m_Height {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float m_Height  {: .copyable aria-label='Variables' }
for particles .dy
___
### Max·Radius {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float MaxRadius  {: .copyable aria-label='Variables' }

___
### Min·Radius {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float MinRadius  {: .copyable aria-label='Variables' }
For shockwaves.
___
### Parent·Offset {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) ParentOffset  {: .copyable aria-label='Variables' }
probably obsolete soon, in favor of m_SpriteOffset
___
### Rotation {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Rotation  {: .copyable aria-label='Variables' }

___
### Scale {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Scale  {: .copyable aria-label='Variables' }

___
### State {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int State  {: .copyable aria-label='Variables' }
state var, may be used ad lib initialized to 0 in Init()
___
### Timeout {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Timeout  {: .copyable aria-label='Variables' }

This is decremented on every frame, even for custom effects. Custom effects have this value initialized to -1.
___
