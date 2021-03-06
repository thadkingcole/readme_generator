# README Generator

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/539d367a65364d6cbfb867f963147fff)](https://app.codacy.com/manual/thadkingcole/readme_generator?utm_source=github.com&utm_medium=referral&utm_content=thadkingcole/readme_generator&utm_campaign=Badge_Grade_Dashboard)
![GitHub top language](https://img.shields.io/github/languages/top/thadkingcole/Readme_Generator)
[![GitHub license](https://img.shields.io/github/license/thadkingcole/Readme_Generator)](LICENSE)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

A console application that generates README, CONTRIBUTING, and CODE_OF_CONDUCT markdown files based on user input.

![screenshot placeholder](./public/images/screenshot.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)
- [License](#license)

## Installation

First, clone this repository using your preferred method, SSH:

```git
git clone git@github.com:thadkingcole/readme_generator.git
```

or HTTPS:

```git
git clone https://github.com/thadkingcole/readme_generator.git
```

Once the repo is cloned, navigate into its root directory and run "npm i" to install the app.

```terminal
cd readme_generator
npm i
```

[back to Table of Contents](#table-of-contents)

## Usage

See [demo video](https://drive.google.com/file/d/1nA-Swyk7RdjygIuWfRAWormzdMM4CN_-/view), or follow the following instructions.

Using your preferred console, navigate to the root directory of the repo where you want markdown files generated. Then enter "readme-gen"

```terminal
readme-gen
```

Follow and answer the prompts as they appear.

![prompts](./public/images/screenshot.png)

Once all prompts have been answered, the app generates the following files:

1. ```CONTRIBUTINGgen.md```
1. ```READMEgen.md```
1. ```CODE_OF_CONDUCT.md``` (if user replied yes to contributor covenant prompt)

Review these files and make any desired changes. Once all changes have been made, delete the "gen" from the file names. This allows github to use the files and allows the files to link to each other.

[back to Table of Contents](#table-of-contents)

## Contributing

Your contribution is most welcome! Please refer to the [contributing guidelines](CONTRIBUTING.md) when making contributions to this project.

Please note that this project is released with a [Contributor Code of Conduct](code_of_conduct.md). By Participating in this project, you agree to abide by its terms.

[back to Table of Contents](#table-of-contents)

## Tests

There are no pre-operational tests. Follow the installation & usage instructions to try the app for yourself!

[back to Table of Contents](#table-of-contents)

## Questions

Please direct any and all questions to [thadkingcole](https://github.com/thadkingcole) or via email at [thadjcole@gmail.com](mailto:thadjcole@gmail.com).

[back to Table of Contents](#table-of-contents)

## Credits

- [inquirer.js](https://www.npmjs.com/package/inquirer)
- [Executing shell commands with node.js](https://stackabuse.com/executing-shell-commands-with-node-js/)
- [A guide to creating a NodeJS command-line package](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)

[back to Table of Contents](#table-of-contents)

## License

[MIT](LICENSE) copyright (c) 2020 [Thaddeus Cole](mailto:thadjcole@gmail.com).

[back to Table of Contents](#table-of-contents)
