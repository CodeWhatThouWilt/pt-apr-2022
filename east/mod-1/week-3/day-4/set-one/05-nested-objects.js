// Given an object that has other objects nested inside of it, write a function
// that takes that object and returns all values that are at a depth of 2.

const nestedObj = {
	a: "aloe",
	b: {
		c: "cello",
		d: "dello",
	},
	e: {
		f: "fellow",
		g: {
			h: "hello",
			i: "io",
		},
		j: "jello",
	},
};

const printDepthOfTwo = (obj) => {
	// Write your solution here.
	const arr = [];
	for (let key in obj) {
		const value = obj[key];

		if (typeof value === "object") {
			for (let i in value) {
				const innerVal = value[i];
				arr.push(innerVal);
			}
		}
	}
    // Allows us to print all results inside the arr in one line in our console
	console.log(...arr);
};

printDepthOfTwo(nestedObj); // cello dello fellow { h: "hello", i: "io" } jello
