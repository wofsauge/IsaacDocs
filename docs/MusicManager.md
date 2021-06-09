# Class "MusicManager"
## Constructors
### Music·Manager () {: aria-label='Constructors' }
[ ](#){: .abp .tooltip .badge }
#### [MusicManager](../abp/MusicManager) MusicManager ( ) {: .copyable aria-label='Constructors' }

Returns a [MusicManager](../abp/MusicManager) object.

???- example "Example Code"
    Example usage:
    ```lua 
    MusicManager():Disable()
    
    ```
___ 
## Functions
### Crossfade () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Crossfade ( [MusicManager](../abp/MusicManager) ID ) {: .copyable aria-label='Functions' }

___ 
### Disable () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Disable ( ) {: .copyable aria-label='Functions' }

___ 
### Disable·Layer () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void DisableLayer ( ) {: .copyable aria-label='Functions' }

___ 
### Enable () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Enable ( ) {: .copyable aria-label='Functions' }

___ 
### Enable·Layer () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void EnableLayer ( ) {: .copyable aria-label='Functions' }

___ 
### Fadein () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Fadein ( [MusicManager](../abp/MusicManager) ID, float Volume ) {: .copyable aria-label='Functions' }

___ 
### Fadeout () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Fadeout ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Current·Music·ID () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [MusicManager](../abp/MusicManager) GetCurrentMusicID ( ) {: .copyable aria-label='Functions' }

___ 
### Get·Queued·Music·ID () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [MusicManager](../abp/MusicManager) GetQueuedMusicID ( ) {: .copyable aria-label='Functions' }
if nothing is queued, return the current music id 
___ 
### Is·Enabled () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsEnabled ( ) {: .copyable aria-label='Functions' }

___ 
### Is·Layer·Enabled () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsLayerEnabled ( ) {: .copyable aria-label='Functions' }

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
#### void Play ( [MusicManager](../abp/MusicManager) ID, float Volume ) {: .copyable aria-label='Functions' }

___ 
### Queue () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Queue ( [MusicManager](../abp/MusicManager) ID ) {: .copyable aria-label='Functions' }

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
[ ](#){: .abp .tooltip .badge }
#### void VolumeSlide ( float TargetVolume ) {: .copyable aria-label='Functions' }

___ 
