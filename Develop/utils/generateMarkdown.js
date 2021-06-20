// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === "N/A") {
    return "";
  }
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;;
} else if (license === "Apache 2.0") {
     return `[![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
} else if (license === "GNU") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
} else if (license === "ISC") {
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
} else if (license === "IBM") {
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
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
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseLink(license)}`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}  
      ${renderLicenseBadge(data.license)} 

  ## Description
    ${data.description}
    [DeployedAppLink](${data.link})

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
  For any questions or comments, feel free to contact me at [github.com/${amnasyeda}](github.com/${amnasyeda})
  `;
}
module.exports = generateMarkdown;
