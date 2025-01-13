---
tags:
  - Class
---
# Class "GridEntity"

???+ info
    You can get this class by using the following function:

    * [Isaac.GridSpawn()](Isaac.md#gridspawn)
    * [Room.GetGridEntity()](Room.md#getgridentity)
    * [Room.GetGridEntityFromPos()](Room.md#getgridentityfrompos)

    ???+ example "Example Code"
        `Game():GetRoom():GetGridEntity(25)`

## Class Diagram
--8<-- "docs/snippets/GridEntityClassDiagram.md"

## Functions
### Destroy () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean Destroy ( boolean Immediate ) {: .copyable aria-label='Functions' }

___
### Destroy·With·Source () {: aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### boolean DestroyWithSource ( boolean Immediate, [EntityRef](EntityRef.md) Source ) {: .copyable aria-label='Functions' }

___
### Get·Grid·Index () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGridIndex ( ) {: .copyable aria-label='Functions' }

___
### Get·RNG () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [RNG](RNG.md) GetRNG ( ) {: .copyable aria-label='Functions' }

???- warning "Warning"
    This RNG is initialized with the same seed for all grid entities in the whole run. Instead, it's advised to create a custom data structure or use either the [SpawnSeed](GridEntityDesc.md#spawnseed) or [VariableSeed](GridEntityDesc.md#variableseed) fields from the [GridEntityDesc](GridEntityDesc.md) object.

___
### Get·Save·State () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityDesc](GridEntityDesc.md) GetSaveState ( ) {: .copyable aria-label='Functions' }

???+ info "Info"
    Both the [Desc](#desc) property and the [GetSaveState()](#getsavestate) method return the exact same [GridEntityDesc](GridEntityDesc.md) object. The game devs advise to use [GetSaveState()](#getsavestate) instead of [Desc](#desc).
___
### Get·Sprite () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [Sprite](Sprite.md) GetSprite ( ) {: .copyable aria-label='Functions' }

___
### Get·Type () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityType](enums/GridEntityType.md) GetType ( ) {: .copyable aria-label='Functions' }

___
### Get·Variant () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetVariant ( ) {: .copyable aria-label='Functions' }

___
### Hurt () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean Hurt ( int Damage ) {: .copyable aria-label='Functions' }

___
### Hurt·With·Source () {: aria-label='Functions' }
[ ](#){: .repplus .tooltip .badge }
#### boolean HurtWithSource ( int Damage, [EntityRef](EntityRef.md) Source ) {: .copyable aria-label='Functions' }

___
### Init () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Init ( int Seed ) {: .copyable aria-label='Functions' }

___
### Post·Init () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void PostInit ( ) {: .copyable aria-label='Functions' }

___
### Render () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Render ( [Vector](Vector.md) Offset ) {: .copyable aria-label='Functions' }

___
### Set·Type () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetType ( [GridEntityType](enums/GridEntityType.md) Type ) {: .copyable aria-label='Functions' }

___
### Set·Variant () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetVariant ( int Variant ) {: .copyable aria-label='Functions' }

___
### To·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityDoor](GridEntityDoor.md) ToDoor ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.
___
### To·Pit () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityPit](GridEntityPit.md) ToPit ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.
___
### To·Poop () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityPoop](GridEntityPoop.md) ToPoop ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.
___
### To·Pressure·Plate () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityPressurePlate](GridEntityPressurePlate.md) ToPressurePlate ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.
___
### To·Rock () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityRock](GridEntityRock.md) ToRock ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.
___
### To·Spikes () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntitySpikes](GridEntitySpikes.md) ToSpikes ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.
___
### To·TNT () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityTNT](GridEntityTNT.md) ToTNT ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.
___
### Update () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Update ( ) {: .copyable aria-label='Functions' }

___
## Variables
### Collision·Class {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [GridCollisionClass](enums/GridCollisionClass.md) CollisionClass  {: .copyable aria-label='Variables' }

___
### Desc {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityDesc](GridEntityDesc.md) Desc  {: .copyable aria-label='Variables' }

???+ info "Info"
    Both the [Desc](#desc) property and the [GetSaveState()](#getsavestate) method return the exact same [GridEntityDesc](GridEntityDesc.md) object. The game devs advise to use [GetSaveState()](#getsavestate) instead of [Desc](#desc).

___
### Position {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Vector](Vector.md) Position  {: .copyable aria-label='Variables' }
Returns the position of the grid cell's center point
___
### State {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int State  {: .copyable aria-label='Variables' }
Used for various different usecases.

???- example "Example States"
    ```
    Rocks with state = 2 are destroyed rocks (The rubble is the rock basically)
    ```
___
### Var·Data {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int VarData  {: .copyable aria-label='Variables' }
A Variable that stores some entity-specific data. The content can have completely different effects for different GridEntities.

???- example "Example Code"
    This code spawns a functioning Void Portal into the center of the room. This will teleport you to the floor "The Void" and will have the same appearance as the vanilla portal:
    ```lua
    -- From: https://github.com/IsaacScript/isaac-typescript-definitions/blob/main/typings/unofficial/enumsGridEntityVariants.d.ts
    local TrapdoorVariant = {
      NORMAL = 0,
      VOID_PORTAL = 1,
    }

    local game = Game();
    local room = game:GetRoom()
    local centerPos = room:GetCenterPos()

    -- By default, this will spawn a normal trapdoor, even though we specify the Void Portal variant
    local voidPortal = Isaac.GridSpawn(GridEntityType.GRID_TRAPDOOR, TrapdoorVariant.VOID_PORTAL, centerPos, true)

    -- Set the destination to The Void and apply the pulse effect shader
    voidPortal.VarData = 1

    -- Replace the spritesheet to make it look like a Void Portal
    local sprite = portalEntity:GetSprite()
    sprite:Load("gfx/grid/voidtrapdoor.anm2", true)
    ```

___
