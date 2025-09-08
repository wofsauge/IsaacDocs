---
tags:
  - Globals
  - Class
---
# Class "SFXManager"

???+ info
    This class can be accessed by using its constructor:

    ???+ example "Example Code"
        ```lua
        local sfxManager = SFXManager()
        ```

## Constructors
### SFXManager () {: aria-label='Constructors' }
[ ](#){: .alldlc .tooltip .badge }
#### [SFXManager](SFXManager.md) SFXManager ( ) {: .copyable aria-label='Constructors' }

Returns a [SFXManager](SFXManager.md) object.

???- example "Example Code"
    Example usage:
    ```lua
    SFXManager():Stop(SoundEffect.SOUND_1UP)

    ```
___
## Functions
### Adjust·Pitch () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void AdjustPitch ( [SoundEffect](enums/SoundEffect.md) ID, float Pitch ) {: .copyable aria-label='Functions' }
mostly useful for repeating sounds
___
### Adjust·Volume () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void AdjustVolume ( [SoundEffect](enums/SoundEffect.md) ID, float Volume ) {: .copyable aria-label='Functions' }
mostly useful for repeating sounds
___
### Get·Ambient·Sound·Volume () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### float GetAmbientSoundVolume ( [SoundEffect](enums/SoundEffect.md) ID ) {: .copyable aria-label='Functions' }

___
### Is·Playing () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### boolean IsPlaying ( [SoundEffect](enums/SoundEffect.md) ID ) {: .copyable aria-label='Functions' }

___
### Play () {: aria-label='Functions' }
[ ](#){: .reporplus .tooltip .badge }
#### void Play ( [SoundEffect](enums/SoundEffect.md) ID, float Volume = 1, int FrameDelay = 2, boolean Loop = false, float Pitch = 1, float Pan = 0 ) {: .copyable aria-label='Functions' }
Despite its name, **FrameDelay** does NOT add a delay before the sound plays. Rather, it determines how many frames must pass before the sound can be played again.
___
### Preload () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void Preload ( [SoundEffect](enums/SoundEffect.md) ID ) {: .copyable aria-label='Functions' }

___
### Set·Ambient·Sound () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void SetAmbientSound ( [SoundEffect](enums/SoundEffect.md) ID, float Volume, float Pitch ) {: .copyable aria-label='Functions' }

___
### Stop () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void Stop ( [SoundEffect](enums/SoundEffect.md) ID ) {: .copyable aria-label='Functions' }

___
### Stop·Looping·Sounds () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void StopLoopingSounds ( ) {: .copyable aria-label='Functions' }

___
