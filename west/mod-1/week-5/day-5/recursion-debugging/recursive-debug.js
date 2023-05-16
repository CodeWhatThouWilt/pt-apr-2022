/***********************************************************************
We've done most of the work for you below, but something's not quite
right. Refactor the problem below to avoid a stack overflow and save
the day!

When fixed, this function should behave similarly to JavaScript's '.map()'
function.

Examples:

doForAll([], (x) => x * 2); // => []
doForAll([1, 2, 3], (x) => x + 1); // => [2, 3, 4]
doForAll(["a", "b", "c"], (x) => x.toUpperCase()); // => ["A", "B", "C"]
***********************************************************************/

// Base case - when recursion should stop
// Recursive step - moving us closer to our base case
// Recursive case - continuing our recursion

// stack overflow error is going to be caused by one of two things
// 1. Incorrect or missing base case
// 2. Missing recursive step


function doForAll(arr, action) {
  if (arr.length === 0) return [];
  return [action(arr[0]), ...doForAll(arr.slice(1), action)];
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = doForAll;