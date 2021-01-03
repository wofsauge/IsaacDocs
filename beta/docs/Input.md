# Class "Input"
___ 
## float GetActionValue (integer action, integer controllerId )

Returns the current strength in which a button was pressed. This is 0 OR 1 with a keyboard. With a controller, this can be used to get the strength in which you have moved the analog stick in a direction.
#### Example Code
This code prints the current "strength" in which the analog stick was moved to the left.
```lua
print(Input.GetActionValue(ButtonAction.ACTION_LEFT, 1))   

```
___ 
## float GetButtonValue (integer button, integer controllerId )

Use "GetActionValue" instead of this function.
___ 
## Vector GetMousePosition (boolean gameCoords)

Returns the current mouse position in game coordinates (true) or render coordinates.
#### Example Code
This code renders "Hello World!" at the current mouse position.
```lua
local mousePos = Isaac.WorldToScreen(Input.GetMousePosition(true))-- transfer game- in screen coordinates
Isaac.RenderText("Hello World!", mousePos.X, mousePos.Y, 1 ,1 ,1 ,1 )

```
___ 
## boolean IsActionPressed (integer action, integer controllerId )

Returns, if an action-button is pressed or not. An Action-button is any button that got a default function assigned to it. This function will return true, as long the button is held down.
<a href="group__enums.html#gafa717ac273a5a382f7c01ef7afba1ee7">List of all Action enums</a>
#### Example Code
This code prints "bomb Button pressed", when any button was pressed that is assigned to the "place bomb" function.
```lua
if Input.IsActionPressed(ButtonAction.ACTION_BOMB, 0)  then
    print("bomb Button pressed")   
end

```
___ 
## boolean IsActionTriggered (integer action, integer controllerId )

Returns, if an action-button was pressed some time before or not. An Action-button is any button that got a default function assigned to it. This functions will only return true, if the button was pressed down. It will no longer return true, after you called this function and try to call it in the next update cycle (for example in the next render cycle).
<a href="group__enums.html#gafa717ac273a5a382f7c01ef7afba1ee7">List of all Action enums</a>
#### Example Code
This code prints "bomb Button pressed", when any button was pressed that is assigned to the "place bomb" function.
```lua
if Input.IsActionTriggered(ButtonAction.ACTION_BOMB, 0)  then
    print("bomb Button pressed")   
end

```
___ 
## boolean IsButtonPressed (integer button, integer controllerId )

Returns, if a button is pressed or not. This function will return true, as long the button is held down.
<a href="group__enums.html#gabcabfff8e6138e0943763148d70e5005">List of all key enums</a>
#### Example Code
This code prints "Enter Button pressed", when the "Enter"-Button was pressed.
```lua
if Input.IsButtonPressed(Keyboard.KEY_ENTER, 0)  then
    print("Enter Button pressed.")   
end

```
___ 
## boolean IsButtonTriggered (integer button, integer controllerId )

Returns, if a button was pressed some time before or not. This functions will only return true, if the button was pressed down. It will no longer return true, after you called this function and try to call it in the next update cycle (for example in the next render cycle).
<a href="group__enums.html#gabcabfff8e6138e0943763148d70e5005">List of all key enums</a>
#### Example Code
This code prints "Enter Button was pressed", when the "Enter"-Button was pressed.
```lua
if Input.IsButtonTriggered(Keyboard.KEY_ENTER, 0)  then
    print("Enter Button was pressed.")   
end

```
___ 
## boolean IsMouseBtnPressed (integer button)

Returns, if a mousebutton is pressed or not.
Left: 0, Right: 1, mousewheel: 2, back button: 3, forward button: 4
#### Example Code
This code prints "Right Click", when the "right"-mousebutton was pressed.
```lua
if Input.IsMouseBtnPressed(1)  then
    print("Right Click")   
end

```
___ 
