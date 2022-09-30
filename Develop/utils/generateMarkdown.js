// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  
  ## Table of Contents
  * [Project Creator](#projectUsername)
  * [Project Description](#projectDescription)
  * [Project Installation](#projectInstallation)
  * [Project Usage](#projectUsage)
  * [Project Collaborators](#projectCollaborators)
  * [Project License](#projectLicense)
  
  ## Created by ${data.projectUsername}
  (https://github.com/${data.projectUsername})
  
  ## Project Description
  ${data.projectDescription}
  
  ## Project Installation
  ${data.projectInstallation}
  
  ## Project Usage
  ${data.projectUsage}
  
  ## Project Collaborators
  ${data.projectCollaborators}
  
  ## License
  Repository possesses the ${data.projectLicense} license.
  
    `;
}

module.exports = generateMarkdown;
