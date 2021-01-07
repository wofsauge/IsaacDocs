# Class "Vector"
## Functions
### [Vector](../Vector) () {: aria-label='Functions' }
#### void [Vector](../Vector) ( float , float  )  {: aria-label='Functions' }

___ 
### __add () {: aria-label='Functions' }
#### [Vector](../Vector) __add ( [Vector](../Vector) Right)  {: aria-label='Functions' }
Addition operators 
___ 
### __div () {: aria-label='Functions' }
#### [Vector](../Vector) __div ( float Modifier)  {: aria-label='Functions' }
Division operators 
___ 
### __mul () {: aria-label='Functions' }
#### [Vector](../Vector) __mul ( float Modifier)  {: aria-label='Functions' }
Multiplication operators 
___ 
### __sub () {: aria-label='Functions' }
#### [Vector](../Vector) __sub ( [Vector](../Vector) Right)  {: aria-label='Functions' }
Subtraction operators 
___ 
### __unm () {: aria-label='Functions' }
#### [Vector](../Vector) __unm ( [Vector](../Vector) Right)  {: aria-label='Functions' }
Subtraction operators 
___ 
### Clamp () {: aria-label='Functions' }
#### void Clamp ( float MinX, float MinY, float MaxX, float MaxY )  {: aria-label='Functions' }
Clamps the vector based on left, top, right, bottom boundings. Doesn't keep direction 
___ 
### Clamped () {: aria-label='Functions' }
#### [Vector](../Vector) Clamped ( float MinX, float MinY, float MaxX, float MaxY )  {: aria-label='Functions' }
Returns a clamped version of the vector. 
___ 
### Cross () {: aria-label='Functions' }
#### float Cross ( [Vector](../Vector) second)  {: aria-label='Functions' }
Cross product this is the 2x2 matrix determinant or the resulting z value for their 3D versions with z=0 
___ 
### Distance () {: aria-label='Functions' }
#### float Distance ( [Vector](../Vector) first, [Vector](../Vector) second )  {: aria-label='Functions' }
Returns distance between two vectors 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
```cpp 
local sqtDist = Vector(2,0):Distance(Vector(4,0))) --sqtDist = 2

```

___ 
### DistanceSquared () {: aria-label='Functions' }
#### float DistanceSquared ( [Vector](../Vector) first, [Vector](../Vector) second )  {: aria-label='Functions' }
Returns squared distance between two vectors 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
```cpp 
local sqtDist = Vector(2,0):DistanceSquared(Vector(4,0))) --sqtDist = 4

```

___ 
### Dot () {: aria-label='Functions' }
#### float Dot ( [Vector](../Vector) second)  {: aria-label='Functions' }
Dot product 
___ 
### FromAngle () {: aria-label='Functions' }
#### static [Vector](../Vector) FromAngle ( float AngleDegrees)  {: aria-label='Functions' }
Build a <a class="el" href="class_vector.html">Vector</a> from an angle, returns a normalized vector. Angle 0 will result in (1, 0). Angle 90 will result in (0, 1). 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code returns a vector that has a 45 degree angle
```cpp 
local vec = Vector.GetAngleDegrees(45)) --vec is now Vector(0.70711,0.70711)

```

___ 
### GetAngleDegrees () {: aria-label='Functions' }
#### float GetAngleDegrees ( )  {: aria-label='Functions' }

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
### Length () {: aria-label='Functions' }
#### float Length ( )  {: aria-label='Functions' }
Returns the length of the vector 
___ 
### LengthSquared () {: aria-label='Functions' }
#### float LengthSquared ( )  {: aria-label='Functions' }
Returns the length squared of the vector 
___ 
### Lerp () {: aria-label='Functions' }
#### [Vector](../Vector) Lerp ( [Vector](../Vector) first, [Vector](../Vector) second, float t )  {: aria-label='Functions' }

Linear interpolation between two vectors. For t = 0 it returns the first Vector, for t = 1 it returns the second.

<div class="example_code">
This function does the same as Lerp, but will not alter the input vectors.
<pre>`:::cpp function Lerp(vec1, vec2, percent)
    return vec1 * (1 - percent) + vec2 * percent
end
`</pre>
</div>
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code will make v1 the vector 50% in between v1 and v2
```cpp 
local v1 = Vector(0,0)
local v2 = Vector(1,1)
v1:Lerp(v2,0.5) -- v1 equals  Vector(0.5,0.5)  now

```

___ 
### Normalize () {: aria-label='Functions' }
#### void Normalize ( )  {: aria-label='Functions' }
Normalizes this vector 
___ 
### Normalized () {: aria-label='Functions' }
#### [Vector](../Vector) Normalized ( )  {: aria-label='Functions' }
Returns a normalized version of this vector 
___ 
### Resize () {: aria-label='Functions' }
#### void Resize ( float NewLength)  {: aria-label='Functions' }
Resizes the vector length. 
___ 
### Resized () {: aria-label='Functions' }
#### [Vector](../Vector) Resized ( float NewLength)  {: aria-label='Functions' }
Returns a resized version of the vector. 
___ 
### Rotated () {: aria-label='Functions' }
#### [Vector](../Vector) Rotated ( float AngleDegrees)  {: aria-label='Functions' }
Returns a rotated version of the vector by AngleDegrees 
___ 
## Variables
### X {: aria-label='Variables' }
#### float X  {: aria-label='Variables' }
Components of vector. 
___ 
### Y {: aria-label='Variables' }
#### float Y  {: aria-label='Variables' }

___ 
