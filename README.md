# The Binding of Isaac: Afterbirth+ Community Documentation Project

This project aims to make the Binding of Isaac modding documentation better by providing additional informations, features and a more modern design.

## New features
- Fully responsive and **modern design**
- Vastly **improved search function**
- **Last visited pages** - history
- **Darkmode**
- **Quick Edit** - Button
- **Smart-Copy** Feature to quickly copy 
- Automatic deployment & updates (using Github actions)
- and a lot more!
- ...

## Technology used
- [MkDocs](https://www.mkdocs.org/) as the static site generator 
- [MKDocs Material Theme](https://squidfunk.github.io/mkdocs-material/)
- Python 3.x + Beautiful Soup for conversion tools
- CSS3 & JQuery for custom scripts


## Creating a local version

1. Clone the repo
2. Install a current version of Python 3.x
3. Do the following Installations: 
    ```
    pip install mkdocs
    pip install mkdocs-material
    pip install mkdocs-git-revision-date-plugin
    ```
4. Navigate into the folder, where the `mkdocs.yml` file is located
5. Use the command `mkdocs serve` to create a locally hosted version of the page available at `http://127.0.0.1:8000/`
6. OR use command `mkdocs build` to build a static version of the page.