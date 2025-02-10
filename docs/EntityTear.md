---
tags:
  - Class
---
# Class "EntityTear"

???+ info
    You can get this class by using the following function:

    * [Entity.ToTear()](Entity.md#totear)
    * [EntityFamiliar.FireProjectile()](EntityFamiliar.md#fireprojectile)
    * [EntityPlayer.FireTear()](EntityPlayer.md#firetear)

    ???+ example "Example Code"
        `local tearEntity = Isaac.GetPlayer():FireTear( Vector(0,0), Vector(1, 1) )`

## Class Diagram
--8<-- "docs/snippets/EntityClassDiagram.md"
## Functions
### Add·Tear·Flags () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddTearFlags ( [TearFlags](enums/TearFlags.md) Flags ) {: .copyable aria-label='Functions' }

___
### Change·Variant () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ChangeVariant ( [TearVariant](enums/TearVariant.md) NewVariant ) {: .copyable aria-label='Functions' }

___
### Clear·Tear·Flags () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void ClearTearFlags ( [TearFlags](enums/TearFlags.md) Flags ) {: .copyable aria-label='Functions' }

___
### Has·Tear·Flags () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean HasTearFlags ( [TearFlags](enums/TearFlags.md) Flags ) {: .copyable aria-label='Functions' }

___
### Reset·Sprite·Scale () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ResetSpriteScale ( ) {: .copyable aria-label='Functions' }
Resets the tear sprite animation depending on scale.
___
### Set·Dead·Eye·Intensity () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetDeadEyeIntensity ( float Intensity ) {: .copyable aria-label='Functions' }

___
### Set·Knockback·Multiplier () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetKnockbackMultiplier ( float Multiplier ) {: .copyable aria-label='Functions' }

___
### Set·Parent·Offset () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetParentOffset ( [Vector](Vector.md) Offset ) {: .copyable aria-label='Functions' }

___
### Set·Wait·Frames () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetWaitFrames ( int Value ) {: .copyable aria-label='Functions' }

___
## Variables
### Base·Damage {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const float BaseDamage  {: .copyable aria-label='Variables' }

___
### Base·Scale {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const float BaseScale  {: .copyable aria-label='Variables' }

___
### Bounced {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean Bounced  {: .copyable aria-label='Variables' }
true if tear bounced off something.

This attribute got removed with Repentance.
___
### Can·Trigger·Streak·End {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean CanTriggerStreakEnd  {: .copyable aria-label='Variables' }
For Onan's strak and Dead Eye.
___
### Continue·Velocity {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) ContinueVelocity  {: .copyable aria-label='Variables' }

___
### Falling·Acceleration {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float FallingAcceleration  {: .copyable aria-label='Variables' }

___
### Falling·Speed {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float FallingSpeed  {: .copyable aria-label='Variables' }

___
### Height {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Height  {: .copyable aria-label='Variables' }

___
### Homing·Friction {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float HomingFriction  {: .copyable aria-label='Variables' }

___
### Knockback·Multiplier {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float KnockbackMultiplier  {: .copyable aria-label='Variables' }

___
### Parent·Offset {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) ParentOffset  {: .copyable aria-label='Variables' }
Used for Position adjustment (vs PositionOffset which is a render offset)
___
### Pos·Displacement {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Vector](Vector.md) PosDisplacement  {: .copyable aria-label='Variables' }

___
### Rotation {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Rotation  {: .copyable aria-label='Variables' }

___
### Scale {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Scale  {: .copyable aria-label='Variables' }

___
### Stick·Diff {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) StickDiff  {: .copyable aria-label='Variables' }

___
### Stick·Target {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.md) StickTarget  {: .copyable aria-label='Variables' data-altreturn='nil' }

___
### Stick·Timer {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int StickTimer  {: .copyable aria-label='Variables' }

___
### Tear·Flags {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [TearFlags](enums/TearFlags.md) TearFlags {: .copyable aria-label='Variables' }

___
### Tear·Index {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const int TearIndex  {: .copyable aria-label='Variables' }
- In each run, the game keeps track of how many tears have been fired by the player in total.
- `TearIndex` represents this tear counter.
- It is 0-indexed, meaning that the first tear fired by the player on a run will have a `TearIndex` of 0, the second tear fired by the player on a run will have a `TearIndex` of 1, and so on.
___
### Wait·Frames {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int WaitFrames  {: .copyable aria-label='Variables' }

___
