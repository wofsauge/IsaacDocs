# Class "Sprite"
## Constructors
### Sprite () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [Sprite](Sprite.md) Sprite ( ) {: .copyable aria-label='Constructors' }

___ 
## Functions
### Get·Animation () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### string GetAnimation ( ) {: .copyable aria-label='Functions' }
Return the name of the currently played animation.

___ 
### Get·Default·Animation () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### string GetDefaultAnimation ( ) {: .copyable aria-label='Functions' }
This function returns the name of the "Default" animation of a given sprite based on its .anm2 file.

???- info "Info"
    This function seems to be the same as `GetDefaultAnimationName()`.

???- example "Example Code"
    This code print the default animation name "WalkDown" of the player sprite.

    ```lua 
    local player = Isaac.GetPlayer(0)
    local sprite = player:GetSprite()
    print(sprite:GetDefaultAnimation()) -- this prints "WalkDown"
    ```
___ 
### Get·Default·Animation·Name () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### string GetDefaultAnimationName ( ) {: .copyable aria-label='Functions' }
This function returns the name of the "Default" animation of a given sprite based on its .anm2 file.

???- info "Info"
    This function seems to be the same as `GetDefaultAnimation()`.

???- example "Example Code"
    This code print the default animation name "WalkDown" of the player sprite.

    ```lua 
    local player = Isaac.GetPlayer(0)
    local sprite = player:GetSprite()
    print(sprite:GetDefaultAnimationName()) -- this prints "WalkDown"
    ```

___ 
### Get·Filename () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### string GetFilename ( ) {: .copyable aria-label='Functions' }
This function returns the path to the .anm2 file used by the sprite.

???- example "Example Code"
    This code print the .anm2 path of the player sprite.

    ```lua 
    local player = Isaac.GetPlayer(0)
    local sprite = player:GetSprite()
    print(sprite:GetFilename()) -- this prints "gfx/001.000_Player.anm2"
    ```

___ 
### Get·Frame () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetFrame ( ) {: .copyable aria-label='Functions' }
Returns the currently rendered Frame of the given Sprite.
___ 
### Get·Layer·Count () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetLayerCount ( ) {: .copyable aria-label='Functions' }
Returns the number of layers of the .anm2 file of the sprite. All Animations use the same amount of Layers.
___ 
### Get·Overlay·Animation () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### string GetOverlayAnimation ( ) {: .copyable aria-label='Functions' }
Return the name of the currently played overlay animation.

___ 
### Get·Overlay·Frame () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetOverlayFrame ( ) {: .copyable aria-label='Functions' }
Returns the currently rendered Frame of the Overlay of the given Sprite. It acts independent from the normal Frame count.
___ 
### Get·Texel () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Color](Color.md) GetTexel ( [Vector](Vector.md) SamplePos, [Vector](Vector.md) RenderPos, float AlphaThreshold, int LayerID = 0 ) {: .copyable aria-label='Functions' }
Returns the color of the pixel of the Sprite at the given sample position. RenderPos can be neglected and set to a null vector
___ 
### Is·Event·Triggered () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsEventTriggered ( string EventName ) {: .copyable aria-label='Functions' }

___ 
### Is·Finished () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsFinished ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
### Is·Loaded () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsLoaded ( ) {: .copyable aria-label='Functions' }

___ 
### Is·Overlay·Finished () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsOverlayFinished ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
### Is·Overlay·Playing () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsOverlayPlaying ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
### Is·Playing () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsPlaying ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
### Load () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Load ( string Filename, boolean LoadGraphics ) {: .copyable aria-label='Functions' }
Loads a given ".anm2" file. The filepath is relative to the "resources" folder. The boolean can be used to load the graphics (.png files) as well, without calling the [LoadGraphics()](#LoadGraphics) function.

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
Loads and applies assosiated graphic-objects like ".png" files.

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

___ 
### Play·Overlay () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void PlayOverlay ( string AnimationName, boolean Force ) {: .copyable aria-label='Functions' }

___ 
### Play·Random () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void PlayRandom ( int Seed ) {: .copyable aria-label='Functions' }

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
#### void Render ( [Vector](Vector.md) Pos, [Vector](Vector.md) TopLeftClamp, [Vector](Vector.md) BottomRightClamp ) {: .copyable aria-label='Functions' }

___ 
### Render·Layer () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void RenderLayer ( int LayerId, [Vector](Vector.md) Pos, [Vector](Vector.md) TopLeftClamp = Vector.Zero, [Vector](Vector.md) BottomRightClamp = Vector.Zero ) {: .copyable aria-label='Functions' }

___ 
### Replace·Spritesheet () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ReplaceSpritesheet ( int LayerId, string PngFilename ) {: .copyable aria-label='Functions' }
Changes the ".png" file assosiated to a specific layer of a sprite.

???+ note "Notes"
    The effect is only applied after calling the [LoadGraphics()](#LoadGraphics) function afterwards.

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
#### boolean SetAnimation ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
### Set·Frame () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void SetFrame ( int FrameNum ) {: .copyable aria-label='Functions' }

#### void SetFrame ( string AnimationName, int FrameNum ) {: .copyable .secondH4 aria-label='Functions' }

___ 
### Set·Last·Frame () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetLastFrame ( ) {: .copyable aria-label='Functions' }

___ 
### Set·Layer·Frame () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetLayerFrame ( int LayerId, int FrameNum ) {: .copyable aria-label='Functions' }

___ 
### Set·Overlay·Animation () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean SetOverlayAnimation ( string AnimationName ) {: .copyable aria-label='Functions' }

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

___ 
### Was·Event·Triggered () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean WasEventTriggered ( string EventName ) {: .copyable aria-label='Functions' }

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
