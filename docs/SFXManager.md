# Class "SFXManager"
## Constructors
### SFXManager () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [SFXManager](../rep/SFXManager) SFXManager ( ) {: .copyable aria-label='Constructors' }

Returns a [SFXManager](../rep/SFXManager) object.

???- example "Example Code"
    Example usage:
    ```lua 
    SFXManager():Stop(SoundEffect.SOUND_1UP)
    
    ```
___ 
## Functions
### Adjust·Pitch () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AdjustPitch ( [SoundEffect](../rep/enums/SoundEffect) ID, float Pitch ) {: .copyable aria-label='Functions' }
mostly useful for repeating sounds 
___ 
### Adjust·Volume () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AdjustVolume ( [SoundEffect](../rep/enums/SoundEffect) ID, float Volume ) {: .copyable aria-label='Functions' }
mostly useful for repeating sounds 
___ 
### Get·Ambient·Sound·Volume () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### float GetAmbientSoundVolume ( [SoundEffect](../rep/enums/SoundEffect) ID ) {: .copyable aria-label='Functions' }

___ 
### Is·Playing () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsPlaying ( [SoundEffect](../rep/enums/SoundEffect) ID ) {: .copyable aria-label='Functions' }

___ 
### Play () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void Play ( [SoundEffect](../rep/enums/SoundEffect) ID, float Volume = 1, int FrameDelay = 2, boolean Loop = false, float Pitch = 1, float Pan = 0 ) {: .copyable aria-label='Functions' }

___ 
### Preload () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Preload ( [SoundEffect](../rep/enums/SoundEffect) ID ) {: .copyable aria-label='Functions' }

___ 
### Set·Ambient·Sound () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetAmbientSound ( [SoundEffect](../rep/enums/SoundEffect) ID, float Volume, float Pitch ) {: .copyable aria-label='Functions' }

___ 
### Stop () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Stop ( [SoundEffect](../rep/enums/SoundEffect) ID ) {: .copyable aria-label='Functions' }

___ 
### Stop·Looping·Sounds () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void StopLoopingSounds ( ) {: .copyable aria-label='Functions' }

___ 
