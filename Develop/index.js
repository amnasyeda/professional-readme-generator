// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "name",
		message: "What is your name?",
	},
    {
		type: "input",
		name: "email",
		message: "What is your email address?",
	},
    {
		type: "input",
		name: "username",
		message: "What is your Github username?",
	},
	{
		type: "input",
		name: "repository",
		message: "What is the name of yout GitHub repository?",
	},
	{
		type: "input",
		name: "description",
		message: "Please describe your repository.",
	},
	{
		type: "list",
		name: "license",
		message: "Please select the license you chose.",
		choices: ["N/A", "mit", "zLib", "ncsa", "isc", "lgpl", "gpl-2.0", "gpl-3.0", "bsl-1.0", "afl-3.0"]
	},
	{
		type: "input",
		name: "installation",
		message: "What must be installed to run this project?",
	},
		];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err, data) => {
		return err ? err : data;
	});
} 
	
// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init();
