# Class "EntityFamiliar"
___ 
## void AddCoins (integer Value)

___ 
## void AddHearts (integer Hearts)

___ 
## void AddKeys (integer Keys)

___ 
## void AddToDelayed ()
Adds to delayed. This doesn't remove other flags! 
___ 
## void AddToFollowers ()
Adds to followers. This doesn't remove other flags! 
___ 
## void AddToOrbit (integer Layer)
Adds to orbitals. This doesn't remove other flags! 
___ 
## EntityTear FireProjectile (Vector Dir)

Shoots a projectile from the center of the familiar in the direction you defined.
If used on a familiar that shoots multiple projectiles (example: harlequin baby), this function will only return the left most projectile based on the direction. If used on familiars with special tears (example: Lil Brimstone,...), this will just shoot a regular tear.
This function will not play the shoot animation of the familiar.
___ 
## void FollowParent ()

___ 
## void FollowPosition (Vector Pos)

___ 
## static Vector GetOrbitDistance (integer Layer)

___ 
## integer State

___ 
## void MoveDelayed (integer NumFrames)

___ 
## void MoveDiagonally (float Speed)

___ 
## void PickEnemyTarget (float MaxDistance, integer FrameInterval )

___ 
## void PlayChargeAnim (Direction Dir)

___ 
## void PlayFloatAnim (Direction Dir)

___ 
## void PlayShootAnim (Direction Dir)

___ 
## integer RecalculateOrbitOffset (integer Layer, boolean Add )
Returns the number of familiars in that layer.
___ 
## void RemoveFromDelayed ()

___ 
## void RemoveFromFollowers ()

___ 
## void RemoveFromOrbit ()

___ 
## void Shoot ()

___ 
## integer Coins

___ 
## integer FireCooldown

___ 
## integer HeadFrameDelay

___ 
## integer Hearts

___ 
## integer Keys

___ 
## Direction LastDirection

___ 
## Direction MoveDirection

___ 
## float OrbitAngleOffset

Can be used to override the angular position of the familiar on its orbit based on the initial starting position of the orbit.
___ 
## Vector OrbitDistance

Defines the orbit of the familiar, if its an orbital. The Vector is interpreted as the dimensions of the circle/oval orbit. Example: <code>Vector(110,90)</code> is the orbital of "Forever alone".
___ 
## EntityPlayer Player

___ 
## integer RoomClearCount

___ 
## Direction ShootDirection

___ 
## integer State

___ 
