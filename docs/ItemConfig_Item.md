# Class "ItemConfigItem"
## Functions
___
### Has·Tags () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasTags ( int Tags ) {: .copyable aria-label='Functions' }

Returns true or false, depending on whether or not the item has the given [tag](enums/ItemConfig.md).

???- example "Example Code"
    Returns if The Sad Onion has the tag "Bob" (for the Bob transformation)
    ```lua
    Isaac.GetItemConfig():GetCollectible(1):HasTags(ItemConfig.TAG_BOB)
    ```
___
### Is·Collectible () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsCollectible ( ) {: .copyable aria-label='Functions' }

Returns if the item is a collectible.
___
### Is·Null () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsNull ( ) {: .copyable aria-label='Functions' }

Returns if the item is null.
___
### Is·Trinket () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsTrinket ( ) {: .copyable aria-label='Functions' }

Returns if the item is a trinket.
___
## Variables
### Achievement·ID {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int AchievementID  {: .copyable aria-label='Variables' }

Returns the ID of the achievement that unlocks the item. Returns ``:::lua -1`` if the item is unlocked by default.
___
### Add·Black·Hearts {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int AddBlackHearts  {: .copyable aria-label='Variables' }

Returns the number of black hearts the item adds to the player. 1 unit is one half black heart.
___
### Add·Bombs {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int AddBombs  {: .copyable aria-label='Variables' }

Returns the number of bombs the item adds to the player.
___
### Add·Coins {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int AddCoins  {: .copyable aria-label='Variables' }

Returns the number of coins the item adds to the player.
___
### Add·Hearts {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int AddHearts  {: .copyable aria-label='Variables' }

Returns the number of red hearts the item heals the player by. 1 unit is one half red heart.
___
### Add·Keys {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int AddKeys  {: .copyable aria-label='Variables' }

Returns the number of keys the item adds to the player.
___
### Add·Max·Hearts {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int AddMaxHearts  {: .copyable aria-label='Variables' }

Returns the number of empty heart containters the item adds to the player. 1 unit is one half red heart.
___
### Add·Soul·Hearts {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int AddSoulHearts  {: .copyable aria-label='Variables' }

Returns the number of soul hearts the item adds to the player. 1 unit is one half soul heart.
___
### Cache·Flags {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int CacheFlags  {: .copyable aria-label='Variables' }

Returns the [CacheFlags](enums/CacheFlag.md) set by the item.
___
### Charge·Type {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int ChargeType  {: .copyable aria-label='Variables' }

The ChargeType of the item, shown in [items.xml](xml/items.md). If the item has no defined ChargeType, it will return ``:::lua 0``

???- note "Charge Types"
    ```lua
    0: Normal
    1: Timed
    2: Special
    ```
___
### Clear·Effects·On·Remove {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean ClearEffectsOnRemove  {: .copyable aria-label='Variables' }

Returns whether or not the item's effects should be removed when the item is removed.
___
### Costume {: aria-label='Variables' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Costume](ItemConfig_Costume.md) Costume {: .copyable aria-label='Variables' }

Returns the costume given to the player by the item.
___
### Description {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### string Description  {: .copyable aria-label='Variables' }

Returns the item's description.

???- warning "Warning"
    In Repentance, returns "#[ITEM_DESCRIPTION]" rather than the item's ingame description. (i.e. The Sad Onion will return #THE_SAD_ONION_DESCRIPTION)
___
### Devil·Price {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int DevilPrice  {: .copyable aria-label='Variables' }

Returns the amount of hearts an item would cost at a devil deal. 1 unit is a full red heart.
Any item that is not marked with a devil price will return ``:::lua 1``

???- example "Example Code"
    Returns the number of hearts brimstone would cost at a devil deal.
    ```lua
    Isaac.GetItemConfig():GetCollectible(118).DevilPrice
    ```
___
### Discharged {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean Discharged  {: .copyable aria-label='Variables' }

___
### Gfx·File·Name {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### string GfxFileName  {: .copyable aria-label='Variables' }

Returns the path to the item's GFX.
___
### Hidden {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean Hidden  {: .copyable aria-label='Variables' }

Returns if the item can appear in Death Certificate area. If ``:::lua true`` the item will not appear.
___
### ID {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int ID  {: .copyable aria-label='Variables' }

Returns the item's ID.
___
### Init·Charge {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int InitCharge  {: .copyable aria-label='Variables' }

Returns how much charge the item should have when picked up. ``:::lua -1`` indicates the item is fully charged when collected.

___
### Max·Charges {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int MaxCharges  {: .copyable aria-label='Variables' }

The maximum number of charges an active item could have.
___
### Max·Cooldown {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int MaxCooldown  {: .copyable aria-label='Variables' }

Returns how many frames an active item's CollectibleEffect should last.
___
### Name {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### string Name  {: .copyable aria-label='Variables' }

Returns the item's name.

???- warning "Warning"
    In Repentance, returns "#[ITEM_NAME]" rather than the item's ingame name. (i.e. The Sad Onion will return #THE_SAD_ONION_NAME)
___
### Passive·Cache {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean PassiveCache  {: .copyable aria-label='Variables' }

Whether or not a cache evaluation is called when the item is picked up. (used in item's like "Mom's Box")
___
### Persistent·Effect {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean PersistentEffect  {: .copyable aria-label='Variables' }

Returns whether or not an active item's CollectibleEffect should persist between rooms. Any item without this set will return ``:::lua false``.
___
### Quality {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Quality  {: .copyable aria-label='Variables' }

Returns the item's quality. Possible values are 0, 1, 2, 3, 4.
___
### Shop·Price {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int ShopPrice  {: .copyable aria-label='Variables' }

Returns the cost of the item at a shop. Returns ``:::lua 15`` if the item has no defined price in [items.xml](xml/items.md).
___
### Special {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean Special  {: .copyable aria-label='Variables' }

For the special collectible reroll system. (not applicable in Repentance)
___
### Tags {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### int Tags  {: .copyable aria-label='Variables' }

Returns the tags of the item.
___
### Type {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [ItemType](enums/ItemType.md) Type  {: .copyable aria-label='Variables' }

The item's [ItemType](enums/ItemType.md).
___
