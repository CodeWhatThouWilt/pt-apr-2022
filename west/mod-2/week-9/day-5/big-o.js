// O(1) Constant
// Input does not affect the amount of operations or space being used

// Time complexity O(1) space complexity O(1)
function printTenTimes(num) {
	for (let i = 0; i < 10; i++) {
		console.log(num);
	}
}
// Time complexity O(1) space complexity O(1)
function printArrTenTimes() {
	const arr = [1, 2, 3, 4, 5];
	for (let i = 0; i < 10; i++) {
		console.log(arr);
	}
}

// O(n) Linear
// Input increase space and time in a linear manner
// Time complexity O(n) space complexity O(1)
function logHi(num) {
	for (let i = 0; i < num; i++) {
		console.log("Hi");
	}
}
// Time complexity O(n) space complexity O(n)
function newArr(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(i);
	}
}

// O(n^2) quadratic
// Input will exponentially increase time or space complexity
// Time complexity O(n^2)
// Input 1 - 2 operations
// Input 2 - 6 operations
// Input 3 - 12 operations
// Input 4 - 20 operations
// Time complexity O(n^2) space complexity O(1)
function weGettinNested(num) {
	for (let i = 0; i < num; i++) {
		for (let j = 0; j < num; j++) {
			console.log("Hello World");
		}
	}
}
// Input of 1 = 2 operations / array length of 2
// Input of 2 = 6 operations / array length of 6
// Time complexity O(n^2) space complexity O(n^2)
function takingUpSpace(num) {
	const arr = [];
	for (let i = 0; i < num; i++) {
		for (let j = 0; j < num; j++) {
			arr.push(j);
		}
	}
}

// TEST TIME
// Time complexity O(n^2) and O(n^2)
function guessTheComplexity(num) {
	const arr = [];
	for (let i = 0; i < num * num; i++) {
		arr.push(i);
	}
}
// Time complexity O(n^2) and space O(1)
function guessTheComplexityTwo(num) {
	for (let i = 0; i < num * num; i++) {
		// console.log("Hello World");
	}
}

for (let i = 1000; i < 1100; i++) {
	const start = Date.now();
	guessTheComplexity(i);
	const end = Date.now();
	console.log(end - start);
}
