
// 1. Create a new array to store our max column values
// 2. Create a variable to track the height of our matrix (length of 2d array)
// 3. Create a variable to track the width of our matrix (length of first inner array)
// 4. Loop through columns - start i at 0; i < width; i++
// 5. Nested loop - start j at 0; j < height; j++
// 6. PAUSE


function maxColumn(matrix) {
	const maxNums = [];
    // Determined the matrix height so we can loop through rows
    const height = matrix.length;
    // Determined the matrix width to loop through columns
    const width = matrix[0].length;

    // For loop to loop through each column value
    for (let col = 0; col < width; col++) {
        // Declare max column value to the beginning of each col
        let colMax = matrix[0][col];

        // Begin looping through each row that exists in our columns
        for (let row = 0; row < height; row++) {
            // See if our current value is higher than the max value for this column
            if (matrix[row][col] > colMax) {
                // If the above is true we change our colMax to the current number
                colMax = matrix[row][col];
            }
            
        }
        // Once we've finished going through all the rows inside a column
        // we push the colMax into our storage array
        maxNums.push(colMax);
    }
    return maxNums
}

matrix = [
	[5, 9, 21],
	[9, 19, 6],
	[12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]
