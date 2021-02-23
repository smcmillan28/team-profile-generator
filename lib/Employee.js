// Importing inquirer
const inquirer = require("inquirer");

// Setting up Employee class with name, id, email properties
// Class with also include the following methods - getName(), getId(), getEmail(), getRole()
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the employee's full name?",
                    name: "name"
                }
            ])
            .then((res) => console.log(res.name));
    }

    getId() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please enter the employee ID: ",
                    name: "id"
                }
            ])
            .then((res) => console.log(res.id));
    }

    getEmail() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the employee's email address?",
                    name: "email"
                }
            ])
            .then((res) => console.log(res.email));
    }

    getRole() {
        return "Employee";
    }
}

const emp = new Employee();
emp.getName();

// Exporting class to other subclasses
module.exports = Employee;