// Write a function twoDimensionalProduct(array) that takes in a
// 2D array of numbers as an argument. The function should
// return the total product of all numbers multiplied together.

function twoDimensionalProduct(arr) {
	// 1. create a product variable to store the product
	let product = 1;
    
	// 2. Nested for loops to iterate through our rows and columns
	for (let i = 0; i < arr.length; i++) {
		const currRow = arr[i];
        
		for (let j = 0; j < currRow.length; j++) {
            const currCol = currRow[j];
            // 3. Inside our column loop we need to multiply the current element
            // with the current product variable

			product *= currCol; // product = product * currCol
		}
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
