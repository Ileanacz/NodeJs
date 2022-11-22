// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === "MIT"){
    badge = '![GitHub license](https://img.shields.io/badge/License-MIT-blue)'
  } else if(license === "APACHE"){
    badge = '![GitHub license](https://img.shields.io/badge/License-APACHE-yellow)'
  }else{
    badge = '![GitHub license](https://img.shields.io/badge/License-GNU-green)'
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ""
  if(license === "MIT"){
    licenseLink = '[MIT license](https://choosealicense.com/licenses/mit/)'
  } else if(license === "APACHE"){
    licenseLink = '[APACHE license](https://choosealicense.com/licenses/apache-2.0/)'
  }else{
    licenseLink = '[GNU license](https://choosealicense.com/licenses/agpl-3.0/)'
  }

  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const section = `${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}`

  return section
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
    https://github.com/${data.username}/${data.title}
  # Description
  ${data.description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  # Installation
  ${data.installation}
  # Test
  ${data.test}
  # License
  This project is licensed under the ${data.license} license.
  # Contact Information
  If you have any questions about the repo feel free to email me at ${data.email}

`;
}

module.exports = generateMarkdown;


