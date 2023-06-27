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

const newBook = new Book("The Odyssey", "Homer");

// Below will cause an error
// const readMethod = newBook.read;
// readMethod();

// ! Bind(newContext, arg1, arg2, etc, etc) - returns a new function with the new context and arguments bound
// function test(arg1, arg2) {
// 	console.log(this, arg1, arg2);
// }

// const boundFunc = test.bind(newBook, "Hello");
// boundFunc(" | This is the not bound arg");
// test();

// Null can be used to skip over changing the context
// const boundFunc = test.bind(null, "helloooo", "world");
// boundFunc();

// ! Call(newContext, arg1, arg2, arg3, etc, etc) - call immediately executes the function with the new bindings
// C in call stands for comma separated
// function test(arg1, arg2) {
// 	console.log(this, arg1, arg2);
//     return this;
// }

// test.call(newBook, "hello", "world");
// const globalVarHere = test.call(null, "hello", "world");

// const arr = [1,2,3,4,5];
// test.call(null, ...arr);

// ! Apply(newContext, [arr of args]) - call immediately / executes the function with the new bindings
// A in apply stands for array
function test(arg1, arg2) {
	console.log(this, arg1, arg2);
	return this;
}

// test.apply(newBook, ["hello", "world"]);
test.apply(null, ["hello", "world"]);
