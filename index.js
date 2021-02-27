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

// Write function that will create card HTML based on objects in allEmployees array
function createCards() {
    const cardHTML = []
    allEmployees.forEach(employee => {
        if (employee.getRole() === "Manager") {
            const mgrHTML = 
            `<div class="card" style="width: 18rem; margin: 10px; display: inline-block;">
                <div class="card-body">
                    <h4 class="card-title" id="manager-title">Manager <i class="fas fa-briefcase"></i></h4><hr>
                    <p class="card-text" id="manager-name">Manager Name: ${employee.name}</p>
                    <p class="card-text" id="manager-id">Employee Id: ${employee.id}</p>
                    <p class="card-text" id="manager-email">Email Address: <a href= "mailto: ${employee.email}">${employee.email}</a></p>
                    <p class="card-text" id="manager-office">Office Number: ${employee.officeNumber}</p>
                </div>
            </div>`;
            cardHTML.push(mgrHTML);
        } else if (employee.getRole() === "Engineer") {
            const engHTML = 
            `<div class="card" style="width: 18rem; margin: 10px; display: inline-block;">
                <div class="card-body">
                    <h4 class="card-title" id="engineer-title">Engineer <i class="fas fa-cogs"></i></h4><hr>
                    <p class="card-text" id="engineer-name">Engineer Name: ${employee.name}</p>
                    <p class="card-text" id="engineer-id">Employee Id: ${employee.id}</p>
                    <p class="card-text" id="engineer-email">Email Address: <a href= "mailto: ${employee.email}">${employee.email}</a></p>
                    <p class="card-text" id="engineer-github">GitHub Profile: <a href="https://www.github.com/${employee.github}/" target="_blank">${employee.github}</a></p>
                </div>
            </div>`;
            cardHTML.push(engHTML);
        } else if (employee.getRole() === "Intern") {
            const intHTML =
            `<div class="card" style="width: 18rem; margin: 10px; display: inline-block;">
                <div class="card-body">
                    <h4 class="card-title" id="intern-title">Intern <i class="fas fa-user-graduate"></i></h4><hr>
                    <p class="card-text" id="intern-name">Intern Name: ${employee.name}</p>
                    <p class="card-text" id="intern-id">Employee Id: ${employee.id}</p>
                    <p class="card-text" id="intern-email">Email Address: <a href= "mailto: ${employee.email}">${employee.email}</a></p>
                    <p class="card-text" id="intern-school">School: ${employee.school}</p>
                </div>
            </div>`;
            cardHTML.push(intHTML);
        }
    });
    const newHTML = cardHTML.join(" ");
    return newHTML;
}

// Function generating majority of HTML page
function generateHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/25abcf2718.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    
        <title>Team Profile</title>
    </head>
    
    <body style="background-color: lightgoldenrodyellow;">
        <header style="background-color: rgb(73, 167, 226); margin: 20px; padding: 20px; border-radius: 10px;">
            <h2 style="text-align: center;">Dream Team Profile Page</h2>
        </header>
    
        <section id="main" style="margin: 5%;">
            ${createCards()}
        </section>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`
}

// Calling fs library to create a page generator function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log("Success!"));
}

// Function that prompts user to select employee type then guides user through another series of questions to give employee information
// Once all questions have been answered, a new object is created and user is taken back to the beginning of the loop
// When user clicks the "Finish Building Team" option, HTML functions are called and page is generated
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
                const contents = generateHTML();
                writeToFile("profile.html", contents);
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
        });
}

init();
