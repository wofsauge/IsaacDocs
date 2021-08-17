const fs = require("fs");
const path = require("path");

const allFiles = getFilesForDirectory("./docs/");

const regularExpressions = [
    ['Required spaces in headings', /#{4} \w+ \w+ \(\w/],
    ['Required spaces in code blocks', /```\w+\n\s+\w+/],
    ['Variable definitions that are falsely marked as functions', /#{4}(.)*([^\)]\s\{:)(.)*(\bFunctions\b)/],
    ['Variables with function or links in the title', /#{3}(.)*([\(\)]\s\{:)(.)*(\bVariables\b)/],
    ['Headers that have a link in them', /^#{3}\s\[/]
];

for (const file of allFiles) {
    const fileContents = getFileContents(file);
    const lines = fileContents.split("\n");

    for (let index = 0; index < lines.length; index++) {
        const line = lines[index];

        for (const regex of regularExpressions) {
            if (regex[1].test(line) === false) {
                continue;
            }

            console.log(`${file} at line ${index + 1}: ${regex[0]}`);
        }
    }
}

console.log("Ran code checks");

function getFilesForDirectory(directory) {
    const foundFiles = [];
    const files = fs.readdirSync(directory);

    files.forEach(function (file) {
        const filePath = path.join(directory, file);

        if (fs.statSync(filePath).isDirectory() === false && file.match(/\.md$/)) {
            foundFiles.push(filePath);
        }
    });

    return foundFiles.map(file => path.resolve(process.cwd(), file));
}

function getFileContents(filepath) {
    return fs.readFileSync(filepath, "utf8");
}
