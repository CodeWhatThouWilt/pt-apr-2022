/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

function sumArray(arr) {
	if (arr.length === 1) return arr[0];
	const sum = sumArray(arr.slice(1));
	return sum + arr[0];
}

// function sumArray(arr) {
//   if (arr.length === 1) return arr[0];
//   const val = arr.pop();
//   const sum = sumArray(arr);
//   return val + sum;
// }

  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}