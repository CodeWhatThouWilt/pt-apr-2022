class Book {
	constructor(title, author) {
		this.author = author;
		this.title = title;

		if (this instanceof Book) {
			Book.bookCount++;
		}
	}

	static bookCount = 0;

	static printNames(...books) {
		return books.map((book) => book.title);
	}

	static doSomething() {
		console.log(Book);
	}
}

const fellowship = new Book("Fellowship of the Ring", "Tolkien");
const twoTowers = new Book("The Two Towers", "Tolkien");

module.exports = Book;
