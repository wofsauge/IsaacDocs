# Class "RNG"
## Constructors
### RNG () {: aria-label='Constructors' }
[ ](#){: .abrep .tooltip .badge }
#### [RNG](RNG.md) RNG ( ) {: .copyable aria-label='Constructors' }

???+ example "Example code"
    ```lua
    local myRNG = RNG()
    myRNG:SetSeed(Random(), 1)
    myRNG:RandomInt(4)  -- will generate 0, 1, 2, or 3.
    ```

___
## Functions
### Get·Seed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetSeed ( ) {: .copyable aria-label='Functions' }
Returns the current seed of the RNG object.
___
### Next () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int Next ( ) {: .copyable aria-label='Functions' }

___
### Random·Float () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### float RandomFloat ( ) {: .copyable aria-label='Functions' }
Returns a number between 0 and 1. This is inclusive on the lower end and exclusive on the higher end.

Note that this will automatically call the `RNG.Next` method before retrieving the random number. Since this mutates the RNG object, you should use this method with care.

???+ example "Example code"
    ```lua
    local RECOMMENDED_SHIFT_IDX = 35
    local MY_ENTITY_CHANCE = 0.3 -- 30%

    function shouldEntityDoThing(entity)
      local rng = RNG()
      rng:SetSeed(entity.InitSeed, RECOMMENDED_SHIFT_IDX)
      local randomChance = myRNG:RandomFloat()
      return randomChance < MY_ENTITY_CHANCE
    end
    ```
___
### Random·Int () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int RandomInt ( int Max ) {: .copyable aria-label='Functions' }
Returns a number between 0 and the max value. It is inclusive on the lower end and exclusive on the higher end.

Note that this will automatically call the `RNG.Next` method before retrieving the random number. Since this mutates the RNG object, you should use this method with care.

???+ example "Example code"
    ```lua
    local RECOMMENDED_SHIFT_IDX = 35

    function getZeroOneTwoOrThree(seed)
      local rng = RNG()
      rng:SetSeed(seed, RECOMMENDED_SHIFT_IDX)
      return rng:RandomInt(4) -- Will generate 0, 1, 2, or 3.
    end
    ```
___
### Set·Seed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetSeed ( int Seed, int ShiftIdx ) {: .copyable aria-label='Functions' }
Set the seed of a given RNG object. Both Seed and ShiftIdx need to be an integer number that is **not** 0. Otherwise it can cause crashes.

Shift index table can be found here: https://gist.github.com/bladecoding/17b341ed08ff94d2deb704ebda8ffc5f

???+ bug "Bug"
    If the seed of an RNG object is set to 0, the game will crash after invoking a method like `Next()`, `RandomInt()`, etc.


???+ example "Example code"
    ```lua
    local myRNG = RNG()
    myRNG:SetSeed(Random(), 1)
    ```

___
