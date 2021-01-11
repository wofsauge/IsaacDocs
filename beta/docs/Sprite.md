# Class "Sprite"
## Functions
[ ](#){: .abp .tooltip .badge }
### [Sprite](../Sprite) () {: aria-label='Functions' }
#### void [Sprite](../Sprite) ( void )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetDefaultAnimation () {: aria-label='Functions' }
####  string GetDefaultAnimation ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetDefaultAnimationName () {: aria-label='Functions' }
####  string GetDefaultAnimationName ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetFilename () {: aria-label='Functions' }
#### string GetFilename ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetFrame () {: aria-label='Functions' }
#### int GetFrame ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetLayerCount () {: aria-label='Functions' }
#### int GetLayerCount ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetOverlayFrame () {: aria-label='Functions' }
#### int GetOverlayFrame ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetTexel () {: aria-label='Functions' }
#### [Color](../Color) GetTexel ( [Vector](../Vector) SamplePos, [Vector](../Vector) RenderPos, float AlphaThreshold )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsEventTriggered () {: aria-label='Functions' }
#### boolean IsEventTriggered ( string EventName)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsFinished () {: aria-label='Functions' }
#### boolean IsFinished ( string AnimationName)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsLoaded () {: aria-label='Functions' }
#### boolean IsLoaded ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsOverlayFinished () {: aria-label='Functions' }
#### boolean IsOverlayFinished ( string AnimationName)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsOverlayPlaying () {: aria-label='Functions' }
#### boolean IsOverlayPlaying ( string AnimationName)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsPlaying () {: aria-label='Functions' }
#### boolean IsPlaying ( string AnimationName)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Load () {: aria-label='Functions' }
#### void Load ( string Filename, boolean LoadGraphics )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### LoadGraphics () {: aria-label='Functions' }
#### void LoadGraphics ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Play () {: aria-label='Functions' }
#### void Play ( string AnimationName, boolean Force )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### PlayOverlay () {: aria-label='Functions' }
#### void PlayOverlay ( string AnimationName, boolean Force )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### PlayRandom () {: aria-label='Functions' }
#### void PlayRandom ( int Seed)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Reload () {: aria-label='Functions' }
#### void Reload ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveOverlay () {: aria-label='Functions' }
#### void RemoveOverlay ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Render () {: aria-label='Functions' }
#### void Render ( [Vector](../Vector) Pos, [Vector](../Vector) TopLeftClamp, [Vector](../Vector) BottomRightClamp )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RenderLayer () {: aria-label='Functions' }
#### void RenderLayer ( int LayerId, [Vector](../Vector) Pos )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ReplaceSpritesheet () {: aria-label='Functions' }
#### void ReplaceSpritesheet ( int LayerId, string PngFilename )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Reset () {: aria-label='Functions' }
#### void Reset ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetAnimation () {: aria-label='Functions' }
#### boolean SetAnimation ( string AnimationName)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetFrame () {: aria-label='Functions' }
#### void SetFrame ( string AnimationName, int FrameNum )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetLastFrame () {: aria-label='Functions' }
#### void SetLastFrame ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetLayerFrame () {: aria-label='Functions' }
#### void SetLayerFrame ( int LayerId, int FrameNum )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetOverlayAnimation () {: aria-label='Functions' }
#### boolean SetOverlayAnimation ( string AnimationName)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetOverlayFrame () {: aria-label='Functions' }
#### void SetOverlayFrame ( string AnimationName, int FrameNum )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetOverlayRenderPriority () {: aria-label='Functions' }
#### void SetOverlayRenderPriority ( boolean RenderFirst)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Stop () {: aria-label='Functions' }
#### void Stop ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Update () {: aria-label='Functions' }
#### void Update ( )  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### WasEventTriggered () {: aria-label='Functions' }
#### boolean WasEventTriggered ( string EventName)  {: aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
## Variables
### FlipX {: aria-label='Variables' }
#### boolean FlipX  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### FlipY {: aria-label='Variables' }
#### boolean FlipY  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### [Color](../Color) {: aria-label='Variables' }
####  [Color](../Color) [Color](../Color)  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Offset {: aria-label='Variables' }
####  [Vector](../Vector) Offset  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### PlaybackSpeed {: aria-label='Variables' }
#### float PlaybackSpeed  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Rotation {: aria-label='Variables' }
#### float Rotation  {: aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Scale {: aria-label='Variables' }
####  [Vector](../Vector) Scale  {: aria-label='Variables' }

___ 
