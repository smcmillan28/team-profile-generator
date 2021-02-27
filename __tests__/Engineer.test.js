const Engineer = require("../lib/Engineer");

describe("Engineer subclass", () => {
    describe("New Engineer", () => {
        it("should create a new Engineer object with name of 'Joe'", () => {
            const engineer = new Engineer("Joe", "2", "joe@yahoo.com");
            
            expect(engineer.name).toEqual("Joe");
        });

        it("should return the new Employee's name when getName() method is called", () => {
            const engineer = new Engineer("Joe", "2", "joe@yahoo.com");
            const engName = engineer.getName();

            expect(engName).toEqual("Joe");
        });

        it("should return the new Employee's ID when getId() method is called", () => {
            const engineer = new Engineer("Joe", "2", "joe@yahoo.com");
            const engID = engineer.getId();

            expect(engID).toEqual("2");
        });

        it("should return the new Engineer's email when getEmail() method is called", () => {
            const engineer = new Engineer("Joe", "2", "joe@yahoo.com");
            const engEmail = engineer.getEmail();

            expect(engEmail).toEqual("joe@yahoo.com");
        });

        it("should return 'Engineer' when getRole() method is called", () => {
            const engineer = new Engineer("Joe", "2", "joe@yahoo.com");
            const engRole = engineer.getRole();

            expect(engRole).toEqual("Engineer");
        })

        it("should return Engineer's when GitHub profile is called", () => {
            const engineer = new Engineer("Joe", "2", "joe@yahoo.com", "smcmillan28");
            const engHub = engineer.github;

            expect(engHub).toEqual("smcmillan28");
        })
    });
});