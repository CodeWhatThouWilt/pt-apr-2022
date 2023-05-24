const { expect } = require("chai");

const func = require("../func.js");

describe("Func", () => {
	// Runs before all the tests
	// before(() => {
	// 	console.log("Welcome to the Mocha/Chai testing intro!!");
	// });

	// Runs before every test within this describe
	// beforeEach(() => {
	// 	console.log("Test: ");
	// });

	// Runs after all the tests
	// after(() => {
	// 	console.log("This concludes the test");
	// });

	// Runs after each test in this describe
	// afterEach(() => {
	// 	console.log("I run after each test");
	// });

	it("Should be a function", () => {
		expect(func).to.be.a("function");
	});

	it("Should return a function", () => {
		expect(func()).to.be.a("function");
	});

	it("When invoking the return function it should return the proper string", () => {
		const retFunc = func();
		expect(retFunc()).to.equal("Hello World");
	});
});
