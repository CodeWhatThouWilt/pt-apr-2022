// Write a function leastCommonMultiple(num1, num2) that accepts
// two numbers as arguments. The functions should return the
// smallest number that is divisible by both num1 and num2.

const leastCommonMultiple = function (num1, num2) {
    // Begin loop through all the values less than or equal to num1 * num2
    // Reasoning for this is because that will be the last guaranteed number
    // that both can evenly divide into
	for (let i = 1; i <= num1 * num2; i++) {
        // Check to see if num1 and num2 can go into the current iteration(num)
        // without having any remainder
		if (i % num1 === 0 && i % num2 === 0) {
            // Return the current iteration(num)
			return i;
		}
	}
};

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
