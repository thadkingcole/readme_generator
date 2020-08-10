#!/usr/bin/env node

// required modules
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const genReadme = require("./utils/genReadme");
const codeCon = require("./utils/codeCon");

// array of questions for user -> #section of README each answer goes in
const questions = [
  // project title -> title of README
  {
    name: "title",
    type: "input",
    message: "Enter title of project:",
    default: path.basename(path.resolve()),
  },

  // github Repo Name -> badges
  {
    name: "repoName",
    type: "input",
    message: "Enter Github Repo Name:",
    default: path.basename(path.resolve()),
  },

  // description -> #Description
  {
    name: "description",
    type: "input",
    message: "Enter a short description of the project:\n",
  },

  // installation instructions -> #Installation
  {
    name: "installation",
    type: "input",
    message: "Enter installation instructions:\n",
    default: "*installation instructions go here*",
  },

  // usage information -> #Usage
  {
    name: "usage",
    type: "input",
    message: "Enter usage information:\n",
    default: "*usage information goes here*",
  },

  // contributing code of conduct -> #Contributing
  {
    name: "codeOfConduct",
    type: "confirm",
    message:
      "Add the Contributor Covenant? (This will overwrite any existing CODE_OF_CONDUCT.md)",
    // https://www.contributor-covenant.org/
  },

  // contributing guidelines -> #contributing
  {
    name: "contributing",
    type: "input",
    message: "Add contributing guidelines:\n",
    default:
      "Your contribution is most welcome! Please refer to the contributing guidelines when making contributions to this project.",
  },

  // test instructions -> #Tests
  {
    name: "tests",
    type: "input",
    message: "Enter test instructions:\n",
    default: "*test instructions go here*",
  },

  // github username -> #Questions
  {
    name: "github",
    type: "input",
    message: "Enter your github username:",
    default: "thadkingcole",
  },

  // email address -> #Questions
  // will also be used for code of conduct: npx covgen <your email address>
  {
    name: "email",
    type: "input",
    message: "Enter your email:",
    default: "thadjcole@gmail.com",
  },

  // credits -> #Credits
  {
    name: "credits",
    type: "input",
    message: "Add any necessary credits:\n",
    default: "I would like to thank the following people/projects/resources:",
  },

  // license
  // list of options -> add badge of selected license to top of README
  {
    name: "license",
    type: "rawlist",
    message: "Choose a license:",
    choices: [
      "MIT",
      "Apache-2.0",
      "GPL-3.0",
      // these are the three most popular licenses on github
      // and easy to implement in any github project
    ],
  },
];

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate CODE_OF_CONDUCT.md using npx if desired by user
    if (answers.codeOfConduct) {
      codeCon.gen(answers);
    }
    // README.md may already exist, so alternate name will be used
    fs.writeFile("READMEgen.md", genReadme(answers), (err) => {
      if (err) {
        console.log("ERROR!:", err);
        return;
      }
      console.log("READMEgen.md successfully written!");
    });
    // CONTRIBUTING.md may already exist, so alternate name will be used
    fs.writeFile("CONTRIBUTINGgen.md", codeCon.contributing(answers), (err) => {
      if (err) {
        console.log("ERROR!:", err);
        return;
      }
      console.log("CONTRIBUTINGgen.md successfully written!");
    });
  });
}

// function call to initialize program
init();
