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

// ! An arrow function maintains context of its lexical scope, a regular function does not.

// const arrowRet = newBook.arrowFunc();
// arrowRet();

// const regularFunc = newBook.regularFunc();
// regularFunc();

newBook.withTimeoutArrow();

newBook.withTimeoutReg();

// function test() {
// 	console.log(this);
// }
