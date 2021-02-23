// Importing Employee parent class
const Employee = require("./Employee");

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
            .then((res) => console.log(res.school));
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;