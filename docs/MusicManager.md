---
tags:
  - Globals
  - Class
---
# Class "MusicManager"
## Constructors
### Music·Manager () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [MusicManager](MusicManager.md) MusicManager ( ) {: .copyable aria-label='Constructors' }

Returns a [MusicManager](MusicManager.md) object.

???- example "Example Code"
    Example usage:
    ```lua
    MusicManager():Disable()

    ```
___
## Functions
### Crossfade () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void Crossfade ( [Music](enums/Music.md) ID, float FadeRate = 0.08 ) {: .copyable aria-label='Functions' }
???+ bug "Bug"
    If the ID parameter is negative or falls out of the allowed range of music IDs, this function will crash the game.

___
### Disable () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Disable ( ) {: .copyable aria-label='Functions' }

___
### Disable·Layer () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void DisableLayer ( int LayerId = 0 ) {: .copyable aria-label='Functions' }

___
### Enable () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Enable ( ) {: .copyable aria-label='Functions' }

___
### Enable·Layer () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void EnableLayer ( int LayerId = 0, boolean Instant = false ) {: .copyable aria-label='Functions' }

___
### Fadein () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void Fadein ( [Music](enums/Music.md) ID, float Volume = 1, float FadeRate = 0.08 ) {: .copyable aria-label='Functions' }

___
### Fadeout () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void Fadeout ( float FadeRate = 0.08 ) {: .copyable aria-label='Functions' }

___
### Get·Current·Music·ID () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Music](enums/Music.md) GetCurrentMusicID ( ) {: .copyable aria-label='Functions' }

___
### Get·Queued·Music·ID () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Music](enums/Music.md) GetQueuedMusicID ( ) {: .copyable aria-label='Functions' }
if nothing is queued, return the current music id
___
### Is·Enabled () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsEnabled ( ) {: .copyable aria-label='Functions' }

___
### Is·Layer·Enabled () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean IsLayerEnabled ( int LayerId = 0 ) {: .copyable aria-label='Functions' }

___
### Pause () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Pause ( ) {: .copyable aria-label='Functions' }

___
### Pitch·Slide () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void PitchSlide ( float TargetPitch ) {: .copyable aria-label='Functions' }

___
### Play () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Play ( [Music](enums/Music.md) ID, float Volume = 1 ) {: .copyable aria-label='Functions' }
???+ bug "Bug"
    If the ID parameter is negative or falls out of the allowed range of music IDs, this function will crash the game.

___
### Queue () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Queue ( [Music](enums/Music.md) ID ) {: .copyable aria-label='Functions' }

___
### Reset·Pitch () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ResetPitch ( ) {: .copyable aria-label='Functions' }

___
### Resume () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Resume ( ) {: .copyable aria-label='Functions' }

___
### Update·Volume () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void UpdateVolume ( ) {: .copyable aria-label='Functions' }

This function sets the music volume to the volume defined in the options menu.
___
### Volume·Slide () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void VolumeSlide ( float TargetVolume, float FadeRate = 0.08 ) {: .copyable aria-label='Functions' }

___
