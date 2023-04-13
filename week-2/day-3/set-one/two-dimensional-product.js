// Write a function twoDimensionalProduct(array) that takes in a
// 2D array of numbers as an argument. The function should
// return the total product of all numbers multiplied together.

// ======= FOR LOOP ========
// function twoDimensionalProduct(arr) {
// 	// 1. create a product variable to store the product
// 	let product = 1;

// 	// 2. Nested for loops to iterate through our rows and columns
// 	for (let i = 0; i < arr.length; i++) {
// 		const currRow = arr[i];

// 		for (let j = 0; j < currRow.length; j++) {
//             const currCol = currRow[j];
//             // 3. Inside our column loop we need to multiply the current element
//             // with the current product variable

// 			product *= currCol; // product = product * currCol
// 		}
// 	}
//     // 4. return the product variable
// 	return product;
// }

// ======= WHILE LOOP =======
function twoDimensionalProduct(arr) {
// 1. create a product variable to store the product
	let product = 1;

// 2. Nested for while to iterate through our rows and columns
	let i = 0; // This is the index the while loop will start at
	while (i < arr.length) { // This is the condition that will be checked every time this loop is run
		const currRow = arr[i];

		let j = 0;
		while (j < currRow.length) {
			const currCol = currRow[j];
		// 3. Inside our column loop we need to multiply the current element
		// with the current product variable
			product *= currCol; // product = product * currCol
			j += 1; // Increment inner loop by one (if we do not increase the index then our condition is never met. Meaning this will run forever!)
		}
		i += 1; // Increment outer loop by one (if we do not increase the index then our condition is never met. Meaning this will run forever!)
	}
// 4. return the product variable
	return product;
}

let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88
