// Time complexity
// Used to measure the efficiency of our code when it comes to timing

// Side notes:
// Nested for loop with dynamic inputs for each is quadratic
// For loop with dynamic input is linear

// Linear growth O(n)
function logNumbers(n) {
	for (let i = 1; i < n; i++) {
		console.log(i);
	}
}

function notQuadratic(n) {
	for (let i = 1; i < n; i++) {
		for (let j = 1; j < 10; j++) {
			console.log(j);
		}
	}
}

// Constant growth O(1)
function getLast(arr) {
	return arr[arr.length - 1];
}

function constantLoop(num) {
	for (let i = 1; i < 10; i++) {
		console.log(i);
	}
}

// Quadratic growth O(n^2)
function nestedLogs(num) {
	for (let i = 1; i < n; i++) {
		for (let j = 1; j < n; j++) {
			console.log(j);
		}
	}
}

// Space complexity
// Used to measure the amount of space used up when running our code

// Linear space O(n)
function returnArr(n) {
	const arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
		arr.push(i + 1);
	}
	return arr;
}

function diffSpaceTime(n) {
	const arr = [];

	for (let i = 0; i <= n; i++) {
		arr.push(i);
		for (let j = 0; j <= n; j++) {
			console.log(j);
		}
	}
}

// Constant space O(1)
function retArr(n) {
	const arr = [];

	for (let i = 1; i <= 10; i++) {
		arr.push(i);
	}
	return arr;
}

// Quadratic space O(n^2)
function quadraticSpace(n) {
	const arr = [];

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			arr.push([i, j]);
		}
	}
}
