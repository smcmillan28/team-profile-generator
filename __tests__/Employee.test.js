const Employee = require("../lib/Employee");

describe("Employee Class", () => {
    describe("New Employee", () => {
        it("should create a new Employee object with name of 'Sam'", () => {
            const employee = new Employee("Sam", "2", "smcmillan@yahoo.com");
            
            expect(employee.name).toEqual("Sam");
        });

        it("should return the new Employee's name when getName() method is called", () => {
            const employee = new Employee("Sam", "2", "smcmillan@yahoo.com");
            const empName = employee.getName();

            expect(empName).toEqual("Sam");
        });

        it("should return the new Employee's ID when getId() method is called", () => {
            const employee = new Employee("Sam", "2", "smcmillan@yahoo.com");
            const empID = employee.getId();

            expect(empID).toEqual("2");
        });

        it("should return the new Employee's email when getEmail() method is called", () => {
            const employee = new Employee("Sam", "2", "smcmillan@yahoo.com");
            const empEmail = employee.getEmail();

            expect(empEmail).toEqual("smcmillan@yahoo.com");
        });

        it("should return 'Employee' when getRole() method is called", () => {
            const employee = new Employee("Sam", "2", "smcmillan@yahoo.com");
            const empRole = employee.getRole();

            expect(empRole).toEqual("Employee");
        })
    });
});