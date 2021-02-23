// Importing Employee parent class
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);
        this.github = github;
    }

    getGitHub() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the employee's GitHub username?",
                    name: "github"
                }
            ])
            .then((res) => console.log(res.github));
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;