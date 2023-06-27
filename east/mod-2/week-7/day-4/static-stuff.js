class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;

		Book.numBooks++;
	}

	static numBooks = 0;

	static getTitles(...books) {
		return books.map((book) => book.title);
	}

	announceBook() {
		console.log(`${this.title} is now a book!`);
	}
}

// const fellowship = new Book("Fellowship of the Ring", "Tolkien");
// const twoTowers = new Book("Two Towers", "Tolkien");

// twoTowers.announceBook();

module.exports = Book;
