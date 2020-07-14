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
  const repoName = data.title.replace(/ /g, "_");
  return `# ${data.title}

![GitHub top language](https://img.shields.io/github/languages/top/${
    data.github
  }/${repoName}) [![GitHub license](https://img.shields.io/github/license/${
    data.github
  }/${repoName})](LICENSE) ${
    data.codeOfConduct
      ? "[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)"
      : null
  }

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

[back to Table of Contents](#table-of-contents)

## Usage

${data.usage}

[back to Table of Contents](#table-of-contents)

## Contributing

${data.contributing}

${
  data.codeOfConduct
    ? "Please note that this project is released with a [Contributor Code of Conduct](code_of_conduct.md). By Participating in this project, you agree to abide by its terms."
    : null
}

[back to Table of Contents](#table-of-contents)

## Tests

${data.tests}

[back to Table of Contents](#table-of-contents)

## Questions

Please direct any and all questions to [${data.github}](https://github.com/${
    data.github
  }) via email [${data.email}](mailto:${data.email}).

[back to Table of Contents](#table-of-contents)

## Credits

${data.credits}

[back to Table of Contents](#table-of-contents)

## License

[${data.license}](LICENSE)

[back to Table of Contents](#table-of-contents)
`;
}

module.exports = generateMarkdown;
