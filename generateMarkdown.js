const fe = require('fs');
// Returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    if (!license) {
        return ``;
    } else {
        return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
    }
}
// Returns the license link
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return `https://lbesson.mit.license.org/`
    }
    if (license === 'GPL') {
        return `https://perso.crans.org/besson/LICENSE.html`
    }
    if (license === 'CC--0') {
        return `https://creativecommons.org/license/by-nd/4.0`
    }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        retun``;
    } else {
        return `## Licenses
        This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
    }
}
// Generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Table of contents
    * [Description](#Description)
    * [Installation](#installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests ](#Tests)
* [Questions](Questions)
* [Credits](#credits)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license) }
## Contributing
${data.contributing}
## Tests
${data.test}
## Questions
have questions about this project?
     GitHub: https://github.com/${data.github}
     Email: ${data.email}
     ## Credits 
     ${data.name}
     `;
}


