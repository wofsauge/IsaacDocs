# Tips on how to communicate
Some small tips on how to improve communication about modding via :fontawesome-brands-discord: Disord.

### Use Discord Syntax Highlighting {: .subHeader}

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

### Format Code {: .subHeader}

When asking for help, it is common to post a code-snippet. Before posting code, **please format it with an auto-formatter** so that it can be easily understood by others.

- In :material-language-lua: Lua, use [Lua Beautifier](https://goonlinetools.com/lua-beautifier/), [LuaFormatter](https://github.com/Koihik/LuaFormatter), or [lua-fmt](https://github.com/trixnz/lua-fmt).
- In :material-language-typescript: TypeScript, use [Prettier](https://prettier.io/).

### Avoid posting Screenshots {: .subHeader}

When asking for help, it is common to post a screenshot of your code. **Don't do this**, because it isn't editable or copy-pasteable. Instead, post the actual text of the code. Also see the section on [Discord syntax highlighting](#use-discord-syntax-highlighting).

### Use Minimal, Reproducible Examples {: .subHeader}

When asking for help, it is common to post a bunch of code that is unrelated to the problem. This makes questions hard to understand and usually means that the person asking the question is putting forth very little effort.

Please read [this StackOverflow post on how to create minimal, reproducible examples](https://stackoverflow.com/help/minimal-reproducible-example).

### Avoid useing Link Previews {: .subHeader}

Link previews can clutter the conversion, turning a tiny message into a massive wall of text. It is courteous to enclose all links in <>.

For example:

```
Here's a link to my code: <https://github.com/IsaacScript/isaacscript-common/blob/main/src/functions/array.ts#L3-L16>
```

### What is the difference between an API and a library? {: .subHeader}

Some mods on the workshop package functionality together as an abstraction for other people to use. In software, this is what is typically known as a "library". As a programmer, it is usually a lot easier to leverage other people's battle-tested libraries than to roll your own from scratch.

On the other hand, an API is short for application programming interface, and it is exactly what it sounds like. An application might want to expose some functionality to external users and software, and it would do that through an explicitly defined interface. Libraries expose an API so that end-users can consume them. But note that *any* software can have an API, not just a library. For example, the Revelations Mod is a popular mod that adds new floors, bosses, and items to the game. But it also exposes an API so that it can be made compatible with other mods.

Historically, Isaac libraries have labeled themselves as "APIs", but this is a misnomer. Some examples of this include [StageAPI](https://github.com/Meowlala/BOIStageAPI15) and [MinimapAPI](https://github.com/TazTxUK/MinimapAPI). On the other hand, an example of a library that is correctly named is Sanio's [Character Costume Protector](https://steamcommunity.com/sharedfiles/filedetails/?id=2541362255).

If you are creating a new library, please use the correct terminology to name your project, which helps prevent confusion for newcomers to the Isaac modding scene.