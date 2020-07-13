// require inquirer.js module
const inquirer = require("inquirer");
// require generateMarkdown.js module
const generateMarkdown = require("./utils/generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");

// array of questions for user -> #section of README each answer goes in
const questions = [
  // project title -> title of README
  {
    name: "title",
    type: "input",
    message: "Enter title of project:"
  },

  // description -> #Description
  {
    name: "description",
    type: "input",
    message: "Enter a short description of the project:\n\t"
  },

  // installation instructions -> #Installation
  {
    name: "installation",
    type: "input",
    message: "Enter installation instructions:\n\t"
  },

  // usage information -> #Usage
  {
    name: "usage",
    type: "input",
    message: "Enter usage information:\n\t"
  },

  // license
  // list of options -> add badge of selected license to top of README
  {
    name: "license",
    type: "list",
    message: "Choose a license:",
    Choices: [
      "MIT",
      "Apache-2.0",
      "GPL-3.0",
    ]
  },

  // contributing guidelines -> #Contributing
  {},

  // test instructions -> #Tests
  {},

  // github username -> #Questions
  {},

  // email address -> #Questions
  {},
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
