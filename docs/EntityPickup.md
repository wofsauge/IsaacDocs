# Class "EntityPickup"
### Inherits from Class: {: .inheritance }
[Entity](Entity.md)
## Functions
### Appear·Fast () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AppearFast ( ) {: .copyable aria-label='Functions' }

___ 
### Can·Reroll () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanReroll ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Coin·Value () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetCoinValue ( ) {: .copyable aria-label='Functions' }
If this is a coin, return its face value, else zero. 
___ 
### Is·Shop·Item () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsShopItem ( ) {: .copyable aria-label='Functions' }

___ 
### Morph () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void Morph ( [EntityType](../enums/EntityType) Type, int Variant, int SubType, boolean KeepPrice = false, boolean KeepSeed = false, boolean IgnoreModifiers = false ) {: .copyable aria-label='Functions' }
**KeepSeed**: If set to true, keeps the initial RNG seed of the pickup instead of rerolling it

**IgnoreModifiers**: If set to true, ignores item effects that might turn this pickup into something other than the specificed variant and subtype
___ 
### Play·Drop·Sound () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void PlayDropSound ( ) {: .copyable aria-label='Functions' }

___ 
### Play·Pickup·Sound () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void PlayPickupSound ( ) {: .copyable aria-label='Functions' }

___ 
### Try·Open·Chest () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean TryOpenChest ( [EntityPlayer](../EntityPlayer) Player = nil ) {: .copyable aria-label='Functions' }
**Player**: The player that opened this chest
___ 
## Variables
### Auto·Update·Price {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean AutoUpdatePrice  {: .copyable aria-label='Variables' }

___ 
### Charge {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int Charge  {: .copyable aria-label='Variables' }

___ 
### Price {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int Price  {: .copyable aria-label='Variables' }

___ 
### Shop·Item·Id {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int ShopItemId  {: .copyable aria-label='Variables' }

___ 
### State {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int State  {: .copyable aria-label='Variables' }

___ 
### Theres·Options·Pickup {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean TheresOptionsPickup  {: .copyable aria-label='Variables' }

___ 
### Timeout {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int Timeout  {: .copyable aria-label='Variables' }

___ 
### Touched {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean Touched  {: .copyable aria-label='Variables' }

___ 
### Wait {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### int Wait  {: .copyable aria-label='Variables' }

___ 
