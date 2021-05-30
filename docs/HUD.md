# Class "HUD"
## Functions
### Assign·Player·HUDs () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void AssignPlayerHUDs ( ) {: .copyable aria-label='Functions' }
Refreshes the HUD (e.g. Characters that have Parent specified no longer show their health in the main HUD).
___ 
### Flash·Charge·Bar () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void FlashChargeBar ( [EntityPlayer](../EntityPlayer) Player, int ActiveSlot ) {: .copyable aria-label='Functions' }
Chargebar flashes as if item was actually charged.
___ 
### Invalidate·Active·Item () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void InvalidateActiveItem ( [EntityPlayer](../EntityPlayer) Player, int ActiveSlot ) {: .copyable aria-label='Functions' }
___ 
### Invalidate·Crafting·Item () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void InvalidateCraftingItem ( [EntityPlayer](../EntityPlayer) Player ) {: .copyable aria-label='Functions' }
___
### Is·Visible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean IsVisible ( ) {: .copyable aria-label='Functions' }
Returns false is HUD is invisible and true otherwise.
___ 
### Show·Fortune·Text () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void ShowFortuneText ( string MainString, string SecondaryString, ... ) {: .copyable aria-label='Functions' }
Allows to display fortune streak with text. Accepts unlimited amount of arguments.
___
### Show·Item·Text () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void ShowItemText ( string MainString, string SecondaryString, boolean IsCurseDisplay = false ) {: .copyable aria-label='Functions' }
___
### Show·Item·Text () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void ShowItemText ( EntityPlayer Player, Item Item) {: .copyable aria-label='Functions' }
Allows to display an item splash text without picking it up.
___ 
### Set·Visible () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void SetVisible ( boolean Visible = false ) {: .copyable aria-label='Functions' }
Turns the HUD on or off.
