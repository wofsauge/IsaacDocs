# Class "GridEntity"

### Children Classes {: .inheritance }
[GridEntityDoor](GridEntityDoor.md), [GridEntityPit](GridEntityPit.md), [GridEntityPoop](GridEntityPoop.md), [GridEntityPressurePlate](GridEntityPressurePlate.md), [GridEntityRock](GridEntityRock.md), [GridEntitySpikes](GridEntitySpikes.md), [GridEntityTNT](GridEntityTNT.md)

## Functions
### Destroy () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean Destroy ( boolean Immediate ) {: .copyable aria-label='Functions' }

___ 
### Get·Grid·Index () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGridIndex ( ) {: .copyable aria-label='Functions' }

___ 
### Get·RNG () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [RNG](../rep/RNG) GetGet·RNG ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Save·State () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityDesc](GridEntityDesc.md) GetSaveState ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Sprite () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [Sprite](../rep/Sprite) GetSprite ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Type () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityType](../rep/enums/GridEntityType) GetType ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Variant () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetVariant ( ) {: .copyable aria-label='Functions' }

___ 
### Hurt () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean Hurt ( int Damage ) {: .copyable aria-label='Functions' }

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
#### void Render ( [Vector](../rep/Vector) Offset ) {: .copyable aria-label='Functions' }

___ 
### Set·Type () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetType ( [GridEntityType](../rep/enums/GridEntityType) Type ) {: .copyable aria-label='Functions' }

___ 
### Set·Variant () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetVariant ( int Variant ) {: .copyable aria-label='Functions' }

___ 
### To·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityDoor](../rep/GridEntityDoor) ToDoor ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

___ 
### To·Pit () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityPit](../rep/GridEntityPit) ToPit ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

___ 
### To·Poop () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityPoop](../rep/GridEntityPoop) ToPoop ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

___ 
### To·Pressure·Plate () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityPressurePlate](../rep/GridEntityPressurePlate) ToPressurePlate ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

___ 
### To·Rock () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityRock](../rep/GridEntityRock) ToRock ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

___ 
### To·Spikes () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntitySpikes](../rep/GridEntitySpikes) ToSpikes ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

___ 
### To·TNT () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityTNT](../rep/GridEntityTNT) ToTNT ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

___ 
### Update () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Update ( ) {: .copyable aria-label='Functions' }

___ 
## Variables
### Collision·Class {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### CollisionClass CollisionClass  {: .copyable aria-label='Variables' }

___ 
### Desc {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityDesc](GridEntityDesc.md) Desc  {: .copyable aria-label='Variables' }

___ 
### Position {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Vector](../rep/Vector) Position  {: .copyable aria-label='Variables' }
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
    -- get grid in center of room
    local spawnPos = Game():GetRoom():GetGridPosition(67)
    -- spawn Trapdoor
    local portalEntity = Isaac.GridSpawn(GridEntityType.GRID_TRAPDOOR, 0, spawnPos, true) 
    -- set VoidPortal behavior (Teleport to void and Pulse effect shader)
    portalEntity.VarData = 1 
    -- Replace spritesheet of trapdoor to look like a Void Portal
    local sprite = portalEntity.Sprite
    sprite:ReplaceSpritesheet(0, "gfx/grid/voidtrapdoor.png")
    sprite:LoadGraphics()
    sprite:Load("gfx/grid/voidtrapdoor.anm2", true)
    portalEntity.Sprite = sprite
    ```

___ 
