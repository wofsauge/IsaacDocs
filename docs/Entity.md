# Class "Entity"

### Children Classes {: .inheritance }
[EntityBomb](EntityBomb.md), [EntityEffect](EntityEffect.md), [EntityFamiliar](EntityFamiliar.md), [EntityKnife](EntityKnife.md), [EntityLaser](EntityLaser.md), [EntityNPC](EntityNPC.md), [EntityPickup](EntityPickup.md), [EntityPlayer](EntityPlayer.md), [EntityProjectile](EntityProjectile.md), [EntityTear](EntityTear.md)

## Functions
### Add·Burn () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddBurn ( [EntityRef](EntityRef.html) Source, int Duration, float Damage ) {: .copyable aria-label='Functions' }

Adds a burn-effect to an enemy. Duration is in Number of Frames. Damage is the Damage taken per frame.

???- info "Duration infos"
    The Duration must be a minimum of 2 frames. Every consecutive damage tick is 20 frames apart. 
    
    ```
    2 Damage-ticks = 22 frames
    3 = 42
    4 = 62
    ...
    ```

???+ bug
    Changing the Damage value doesnt seem to have an effect. It always deals the amount of damage of the player.

    The Duration value seems to have an upper limit. For a PlayerEntity, its only lasting for the duration of one damage interval. For Entities its up to 6 damage-intervals.

???- example "Example Code"
    This code damages every entity in the room for 1 second with the damagesource set to the player. The total damage dealt is 1.

    ```lua 
    local player =Isaac.GetPlayer(0)
    for i, entity in ipairs(Isaac.GetRoomEntities()) do
    	entity:AddBurn(EntityRef(player), 30, 1)
    end
    ```

___ 
### Add·Charmed () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddCharmed (EntityRef sourceEntity, int Duration ) {: .copyable aria-label='Functions' }

Adds a charmed-effect to an enemy. Duration is in Number of Frames. Charmed enemies are friendly towards isaac and attack other enemies. 

`:::lua Duration = -1` makes the effect permanent and the enemy will follow you even to different rooms.

???- example "Example Code"
    This code charms every entity in the room for 1 second.

    ```lua 
    local player = Isaac.GetPlayer(0) 
    for i, entity in ipairs(Isaac.GetRoomEntities()) do
    	entity:AddCharmed(EntityRef(player), 30)
    end
    ```

___ 
### Add·Confusion () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddConfusion ( [EntityRef](EntityRef.html) Source, int Duration, boolean IgnoreBosses ) {: .copyable aria-label='Functions' }

Adds a confusion effect to an entity.

???- info "Duration infos"
    The Duration has a maximum of 5 seconds

???- example "Example Code"
    This code confuses every entity in the room for 1 second while ignoring bosses.

    ```lua 
    local player = Isaac.GetPlayer(0) 
    for i, entity in ipairs(Isaac.GetRoomEntities()) do
    	entity:AddConfusion(EntityRef(player), 30, true)
    end
    ```

___ 
### Add·Entity·Flags () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddEntityFlags ( int Flags ) {: .copyable aria-label='Functions' }

Add [EntityFlags](../enums/EntityFlag.html) to the entity. Flags are used to add specific effects like poisoning or freeze. You can add multiple flags at the same time by bitwise-concatenating them.

???- example "Example Code"
    This code adds slowing and confusion to the enetity.

    ```lua 
    local player = Isaac.GetPlayer(0) 
    for i, entity in ipairs(Isaac.GetRoomEntities()) do
    	entity:AddEntityFlags(EntityFlag.FLAG_SLOW | EntityFlag.FLAG_CONFUSION)
    end
    ```
___ 
### Add·Fear () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddFear ( [EntityRef](EntityRef.html) Source, int Duration ) {: .copyable aria-label='Functions' }

Adds a fear-effect to an entity.

???- info "Duration infos"
    The Duration has a maximum of 5 seconds

???- example "Example Code"
    This code frightens every entity in the room for 1 second.

    ```lua 
    local player = Isaac.GetPlayer(0) 
    for i, entity in ipairs(Isaac.GetRoomEntities()) do
    	entity:AddFear(EntityRef(player), 30)
    end
    ```

___ 
### Add·Freeze () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddFreeze ( [EntityRef](EntityRef.html) Source, int Duration ) {: .copyable aria-label='Functions' }

Freezes an entity, making it unable to move and attack.

???- info "Duration infos"
    The Duration has a maximum of 5 seconds

???- example "Example Code"
    This code freezes every entity in the room for 1 second.

    ```lua 
    local player = Isaac.GetPlayer(0) 
    for i, entity in ipairs(Isaac.GetRoomEntities()) do
    	entity:AddFreeze(EntityRef(player), 30)
    end
    ```

___ 
### Add·Health () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddHealth ( float HitPoints ) {: .copyable aria-label='Functions' }
Heals an entity. 
___ 
### Add·Midas·Freeze () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddMidasFreeze ( [EntityRef](EntityRef.html) Source, int Duration ) {: .copyable aria-label='Functions' }
Turns the entity into a gold statue (can't move, can't attack, drops coins when killed)

???- info "Duration infos"
    The Duration has a maximum of 5 seconds

???+ bug
    The golden color applied to the entity will stay for the full duration passed into the function, despite the freeze effect only lasting for a maximum of 5 seconds. 

???- example "Example Code"
    This code turns every entity in the room into gold for 1 second.

    ```lua 
    local player = Isaac.GetPlayer(0) 
    for i, entity in ipairs(Isaac.GetRoomEntities()) do
    	entity:AddMidasFreeze(EntityRef(player), 30)
    end
    ```
___ 
### Add·Poison () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddPoison ( [EntityRef](EntityRef.html) Source, int Duration, float Damage ) {: .copyable aria-label='Functions' }

Adds a poison effect to the entity.

???- info "Duration infos"
    The Duration must be a minimum of 2 frames. Every consecutive damage tick is 20 frames apart. 
    
    ```
    2 Damage-ticks = 22 frames
    3 = 42
    4 = 62
    ...
    ```

???+ bug
    Changing the Damage value doesnt seem to have an effect. It always deals the amount of damage of the player.
    
    The Duration value seems to have an upper limit. For a PlayerEntity, its only lasting for the duration of one damage interval. For Entities its up to 6 damage-intervals.

???- example "Example Code"
    This code applies a poison effect to every entity in the room for 1 second.

    ```lua 
    local player = Isaac.GetPlayer(0) 
    for i, entity in ipairs(Isaac.GetRoomEntities()) do
    	entity:AddPoison(EntityRef(player), 30, 1)
    end
    ```
___ 
### Add·Shrink () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddShrink ( [EntityRef](EntityRef.html) Source, int Duration ) {: .copyable aria-label='Functions' }

Adds a shrink effect to the entity.

???- info "Duration infos"
    The Duration has a maximum of 5 seconds

???- example "Example Code"
    This code shrinks every entity in the room for 1 second.

    ```lua 
    local player = Isaac.GetPlayer(0) 
    for i, entity in ipairs(Isaac.GetRoomEntities()) do
    	entity:AddShrink(EntityRef(player), 30)
    end
    ```
___ 
### Add·Slowing () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddSlowing ( [EntityRef](EntityRef.html) Source, int Duration, float SlowValue, [Color](Color.html) SlowColor ) {: .copyable aria-label='Functions' }
Makes the friction higher effectively slowing down the entity. 

???- example "Example Code"
    This code slows every entity in the room for 1 second with 0.5 original speed and applying a red color to it.

    ```lua 
    local player = Isaac.GetPlayer(0) 
    local slowColor = Color(1, 0, 0, 1, 0, 0, 0)
    for i, entity in ipairs(Isaac.GetRoomEntities()) do
    	entity:AddSlowing(EntityRef(player), 30, 0.5, slowColor)
    end
    ```
___ 
### Add·Velocity () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddVelocity ( [Vector](Vector.html) Velocity ) {: .copyable aria-label='Functions' }

Adds velocity to the entity. This can be used to move him in a certain direktion (for example as a result of collision)
___ 
### Blood·Explode () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void BloodExplode ( ) {: .copyable aria-label='Functions' }
Explodes with gibs and blood. 
___ 
### Can·Shut·Doors () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean CanShutDoors ( ) {: .copyable aria-label='Functions' }
enemies keep the doors shut.
___ 
### Clear·Entity·Flags () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ClearEntityFlags ( int Flags ) {: .copyable aria-label='Functions' }

Removes all [EntityFlags](../enums/EntityFlag.html) from the entity.
___ 
### Collides·With·Grid () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean CollidesWithGrid ( ) {: .copyable aria-label='Functions' }

Returns true, if the entity is able to collide with the grid.
___ 
### Die () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Die ( ) {: .copyable aria-label='Functions' }

Kills the entity and trigger its death animation.
___ 
### Exists () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean Exists ( ) {: .copyable aria-label='Functions' }

Returns true, if this entity still exists.
___ 
### Get·Boss·ID () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### BossId GetBossID ( ) {: .copyable aria-label='Functions' }

If the entity is a boss, it returns its specific boss id. If it isnt a boss it will return 0.
___ 
### Get·Color () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Color](Color.html) GetColor ( ) {: .copyable aria-label='Functions' }

Returns the Color object assosiated to this entity.
___ 
### Get·Data () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### table GetData ( ) {: .copyable aria-label='Functions' }

Returns a table that contains all data assosiated with the entity. This can be used to add custom data as well.

???- note "Notes"
    Data associated with an entity does only persists in between rooms, when the entity is a player, familiar or the entity has the "EntityFlag.FLAG_PERSISTENT" Flag active. Data does not persists in between exiting the game to a menu, or when restarting/finishing a run.

???- example "Example Code"
    This code adds custom data to an entity or prints it in the console if it exists.

    ```lua 
    if type(entity:GetData()["MyValue"]) == type(nil) then -- checks, if the Data does exist already
        entity:GetData()["MyValue"] = "Cool" -- assign a value to the data
    else 
        print(entity:GetData()["MyValue"])  -- this will print "Cool" in the console
    end
    ```

___ 
### Get·Drop·RNG () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [RNG](RNG.html) GetDropRNG ( ) {: .copyable aria-label='Functions' }

Returns the assigned RNG object for the entity. This RNG is used to determine the items that are dropped on the entities death.
___ 
### Get·Entity·Flags () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetEntityFlags ( ) {: .copyable aria-label='Functions' }

Get the [EntityFlags](../enums/EntityFlag.html)of the entity. This will be a number which acts like a bitmask.

???- example "Example Code"
    This code prints something in the console, if the entity has a specific [EntityFlags](../enums/EntityFlag.html).

    ```lua 
    if entity:GetEntityFlags() & EntityFlag.FLAG_CONFUSION == EntityFlag.FLAG_CONFUSION then
        print("This entity is confused!")
    end
    ```
___ 
### Get·Last·Child () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.html) GetLastChild ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

Returns the last entity spawned by this entity.

???+ note "Return behavior"
    If no child is found, this function returns `nil`.
___ 
### Get·Last·Parent () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.html) GetLastParent ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }

Returns the last parent of this entity.

???+ note "Return behavior"
    If no parent is found, this function returns `nil`.
___ 
### Get·Sprite () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Sprite](Sprite.html) GetSprite ( ) {: .copyable aria-label='Functions' }

Return the sprite object of the entity.
___ 
### Has·Common·Parent·With·Entity () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasCommonParentWithEntity ( [Entity](Entity.html) Other ) {: .copyable aria-label='Functions' }

___ 
### Has·Entity·Flags () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasEntityFlags ( int Flags ) {: .copyable aria-label='Functions' }

Returns true, if the entity has all named [EntityFlags](../enums/EntityFlag.html) set.

???- example "Example Code"
    This code prints something in the console, if the entity has a specific [EntityFlags](../enums/EntityFlag.html).

    ```lua 
    if entity:HasEntityFlags(EntityFlag.FLAG_CONFUSION) then
        print("This entity is confused!")
    end
    ```
___ 
### Has·Full·Health () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasFullHealth ( ) {: .copyable aria-label='Functions' }

___ 
### Has·Mortal·Damage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasMortalDamage ( ) {: .copyable aria-label='Functions' }


???- note "Notes"
    The game adds taken damage to a damage buffer, which gets applied in the next frame. HasMortalDamage() returns true if the buffered damage is enough to kill the entity.
    HasMortalDamage() will be updated additionally after TakeDamage() is called.
___ 
### Is·Active·Enemy () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsActiveEnemy ( boolean includeDead ) {: .copyable aria-label='Functions' }
return true for non background NPCs (ex: every enemy except fire and shopkeepers) 
___ 
### Is·Boss () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsBoss ( ) {: .copyable aria-label='Functions' }
bosses display health bar 
___ 
### Is·Dead () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsDead ( ) {: .copyable aria-label='Functions' }

___ 
### Is·Enemy () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsEnemy ( ) {: .copyable aria-label='Functions' }
return true for NPCs that are not controlled by the player 
___ 
### Is·Flying () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsFlying ( ) {: .copyable aria-label='Functions' }

___ 
### Is·Frame () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsFrame ( int Frame, int Offset ) {: .copyable aria-label='Functions' }
true every X frames 
___ 
### Is·Invincible () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsInvincible ( ) {: .copyable aria-label='Functions' }

___ 
### Is·Visible () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsVisible ( ) {: .copyable aria-label='Functions' }

___ 
### Is·Vulnerable·Enemy () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsVulnerableEnemy ( ) {: .copyable aria-label='Functions' }
return true for enemies that can be damaged 
___ 
### Kill () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Kill ( ) {: .copyable aria-label='Functions' }
Kills the entity and makes a blood splat or gibs. 
___ 
### Multiply·Friction () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void MultiplyFriction ( float Value ) {: .copyable aria-label='Functions' }

___ 
### Post·Render () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void PostRender ( ) {: .copyable aria-label='Functions' }

___ 
### Remove () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Remove ( ) {: .copyable aria-label='Functions' }
Remove the entity from the game instantly, without doing any additional effects/animations.
___ 
### Remove·Status·Effects () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveStatusEffects ( ) {: .copyable aria-label='Functions' }

Removes all Status Effects from the entity.
___ 
### Render () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Render ( [Vector](Vector.html) Offset ) {: .copyable aria-label='Functions' }
Render the current sprite of the Entity at the current entity position + offset.
___ 
### Render·Shadow·Layer () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean RenderShadowLayer ( [Vector](Vector.html) Offset ) {: .copyable aria-label='Functions' }

Render the shadow / shadow layer again.
___ 
### Set·Color () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetColor ( [Color](Color.html) Color, int Duration, int Priority, boolean Fadeout, boolean Share ) {: .copyable aria-label='Functions' }

Set the colormask for the entity. This can be used to tint the sprites in different colors. 

???- example "Example Code"
    This code changes the color of the sprite to a fully white sprite for 15 frames.

    ```lua 
    entity:SetColor(Color(1, 1, 1, 1, 255, 255, 255), 15, 1, false, false)
    ```

___ 
### Set·Size () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetSize ( float Size, [Vector](Vector.html) SizeMulti, int NumGridCollisionPoints ) {: .copyable aria-label='Functions' }

Set the size ofthe entity.
___ 
### Set·Sprite·Frame () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetSpriteFrame ( string AnimationName, int FrameNum ) {: .copyable aria-label='Functions' }

___ 
### Set·Sprite·Overlay·Frame () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetSpriteOverlayFrame ( string AnimationName, int FrameNum ) {: .copyable aria-label='Functions' }

___ 
### Take·Damage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TakeDamage ( float Damage, int Flags, [EntityRef](EntityRef.html) Source, int DamageCountdown ) {: .copyable aria-label='Functions' }


???- note "Notes"
    The game adds taken damage to a damage buffer, which gets applied in the next frame. Therefore, TakeDamage() will not decremented the entities HP immediately upon calling the function. Rather, it is only updated on the frame afterwards.
___ 
### To·Bomb () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityBomb](EntityBomb.html) ToBomb ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }
Used to cast an [Entity](Entity.html) object to an [EntityBomb](EntityBomb.html) object.

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.
___ 
### To·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityEffect](EntityEffect.html) ToEffect ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }
Used to cast an [Entity](Entity.html) object to an [EntityEffect](EntityEffect.html) object.

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.

___ 
### To·Familiar () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityFamiliar](EntityFamiliar.html) ToFamiliar ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }
Used to cast an [Entity](Entity.html) object to an [EntityFamiliar](EntityFamiliar.html) object.

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.

___ 
### To·Knife () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityKnife](EntityKnife.html) ToKnife ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }
Used to cast an [Entity](Entity.html) object to an [EntityKnife](EntityKnife.html) object.

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.

___ 
### To·Laser () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityLaser](EntityLaser.html) ToLaser ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }
Used to cast an [Entity](Entity.html) object to an [EntityLaser](EntityLaser.html) object.

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.

___ 
### To·NPC () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityNPC](EntityNPC.html) ToNPC ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }
Used to cast an [Entity](Entity.html) object to an [EntityNPC](EntityNPC.html) object.

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.

___ 
### To·Pickup () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityPickup](EntityPickup.html) ToPickup ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }
Used to cast an [Entity](Entity.html) object to an [EntityPickup](EntityPickup.html) object.

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.

___ 
### To·Player () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityPlayer](EntityPlayer.html) ToPlayer ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }
Used to cast an [Entity](Entity.html) object to an [EntityPlayer](EntityPlayer.html) object.

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.

___ 
### To·Projectile () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityProjectile](EntityProjectile.html) ToProjectile ( ) {: .copyable aria-label='Functions' data-altreturn='nil' }
Used to cast an [Entity](Entity.html) object to an [EntityProjectile](EntityProjectile.html) object.

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.

___ 
### To·Tear () {: aria-label='Functions' data-altreturn='nil' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityTear](EntityTear.html) ToTear ( ) {: .copyable aria-label='Functions' }
Used to cast an [Entity](Entity.html) object to an [EntityTear](EntityTear.html) object.

???+ note "Return behavior"
    If the conversion is not successful, this function returns `nil`.

___ 
### Update () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Update ( ) {: .copyable aria-label='Functions' }

___ 
## Variables
### Child {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.html) Child {: .copyable aria-label='Variables' }

___ 
### Collision·Damage {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float CollisionDamage  {: .copyable aria-label='Variables' }

___ 
### Depth·Offset {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float DepthOffset  {: .copyable aria-label='Variables' }

Get/Set the depth-offset of the entity. This value is added to the Y Position of the entity, which is then used to determine the rendering order of each entity. Default value is 0 for all entities.

???- example "Example Code"
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
### Drop·Seed {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const int DropSeed  {: .copyable aria-label='Variables' }

Get the Seed of the Drop RNG.
___ 
### Entity·Collision·Class {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityCollisionClass](../enums/EntityCollisionClass.html) EntityCollisionClass {: .copyable aria-label='Variables' }

___ 
### FlipX {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean FlipX  {: .copyable aria-label='Variables' }

___ 
### Frame·Count {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const int FrameCount  {: .copyable aria-label='Variables' }

___ 
### Friction {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Friction  {: .copyable aria-label='Variables' }
loaded from entity config 
___ 
### Grid·Collision·Class {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [GridCollisionClass](../enums/GridCollisionClass.html) GridCollisionClass {: .copyable aria-label='Variables' }

___ 
### Hit·Points {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float HitPoints  {: .copyable aria-label='Variables' }


???- note "Notes"
    The HitPoints value is not decremented immediately upon taking damage like you would expect. Rather, it is only updated on the frame after the entity takes damage.
___ 
### Index {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const int Index  {: .copyable aria-label='Variables' }

___ 
### Init·Seed {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const int InitSeed  {: .copyable aria-label='Variables' }

___ 
### Mass {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Mass  {: .copyable aria-label='Variables' }

___ 
### Max·Hit·Points {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float MaxHitPoints  {: .copyable aria-label='Variables' }

___ 
### Parent {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.html) Parent  {: .copyable aria-label='Variables' data-altreturn='nil' }

___ 
### Position {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.html) Position  {: .copyable aria-label='Variables' }

___ 
### Position·Offset {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Vector](Vector.html) PositionOffset  {: .copyable aria-label='Variables' }

___ 
### Render·ZOffset {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int RenderZOffset  {: .copyable aria-label='Variables' }


???+ bug "Bugs"
    This variable doesnt seem to do anything useful. Use DepthOffset instead.
___ 
### Size {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Size  {: .copyable aria-label='Variables' }
Returns the size of the hitbox on an entity.

___ 
### Size·Multi {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.html) SizeMulti  {: .copyable aria-label='Variables' }

___ 
### Spawner·Entity {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.html) SpawnerEntity  {: .copyable aria-label='Variables' data-altreturn='nil' }

___ 
### Spawner·Type {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityType](../enums/EntityType.html) SpawnerType  {: .copyable aria-label='Variables' }

___ 
### Spawner·Variant {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int SpawnerVariant  {: .copyable aria-label='Variables' }

___ 
### Spawn·Grid·Index {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const int SpawnGridIndex  {: .copyable aria-label='Variables' }

___ 
### Splat·Color {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Color](Color.html) SplatColor  {: .copyable aria-label='Variables' }

___ 
### Sprite·Offset {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.html) SpriteOffset  {: .copyable aria-label='Variables' }

___ 
### Sprite·Rotation {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float SpriteRotation  {: .copyable aria-label='Variables' }

___ 
### Sprite·Scale {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.html) SpriteScale  {: .copyable aria-label='Variables' }
Get/set the scale of the enemy sprite. This can be used to also Scale the shadow of the entity.
___ 
### Sub·Type {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int SubType  {: .copyable aria-label='Variables' }

___ 
### Target {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Entity](Entity.html) Target  {: .copyable aria-label='Variables' }

___ 
### Target·Position {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.html) TargetPosition  {: .copyable aria-label='Variables' }

___ 
### Type {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [EntityType](../enums/EntityType.html) Type  {: .copyable aria-label='Variables' }

___ 
### Variant {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Variant  {: .copyable aria-label='Variables' }

___ 
### Velocity {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.html) Velocity  {: .copyable aria-label='Variables' }

___ 
### Visible {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean Visible  {: .copyable aria-label='Variables' }

___ 
