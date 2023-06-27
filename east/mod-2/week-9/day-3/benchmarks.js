function addNums(n) {
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

function nestedAdd(n) {
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			sum += i;
		}
	}
	return sum;
}

// Date.now()
// const rightNow = Date.now();
// console.log(rightNow);

// Subtracting dates
// const afterRightNow = Date.now();
// console.log(afterRightNow, rightNow);

// const start = Date.now();
// addNums(1000000000);
// const end = Date.now();

// console.log(end - start);

// const start1 = Date.now();
// nestedAdd(1000000000);
// const end1 = Date.now();

// console.log(end1 - start1);

// console.time(str)
// console.time("Timer");

// console.timeLog(str)
// console.timeLog("Timer"); // Logs the amount of ms since the first console.time

// console.timeEnd(str)
// console.timeEnd("Timer"); // Logs the amount of ms since the first console.time also ends the console.time

console.time("Timer");
addNums(10000000);
console.timeEnd("Timer");

console.time("Quadratic timer");
nestedAdd(10000);
console.timeEnd("Quadratic timer");
