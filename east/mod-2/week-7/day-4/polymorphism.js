const Book = require("./static-stuff.js");

class OtherBooks extends Book {
	constructor(title, author, review) {
		super(title, author);
		this.review = review;
	}

	static numBooks = 0;

	static getTitles(...books) {
		return `No one cares. The author is terrible.`;
	}

	announceBook() {
		console.log("Why does he keep writing");
	}
}

const yakeBook = new OtherBooks(
	"terrible book",
	"Yake",
	"Reads like it was written by a 2 year old"
);
const yakeBookTwo = new OtherBooks(
	"Another terrible book",
	"Yake",
	"Reads like it was written by a 1 year old"
);

yakeBook.announceBook();

// console.log(OtherBooks.getTitles(yakeBook, yakeBookTwo));
