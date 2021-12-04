const fs = require("fs");
const path = require("path");

const allFiles = getFilesForDirectory("./docs/");
const defaultVariables = "int|char|static|const|userdata|table|void|boolean|float|string|Object";
const ignoreVars = "LRoomAreaDesc|LRoomTileDesc|Ambush|ItemOverlay|HomingLaser|LaserHomingType|SkinColor|PlayerPocketItem|DoorSet|MultiShotParams|EntityDesc|Ending|FadeoutTarget";

const regularExpressions = [
    ['Required spaces in headings', /#{4} \w+ \w+ \(\w/],
    ['Required spaces in code blocks', /```\w+\n\s+\w+/],
    ['Function header has spaces between brackets', /^#{3} .*\(\s+\)/],
    ['Variable definitions that are falsely marked as functions', /#{4}(.)*([^\)]\s\{:)(.)*(\bFunctions\b)/],
    ['Function declaration with no arguments does not have spaces in between the brackets', /#{4}(.)*\(\)[^,]/],
    ['Variables with function or links in the title', /#{3}(.)*([\(\)]\s\{:)(.)*(\bVariables\b)/],
    ['Function header name is not split with middle dot characters "·"', /^#{3} .*([a-z][^·_][A-Z])+.*Functions/],
    ['Headers should not have a link in them', /^#{3}\s\[/],
    ['Link to return value is missing', new RegExp("#{4} (const\\s|static\\s)*(?!\\[)(?!" + defaultVariables + "|" + ignoreVars + ")")],
    ['Function declaration first argument has no link', new RegExp("#{4}(.)*\\w \\( (?!" + defaultVariables + "|" + ignoreVars + "|\\)|\\[)")],
    ['Function declaration later argument has no link', new RegExp("#{4}(.)*\\w \\(.*,(?!\\s[" + defaultVariables + "|" + ignoreVars + "|(\\[.*\\]\\(.*\\))])")],
    ['Badge has more type-definitions than allowed', /\[ \]\(#\)\{: ((.static|.const|.abrep|.rep|.abp)\s){2,5}.tooltip .badge \}/],
];

var hasError = false;

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
            console.log(`\tLine: ` + regex[1].exec(line).input);
            hasError = true;
        }
    }
}

function getFilesForDirectory(directory) {
    const foundFiles = [];
    const files = fs.readdirSync(directory);

    files.forEach(function(file) {
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

if (hasError) {
    console.log("Some Code checks failed!");
    const core = require('@actions/core');
    run().catch(e => core.setFailed(e));
} else {
    console.log("All code checks run successfully!");
}