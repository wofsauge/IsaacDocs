---
tags:
  - Tutorial
---
# [Tutorial] Debugging with ZeroBrane Studio

Debuggers are very valuable tools to diagnose problems with your code when you don't know exactly what your program is doing! You can get by with simple debug print statements, but some things are easier to track down with a debugger.

1.  Download and install ZeroBrane Studio for your platform of choice.
2.  Add `--luadebug` to your launch options for Isaac on Steam. Properties > General > Set Launch Options. The debugger will not work without this command line option.
3.  In Zerobrane, Open your Lua file. Go to the Project menu > Project Directory > Set from Current File. Project > Start debugger server. You may get a popup to allow ZeroBrane to have network access.
4.  Add this line at the top of your main.lua file: `StartDebug()`
5.  Start the game. The game will freeze up when the debugger triggers an automatic breakpoint.

Now you can hit the green arrow button to continue execution. Check the ZeroBrane documentation if you need help with its debugging features.

We strongly advise disabling `--luadebug` after you're done if you don't need access to the debug features!
