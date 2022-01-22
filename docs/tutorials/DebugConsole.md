# Tutorial: DebugConsole
**To access the debug console, at least 1 mod must be enabled.**

If you don't have any mods to enable, download one from Steam Workshop, or create an empty folder in your mods.

**On repentance you also need to edit "C:\Users\%USERNAME%\Documents\My Games\Binding of Isaac Repentance\options.ini".**
Make sure the game is closed then replace `EnableDebugConsole=0` with `EnableDebugConsole=1`.

**To show the console**, while in a run press the grave/tilde (`~) key. On english (American) keyboardlayouts, it should be below Esc.

|Language|Keyboard|Key|
|--- |--- |--- |
|English (US)|QWERTY|` or ~|
|English (UK)|QWERTY|' or @|
|French|AZERTY|ù|
|German|QWERTZ|ö|
|Spanish|QWERTY|ñ|
|Italian|QWERTY|>|
|Danish|QWERTY|æ|
|Portuguese|QWERTY|ç|

**To hide the console**, just hit Enter without typing anything. **Beware of spoilers!** You can easily learn things accidentally via the debug console that you might have wanted to learn from regular gameplay!

The debug console is a feature of Isaac that's been around since Rebirth, but until AB+ it's only been enabled in developer builds. Now modders can finally unleash its power! It can be a big time saver for testing your changes during development of mods.

The debug console is not completely stable, so if you enter commands like numbers outside certain ranges, it may crash. Some of the crashes are documented below, but there are likely others.

If you're testing a specific item or item combo, it's useful to enter your commands and then exit and continue so your items are reloaded when you continue and you don't need to keep retyping the same command. Also, try the clipboard! You can paste multiple commands at once or copy the last few commands you entered using the copy command.

Some commands that are still in the game aren't listed here since they're only useful for Nicalis developers, or are no longer useful. For instance, the achievement and eggs commands unlock stuff in your game save, but saving your persistent data is disabled when mods are turned on.

## Commands

### **spawn**

Syntax:
```
spawn mega maw
spawn 20
spawn 10.1
spawn 10.2.0.4
```

Very similar names are incredibly common among entities, so you'll likely need to type the name to figure out the number, then delete it and type the number manually. The decimal syntax lets you specify:

```
Type.Variant.Subtype.Champion
```
`spawn 10.2.0.4` will get you a gaper(10)'s flaming variant(.2) with a blue champion type(.4).

### **goto**
Syntax:
```
goto s.boss.1010
goto s.error.21
goto d.10
```
`s` is for special room types, and `d` is for normal room types. The rooms will be different depending on what floor you're on, so `goto d.10` will take you to a different room on stage 1 than it will on stage 3.

### **stage**
Syntax:
```
stage 1
stage 10a
stage 3b
```

Move to another floor on the same seed. You can use this to skip ahead to a later floor, go backwards to an earlier floor, or reset the current floor by entering the current floor's id. Entering nonexistent floors can crash the game.

### **gridspawn**
Syntax:
```
gridspawn 1000
gridspawn 1494
gridspawn 9000
gridspawn 9100
```

Spawns the grid entity with the given ID at a random place in the room. For some reason it doesn't always do something, possibly because of failing to overwrite other grid entities or trying to spawn outside the room or something. Pits won't look right until you leave the room and come back.

### **debug**
Various cheats that are useful for testing. Some of the ones not listed here are obsolete, not very useful, or possibly broken. Here are the ones that are still useful.

**debug 3** Complete invincibility

**debug 4** +40 damage. Good with Soy Milk.

**debug 7** Display damage values, similar to the Spider Mod item

**debug 8** Your active item always has max charge.

**debug 9** Your luck is very high, so luck-based random events like random tear effects happen more often.

**debug 10** All enemies take rapid damage at all times, so rooms are usually cleared in under a second.

### **giveitem**
####  aliases: `g`

Item and trinket syntax:
```
giveitem dr. fetus
giveitem c15
giveitem Petrified Poop
giveitem t15
giveitem ipec
g mutant sp
g soy milk
```
Name collisions are somewhat common among items, so you'll likely need to type the name to figure out the number, then delete it and type the number manually. For items, use "c15" to give the item by number instead of name. For trinkets numbers, use "t15" Notice how it can autocomplete if you don't type the full name. It doesn't work with some odd item names like "<3" so you'll have to figure out the collectible number and use "c15" instead.

Pill syntax:
```
giveitem p0
g p22
```

Card syntax:
```
giveitem k1
g k45
```

Unfortunately you can't type pills or cards by name, so you have to figure out the number. You can give yourself pills even if that pill's effect is not in the rotation. It won't subsequently appear in rotation afterwards.

### **remove**
####  aliases: `r`

Syntax:
```
remove t53
remove soy milk
remove cursed eye
r bob's brain
r experi
remove *
```

`remove *` is a special version of the command that should remove all items.

### **costumetest**

Syntax:
```
costumetest
costumetest 33
```
Gives Isaac a number of totally random costumes, without having the associated items.

### **restart**
Same as holding R. Resets the game back to the beginning of a new run. listcollectibles Prints a list of all items in your possession, and how many of each

### **repeat**

Syntax:
```
spawn 10
repeat 50
giveitem meat!
repeat 100
repeat 100
```

The commands above will spawn one, then fifty gapers, and then give you one MEAT! and then two hundred more MEAT!s. repeat looks back up the previous console command. The last one that wasn't a repeat command is re-entered as many times as requested. You can use this to give yourself tons of items or spawn tons of enemies. Exercise restraint! Remember that an extreme number of repetitions of some commands might crash the game or leave it hanging for a long time.

### **clearseeds**
Removes all easter egg effects from the current run.

### **seed**

Syntax:
```
seed GGGG GGGG
seed T1MM AY48
```
It's much easier just to exit to the character select and type the seed the normal way. Easter egg seeds won't work. It's case-sensitive (uppercase only) and doesn't replace "i" with "1," etc.

### **challenge**

Syntax:
```
challenge 20
```

Starts a new run on a random seed on the given challenge number. Numbers greater than the number of challenges included in the base game will cause the game to crash.

### **combo**

Syntax:
```
combo 0.69
```

Gives you an item combo, taking 69 random items from the specified item pool (in this case, 0 is the treasure room item pool).

### **macro**
This command wasn't designed for general consumption, as macros can only be added in C++ code. Sorry! If there's enough demand we can consider adding a similar feature for modder access. It just pastes a bunch of hardcoded console commands one after another using an abbrevition that's quick to type. You can use the clipboard to similar effect.

### **curse**

Syntax:
```
curse 2
curse 16
curse 127
```

Set a value corresponding to a sum of the desired curses. Darkness (1) + Labyrinth (2) + Lost (4) + Unknown (8) + Cursed (16) + Maze (32) + Blind (64) = 127 The stage or reseed commands are useful after adding curse of the labyrinth to force the floor to be re-generated.

### **reseed**
Generates a new layout for the current floor with a new floor seed. This floor will no longer match other people playing the same seed.

### **copy**
Copies the last three console commands to your clipboard. Paste one or more commands with ctrl+v, or command+v on mac.

### **clear**
Clears the console. Useful for video recording purposes or if you want to dispose of incriminating evidence.

### **lua**
Examples:
```
lua print("Hello World!")

l for _,v in pairs(Isaac.GetRoomEntities()) do if v:IsVulnerableEnemy() then print(v.HitPoints.."/"..v.MaxHitPoints) end end
```
Directly runs a line of Lua code. The first example simply prints "Hello World!" to the console, while the second prints the current HP and max HP of every vulnerable enemy in the room.

### **luarun**
Examples:
```
luarun /full_path/hello.lua
luarun relative_path/hello.lua
```

Takes a path to a lua file and runs it immediately. Paths are relative to the folder where the game is installed.

### **luamod**
Examples:
```
luamod mygreatmod
```
Takes a mod folder name and runs the main.lua for it. This can be used to reload a mod without relaunching the game.

### **luarun**
Reports memory usage for Lua
