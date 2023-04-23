---
tags:
  - Enum
---
# Enum "DamageFlag"

???+ tip "Bitset Calculator"
    [](#){: .bitsetCalculator }

|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .abrep .tooltip .badge }|1 << 0 |DAMAGE_NOKILL {: .copyable } | Damage can not kill the receiver <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 1 |DAMAGE_FIRE {: .copyable } | Source is some sort of fire (ie. fireplace) <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 2 |DAMAGE_EXPLOSION {: .copyable } | Damage comes from an explosion <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 3 |DAMAGE_LASER {: .copyable } | Damage comes from laser <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 4 |DAMAGE_ACID {: .copyable } | Damage comes from acid, e.g. blood acid <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 5 |DAMAGE_RED_HEARTS {: .copyable } | Damage affects only red hearts if > 1 (ex: razor) <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 6 |DAMAGE_COUNTDOWN {: .copyable } | Damage from unicorn horn, the nail, game kid that has cooldown <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 7 |DAMAGE_SPIKES {: .copyable } | Damage from spikes <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 8 |DAMAGE_CLONES {: .copyable } | Damage is done by clones when they took damage, avoid infinite loops <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 9 |DAMAGE_POOP {: .copyable } | Damage from red poop <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 10 |DAMAGE_DEVIL {: .copyable } | Damage comes from devil room deal <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 11 |DAMAGE_ISSAC_HEART {: .copyable } | Indicates the damage has been redirected from Isaac's Heart familiar <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 12 |DAMAGE_TNT {: .copyable } | Damage comes from a TNT barrel <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 13 |DAMAGE_INVINCIBLE {: .copyable } | Damages even if invincible (currently only for player). Used on IV Bag. <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 14 |DAMAGE_SPAWN_FLY {: .copyable } | Creates a fly when damage is applied <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 15 |DAMAGE_POISON_BURN {: .copyable } | Damage comes from POISON/BURN flags <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 16 |DAMAGE_CURSED_DOOR {: .copyable } | Damage comes from a cursed door <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 17 |DAMAGE_TIMER {: .copyable } | Damage comes from the passage of time (used for player damage by time limited special seeds) <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 18 |DAMAGE_IV_BAG {: .copyable } | Damage from using the IV Bag <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 19 |DAMAGE_PITFALL {: .copyable } | Damage comes from pitfalls (such as ones spawned by Little Horn) <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 20 |DAMAGE_CHEST {: .copyable } | Damage comes from spiked chest <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 21 |DAMAGE_FAKE {: .copyable } | Fake damage that should trigger player's damage effects. <br> |
|[ ](#){: .abrep .tooltip .badge }|1 << 22 |DAMAGE_BOOGER {: .copyable } | Damage from booger tear <br> |
|[ ](#){: .rep .tooltip .badge }|1 << 23 |DAMAGE_SPAWN_BLACK_HEART {: .copyable } | Should drop a black heart if damage is lethal <br> |
|[ ](#){: .rep .tooltip .badge }|1 << 24 |DAMAGE_CRUSH {: .copyable } | Damage comes from a strong impact, can damage Tuff Twins or The Shells' stony exteriors (like Mom's foot, shockwaves, rock tears) <br> |
|[ ](#){: .rep .tooltip .badge }|1 << 25 |DAMAGE_NO_MODIFIERS {: .copyable } | Ignore damage modifiers (such as doubled damage from the Womb and later floors or reduced damage from the Wafer) <br> |
|[ ](#){: .rep .tooltip .badge }|1 << 26 |DAMAGE_SPAWN_RED_HEART {: .copyable } | Should drop a red heart if damage is lethal <br> |
|[ ](#){: .rep .tooltip .badge }|1 << 27 |DAMAGE_SPAWN_COIN {: .copyable } | Should drop a coin if damage is lethal <br> |
|[ ](#){: .rep .tooltip .badge }|1 << 28 |DAMAGE_NO_PENALTIES {: .copyable } | Damage shouldn't apply any penalties (such as devil deal chance) <br> |
|[ ](#){: .rep .tooltip .badge }|1 << 29 |DAMAGE_SPAWN_TEMP_HEART {: .copyable } | Should drop a half red heart that quickly despawns if damage is lethal <br> |
|[ ](#){: .rep .tooltip .badge }|1 << 30 |DAMAGE_IGNORE_ARMOR {: .copyable } | Damage ignores boss armor <br> |
|[ ](#){: .rep .tooltip .badge }|1 << 31 |DAMAGE_SPAWN_CARD {: .copyable } | Should drop a card if damage is lethal <br> |
|[ ](#){: .rep .tooltip .badge }|1 << 32 |DAMAGE_SPAWN_RUNE {: .copyable } | Should drop a rune if damage is lethal <br> |
