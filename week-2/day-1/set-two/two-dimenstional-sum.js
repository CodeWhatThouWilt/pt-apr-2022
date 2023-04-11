// Write a function twoDimensionalSum(arr) that takes in a 
// 2D array of numbers and returns the total sum of all numbers.

const array2d = [
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i']
];

const twoDimensionalSum = function(arr) {
    // Create a counter to keep track of sum of all numbers
    let sum = 0;
    // Create a for loop to iterate through nested arrays / rows
    for (let row = 0; row < arr.length; row++) {
		const currRow = arr[row];
		// console.log("CURRENT ROW:", currRow);

		// Create nested for loop to iterate through elements inside each array (columns)
		for (let column = 0; column < currRow.length; column++) {
			const currCol = currRow[column];
			// console.log("  CURRENT COLUMN:", currCol);
			// Add current column / iteration to our sum
			sum += currCol; // Same as sum = sum + currCol(number)
		}
	}
    // return the sum of all numbers
    return sum;
};

let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6