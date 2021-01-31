# Class "SFXManager"
## Constructors
### SFXManager () {: aria-label='Constructors' }
[ ](#){: .abp .tooltip .badge }
#### [SFXManager](../SFXManager) SFXManager ( ) {: .copyable aria-label='Constructors' }

Returns a [SFXManager](../SFXManager) object.

???- example "Example Code"
    Example usage:
    ```lua 
    SFXManager():Stop(SoundEffect.SOUND_1UP)
    
    ```
___ 
## Functions
### AdjustPitch () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AdjustPitch ( [SoundEffect](../enums/SoundEffect) ID, float Pitch ) {: .copyable aria-label='Functions' }
mostly useful for repeating sounds 
___ 
### AdjustVolume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AdjustVolume ( [SoundEffect](../enums/SoundEffect) ID, float Volume ) {: .copyable aria-label='Functions' }
mostly useful for repeating sounds 
___ 
### GetAmbientSoundVolume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float GetAmbientSoundVolume ( [SoundEffect](../enums/SoundEffect) ID ) {: .copyable aria-label='Functions' }

___ 
### IsPlaying () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsPlaying ( [SoundEffect](../enums/SoundEffect) ID ) {: .copyable aria-label='Functions' }

___ 
### Play () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Play ( [SoundEffect](../enums/SoundEffect) ID, float Volume, int FrameDelay, boolean Loop, float Pitch ) {: .copyable aria-label='Functions' }

___ 
### Preload () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Preload ( [SoundEffect](../enums/SoundEffect) ID ) {: .copyable aria-label='Functions' }

___ 
### SetAmbientSound () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetAmbientSound ( [SoundEffect](../enums/SoundEffect) ID, float Volume, float Pitch ) {: .copyable aria-label='Functions' }

___ 
### Stop () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Stop ( [SoundEffect](../enums/SoundEffect) ID ) {: .copyable aria-label='Functions' }

___ 
### StopLoopingSounds () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void StopLoopingSounds ( ) {: .copyable aria-label='Functions' }

___ 
