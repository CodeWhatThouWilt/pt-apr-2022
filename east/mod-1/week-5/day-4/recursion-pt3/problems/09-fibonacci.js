/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

// // Strictly recursive no extra params
function fibonacci(n) {
	if (n === 1 || n === 2) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

// // Recursion using parameters
// function fibonacci(n, prev1 = 0, prev2 = 1) {
// 	if (n === 0) return prev1;
// 	if (n === 1) return prev2;
// 	return fibonacci(n - 1, prev2, prev1 + prev2);
// }

// // Iterative solution for visualizing solution above
// function fibonacci(n) {
// 	let currNum = 0;
// 	let nextNum = 1;
// 	if (n === 1 || n === 2) return 1;

// 	for (let i = 0; i < n; i++) {
// 		const currNumPlaceHolder = currNum;
// 		currNum = nextNum;
// 		nextNum = currNumPlaceHolder + nextNum;
// 	}
// 	return currNum;
// }



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
