// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions / examples for use of the project:'
  },
  {
    type: 'input',
    name: 'license',
    message: 'Choose which license your project will use. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/):'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Include guidelines on how other developers can contribute to the project:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide any examples for tests that can be run on the project:'
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your best email address for contact:'
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated successfully!')
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((data) => {
      const markdown = generateMarkdown(data);
      writeToFile('README.md', markdown);
    })
    .catch((error) => console.error(error));
}

// Function call to initialize app
init();