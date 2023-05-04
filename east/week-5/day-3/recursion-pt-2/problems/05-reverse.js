/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// 1. Base case - when to stop recursion / when to reverse and begin process of taking functions
// off the stack
// 2. Recursive step - The step that works us closer to our base case
// 3. Recursive case - When we keep the process of recursion going

function reverse(str) {
	if (str.length === 0) return str;
	const retStr = reverse(str.slice(1));
	return retStr + str[0];
}

// Other solution where we slice away element at the end instead
// of the front

// function reverse(str) {
// 	if (str.length <= 1) return str;
// 	const retStr = reverse(str.slice(0, str.length - 1));
// 	return str[str.length - 1] + retStr;
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = reverse;
} catch (e) {
	module.exports = null;
}
