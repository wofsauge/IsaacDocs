---
tags:
  - Class
---
# Class "Seeds"

???+ info
    You can get this class by using the following function:

    * [Game:GetSeeds()](Game.md#getseeds)

    ???+ example "Example Code"
        ```lua
        local game = Game()
        local seeds = game:GetSeeds()
        ```

## Functions
### Add·Seed·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void AddSeedEffect ( [SeedEffect](enums/SeedEffect.md) Value ) {: .copyable aria-label='Functions' }

A "seed effect" is equivalent to an [easter egg](https://bindingofisaacrebirth.fandom.com/wiki/Seeds#Special_Seeds).

___
### Can·Add·Seed·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean CanAddSeedEffect ( [SeedEffect](enums/SeedEffect.md) Value ) {: .copyable aria-label='Functions' }

___
### Clear·Seed·Effects () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ClearSeedEffects ( ) {: .copyable aria-label='Functions' }

___
### Clear·Start·Seed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ClearStartSeed ( ) {: .copyable aria-label='Functions' }

___
### Count·Seed·Effects () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int CountSeedEffects ( ) {: .copyable aria-label='Functions' }

___
### Count·Unlocked·Seed·Effects () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### static int CountUnlockedSeedEffects ( ) {: .copyable aria-label='Functions' }

___
### Forget·Stage·Seed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ForgetStageSeed ( [LevelStage](enums/LevelStage.md) Stage ) {: .copyable aria-label='Functions' }

___
### Get·Next·Seed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetNextSeed ( ) {: .copyable aria-label='Functions' }

___
### Get·Player·Init·Seed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetPlayerInitSeed ( ) {: .copyable aria-label='Functions' }

___
### Get·Seed·Effect () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### static [SeedEffect](enums/SeedEffect.md) GetSeedEffect ( string str ) {: .copyable aria-label='Functions' }

___
### Get·Stage·Seed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetStageSeed ( [LevelStage](enums/LevelStage.md) Stage ) {: .copyable aria-label='Functions' }

___
### Get·Start·Seed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetStartSeed ( ) {: .copyable aria-label='Functions' }
The "start seed" is a number between 1 and (2^32 - 1) that is used to generate the random elements for the current run. The seed displayed in the pause menu is this number represented in string form.

This method will return 0 if it is invoked in the main menu.

???- example "Example Code"
  This code turns the current run seed into its string representation.
  ```lua
  local seed = Game():GetSeeds():GetStartSeed()
  local seedString = Seeds.Seed2String(seed) -- Returns a string in the form of "ABCD DEFG"
  ```
___
### Get·Start·Seed·String () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### string GetStartSeedString ( ) {: .copyable aria-label='Functions' }

The "start seed" is a number between 1 and (2^32 - 1) that is used to generate the random elements for the current run. When converted to a string, it looks like "ABCD EFGH". (This is the form that is displayed on the pause menu.)

This method will return "B911 99JA" if it is invoked in the main menu.

___
### Has·Seed·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasSeedEffect ( [SeedEffect](enums/SeedEffect.md) Value ) {: .copyable aria-label='Functions' }

___
### Init·Seed·Info () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### static void InitSeedInfo ( ) {: .copyable aria-label='Functions' }

___
### Is·Custom·Run () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsCustomRun ( ) {: .copyable aria-label='Functions' }
Returns true if the player is in a challenge run or a seeded run.
___
### Is·Initialized () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsInitialized ( ) {: .copyable aria-label='Functions' }

___
### Is·Seed·Combo·Banned () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsSeedComboBanned ( [SeedEffect](enums/SeedEffect.md) Seed1, [SeedEffect](enums/SeedEffect.md) Seed2 ) {: .copyable aria-label='Functions' }

___
### Is·Special·Seed () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### static boolean IsSpecialSeed ( string str ) {: .copyable aria-label='Functions' }

___
### Is·String·Valid·Seed () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### static boolean IsStringValidSeed ( string str ) {: .copyable aria-label='Functions' }

___
### Remove·Blocking·Seed·Effects () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveBlockingSeedEffects ( [SeedEffect](enums/SeedEffect.md) Value ) {: .copyable aria-label='Functions' }
Removes seeds that are banned in conjunction with the given seed.
___
### Remove·Seed·Effect () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveSeedEffect ( [SeedEffect](enums/SeedEffect.md) Value ) {: .copyable aria-label='Functions' }

___
### Reset () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Reset ( ) {: .copyable aria-label='Functions' }
Removes all seed effects. Only takes effect when the run is restarted.
___
### Restart () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Restart ( [Challenge](enums/Challenge.md) CurrentChallenge ) {: .copyable aria-label='Functions' }
Re-selects a random start seed, but only if the start seed was not custom.
___
### Seed·2·String () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### static string Seed2String ( int seed ) {: .copyable aria-label='Functions' }
Turns a seed into its String representation as used for any in-game seed display.

???- example "Example Code"
  This code turns the current run seed into its string representation.
  ```lua
  local seed = Game():GetSeeds():GetStartSeed()
  local seedString = Seeds.Seed2String(seed) -- Returns a string in the form of "ABCD DEFG"
  ```

___
### Set·Start·Seed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetStartSeed ( string StartSeed ) {: .copyable aria-label='Functions' }
Empty string means we will pick a new random seed.
___
### String·2·Seed () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### static int String2Seed ( string str ) {: .copyable aria-label='Functions' }
___
