# Class "Seeds"
## Functions
[ ](#){: .abp .tooltip .badge }
### AddSeedEffect () {: aria-label='Functions' }
#### void AddSeedEffect ( [SeedEffect](../enums/SeedEffect) Value)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### CanAddSeedEffect () {: aria-label='Functions' }
#### boolean CanAddSeedEffect ( [SeedEffect](../enums/SeedEffect) Value)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ClearSeedEffects () {: aria-label='Functions' }
#### void ClearSeedEffects ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ClearStartSeed () {: aria-label='Functions' }
#### void ClearStartSeed ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### CountSeedEffects () {: aria-label='Functions' }
#### int CountSeedEffects ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
### CountUnlockedSeedEffects () {: aria-label='Functions' }
#### static int CountUnlockedSeedEffects ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### ForgetStageSeed () {: aria-label='Functions' }
#### void ForgetStageSeed ( [LevelStage](../enums/LevelStage) Stage)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetNextSeed () {: aria-label='Functions' }
#### int GetNextSeed ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetPlayerInitSeed () {: aria-label='Functions' }
#### int GetPlayerInitSeed ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
### GetSeedEffect () {: aria-label='Functions' }
#### static [SeedEffect](../enums/SeedEffect) GetSeedEffect ( string str)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetStageSeed () {: aria-label='Functions' }
#### int GetStageSeed ( [LevelStage](../enums/LevelStage) Stage)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetStartSeed () {: aria-label='Functions' }
#### int GetStartSeed ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### GetStartSeedString () {: aria-label='Functions' }
#### string GetStartSeedString ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### HasSeedEffect () {: aria-label='Functions' }
#### boolean HasSeedEffect ( [SeedEffect](../enums/SeedEffect) Value)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
### InitSeedInfo () {: aria-label='Functions' }
#### static InitSeedInfo ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsCustomRun () {: aria-label='Functions' }
#### boolean IsCustomRun ( )  {: .copyable aria-label='Functions' }
Returns true if the player is in a challenge run or a seeded run.
___ 
[ ](#){: .abp .tooltip .badge }
### IsInitialized () {: aria-label='Functions' }
#### boolean IsInitialized ( )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### IsSeedComboBanned () {: aria-label='Functions' }
#### boolean IsSeedComboBanned ( [SeedEffect](../enums/SeedEffect) Seed1, [SeedEffect](../enums/SeedEffect) Seed2 )  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
### IsSpecialSeed () {: aria-label='Functions' }
#### static boolean IsSpecialSeed ( string str)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
### IsStringValidSeed () {: aria-label='Functions' }
#### static boolean IsStringValidSeed ( string str)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### RemoveBlockingSeedEffects () {: aria-label='Functions' }
#### void RemoveBlockingSeedEffects ( [SeedEffect](../enums/SeedEffect) Value)  {: .copyable aria-label='Functions' }
Removes seeds that are banned in conjunction with the given seed. 
___ 
[ ](#){: .abp .tooltip .badge }
### RemoveSeedEffect () {: aria-label='Functions' }
#### void RemoveSeedEffect ( [SeedEffect](../enums/SeedEffect) Value)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### Reset () {: aria-label='Functions' }
#### void Reset ( )  {: .copyable aria-label='Functions' }
Removes all seed effects, only goes into effect when the run is restarted
___ 
[ ](#){: .abp .tooltip .badge }
### Restart () {: aria-label='Functions' }
#### void Restart ( [Challenge](../enums/Challenge) CurrentChallenge)  {: .copyable aria-label='Functions' }
Re-selects a random start seed but only if the start seed was not custom. 
___ 
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
### Seed2String () {: aria-label='Functions' }
#### static string Seed2String ( int seed)  {: .copyable aria-label='Functions' }

___ 
[ ](#){: .abp .tooltip .badge }
### SetStartSeed () {: aria-label='Functions' }
#### void SetStartSeed ( string StartSeed)  {: .copyable aria-label='Functions' }
Empty string means we will pick a new random seed. 
___ 
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
### String2Seed () {: aria-label='Functions' }
#### static int String2Seed ( string str)  {: .copyable aria-label='Functions' }
void RestoreGameState(const GameState&amp; State); void SaveGameState(GameState&amp; State); 
___ 
