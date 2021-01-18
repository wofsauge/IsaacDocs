# Class "Sprite"
## Constructors
[ ](#){: .abp .tooltip .badge }
### [Sprite](../Sprite) () {: aria-label='Constructors' }
#### void [Sprite](../Sprite) ( void ) {: .copyable aria-label='Constructors' }

___ 
## Functions
[ ](#){: .abp .tooltip .badge }
### GetDefaultAnimation () {: aria-label='Functions' }
####  string GetDefaultAnimation ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetDefaultAnimationName () {: aria-label='Functions' }
####  string GetDefaultAnimationName ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetFilename () {: aria-label='Functions' }
#### string GetFilename ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetFrame () {: aria-label='Functions' }
#### int GetFrame ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetLayerCount () {: aria-label='Functions' }
#### int GetLayerCount ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetOverlayFrame () {: aria-label='Functions' }
#### int GetOverlayFrame ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetTexel () {: aria-label='Functions' }
#### [Color](../Color) GetTexel ( [Vector](../Vector) SamplePos, [Vector](../Vector) RenderPos, float AlphaThreshold ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsEventTriggered () {: aria-label='Functions' }
#### boolean IsEventTriggered ( string EventName ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsFinished () {: aria-label='Functions' }
#### boolean IsFinished ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsLoaded () {: aria-label='Functions' }
#### boolean IsLoaded ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsOverlayFinished () {: aria-label='Functions' }
#### boolean IsOverlayFinished ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsOverlayPlaying () {: aria-label='Functions' }
#### boolean IsOverlayPlaying ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsPlaying () {: aria-label='Functions' }
#### boolean IsPlaying ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Load () {: aria-label='Functions' }
#### void Load ( string Filename, boolean LoadGraphics ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### LoadGraphics () {: aria-label='Functions' }
#### void LoadGraphics ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Play () {: aria-label='Functions' }
#### void Play ( string AnimationName, boolean Force ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### PlayOverlay () {: aria-label='Functions' }
#### void PlayOverlay ( string AnimationName, boolean Force ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### PlayRandom () {: aria-label='Functions' }
#### void PlayRandom ( int Seed ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Reload () {: aria-label='Functions' }
#### void Reload ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveOverlay () {: aria-label='Functions' }
#### void RemoveOverlay ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Render () {: aria-label='Functions' }
#### void Render ( [Vector](../Vector) Pos, [Vector](../Vector) TopLeftClamp, [Vector](../Vector) BottomRightClamp ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RenderLayer () {: aria-label='Functions' }
#### void RenderLayer ( int LayerId, [Vector](../Vector) Pos ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ReplaceSpritesheet () {: aria-label='Functions' }
#### void ReplaceSpritesheet ( int LayerId, string PngFilename ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Reset () {: aria-label='Functions' }
#### void Reset ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetAnimation () {: aria-label='Functions' }
#### boolean SetAnimation ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetFrame () {: aria-label='Functions' }
#### void SetFrame ( string AnimationName, int FrameNum ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetLastFrame () {: aria-label='Functions' }
#### void SetLastFrame ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetLayerFrame () {: aria-label='Functions' }
#### void SetLayerFrame ( int LayerId, int FrameNum ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetOverlayAnimation () {: aria-label='Functions' }
#### boolean SetOverlayAnimation ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetOverlayFrame () {: aria-label='Functions' }
#### void SetOverlayFrame ( string AnimationName, int FrameNum ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetOverlayRenderPriority () {: aria-label='Functions' }
#### void SetOverlayRenderPriority ( boolean RenderFirst ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Stop () {: aria-label='Functions' }
#### void Stop ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Update () {: aria-label='Functions' }
#### void Update ( ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### WasEventTriggered () {: aria-label='Functions' }
#### boolean WasEventTriggered ( string EventName ) {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
## Variables
### FlipX {: aria-label='Variables' }
#### boolean FlipX  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### FlipY {: aria-label='Variables' }
#### boolean FlipY  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### [Color](../Color) {: aria-label='Variables' }
####  [Color](../Color) [Color](../Color)  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Offset {: aria-label='Variables' }
####  [Vector](../Vector) Offset  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### PlaybackSpeed {: aria-label='Variables' }
#### float PlaybackSpeed  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Rotation {: aria-label='Variables' }
#### float Rotation  {: .copyable aria-label='Variables' }

___ 
[ ](#){: .abp .tooltip .badge }
### Scale {: aria-label='Variables' }
####  [Vector](../Vector) Scale  {: .copyable aria-label='Variables' }

___ 
