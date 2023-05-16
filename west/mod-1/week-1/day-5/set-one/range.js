// Write a function range(min, max) that takes in two numbers. 
// The function should return an array containing all numbers 
// from min to max inclusive. 

// Define this function using function expression syntax.'
// expression syntax 
const range = function(min, max) {
    // create an arr variable which is an empty array
    // for loop - start i at min, while i <= max, increment i + 1
    // push i into the empty array
    // return our arr
    const arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i)
    }
    return arr
}

// named function syntax
// function range(min, max) {

// }

console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []