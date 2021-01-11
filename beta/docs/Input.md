# Class "Input"
## Functions
[ ](#){: .abp .tooltip .badge }
### GetActionValue () {: aria-label='Functions' }
#### float GetActionValue ( int action, int controllerId )  {: aria-label='Functions' }

Returns the current strength in which a button was pressed. This is 0 OR 1 with a keyboard. With a controller, this can be used to get the strength in which you have moved the analog stick in a direction.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code prints the current "strength" in which the analog stick was moved to the left.
```cpp 
print(Input.GetActionValue(ButtonAction.ACTION_LEFT, 1))  

```

___ 
[ ](#){: .abp .tooltip .badge }
### GetButtonValue () {: aria-label='Functions' }
#### float GetButtonValue ( int button, int controllerId )  {: aria-label='Functions' }

Use "GetActionValue" instead of this function.
___ 
[ ](#){: .abp .tooltip .badge }
### GetMousePosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetMousePosition ( boolean gameCoords)  {: aria-label='Functions' }

Returns the current mouse position in game coordinates (true) or render coordinates.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code renders "Hello World!" at the current mouse position.
```cpp 
local mousePos = Isaac.WorldToScreen(Input.GetMousePosition(true))-- transfer game- in screen coordinates
Isaac.RenderText("Hello World!", mousePos.X, mousePos.Y, 1 ,1 ,1 ,1 )

```

___ 
[ ](#){: .abp .tooltip .badge }
### IsActionPressed () {: aria-label='Functions' }
#### boolean IsActionPressed ( int action, int controllerId )  {: aria-label='Functions' }

Returns, if an action-button is pressed or not. An Action-button is any button that got a default function assigned to it. This function will return true, as long the button is held down.
<a href="group__enums.html#gafa717ac273a5a382f7c01ef7afba1ee7">List of all Action enums</a>
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code prints "bomb Button pressed", when any button was pressed that is assigned to the "place bomb" function.
```cpp 
if Input.IsActionPressed(ButtonAction.ACTION_BOMB, 0) then
print("bomb Button pressed")  
end

```
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### IsActionTriggered () {: aria-label='Functions' }
#### boolean IsActionTriggered ( int action, int controllerId )  {: aria-label='Functions' }

Returns, if an action-button was pressed some time before or not. An Action-button is any button that got a default function assigned to it. This functions will only return true, if the button was pressed down. It will no longer return true, after you called this function and try to call it in the next update cycle (for example in the next render cycle).
<a href="group__enums.html#gafa717ac273a5a382f7c01ef7afba1ee7">List of all Action enums</a>
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code prints "bomb Button pressed", when any button was pressed that is assigned to the "place bomb" function.
```cpp 
if Input.IsActionTriggered(ButtonAction.ACTION_BOMB, 0) then
print("bomb Button pressed")  
end

```
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### IsButtonPressed () {: aria-label='Functions' }
#### boolean IsButtonPressed ( int button, int controllerId )  {: aria-label='Functions' }

Returns, if a button is pressed or not. This function will return true, as long the button is held down.
<a href="group__enums.html#gabcabfff8e6138e0943763148d70e5005">List of all key enums</a>
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code prints "Enter Button pressed", when the "Enter"-Button was pressed.
```cpp 
if Input.IsButtonPressed(Keyboard.KEY_ENTER, 0) then
print("Enter Button pressed.")  
end

```
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### IsButtonTriggered () {: aria-label='Functions' }
#### boolean IsButtonTriggered ( int button, int controllerId )  {: aria-label='Functions' }

Returns, if a button was pressed some time before or not. This functions will only return true, if the button was pressed down. It will no longer return true, after you called this function and try to call it in the next update cycle (for example in the next render cycle).
<a href="group__enums.html#gabcabfff8e6138e0943763148d70e5005">List of all key enums</a>
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code prints "Enter Button was pressed", when the "Enter"-Button was pressed.
```cpp 
if Input.IsButtonTriggered(Keyboard.KEY_ENTER, 0) then
print("Enter Button was pressed.")  
end

```
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### IsMouseBtnPressed () {: aria-label='Functions' }
#### boolean IsMouseBtnPressed ( int button)  {: aria-label='Functions' }

Returns, if a mousebutton is pressed or not.
Left: 0, Right: 1, mousewheel: 2, back button: 3, forward button: 4
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code prints "Right Click", when the "right"-mousebutton was pressed.
```cpp 
if Input.IsMouseBtnPressed(1) then
print("Right Click")  
end

```

___ 
