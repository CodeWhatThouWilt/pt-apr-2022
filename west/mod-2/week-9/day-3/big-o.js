// ! Time complexity
// ** Used to measure the efficiency of your code when it comes to execution timing

// 1. Does the input affect how many times we run operation. If so O(n) or O(n^2)
// 2. Is there a nested loop and if so do each of them grow as the input grows. If so O(n^2)

// Linear growth O(n)
function multiplyNums(num) {
	let total = 1;

	for (let i = 0; i < num; i++) {
		total *= i;
	}
	return total;
}

function nestedLoop(num) {
	for (let i = 0; i <= num; i++) {
		for (let j = 0; j <= 10; j++) {
			console.log(num);
		}
	}
}

// Constant growth O(1)
function logNum(num) {
	for (let i = 0; i < 10; i++) {
		console.log(num);
	}
}

function getFirst(arr) {
	return arr[0];
}

function constantNested(str) {
	for (let i = 0; i < 50000; i++) {
		for (let j = 0; j < 10000; j++) {
			console.log(str);
		}
	}
}

// Quadratic growth O(n^2)
function doubleLoop(num) {
	let sum = 0;

	for (let i = 1; i <= num; i++) {
		for (let j = 1; j <= num; j++) {
			sum += j;
		}
	}

	return sum;
}

function otherDouble(arr) {
	arr.foreach((el) => {
		arr.foreach((otherEl) => {
			console.log(otherEl);
		});
	});
}

// ! Space complexity
// ** Used to measure the efficiency of your code when it comes to memory usage

// Linear space O(n)
function linearGrowth(num) {
	const arr = [];

	for (let i = 0; i <= num; i++) {
		arr.push(i);
	}
	return arr;
}

// Constant space O(1)
function staysConstant(num) {
	const arr = [
		[11, 23, 44],
		[12, 35, [34, 55, 70]],
	];
	arr.push(num);
	return arr;
}

function otherConstant(num) {
	const numThing = num;
	return numThing;
}

// O(n) time complexity and O(1) space complexity
function getSum(num) {
	let sum = 0;

	for (let i = 0; i < num; i++) {
		sum += i;
	}
	return sum;
}

// Quadratic space O(n^2)
function quadSpace(num) {
	const arr = [];

	for (let i = 0; i < num; i++) {
		for (let j = 0; j < num; j++) {
			arr.push(j);
		}
	}
}
