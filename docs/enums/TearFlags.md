# Enum "TearFlags"

Tearflag is defined as:
```lua
local function TEARFLAG(x)
	return x >= 64 and BitSet128(0,1<<x) or BitSet128(1<<x,0)
end
```

|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .rep .tooltip .badge }| BitSet128(0,0) |TEAR_NORMAL {: .copyable } | Ouija board type tear (goes thru obstacles) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(0) |TEAR_SPECTRAL {: .copyable } | Cupid's arrow type tear (goes thru enemy) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(1) |TEAR_PIERCING {: .copyable } | Spoon bender type tear (homes to enemy) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(2) |TEAR_HOMING {: .copyable } | Spoon bender type tear (homes to enemy) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(3) |TEAR_SLOW {: .copyable } | Spider bite type tear (slows on contact) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(4) |TEAR_POISON {: .copyable } | Common cold type tear (poisons on contact) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(5) |TEAR_FREEZE {: .copyable } | Mom's contact type tear (freezes on contact) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(6) |TEAR_SPLIT {: .copyable } | Parasite type tear (splits on collision) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(7) |TEAR_GROW {: .copyable } | Lump of coal type tear (grows by range) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(8) |TEAR_BOOMERANG {: .copyable } | My reflection type tear (returns back) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(9) |TEAR_PERSISTENT {: .copyable } | Polyphemus type tear (Damages the entity and if the damage is more then enemy hp it continues with less damage) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(10) |TEAR_WIGGLE {: .copyable } | Wiggle worm type tear (wiggles) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(11) |TEAR_MULLIGAN {: .copyable } | Mulligan type tear (creates fly on hit) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(12) |TEAR_EXPLOSIVE {: .copyable } | IPECAC type tear (explodes on hit) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(13) |TEAR_CHARM {: .copyable } | Mom's Eyeshadow tear | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(14) |TEAR_CONFUSION {: .copyable } | Iron Bar tear | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(15) |TEAR_HP_DROP {: .copyable } | These tears cause enemy to drop hearts if killed (33% chance) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(16) |TEAR_ORBIT {: .copyable } | Used for Little Planet (orbit arounds the player) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(17) |TEAR_WAIT {: .copyable } | Anti gravity type tear (floats in place for some time before finally moving) (unset after first update) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(18) |TEAR_QUADSPLIT {: .copyable } | Splits into 4 smaller tears if it hits the ground | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(19) |TEAR_BOUNCE {: .copyable } | Bounce off of enemies, walls, rocks (Higher priority than PERSISTENT & PIERCING) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(20) |TEAR_FEAR {: .copyable } | Mom's Perfume type tear of fear (fear on contact) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(21) |TEAR_SHRINK {: .copyable } | Proptosis tears start large and shrink | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(22) |TEAR_BURN {: .copyable } | Fire Mind tears cause Burn effect on enemies | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(23) |TEAR_ATTRACTOR {: .copyable } | Attracts enemies and pickups | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(24) |TEAR_KNOCKBACK {: .copyable } | Tear impact pushes enemies back further | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(25) |TEAR_PULSE {: .copyable } | Makes the tear pulse | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(26) |TEAR_SPIRAL {: .copyable } | Makes the tear path spiral | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(27) |TEAR_FLAT {: .copyable } | Makes the tear oval in the direction of travel | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(28) |TEAR_SAD_BOMB {: .copyable } | Used by Bombs (Sad Bomb) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(29) |TEAR_BUTT_BOMB {: .copyable } | Used by Bombs (Butt Bomb) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(30) |TEAR_SQUARE {: .copyable } | Used for Hook Worm | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(31) |TEAR_GLOW {: .copyable } | Used for GodHead (they will have a glow around them) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(32) |TEAR_GISH {: .copyable } | Used for Gish player tears (to color enemy black on slowing) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(33) |TEAR_MYSTERIOUS_LIQUID_CREEP {: .copyable } | Mysterious Liquid tears spawn damaging green creep when hit | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(34) |TEAR_SHIELDED {: .copyable } | Lost Contact tears, block enemy projectiles | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(35) |TEAR_GLITTER_BOMB {: .copyable } | Used by Bombs (Glitter Bomb) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(36) |TEAR_SCATTER_BOMB {: .copyable } | Used for Scatter bombs | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(37) |TEAR_STICKY {: .copyable } | Used for Sticky bombs and Explosivo tears | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(38) |TEAR_CONTINUUM {: .copyable } | Tears loop around the screen | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(39) |TEAR_LIGHT_FROM_HEAVEN {: .copyable } | Create damaging light beam on hit | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(40) |TEAR_COIN_DROP {: .copyable } | Used by Bumbo, spawns a coin when tear hits | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(41) |TEAR_BLACK_HP_DROP {: .copyable } | Enemy drops a black hp when dies | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(42) |TEAR_TRACTOR_BEAM {: .copyable } | Tear with this flag will follow parent player's beam | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(43) |TEAR_GODS_FLESH {: .copyable } | God's flesh flag to minimize enemies | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(44) |TEAR_GREED_COIN {: .copyable } | Greed coin tears that has a chance to generate a coin when hit | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(45) |TEAR_CROSS_BOMB {: .copyable } | Bomber Boy | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(46) |TEAR_BIG_SPIRAL {: .copyable } | Ouroboros Worm, big radius oscilating tears | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(47) |TEAR_PERMANENT_CONFUSION {: .copyable } | Glaucoma tears, permanently confuses enemies | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(48) |TEAR_BOOGER {: .copyable } | Booger tears, stick and do damage over time | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(49) |TEAR_EGG {: .copyable } | Egg tears, leave creep and spawns spiders or flies | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(50) |TEAR_ACID {: .copyable } | Sulfuric Acid tears, can break grid entities | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(51) |TEAR_BONE {: .copyable } | Bone tears, splits in 2 | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(52) |TEAR_BELIAL {: .copyable } | Belial tears, piecing tears gets double damage + homing | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(53) |TEAR_MIDAS {: .copyable } | Midas touch tears | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(54) |TEAR_NEEDLE {: .copyable } | Needle tears | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(55) |TEAR_JACOBS {: .copyable } | Jacobs ladder tears | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(56) |TEAR_HORN {: .copyable } | Little Horn tears | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(57) |TEAR_LASER {: .copyable } | Technology Zero | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(58) |TEAR_POP {: .copyable } | Pop! | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(59) |TEAR_ABSORB {: .copyable } | Hungry Tears | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(60) |TEAR_LASERSHOT {: .copyable } | Trisagion, generates a laser on top of the tear | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(61) |TEAR_HYDROBOUNCE {: .copyable } | Flat Stone | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(62) |TEAR_BURSTSPLIT {: .copyable } | Haemolacria | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(63) |TEAR_CREEP_TRAIL {: .copyable } | Bob's Bladder | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(64) |TEAR_PUNCH {: .copyable } | Knockout Drops | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(65) |TEAR_ICE {: .copyable } | Uranus | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(66) |TEAR_MAGNETIZE {: .copyable } | Lodestone | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(67) |TEAR_BAIT {: .copyable } | Rotten Tomato | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(68) |TEAR_OCCULT {: .copyable } | Eye of the Occult | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(69) |TEAR_ORBIT_ADVANCED {: .copyable } | Orbiting tears with a more narrow and stable orbit (used by Saturnus and Immaculate Heart) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(70) |TEAR_ROCK {: .copyable } | Rock tears, chance to break rocks, deal extra damage to rock type enemies | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(71) |TEAR_TURN_HORIZONTAL {: .copyable } | Brain Worm, tears turn and go horizontally when moving past an enemy | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(72) |TEAR_BLOOD_BOMB {: .copyable } | Blood Bombs, leave blood creep on the ground | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(73) |TEAR_ECOLI {: .copyable } | E. Coli tears, turn enemies into poop | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(74) |TEAR_COIN_DROP_DEATH {: .copyable } | Killed enemies have a chance to drop a random coin (Reverse Hanged Man) | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(75) |TEAR_BRIMSTONE_BOMB {: .copyable } | Brimstone Bombs, explosion creates a brimstone cross | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(76) |TEAR_RIFT {: .copyable } | Rift tears, creates a black hole on impact | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(77) |TEAR_SPORE {: .copyable } | Spore tears, stick to enemies and multiply on enemy death | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(78) |TEAR_GHOST_BOMB {: .copyable } | Ghost bombs | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(79) |TEAR_CARD_DROP_DEATH {: .copyable } | Killed enemies will drop a random tarot card | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(80) |TEAR_RUNE_DROP_DEATH {: .copyable } | Killed enemies will drop a random rune | 
|[ ](#){: .rep .tooltip .badge }| TEARFLAG(81) |TEAR_TELEPORT {: .copyable } | Hit enemies will teleport to a different part of the room | 
|[ ](#){: .rep .tooltip .badge }| 82 |TEAR_EFFECT_COUNT {: .copyable } |  | 
