# Math and Lua Tips for BoI Modding

# Lua Tips

## Iterate over tables
The best way to itterate over a table is by using the `ipairs()` or `pairs()` functions.

### ipairs
`ipairs()` allows you to iterate over the table, providing the index of the element and the element value. The function does only work for tables without any keys!

```lua
local exampleTable = {"apple", 69, 1337, -3}
for i, value in ipairs(exampleTable) do
    print(i, value)
end
```

???- example "Result"

    ```txt
    1 apple
    2 69
    3 1337
    4 -3
    ```

### pairs
`pairs()` allows you to iterate over the table, providing the key of the element and the element value. The function should be used for tables with keys defined!

**Note:** Tables with keys are always unsorted.

```lua
local exampleTable = {["a"]="apple", [532]=69, ["something"]=1337, ["OwO"]=-3}
for key, value in pairs(exampleTable) do
    print(key, value)
end
```

???- example "Result"
    ```txt
    something 1337
    a apple
    532 69
    OwO -3
    ```

## Number of Table entries

### Tables without keys
For tables that don't have keys, you can use a simple `#` (Hashtag) in front of the table name to get the number of table entries.
```lua
local exampleTable = {"apple", 69, 1337, -3}
print(#exampleTable) -- Result: 4
```

### Tables with keys
For tables that have keys, you need to count the number of entries with a loop to get the number of table entries.
```lua
local exampleTable = {["a"]="apple", [532]=69, ["something"]=1337, ["OwO"]=-3}
local counter = 0
for _ in pairs(exampleTable) do
    counter = counter + 1
end
print(counter) -- Result: 4
```




# Math tips

## Modulo (Remainder of a division)
The Modulo operator `%` is a very powerful tool in programming, because it can save you lots of code. It basically returns the whole number that would remain from a division by a given number.

### Usage
```lua
local remainder = dividend % divisor
```
Since the remain of a division is never negative or bigger than the divisor, the Remainder will always have a value between 0 and divisor-1.

???- example "Examples"
```lua
    -- ...
    -3 % 3 -- = 0
    -2 % 3 -- = 1
    -1 % 3 -- = 2
    0 % 3 -- = 0
    1 % 3 -- = 1
    2 % 3 -- = 2
    3 % 3 -- = 0
    4 % 3 -- = 1
    5 % 3 -- = 2
    -- ...

    local isOddNumber = 123115 % 2 -- Result = 1. Would be 0 if its an even number
    local isDivideableBySeven = 123429292 % 7 -- Result = 0. Therefore, its divideable by 7
    ```

