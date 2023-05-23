class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}

	read() {
		console.log(this);
		// console.log(`${this.title} by ${this.author} is being read.`);
	}
}

const book = new Book("Meditations", "Marcus Aurelius");

// console.log(book);

// const readMethod = book.read;
// readMethod();

function test(cb) {
	cb();
}

test(book.read);
