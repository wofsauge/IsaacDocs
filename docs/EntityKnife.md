---
tags:
  - Class
---
# Class "EntityKnife"

???+ info
    You can get this class by using the following function:

    * [Entity.ToKnife()](Entity.md#toknife)
    * [EntityPlayer.FireKnife()](EntityPlayer.md#fireknife)

    ???+ example "Example Code"
        `local knifeEntity = Isaac.GetPlayer():FireKnife(Isaac.GetPlayer())`

## Class Diagram
--8<-- "docs/snippets/EntityClassDiagram.md"
## Functions
### Add·Tear·Flags () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void AddTearFlags ( [TearFlags](enums/TearFlags.md) Flags ) {: .copyable aria-label='Functions' }

___
### Clear·Tear·Flags () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void ClearTearFlags ( [TearFlags](enums/TearFlags.md) Flags ) {: .copyable aria-label='Functions' }

___
### Get·Knife·Distance () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### float GetKnifeDistance ( ) {: .copyable aria-label='Functions' }

___
### Get·Knife·Velocity () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### float GetKnifeVelocity ( ) {: .copyable aria-label='Functions' }

___
### Get·Render·Z () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### int GetRenderZ ( ) {: .copyable aria-label='Functions' }

___
### Has·Tear·Flags () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### boolean HasTearFlags ( [TearFlags](enums/TearFlags.md) Flags ) {: .copyable aria-label='Functions' }

___
### Is·Flying () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean IsFlying ( ) {: .copyable aria-label='Functions' }

___
### Reset () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void Reset ( ) {: .copyable aria-label='Functions' }
Used for master knifes, to get back to player.
___
### Set·Path·Follow·Speed () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetPathFollowSpeed ( float Speed ) {: .copyable aria-label='Functions' }

___
### Shoot () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void Shoot ( float Charge, float Range ) {: .copyable aria-label='Functions' }

___
## Variables
### Charge {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float Charge  {: .copyable aria-label='Variables' }

___
### Max·Distance {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float MaxDistance  {: .copyable aria-label='Variables' }

___
### Path·Follow·Speed {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float PathFollowSpeed  {: .copyable aria-label='Variables' }
Unit speed of path moving knifes.
___
### Path·Offset {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float PathOffset  {: .copyable aria-label='Variables' }

___
### Rotation {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float Rotation  {: .copyable aria-label='Variables' }

___
### Rotation·Offset {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float RotationOffset  {: .copyable aria-label='Variables' }

___
### Scale {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float Scale  {: .copyable aria-label='Variables' }

___
### Tear·Flags {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### [TearFlags](enums/TearFlags.md) TearFlags  {: .copyable aria-label='Variables' }

___
