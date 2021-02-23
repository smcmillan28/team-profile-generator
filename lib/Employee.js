// Importing inquirer
const inquirer = require("inquirer");

// Setting up Employee class with name, id, email properties
// Class with also include the following methods - getName(), getId(), getEmail(), getRol()
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

module.exports = Employee;