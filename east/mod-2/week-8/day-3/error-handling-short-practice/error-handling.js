// 1.
console.log("###### PART 1 #####");
function sum(array) {
	try {
		let sum = 0;
		for (let i = 0; i < array.length; i++) {
			sum += array[i];
		}
		return sum;
	} catch (e) {
		if (e instanceof TypeError) {
			console.error(e);
		}
	}
}

let res = sum(null);
console.log(res);

console.log("###### PART 2 #####");
// 2.
// tests
try {
	sayName("Alex");
	sayName(1);
} catch (e) {
	console.error(e);
}

// Your code here
function sayName(name) {
	if (typeof name !== "string") {
		throw new TypeError("Invalid name! Must be a string!");
	} else {
		console.log(name);
	}
}

console.log("###### PART 3 #####");
// 3.
function greet(greeting) {
	if (!greeting) {
		throw new Error("There was no greeting given.");
	}

	console.log(greeting);
}

try {
	greet();
} catch (e) {
	console.error("Hello World!");
}
