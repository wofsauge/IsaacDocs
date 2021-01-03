# Class "Vector"
___ 
## void Vector (float , float  )

___ 
## Vector __add (Vector Right)
Addition operators 
___ 
## Vector __div (float Modifier)
Division operators 
___ 
## Vector __mul (float Modifier)
Multiplication operators 
___ 
## Vector __sub (Vector Right)
Subtraction operators 
___ 
## Vector __unm (Vector Right)
Subtraction operators 
___ 
## void Clamp (float MinX, float MinY, float MaxX, float MaxY )
Clamps the vector based on left, top, right, bottom boundings. Doesn't keep direction 
___ 
## Vector Clamped (float MinX, float MinY, float MaxX, float MaxY )
Returns a clamped version of the vector. 
___ 
## float Cross (Vector second)
Cross product this is the 2x2 matrix determinant or the resulting z value for their 3D versions with z=0 
___ 
## float Distance (Vector first, Vector second )
Returns distance between two vectors 
#### Example Code
```lua
local sqtDist = Vector(2,0):Distance(Vector(4,0))) --sqtDist = 2

```
___ 
## float DistanceSquared (Vector first, Vector second )
Returns squared distance between two vectors 
#### Example Code
```lua
local sqtDist = Vector(2,0):DistanceSquared(Vector(4,0))) --sqtDist = 4

```
___ 
## float Dot (Vector second)
Dot product 
___ 
## static Vector FromAngle (float AngleDegrees)
Build a <a class="el" href="class_vector.html">Vector</a> from an angle, returns a normalized vector. Angle 0 will result in (1, 0). Angle 90 will result in (0, 1). 
#### Example Code
This code returns a vector that has a 45 degree angle
```lua
local vec = Vector.GetAngleDegrees(45)) --vec is now Vector(0.70711,0.70711)

```
___ 
## float GetAngleDegrees ()

Returns the angle the vector is facing. The vector (1, 0) will be at 0 degrees. The vector (0, 1) will be at 90 degrees. 
#### Example Code
This code returns the angle between two positions.
```lua
local v1 = Vector(1,0) -- has angle 0.0
local v2 = Vector(0,1) -- has angle 90.0
local v3 = v2-v1 -- subtraction of 2 points is a vector connecting the two points
print(v3:GetAngleDegrees()) -- prints 45.0 

```
___ 
## float Length ()
Returns the length of the vector 
___ 
## float LengthSquared ()
Returns the length squared of the vector 
___ 
## Vector Lerp (Vector first, Vector second, float t )

Linear interpolation between two vectors. For t = 0 it returns the first Vector, for t = 1 it returns the second.

<div class="example_code">
This function does the same as Lerp, but will not alter the input vectors.
<pre><code class="language-lua">function Lerp(vec1, vec2, percent)
    return vec1 * (1 - percent) + vec2 * percent
end
</code></pre>
</div>
#### Example Code
This code will make v1 the vector 50% in between v1 and v2
```lua
local v1 = Vector(0,0)
local v2 = Vector(1,1)
v1:Lerp(v2,0.5) -- v1 equals  Vector(0.5,0.5)  now

```
___ 
## void Normalize ()
Normalizes this vector 
___ 
## Vector Normalized ()
Returns a normalized version of this vector 
___ 
## void Resize (float NewLength)
Resizes the vector length. 
___ 
## Vector Resized (float NewLength)
Returns a resized version of the vector. 
___ 
## Vector Rotated (float AngleDegrees)
Returns a rotated version of the vector by AngleDegrees 
___ 
## float X
Components of vector. 
___ 
## float Y

___ 
