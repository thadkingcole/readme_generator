// required modules
const { exec } = require("child_process");

// function to generate the contributor covenant code of conduct
function gen(data) {
  exec(`npx covgen ${data.email}`, (error, stdout, stderr) => {
    if (error) {
      console.log("ERROR!:", error.message);
      return;
    }
    if (stderr) {
      console.log("stderr:", stderr);
      return;
    }
    console.log("stdout:", stdout);
  });
}

// function to generate CONTRIBUTING.md
function contributing(data) {
  return `# Contributing Guidelines

First of all, I want to thank you for taking the time to contribute to this project. Please refer to the following sections for the situation that best applies.

- [Bug](#if-you-find-a-bug)
- [Upgrade](#if-you-think-of-an-upgrade)
- [Questions](#i-have-a-question-on-how-to-use-the-app)
${data.codeOfConduct ? "- [Code of Conduct](#code-of-conduct)" : null}

## If you find a bug/upgrade

Awesome! First look at the issues to see if the bug/upgrade has already been identified. If not, create an issue describing the bug/upgrade with as much detail as possible, including steps to recreate.

If the bug/upgrade is unassigned, you may assign it to yourself and begin coding if you would like to try to fix the bug/upgrade. If the bug/upgrade is already assigned, touch base with that developer prior to beginning to code.

[back to top](#contributing-guidelines)

## If you fixed a bug/upgrade

Splendid! Write a pull request and assign [${data.github}](https://github.com/${
    data.github
  }) as reviewer. Include in the pull request the issue number being closed by your work.

[back to top](#contributing-guidelines)

## I have a question on how to use the app

No worries! All questions can be directed to [${
    data.github
  }](https://github.com/${data.github}) or via email at [${
    data.email
  }](mailto:${data.email}). No need to create a new issue.

[back to top](#contributing-guidelines)

${
  data.codeOfConduct
    ? `## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](code_of_conduct.md). By Participating in this project, you agree to abide by its terms.

[back to top](#contributing-guidelines)`
    : null
}
`;
}

module.exports = {
  gen,
  contributing,
};
