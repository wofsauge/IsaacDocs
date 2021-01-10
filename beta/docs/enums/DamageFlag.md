# Enum "DamageFlag"
|Enumerator|comment|id|
|:--:|:--:|:--:|
| DAMAGE_NOKILL | Damage can not kill the receiver <br> | 1 |
| DAMAGE_FIRE | Source is some sort of fire (ie. fireplace) <br> | 1<<1 |
| DAMAGE_EXPLOSION | Damage comes from an explosion <br> | 1<<2 |
| DAMAGE_LASER | Damage comes from laser <br> | 1<<3 |
| DAMAGE_ACID | Damage comes from acid, e.g. blood acid <br> | 1<<4 |
| DAMAGE_RED_HEARTS | Damage affects only red hearts if > 1 (ex: razor) <br> | 1<<5 |
| DAMAGE_COUNTDOWN | Damage from unicorn horn, the nail, game kid that has cooldown <br> | 1<<6 |
| DAMAGE_SPIKES | Damage from spikes <br> | 1<<7 |
| DAMAGE_CLONES | Damage is done by clones when they took damage, avoid infinite loops <br> | 1<<8 |
| DAMAGE_POOP | Damage from red poop <br> | 1<<9 |
| DAMAGE_DEVIL |  <br> | 1<<10 |
| DAMAGE_ISSAC_HEART | Indicates the damage has been redirected from Isaac's Heart familiar <br> | 1<<11 |
| DAMAGE_TNT | Damage comes from a TNT barrel <br> | 1<<12 |
| DAMAGE_INVINCIBLE | Damages even if invincible (currently only for player). Used on IV Bag. <br> | 1<<13 |
| DAMAGE_SPAWN_FLY | Creates a fly when damage is applied <br> | 1<<14 |
| DAMAGE_POISON_BURN | Damage comes from POISON/BURN flags <br> | 1<<15 |
| DAMAGE_CURSED_DOOR | Damage comes from a cursed door <br> | 1<<16 |
| DAMAGE_TIMER | Damage comes from the passage of time (used for player damage by time limited special seeds) <br> | 1<<17 |
| DAMAGE_IV_BAG | Damage from using the IV Bag <br> | 1<<18 |
| DAMAGE_PITFALL | Damage comes from pitfalls (such as ones spawned by Little Horn) <br> | 1<<19 |
| DAMAGE_CHEST | Damage comes from spiked chest <br> | 1<<20 |
| DAMAGE_FAKE | Fake damage that should trigger player's damage effects. <br> | 1<<21 |
| DAMAGE_BOOGER | Damage from booger tear <br> | 1<<22 |