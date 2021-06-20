// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your project? (Required)",
		validate: titleInput => {
			if(titleInput) {
				return true;
			} else {
				console.log("Please enter the title of your project!"); 
				return false;
			}
		}
	},
	{
		type: "input",
		name: "description",
		message: "Please describe your project. (Required)",
		validate: descriptionInput => {
			if(descriptionInput) {
				return true;
			} else {
				console.log("Please enter a project description!"); 
				return false;
			}
		}
	},
	{
		type: "input",
		name: "installation",
		message: "What must be installed to run this project?",
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
		type: "confirm",
		name: "linkConfirm",
		message: "Would you like to include a link to your deployed project?",
		default: true,
	},
	{
		type: "input",
		name: "link",
		message: "Please enter your project's link.",
		when: ({ linkConfirm }) => linkConfirm
	},
	{
		type: "list",
		name: "license",
		message: "Please select the license you chose.",
		choices: ["N/A", "MIT", "Apache 2.0", "GNU", "ISC", "IBM"]
	},
	];

// TODO: Create a function to write README file
const fileName = "README.md";
function writeToFile(fileName, data) {
  	fs.writeFile(fileName, generateMarkdown(data), err => {
    if (err) throw err;});
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
    .then(ReadMeAnswers => generateMarkdown(ReadMeAnswers))
    .then(NewReadMe => writeToFile("README.md", NewReadMe))
    .catch(err => {
        console.log(err);
    });