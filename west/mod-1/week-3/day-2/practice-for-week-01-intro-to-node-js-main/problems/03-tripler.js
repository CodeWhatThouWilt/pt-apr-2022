/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
	// Your code here
	let arr = [];
	for (let i = 0; i < array.length; i++) {
		const numTripled = array[i] * 3;
		arr.push(numTripled);
	}
	return arr;
}


/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = tripler;
