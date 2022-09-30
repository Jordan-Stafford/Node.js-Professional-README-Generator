// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = inquirer
  .prompt([
    {
      type: "input",
      message: "Project Title?",
      name: "projectTitle",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please insert a value";
        }
      },
    },
    {
      type: "input",
      message: "Project Description?",
      name: "projectDescription",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please insert a value";
        }
      },
    },
    {
      type: "input",
      message: "Please enter a table of contents",
      name: "projectTable",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please insert a value";
        }
      },
    },
    {
      type: "input",
      message: "How do you install the project?",
      name: "projectInstall",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please insert a value";
        }
      },
    },
    {
      type: "input",
      message: "How do you use the project?",
      name: "projectUse",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please insert a value";
        }
      },
    },
    {
      type: "list",
      message: "Which license did you use?",
      name: "projectLicense",
      choices: [
        "No License",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please insert a value";
        }
      },
    },
    {
      type: "input",
      message:
        "Who are the collaborators? Please include links to their GitHub profiles.",
      name: "projectCredits",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please insert a value";
        }
      },
    },
    {
      type: "input",
      message: "Tests?",
      name: "projectTests",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please insert a value";
        }
      },
    },
    {
      type: "input",
      message: "Questions?",
      name: "projectQuestions",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please insert a value";
        }
      },
    },
  ])
  .then(
    ({
      projectTitle,
      projectDescription,
      projectTable,
      projectInstall,
      projectUse,
      projectLicense,
      projectCredits,
      projectTests,
      projectQuestions,
    }) => {
      const template = `# ${projectTitle}
    
    Description:
    ${projectDescription}
    Table:
    ${projectTable}
    How to Install:
    ${projectInstall}
    How to Use:
    ${projectUse}
    License:
    ${projectLicense}
    Contributors:
    ${projectCredits}
    Tests:
    ${projectTests}
    Questions:
    ${projectQuestions}`;

      // # Contact
      // * GitHub :${git}
      // * Linkedin :${linkedin}
      // * E-mail :${email};

      writeToFile(projectTitle, template);
    }
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(
    `./${fileName.toLowerCase().split("  ").join("")}.md`,
    data,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("The README has been created!");
    }
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
