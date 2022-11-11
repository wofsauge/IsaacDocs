---
tags:
  - Enum
---
# Enum "TearFlags"

Tearflag is defined as:
```lua
local function TEARFLAG(x)
	return x >= 64 and BitSet128(0,1<<(x-64)) or BitSet128(1<<x,0)
end
```

???+ tip "Bitset Calculator"
    [](#){: .bitsetCalculator }

|DLC|Value|Enumerator|Ingame Color|Comment|
|:--|:--|:--|:--|:--|
|[ ](#){: .rep .tooltip .badge }| [BitSet128](../BitSet128.md)(0,0) |TEAR_NORMAL {: .copyable } | `Color(1, 1, 1, 1, 0, 0, 0)`<br> Range 0-255: <br>`Color(255, 255, 255, 255, 0, 0, 0)` | Default tear (no special effects) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(0) |TEAR_SPECTRAL {: .copyable } | `Color(1.5, 2, 2, 0.5, 0, 0, 0)`<br> Range 0-255: <br>`Color(382, 510, 510, 127, 0, 0, 0)` | Ouija board type tear (goes thru obstacles) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(1) |TEAR_PIERCING {: .copyable } | No changes | Cupid's arrow type tear (goes thru enemy) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(2) |TEAR_HOMING {: .copyable } | `Color(0.4, 0.15, 0.38, 1, 0.27843, 0, 0.4549)` <br> Range 0-255: <br>`Color(102, 38, 97, 255, 71, 0, 116)` | Spoon bender type tear (homes to enemy) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(3) |TEAR_SLOW {: .copyable } | `Color(2, 2, 2, 1, 0.196, 0.196, 0.196)` <br> Range 0-255: <br>`Color(510, 510, 510, 255, 50, 50, 50)` | Spider bite type tear (slows on contact) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(4) |TEAR_POISON {: .copyable } | `Color(0.4, 0.97, 0.5, 1, 0, 0, 0)`<br> Range 0-255: <br>`Color(102, 247, 127, 255, 0, 0, 0)` | Common cold type tear (poisons on contact) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(5) |TEAR_FREEZE {: .copyable } | `Color(1.25, 0.05, 0.15, 1, 0, 0, 0)`<br> Range 0-255: <br>`Color(318, 13, 38, 255, 0, 0, 0)` | Mom's contact type tear (freezes on contact) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(6) |TEAR_SPLIT {: .copyable } | `Color(0.9, 0.3, 0.08, 1, 0, 0, 0)`<br> Range 0-255: <br>`Color(229, 76, 20, 255, 0, 0, 0)` | Parasite type tear (splits on collision) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(7) |TEAR_GROW {: .copyable } | `Color(0.2, 0.09, 0.06, 1, 0, 0, 0)`<br> Range 0-255: <br>`Color(51, 23, 17, 255, 0, 0, 0)` | Lump of coal type tear (grows by range) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(8) |TEAR_BOOMERANG {: .copyable } | No changes | My reflection type tear (returns back) <br> (ab+: TearFlags.TEAR_BOMBERANG) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(9) |TEAR_PERSISTENT {: .copyable } | No changes | Polyphemus type tear (Damages the entity and if the damage is more then enemy hp it continues with less damage) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(10) |TEAR_WIGGLE {: .copyable } | No changes | Wiggle worm type tear (wiggles) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(11) |TEAR_MULLIGAN {: .copyable } | No changes | Mulligan type tear (creates fly on hit) <br> (ab+: TearFlags.TEAR_MIGAN) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(12) |TEAR_EXPLOSIVE {: .copyable } | `Color(0.5, 0.9, 0.4, 1, 0, 0, 0)`<br> Range 0-255: <br>`Color(127, 229, 102, 255, 0, 0, 0)` | IPECAC type tear (explodes on hit) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(13) |TEAR_CHARM {: .copyable } | `Color(1, 0, 1, 1, 0.196, 0, 0)`<br> Range 0-255: <br>`Color(255, 0, 255, 255, 50, 0, 0)` | Mom's Eyeshadow tear |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(14) |TEAR_CONFUSION {: .copyable } | `Color(0.5, 0.5, 0.5, 1, 0, 0, 0)`<br> Range 0-255: <br>`Color(127, 127, 127, 255, 0, 0, 0)` | Iron Bar tear |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(15) |TEAR_HP_DROP {: .copyable } | No changes | These tears cause enemy to drop hearts if killed (33% chance). |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(16) |TEAR_ORBIT {: .copyable } | No changes | Used for Tiny Planet (orbit arounds the player) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(17) |TEAR_WAIT {: .copyable } | No changes | Anti gravity type tear (floats in place for some time before finally moving) (unset after first update) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(18) |TEAR_QUADSPLIT {: .copyable } | No changes | Cricket's Body type tear. Splits into 4 smaller tears if it hits the ground |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(19) |TEAR_BOUNCE {: .copyable } | `Color(1, 1, 0.8, 1, 0.1, 0.1, 0.1)`<br> Range 0-255: <br>`Color(255, 255, 204, 255, 25, 25, 25)` | Bounce off of enemies, walls, rocks (Higher priority than PERSISTENT & PIERCING) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(20) |TEAR_FEAR {: .copyable } | `Color(1, 1, 0.455, 1, 0.169, 0.145, 0)`<br> Range 0-255: <br>`Color(255, 255, 116, 255, 43, 37, 0)` | Mom's Perfume type tear of fear (fear on contact) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(21) |TEAR_SHRINK {: .copyable } | No changes | Proptosis tears start large and shrink |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(22) |TEAR_BURN {: .copyable } | `Color(1, 1, 1, 1, 0.3, 0, 0)`<br> Range 0-255: <br>`Color(255, 255, 255, 255, 76, 0, 0)` | Fire Mind tears cause Burn effect on enemies |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(23) |TEAR_ATTRACTOR {: .copyable } | No changes | Attracts enemies and pickups |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(24) |TEAR_KNOCKBACK {: .copyable } | No changes | Tear impact pushes enemies back further |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(25) |TEAR_PULSE {: .copyable } | No changes | Makes the tear pulse |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(26) |TEAR_SPIRAL {: .copyable } | No changes | Makes the tear path spiral |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(27) |TEAR_FLAT {: .copyable } | No changes | Makes the tear oval in the direction of travel |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(28) |TEAR_SAD_BOMB {: .copyable } | No changes | Used by Bombs (Sad Bomb) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(29) |TEAR_BUTT_BOMB {: .copyable } | No changes | Used by Bombs (Butt Bomb) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(30) |TEAR_SQUARE {: .copyable } | No changes | Used for Hook Worm |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(31) |TEAR_GLOW {: .copyable } | No changes | Used for GodHead (they will have a glow around them) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(32) |TEAR_GISH {: .copyable } | `Color(0.15, 0.15, 0.15, 1, 0, 0, 0)`<br> Range 0-255: <br>`Color(38, 38, 38, 255, 0, 0, 0)` | Used for Gish player tears (to color enemy black on slowing) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(33) |TEAR_MYSTERIOUS_LIQUID_CREEP {: .copyable } | `Color(1, 1, 1, 1, 0, 0.2, 0)`<br> Range 0-255: <br>`Color(255, 255, 255, 255, 0, 51, 0)` | Mysterious Liquid tears spawn damaging green creep when hit |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(34) |TEAR_SHIELDED {: .copyable } | No changes | Lost Contact tears, block enemy projectiles |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(35) |TEAR_GLITTER_BOMB {: .copyable } | No changes | Used by Bombs (Glitter Bomb) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(36) |TEAR_SCATTER_BOMB {: .copyable } | No changes | Used for Scatter bombs |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(37) |TEAR_STICKY {: .copyable } | No changes | Used for Sticky bombs and Explosivo tears |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(38) |TEAR_CONTINUUM {: .copyable } | Initializes with either <br>`Color(1, 1, 1, 1, 0, 0, 0)`<br>or<br>`Color(0, 0, 0, 1, 0, 0, 0)`<br> the purple color is handled on the fly by the game | Tears loop around the screen |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(39) |TEAR_LIGHT_FROM_HEAVEN {: .copyable } | No changes | Create damaging light beam on hit |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(40) |TEAR_COIN_DROP {: .copyable } | No changes | Used by Bumbo, spawns a coin when tear hits |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(41) |TEAR_BLACK_HP_DROP {: .copyable } | No changes | Enemy drops a black hp when dies |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(42) |TEAR_TRACTOR_BEAM {: .copyable } | No changes | Tear with this flag will follow parent player's beam |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(43) |TEAR_GODS_FLESH {: .copyable } | No changes | God's flesh flag to minimize enemies |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(44) |TEAR_GREED_COIN {: .copyable } | No changes | Greed coin tears that has a chance to generate a coin when hit |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(45) |TEAR_CROSS_BOMB {: .copyable } | No changes | Bomber Boy |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(46) |TEAR_BIG_SPIRAL {: .copyable } | No changes | Ouroboros Worm, big radius oscilating tears |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(47) |TEAR_PERMANENT_CONFUSION {: .copyable } | No changes | Glaucoma tears, permanently confuses enemies |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(48) |TEAR_BOOGER {: .copyable } | No changes | Booger tears, stick and do damage over time |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(49) |TEAR_EGG {: .copyable } | No changes | Egg tears, leave creep and spawns spiders or flies |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(50) |TEAR_ACID {: .copyable } | No changes | Sulfuric Acid tears, can break grid entities |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(51) |TEAR_BONE {: .copyable } | No changes | Bone tears, splits in 2 |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(52) |TEAR_BELIAL {: .copyable } | No changes | Belial tears, piecing tears gets double damage + homing |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(53) |TEAR_MIDAS {: .copyable } | No changes | Midas touch tears |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(54) |TEAR_NEEDLE {: .copyable } | No changes | Needle tears |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(55) |TEAR_JACOBS {: .copyable } | No changes | Jacobs ladder tears |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(56) |TEAR_HORN {: .copyable } | `Color(0, 0, 0, 1, 0, 0, 0)`<br> Range 0-255: <br>`Color(0, 0, 0, 255, 0, 0, 0)` | Little Horn tears |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(57) |TEAR_LASER {: .copyable } | No changes | Technology Zero |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(58) |TEAR_POP {: .copyable } | No changes | Pop! |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(59) |TEAR_ABSORB {: .copyable } | No changes | Lachryphagy like tears. Hungry Tears |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(60) |TEAR_LASERSHOT {: .copyable } | No changes | Trisagion, generates a laser on top of the tear |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(61) |TEAR_HYDROBOUNCE {: .copyable } | No changes | Flat Stone |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(62) |TEAR_BURSTSPLIT {: .copyable } | No changes | Haemolacria |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(63) |TEAR_CREEP_TRAIL {: .copyable } | No changes | Bob's Bladder |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(64) |TEAR_PUNCH {: .copyable } | No changes | Knockout Drops |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(65) |TEAR_ICE {: .copyable } | No changes | Uranus |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(66) |TEAR_MAGNETIZE {: .copyable } | No changes | Lodestone |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(67) |TEAR_BAIT {: .copyable } | `Color(0.7, 0.14, 0.1, 1, 0.3, 0, 0)`<br> Range 0-255: <br>`Color(178, 35, 25, 255, 76, 0, 0)` | Rotten Tomato |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(68) |TEAR_OCCULT {: .copyable } | No changes | Eye of the Occult |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(69) |TEAR_ORBIT_ADVANCED {: .copyable } | No changes | Orbiting tears with a more narrow and stable orbit (used by Saturnus and Immaculate Heart) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(70) |TEAR_ROCK {: .copyable } | No changes | Rock tears, chance to break rocks, deal extra damage to rock type enemies |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(71) |TEAR_TURN_HORIZONTAL {: .copyable } | No changes | Brain Worm, tears turn and go horizontally when moving past an enemy |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(72) |TEAR_BLOOD_BOMB {: .copyable } | No changes | Blood Bombs, leave blood creep on the ground |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(73) |TEAR_ECOLI {: .copyable } | No changes | E. Coli tears, turn enemies into poop |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(74) |TEAR_COIN_DROP_DEATH {: .copyable } | No changes | Killed enemies have a chance to drop a random coin (Reverse Hanged Man) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(75) |TEAR_BRIMSTONE_BOMB {: .copyable } | No changes | Brimstone Bombs, explosion creates a brimstone cross |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(76) |TEAR_RIFT {: .copyable } | `Color(0, 0, 0, 1, 0, 0, 0)`<br> Range 0-255: <br>`Color(0, 0, 0, 255, 0, 0, 0)` | Rift tears, creates a black hole on impact |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(77) |TEAR_SPORE {: .copyable } | No changes | Spore tears, stick to enemies and multiply on enemy death |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(78) |TEAR_GHOST_BOMB {: .copyable } | No changes | Ghost bombs |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(79) |TEAR_CARD_DROP_DEATH {: .copyable } | No changes | Killed enemies will drop a random tarot card |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(80) |TEAR_RUNE_DROP_DEATH {: .copyable } | No changes | Killed enemies will drop a random rune |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(81) |TEAR_TELEPORT {: .copyable } | No changes | Hit enemies will teleport to a different part of the room |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(82) |TEAR_DECELERATE {: .copyable } | No changes | Decelerate over time |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(83) |TEAR_ACCELERATE {: .copyable } | No changes | Accelerate over time |
|[ ](#){: .rep .tooltip .badge }| 84 |TEAR_EFFECT_COUNT {: .copyable } | No changes |  |


The following flags are reserved at the top end of the bitset, and cannot be selected randomly by any items that may attempt to do so.

|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(104) | TEAR_BOUNCE_WALLSONLY {: .copyable } | Similar to TEAR_BOUNCE but only bounces off walls, not enemies |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(105) | TEAR_NO_GRID_DAMAGE {: .copyable } | Cannot deal damage to grid entities (used by Saturnus to prevent unfair damage in some rooms) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(106) | TEAR_BACKSTAB {: .copyable } | Deals extra damage from behind and inflicts bleeding |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(107) | TEAR_FETUS_SWORD {: .copyable } | Fetuses whack their target with a sword and perform spin attacks |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(108) | TEAR_FETUS_BONE {: .copyable } | Fetuses whack their target with a bone club instead of ramming into them |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(109) | TEAR_FETUS_KNIFE {: .copyable } | Fetuses carry a knife |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(110) | TEAR_FETUS_TECHX {: .copyable } | Fetuses have a Tech X ring around them |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(111) | TEAR_FETUS_TECH {: .copyable } | Fetuses keep their distance and occasionally shoot tech lasers at their target |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(112) | TEAR_FETUS_BRIMSTONE {: .copyable } | Fetuses shoot a brimstone beam at the first enemy they hit |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(113) | TEAR_FETUS_BOMBER {: .copyable } | Fetuses drop a bomb on their first impact with an enemy |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(114) | TEAR_FETUS {: .copyable } | Base flag for C Section fetuses |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(115) | TEAR_REROLL_ROCK_WISP {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(116) | TEAR_MOM_STOMP_WISP {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(117) | TEAR_ENEMY_TO_WISP {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(118) | TEAR_REROLL_ENEMY {: .copyable } | D10 Wisps, chance to reroll enemy on hit |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(119) | TEAR_GIGA_BOMB {: .copyable } | Causes giant explosions that create holes in the ground (for Giga Bombs) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(120) | TEAR_EXTRA_GORE {: .copyable } | Causes enemies to explode into more gibs on death (for Donkey Jawbone) |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(121) | TEAR_RAINBOW {: .copyable } | Causes lasers to visually cycle between rainbow colors |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(122) | TEAR_DETONATE {: .copyable } | Can be detonated by Remote Detonator |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(123) | TEAR_CHAIN {: .copyable } | Akeldama tears, stick to each other and form a chain that can be swung around |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(124) | TEAR_DARK_MATTER {: .copyable } | Used to identify Dark Matter tears |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(125) | TEAR_GOLDEN_BOMB {: .copyable } | Used to identify bombs dropped while having a golden bomb |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(126) | TEAR_FAST_BOMB {: .copyable } | Used to identify bombs dropped while having Fast Bombs |
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(127) | TEAR_LUDOVICO {: .copyable } | Used as a weapon for Ludovico Technique |
