// Function to return the license link based on the license type
function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// Function to return the license section of the README based on the license type
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} License. Click here for more deatils. (${renderLicenseLink(license)})`;
  }
  return '';
}

// Function to generate markdown for README based on user input
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
For any questions, feel free to contact me on Github at (https://github.com/${data.username}) or email at ${data.email}.
`;
}

module.exports = generateMarkdown;