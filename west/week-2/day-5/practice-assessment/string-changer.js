// Build a function called stringChanger() that takes in two arguments: 
// a word and an operation. Based on the operation, your function will 
// return the word modified in some way. The operations are:

// "capitalize": Capitalize the first letter in the word.

// "uppercase": Capitalize every letter in the word.

// "double": Return the word twice in a row.

// "reverse": Return the string with the letters in reverse order.

// If the operation is invalid, return the word, unchanged.



function stringChanger(word, operation) {
	// Your code here
	if (operation === 'capitalize') {
		const firstLetter = word[0].toUpperCase();
		const restOfTheWord = word.slice(1);
		return firstLetter + restOfTheWord
	} else if (operation === 'uppercase') {
		return word.toUpperCase();
	} else if (operation === 'double') {
		return word + word;
	} else if (operation === 'reverse') {
		const splitWrd = word.split("");
		const reversed = splitWrd.reverse();
		const joined = reversed.join("");
		return joined
		// return word.split("").reverse().join("")
	} else {
		return word;
	}
}
// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (stringChanger("foo", "capitalize") === "Foo") score++;
if (stringChanger("foo", "uppercase") === "FOO") score++;
if (stringChanger("foo", "double") === "foofoo") score++;
if (stringChanger("foo", "reverse") === "oof") score++;

if (stringChanger("foo", "unknown") === "foo") score++;

console.log("You have scored " + score + "/5 points.");