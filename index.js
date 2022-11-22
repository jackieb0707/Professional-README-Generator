// Inquirer var listed below
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Welcome to the README generator! To start, please provide your full name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name! You must credit yourself for your work ');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Table of contents',
        message: "Enter your table of contents",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name! You must credit yourself for your work ');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Description',
        message: "Enter the description",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your readme description ');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Installation',
        message: "Enter your installation",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter your installation instructions for readme');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Usage Information',
        message: "Enter your information usage",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter your information usage');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'Contribution',
        message: "Enter your contribution",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter your Contribution guidelines');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'Question',
            message: "Enter your Questions",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please Enter your readme questions');
                    return false;
                }
            },
    }]



// function to prompt questions and store user inputs
const init = () => {

    return inquirer.prompt(questions)
        .then(readmeData => {
            return readmeData;
        })
}

// Function call to initialize app
init()
    .then(readmeData => {
        console.log(readmeData);
        return generateMarkdown(readmeData);
    })
    .then(pageMD => {
        return writeFile(pageMD);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    })
