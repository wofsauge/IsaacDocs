# Enum "TearFlags"
|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .abrep .tooltip .badge }|0 |TEAR_NORMAL {: .copyable } | Normal Tear <br> | 
|[ ](#){: .abrep .tooltip .badge }|1 |TEAR_SPECTRAL {: .copyable } | Ouija board type tear (goes thru obstacles) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<1 |TEAR_PIERCING {: .copyable } | Cupid's arrow type tear (goes thru enemy) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<2 |TEAR_HOMING {: .copyable } | Spoon bender type tear (homes to enemy) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<3 |TEAR_SLOW {: .copyable } | Spider bite type tear (slows on contact) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<4 |TEAR_POISON {: .copyable } | Common cold type tear (poisons on contact) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<5 |TEAR_FREEZE {: .copyable } | Mom's contact type tear (freezes on contact) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<6 |TEAR_SPLIT {: .copyable } | Parasite type tear (splits on collision) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<7 |TEAR_GROW {: .copyable } | Lump of coal type tear (grows by range) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<8 |TEAR_BOMBERANG {: .copyable } | My reflection type tear (returns back) <br> **Bug**: the name of the enum contains a typo. It should be Boomerang| 
|[ ](#){: .abrep .tooltip .badge }|1<<9 |TEAR_PERSISTENT {: .copyable } | Polyphemus type tear (Damages the entity and if the damage is more then enemy hp it continues with less damage) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<10 |TEAR_WIGGLE {: .copyable } | Wiggle worm type tear (wiggles) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<11 |TEAR_MIGAN {: .copyable } | Migan type tear (creates fly on hit) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<12 |TEAR_EXPLOSIVE {: .copyable } | IPECAC type tear (explodes on hit) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<13 |TEAR_CHARM {: .copyable } | Mom's Eyeshadow tear <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<14 |TEAR_CONFUSION {: .copyable } | Iron Bar tear <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<15 |TEAR_HP_DROP {: .copyable } | These tears cause enemy to drop hearts if killed (33% chance) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<16 |TEAR_ORBIT {: .copyable } | Used for Little Planet (orbit arounds the player) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<17 |TEAR_WAIT {: .copyable } | Anti gravity type tear (floats in place for some time before finally moving) (unset after first update) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<18 |TEAR_QUADSPLIT {: .copyable } | Splits into 4 smaller tears if it hits the ground <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<19 |TEAR_BOUNCE {: .copyable } | Bounce off of enemies, walls, rocks (Higher priority than PERSISTENT & PIERCING) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<20 |TEAR_FEAR {: .copyable } | Mom's Perfume type tear of fear (fear on contact) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<21 |TEAR_SHRINK {: .copyable } | Proptosis tears start large and shrink <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<22 |TEAR_BURN {: .copyable } | Fire Mind tears cause Burn effect on enemies <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<23 |TEAR_ATTRACTOR {: .copyable } | Attracts enemies and pickups <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<24 |TEAR_KNOCKBACK {: .copyable } | Tear impact pushes enemies back further <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<25 |TEAR_PULSE {: .copyable } | Makes the tear pulse <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<26 |TEAR_SPIRAL {: .copyable } | Makes the tear path spiral <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<27 |TEAR_FLAT {: .copyable } | Makes the tear oval in the direction of travel <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<28 |TEAR_SAD_BOMB {: .copyable } | Used by Bombs (Sad Bomb) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<29 |TEAR_BUTT_BOMB {: .copyable } | Used by Bombs (Butt Bomb) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<30 |TEAR_GLITTER_BOMB {: .copyable } | Used by Bombs (Glitter Bomb) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<31 |TEAR_SQUARE {: .copyable } | Used for Hook Worm <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<32 |TEAR_GLOW {: .copyable } | Used for GodHead (they will have a glow around them) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<33 |TEAR_GISH {: .copyable } | Used for Gish player tears (to color enemy black on slowing) <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<34 |TEAR_SCATTER_BOMB {: .copyable } | Used for Scatter bombs <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<35 |TEAR_STICKY {: .copyable } | Used for Sticky bombs and Explosivo tears <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<36 |TEAR_CONTINUUM {: .copyable } | Tears loop around the screen <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<37 |TEAR_LIGHT_FROM_HEAVEN {: .copyable } | Create damaging light beam on hit <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<38 |TEAR_COIN_DROP {: .copyable } | Used by Bumbo, spawns a coin when tear hits <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<39 |TEAR_BLACK_HP_DROP {: .copyable } | Enemy drops a black hp when dies <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<40 |TEAR_TRACTOR_BEAM {: .copyable } | Tear with this flag will follow parent player's beam <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<41 |TEAR_GODS_FLESH {: .copyable } | God's flesh flag to minimize enemies <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<42 |TEAR_GREED_COIN {: .copyable } | Greed coin tears that has a chance to generate a coin when hit <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<43 |TEAR_MYSTERIOUS_LIQUID_CREEP {: .copyable } |  | 
|[ ](#){: .abrep .tooltip .badge }|1<<44 |TEAR_BIG_SPIRAL {: .copyable } | Ouroboros Worm, big radius oscilating tears <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<45 |TEAR_PERMANENT_CONFUSION {: .copyable } | Glaucoma tears, permanently confuses enemies <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<46 |TEAR_BOOGER {: .copyable } | Booger tears, stick and do damage over time <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<47 |TEAR_EGG {: .copyable } | Egg tears, leave creep and spawns spiders or flies <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<48 |TEAR_ACID {: .copyable } | Sulfuric Acid tears, can break grid entities <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<49 |TEAR_BONE {: .copyable } | Bone tears, splits in 2 <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<50 |TEAR_BELIAL {: .copyable } | Belial tears, piecing tears gets double damage + homing <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<51 |TEAR_MIDAS {: .copyable } | Midas touch tears <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<52 |TEAR_NEEDLE {: .copyable } | Needle tears <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<53 |TEAR_JACOBS {: .copyable } | Jacobs ladder tears <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<54 |TEAR_HORN {: .copyable } | Little Horn tears <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<55 |TEAR_LASER {: .copyable } | Technology Zero <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<56 |TEAR_POP {: .copyable } | Pop! <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<57 |TEAR_ABSORB {: .copyable } | Lachryphagy <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<58 |TEAR_LASERSHOT {: .copyable } | Trisagion, generates a laser on top of the tear <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<59 |TEAR_HYDROBOUNCE {: .copyable } | Flat Stone <br> | 
|[ ](#){: .abrep .tooltip .badge }|1<<60 |TEAR_LUDOVICO {: .copyable } | Used as a weapon for Ludovico Technique <br> | 
