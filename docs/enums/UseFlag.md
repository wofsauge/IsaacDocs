---
tags:
  - Enum
---
# Enum "UseFlag"

???+ tip "Bitset Calculator"
    [](#){: .bitsetCalculator }

|DLC|Value|Enumerator|Comment|
|:--|:--|:--|:--|
|[ ](#){: .reporplus .tooltip .badge }|1 << 0 |USE_NOANIM {: .copyable } | Don't play use animations |
|[ ](#){: .reporplus .tooltip .badge }|1 << 1 |USE_NOCOSTUME {: .copyable } | Don't add costume |
|[ ](#){: .reporplus .tooltip .badge }|1 << 2 |USE_OWNED {: .copyable } | Effect was triggered by an active item owned by the player |
|[ ](#){: .reporplus .tooltip .badge }|1 << 3 |USE_ALLOWNONMAIN {: .copyable } | Allow the effect to trigger on non-main players (i.e. coop babies) |
|[ ](#){: .reporplus .tooltip .badge }|1 << 4 |USE_REMOVEACTIVE {: .copyable } | D4 only: Reroll the player's active item |
|[ ](#){: .reporplus .tooltip .badge }|1 << 5 |USE_CARBATTERY {: .copyable } | Effect was triggered a second time by Car Battery (or Tarot Cloth for cards) |
|[ ](#){: .reporplus .tooltip .badge }|1 << 6 |USE_VOID {: .copyable } | Effect was triggered by Void |
|[ ](#){: .reporplus .tooltip .badge }|1 << 7 |USE_MIMIC {: .copyable } | Effect was mimicked by an active item (Blank Card, Placebo) |
|[ ](#){: .reporplus .tooltip .badge }|1 << 8 |USE_NOANNOUNCER {: .copyable } | Never play announcer voice |
|[ ](#){: .reporplus .tooltip .badge }|1 << 9 |USE_ALLOWWISPSPAWN {: .copyable } | This allows an item to spawn wisps when called from another item usage as the wisps generator checks for NOANIM, so usually you want to use this with NOANIM call |
|[ ](#){: .reporplus .tooltip .badge }|1 << 10 |USE_CUSTOMVARDATA {: .copyable } | If set, forces UseActiveItem to use the CustomVarData argument instead of the active item's stored VarData |
|[ ](#){: .reporplus .tooltip .badge }|1 << 11 |USE_NOHUD {: .copyable } | Don't display text in the HUD (this is currently only used by Echo Chamber) |
