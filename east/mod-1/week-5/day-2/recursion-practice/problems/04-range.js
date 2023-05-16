/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

function range(start, end) {
  if (end < start) return [];
  if (start === end) return [];

  const arr = range(start + 1, end);

  arr.unshift(start);
  return arr;
}

// function range(start, end) {
// 	if (end < start) return [];
// 	if (start + 1 === end) return [start];

// 	const arr = range(start, end - 1);

// 	arr.push(end - 1);
// 	return arr;
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}