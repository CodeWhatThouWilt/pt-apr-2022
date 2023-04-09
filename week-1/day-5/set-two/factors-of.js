// Write a function factorsOf(num) that takes in a number as an arg. 
// The method should return an array containing all positive numbers 
// that are able to divide into num with no remainder. 

// ! Define this function using function expression syntax.

const factorsOf = function(num) {
    // create an arr variable which is an emptry array
    // for loop - start i at 1, while i <= num, increment by 1
    // if statement - check if num % i === 0
    // push index into array if above is true
    // return arr variable
    const arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i)
        }
    }
    return arr
}

console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]