# Class "Entity"
## Functions
[ ](#){: .abp .tooltip .badge }
### AddBurn () {: aria-label='Functions' }
#### void AddBurn ( [EntityRef](../EntityRef) Source, int Duration, float Damage )  {: aria-label='Functions' }

Adds a burn-effect to an enemy. Duration is in Number of Frames. Damage is the Damage taken per frame.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code damages every entity in the room for 1 second with the damagesource set to the player. The total damage dealt is 30.
```cpp 
local player =Isaac.GetPlayer(0)
for i, entity in ipairs(Isaac.GetRoomEntities()) do
	entity:AddBurn(player,30,1)
end

```

___ 
[ ](#){: .abp .tooltip .badge }
### AddCharmed () {: aria-label='Functions' }
#### void AddCharmed ( int Duration)  {: aria-label='Functions' }

Adds a charmed-effect to an enemy. Duration is in Number of Frames. Charmed enemies are friendly towards isaac and attack other enemies. 
`:::cpp AddCharmed(-1)` makes the effect permanent and the enemy will follow you even to different rooms.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code charms every entity in the room for 1 second.
```cpp 
for i, entity in ipairs(Isaac.GetRoomEntities()) do
	entity:AddCharmed(30)
end

```

___ 
[ ](#){: .abp .tooltip .badge }
### AddConfusion () {: aria-label='Functions' }
#### void AddConfusion ( [EntityRef](../EntityRef) Source, int Duration, boolean IgnoreBosses )  {: aria-label='Functions' }

Adds a confusion effect to an entity.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code confuses every entity in the room for 1 second while ignoring bosses.
```cpp 
local player =Isaac.GetPlayer(0) 
for i, entity in ipairs(Isaac.GetRoomEntities()) do
	entity:AddConfusion(player,30,true)
end

```

___ 
[ ](#){: .abp .tooltip .badge }
### AddEntityFlags () {: aria-label='Functions' }
#### void AddEntityFlags ( int Flags)  {: aria-label='Functions' }

Add <a href="group__enums.html#gae47225424cc0ecbe50e6c49c44565b45">EntityFlags</a> to the entity. Flags are used to add specific effects like poisoning or freeze. You can add multiple flags at the same time by bitwise-concatenating them.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code adds slowing and confusion to the enetity.
```cpp 
local player =Isaac.GetPlayer(0) 
for i, entity in ipairs(Isaac.GetRoomEntities()) do
	entity:AddEntityFlags(EntityFlag.FLAG_SLOW | EntityFlag.FLAG_CONFUSION)
end

```
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### AddFear () {: aria-label='Functions' }
#### void AddFear ( [EntityRef](../EntityRef) Source, int Duration )  {: aria-label='Functions' }

Adds a fear-effect to an entity.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code frightens every entity in the room for 1 second.
```cpp 
local player =Isaac.GetPlayer(0) 
for i, entity in ipairs(Isaac.GetRoomEntities()) do
	entity:AddFear(player, 30)
end

```

___ 
[ ](#){: .abp .tooltip .badge }
### AddFreeze () {: aria-label='Functions' }
#### void AddFreeze ( [EntityRef](../EntityRef) Source, int Duration )  {: aria-label='Functions' }

Freezes an entity, making it unable to move and attack.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code freezes every entity in the room for half a second.
```cpp 
local player =Isaac.GetPlayer(0) 
for i, entity in ipairs(Isaac.GetRoomEntities()) do
	entity:AddFreeze(player, 30)
end

```

___ 
[ ](#){: .abp .tooltip .badge }
### AddHealth () {: aria-label='Functions' }
#### void AddHealth ( float HitPoints)  {: aria-label='Functions' }
Heals an entity. 
___ 
[ ](#){: .abp .tooltip .badge }
### AddMidasFreeze () {: aria-label='Functions' }
#### void AddMidasFreeze ( [EntityRef](../EntityRef) Source, int Duration )  {: aria-label='Functions' }
Turns the entity into a gold statue (can't move, can't attack, drops coins when killed)
___ 
[ ](#){: .abp .tooltip .badge }
### AddPoison () {: aria-label='Functions' }
#### void AddPoison ( [EntityRef](../EntityRef) Source, int Duration, float Damage )  {: aria-label='Functions' }

Adds a poison effect to the entity.
___ 
[ ](#){: .abp .tooltip .badge }
### AddShrink () {: aria-label='Functions' }
#### void AddShrink ( [EntityRef](../EntityRef) Source, int Duration )  {: aria-label='Functions' }

Adds a shrink effect to the entity.
___ 
[ ](#){: .abp .tooltip .badge }
### AddSlowing () {: aria-label='Functions' }
#### void AddSlowing ( [EntityRef](../EntityRef) Source, int Duration, float SlowValue, [Color](../Color) SlowColor )  {: aria-label='Functions' }
Makes the friction higher. 
___ 
[ ](#){: .abp .tooltip .badge }
### AddVelocity () {: aria-label='Functions' }
#### void AddVelocity ( [Vector](../Vector) Velocity)  {: aria-label='Functions' }

Adds velocity to the entity. This can be used to move him in a certain direktion (for example as a result of collision)
___ 
[ ](#){: .abp .tooltip .badge }
### BloodExplode () {: aria-label='Functions' }
#### void BloodExplode ( )  {: aria-label='Functions' }
Explodes with gibs and blood. 
___ 
[ ](#){: .abp .tooltip .badge }
### CanShutDoors () {: aria-label='Functions' }
#### boolean CanShutDoors ( )  {: aria-label='Functions' }
enemies keep the doors shut.
___ 
[ ](#){: .abp .tooltip .badge }
### ClearEntityFlags () {: aria-label='Functions' }
#### void ClearEntityFlags ( int Flags)  {: aria-label='Functions' }

Removes all <a href="group__enums.html#gae47225424cc0ecbe50e6c49c44565b45">EntityFlags</a> from the entity. WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### CollidesWithGrid () {: aria-label='Functions' }
#### boolean CollidesWithGrid ( )  {: aria-label='Functions' }

Returns true, if the entity is able to collide with the grid.
___ 
[ ](#){: .abp .tooltip .badge }
### Die () {: aria-label='Functions' }
#### void Die ( )  {: aria-label='Functions' }

Kills the entity and trigger its death animation.
___ 
[ ](#){: .abp .tooltip .badge }
### Exists () {: aria-label='Functions' }
#### boolean Exists ( )  {: aria-label='Functions' }

Returns true, if this entity still exists.
___ 
[ ](#){: .abp .tooltip .badge }
### GetBossID () {: aria-label='Functions' }
#### BossId GetBossID ( )  {: aria-label='Functions' }

If the entity is a boss, it returns its specific boss id. If it isnt a boss it will return 0.
___ 
[ ](#){: .abp .tooltip .badge }
### GetColor () {: aria-label='Functions' }
####  [Color](../Color) GetColor ( )  {: aria-label='Functions' }

Returns the Color object assosiated to this entity.
___ 
[ ](#){: .abp .tooltip .badge }
### GetData () {: aria-label='Functions' }
#### table GetData ( )  {: aria-label='Functions' }

Returns a table that contains all data assosiated with the entity. This can be used to add custom data as well.
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
Data associated with an entity does only persists in between rooms, when the entity is a player, familiar or the entity has the "EntityFlag.FLAG_PERSISTENT" Flag active. Data does not persists in between exiting the game to a menu, or when restarting/finishing a run.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code adds custom data to an entity or prints it in the console if it exists.
```cpp 
if type(entity:GetData()["MyValue"]) == type(nil) then -- checks, if the Data does exist already
entity:GetData()["MyValue"] = "Cool" -- assign a value to the data
else 
print(entity:GetData()["MyValue"]) -- this will print "Cool" in the console
end
```

___ 
[ ](#){: .abp .tooltip .badge }
### GetDropRNG () {: aria-label='Functions' }
#### [RNG](../RNG) GetDropRNG ( )  {: aria-label='Functions' }

Returns the assigned RNG object for the entity. This RNG is used to determine the items that are dropped on the entities death.
___ 
[ ](#){: .abp .tooltip .badge }
### GetEntityFlags () {: aria-label='Functions' }
#### int GetEntityFlags ( )  {: aria-label='Functions' }

Get the <a href="group__enums.html#gae47225424cc0ecbe50e6c49c44565b45">EntityFlags</a> of the entity. This will be a number which acts like a bitmask.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code prints something in the console, if the entity has a specific <a href="group__enums.html#gae47225424cc0ecbe50e6c49c44565b45">EntityFlag</a>.
```cpp 
if entity:GetEntityFlags() &amp; EntityFlag.FLAG_CONFUSION == EntityFlag.FLAG_CONFUSION then
print("This entity is confused!")
end
```
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### GetLastChild () {: aria-label='Functions' }
#### [Entity](../Entity) GetLastChild ( )  {: aria-label='Functions' }

Returns the last entity spawned by this entity.
___ 
[ ](#){: .abp .tooltip .badge }
### GetLastParent () {: aria-label='Functions' }
#### [Entity](../Entity) GetLastParent ( )  {: aria-label='Functions' }

Returns the last parent of this entity.
___ 
[ ](#){: .abp .tooltip .badge }
### GetSprite () {: aria-label='Functions' }
#### [Sprite](../Sprite) GetSprite ( )  {: aria-label='Functions' }

Return the sprite object of the entity.
___ 
[ ](#){: .abp .tooltip .badge }
### HasCommonParentWithEntity () {: aria-label='Functions' }
#### boolean HasCommonParentWithEntity ( [Entity](../Entity) Other)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasEntityFlags () {: aria-label='Functions' }
#### boolean HasEntityFlags ( int Flags)  {: aria-label='Functions' }

Returns true, if the entity has all named <a href="group__enums.html#gae47225424cc0ecbe50e6c49c44565b45">EntityFlags</a> set.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code prints something in the console, if the entity has a specific <a class="el" href="group__enums.html#gae47225424cc0ecbe50e6c49c44565b45">EntityFlag</a>.
```cpp 
if entity:HasEntityFlags(EntityFlag.FLAG_CONFUSION) then
print("This entity is confused!")
end
```
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### HasFullHealth () {: aria-label='Functions' }
#### boolean HasFullHealth ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasMortalDamage () {: aria-label='Functions' }
#### boolean HasMortalDamage ( )  {: aria-label='Functions' }

##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
The game adds taken damage to a damage buffer, which gets applied in the next frame. HasMortalDamage() returns true if the buffered damage is enough to kill the entity.
HasMortalDamage() will be updated additionally after TakeDamage() is called.
___ 
[ ](#){: .abp .tooltip .badge }
### IsActiveEnemy () {: aria-label='Functions' }
#### boolean IsActiveEnemy ( boolean includeDead)  {: aria-label='Functions' }
return true for non background NPCs (ex: every enemy except fire and shopkeepers) 
___ 
[ ](#){: .abp .tooltip .badge }
### IsBoss () {: aria-label='Functions' }
#### boolean IsBoss ( )  {: aria-label='Functions' }
bosses display health bar 
___ 
[ ](#){: .abp .tooltip .badge }
### IsDead () {: aria-label='Functions' }
#### boolean IsDead ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsEnemy () {: aria-label='Functions' }
#### boolean IsEnemy ( )  {: aria-label='Functions' }
return true for NPCs that are not controlled by the player 
___ 
[ ](#){: .abp .tooltip .badge }
### IsFlying () {: aria-label='Functions' }
#### boolean IsFlying ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsFrame () {: aria-label='Functions' }
#### boolean IsFrame ( int Frame, int Offset )  {: aria-label='Functions' }
true every X frames 
___ 
[ ](#){: .abp .tooltip .badge }
### IsInvincible () {: aria-label='Functions' }
#### boolean IsInvincible ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsVisible () {: aria-label='Functions' }
#### boolean IsVisible ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsVulnerableEnemy () {: aria-label='Functions' }
#### boolean IsVulnerableEnemy ( )  {: aria-label='Functions' }
return true for enemies that can be damaged 
___ 
[ ](#){: .abp .tooltip .badge }
### Kill () {: aria-label='Functions' }
#### void Kill ( )  {: aria-label='Functions' }
Kills the entity and makes a blood splat or gibs. 
___ 
[ ](#){: .abp .tooltip .badge }
### MultiplyFriction () {: aria-label='Functions' }
#### void MultiplyFriction ( float Value)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### PostRender () {: aria-label='Functions' }
#### void PostRender ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Remove () {: aria-label='Functions' }
#### void Remove ( )  {: aria-label='Functions' }
Remove the entity from the game instantly, without doing any additional effects/animations.
___ 
[ ](#){: .abp .tooltip .badge }
### RemoveStatusEffects () {: aria-label='Functions' }
#### void RemoveStatusEffects ( )  {: aria-label='Functions' }

Removes all Status Effects from the entity.
___ 
[ ](#){: .abp .tooltip .badge }
### Render () {: aria-label='Functions' }
#### void Render ( [Vector](../Vector) Offset)  {: aria-label='Functions' }
Render the current sprite of the Entity at the current entity position + offset.
___ 
[ ](#){: .abp .tooltip .badge }
### RenderShadowLayer () {: aria-label='Functions' }
#### boolean RenderShadowLayer ( [Vector](../Vector) Offset)  {: aria-label='Functions' }

Render the shadow / shadow layer again.
___ 
[ ](#){: .abp .tooltip .badge }
### SetColor () {: aria-label='Functions' }
#### void SetColor ( [Color](../Color) Color, int Duration, int Priority, boolean Fadeout, boolean Share )  {: aria-label='Functions' }

Set the colormask for the entity. This can be used to tint the sprites in different colors. 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code changes the color of the sprite to a fully white sprite for 15 frames.
```cpp 
entity:SetColor(Color(1,1,1,1,255,255,255),15,1,false,false)
```

___ 
[ ](#){: .abp .tooltip .badge }
### SetSize () {: aria-label='Functions' }
#### void SetSize ( float Size, [Vector](../Vector) SizeMulti, int NumGridCollisionPoints )  {: aria-label='Functions' }

Set the size ofthe entity.
___ 
[ ](#){: .abp .tooltip .badge }
### SetSpriteFrame () {: aria-label='Functions' }
#### void SetSpriteFrame ( string AnimationName, int FrameNum )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetSpriteOverlayFrame () {: aria-label='Functions' }
#### void SetSpriteOverlayFrame ( string AnimationName, int FrameNum )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### TakeDamage () {: aria-label='Functions' }
#### boolean TakeDamage ( float Damage, int Flags, [EntityRef](../EntityRef) Source, int DamageCountdown )  {: aria-label='Functions' }

##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
The game adds taken damage to a damage buffer, which gets applied in the next frame. Therefore, TakeDamage() will not decremented the entities HP immediately upon calling the function. Rather, it is only updated on the frame afterwards.
___ 
[ ](#){: .abp .tooltip .badge }
### ToBomb () {: aria-label='Functions' }
#### [EntityBomb](../EntityBomb) ToBomb ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ToEffect () {: aria-label='Functions' }
#### [EntityEffect](../EntityEffect) ToEffect ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ToFamiliar () {: aria-label='Functions' }
#### [EntityFamiliar](../EntityFamiliar) ToFamiliar ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ToKnife () {: aria-label='Functions' }
#### [EntityKnife](../EntityKnife) ToKnife ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ToLaser () {: aria-label='Functions' }
#### [EntityLaser](../EntityLaser) ToLaser ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ToNPC () {: aria-label='Functions' }
#### [EntityNPC](../EntityNPC) ToNPC ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ToPickup () {: aria-label='Functions' }
#### [EntityPickup](../EntityPickup) ToPickup ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ToPlayer () {: aria-label='Functions' }
#### [EntityPlayer](../EntityPlayer) ToPlayer ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ToProjectile () {: aria-label='Functions' }
#### [EntityProjectile](../EntityProjectile) ToProjectile ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ToTear () {: aria-label='Functions' }
#### [EntityTear](../EntityTear) ToTear ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Update () {: aria-label='Functions' }
#### void Update ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Child () {: aria-label='Functions' }
#### [Entity](../Entity) Child  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
## Variables
### CollisionDamage {: aria-label='Variables' }
#### float CollisionDamage  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### DepthOffset {: aria-label='Variables' }
#### float DepthOffset  {: aria-label='Variables' }

Get/Set the depth-offset of the entity. This value is added to the Y Position of the entity, which is then used to determine the rendering order of each entity. Default value is 0 for all entities.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code explains how this variable works.
```cpp 
entity1.Position.Y -- =&gt; 50
entity2.Position.Y -- =&gt; 45
-- Entity1 is rendered in front of Entity2

entity1.DepthOffset = -10
-- new Entity1 renderYPosition =&gt; 40
-- Entity2 is rendered in front of Entity1

```

___ 
[ ](#){: .abp .tooltip .badge }
### DropSeed {: aria-label='Variables' }
####  int DropSeed  {: aria-label='Variables' }

Get/set the Seed of the Drop RNG.
___ 
[ ](#){: .abp .tooltip .badge }
### [EntityCollisionClass](../enums/EntityCollisionClass) {: aria-label='Variables' }
#### [EntityCollisionClass](../enums/EntityCollisionClass) [EntityCollisionClass](../enums/EntityCollisionClass)  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### FlipX {: aria-label='Variables' }
#### boolean FlipX  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### FrameCount {: aria-label='Variables' }
####  int FrameCount  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Friction {: aria-label='Variables' }
#### float Friction  {: aria-label='Variables' }
loaded from entity config 
___ 
[ ](#){: .abp .tooltip .badge }
### [GridCollisionClass](../enums/GridCollisionClass) {: aria-label='Variables' }
#### [GridCollisionClass](../enums/GridCollisionClass) [GridCollisionClass](../enums/GridCollisionClass)  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### HitPoints {: aria-label='Variables' }
#### float HitPoints  {: aria-label='Variables' }

##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
The HitPoints value is not decremented immediately upon taking damage like you would expect. Rather, it is only updated on the frame after the entity takes damage.
___ 
[ ](#){: .abp .tooltip .badge }
### Index {: aria-label='Variables' }
####  int Index  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### InitSeed {: aria-label='Variables' }
####  int InitSeed  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Mass {: aria-label='Variables' }
#### float Mass  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### MaxHitPoints {: aria-label='Variables' }
#### float MaxHitPoints  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Parent {: aria-label='Variables' }
#### [Entity](../Entity) Parent  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Position {: aria-label='Variables' }
#### [Vector](../Vector) Position  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### PositionOffset {: aria-label='Variables' }
####  [Vector](../Vector) PositionOffset  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### RenderZOffset {: aria-label='Variables' }
#### int RenderZOffset  {: aria-label='Variables' }

##### :fontawesome-solid-bug: Bugs {: .subHeader .bugs }
This variable doesnt seem to do anything useful. Use DepthOffset instead.
___ 
[ ](#){: .abp .tooltip .badge }
### SizeMulti {: aria-label='Variables' }
#### [Vector](../Vector) SizeMulti  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### SpawnerEntity {: aria-label='Variables' }
#### [Entity](../Entity) SpawnerEntity  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### SpawnerType {: aria-label='Variables' }
#### [EntityType](../enums/EntityType) SpawnerType  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### SpawnerVariant {: aria-label='Variables' }
#### int SpawnerVariant  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### SpawnGridIndex {: aria-label='Variables' }
####  int SpawnGridIndex  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### SplatColor {: aria-label='Variables' }
####  [Color](../Color) SplatColor  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### SpriteOffset {: aria-label='Variables' }
####  [Vector](../Vector) SpriteOffset  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### SpriteRotation {: aria-label='Variables' }
#### float SpriteRotation  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### SpriteScale {: aria-label='Variables' }
####  [Vector](../Vector) SpriteScale  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### SubType {: aria-label='Variables' }
#### int SubType  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Target {: aria-label='Variables' }
#### [Entity](../Entity) Target  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### TargetPosition {: aria-label='Variables' }
####  [Vector](../Vector) TargetPosition  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Type {: aria-label='Variables' }
####  [EntityType](../enums/EntityType) Type  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Variant {: aria-label='Variables' }
#### int Variant  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Velocity {: aria-label='Variables' }
#### [Vector](../Vector) Velocity  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Visible {: aria-label='Variables' }
#### boolean Visible  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Size {: aria-label='Variables' }
#### float Size  {: aria-label='Variables' }
Returns the size of the hitbox on an entity.
___ 
