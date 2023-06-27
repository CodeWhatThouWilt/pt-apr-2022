class Book {
	constructor(author, title) {
		this.author = author;
		this.title = title;
	}

	read() {
		console.log(`${this.title} by ${this.author} is being read.`);
	}

	arrowFunc() {
		return () => {
			console.log(this);
		};
	}

	regularFunc() {
		return function () {
			console.log(this);
		};
	}

	withTimeoutArrow() {
		setTimeout(() => {
			console.log(this);
		});
	}

	withTimeoutReg() {
		setTimeout(function () {
			console.log(this);
		});
	}
}

const newBook = new Book("The Odyssey", "Homer");

newBook.withTimeoutArrow();

newBook.withTimeoutReg();
