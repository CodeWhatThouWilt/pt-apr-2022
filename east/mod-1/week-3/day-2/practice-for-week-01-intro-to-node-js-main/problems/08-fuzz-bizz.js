/******************************************************************************
Write a function fuzzBizz(max) that returns an array of numbers under
the max. Each number should be either divisible by 2 or 7, BUT NOT BOTH.

Examples:

fuzzBizz(17) => [ 2, 4, 6, 7, 8, 10, 12, 16 ]
fuzzBizz(30) => [ 2, 4, 6, 7, 8, 10, 12, 16, 18, 20, 21, 22, 24, 26 ]
*******************************************************************************/

function fuzzBizz(max) {
	// Your code here
	const arr = [];
	for (let i = 0; i < max; i++) {
		const divisibleByTwo = i % 2 === 0;
		const divisibleBySeven = i % 7 === 0;

		if (divisibleByTwo && !divisibleBySeven) {
			arr.push(i);
		} else if (divisibleBySeven && !divisibleByTwo) {
			arr.push(i);
		}
	}
	return arr;
}

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = fuzzBizz;
