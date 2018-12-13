# DamageFlag

|Enumeration|Value|Description|
|-----------|:---:|-----------|
|DAMAGE_NOKILL|1|damage can not kill the receiver|
|DAMAGE_FIRE|2|source is some sort of fire (ie. fireplace)|
|DAMAGE_EXPLOSION|4|damage comes from an explosion|
|DAMAGE_LASER|8|damage comes from laser|
|DAMAGE_ACID|16|damage comes from acid, e.g. blood acid|
|DAMAGE_RED_HEARTS|32|damage affects only red hearts if > 1 (ex: razor)|
|DAMAGE_COUNTDOWN|64|damage from unicorn horn, the nail, game kid that has cooldown|
|DAMAGE_SPIKES|128|damage from spikes|
|DAMAGE_CLONES|256|damage is done by clones when they took damage, avoid infinite loops|
|DAMAGE_POOP|512|damage from red poop|
|DAMAGE_DEVIL|1024|damage comes from devil room deal|
|DAMAGE_ISSAC_HEART|2048|Indicates the damage has been redirected from Isaac's Heart familiar|
|DAMAGE_TNT|4096|damage comes from a TNT barrel|
|DAMAGE_INVINCIBLE|8192|damages even if invincible (currently only for player). Used on IV Bag.|
|DAMAGE_SPAWN_FLY|16384|creates a fly when damage is applied|
|DAMAGE_POISON_BURN|32768|damage comes from POISON/BURN flags|
|DAMAGE_CURSED_DOOR|65536|damage comes from a cursed door|
|DAMAGE_TIMER|131072|damage comes from the passage of time (used for player damage by time limited special seeds)|
|DAMAGE_IV_BAG|262144|damage from using the IV Bag|
|DAMAGE_PITFALL|524288|damage comes from the passage of time (used for player damage by time limited special seeds)|
|DAMAGE_CHEST|1048576|damage comes from spiked chest|
|DAMAGE_FAKE|2097152|fake damage that should trigger player's damage effects.|
|DAMAGE_BOOGER|4194304|damage from booger tear|
