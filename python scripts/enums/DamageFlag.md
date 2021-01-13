[ ](#){: .abp .tooltip .badge }
# Enum "DamageFlag"
|Value|Enumerator|Comment|
|:--|:--|:--|
| 1 |DAMAGE_NOKILL {: .copyable } | Damage can not kill the receiver <br> | 
| 1<<1 |DAMAGE_FIRE {: .copyable } | Source is some sort of fire (ie. fireplace) <br> | 
| 1<<2 |DAMAGE_EXPLOSION {: .copyable } | Damage comes from an explosion <br> | 
| 1<<3 |DAMAGE_LASER {: .copyable } | Damage comes from laser <br> | 
| 1<<4 |DAMAGE_ACID {: .copyable } | Damage comes from acid, e.g. blood acid <br> | 
| 1<<5 |DAMAGE_RED_HEARTS {: .copyable } | Damage affects only red hearts if > 1 (ex: razor) <br> | 
| 1<<6 |DAMAGE_COUNTDOWN {: .copyable } | Damage from unicorn horn, the nail, game kid that has cooldown <br> | 
| 1<<7 |DAMAGE_SPIKES {: .copyable } | Damage from spikes <br> | 
| 1<<8 |DAMAGE_CLONES {: .copyable } | Damage is done by clones when they took damage, avoid infinite loops <br> | 
| 1<<9 |DAMAGE_POOP {: .copyable } | Damage from red poop <br> | 
| 1<<10 |DAMAGE_DEVIL {: .copyable } |  <br> | 
| 1<<11 |DAMAGE_ISSAC_HEART {: .copyable } | Indicates the damage has been redirected from Isaac's Heart familiar <br> | 
| 1<<12 |DAMAGE_TNT {: .copyable } | Damage comes from a TNT barrel <br> | 
| 1<<13 |DAMAGE_INVINCIBLE {: .copyable } | Damages even if invincible (currently only for player). Used on IV Bag. <br> | 
| 1<<14 |DAMAGE_SPAWN_FLY {: .copyable } | Creates a fly when damage is applied <br> | 
| 1<<15 |DAMAGE_POISON_BURN {: .copyable } | Damage comes from POISON/BURN flags <br> | 
| 1<<16 |DAMAGE_CURSED_DOOR {: .copyable } | Damage comes from a cursed door <br> | 
| 1<<17 |DAMAGE_TIMER {: .copyable } | Damage comes from the passage of time (used for player damage by time limited special seeds) <br> | 
| 1<<18 |DAMAGE_IV_BAG {: .copyable } | Damage from using the IV Bag <br> | 
| 1<<19 |DAMAGE_PITFALL {: .copyable } | Damage comes from pitfalls (such as ones spawned by Little Horn) <br> | 
| 1<<20 |DAMAGE_CHEST {: .copyable } | Damage comes from spiked chest <br> | 
| 1<<21 |DAMAGE_FAKE {: .copyable } | Fake damage that should trigger player's damage effects. <br> | 
| 1<<22 |DAMAGE_BOOGER {: .copyable } | Damage from booger tear <br> | 