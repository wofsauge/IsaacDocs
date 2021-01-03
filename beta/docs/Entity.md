# Class "Entity"
___ 
## void AddBurn (EntityRef Source, integer Duration, float Damage )

Adds a burn-effect to an enemy. Duration is in Number of Frames. Damage is the Damage taken per frame.
#### Example Code
This code damages every entity in the room for 1 second with the damagesource set to the player. The total damage dealt is 30.
```lua
local player =Isaac.GetPlayer(0)
for i, entity in ipairs(Isaac.GetRoomEntities()) do
	entity:AddBurn(player,30,1)
end

```
___ 
## void AddCharmed (integer Duration)

Adds a charmed-effect to an enemy. Duration is in Number of Frames. Charmed enemies are friendly towards isaac and attack other enemies. <br/> makes the effect permanent and the enemy will follow you even to different rooms.
#### Example Code
This code charms every entity in the room for 1 second.
for i, entity in ipairs(Isaac.GetRoomEntities()) do
	entity:AddCharmed(30)
end
```lua
AddCharmed(-1)
```
___ 
## void AddConfusion (EntityRef Source, integer Duration, boolean IgnoreBosses )

Adds a confusion effect to an entity.
#### Example Code
This code confuses every entity in the room for 1 second while ignoring bosses.
```lua
local player =Isaac.GetPlayer(0) 
for i, entity in ipairs(Isaac.GetRoomEntities()) do
	entity:AddConfusion(player,30,true)
end

```
___ 
## void AddEntityFlags (integer Flags)

Add <a href="group__enums.html#gae47225424cc0ecbe50e6c49c44565b45">EntityFlags</a> to the entity. Flags are used to add specific effects like poisoning or freeze. You can add multiple flags at the same time by bitwise-concatenating them.
#### Example Code
This code adds slowing and confusion to the enetity.
```lua
local player =Isaac.GetPlayer(0) 
for i, entity in ipairs(Isaac.GetRoomEntities()) do
	entity:AddEntityFlags(EntityFlag.FLAG_SLOW | EntityFlag.FLAG_CONFUSION)
end

```
___ 
## void AddFear (EntityRef Source, integer Duration )

Adds a fear-effect to an entity.
#### Example Code
Examplecode:
This code frightens every entity in the room for 1 second.
```lua
local player =Isaac.GetPlayer(0) 
for i, entity in ipairs(Isaac.GetRoomEntities()) do
	entity:AddFear(player, 30)
end

```
___ 
## void AddFreeze (EntityRef Source, integer Duration )

Freezes an entity, making it unable to move and attack.
#### Example Code
Examplecode:
This code freezes every entity in the room for half a second.
```lua
local player =Isaac.GetPlayer(0) 
for i, entity in ipairs(Isaac.GetRoomEntities()) do
	entity:AddFreeze(player, 30)
end

```
___ 
## void AddHealth (float HitPoints)
Heals an entity. 
___ 
## void AddMidasFreeze (EntityRef Source, integer Duration )
Turns the entity into a gold statue (can't move, can't attack, drops coins when killed)
___ 
## void AddPoison (EntityRef Source, integer Duration, float Damage )

Adds a poison effect to the entity.
___ 
## void AddShrink (EntityRef Source, integer Duration )

Adds a shrink effect to the entity.
___ 
## void AddSlowing (EntityRef Source, integer Duration, float SlowValue, Color SlowColor )
Makes the friction higher. 
___ 
## void AddVelocity (Vector Velocity)

Adds velocity to the entity. This can be used to move him in a certain direktion (for example as a result of collision)
___ 
## void BloodExplode ()
Explodes with gibs and blood. 
___ 
## boolean CanShutDoors ()
enemies keep the doors shut.
___ 
## void ClearEntityFlags (integer Flags)

Removes all <a href="group__enums.html#gae47225424cc0ecbe50e6c49c44565b45">EntityFlags</a>  from the entity.
___ 
## boolean CollidesWithGrid ()

Returns true, if the entity is able to collide with the grid.
___ 
## void Die ()

Kills the entity and trigger its death animation.
___ 
## boolean Exists ()

Returns true, if this entity still exists.
___ 
## BossId GetBossID ()

If the entity is a boss, it returns its specific boss id. If it isnt a boss it will return 0.
___ 
## const Color GetColor ()

Returns the Color object assosiated to this entity.
___ 
## table GetData ()

Returns a table that contains all data assosiated with the entity. This can be used to add custom data as well.
#### Notes
Data associated with an entity does only persists in between rooms, when the entity is a player, familiar or the entity has the "EntityFlag.FLAG_PERSISTENT" Flag active. Data does not persists in between exiting the game to a menu, or when restarting/finishing a run.
#### Example Code
This code adds custom data to an entity or prints it in the console if it exists.
```lua
if type(entity:GetData()["MyValue"]) == type(nil) then -- checks, if the Data does exist already
    entity:GetData()["MyValue"] = "Cool" -- assign a value to the data
else 
    print(entity:GetData()["MyValue"])  -- this will print "Cool" in the console
end
```
___ 
## RNG GetDropRNG ()

Returns the assigned RNG object for the entity. This RNG is used to determine the items that are dropped on the entities death.
___ 
## integer GetEntityFlags ()

Get the <a href="group__enums.html#gae47225424cc0ecbe50e6c49c44565b45">EntityFlags</a> of the entity. This will be a number which acts like a bitmask.
#### Example Code
This code prints something in the console, if the entity has a specific EntityFlag.
```lua
if entity:GetEntityFlags() & EntityFlag.FLAG_CONFUSION == EntityFlag.FLAG_CONFUSION then
    print("This entity is confused!")
end
```
___ 
## Entity GetLastChild ()

Returns the last entity spawned by this entity.
___ 
## Entity GetLastParent ()

Returns the last parent of this entity.
___ 
## Sprite GetSprite ()

Return the sprite object of the entity.
___ 
## boolean HasCommonParentWithEntity (Entity Other)

___ 
## boolean HasEntityFlags (integer Flags)

Returns true, if the entity has all named <a href="group__enums.html#gae47225424cc0ecbe50e6c49c44565b45">EntityFlags</a> set.
#### Example Code
This code prints something in the console, if the entity has a specific EntityFlag.
```lua
if entity:HasEntityFlags(EntityFlag.FLAG_CONFUSION) then
    print("This entity is confused!")
end
```
___ 
## boolean HasFullHealth ()

___ 
## boolean HasMortalDamage ()

#### Notes
The game adds taken damage to a damage buffer, which gets applied in the next frame. HasMortalDamage() returns true if the buffered damage is enough to kill the entity.
HasMortalDamage() will be updated additionally after TakeDamage() is called.
___ 
## boolean IsActiveEnemy (boolean includeDead)
return true for non background NPCs (ex: every enemy except fire and shopkeepers) 
___ 
## boolean IsBoss ()
bosses display health bar 
___ 
## boolean IsDead ()

___ 
## boolean IsEnemy ()
return true for NPCs that are not controlled by the player 
___ 
## boolean IsFlying ()

___ 
## boolean IsFrame (integer Frame, integer Offset )
true every X frames 
___ 
## boolean IsInvincible ()

___ 
## boolean IsVisible ()

___ 
## boolean IsVulnerableEnemy ()
return true for enemies that can be damaged 
___ 
## void Kill ()
Kills the entity and makes a blood splat or gibs. 
___ 
## void MultiplyFriction (float Value)

___ 
## void PostRender ()

___ 
## void Remove ()
Remove the entity from the game instantly, without doing any additional effects/animations.
___ 
## void RemoveStatusEffects ()

Removes all Status Effects from the entity.
___ 
## void Render (Vector Offset)
Render the current sprite of the Entity at the current entity position + offset.
___ 
## boolean RenderShadowLayer (Vector Offset)

Render the shadow / shadow layer again.
___ 
## void SetColor (Color Color, integer Duration, integer Priority, boolean Fadeout, boolean Share )

Set the colormask for the entity. This can be used to tint the sprites in different colors. 
#### Example Code
This code changes the color of the sprite to a fully white sprite for 15 frames.
```lua
entity:SetColor(Color(1,1,1,1,255,255,255),15,1,false,false)
```
___ 
## void SetSize (float Size, Vector SizeMulti, integer NumGridCollisionPoints )

Set the size ofthe entity.
___ 
## void SetSpriteFrame (string AnimationName, integer FrameNum )

___ 
## void SetSpriteOverlayFrame (string AnimationName, integer FrameNum )

___ 
## boolean TakeDamage (float Damage, integer Flags, EntityRef Source, integer DamageCountdown )

#### Notes
The game adds taken damage to a damage buffer, which gets applied in the next frame. Therefore, TakeDamage() will not decremented the entities HP immediately upon calling the function. Rather, it is only updated on the frame afterwards.
___ 
## EntityBomb ToBomb ()

___ 
## EntityEffect ToEffect ()

___ 
## EntityFamiliar ToFamiliar ()

___ 
## EntityKnife ToKnife ()

___ 
## EntityLaser ToLaser ()

___ 
## EntityNPC ToNPC ()

___ 
## EntityPickup ToPickup ()

___ 
## EntityPlayer ToPlayer ()

___ 
## EntityProjectile ToProjectile ()

___ 
## EntityTear ToTear ()

___ 
## void Update ()

___ 
## Entity Child

___ 
## float CollisionDamage

___ 
## float DepthOffset

Get/Set the depth-offset of the entity. This value is added to the Y Position of the entity, which is then used to determine the rendering order of each entity. Default value is 0 for all entities.
#### Example Code
This code explains how this variable works.
```lua
entity1.Position.Y -- => 50
entity2.Position.Y -- => 45
-- Entity1 is rendered in front of Entity2

entity1.DepthOffset = -10
-- new Entity1 renderYPosition => 40
-- Entity2 is rendered in front of Entity1

```
___ 
## const integer DropSeed

Get/set the Seed of the Drop RNG.
___ 
## EntityCollisionClass EntityCollisionClass

___ 
## boolean FlipX

___ 
## const integer FrameCount

___ 
## float Friction
loaded from entity config 
___ 
## GridCollisionClass GridCollisionClass

___ 
## float HitPoints

#### Notes
The HitPoints value is not decremented immediately upon taking damage like you would expect. Rather, it is only updated on the frame after the entity takes damage.
___ 
## const integer Index

___ 
## const integer InitSeed

___ 
## float Mass

___ 
## float MaxHitPoints

___ 
## Entity Parent

___ 
## Vector Position

___ 
## const Vector PositionOffset

___ 
## integer RenderZOffset

#### Bugs
This variable doesnt seem to do anything useful. Use DepthOffset instead.
___ 
## Vector SizeMulti

___ 
## Entity SpawnerEntity

___ 
## EntityType SpawnerType

___ 
## integer SpawnerVariant

___ 
## const integer SpawnGridIndex

___ 
## const Color SplatColor

___ 
## const Vector SpriteOffset

___ 
## float SpriteRotation

___ 
## const Vector SpriteScale

___ 
## integer SubType

___ 
## Entity Target

___ 
## const Vector TargetPosition

___ 
## const EntityType Type

___ 
## integer Variant

<!-- Removed false description -->
___ 
## Vector Velocity

___ 
## boolean Visible

___ 
## float Size
Returns the size of the hitbox on an entity.
___ 
