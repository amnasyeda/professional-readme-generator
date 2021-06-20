// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const chalk = require("chalk");
function renderLicenseBadge(license) {
  if (license) {
    return '';
  } else {
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "N/A") {
    return '';
  }
  return `
       * [License](#license)
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   const {
     name,
     email,
     username,
     repository,
     description,
     installation,
   }
   return `

  ## Title 
  ${title}

  ## Description
  ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Function](#function)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  ${installation}

  ## Function 
  ${function}

  ## Questions
  For any questions you can contact me at [github.com/${amnasyeda}](github.com/${amnasyeda})

  ## License 
  ${license} 
`;
}

module.exports = generateMarkdown;
