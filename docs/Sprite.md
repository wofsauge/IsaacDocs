# Class "Sprite"
## Constructors
### Sprite () {: aria-label='Constructors' }
[ ](#){: .abp .tooltip .badge }
#### [Sprite](../Sprite) Sprite ( ) {: .copyable aria-label='Constructors' }

___ 
## Functions
### GetDefaultAnimation () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### string GetDefaultAnimation ( ) {: .copyable aria-label='Functions' }

___ 
### GetDefaultAnimationName () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### string GetDefaultAnimationName ( ) {: .copyable aria-label='Functions' }

___ 
### GetFilename () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### string GetFilename ( ) {: .copyable aria-label='Functions' }

___ 
### GetFrame () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetFrame ( ) {: .copyable aria-label='Functions' }

___ 
### GetLayerCount () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetLayerCount ( ) {: .copyable aria-label='Functions' }

___ 
### GetOverlayFrame () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetOverlayFrame ( ) {: .copyable aria-label='Functions' }

___ 
### GetTexel () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Color](../Color) GetTexel ( [Vector](../Vector) SamplePos, [Vector](../Vector) RenderPos, float AlphaThreshold ) {: .copyable aria-label='Functions' }

___ 
### IsEventTriggered () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsEventTriggered ( string EventName ) {: .copyable aria-label='Functions' }

___ 
### IsFinished () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsFinished ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
### IsLoaded () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsLoaded ( ) {: .copyable aria-label='Functions' }

___ 
### IsOverlayFinished () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsOverlayFinished ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
### IsOverlayPlaying () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsOverlayPlaying ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
### IsPlaying () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsPlaying ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
### Load () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Load ( string Filename, boolean LoadGraphics ) {: .copyable aria-label='Functions' }

___ 
### LoadGraphics () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void LoadGraphics ( ) {: .copyable aria-label='Functions' }

___ 
### Play () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Play ( string AnimationName, boolean Force ) {: .copyable aria-label='Functions' }

___ 
### PlayOverlay () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void PlayOverlay ( string AnimationName, boolean Force ) {: .copyable aria-label='Functions' }

___ 
### PlayRandom () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void PlayRandom ( int Seed ) {: .copyable aria-label='Functions' }

___ 
### Reload () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Reload ( ) {: .copyable aria-label='Functions' }

___ 
### RemoveOverlay () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveOverlay ( ) {: .copyable aria-label='Functions' }

___ 
### Render () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Render ( [Vector](../Vector) Pos, [Vector](../Vector) TopLeftClamp, [Vector](../Vector) BottomRightClamp ) {: .copyable aria-label='Functions' }

___ 
### RenderLayer () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RenderLayer ( int LayerId, [Vector](../Vector) Pos ) {: .copyable aria-label='Functions' }

___ 
### ReplaceSpritesheet () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ReplaceSpritesheet ( int LayerId, string PngFilename ) {: .copyable aria-label='Functions' }

___ 
### Reset () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Reset ( ) {: .copyable aria-label='Functions' }

___ 
### SetAnimation () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean SetAnimation ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
### SetFrame () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetFrame ( string AnimationName, int FrameNum ) {: .copyable aria-label='Functions' }

___ 
### SetLastFrame () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetLastFrame ( ) {: .copyable aria-label='Functions' }

___ 
### SetLayerFrame () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetLayerFrame ( int LayerId, int FrameNum ) {: .copyable aria-label='Functions' }

___ 
### SetOverlayAnimation () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean SetOverlayAnimation ( string AnimationName ) {: .copyable aria-label='Functions' }

___ 
### SetOverlayFrame () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetOverlayFrame ( string AnimationName, int FrameNum ) {: .copyable aria-label='Functions' }

___ 
### SetOverlayRenderPriority () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetOverlayRenderPriority ( boolean RenderFirst ) {: .copyable aria-label='Functions' }

___ 
### Stop () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Stop ( ) {: .copyable aria-label='Functions' }

___ 
### Update () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Update ( ) {: .copyable aria-label='Functions' }

___ 
### WasEventTriggered () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean WasEventTriggered ( string EventName ) {: .copyable aria-label='Functions' }

___ 
## Variables
### FlipX {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean FlipX  {: .copyable aria-label='Variables' }

___ 
### FlipY {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### boolean FlipY  {: .copyable aria-label='Variables' }

___ 
### Color {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Color](../Color) Color  {: .copyable aria-label='Variables' }

___ 
### Offset {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) Offset  {: .copyable aria-label='Variables' }

___ 
### PlaybackSpeed {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float PlaybackSpeed  {: .copyable aria-label='Variables' }

___ 
### Rotation {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Rotation  {: .copyable aria-label='Variables' }

___ 
### Scale {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) Scale  {: .copyable aria-label='Variables' }

___ 
