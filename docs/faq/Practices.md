---
tags:
  - FAQ
---

# Modding FAQ: Coding Practices

## What is a micro-optimization? Should I optimize my mod? {: .subHeader}

### Definition

As programmers, we are often concerned with the speed of our programs.

When beginner programmers start to think about "performance", they often make bad adjustments to their code in the hopes that it will speed it up. These are called [micro-optimizations (or premature optimizations)](https://wiki.c2.com/?PrematureOptimization). For example, a beginner might start with some code that is neatly organized into separate functions, like this:

```lua
local function main()
  -- Do some stuff with foo
  foo()

  -- Do some stuff with bar
  bar()
end

local function foo()
  -- TODO
end

local function bar()
  -- TODO
end
```

In the previous code, we have two functions that are small, named well (theoretically), and are easy to read and understand. But a beginner might be tempted to transform the code to this:

```lua
local function main()
  -- Do some stuff with foo
  -- TODO

  -- Do some stuff with bar
  -- TODO
end
```

The idea here is that since we got rid of two function calls, the program should *theoretically* speed up. (Because under the hood, what functions do when they are called is put values on the stack, and then pop them back off of the stack when they are done.)

But in reality, compilers can often optimize the code to perform this speed-up automatically (without the programmer having to actually modify their source code). So in this case, the beginner programmer is making their source code worse in exchange for byte-code that will run identically. Bad!

Furthermore, even if the compiler does not optimize the function call automatically, the simple act of calling a function can happen in few short nanoseconds. You would never be able to meaningfully measure a difference in the run-time performance of the program with a few extra function calls. So it's still the same as before: the beginner programmer is making their source code worse for no measurable benefit.

Micro-optimziation is a trap that many beginners fall into. The time spent on performing micro-optimizations should instead be spent on measuring *real* bottlenecks in the code, and then optimizing those. Or fixing real bugs! Or adding real features!

This is the reason why programmers have the maxim: "Premature optimization is the root of all evil." It comes from [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth), who is one of the most renown computer scientests of all time. In his paper "[Structured Programming with go to Statements](https://pic.plover.com/knuth-GOTO.pdf)", he famously writes:

> Programmers waste enormous amounts of time thinking about, or worrying about, the speed of noncritical parts of their programs, and these attempts at efficiency actually have a strong negative impact when debugging and maintenance are considered. We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%.

### Measuring

In the example above, the beginner programmer assumed that removing function calls would speed up the program. But these kinds of assumptions could be about any type of code, not just function calls. You might "know" that coding in a certain way will be faster than in another way.

But in real life programs, it is **extremely difficult** to predict what kinds of code transformations will actually affect the performance of the program. Sometimes, you can make a change that you think will speed up the program, but it really makes it slower! And sometimes, you can make a change that you think will make the program slower, but it really speeds it up! The compiler does all kinds of crazy things under-the-hood.

This is why when we talk about optimization, the most important thing to discuss is **measuring**. Measuring the run-time of a piece of code is calling profiling. (It can also be called benchmarking.)

Memorize the **[three rules of optimization](https://wiki.c2.com/?RulesOfOptimization)** from the C2 wiki:

1. Don't.
2. Don't... yet.
3. Profile before optimization.

The idea behind these 3 rules is that in real life programs, you almost never need to optimize. But if you really do, you **must** measure both before and after. Based on what you measure, it will tell you if the code change is worth the costs of making the code longer, more complicated, or harder to understand. Sometimes, it will be worth it. But often, it won't.

### Code Clarity

So, if you should not generally be concerned with performance, what should you be concerned with? The answer is code clarity.

First and foremost, the goal of code is to make it neat and easy to read for others. (And even if you are writing code that is never going to be read by anyone else, you should still make it neat and easy to read for future-you, who might have to read this code months or years from now and have to figure out what it does in order to fix some bug.)

You might think it is silly to rank "code clarity" as being more important than having "code that works". And that's certainly debatable. But consider this:

- Code that doesn't work, but is easy to understand, can be modified to be made to work.
- Code that works, but is indecipherable, is going to be very difficult to modify. And this means that we probably can't fix any bugs or add new features.

One of the key insights of [Guido van Rossum](https://en.wikipedia.org/wiki/Guido_van_Rossum), the creator of the [Python](https://www.python.org/) programming language, was that [code is read much more often than it is written](https://www.python.org/dev/peps/pep-0008/). Python was designed to be concise, clean, and readable. It had standard ways of doing things and recommends that everyone follow the [PEP-8 coding standard](https://www.python.org/dev/peps/pep-0008/). Now, Python is the [most popular programming language in the world](https://pypl.github.io/PYPL.html). The readability of the code isn't the *only* reason for Python's rise, but it is one of the more important ones.

## What is Single Line Responsibility (SLR)? {: .subHeader}

When writing code, put some effort into making it look nice and be easy to read for others, especially if you are showing it to other people or asking for help. In this vein, it is a good idea to follow the "single line responsibility" rule - meaning that **one line** should only do **one thing**. Read [this blog](https://midu.dev/single-line-responsability-haz-una-cosa-por-linea/) for more details about why SLR is great.