// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
var fs = require("fs");
var util = require("util");
var writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
var questions = [
  {
    type: "input",
    message: "Please enter your github username",
    name: "projectUsername",
  },
  {
    type: "input",
    message: "Please enter your project's title",
    name: "projectTitle",
  },
  {
    type: "input",
    message:
      "Please enter description of your project (motivations, purpose, etc.)",
    name: "projectDescription",
  },
  {
    type: "input",
    message:
      "Please enter the steps required to install your project (step by step)",
    name: "projectInstallation",
  },
  {
    type: "input",
    message: "Please enter the instructions and examples for use.",
    name: "projectUsage",
  },
  {
    type: "input",
    message: "Please provide the github account names of all collaborators",
    name: "projectCollaborators",
  },
  {
    type: "list",
    message: "Please enter the license your project possesses",
    name: "projectLicense",
    choices: [
      "None",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
];

var promptQuestions = () => {
  return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
  var input = await promptQuestions();
  var content = generateMarkdown(input);
  await writeToFile("./README.md", content);
  console.log("README.md has been generated");
}

// Function call to initialize app
init();
