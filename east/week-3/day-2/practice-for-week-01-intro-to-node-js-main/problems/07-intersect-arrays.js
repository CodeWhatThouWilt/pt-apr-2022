/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*******************************************************************************/

function intersect(arr1, arr2) {
	// Your code here
	const arr = [];

	for (let i = 0; i < arr1.length; i++) {
		const element = arr1[i];

		if (arr2.indexOf(element) > -1) {
			arr.push(element);
		}
	}
	return arr;
}

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = intersect;
