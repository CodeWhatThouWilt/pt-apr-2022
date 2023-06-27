// class Stuff {
// 	constructor() {
// 		this.stuff = 1;
// 	}
// }

// function test(arg1, arg2) {
// 	console.log(this, arg1, arg2);
// }

// test();

// ! Bind
// returns a new function where the context and args (both optional) are manually bound to the function
// const newStuff = new Stuff();

// const boundFunc = test.bind(newStuff); // First argument is the new context. Second+ arguments are args to be bound to the function
// const boundFunc = test.bind(null); // null allows us to skip the first arg

// const boundArgs = test.bind(null, "hello", "world");

// boundArgs();

// ! Call (c means comma separated args)
// Call immediately returns the results of the function with the new bindings
// Call accepts 2+ args, the first is the new context, everything that follows is args to be bound
// class Stuff {
// 	constructor() {
// 		this.stuff = 1;
// 	}
// }

// function test(arg1, arg2) {
// 	console.log(this, arg1, arg2);
// }

// const newStuff = new Stuff();

// test.call(null);
// test.call(newStuff);
// test.call(newStuff, "hello", "world");

// ! Apply (a means array args)
// Immediately executes with the newly bound context / args
// Allows us to take in 2 args, the first is the new context, the second should be an array of args
class Stuff {
	constructor() {
		this.stuff = 1;
	}
}

function test(arg1, arg2) {
	console.log(this, arg1, arg2);
}

const newStuff = new Stuff();

const arr = ["stuff", "more stuff", "other stuff"];

test.apply(newStuff, arr);
test.call(newStuff, ...arr);
