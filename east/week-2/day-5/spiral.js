// Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix) 
// and returns an array containing the elements in spiral order.


function spiralOrder(matrix) {
  // your code here...
    if (matrix.length === 0) return [];

    const result = [];
    let rowBegin = 0;
    let rowEnd = matrix.length - 1;
    let colBegin = 0;
    let colEnd = matrix[0].length - 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // Traverse to the right
        for (let i = colBegin; i <= colEnd; i++) {
            result.push(matrix[rowBegin][i])
        }
        rowBegin++

        // Traverse down
        for (let i = rowBegin; i <= rowEnd; i++) {
            result.push(matrix[i][colEnd])
        }
        colEnd--

        // Traverse left
        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
                result.push(matrix[rowEnd][i])
            }
            rowEnd--
        }

        // Traverse up
        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                result.push(matrix[i][colBegin])
            }
            colBegin++
        }
    }
    return result
}


matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
