// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
        name: "gitHubName",
        type: "input",
        message:"What is your GitHub username?"
    },
    {
        name: "email",
        type: "input",
        message:"What is your email address?"
    },
    {
        name: "fileName",
        type: "input",
        message: "What is your project name?"
    },
    {
        name: "description",
        type: "input",
        message: "Please write a short description of your project: "
    }, 
    {
        name: "license",
        type: "input",
        message: "What kind of license should your project have?"
    },
    {
        name: "dependency",
        type: "input",
        message: "What command should be run to install dependencies?"
    },
    {
        name: "runTests",
        type: "input",
        message: "What command should be run to run tests?"
    }, 
    {
        name: "needToKnow",
        type: "input",
        message: "What does the user need to know about using the repo?"
    },
    {
        name: "contribution",
        type: "input",
        message: "What does the user need to know about contributing to the repo?"
    }];

// TODO: Create a function to write README file
function writeToFile() {
    const generateReadMe = ({fileName, description, dependency, runTests, needToKnow, contribution, gitHubName, email, license}) => `# ${fileName}
## Table of Contents
- [Description](#description)
- [Commands](#commands)
- [Need To Know](#needToKnow)
- [Contribution](#contribution)
- [Credit](#contribution)
- [License](#license)

## Description
${description}
    
## Commands
- To install dependencies, use ${dependency}
- To run tests, use ${runTests}
    
## Need To Know
${needToKnow}
    
## Contribution
${contribution}
    
## Credit
- GitHub: ${gitHubName}
- Email: ${email}
        
## License
This project has the ${license} license.`;

    inquirer
        .prompt(questions)
        .then((answers) => {
            const readMeFormat = generateReadMe(answers);
            
            fs.writeFile('README.md', readMeFormat, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
        });
        // collect responses
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
} 


// Function call to initialize app
init();
