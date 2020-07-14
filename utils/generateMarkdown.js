// function to generate markdown for README

/*
  OVERALL LAYOUT...

  project title

  badges...

  description

  screenshot placeholder

  table of contents
  (links to each section)

  installation

  usage

  contributing

  tests

  questions

  credits

  license
*/
function generateMarkdown(data) {
  return `# ${data.title}

![GitHub top language](https://img.shields.io/github/languages/top/${data.github}/${data.title}) ![GitHub](https://img.shields.io/github/license/${data.github}/${data.github}) ${data.codeOfConduct ? "[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)" : null}

${data.description}

![screenshot placeholder](https://placekitten.com/500/500)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

[back to table of contents](#table-of-contents)
`;
}

module.exports = generateMarkdown;
