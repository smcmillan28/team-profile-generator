const Manager = require("../lib/Manager");

describe("Manager subclass", () => {
    describe("New Manager", () => {
        it("should create a new Manager object with name of 'Adele'", () => {
            const mgr = new Manager("Adele", "5", "hello@gmail.com", "430");
            
            expect(mgr.name).toEqual("Adele");
        });

        it("should return the new Employee's name when getName() method is called", () => {
            const mgr = new Manager("Adele", "5", "hello@gmail.com", "430");
            const mgrName = mgr.getName();

            expect(mgrName).toEqual("Adele");
        });

        it("should return the new Employee's ID when getId() method is called", () => {
            const mgr = new Manager("Adele", "5", "hello@gmail.com", "430");
            const mgrID = mgr.getId();

            expect(mgrID).toEqual("5");
        });

        it("should return the new Engineer's email when getEmail() method is called", () => {
            const mgr = new Manager("Adele", "5", "hello@gmail.com", "430");
            const mgrEmail = mgr.getEmail();

            expect(mgrEmail).toEqual("hello@gmail.com");
        });

        it("should return 'Engineer' when getRole() method is called", () => {
            const mgr = new Manager("Adele", "5", "hello@gmail.com", "430");
            const mgrRole = mgr.getRole();

            expect(mgrRole).toEqual("Manager");
        })

        it("should return Engineer's when GitHub profile is called", () => {
            const mgr = new Manager("Adele", "5", "hello@gmail.com", "430");
            const mgrOffice = mgr.officeNumber;

            expect(mgrOffice).toEqual("430");
        })
    });
});