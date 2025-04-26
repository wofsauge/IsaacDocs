---
tags:
  - Globals
  - Class
---
# Class "BitSet128"

???+ info
    This class can be accessed by using its constructor or usind the [TearFlags](enums/TearFlags.md) enum:

    ???+ example "Example Code"
        ```lua
        local myBitSet = TearFlags.TEAR_WIGGLE
        ```

## Constructors
### BitSet128 () {: aria-label='Constructors' }
[ ](#){: .reporplus .tooltip .badge }
#### [BitSet128](BitSet128.md) BitSet128 ( int Low = 0, int High = 0 ) {: .copyable aria-label='Constructors' }

Constructor for the "BitSet128" class.

[BitSet128](BitSet128.md) is used as a storage system for flags and other bit-wise evaluated values that exceed the numeric limits of the default 64-bit integers which only allow for up to 64 flags to be defined. [BitSet128](BitSet128.md) allows for up to 128 Flags by spliting the bitset into a "lower" and "higher" part. Those parts are represented by a simple 64bit integer number.
___
## Operators
### __bnot () {: aria-label='Operators' }
[ ](#){: .reporplus .tooltip .badge }
#### [BitSet128](BitSet128.md) __bnot ( ) {: .copyable aria-label='Operators' }
Defines the negation of a [BitSet128](BitSet128.md) object using the `~` operator.
___

### __bor () {: aria-label='Operators' }
[ ](#){: .reporplus .tooltip .badge }
#### [BitSet128](BitSet128.md) __bor ( [BitSet128](BitSet128.md) Right ) {: .copyable aria-label='Operators' }
Defines the binary OR operation of two [BitSet128](BitSet128.md) objects using the `|` operator.
___

### __band () {: aria-label='Operators' }
[ ](#){: .reporplus .tooltip .badge }
#### [BitSet128](BitSet128.md) __band ( [BitSet128](BitSet128.md) Right ) {: .copyable aria-label='Operators' }
Defines the binary AND operation of two [BitSet128](BitSet128.md) objects using the `&` operator.
___

### __bxor () {: aria-label='Operators' }
[ ](#){: .reporplus .tooltip .badge }
#### [BitSet128](BitSet128.md) __bxor ( [BitSet128](BitSet128.md) Right ) {: .copyable aria-label='Operators' }
Defines the binary XOR operation of two [BitSet128](BitSet128.md) objects using the `~` operator.
___

### __shl () {: aria-label='Operators' }
[ ](#){: .reporplus .tooltip .badge }
#### [BitSet128](BitSet128.md) __shl ( int Shift ) {: .copyable aria-label='Operators' }
Defines the left bit-shift operator of a [BitSet128](BitSet128.md) object using the `<<` operator.
___

### __shr () {: aria-label='Operators' }
[ ](#){: .reporplus .tooltip .badge }
#### [BitSet128](BitSet128.md) __shr ( int Shift ) {: .copyable aria-label='Operators' }
Defines the right bit-shift operator of a [BitSet128](BitSet128.md) object using the `>>` operator.
___

### __eq () {: aria-label='Operators' }
[ ](#){: .reporplus .tooltip .badge }
#### boolean __eq ( [BitSet128](BitSet128.md) right ) {: .copyable aria-label='Operators' }
Defines the equality operation of two [BitSet128](BitSet128.md) objects using the `==` operator.
___

### __lt () {: aria-label='Operators' }
[ ](#){: .reporplus .tooltip .badge }
#### boolean __lt ( [BitSet128](BitSet128.md) right ) {: .copyable aria-label='Operators' }
Defines the "smaller than"-Operation of two [BitSet128](BitSet128.md) objects using the `<` operator.

The `>` operator is implicitly defined with this as well.
___

### __le () {: aria-label='Operators' }
[ ](#){: .reporplus .tooltip .badge }
#### boolean __le ( [BitSet128](BitSet128.md) right ) {: .copyable aria-label='Operators' }
Defines the "smaller of equal" operation of two [BitSet128](BitSet128.md) objects using the `<=` operator.

The `>=` operator is implicitly defined with this as well.
___
## Functions
### Get () {: aria-label='Functions' }
[ ](#){: .tooltip .badge } [ ](#){: .reporplus .tooltip .badge }
#### boolean Get ( int BitPosition ) {: .copyable aria-label='Functions' }
Gets the flags' value at the provided position.
___

### Set () {: aria-label='Functions' }
[ ](#){: .tooltip .badge } [ ](#){: .reporplus .tooltip .badge }
#### void Set ( int BitPosition, boolean State ) {: .copyable aria-label='Functions' }
Sets the bit at the given position to the given value.

___

### __tostring () {: aria-label='Functions' }
[ ](#){: .tooltip .badge } [ ](#){: .reporplus .tooltip .badge }
#### void __tostring ( ) {: .copyable aria-label='Functions' }
[BitSet128](BitSet128.md) objects can be cast to a string object, which returns information about this object in the following format:

```
BitSet128: [[High+Low values converted into Hexadecimal]]
```

___
## Variables

### h {: aria-label='Variables' }
[ ](#){: .reporplus .tooltip .badge }
#### int h  {: .copyable aria-label='Variables' }
Returns the number representing the "High" or "upper" 64-bit number of the 128bit [BitSet128](BitSet128.md) object.
___
### l {: aria-label='Variables' }
[ ](#){: .reporplus .tooltip .badge }
#### int l  {: .copyable aria-label='Variables' }
Returns the number representing the "Low" or "lower" 64-bit number of the 128bit [BitSet128](BitSet128.md) object.
___