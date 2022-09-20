---
tags:
  - Class
search:
  boost: 0.25
---
# Class "TemporaryEffects"

???+ info
    You can get this class by using the following function:

    * [EntityPlayer:GetEffects()](EntityPlayer.md#geteffects)

    ???+ example "Example Code"
        ```lua
        local player = Isaac.GetPlayer()
        local tempEffects = player:GetEffects()
        ```

## Functions
### Add·Collectible·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddCollectibleEffect ( [CollectibleType](enums/CollectibleType.md) CollectibleType, boolean AddCostume = true, int Count = 1 ) {: .copyable aria-label='Functions' }
Adds the effect of a collectible to the player, without actually giving him the assosiated item.

???+ bug
    This function only works for a subset of collectibles. For example, it will work with "Holy Mantle", but not with "Chocolate Milk".
    
    ???- info
        Passive tems that work when used with AddCollectibleEffect() (excluding quest items).

        - Sad Onion
        - Inner Eye
        - Spoon Bender
        - My Reflection
        - Number One
        - Brother Bobby
        - Magic Mushroom
        - The Virus
        - Roid Rage
        - Transcendence
        - Mom's Underwear
        - Mom's Heels
        - Mom's Lipstick
        - Mom's Eye
        - Distant Admiration
        - Sister Maggy
        - Growth Hormones
        - Mini Mush
        - Cube of Meat (all levels)
        - Little Chubby
        - Sack of Pennies
        - Robo-Baby
        - Little Chad
        - The Relic
        - Little Gish
        - Little Steven
        - The Wafer
        - Mom's Contacts
        - Guardian Angel
        - Demon Baby
        - Mom's Knife
        - Ouija Board
        - Dead Bird (spawns the bird without having to get hit)
        - Brimstone
        - Odd Mushroom (Thin)
        - Odd Mushroom (Large)
        - Whore of Babylon (grants the effect without having to be at half a heart or less)
        - Forever Alone
        - Bomb Bag
        - Speed Ball
        - Bum Friend
        - Tough Love
        - Peeper (only gives the familiar)
        - Ghost Baby
        - Harlequin Baby
        - Daddy Longlegs
        - Sacrificial Dagger
        - Rainbow Baby
        - Holy Water
        - Guppy's Hairball
        - Abel
        - Mom's Key
        - Mom's Eyeshadow
        - Iron Bar
        - The Guillotine
        - Ball of Bandages (all levels)
        - Anemic (grants the creep trail without having to get hit)
        - Mom's Wig
        - Mom's Perfume
        - Death's Touch
        - Experimental Treatment (stat changes are seeded per room)
        - 20/20 (no damage down)
        - Hive Mind
        - Fire Mind
        - Dark Matter
        - Proptosis
        - Smart Fly
        - Dry Baby
        - Juciy Sack
        - Robo-Baby 2.0
        - Rotten Baby
        - Headless Baby
        - Leech
        - Mystery Sack
        - BBF
        - Bob's Brain
        - Best Bud (grants the familiar witout having to get hit)
        - Lil Brimstone
        - Lil Haunt
        - Dark Bum
        - Big Fan
        - Sissy Longlegs
        - Punching Bag
        - Leo
        - Holy Mantle
        - Mysterious Liquid
        - Gemini
        - Cain's Other Eye
        - ???'s Only Friend
        - Samson's Chains
        - Mongo Baby
        - Blue Cap
        - Synthoil
        - Mom's Pearls
        - The Wiz
        - Incubus
        - Fate's Reward
        - Lil Chest
        - Sworn Protector
        - Friend Zone
        - Lost Fly
        - Charged Baby
        - Holy Light
        - Lil Gurdy
        - Bumbo
        - Censer
        - Key Bum
        - Rune Bag
        - Seraphim
        - Tractor Beam (only grants a tears up)
        - God's Flesh
        - Spider Mod
        - Farting Baby
        - Empty Vessel (grants flight even with red hearts; shield doesn't trigger)
        - Lusty Blood (each count of the effect increases damage; doesn't increase with kills)
        - Crown of Light (only gives range up and shot speed down, doesn't go away when hit)
        - Succubus
        - Fruit Cake
        - Obsessed Fan
        - Head of the Keeper
        - Papa Fly
        - Multidimensional Baby
        - Lil Loki
        - Milk! (grants a tears up instead of the familiar)
        - Dark Prince's Crown (grants its effect as if it was active no matter your health)
        - Finger!
        - Shade
        - Depression
        - Hushy
        - Lil Monstro
        - King Baby
        - Big Chubby
        - Acid Baby
        - Yo Listen!
        - Adrenaline
        - Euthanasia
        - Camo Undies
        - Sack of Sacks
        - Mom's Razor
        - Bloodshot Eye
        - Angry Fly
        - Buddy in a Box
        - Lil Delirium
        - 7 Seals
        - Angelic Prism
        - Lil Spewer
        - Mystery Egg
        - Slipped Rib
        - Hallowed Ground
        - Pointy Rib
        - Jaw Bone
        - Blood Puppy
        - Paschal Candle (each count of the effect increases tears; doesn't give the familiar)
        - Eye of the Occult (doesn't change any stats)
        - Intruder (doesn't release the spider on hit)
        - Psy Fly
        - Mars (immediately causes the dash effect)
        - Uranus
        - Boiled Baby
        - Freezer Baby
        - Bird Cage (spawns the bird without having to get hit)
        - Lil Dumpy
        - Bot Fly
        - Tinytoma
        - Fruity Plum
        - Cube Baby
        - Astral Projection (turns you into the ghost that gets a free hit + flight)
        - Lil Abaddon
        - Lil Portal
        - Worm Friend
        - Innner Child (permanently grants speed and size down as if you just revived)
        - Twisted Pair
        - Mom's Ring

???- example "Example Code"
    This code applies the effect and costume of the item "Sad Onion" to the player.

    ```lua
    local player = Isaac.GetPlayer()
    player:GetEffects():AddCollectibleEffect(CollectibleType.COLLECTIBLE_SAD_ONION, true)
    ```
___
### Add·Null·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddNullEffect ( [ItemConfigNullItemID](ItemConfig_Item.md) NullId, boolean AddCostume = true, int Count = 1 ) {: .copyable aria-label='Functions' }

___
### Add·Trinket·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AddTrinketEffect ( [TrinketType](enums/TrinketType.md) TrinketType, boolean AddCostume = true, int Count = 1 ) {: .copyable aria-label='Functions' }

___
### Clear·Effects () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ClearEffects ( ) {: .copyable aria-label='Functions' }

___
### Get·Collectible·Effect () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [TemporaryEffect](TemporaryEffect.md) GetCollectibleEffect ( [CollectibleType](enums/CollectibleType.md) CollectibleType ) {: .copyable aria-label='Functions' }

___
### Get·Collectible·Effect·Num () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetCollectibleEffectNum ( [CollectibleType](enums/CollectibleType.md) CollectibleType ) {: .copyable aria-label='Functions' }

___
### Get·Effects·List () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [EffectList](CppContainer_Vector_EffectList.md) GetEffectsList ( ) {: .copyable aria-label='Functions' }

___
### Get·Null·Effect () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [TemporaryEffect](TemporaryEffect.md) GetNullEffect ( [ItemConfigNullItemID](ItemConfig_Item.md) NullId ) {: .copyable aria-label='Functions' }

___
### Get·Null·Effect·Num () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetNullEffectNum ( [ItemConfigNullItemID](ItemConfig_Item.md) NullId ) {: .copyable aria-label='Functions' }

___
### Get·Trinket·Effect () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [TemporaryEffect](TemporaryEffect.md) GetTrinketEffect ( [TrinketType](enums/TrinketType.md) TrinketType ) {: .copyable aria-label='Functions' }

___
### Get·Trinket·Effect·Num () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetTrinketEffectNum ( [TrinketType](enums/TrinketType.md) TrinketType ) {: .copyable aria-label='Functions' }

___
### Has·Collectible·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasCollectibleEffect ( [CollectibleType](enums/CollectibleType.md) CollectibleType ) {: .copyable aria-label='Functions' }

___
### Has·Null·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasNullEffect ( [ItemConfigNullItemID](ItemConfig_Item.md) NullId ) {: .copyable aria-label='Functions' }

___
### Has·Trinket·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasTrinketEffect ( [TrinketType](enums/TrinketType.md) TrinketType ) {: .copyable aria-label='Functions' }

___
### Remove·Collectible·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void RemoveCollectibleEffect ( [CollectibleType](enums/CollectibleType.md) CollectibleType, int Count = 1 ) {: .copyable aria-label='Functions' }
Count = -1 removes all instances of the effect
___
### Remove·Null·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void RemoveNullEffect ( [ItemConfigNullItemID](ItemConfig_Item.md) NullId, int Count = 1 ) {: .copyable aria-label='Functions' }
Count = -1 removes all instances of the effect
___
### Remove·Trinket·Effect () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void RemoveTrinketEffect ( [TrinketType](enums/TrinketType.md) TrinketType, int Count = 1 ) {: .copyable aria-label='Functions' }
Count = -1 removes all instances of the effect
___
