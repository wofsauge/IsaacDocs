---
tags:
  - Globals
  - Class
---
# Class "Vector"

???+ info
    This class can be accessed by using its constructor or multiple functions:

    ???+ example "Example Code"
        ```lua
        local myVector = Vector(1, -1)
        ```

## Constructors
### Vector () {: aria-label='Constructors' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) Vector ( float , float ) {: .copyable aria-label='Constructors' }

___
## Constants
### Vector.Zero {: aria-label='Constants' }
[ ](#){: .reporplus .tooltip .badge }

Equivalent to `:::lua Vector(0, 0)`.
___
### Vector.One {: aria-label='Constants' }
[ ](#){: .reporplus .tooltip .badge }

Equivalent to `:::lua Vector(1, 1)`.
___
## Operators
### __add () {: aria-label='Operators' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) __add ( [Vector](Vector.md) Right ) {: .copyable aria-label='Operators' }
Defines the Addition of two Vector objects using the `+` operator.

???- example "Example Code"
    ```lua
    local vec1 = Vector(2,1)
    local vec2 = Vector(5,3)
    local result = vec1+vec2 -- result equals Vector(7,4) now
    ```
___
### __div () {: aria-label='Operators' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) __div ( float Modifier ) {: .copyable aria-label='Operators' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) __div ( [Vector](Vector.md) Modifier ) {: .copyable aria-label='Operators' }
Defines the Division of a Vector object and a float / vector divisor(Modifier) using the `/` operator.
The overloaded method that accepts a Vector object performs an **element-wise** division.

???- example "Example Code"
    ```lua
    local vec1 = Vector(6,4)

    -- vector / float
    local divisor1 = 2
    local result1 = vec1/divisor1 -- result equals Vector(3,2) now

    -- vector / vector
    local divisor2 = Vector(1,4)
    local result2 = vec1/divisor2 -- result equals Vector(6,1) now
    ```
___
### __mul () {: aria-label='Operators' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) __mul ( float Modifier ) {: .copyable aria-label='Operators' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) __mul ( [Vector](Vector.md) Modifier ) {: .copyable aria-label='Operators' }
Defines the Multiplication of a Vector object and a float / vector multiplier(Modifier) using the `*` operator.
The overloaded method that accepts a Vector object performs an **element-wise** multiplication.

???- example "Example Code"
    ```lua
    local vec1 = Vector(2,3)

    -- vector * float
    local multiplier1 = 5
    local result1 = vec1*multiplier1 -- result equals Vector(10,15) now

    -- vector * vector
    local multiplier2 = Vector(5, 2)
    local result2 = vec1*multiplier2 -- result equals Vector(10,6) now
    ```
___
### __sub () {: aria-label='Operators' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) __sub ( [Vector](Vector.md) Right ) {: .copyable aria-label='Operators' }
Defines the Subtraction of two Vector objects using the `-` operator.

???- example "Example Code"
    ```lua
    local vec1 = Vector(2,1)
    local vec2 = Vector(5,3)
    local result = vec1-vec2 -- result equals Vector(-3,-2) now
    ```
___
### __unm () {: aria-label='Operators' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) __unm ( [Vector](Vector.md) Right ) {: .copyable aria-label='Operators' }
Defines the inversion of a Vector object using the `-` operator.

???- example "Example Code"
    ```lua
    local vec1 = Vector(2,1)
    local result = -vec1 -- result equals Vector(-2,-1) now
    ```

___
## Functions
### Clamp () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void Clamp ( float MinX, float MinY, float MaxX, float MaxY ) {: .copyable aria-label='Functions' }
Clamps the vector based on left, top, right, bottom boundings. Doesn't keep direction
___
### Clamped () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) Clamped ( float MinX, float MinY, float MaxX, float MaxY ) {: .copyable aria-label='Functions' }
Returns a clamped version of the vector.
___
### Cross () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### float Cross ( [Vector](Vector.md) second ) {: .copyable aria-label='Functions' }
Cross product this is the 2x2 matrix determinant or the resulting z value for their 3D versions with z=0
___
### Distance () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### float Distance ( [Vector](Vector.md) first, [Vector](Vector.md) second ) {: .copyable aria-label='Functions' }
Returns distance between two vectors

???- example "Example Code"
    ```lua
    local sqtDist = Vector(2,0):Distance(Vector(4,0)) --sqtDist = 2

    ```

___
### Distance·Squared () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### float DistanceSquared ( [Vector](Vector.md) first, [Vector](Vector.md) second ) {: .copyable aria-label='Functions' }
Returns squared distance between two vectors

???- example "Example Code"
    ```lua
    local sqtDist = Vector(2,0):DistanceSquared(Vector(4,0)) --sqtDist = 4

    ```

___
### Dot () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### float Dot ( [Vector](Vector.md) second ) {: .copyable aria-label='Functions' }
Dot product
___
### From·Angle () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .alldlc .tooltip .badge }
#### static [Vector](Vector.md) FromAngle ( float AngleDegrees ) {: .copyable aria-label='Functions' }
Build a [Vector](Vector.md) from an angle, returns a normalized vector. Angle 0 will result in (1, 0). Angle 90 will result in (0, 1).

???- example "Example Code"
    This code returns a vector that has a 45 degree angle
    ```lua
    local vec = Vector.FromAngle(45) --vec is now Vector(0.70711,0.70711)

    ```
___
### Get·Angle·Degrees () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### float GetAngleDegrees ( ) {: .copyable aria-label='Functions' }

Returns the angle the vector is facing. The vector (1, 0) will be at 0 degrees. The vector (0, 1) will be at 90 degrees.

Practically, this means:

- Right: 0
- Up: -90
- Left: 180
- Down: 90

???- example "Example Code"
    This code returns the angle between two positions.
    ```lua
    local v1 = Vector(1,0) -- has angle 0.0
    local v2 = Vector(0,1) -- has angle 90.0
    local v3 = v2-v1 -- subtraction of 2 points is a vector connecting the two points
    print(v3:GetAngleDegrees()) -- prints 45.0

    ```

___
### Length () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### float Length ( ) {: .copyable aria-label='Functions' }
Returns the length of the vector
___
### Length·Squared () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### float LengthSquared ( ) {: .copyable aria-label='Functions' }
Returns the length squared of the vector
___
### Lerp () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) Lerp ( [Vector](Vector.md) first, [Vector](Vector.md) second, float t ) {: .copyable aria-label='Functions' }

Linear interpolation between two vectors. For t = 0 it returns the first Vector, for t = 1 it returns the second.

???- example "Alternate Function example"
    This function does the same as Lerp, but will not alter the input vectors.
    ```lua
    function Lerp(vec1, vec2, percent)
        return vec1 * (1 - percent) + vec2 * percent
    end
    ```

???- example "Example Code"
    This code will make v1 the vector 50% in between v1 and v2
    ```lua
    local v1 = Vector(0,0)
    local v2 = Vector(1,1)
    v1:Lerp(v2,0.5) -- v1 equals  Vector(0.5,0.5)  now

    ```
___
### Normalize () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void Normalize ( ) {: .copyable aria-label='Functions' }
Normalizes this vector, effectively making its length equal 1.
___
### Normalized () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) Normalized ( ) {: .copyable aria-label='Functions' }
Returns a normalized version of this vector, effectively making its length equal 1.
___
### Resize () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### void Resize ( float NewLength ) {: .copyable aria-label='Functions' }
Resizes the vector length.
___
### Resized () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) Resized ( float NewLength ) {: .copyable aria-label='Functions' }
Returns a resized version of the vector.
___
### Rotated () {: aria-label='Functions' }
[ ](#){: .alldlc .tooltip .badge }
#### [Vector](Vector.md) Rotated ( float AngleDegrees ) {: .copyable aria-label='Functions' }
Returns a rotated version of the vector by AngleDegrees
___
### __tostring () {: aria-label='Functions' }
[ ](#){: .tooltip .badge } [ ](#){: .reporplus .tooltip .badge }
#### void __tostring ( ) {: .copyable aria-label='Functions' }
[Vector](Vector.md) objects can be cast to a string object, which returns information about this object in the following format:

```
Vector(X,Y)
```
___
## Variables
### X {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float X  {: .copyable aria-label='Variables' }
Components of vector.
___
### Y {: aria-label='Variables' }
[ ](#){: .alldlc .tooltip .badge }
#### float Y  {: .copyable aria-label='Variables' }

___
