class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
		Book.bookCount++;
		// this.read();
		// console.log(this);
	}

	static bookCount = 0;

	read() {
		console.log(`${this.title} by ${this.author} is being read`);
	}

	static listBooks(...books) {
		console.log(books);
		console.log(this.bookCount);
	}

	delayed() {
		setTimeout(this.read, 3000);
	}
}

const book = new Book("Meditations", "Marcus Aurelius");

// const readMethod = book.read;
// readMethod();

// book.delayed();

// setTimeout(book.read, 3000);

function test(cb) {
	cb();
}

test(book.read);
