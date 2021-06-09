# Class "SFXManager"
## Constructors
### SFXManager () {: aria-label='Constructors' }
[ ](#){: .abp .tooltip .badge }
#### [SFXManager](../abp/SFXManager) SFXManager ( ) {: .copyable aria-label='Constructors' }

Returns a [SFXManager](../abp/SFXManager) object.

???- example "Example Code"
    Example usage:
    ```lua 
    SFXManager():Stop(SoundEffect.SOUND_1UP)
    
    ```
___ 
## Functions
### Adjust·Pitch () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AdjustPitch ( [SoundEffect](../abp/enums/SoundEffect) ID, float Pitch ) {: .copyable aria-label='Functions' }
mostly useful for repeating sounds 
___ 
### Adjust·Volume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AdjustVolume ( [SoundEffect](../abp/enums/SoundEffect) ID, float Volume ) {: .copyable aria-label='Functions' }
mostly useful for repeating sounds 
___ 
### Get·Ambient·Sound·Volume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float GetAmbientSoundVolume ( [SoundEffect](../abp/enums/SoundEffect) ID ) {: .copyable aria-label='Functions' }

___ 
### Is·Playing () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsPlaying ( [SoundEffect](../abp/enums/SoundEffect) ID ) {: .copyable aria-label='Functions' }

___ 
### Play () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Play ( [SoundEffect](../abp/enums/SoundEffect) ID, float Volume, int FrameDelay, boolean Loop, float Pitch ) {: .copyable aria-label='Functions' }

___ 
### Preload () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Preload ( [SoundEffect](../abp/enums/SoundEffect) ID ) {: .copyable aria-label='Functions' }

___ 
### Set·Ambient·Sound () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetAmbientSound ( [SoundEffect](../abp/enums/SoundEffect) ID, float Volume, float Pitch ) {: .copyable aria-label='Functions' }

___ 
### Stop () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Stop ( [SoundEffect](../abp/enums/SoundEffect) ID ) {: .copyable aria-label='Functions' }

___ 
### Stop·Looping·Sounds () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void StopLoopingSounds ( ) {: .copyable aria-label='Functions' }

___ 
