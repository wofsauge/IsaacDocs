const fs = require("fs");
const path = require("path");

const allFiles = getFilesForDirectory("./docs/");
const defaultVariables = "int|char|static|const|userdata|table|void|boolean|float|string|Object|function";
const ignoreVars = "LRoomAreaDesc|LRoomTileDesc|Ambush|ItemOverlay|HomingLaser|LaserHomingType|SkinColor|PlayerPocketItem|DoorSet|MultiShotParams|EntityDesc|Ending|FadeoutTarget";

const regularExpressions = [
  ["Required spaces in headings", /#{4} \w+ \w+ \(\w/],
  ["Required spaces in code blocks", /```\w+\n\s+\w+/],
  ["Function header has spaces between brackets", /^#{3} .*\(\s+\)/],
  ["Variable definitions that are falsely marked as functions", /#{4}(.)*([^\)]\s\{:)(.)*(\bFunctions\b)/],
  ["Function declaration with no arguments does not have spaces in between the brackets", /#{4}(.)*\(\)[^,]/],
  ["Variables with function or links in the title", /#{3}(.)*([\(\)]\s\{:)(.)*(\bVariables\b)/],
  ['Function header name is not split with middle dot characters "·"', /^#{3} .*([a-z][^·_][A-Z])+.*Functions/],
  ["Headers should not have a link in them", /^#{3}\s\[/],
  ["Link to return value is missing", new RegExp("#{4} (const\\s|static\\s)*(?!\\[)(?!" + defaultVariables + "|" + ignoreVars + ")")],
  ["Function declaration first argument has no link", new RegExp("#{4}(.)*\\w \\( (?!" + defaultVariables + "|" + ignoreVars + "|\\)|\\[)")],
  ["Function declaration later argument has no link", new RegExp("#{4}(.)*\\w \\(.*,(?!\\s[" + defaultVariables + "|" + ignoreVars + "|(\\[.*\\]\\(.*\\))])")],
  ["Badge has more type-definitions than allowed", /\[ \]\(#\)\{: ((.static|.const|.abrep|.rep|.abp)\s){2,5}.tooltip .badge \}/],
  ["Internal link doesnt work because its CamelCase.", /\[\w+\]\(([a-z][^·_][A-Z])*#[A-Z]\w+[A-Z]*/],
];

var hasError = false;

for (const file of allFiles) {
  const fileContents = getFileContents(file);
  const lines = fileContents.split("\n");
  let constructors = [];
  let functions = [];
  let variables = [];

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (line.trim().startsWith("### ")) {
      let cleanedLine = line.replaceAll("### ", "").replaceAll("·", "").split("{")[0].split("(")[0].trim();
      cleanedLine = cleanedLine.replaceAll("__", "zzzzz"); // Change sort priority to list underscore functions below normal ones
      if (line.includes("Constructors")) {
        constructors.push(cleanedLine);
      } else if (line.includes("Functions")) {
        functions.push(cleanedLine);
      } else if (line.includes("Variables")) {
        variables.push(cleanedLine);
      }
    }

    for (const regex of regularExpressions) {
      if (regex[1].test(line) === false) {
        continue;
      }

      console.log(`${file} at line ${index + 1}: ${regex[0]}`);
      console.log(`\tLine: ` + regex[1].exec(line).input);
      hasError = true;
    }
  }

  // check if functions are sorted alphabetically
  let constructorsSort = constructors.slice();
  let functionsSort = functions.slice();
  let variablesSort = variables.slice();
  constructorsSort.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  functionsSort.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  variablesSort.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  for (let index = 0; index < constructorsSort.length; index++) {
    let entry = constructors[index];
    if (entry.toLowerCase() != constructorsSort[index].toLowerCase()) {
      console.log(`${file}: Constructor '` + entry + `' is not sorted correctly! Should be at location ` + constructorsSort.indexOf(entry) + ` but its at location ` + index);
      hasError = true;
    }
  }

  for (let index = 0; index < functionsSort.length; index++) {
    let entry = functions[index];
    if (entry.toLowerCase() != functionsSort[index].toLowerCase()) {
      console.log(`${file}: Function '` + entry + `' is not sorted correctly! Should be at location ` + functionsSort.indexOf(entry) + ` but its at location ` + index);
      hasError = true;
    }
  }

  for (let index = 0; index < variablesSort.length; index++) {
    let entry = variables[index];
    if (entry.toLowerCase() != variablesSort[index].toLowerCase()) {
      console.log(`${file}: Variable '` + entry + `' is not sorted correctly! Should be at location ` + variablesSort.indexOf(entry) + ` but its at location ` + index);
      hasError = true;
    }
  }
}

function getFilesForDirectory(directory) {
  const foundFiles = [];
  const files = fs.readdirSync(directory);

  files.forEach(function (file) {
    const filePath = path.join(directory, file);

    if (fs.statSync(filePath).isDirectory() === false && file.match(/\.md$/)) {
      foundFiles.push(filePath);
    }
  });

  return foundFiles.map((file) => path.resolve(process.cwd(), file));
}

function getFileContents(filepath) {
  return fs.readFileSync(filepath, "utf8");
}

if (hasError) {
  console.log("Some Code checks failed!");
  const core = require("@actions/core");
  core.setFailed("Some Code checks failed!");
} else {
  console.log("All code checks run successfully!");
}
