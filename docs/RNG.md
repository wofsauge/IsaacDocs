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
Returns a number between 0 and 1. This includes 0, but excludes 1.

???+ example "Example code"
    ```lua
    local myRNG = RNG()
    myRNG:SetSeed(Random(), 1)
    myRNG:RandomFloat()  -- will generate a number between 0 and 1
    ```
___
### Random·Int () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int RandomInt ( int Max ) {: .copyable aria-label='Functions' }
Returns a number between 0 and the max value, excluding the max value.

???+ example "Example code"
    ```lua
    local myRNG = RNG()
    myRNG:SetSeed(Random(), 1)
    myRNG:RandomInt(4)  -- will generate 0, 1, 2, or 3.
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
