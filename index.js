const generateHTML = require('./src/generateHTML');
const fs = require('fs');
const inquirer = require('inquirer');

var manager = [];
var engineers = [];
var interns = [];
var firstChoice;

const managerQuestions = [{
        type: 'input',
        name: 'managerName',
        message: 'Enter the manager name: (REQUIRED) ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the manager name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'Enter the manager employee ID: (REQUIRED) ',
        validate: managerIDInput => {
            if (managerIDInput) {
                return true;
            } else {
                console.log('Please enter the manager ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter the manager email: (REQUIRED) ',
        validate: managerEmailInput => {
            if (managerEmailInput) {
                return true;
            } else {
                console.log('Please enter the manager email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the manager office number: (REQUIRED) ',
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter the office number!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'action',
        message: 'Select an option:',
        choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
    }
]

const engineerQuestions = [{
        type: 'input',
        name: 'engineerName',
        message: 'Enter the engineer name: ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the engineer name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerID',
        message: 'Enter the engineer employee ID: (REQUIRED) ',
        validate: engineerIDInput => {
            if (engineerIDInput) {
                return true;
            } else {
                console.log('Please enter the engineer ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Enter the engineer email: (REQUIRED) ',
        validate: engineerEmailInput => {
            if (engineerEmailInput) {
                return true;
            } else {
                console.log('Please enter the engineer email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter the Github username: (REQUIRED) ',
        validate: githubUsernameInput => {
            if (githubUsernameInput) {
                return true;
            } else {
                console.log('Please enter the Github username!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'action',
        message: 'Select an option:',
        choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
    }
]

const internQuestions = [{
        type: 'input',
        name: 'internName',
        message: 'Enter the intern name: ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the intern name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internID',
        message: 'Enter the intern employee ID: (REQUIRED) ',
        validate: internIDInput => {
            if (internIDInput) {
                return true;
            } else {
                console.log('Please enter the intern ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Enter the intern email: (REQUIRED) ',
        validate: internEmailInput => {
            if (internEmailInput) {
                return true;
            } else {
                console.log('Please enter the intern email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter the intern school: (REQUIRED) ',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter the school!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'action',
        message: 'Select an option:',
        choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
    }
]

const checkAction = choice => {
    if (choice.action === 'Add an engineer') {
        return promptEngineer()
            .then(console.log("hello2"))
    } else if (choice.action === 'Add an intern') {
        return promptIntern();
    } else {
        return;
    }
}

const promptUser = () => {
    return inquirer.prompt(managerQuestions);
}

const promptEngineer = () => {
    return inquirer.prompt(engineerQuestions)
        .then(engineerData => {
            engineers.push(engineerData);
            checkAction(engineerData);
        })
}

const promptIntern = () => {
    return inquirer.prompt(internQuestions)
        .then(internData => {
            interns.push(internData);
            checkAction(internData);
        })
}

const endProgram = () => {
    console.log("Manager Data: " + manager);
    console.log("Engineer Data: " + engineers);
    console.log("Intern Data: " + interns);
    // return;
}


function start() {
    promptUser()
        .then(managerData => {
            manager = {
                ...managerData
            };
            if (managerData.action === 'Add an engineer') {
                firstChoice = 'engineer';
                return promptEngineer()
            } else if (managerData.action === 'Add an intern') {
                firstChoice = 'intern';
                return promptIntern();
            } else {
                console.log("ending program");
                return endProgram();
            }
        })
        .then(teamData => {
            console.log("IN 2ND THEN UNDER PROMPTUSER");

            if (firstChoice == 'engineer') {
                if (engineers[0].action === 'Add an engineer') {
                    console.log("selected engineer!");
                } else if (engineers[0].action === 'Add an intern') {
                    console.log('selected intern');
                }
            } else {
                if (interns[0].action === 'Add an engineer') {
                    console.log("selected engineer!");
                } else if (interns[0].action === 'Add an intern') {
                    console.log('selected intern');
                }
            }




            // if ((engineers[0].action === 'Add an engineer') || (interns[0].action === 'Add an engineer')) {
            //     console.log("selected engineer!");
            // } else if ((engineers[0].action === 'Add an intern') || (interns[0].action === 'Add an intern')) {
            //     console.log("selected intern!");
            // } else {
            //     console.log("other");
            // }
            endProgram();
            // checkAction(teamData);
        })
        .catch(err => {
            console.log(err);
        })
}

start();