// Setting up Employee class with name, id, email properties
// Class with also include the following methods - getName(), getId(), getEmail(), getRole()
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

// Exporting class to other subclasses
module.exports = Employee;