# Class "Seeds"
## Functions
### AddSeedEffect () {: aria-label='Functions' }
#### void AddSeedEffect ( SeedEffect Value)  {: aria-label='Functions' }

___ 
### CanAddSeedEffect () {: aria-label='Functions' }
#### boolean CanAddSeedEffect ( SeedEffect Value)  {: aria-label='Functions' }

___ 
### ClearSeedEffects () {: aria-label='Functions' }
#### void ClearSeedEffects ( )  {: aria-label='Functions' }

___ 
### ClearStartSeed () {: aria-label='Functions' }
#### void ClearStartSeed ( )  {: aria-label='Functions' }

___ 
### CountSeedEffects () {: aria-label='Functions' }
#### int CountSeedEffects ( )  {: aria-label='Functions' }

___ 
### CountUnlockedSeedEffects () {: aria-label='Functions' }
#### static int CountUnlockedSeedEffects ( )  {: aria-label='Functions' }

___ 
### ForgetStageSeed () {: aria-label='Functions' }
#### void ForgetStageSeed ( LevelStage Stage)  {: aria-label='Functions' }

___ 
### GetNextSeed () {: aria-label='Functions' }
#### int GetNextSeed ( )  {: aria-label='Functions' }

___ 
### GetPlayerInitSeed () {: aria-label='Functions' }
#### int GetPlayerInitSeed ( )  {: aria-label='Functions' }

___ 
### GetSeedEffect () {: aria-label='Functions' }
#### static SeedEffect GetSeedEffect ( string str)  {: aria-label='Functions' }

___ 
### GetStageSeed () {: aria-label='Functions' }
#### int GetStageSeed ( LevelStage Stage)  {: aria-label='Functions' }

___ 
### GetStartSeed () {: aria-label='Functions' }
#### int GetStartSeed ( )  {: aria-label='Functions' }

___ 
### GetStartSeedString () {: aria-label='Functions' }
#### string GetStartSeedString ( )  {: aria-label='Functions' }

___ 
### HasSeedEffect () {: aria-label='Functions' }
#### boolean HasSeedEffect ( SeedEffect Value)  {: aria-label='Functions' }

___ 
### InitSeedInfo () {: aria-label='Functions' }
#### static InitSeedInfo ( )  {: aria-label='Functions' }

___ 
### IsCustomRun () {: aria-label='Functions' }
#### boolean IsCustomRun ( )  {: aria-label='Functions' }
Returns true if the player is in a challenge run or a seeded run.
___ 
### IsInitialized () {: aria-label='Functions' }
#### boolean IsInitialized ( )  {: aria-label='Functions' }

___ 
### IsSeedComboBanned () {: aria-label='Functions' }
#### boolean IsSeedComboBanned ( SeedEffect Seed1, SeedEffect Seed2 )  {: aria-label='Functions' }

___ 
### IsSpecialSeed () {: aria-label='Functions' }
#### static boolean IsSpecialSeed ( string str)  {: aria-label='Functions' }

___ 
### IsStringValidSeed () {: aria-label='Functions' }
#### static boolean IsStringValidSeed ( string str)  {: aria-label='Functions' }

___ 
### RemoveBlockingSeedEffects () {: aria-label='Functions' }
#### void RemoveBlockingSeedEffects ( SeedEffect Value)  {: aria-label='Functions' }
Removes seeds that are banned in conjunction with the given seed. 
___ 
### RemoveSeedEffect () {: aria-label='Functions' }
#### void RemoveSeedEffect ( SeedEffect Value)  {: aria-label='Functions' }

___ 
### Reset () {: aria-label='Functions' }
#### void Reset ( )  {: aria-label='Functions' }
Removes all seed effects, only goes into effect when the run is restarted
___ 
### Restart () {: aria-label='Functions' }
#### void Restart ( Challenge CurrentChallenge)  {: aria-label='Functions' }
Re-selects a random start seed but only if the start seed was not custom. 
___ 
### Seed2String () {: aria-label='Functions' }
#### static string Seed2String ( int seed)  {: aria-label='Functions' }

___ 
### SetStartSeed () {: aria-label='Functions' }
#### void SetStartSeed ( string StartSeed)  {: aria-label='Functions' }
Empty string means we will pick a new random seed. 
___ 
### String2Seed () {: aria-label='Functions' }
#### static int String2Seed ( string str)  {: aria-label='Functions' }
void RestoreGameState(const GameState&amp; State); void SaveGameState(GameState&amp; State); 
___ 
