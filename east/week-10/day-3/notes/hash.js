const sha256 = require("js-sha256");

// Hash functions

// Efficient for data indexing
// Only works in one direction. Doesn't work like encryption where you can decrypt the output.

// Maps arbitrary data to a deterministic, fixed-size output
// What's this mean?
// A hash function takes in an input and runs it through a set of deterministic steps, and returns
// a scrambled output. Given the same input, it will ALWAYS return the same output.

const userPassword = "A";
const otherUserPassword = "368!ThisIs!MyPW&&!";

// function hashPassword(pass) {
// 	let hash = 0;

// 	for (let i = 0; i < pass.length; i++) {
// 		hash += pass.charCodeAt(i);
// 	}
// 	return hash;
// }

// console.log(hashPassword(userPassword));
// console.log(hashPassword(otherUserPassword));
// console.log(hashPassword(userPassword));
// console.log(hashPassword(otherUserPassword));

const userOneHex = sha256(userPassword);
const decimalStr = String(parseInt(userOneHex, 16)).slice(0, 8);
console.log(decimalStr);
console.log();
// console.log(sha256(otherUserPassword));
