# Class "MusicManager"
## Constructors
### Music·Manager () {: aria-label='Constructors' }
[ ](#){: .abp .tooltip .badge }
#### [MusicManager](../MusicManager) MusicManager ( ) {: .copyable aria-label='Constructors' }

Returns a [MusicManager](../MusicManager) object.

???- example "Example Code"
    Example usage:
    ```lua 
    MusicManager():Disable()
    
    ```
___ 
## Functions
### Crossfade () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void Crossfade ( [MusicManager](../MusicManager) ID, float FadeRate = 0.08 ) {: .copyable aria-label='Functions' }

___ 
### Disable () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Disable ( ) {: .copyable aria-label='Functions' }

___ 
### Disable·Layer () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void DisableLayer ( int LayerId = 0 ) {: .copyable aria-label='Functions' }

___ 
### Enable () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Enable ( ) {: .copyable aria-label='Functions' }

___ 
### Enable·Layer () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void EnableLayer ( int LayerId = 0, boolean Instant = false ) {: .copyable aria-label='Functions' }

___ 
### Fadein () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void Fadein ( [MusicManager](../MusicManager) ID, float Volume = 1, float FadeRate = 0.08 ) {: .copyable aria-label='Functions' }

___ 
### Fadeout () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void Fadeout ( float FadeRate = 0.08 ) {: .copyable aria-label='Functions' }

___ 
### Get·Current·Music·ID () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [MusicManager](../MusicManager) GetCurrentMusicID ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Queued·Music·ID () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [MusicManager](../MusicManager) GetQueuedMusicID ( ) {: .copyable aria-label='Functions' }
if nothing is queued, return the current music id 
___ 
### Is·Enabled () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsEnabled ( ) {: .copyable aria-label='Functions' }

___ 
### Is·Layer·Enabled () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean IsLayerEnabled ( int LayerId = 0 ) {: .copyable aria-label='Functions' }

___ 
### Pause () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Pause ( ) {: .copyable aria-label='Functions' }

___ 
### Pitch·Slide () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void PitchSlide ( float TargetPitch ) {: .copyable aria-label='Functions' }

___ 
### Play () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Play ( [MusicManager](../MusicManager) ID, float Volume ) {: .copyable aria-label='Functions' }

___ 
### Queue () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Queue ( [MusicManager](../MusicManager) ID ) {: .copyable aria-label='Functions' }

___ 
### Reset·Pitch () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ResetPitch ( ) {: .copyable aria-label='Functions' }

___ 
### Resume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Resume ( ) {: .copyable aria-label='Functions' }

___ 
### Update·Volume () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void UpdateVolume ( ) {: .copyable aria-label='Functions' }

This function sets the music volume to the volume defined in the options menu.
___ 
### Volume·Slide () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void VolumeSlide ( float TargetVolume, float FadeRate = 0.08 ) {: .copyable aria-label='Functions' }

___ 
