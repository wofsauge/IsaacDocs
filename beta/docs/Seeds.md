# Class "Seeds"
___ 
## void AddSeedEffect (SeedEffect Value)

___ 
## boolean CanAddSeedEffect (SeedEffect Value)

___ 
## void ClearSeedEffects ()

___ 
## void ClearStartSeed ()

___ 
## integer CountSeedEffects ()

___ 
## static integer CountUnlockedSeedEffects ()

___ 
## void ForgetStageSeed (LevelStage Stage)

___ 
## integer GetNextSeed ()

___ 
## integer GetPlayerInitSeed ()

___ 
## static SeedEffect GetSeedEffect (string str)

___ 
## integer GetStageSeed (LevelStage Stage)

___ 
## integer GetStartSeed ()

___ 
## string GetStartSeedString ()

___ 
## boolean HasSeedEffect (SeedEffect Value)

___ 
## static InitSeedInfo ()

___ 
## boolean IsCustomRun ()
Returns true if the player is in a challenge run or a seeded run.
___ 
## boolean IsInitialized ()

___ 
## boolean IsSeedComboBanned (SeedEffect Seed1, SeedEffect Seed2 )

___ 
## static boolean IsSpecialSeed (string str)

___ 
## static boolean IsStringValidSeed (string str)

___ 
## void RemoveBlockingSeedEffects (SeedEffect Value)
Removes seeds that are banned in conjunction with the given seed. 
___ 
## void RemoveSeedEffect (SeedEffect Value)

___ 
## void Reset ()
Removes all seed effects, only goes into effect when the run is restarted
___ 
## void Restart (Challenge CurrentChallenge)
Re-selects a random start seed but only if the start seed was not custom. 
___ 
## static string Seed2String (integer seed)

___ 
## void SetStartSeed (string StartSeed)
Empty string means we will pick a new random seed. 
___ 
## static integer String2Seed (string str)
void RestoreGameState(const GameState&amp; State); void SaveGameState(GameState&amp; State); 
___ 
