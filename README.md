[![Discord](https://img.shields.io/discord/927985880021483571?color=blue&label=Discord&logo=Discord&logoColor=white)](https://discord.gg/435qCC6nHt)

# The Binding of Isaac: Afterbirth+ Community Documentation Project

This project aims to make the Binding of Isaac modding documentation better by providing additional information, features, and a more modern design.

## New features

- Fully responsive and **modern design**
- Vastly **improved search function**
- **Last visited pages** - history
- **Dark mode**
- **Quick Edit** - Button
- **Smart-Copy** Feature to quickly copy 
- Automatic deployment & updates (using Github actions)
- and a lot more!

## Technology used

- [MkDocs](https://www.mkdocs.org/) as the static site generator 
- [MKDocs Material Theme](https://squidfunk.github.io/mkdocs-material/)
- [mark.js](https://markjs.io/) for better search highlighting
- Python 3.x + Beautiful Soup for conversion tools
- CSS3 & JQuery for custom scripts

## Creating a local version

1. Clone the repository.
1. Install a current version of Python 3.x.
1. `pip install -r requirements.txt`
1. `cd IsaacDocs`
1. Use `mkdocs serve` to create a locally hosted version of the page available at: `http://127.0.0.1:8000/`
1. Alternatively, use `mkdocs build` to build a static version of the page.
