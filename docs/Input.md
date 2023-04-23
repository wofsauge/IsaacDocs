---
tags:
  - Class
---
# Class "Input"

???+ info
    **In this class you need to use a `.` (Dot) to access its functions instead of a `:` (colon)!**

    **Example:** `Input.GetMousePosition(true)`

## Functions
### Get·Action·Value () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### float GetActionValue ( int action, int controllerId ) {: .copyable aria-label='Functions' }

Returns the current strength in which a button was pressed. This is 0 OR 1 with a keyboard. With a controller, this can be used to get the strength in which you have moved the analog stick in a direction.

???- example "Example Code"
    This code prints the current "strength" in which the analog stick was moved to the left.
    ```lua
    print(Input.GetActionValue(ButtonAction.ACTION_LEFT, 1))

    ```

___
### Get·Button·Value () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### float GetButtonValue ( int button, int controllerId ) {: .copyable aria-label='Functions' }

Use "GetActionValue" instead of this function.
___
### Get·Mouse·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetMousePosition ( boolean gameCoords ) {: .copyable aria-label='Functions' }

Returns the current mouse position in game coordinates (true) or render coordinates.

???- example "Example Code"
    This code renders "Hello World!" at the current mouse position.
    ```lua
    local mousePos = Input.GetMousePosition(true) -- get mouse position in world coordinates
    local screenPos = Isaac.WorldToScreen(mousePos) -- transfer game- to screen coordinates
    Isaac.RenderText("Hello World!", screenPos.X, screenPos.Y, 1 ,1 ,1 ,1 )

    ```

___
### Is·Action·Pressed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsActionPressed ( int action, int controllerId ) {: .copyable aria-label='Functions' }

Returns, if an action-button is pressed or not. An Action-button is any button that got a default function assigned to it. This function will return true, as long the button is held down.

[List of all Action enums](enums/ButtonAction.md)

???- example "Example Code"
    This code prints "bomb Button pressed", when any button was pressed that is assigned to the "place bomb" function.
    ```lua
    if Input.IsActionPressed(ButtonAction.ACTION_BOMB, 0)  then
        print("bomb Button pressed")
    end

    ```
___
### Is·Action·Triggered () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsActionTriggered ( int action, int controllerId ) {: .copyable aria-label='Functions' }

Returns, if an action-button was pressed some time before or not. An Action-button is any button that got a default function assigned to it. This functions will only return true, if the button was pressed down. It will no longer return true, after you called this function and try to call it in the next update cycle (for example in the next render cycle).

[List of all Action enums](enums/ButtonAction.md)

???- example "Example Code"
    This code prints "bomb Button pressed", when any button was pressed that is assigned to the "place bomb" function.
    ```lua
    if Input.IsActionTriggered(ButtonAction.ACTION_BOMB, 0)  then
        print("bomb Button pressed")
    end

    ```
___
### Is·Button·Pressed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsButtonPressed ( int button, int controllerId ) {: .copyable aria-label='Functions' }

Returns, if a button is pressed or not. This function will return true, as long the button is held down.

[List of all Keyboard enums](enums/Keyboard.md)

???- example "Example Code"
    This code prints "Enter Button pressed", when the "Enter"-Button was pressed.
    ```lua
    if Input.IsButtonPressed(Keyboard.KEY_ENTER, 0)  then
        print("Enter Button pressed.")
    end

    ```
___
### Is·Button·Triggered () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsButtonTriggered ( int button, int controllerId ) {: .copyable aria-label='Functions' }

Returns, if a button was pressed some time before or not. This functions will only return true, if the button was pressed down. It will no longer return true, after you called this function and try to call it in the next update cycle (for example in the next render cycle).

[List of all Keyboard enums](enums/Keyboard.md)

???- example "Example Code"
    This code prints "Enter Button was pressed", when the "Enter"-Button was pressed.
    ```lua
    if Input.IsButtonTriggered(Keyboard.KEY_ENTER, 0)  then
        print("Enter Button was pressed.")
    end

    ```
___
### Is·Mouse·Btn·Pressed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsMouseBtnPressed ( int button ) {: .copyable aria-label='Functions' }

Returns, if a mousebutton is pressed or not.
Left: 0, Right: 1, mousewheel: 2, back button: 3, forward button: 4

???- example "Example Code"
    This code prints "Right Click", when the "right"-mousebutton was pressed.
    ```lua
    if Input.IsMouseBtnPressed(1)  then
        print("Right Click")
    end

    ```

___
