const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
	const newWord = new Word("hello");

	describe("Word constructor function", function () {
		it('should have a "word" property', function () {
			expect(newWord.word).to.not.equal(undefined);
		});

		it('should set the "word" property when a new word is created', function () {
			expect(newWord.word).to.equal("hello");
		});
	});

	describe("removeVowels function", function () {
		it("should return the word with all vowels removed", function () {
			expect(newWord.removeVowels()).to.equal("hll");
		});
	});

	describe("removeConsonants function", function () {
		it("should return the word with the consonants removed", function () {
			expect(newWord.removeConsonants()).to.equal("eo");
		});
	});

	describe("pigLatin function", function () {
		it("should return the word converted to pig latin", function () {
			expect(newWord.pigLatin()).to.equal("ellohay");
		});
	});
});
