# Enum "CacheFlag"

???+ tip "Bitset Calculator"
    [](#){: .bitsetCalculator }

|DLC|Value|Enumerator|Value|Comment|
|:--|:--|:--|:--|:--|
|[ ](#){: .abrep .tooltip .badge }|1 |CACHE_DAMAGE {: .copyable } | 0x1 | |
|[ ](#){: .abrep .tooltip .badge }|2 |CACHE_FIREDELAY {: .copyable } | 0x2 |  |
|[ ](#){: .abrep .tooltip .badge }|4 |CACHE_SHOTSPEED {: .copyable } | 0x4 |  |
|[ ](#){: .abrep .tooltip .badge }|8 |CACHE_RANGE {: .copyable } | 0x8 |  |
|[ ](#){: .abrep .tooltip .badge }|16 |CACHE_SPEED {: .copyable } | 0x10 |  |
|[ ](#){: .abrep .tooltip .badge }|32 |CACHE_TEARFLAG {: .copyable } | 0x20 |  |
|[ ](#){: .abrep .tooltip .badge }|64 |CACHE_TEARCOLOR {: .copyable } | 0x40 |  |
|[ ](#){: .abrep .tooltip .badge }|128 |CACHE_FLYING {: .copyable } | 0x80 |  |
|[ ](#){: .abrep .tooltip .badge }|256 |CACHE_WEAPON {: .copyable } | 0x100 |  |
|[ ](#){: .abrep .tooltip .badge }|512 |CACHE_FAMILIARS {: .copyable } | 0x200 |  |
|[ ](#){: .abrep .tooltip .badge }|1024 |CACHE_LUCK {: .copyable } | 0x400 |  |
|[ ](#){: .rep .tooltip .badge }|2048 |CACHE_SIZE {: .copyable } | 0x800 | invalidates player size |
|[ ](#){: .rep .tooltip .badge }|4096 |CACHE_COLOR {: .copyable } | 0x1000 | invalidates player color |
|[ ](#){: .rep .tooltip .badge }|8192 |CACHE_PICKUP_VISION {: .copyable } | 0x2000 | invalidates effects that predict pickup drops (i.e. Guppy's Eye) |
|[ ](#){: .abrep .tooltip .badge }|65535 |CACHE_ALL {: .copyable } | 0xFFFF |  |
|[ ](#){: .rep .tooltip .badge }|2147483648 |CACHE_TWIN_SYNC {: .copyable } | 0x80000000 | special cache flag used when syncing Jacob and Esau's speed |