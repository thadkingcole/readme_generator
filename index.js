// require inquirer.js module
const inquirer = require("inquirer");
// require generateMarkdown.js module
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user -> #section of README each answer goes in
const questions = [
  // project title -> title of README
  {
    name: "title",
    type: "input",
    message: "Enter title of project:",
  },

  // description -> #Description
  {
    name: "description",
    type: "input",
    message: "Enter a short description of the project:",
  },

  // installation instructions -> #Installation
  {
    name: "installation",
    type: "input",
    message: "Enter installation instructions:",
  },

  // usage information -> #Usage
  {
    name: "usage",
    type: "input",
    message: "Enter usage information:",
  },

  // license
  // list of options -> add badge of selected license to top of README
  {
    name: "license",
    type: "list",
    message: "Choose a license:",
    choices: [
      "MIT",
      "Apache-2.0",
      "GPL-3.0",
      // these are the three most popular licenses on github and easy to
      // implement in any github project
    ],
  },

  // contributing code of conduct -> #Contributing
  {
    name: "codeOfConduct",
    type: "confirm",
    message: "Add the Contributor Covenant (code of conduct)?",
    // https://www.contributor-covenant.org/
    /* 
      if yes...
        add the badge to the top of the readme:
          [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
        add the following statement to readme under contributing:
          Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.
    */
  },

  // contribution guidelines -> #contributing
  {
    name: "contributing",
    type: "input",
    message: "Add contribution guidelines:",
    default:
      "Please refer to [contributing.md](contribution guidelines) for this project.",
  },

  // test instructions -> #Tests
  {
    name: "tests",
    type: "input",
    message: "Enter test instructions:",
  },

  // github username -> #Questions
  {
    name: "github",
    type: "input",
    message: "Enter your github username:",
  },

  // email address -> #Questions
  // will also be used for code of conduct: npx covgen <your email address>
  {
    name: "email",
    type: "input",
    message: "Enter your email:",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
