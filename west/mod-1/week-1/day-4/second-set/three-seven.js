// Write a function threeOrSeven that takes in a number 
// and returns true if the number is divisible by either 3 or 7 
// and false otherwise. 

// Write two versions of this function, 
// using conditionals (if) and without using conditionals.

// function threeOrSeven(num) {
//     if (num % 3 === 0 || num % 7 === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// function threeOrSeven(num) {
//     if (num % 3 === 0) {
//         return true
//     } else if (num % 7 === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// function threeOrSeven(num) {
//     return (num % 3 === 0) || (num % 7 === 0)
// }

function threeOrSeven(num) {
    if (num % 3 === 0 || num % 7 === 0) return true
    return false
}




console.log(threeOrSeven(3));   // => true
console.log(threeOrSeven(42));  // => true
console.log(threeOrSeven(8));   // => false