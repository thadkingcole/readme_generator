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

Any and all contributions are most welcome! To ensure the smoothest contribution experience possible, please refer to the following sections for the situation that best applies.

- [Bug](#if-you-find-a-bug)
- [New Feature](#if-you-want-a-new-feature)
- [Pull Requests](#if-your-code-is-ready-for-review)
- [Questions](#i-have-a-question-on-how-to-use-the-app)
${data.codeOfConduct ? "- [Code of Conduct](#code-of-conduct)" : null}

## If you find a bug

Awesome! First look at the issues to see if the bug has already been identified. If not, create an issue using the "Bug report" template.

If the bug is unassigned, you may assign it to yourself and begin coding if you would like to try to fix the bug. If the bug is already assigned, touch base with that developer prior to beginning to code.

[back to top](#contributing-guidelines)

## If you want a new feature

Splendid! First, look at the issues to see if the feature is already being considered. If not, create an issue using the "Feature request" template and assign it to [${
    data.github
  }](https://github.com/${
    data.github
  }). Once assigned, I will reach out to you to discuss the feature and its efficacy, so be sure to include your contact info in the submitted issue.

You may begin to code if the feature is simple enough to implement, but keep it mind the feature may not be desired by all parties.

[back to top](#contributing-guidelines)

## If your code is ready for review

Amazing! Write a pull request and assign it to [${
    data.github
  }](https://github.com/${
    data.github
  }) as reviewer. Include in the pull request the issue number being closed by your work.

[back to top](#contributing-guidelines)

## I have a question on how to use the app

No worries! Any and all questions can be directed to [${
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

## Closing

Thank you for your consideration towards contributing to this project!
`;
}

module.exports = {
  gen,
  contributing,
};
