# Class "Vector"
## Constructors
[ ](#){: .abp .tooltip .badge }
### [Vector](../Vector) () {: aria-label='Constructors' }
#### void [Vector](../Vector) ( float , float ) {: .copyable aria-label='Constructors' }

___ 
## Functions
[ ](#){: .abp .tooltip .badge }
### __add () {: aria-label='Functions' }
#### [Vector](../Vector) __add ( [Vector](../Vector) Right ) {: .copyable aria-label='Functions' }
Addition operators 
___ 
[ ](#){: .abp .tooltip .badge }
### __div () {: aria-label='Functions' }
#### [Vector](../Vector) __div ( float Modifier ) {: .copyable aria-label='Functions' }
Division operators 
___ 
[ ](#){: .abp .tooltip .badge }
### __mul () {: aria-label='Functions' }
#### [Vector](../Vector) __mul ( float Modifier ) {: .copyable aria-label='Functions' }
Multiplication operators 
___ 
[ ](#){: .abp .tooltip .badge }
### __sub () {: aria-label='Functions' }
#### [Vector](../Vector) __sub ( [Vector](../Vector) Right ) {: .copyable aria-label='Functions' }
Subtraction operators 
___ 
[ ](#){: .abp .tooltip .badge }
### __unm () {: aria-label='Functions' }
#### [Vector](../Vector) __unm ( [Vector](../Vector) Right ) {: .copyable aria-label='Functions' }
Subtraction operators 
___ 
[ ](#){: .abp .tooltip .badge }
### Clamp () {: aria-label='Functions' }
#### void Clamp ( float MinX, float MinY, float MaxX, float MaxY ) {: .copyable aria-label='Functions' }
Clamps the vector based on left, top, right, bottom boundings. Doesn't keep direction 
___ 
[ ](#){: .abp .tooltip .badge }
### Clamped () {: aria-label='Functions' }
#### [Vector](../Vector) Clamped ( float MinX, float MinY, float MaxX, float MaxY ) {: .copyable aria-label='Functions' }
Returns a clamped version of the vector. 
___ 
[ ](#){: .abp .tooltip .badge }
### Cross () {: aria-label='Functions' }
#### float Cross ( [Vector](../Vector) second ) {: .copyable aria-label='Functions' }
Cross product this is the 2x2 matrix determinant or the resulting z value for their 3D versions with z=0 
___ 
[ ](#){: .abp .tooltip .badge }
### Distance () {: aria-label='Functions' }
#### float Distance ( [Vector](../Vector) first, [Vector](../Vector) second ) {: .copyable aria-label='Functions' }
Returns distance between two vectors 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
```cpp 
local sqtDist = Vector(2,0):Distance(Vector(4,0))) --sqtDist = 2

```

___ 
[ ](#){: .abp .tooltip .badge }
### DistanceSquared () {: aria-label='Functions' }
#### float DistanceSquared ( [Vector](../Vector) first, [Vector](../Vector) second ) {: .copyable aria-label='Functions' }
Returns squared distance between two vectors 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
```cpp 
local sqtDist = Vector(2,0):DistanceSquared(Vector(4,0))) --sqtDist = 4

```

___ 
[ ](#){: .abp .tooltip .badge }
### Dot () {: aria-label='Functions' }
#### float Dot ( [Vector](../Vector) second ) {: .copyable aria-label='Functions' }
Dot product 
___ 
[ ](#){: .static .tooltip .badge } [ ](#){: .abp .tooltip .badge }
### FromAngle () {: aria-label='Functions' }
#### static [Vector](../Vector) FromAngle ( float AngleDegrees ) {: .copyable aria-label='Functions' }
Build a <a class="el" href="class_vector.html">Vector</a> from an angle, returns a normalized vector. Angle 0 will result in (1, 0). Angle 90 will result in (0, 1). 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code returns a vector that has a 45 degree angle
```cpp 
local vec = Vector.FromAngle(45)) --vec is now Vector(0.70711,0.70711)

```
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### GetAngleDegrees () {: aria-label='Functions' }
#### float GetAngleDegrees ( ) {: .copyable aria-label='Functions' }

Returns the angle the vector is facing. The vector (1, 0) will be at 0 degrees. The vector (0, 1) will be at 90 degrees. 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code returns the angle between two positions.
```cpp 
local v1 = Vector(1,0) -- has angle 0.0
local v2 = Vector(0,1) -- has angle 90.0
local v3 = v2-v1 -- subtraction of 2 points is a vector connecting the two points
print(v3:GetAngleDegrees()) -- prints 45.0 

```

___ 
[ ](#){: .abp .tooltip .badge }
### Length () {: aria-label='Functions' }
#### float Length ( ) {: .copyable aria-label='Functions' }
Returns the length of the vector 
___ 
[ ](#){: .abp .tooltip .badge }
### LengthSquared () {: aria-label='Functions' }
#### float LengthSquared ( ) {: .copyable aria-label='Functions' }
Returns the length squared of the vector 
___ 
[ ](#){: .abp .tooltip .badge }
### Lerp () {: aria-label='Functions' }
#### [Vector](../Vector) Lerp ( [Vector](../Vector) first, [Vector](../Vector) second, float t ) {: .copyable aria-label='Functions' }

Linear interpolation between two vectors. For t = 0 it returns the first Vector, for t = 1 it returns the second.

<div class="example_code">
This function does the same as Lerp, but will not alter the input vectors.
```:::cpp function Lerp(vec1, vec2, percent)
  return vec1 * (1 - percent) + vec2 * percent
end
```
</div>
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code will make v1 the vector 50% in between v1 and v2
```cpp 
local v1 = Vector(0,0)
local v2 = Vector(1,1)
v1:Lerp(v2,0.5) -- v1 equals Vector(0.5,0.5) now

```
 WRONG PARSING 
{: .wrongParsing }
___ 
[ ](#){: .abp .tooltip .badge }
### Normalize () {: aria-label='Functions' }
#### void Normalize ( ) {: .copyable aria-label='Functions' }
Normalizes this vector 
___ 
[ ](#){: .abp .tooltip .badge }
### Normalized () {: aria-label='Functions' }
#### [Vector](../Vector) Normalized ( ) {: .copyable aria-label='Functions' }
Returns a normalized version of this vector 
___ 
[ ](#){: .abp .tooltip .badge }
### Resize () {: aria-label='Functions' }
#### void Resize ( float NewLength ) {: .copyable aria-label='Functions' }
Resizes the vector length. 
___ 
[ ](#){: .abp .tooltip .badge }
### Resized () {: aria-label='Functions' }
#### [Vector](../Vector) Resized ( float NewLength ) {: .copyable aria-label='Functions' }
Returns a resized version of the vector. 
___ 
[ ](#){: .abp .tooltip .badge }
### Rotated () {: aria-label='Functions' }
#### [Vector](../Vector) Rotated ( float AngleDegrees ) {: .copyable aria-label='Functions' }
Returns a rotated version of the vector by AngleDegrees 
___ 
[ ](#){: .abp .tooltip .badge }
## Variables
### X {: aria-label='Variables' }
#### float X  {: .copyable aria-label='Variables' }
Components of vector. 
___ 
[ ](#){: .abp .tooltip .badge }
### Y {: aria-label='Variables' }
#### float Y  {: .copyable aria-label='Variables' }

___ 
