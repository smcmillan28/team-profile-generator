// Import all class/subclasses
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

// Import all node libraries needed
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const { restoreDefaultPrompts } = require("inquirer");

// Creating an empty array where all employee objects will be stored
const allEmployees = [];

function createCards() {
    allEmployees.forEach(employee => {
        if (employee.getRole() === "Manager") {

        } else if (employee.getRole() === "Engineer") {

        } else if (employee.getRole() === "Intern") {

        }
    });
}

// Function that prompts user to select employee type then guides user through another series of questions to give employee information
// Once all questions have been answered, a new object is created and user is taken back to the beginning of the loop
function buildTeam() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What type of employee would you like to add to your team profile next?",
                name: "type",
                choices: ["Engineer", "Intern", "Finish Building Team"]
            }
        ])
        .then((res) => {
            if (res.type === "Engineer") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "What is the engineer's name?",
                            name: "name",
                        },
                        {
                            type: "input",
                            message: "What is the engineer's employee ID?",
                            name: "id",
                        },
                        {
                            type: "input",
                            message: "What is the engineer's email address?",
                            name: "email",
                        },
                        {
                            type: "input",
                            message: "What is the engineer's github profile name?",
                            name: "github"
                        }
                    ])
                    .then((res) => {
                        const eng = new Engineer(res.name, res.id, res.email, res.github);
                        allEmployees.push(eng);
                        buildTeam();
                    });
            } else if (res.type === "Intern") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "What is the intern's name?",
                            name: "name",
                        },
                        {
                            type: "input",
                            message: "What is the intern's employee ID?",
                            name: "id",
                        },
                        {
                            type: "input",
                            message: "What is the intern's email address?",
                            name: "email",
                        },
                        {
                            type: "input",
                            message: "What school does the intern attend?",
                            name: "school"
                        }
                    ])
                    .then((res) => {
                        const int = new Intern(res.name, res.id, res.email, res.school);
                        allEmployees.push(int);
                        buildTeam();
                    });
            } else if (res.type === "Finish Building Team") {
                console.log(allEmployees);
                return;
            }
        });
}


const init = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the team manager's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the team manager's employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the team manager's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the team manager's office number?",
                name: "office"
            }
        ])
        .then((res) => {
            const mgr = new Manager(res.name, res.id, res.email, res.office);
            allEmployees.push(mgr);
            buildTeam();
        })
}

init();
