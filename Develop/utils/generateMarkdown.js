// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === "MIT"){
    badge = '![GitHub license]('https://img.shields.io/badge/license-MIT-yellow')
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.Username}/${data.Title}
  # Description
  ${data.Description}
  # Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  # Installation
  The following necessary dependencies must be installed to run the application
  # License
  This project is licensed under the ${data.license} license.
  ![Github license](https://img.shields.io/badge/license-MIT-yellow)
  # Contact Information
  If you have any questions about the repo feel free to email me at ${data.email}

`;
}

module.exports = generateMarkdown;


