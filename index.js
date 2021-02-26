// Import all class/subclasses
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

// Import all node libraries needed
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//Write functions for each employee type that will run each method and store those properties then generate a new object

function employeeSelection() {
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
            return res.type;
        });
}

function createIntern() {
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
        });
}

function createEngineer() {
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
            employeeSelection();
        })
}

init();
