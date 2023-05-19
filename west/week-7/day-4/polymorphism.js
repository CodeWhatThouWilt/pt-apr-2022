const Book = require("./static-stuff.js");

class OtherBook extends Book {
	constructor(title, author, review) {
		super(title, author);
		this.review = review;

		OtherBook.bookCount++;
	}

	static bookCount = 0;

	static printNames(...books) {
		return "Who cares the author is terrible.";
	}
}

const yakeBook = new OtherBook(
	"Terrible Book",
	"Yake",
	"Worst book I've ever read"
);

console.log(OtherBook.printNames(yakeBook));
