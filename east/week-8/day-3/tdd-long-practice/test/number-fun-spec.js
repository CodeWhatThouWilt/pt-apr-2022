const { expect } = require("chai");

const { returnsThree, reciprocal } = require("../problems/number-fun.js");

// const funcs = require("../problems/number-fun.js");
// The above is an object so we can access the functions through:
//  funcs.returnsThree and funcs.reciprocal

describe("returnsThree()", () => {
	it("Always returns the number 3", () => {
		expect(returnsThree()).to.equal(3);
	});
});

describe("reciprocal(num)", () => {
	context(
		"If a number within range(1-1,000,000) is entered in the input",
		() => {
			it("Should return the reciprocal of the input number", () => {
				expect(reciprocal(5)).to.equal(1 / 5);
				expect(reciprocal(10)).to.equal(1 / 10);
				expect(reciprocal(1000)).to.equal(1 / 1000);
				expect(reciprocal(27)).to.equal(1 / 27);
			});
		}
	);

	context("If an invalid number is used as an input", () => {
		it("Should return a RangeError", () => {
			expect(() => reciprocal(0)).to.throw(RangeError);
			expect(() => reciprocal(1000001)).to.throw(RangeError);
		});
	});
});
