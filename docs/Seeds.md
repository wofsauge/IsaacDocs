# Class "Seeds"
## Functions
### AddSeedEffect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void AddSeedEffect ( [SeedEffect](../enums/SeedEffect) Value ) {: .copyable aria-label='Functions' }

___ 
### CanAddSeedEffect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean CanAddSeedEffect ( [SeedEffect](../enums/SeedEffect) Value ) {: .copyable aria-label='Functions' }

___ 
### ClearSeedEffects () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ClearSeedEffects ( ) {: .copyable aria-label='Functions' }

___ 
### ClearStartSeed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ClearStartSeed ( ) {: .copyable aria-label='Functions' }

___ 
### CountSeedEffects () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int CountSeedEffects ( ) {: .copyable aria-label='Functions' }

___ 
### CountUnlockedSeedEffects () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static int CountUnlockedSeedEffects ( ) {: .copyable aria-label='Functions' }

___ 
### ForgetStageSeed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void ForgetStageSeed ( [LevelStage](../enums/LevelStage) Stage ) {: .copyable aria-label='Functions' }

___ 
### GetNextSeed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetNextSeed ( ) {: .copyable aria-label='Functions' }

___ 
### GetPlayerInitSeed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetPlayerInitSeed ( ) {: .copyable aria-label='Functions' }

___ 
### GetSeedEffect () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static [SeedEffect](../enums/SeedEffect) GetSeedEffect ( string str ) {: .copyable aria-label='Functions' }

___ 
### GetStageSeed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetStageSeed ( [LevelStage](../enums/LevelStage) Stage ) {: .copyable aria-label='Functions' }

___ 
### GetStartSeed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### int GetStartSeed ( ) {: .copyable aria-label='Functions' }

___ 
### GetStartSeedString () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### string GetStartSeedString ( ) {: .copyable aria-label='Functions' }

___ 
### HasSeedEffect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean HasSeedEffect ( [SeedEffect](../enums/SeedEffect) Value ) {: .copyable aria-label='Functions' }

___ 
### InitSeedInfo () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static InitSeedInfo ( ) {: .copyable aria-label='Functions' }

___ 
### IsCustomRun () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsCustomRun ( ) {: .copyable aria-label='Functions' }
Returns true if the player is in a challenge run or a seeded run.
___ 
### IsInitialized () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsInitialized ( ) {: .copyable aria-label='Functions' }

___ 
### IsSeedComboBanned () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### boolean IsSeedComboBanned ( [SeedEffect](../enums/SeedEffect) Seed1, [SeedEffect](../enums/SeedEffect) Seed2 ) {: .copyable aria-label='Functions' }

___ 
### IsSpecialSeed () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static boolean IsSpecialSeed ( string str ) {: .copyable aria-label='Functions' }

___ 
### IsStringValidSeed () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static boolean IsStringValidSeed ( string str ) {: .copyable aria-label='Functions' }

___ 
### RemoveBlockingSeedEffects () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveBlockingSeedEffects ( [SeedEffect](../enums/SeedEffect) Value ) {: .copyable aria-label='Functions' }
Removes seeds that are banned in conjunction with the given seed. 
___ 
### RemoveSeedEffect () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void RemoveSeedEffect ( [SeedEffect](../enums/SeedEffect) Value ) {: .copyable aria-label='Functions' }

___ 
### Reset () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Reset ( ) {: .copyable aria-label='Functions' }
Removes all seed effects, only goes into effect when the run is restarted
___ 
### Restart () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Restart ( [Challenge](../enums/Challenge) CurrentChallenge ) {: .copyable aria-label='Functions' }
Re-selects a random start seed but only if the start seed was not custom. 
___ 
### Seed2String () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static string Seed2String ( int seed ) {: .copyable aria-label='Functions' }

___ 
### SetStartSeed () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void SetStartSeed ( string StartSeed ) {: .copyable aria-label='Functions' }
Empty string means we will pick a new random seed. 
___ 
### String2Seed () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static int String2Seed ( string str ) {: .copyable aria-label='Functions' }
void RestoreGameState(const GameState&amp; State); void SaveGameState(GameState&amp; State); 
___ 
