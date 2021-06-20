// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const chalk = require("chalk");
function renderLicenseBadge(license) {
if (license === "N/A") {
    return "";
  }
if (license === "MIT") {
    return `[https://opensource.org/licenses/MIT]`;
} else if (license === "Apache 2.0") {
     return `[https://www.apache.org/licenses/LICENSE-2.0]`;
} else if (license === "GNU") {
      return `[[https://www.gnu.org/licenses/gpl-3.0.en.html]`;
} else if (license === "ISC") {
      return `[https://www.isc.org/licenses/]`;
} else if (license === "IBM") {
      return `[https://opensource.org/licenses/IPL-1.0]`;

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
  return `
  # Title
    ${data.repository}

  ## Description
    ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [License](#license)
        ${renderLicenseLink(data.license)}
  * [Questions](#questions)
  
  ## Installation
     ${data.installation}

  ## License 
     ${data.license} 
        ${renderLicenseSection(data.license) }

  ## Questions
  For any questions you can contact me at [github.com/${amnasyeda}](github.com/${amnasyeda})

  `

}
module.exports = generateMarkdown;
