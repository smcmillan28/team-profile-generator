// Importing Employee parent class
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Where did the intern go to school?",
                    name: "school"
                }
            ])
            .then((res) => {
                this.school = res.school;
                return this.school;
            });
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;