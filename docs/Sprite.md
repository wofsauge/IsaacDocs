---
tags:
  - Globals
  - Class
---
# Class "Sprite"

???+ info
    This class can be accessed by using its constructor or the following function:

    * [Entity.GetSprite()](Entity.md#getsprite)
    * [GridEntity.GetSprite()](GridEntity.md#getsprite)
    * [GridEntityDoor.ExtraSprite](GridEntityDoor.md#extrasprite)
    * [GridEntityPressurePlate.TimerPlate](GridEntityPressurePlate.md#timerplate)

    ???+ example "Example Code"
        ```lua
        local mySprite = Sprite()
        ```

## Constructors
### Sprite () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [Sprite](Sprite.md) Sprite ( ) {: .copyable aria-label='Constructors' }

___
## Functions
### Get·Animation () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### string GetAnimation ( ) {: .copyable aria-label='Functions' }
Return the name of the currently playing animation.

___
### Get·Default·Animation () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### string GetDefaultAnimation ( ) {: .copyable aria-label='Functions' }
Returns the `DefaultAnimation` value from the currently loaded anm2 file.

This function seems to be the same as `GetDefaultAnimationName()`.

???- example "Example Code"
    This code print the default animation name "WalkDown" of the player sprite.

    ```lua
    local player = Isaac.GetPlayer()
    local sprite = player:GetSprite()
    print(sprite:GetDefaultAnimation()) -- this prints "WalkDown"
    ```

___
### Get·Default·Animation·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### string GetDefaultAnimationName ( ) {: .copyable aria-label='Functions' }
Returns the `DefaultAnimation` value from the currently loaded anm2 file.

This function seems to be the same as `GetDefaultAnimation()`.

???- example "Example Code"
    This code print the default animation name "WalkDown" of the player sprite.

    ```lua
    local player = Isaac.GetPlayer()
    local sprite = player:GetSprite()
    print(sprite:GetDefaultAnimationName()) -- this prints "WalkDown"
    ```

___
### Get·Filename () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### string GetFilename ( ) {: .copyable aria-label='Functions' }
Returns the path to the anm2 file that is loaded on the sprite.

???- example "Example Code"
    This code print the .anm2 path of the player sprite.

    ```lua
    local player = Isaac.GetPlayer()
    local sprite = player:GetSprite()
    print(sprite:GetFilename()) -- this prints "gfx/001.000_Player.anm2"
    ```

___
### Get·Frame () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetFrame ( ) {: .copyable aria-label='Functions' }
Returns the frame number of the animation that is currently being rendered.

___
### Get·Layer·Count () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetLayerCount ( ) {: .copyable aria-label='Functions' }
Returns the number of layers in the anm2 file that is loaded on the sprite. All animations use the same amount of layers.

___
### Get·Overlay·Animation () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### string GetOverlayAnimation ( ) {: .copyable aria-label='Functions' }
Returns the name of the currently playing overlay animation. (The overlay animation is an independent secondary animation that can be played at the same time as the normal animation.)

___
### Get·Overlay·Frame () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetOverlayFrame ( ) {: .copyable aria-label='Functions' }
Returns the frame number of the overlay animation that is currently being rendered. (The overlay animation is an independent secondary animation that can be played at the same time as the normal animation.)

___
### Get·Texel () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [KColor](KColor.md) GetTexel ( [Vector](Vector.md) SamplePos, [Vector](Vector.md) RenderPos, float AlphaThreshold, int LayerID = 0 ) {: .copyable aria-label='Functions' }
Returns the color of the pixel of the sprite at the given sample position. RenderPos can be neglected and set to a null vector

___
### Is·Event·Triggered () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsEventTriggered ( string EventName ) {: .copyable aria-label='Functions' }
Returns true if the specified event in the animation is currently being triggered.

___
### Is·Finished () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsFinished ( string AnimationName ) {: .copyable aria-label='Functions' }

#### boolean IsFinished ( ) {: .copyable aria-label='Functions' }

___
### Is·Loaded () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsLoaded ( ) {: .copyable aria-label='Functions' }

___
### Is·Overlay·Finished () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsOverlayFinished ( string AnimationName ) {: .copyable aria-label='Functions' }

#### boolean IsOverlayFinished ( ) {: .copyable aria-label='Functions' }

___
### Is·Overlay·Playing () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsOverlayPlaying ( string AnimationName ) {: .copyable aria-label='Functions' }

#### boolean IsOverlayPlaying ( ) {: .copyable aria-label='Functions' }

___
### Is·Playing () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsPlaying ( string AnimationName ) {: .copyable aria-label='Functions' }

#### boolean IsPlaying ( ) {: .copyable aria-label='Functions' }
Returns true/false depending on if the sprite is playing the provided animation name. Names are set in a given sprite's anm2 file.

???- example "Example Code"
    This code checks the name of the current animation ("Appear" and "Idle" are used by cards), then replaces its animations with ones loaded from a custom anm2 file called "Custom_Animations.anm2", which has the same animation names.

    ```lua
	if mySprite:IsPlaying("Appear") then
		mySprite:Load("gfx/Custom_Animations.anm2", true)
		mySprite:LoadGraphics()
		mySprite:Play("Appear",true)
		mySprite:Update()
	elseif mySprite:IsPlaying("Idle") then
		mySprite:Load("gfx/Custom_Animations.anm2", true)
		mySprite:LoadGraphics()
		mySprite:Play("Idle",true)
		mySprite:Update()
	end
    ```

___
### Load () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Load ( string ANM2Path, boolean LoadGraphics ) {: .copyable aria-label='Functions' }
Loads a given anm2 file. Each sprite must have an anm2 file loaded in order for it to display anything.

- ANM2Path - The path to the anm2 file that contains all of the animations for this sprite. This should be relative to the "resources" folder.
- LoadGraphics - Whether or not the `Sprite.LoadGraphics` method is automatically called after the anm2 file is loaded.

???- example "Example Code"
    This code creates a new sprite object, loads an .anm2 file and renders it on the screen.

    ```lua
	local mySprite = Sprite()
	mySprite:Load("gfx/myCoolAnimation.anm2", true)
    mySprite:Render(Vector(75,75), Vector(0,0), Vector(0,0))
    ```

___
### Load·Graphics () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void LoadGraphics ( ) {: .copyable aria-label='Functions' }
Used to load the PNG files that are specified in the sprite's anm2. Typically, you would only call this method if you have previously passed false to the `loadGraphics` argument of the `Sprite.Load` method or you have called the `Sprite.ReplaceSpritesheet` method.

???- example "Example Code"
    This code creates a new sprite object and replaces the spritesheet of layer 0 of a sprite object with a different spritesheet.

    ```lua
	local mySprite = Sprite()
	mySprite:Load("gfx/myCoolAnimation.anm2", true)
	mySprite:ReplaceSpritesheet(0, "gfx/my_new_spritesheet.png")
	mySprite:LoadGraphics()
    ```

___
### Play () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Play ( string AnimationName, boolean Force ) {: .copyable aria-label='Functions' }
Starts executing the given animation, starting at frame 0. After calling this method, you must call the `Sprite.Update` method on every update frame (if you want to update the animation in a render callback, make sure to only run it on even frames) in order to advance the animation to the next frame. (Typically, you would also check to see if the animation is finished by using the `Sprite.IsFinished` method.)

Calling this method again will reset the current frame back to 0.

- **Force** - If true, the currently playing animation will be stopped, if any. If false, and there is already a currently playing animation, this method will do nothing and the current animation will continue to play.

???- example "Example Code"
    This code plays and renders a sprite.

    ```lua
    	-- Sprite objects only need to be created and loaded once.
	local mySprite = Sprite()
	mySprite:Load("gfx/myCoolAnimation.anm2", true)

	-- Execute this function only once! for example when an event is triggered
	function myPlaySpriteFunction()
		mySprite:Play("MyAnimation", true)
	end

	-- Execute this function every POST_RENDER. For example in the MC_POST_RENDER callback.
	function myRenderSpriteFunction()
		mySprite:Update()
		mySprite:Render(Vector(50,50), Vector(0,0), Vector(0,0))
	end
    ```

___
### Play·Overlay () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void PlayOverlay ( string AnimationName, boolean Force ) {: .copyable aria-label='Functions' }
Starts executing the given overlay animation, starting at frame 0. (The overlay animation is an independent secondary animation that can be played at the same time as the normal animation.) After calling this method, you must call the `Sprite.Update` method on every update frame (if you want to update the animation in a render callback, make sure to only run it on even frames) in order to advance the animation to the next frame. (Typically, you would also check to see if the animation is finished by using the `Sprite.IsOverlayFinished` method.)

Calling this function again will always reset the current overlay frame back to 0.

- **Force** - If true, the currently playing animation will be stopped, if any. If false, and there is already a currently playing animation, this method will do nothing and the current animation will continue to play.

???- example "Example Code"
    This code plays and renders an overlay sprite.

    ```lua
    	-- Sprite objects only need to be created and loaded once.
	local mySprite = Sprite()
	mySprite:Load("gfx/myCoolAnimation.anm2", true)

	-- Execute this function only once! for example when an event is triggered
	function myPlaySpriteFunction()
		mySprite:PlayOverlay("MyOverlayAnimation", true)
	end

	-- Execute this function every POST_RENDER. For example in the MC_POST_RENDER callback.
	function myRenderSpriteFunction()
		mySprite:Render(Vector(50,50), Vector(0,0), Vector(0,0))
	end
    ```

___
### Play·Random () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void PlayRandom ( int Seed ) {: .copyable aria-label='Functions' }
Plays a random animation from the currently loaded anm2 file.

___
### Reload () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Reload ( ) {: .copyable aria-label='Functions' }

___
### Remove·Overlay () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveOverlay ( ) {: .copyable aria-label='Functions' }

___
### Render () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Render ( [Vector](Vector.md) Position, [Vector](Vector.md) [Vector](Vector.md) TopLeftClamp = Vector.Zero, [Vector](Vector.md) BottomRightClamp = Vector.Zero ) {: .copyable aria-label='Functions' }
Renders the sprite object at a given screen position, where (0, 0) is the top left corner of the screen.

In order for the sprite to be drawn, this function needs to be called on every render frame. (For example in the `MC_POST_RENDER` callback.)

TopLeftClamp and BottomRightClamp can be used to crop the sprite.

???- example "Example Code"
    This code renders a sprite.

    ```lua
    	-- Sprite objects only need to be created and loaded once.
	local mySprite = Sprite()
	mySprite:Load("gfx/myCoolAnimation.anm2", true)

	-- Execute this function every POST_RENDER. For example in the MC_POST_RENDER callback.
	function myRenderSpriteFunction()
		mySprite:Render(Vector(50,50))
	end
    ```

___
### Render·Layer () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void RenderLayer ( int LayerId, [Vector](Vector.md) Position, [Vector](Vector.md) TopLeftClamp = Vector.Zero, [Vector](Vector.md) BottomRightClamp = Vector.Zero ) {: .copyable aria-label='Functions' }
Renders a specific layer of the sprite at a given screen position, where (0,0) is the top left corner of the screen.

This is similar to the `Sprite.Render` method, but it will only render a specific layer of the sprite instead of all of the layers at once.

TopLeftClamp and BottomRightClamp can be used to crop the sprite.

???- example "Example Code"
    This code renders layer 3 of a sprite. Layer IDs in most cases start at index 0!

    ```lua
    	-- Sprite objects only need to be created and loaded once.
	local mySprite = Sprite()
	mySprite:Load("gfx/myCoolAnimation.anm2", true)

	-- Execute this function every POST_RENDER. For example in the MC_POST_RENDER callback.
	function myRenderSpriteFunction()
		mySprite:RenderLayer(2, Vector(50,50))
	end
    ```
___
### Replace·Spritesheet () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ReplaceSpritesheet ( int LayerId, string PngFilename ) {: .copyable aria-label='Functions' }
Changes the ".png" file associated with a specific layer of a sprite. This does not change other layers using the ".png" file that is being replaced.

After replacing a spritesheet, you must call the `Sprite.LoadGraphics` method afterwards.

???- example "Example Code"
    This code creates a new sprite object and replaces the spritesheet of layer 0 of a sprite object with a different spritesheet.

    ```lua
	local mySprite = Sprite()
	mySprite:Load("gfx/myCoolAnimation.anm2", true)
	mySprite:ReplaceSpritesheet(0, "gfx/my_new_spritesheet.png")
	mySprite:LoadGraphics()
    ```

___
### Reset () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Reset ( ) {: .copyable aria-label='Functions' }

___
### Set·Animation () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean SetAnimation ( string AnimationName, boolean Reset = true ) {: .copyable aria-label='Functions' }

Similar to the `Sprite.Play` method, but does not start the animation.

- **Reset** - as false will continue the animation from the current frame. This is a really good tool for familiars that alternate between different FloatDirection animations dynamically and other entities that follow similar behaviors.

___
### Set·Frame () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void SetFrame ( int FrameNum ) {: .copyable aria-label='Functions' }
#### void SetFrame ( string AnimationName, int FrameNum ) {: .copyable .secondH4 aria-label='Functions' }

Changes the current animation to a specific frame.

Note that normally, you would use the `Sprite.Update` method to automatically iterate the sprite's animation frame. Thus, this method is typically used for sprites that don't play animations.

The `Sprite.SetFrame` method has two overloads: one which supports setting an animation at the same time, and one that uses the currently playing animation.

___
### Set·Last·Frame () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetLastFrame ( ) {: .copyable aria-label='Functions' }

Sets the currently playing animation to be on its last frame.
___
### Set·Layer·Frame () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetLayerFrame ( int LayerId, int FrameNum ) {: .copyable aria-label='Functions' }

___
### Set·Overlay·Animation () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean SetOverlayAnimation ( string AnimationName, bool Reset = true ) {: .copyable aria-label='Functions' }

Similar to the `Sprite.PlayOverlay` method, but does not start the animation.

- **Reset** - as false will continue the animation from the current frame. This is a really good tool for familiars that alternate between different FloatDirection animations dynamically and other entities that follow similar behaviors.

___
### Set·Overlay·Frame () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetOverlayFrame ( string AnimationName, int FrameNum ) {: .copyable aria-label='Functions' }

___
### Set·Overlay·Render·Priority () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetOverlayRenderPriority ( boolean RenderFirst ) {: .copyable aria-label='Functions' }

___
### Stop () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Stop ( ) {: .copyable aria-label='Functions' }

___
### Update () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Update ( ) {: .copyable aria-label='Functions' }

Advances the currently playing animation by one frame.

___
### Was·Event·Triggered () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean WasEventTriggered ( string EventName ) {: .copyable aria-label='Functions' }
Returns true if the specified event in the animation was triggered at some point, and remains true until the animation stops playing.

___
## Variables
### Color {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Color](Color.md) Color  {: .copyable aria-label='Variables' }

___
### FlipX {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean FlipX  {: .copyable aria-label='Variables' }

___
### FlipY {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### boolean FlipY  {: .copyable aria-label='Variables' }

___
### Offset {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) Offset  {: .copyable aria-label='Variables' }

___
### Playback·Speed {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float PlaybackSpeed  {: .copyable aria-label='Variables' }

___
### Rotation {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### float Rotation  {: .copyable aria-label='Variables' }

___
### Scale {: aria-label='Variables' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) Scale  {: .copyable aria-label='Variables' }

___
