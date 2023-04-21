// Write a function named restSum that accepts all incoming parameters 
// and sums them.

// Hint: Use rest parameter syntax!

// Write your code for `restSum` here
const restSum = (...nums) => {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];
        sum += number;
    }
    return sum
}

console.log(restSum(3,5,6)); // => 14
console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
console.log(restSum(0)); // => 0
