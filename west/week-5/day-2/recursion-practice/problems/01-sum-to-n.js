/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

// 1. Figure out what the base case should be
// Base case - if num === 0
// 2. Decrementing num by 1
// 3. Add return value of function to num

function sumToN(num) {
  if (num < 0) return null;
  if (num === 0) return num;
  return num += sumToN(num - 1)
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}