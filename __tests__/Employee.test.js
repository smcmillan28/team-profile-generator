const { expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");

describe("Employee Class", () => {
    describe("getName", () => {
        it("should return a new employee name when called", () => {
            const employee = new Employee();
            const result = employee.getName();
            expect(result).toEqual(res.name);
        })
    });
});