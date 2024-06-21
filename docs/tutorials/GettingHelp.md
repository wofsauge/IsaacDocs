---
tags:
  - Tutorial
---

# [Tutorial] How to Effectively Get Coding Help

## Double-check the Docs

A lot of basic questions about Isaac modding can be answered by browsing these very community docs. You can use the search bar to search for specific phrases or function names that may help you. Please consider thoroughly searching through here first before asking questions on Discord or other places so that you can save yourself the time.

## Use Discord Syntax Highlighting {: .subHeader}

When pasting code into Discord, make sure to paste it in a "code block" by using triple backticks. And make sure to use syntax highlighting for the language, by typing the name of the language next to the backticks.

=== ":material-language-lua: Lua Example"
    ````
    ```lua
    local foo = "bar"
    Isaac.DebugString(foo)
    ```
    ````

=== ":material-language-typescript: TypeScript Example"
    ````
    ```ts
    const foo = "bar";
    Isaac.DebugString(foo);
    ```
    ````

## Format Code {: .subHeader}

When asking for help, it is common to post a code-snippet. Before posting code, **please format it with an auto-formatter** so that it can be easily understood by others.

- In :material-language-lua: Lua, use [Lua Beautifier](https://goonlinetools.com/lua-beautifier/), [LuaFormatter](https://github.com/Koihik/LuaFormatter), or [lua-fmt](https://github.com/trixnz/lua-fmt).
- In :material-language-typescript: TypeScript, use [Prettier](https://prettier.io/).

## Avoid Posting Screenshots {: .subHeader}

When asking for help, it is common to post a screenshot of your code. **Don't do this**, because it isn't editable, or copy-pasteable, or searchable. Instead, post the actual text of the code. Also see the section on [Discord syntax highlighting](#use-discord-syntax-highlighting).

## Use Minimal, Reproducible Examples {: .subHeader}

When asking for help, it is common to post a bunch of code that is unrelated to the problem. This can make questions hard to understand.

Please read [this StackOverflow post on how to create minimal, reproducible examples](https://stackoverflow.com/help/minimal-reproducible-example).

## Avoid Using Link Previews {: .subHeader}

Link previews can clutter the conversion, turning a tiny message into a massive wall of text. It is courteous to enclose all links in <>, which will disable the feature.

For example:

```
Here's a link to my code: <https://example.com/>
```
