# ModCallbacks

|Enumeration|Value|Description|
|-----------|:---:|-----------|
|MC_NPC_UPDATE|0|Callback is a method that takes (EntityNPC). Called after an NPC is updated. When adding callback, specify an EntityType so it is only called for entities of that type.|
|MC_POST_UPDATE|1|Callback is a method with no arguments. Called after game update.|
|MC_POST_RENDER|2|Callback is a method with no arguments. Called after game render.|
|MC_USE_ITEM|3|Callback is a method that takes (CollectibleType, RNG). Return true to show the "use item" animation, otherwise false. Called when a custom active item is used, after discharging it. When adding callback, specify a CollectibleType to only respond to one custom active. The item RNG allows for the item's random events to be seeded.|
|MC_POST_PEFFECT_UPDATE|4|Callback is a method that takes (EntityPlayer). Called for each player, each frame, after the player evaluates the effects of items that must be constantly evaluated.|
|MC_USE_CARD|5|Callback is a method that takes (Card). Called when a custom card is used. When adding callback, specify a Card ID to only respond to one card type.|
|MC_FAMILIAR_UPDATE|6|Callback is a method that takes (Entity_Familiar). Called every frame for each custom familiar. When adding callback, specify a Variant to restrict calls to a specific familiar.|
|MC_FAMILIAR_INIT|7|Callback is a method that takes (Entity_Familiar). Called just after a custom familiar is initialized. When adding callback, specify a Variant to restrict calls to a specific familiar.|
|MC_EVALUATE_CACHE|8|Callback is a method that takes (EntityPlayer, CacheFlag). Called one or more times when a player's stats must be re-evaluated, such as after picking up an item, using certain pills, manually calling EvaluateItems on EntityPlayer. Use this to let custom items change the player's stats, familiars, flying, weapons, etc. Items tell the game which stats they affect using cache values in items.xml. Then the callback should respond to the CacheFlag by setting the corresponding player stat. Other items' stat modifiers, multipliers, etc are applied before this callback is called.|
|MC_POST_PLAYER_INIT|9|Callback is a method that takes (EntityPlayer). Called after the player is initialized.|
|MC_USE_PILL|10|Callback is a method that takes (PillEffect). Called when a custom pill is used. When adding callback, specify a PillEffect ID to only respond to one pill effect.|
|MC_ENTITY_TAKE_DMG|11|Callback is a method that takes (TookDamage : Entity, DamageAmount : number, DamageFlag : number (bit flags from DamageFlag enumeration), DamageSource : EntityRef, DamageCountdownFrames : number). Return true or nil if the entity or player should sustain the damage, otherwise false to ignore it. If the entity is an EntityPlayer, the DamageAmount is the integer number of half-hearts of damage that the player will take. Otherwise, DamageAmount is a number of hit points. Called before new damage is applied. A DAMAGE_COUNTDOWN flag means the entity will ignore any other DAMAGE_COUNTDOWN hits for the duration specified. When adding callback, specify an EntityType to respond to only damage taken by that entity type.|
|MC_POST_CURSE_EVAL|12|Callback is a method that takes (integer Curses). Curses is a bitmask containing current curses. Called after Level applied it's curses. Returns the new curse bitmask. Use Isaac.GetCurseIdByName to get a custom curse|
|MC_INPUT_ACTION|13|Callback that takes (Entity, InputHook, ButtonAction). It is called when game/game entities wants to read action input. Entity can be nil if the input is read not from an entity Class. InputHook and ButtonActions are enumerations. Return nil if you don't want to overwrite the input or value otherwise. Return value can be bool if it's a Is__ hook or float if it's an Get__Value hook. Float values should be in range of 0.0 and 1.0|
|MC_LEVEL_GENERATOR|14|WIP, isn't active atm|
|MC_POST_GAME_STARTED|15|(bool) - It's started from a savestate|
|MC_POST_GAME_END|16|(bool) - Gameover|
|MC_PRE_GAME_EXIT|17|(bool) - ShouldSave|
|MC_POST_NEW_LEVEL|18|This triggers after new room!|
|MC_POST_NEW_ROOM|19||
|MC_GET_CARD|20|(RNG& rng, integer CurrentCard, bool Playing, bool Runes, bool OnlyRunes) - This is used for Card Pools. Because not all cards have the same chance to spawn, use RNG for seeded random and return your card id (if you don't want to change the current card, return CurrentCard or nil). If desired Playing (can include playing cards), Runes (can include runes), OnlyRunes (only return runes) filter can be used to make your selection.|
|MC_GET_SHADER_PARAMS|21|(string shaderName) - returns a table containing a key -> value pair for custom shader parameters|
|MC_EXECUTE_CMD|22|(string cmd, string params) - returns a string separated by 
 (newline) per output line|
|MC_PRE_USE_ITEM|23|(CollectibleType ItemId, RNG& ItemRng) - return true if the item can't be used / processed inside the script, other values or no value will continue the routine|
|MC_PRE_ENTITY_SPAWN|24|(EntityType Type, integer Variant, integer SubType, const Vector2 Position, const Vector2 Velocity, const Entity Spawner, integer Seed), optional return - an array table with new values { Type, Variant, Subtype, Seed }|
|MC_POST_FAMILIAR_RENDER|25|(EntityFamiliar Fam, Vector Offset)|
|MC_PRE_FAMILIAR_COLLISION|26|(EntityFamiliar Fam, Entity Collider, boolean Low), returns true/false to ignore collision code (true to respond to collision, false to not), or nil to continue the internal code.|
|MC_POST_NPC_INIT|27|(EntityNPC NPC)|
|MC_POST_NPC_RENDER|28|(EntityNPC NPC, Vector Offset)|
|MC_POST_NPC_DEATH|29|(EntityNPC NPC)|
|MC_PRE_NPC_COLLISION|30|(EntityNPC NPC, Entity Collider, boolean Low), returns true/false to ignore collision code (true to respond to collision, false to not), or nil to continue the internal code.|
|MC_POST_PLAYER_UPDATE|31|(EntityPlayer Player)|
|MC_POST_PLAYER_RENDER|32|(EntityPlayer Player, Vector Offset)|
|MC_PRE_PLAYER_COLLISION|33|(EntityPlayer Player, Entity Collider, boolean Low), returns true/false to ignore collision code (true to respond to collision, false to not), or nil to continue the internal code.|
|MC_POST_PICKUP_INIT|34|(EntityPickup Pickup)|
|MC_POST_PICKUP_UPDATE|35|(EntityPickup Pickup)|
|MC_POST_PICKUP_RENDER|36|(EntityPickup Pickup, Vector Offset)|
|MC_POST_PICKUP_SELECTION|37|(EntityPickup Pickup, integer Variant, integer Subtype), return nil or an array table with new Variant and Subtype - return { Variant, Subtype }|
|MC_PRE_PICKUP_COLLISION|38|(EntityPickup Pickup, Entity Collider, boolean Low), returns true/false to ignore collision code (true to respond to collision, false to not), or nil to continue the internal code.|
|MC_POST_TEAR_INIT|39|(EntityTear Pickup)|
|MC_POST_TEAR_UPDATE|40|(EntityTear Pickup)|
|MC_POST_TEAR_RENDER|41|(EntityTear Pickup, Vector Offset)|
|MC_PRE_TEAR_COLLISION|42|(EntityTear Tear, Entity Collider, boolean Low), returns true/false to ignore collision code (true to respond to collision, false to not), or nil to continue the internal code.|
|MC_POST_PROJECTILE_INIT|43|(EntityProjectile Projectile)|
|MC_POST_PROJECTILE_UPDATE|44|(EntityProjectile Projectile)|
|MC_POST_PROJECTILE_RENDER|45|(EntityProjectile Projectile, Vector Offset)|
|MC_PRE_PROJECTILE_COLLISION|46|(EntityProjectile Projectile, Entity Collider, boolean Low), returns true/false to ignore collision code (true to respond to collision, false to not), or nil to continue the internal code.|
|MC_POST_LASER_INIT|47|(EntityLaser Laser)|
|MC_POST_LASER_UPDATE|48|(EntityLaser Laser)|
|MC_POST_LASER_RENDER|49|(EntityLaser Laser, Vector Offset)|
|MC_POST_KNIFE_INIT|50|(EntityKnife Knife)|
|MC_POST_KNIFE_UPDATE|51|(EntityKnife Knife)|
|MC_POST_KNIFE_RENDER|52|(EntityKnife Knife, Vector Offset)|
|MC_PRE_KNIFE_COLLISION|53|(EntityKnife Knife, Entity Collider, boolean Low), returns true/false to ignore collision code (true to respond to collision, false to not), or nil to continue the internal code.|
|MC_POST_EFFECT_INIT|54|(EntityEffect Effect)|
|MC_POST_EFFECT_UPDATE|55|(EntityEffect Effect)|
|MC_POST_EFFECT_RENDER|56|(EntityEffect Effect, Vector Offset)|
|MC_POST_BOMB_INIT|57|(EntityBomb Bomb)|
|MC_POST_BOMB_UPDATE|58|(EntityBomb Bomb)|
|MC_POST_BOMB_RENDER|59|(EntityBomb Bomb, Vector Offset)|
|MC_PRE_BOMB_COLLISION|60|(EntityBomb Bomb, Entity Collider, boolean Low), returns true/false to ignore collision code (true to respond to collision, false to not), or nil to continue the internal code.|
|MC_POST_FIRE_TEAR|61|(EntityTear Tear)|
|MC_PRE_GET_COLLECTIBLE|62|(integer PoolType, boolean Decrease, integer Seed), evaluates before special events|
|MC_POST_GET_COLLECTIBLE|63|(CollectibleType SelectedCollectible, integer PoolType, boolean Decrease, integer Seed)|
|MC_GET_PILL_COLOR|64|(PillColor SelectedPill, integer Seed)|
|MC_GET_PILL_EFFECT|65|(PillEffect SelectedPillEffect, PillColor PillColor)|
|MC_GET_TRINKET|66|(TrinketType SelectedTrinket, RNG& TrinketRNG)|
|MC_POST_ENTITY_REMOVE|67|(Entity Ent)|
|MC_POST_ENTITY_KILL|68|(Entity Ent)|
|MC_PRE_NPC_UPDATE|69|(EntityNPC NPC), returns true if the internal ai should be ignored, false or nil/nothing otherwise|
|MC_PRE_SPAWN_CLEAN_AWARD|70|(RNG& Rng, Vector SpawnPos), returns true if the spawn routine should be ignored, false or nil/nothing otherwise|
|MC_PRE_ROOM_ENTITY_SPAWN|71|(EntityType Type, integer Variant, integer SubType, integer GridIndex, integer Seed) - This is called when entering a new room, before spawning entities which are part its layout. Grid entities will also trigger this callback and their type will the same as the type used by the gridspawn command. Because of this, effects are assigned the type 999 instead of 1000 in this callback. Optional return: an array table with new values { Type, Variant, Subtype }. Returning a table will override any replacements that might naturally occur i.e. enemy variants.|
