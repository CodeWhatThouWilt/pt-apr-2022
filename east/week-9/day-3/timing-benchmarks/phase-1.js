// Adds up positive integers from 1-n
function addNums(n) {
	// Fill this in
	// console.time("addNums");
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	// console.timeEnd("addNums");
	return sum;
}

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
	// Fill this in
	// console.time("addManyNums");
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		sum += addNums(i);
	}
	// console.timeEnd("addManyNums");
	return sum;
}

module.exports = [addNums, addManyNums];
