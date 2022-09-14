---
tags:
  - Enum
---
# Enum "ItemConfig"

The "ItemConfig" Class has separate Enums that are used for special information handling.

Even though they have different prefixes, all enums on this page are part of the "**ItemConfig**" enum.

???+ example "Example usage:"

    ```lua
    local sadOnionConfig = Isaac.GetItemConfig():GetCollectible(1)
    if sadOnionConfig.Tags & ItemConfig.TAG_SUMMONABLE == ItemConfig.TAG_SUMMONABLE then
        print("This item has the tag 'summonable'")
    end
    ```

|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .rep .tooltip .badge }|0 |CHARGE_NORMAL {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|1 |CHARGE_TIMED {: .copyable } |  |
|[ ](#){: .rep .tooltip .badge }|2 |CHARGE_SPECIAL {: .copyable } |  |

|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .rep .tooltip .badge }|0 |CARDTYPE_TAROT {: .copyable } | Tarot cards |
|[ ](#){: .rep .tooltip .badge }|1 |CARDTYPE_SUIT {: .copyable } | Standard playing cards (twos, aces and Joker, does not include Suicide King, Rules Card or Queen of Hearts) |
|[ ](#){: .rep .tooltip .badge }|2 |CARDTYPE_RUNE {: .copyable } | Runes |
|[ ](#){: .rep .tooltip .badge }|3 |CARDTYPE_SPECIAL {: .copyable } | Special cards (anything that doesn't fall in the above categories excludes non-cards such as Dice Shard, see below) |
|[ ](#){: .rep .tooltip .badge }|4 |CARDTYPE_SPECIAL_OBJECT {: .copyable } | Special pocket items that do not qualify as "cards" |
|[ ](#){: .rep .tooltip .badge }|5 |CARDTYPE_TAROT_REVERSE {: .copyable } | Reversed tarot cards |

|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .rep .tooltip .badge }|1 << 0 |TAG_DEAD {: .copyable } | Dead things (for the Parasite unlock) |
|[ ](#){: .rep .tooltip .badge }|1 << 1 |TAG_SYRINGE {: .copyable } | Syringes (for Little Baggy and the Spun! transformation) |
|[ ](#){: .rep .tooltip .badge }|1 << 2 |TAG_MOM {: .copyable } | Mom's things (for Mom's Contact and the Yes Mother? transformation) |
|[ ](#){: .rep .tooltip .badge }|1 << 3 |TAG_TECH {: .copyable } | Technology items (for the Technology Zero unlock) |
|[ ](#){: .rep .tooltip .badge }|1 << 4 |TAG_BATTERY {: .copyable } | Battery items (for the Jumper Cables unlock) |
|[ ](#){: .rep .tooltip .badge }|1 << 5 |TAG_GUPPY {: .copyable } | Guppy items (Guppy transformation) |
|[ ](#){: .rep .tooltip .badge }|1 << 6 |TAG_FLY {: .copyable } | Fly items (Beelzebub transformation) |
|[ ](#){: .rep .tooltip .badge }|1 << 7 |TAG_BOB {: .copyable } | Bob items (Bob transformation) |
|[ ](#){: .rep .tooltip .badge }|1 << 8 |TAG_MUSHROOM {: .copyable } | Mushroom items (Fun Guy transformation) |
|[ ](#){: .rep .tooltip .badge }|1 << 9 |TAG_BABY {: .copyable } | Baby items (Conjoined transformation) |
|[ ](#){: .rep .tooltip .badge }|1 << 10 |TAG_ANGEL {: .copyable } | Angel items (Seraphim transformation) |
|[ ](#){: .rep .tooltip .badge }|1 << 11 |TAG_DEVIL {: .copyable } | Devil items (Leviathan transformation) |
|[ ](#){: .rep .tooltip .badge }|1 << 12 |TAG_POOP {: .copyable } | Poop items (Oh Shit transformation) |
|[ ](#){: .rep .tooltip .badge }|1 << 13 |TAG_BOOK {: .copyable } | Book items (Book Worm transformation) |
|[ ](#){: .rep .tooltip .badge }|1 << 14 |TAG_SPIDER {: .copyable } | Spider items (Spider Baby transformation) |
|[ ](#){: .rep .tooltip .badge }|1 << 15 |TAG_QUEST {: .copyable } | Quest item (cannot be rerolled or randomly obtained) |
|[ ](#){: .rep .tooltip .badge }|1 << 16 |TAG_MONSTER_MANUAL {: .copyable } | Can be spawned by Monster Manual |
|[ ](#){: .rep .tooltip .badge }|1 << 17 |TAG_NO_GREED {: .copyable } | Cannot appear in Greed Mode |
|[ ](#){: .rep .tooltip .badge }|1 << 18 |TAG_FOOD {: .copyable } | Food item (for Binge Eater) |
|[ ](#){: .rep .tooltip .badge }|1 << 19 |TAG_TEARS_UP {: .copyable } | Tears up item (for Lachryphagy unlock detection) |
|[ ](#){: .rep .tooltip .badge }|1 << 20 |TAG_OFFENSIVE {: .copyable } | Whitelisted item for Lost B |
|[ ](#){: .rep .tooltip .badge }|1 << 21 |TAG_NO_KEEPER {: .copyable } | Blacklisted item for Keeper/Keeper B |
|[ ](#){: .rep .tooltip .badge }|1 << 22 |TAG_NO_LOST_BR {: .copyable } | Blacklisted item for Lost's Birthright |
|[ ](#){: .rep .tooltip .badge }|1 << 23 |TAG_STARS {: .copyable } | Star themed items (for the Planetarium unlock) |
|[ ](#){: .rep .tooltip .badge }|1 << 24 |TAG_SUMMONABLE {: .copyable } | Summonable items (for Bethany B) |
|[ ](#){: .rep .tooltip .badge }|1 << 25 |TAG_NO_CANTRIP {: .copyable } | Can't be obtained in Cantripped challenge |
|[ ](#){: .rep .tooltip .badge }|1 << 26 |TAG_WISP {: .copyable } | Active items that have wisps attached to them (automatically set) |
|[ ](#){: .rep .tooltip .badge }|1 << 27 |TAG_UNIQUE_FAMILIAR {: .copyable } | Unique familiars that cannot be duplicated |
|[ ](#){: .rep .tooltip .badge }|1 << 28 |TAG_NO_CHALLENGE {: .copyable } | Items that shouldn't be obtainable in challenges |
|[ ](#){: .rep .tooltip .badge }|1 << 29 |TAG_NO_DAILY {: .copyable } | Items that shouldn't be obtainable in daily runs |
|[ ](#){: .rep .tooltip .badge }|1 << 30 |TAG_LAZ_SHARED {: .copyable } | Items that should be shared between Tainted Lazarus' forms |
|[ ](#){: .rep .tooltip .badge }|1 << 31 |TAG_LAZ_SHARED_GLOBAL {: .copyable } | Items that should be shared between Tainted Lazarus' forms but only through global checks (such as PlayerManager::HasCollectible) |
|[ ](#){: .rep .tooltip .badge }|1 << 32 |TAG_NO_EDEN {: .copyable } | Items that can't be randomly rolled |
