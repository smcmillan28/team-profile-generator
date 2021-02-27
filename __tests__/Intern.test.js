const Intern = require("../lib/Intern");

describe("Intern subclass", () => {
    describe("New Intern", () => {
        it("should create a new Intern object with name of 'Charlie'", () => {
            const intern = new Intern("Charlie", "3", "chuck@yahoo.com", "GT");
            
            expect(intern.name).toEqual("Charlie");
        });

        it("should return the new Employee's name when getName() method is called", () => {
            const intern = new Intern("Charlie", "3", "chuck@yahoo.com", "GT");
            const intName = intern.getName();

            expect(intName).toEqual("Charlie");
        });

        it("should return the new Employee's ID when getId() method is called", () => {
            const intern = new Intern("Charlie", "3", "chuck@yahoo.com", "GT");
            const intID = intern.getId();

            expect(intID).toEqual("3");
        });

        it("should return the new Engineer's email when getEmail() method is called", () => {
            const intern = new Intern("Charlie", "3", "chuck@yahoo.com", "GT");
            const intEmail = intern.getEmail();

            expect(intEmail).toEqual("chuck@yahoo.com");
        });

        it("should return 'Engineer' when getRole() method is called", () => {
            const intern = new Intern("Charlie", "3", "chuck@yahoo.com", "GT");
            const intRole = intern.getRole();

            expect(intRole).toEqual("Intern");
        })

        it("should return Engineer's when GitHub profile is called", () => {
            const intern = new Intern("Charlie", "3", "chuck@yahoo.com", "GT");
            const intSchool = intern.school;

            expect(intSchool).toEqual("GT");
        })
    });
});