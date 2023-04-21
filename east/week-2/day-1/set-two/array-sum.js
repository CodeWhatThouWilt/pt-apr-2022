// Write a function sumArray(arr) that accepts an array as an arg. 
// The function should return the total sum of all values in the array.

let sumArray = function(arr) {
    // Create counter for sum
    let sum = 0;

    // Iterate through the range of numbers below the arrays length
    for (let i = 0; i < arr.length; i++) {
        // Select current iteration of the array
        let el = arr[i];
        // Add to the sum (same as sum = sum + el)
        sum += el;
    }
    // return the final sum
    return sum;
};

console.log(sumArray([4, 3, -1, 10])); // 16
console.log(sumArray([6, 7, 2])); // 15
console.log(sumArray([])); // 0