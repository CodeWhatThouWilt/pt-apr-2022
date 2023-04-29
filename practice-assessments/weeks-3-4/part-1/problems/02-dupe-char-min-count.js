/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	const obj = {};
	const arr = string.split("");
	arr.forEach(char => {
		// console.log(obj);
		if (obj[char] === undefined) {
			// console.log("NEW KEY", char)
			obj[char] = 1;
		} else {
			// console.log("OLD KEY", char);
			obj[char]++
		}
	});
	return obj;
}

function duplicateCharMinCount(string, minCount) {
	const countsObj = countCharacters(string);
	
	const arr = [];
	for (let key in countsObj) {
		const val = countsObj[key];
		if (val >= minCount) {
			arr.push(key);
		}
	}
	return arr;
}
// To loop through object using array, convert object keys to array then get value with
// each key in array
// const keys = Object.keys(countsObj);
// keys.forEach((key) => {
// 	const val = countsObj[key];
// });

duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;