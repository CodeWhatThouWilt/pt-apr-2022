const { expect } = require("chai");

const { returnsThree, reciprocal } = require("../problems/number-fun.js");

// const chai = requiure('chai');
// const expect = chai.expect;

// const expect = require('chai').expect;

describe("returnsThree()", () => {
	it("Should return the number 3", () => {
		expect(returnsThree()).to.equal(3);
	});
});

describe("reciprocal(num)", () => {
	context("If provided a valid input(number between 1-1,000,000)", () => {
		it("Should return the reciprocal of the input", () => {
			expect(reciprocal(5)).to.equal(1 / 5);
			expect(reciprocal(100)).to.equal(1 / 100);
			expect(reciprocal(200)).to.equal(1 / 200);
		});
	});

	context("If provided an invalid input", () => {
		it("Should throw a RangeError if input is not within valid range", () => {
			expect(() => reciprocal(0)).to.throw(RangeError);
			expect(() => reciprocal(1000001)).to.throw(RangeError);
			expect(() => reciprocal(10)).to.not.throw(RangeError);
		});
	});
});
