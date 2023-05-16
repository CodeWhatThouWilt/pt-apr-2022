/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// Base case
// Recursive step
// Recursive case

function addToTwelve(arr) {
  if (arr.length <= 1) return false;
  const popped = arr.pop() // return the last element. Mutates the original array by removing the last element.
  const last = arr[arr.length - 1];
  if (popped + last === 12) return true;
  return addToTwelve(arr);
}

// function addToTwelve(arr) {
// 	if (arr.length <= 1) return false;
// 	const firstEle = arr[0];
//   const secondEle = arr[1];
//   if (firstEle + secondEle === 12) return true; 
//   return addToTwelve(arr.slice(1));
// }



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}