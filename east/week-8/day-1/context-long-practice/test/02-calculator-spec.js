const assert = require("assert");

const Calculator = require("../problems/02-calculator.js");

describe("Calculator", function () {
	let calculator = new Calculator();

	it("should add num to the total and set and return the new total", function () {
		assert.equal(calculator.add(50), 50);
	});

	it("should subtract num from the total and set and return the new total", function () {
		assert.equal(calculator.subtract(35), 15);
	});

	it("should multiply num with the total and set and return the new total", function () {
		assert.equal(calculator.multiply(10), 150);
	});

	it("should divide num from the total and set and return the new total", function () {
		assert.equal(calculator.divide(5), 30);
	});
});
