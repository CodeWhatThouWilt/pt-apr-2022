const sha256 = require("js-sha256");

// Hash functions

// Efficient for data indexing
// Only works in one direction. Doesn't work like encryption where you can decrypt the output.

// Maps arbitrary data to a deterministic, fixed-size output
// What's this mean?
// A hash function takes in an input and runs it through a set of deterministic steps, and returns
// a scrambled output. Given the same input, it will ALWAYS return the same output.

// const userPassword = "password123";

// function simpleHash(str) {
// 	let hash = 0;

// 	for (let i = 0; i < str.length; i++) {
// 		hash += str.charCodeAt(i);
// 	}
// 	return hash;
// }

// const hashedPassword = simpleHash(userPassword);
// console.log(hashedPassword);
// const checkPassword = simpleHash(userPassword);
// console.log(checkPassword);

const userPassword = "087!WeOut&&Here!Partyin!";

const hashedPassword = sha256(userPassword).slice(0, 8);
console.log(hashedPassword);
const passwordGuess = sha256("password123");
console.log(passwordGuess);
