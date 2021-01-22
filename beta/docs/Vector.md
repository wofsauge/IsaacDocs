# Class "Vector"
## Constructors
### [Vector](../Vector) () {: aria-label='Constructors' }
[ ](#){: .abp .tooltip .badge }
#### void [Vector](../Vector) ( float , float ) {: .copyable aria-label='Constructors' }

___ 
## Functions
### __add () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) __add ( [Vector](../Vector) Right ) {: .copyable aria-label='Functions' }
Addition operators 
___ 
### __div () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) __div ( float Modifier ) {: .copyable aria-label='Functions' }
Division operators 
___ 
### __mul () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) __mul ( float Modifier ) {: .copyable aria-label='Functions' }
Multiplication operators 
___ 
### __sub () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) __sub ( [Vector](../Vector) Right ) {: .copyable aria-label='Functions' }
Subtraction operators 
___ 
### __unm () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) __unm ( [Vector](../Vector) Right ) {: .copyable aria-label='Functions' }
Subtraction operators 
___ 
### Clamp () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Clamp ( float MinX, float MinY, float MaxX, float MaxY ) {: .copyable aria-label='Functions' }
Clamps the vector based on left, top, right, bottom boundings. Doesn't keep direction 
___ 
### Clamped () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) Clamped ( float MinX, float MinY, float MaxX, float MaxY ) {: .copyable aria-label='Functions' }
Returns a clamped version of the vector. 
___ 
### Cross () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float Cross ( [Vector](../Vector) second ) {: .copyable aria-label='Functions' }
Cross product this is the 2x2 matrix determinant or the resulting z value for their 3D versions with z=0 
___ 
### Distance () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float Distance ( [Vector](../Vector) first, [Vector](../Vector) second ) {: .copyable aria-label='Functions' }
Returns distance between two vectors 

???- example "Example Code"
    ```lua 
    local sqtDist = Vector(2,0):Distance(Vector(4,0))) --sqtDist = 2
    
    ```

___ 
### DistanceSquared () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float DistanceSquared ( [Vector](../Vector) first, [Vector](../Vector) second ) {: .copyable aria-label='Functions' }
Returns squared distance between two vectors 

???- example "Example Code"
    ```lua 
    local sqtDist = Vector(2,0):DistanceSquared(Vector(4,0))) --sqtDist = 4
    
    ```

___ 
### Dot () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float Dot ( [Vector](../Vector) second ) {: .copyable aria-label='Functions' }
Dot product 
___ 
### FromAngle () {: aria-label='Functions' }
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
#### static [Vector](../Vector) FromAngle ( float AngleDegrees ) {: .copyable aria-label='Functions' }
Build a [Vector](../Vector) from an angle, returns a normalized vector. Angle 0 will result in (1, 0). Angle 90 will result in (0, 1). 

???- example "Example Code"
    This code returns a vector that has a 45 degree angle
    ```lua 
    local vec = Vector.FromAngle(45)) --vec is now Vector(0.70711,0.70711)
    
    ```
___ 
### GetAngleDegrees () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float GetAngleDegrees ( ) {: .copyable aria-label='Functions' }

Returns the angle the vector is facing. The vector (1, 0) will be at 0 degrees. The vector (0, 1) will be at 90 degrees. 

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
[ ](#){: .abp .tooltip .badge }
#### float Length ( ) {: .copyable aria-label='Functions' }
Returns the length of the vector 
___ 
### LengthSquared () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### float LengthSquared ( ) {: .copyable aria-label='Functions' }
Returns the length squared of the vector 
___ 
### Lerp () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) Lerp ( [Vector](../Vector) first, [Vector](../Vector) second, float t ) {: .copyable aria-label='Functions' }

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
[ ](#){: .abp .tooltip .badge }
#### void Normalize ( ) {: .copyable aria-label='Functions' }
Normalizes this vector 
___ 
### Normalized () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) Normalized ( ) {: .copyable aria-label='Functions' }
Returns a normalized version of this vector 
___ 
### Resize () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### void Resize ( float NewLength ) {: .copyable aria-label='Functions' }
Resizes the vector length. 
___ 
### Resized () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) Resized ( float NewLength ) {: .copyable aria-label='Functions' }
Returns a resized version of the vector. 
___ 
### Rotated () {: aria-label='Functions' }
[ ](#){: .abp .tooltip .badge }
#### [Vector](../Vector) Rotated ( float AngleDegrees ) {: .copyable aria-label='Functions' }
Returns a rotated version of the vector by AngleDegrees 
___ 
## Variables
### X {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float X  {: .copyable aria-label='Variables' }
Components of vector. 
___ 
### Y {: aria-label='Variables' }
[ ](#){: .abp .tooltip .badge }
#### float Y  {: .copyable aria-label='Variables' }

___ 
