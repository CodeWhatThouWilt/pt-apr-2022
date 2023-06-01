// Benchmarks
function testTiming(num) {
	let sum = 0;
	for (let i = 0; i < num; i++) {
		sum += 1;
	}
	return sum;
}

function constTest() {
	let sum = 0;
	for (let i = 0; i < 500000; i++) {
		sum += i;
	}
	return sum;
}

function testTimingQuad(num) {
	let sum = 0;
	for (let i = 0; i < num; i++) {
		for (let j = 0; j < num; j++) {
			sum += j;
		}
	}
	return sum;
}

// Date.now()
// console.log(Date.now());

// Subtracting dates
// const start = Date.now();
// testTiming(500000);
// const end = Date.now();
// console.log(end - start);

// console.time(label)
// console.time("Timer"); // Starts a timer with the specified label

// console.timeLog(label)
// console.timeLog("Timer"); // Logs the amount of ms since the console.time

// console.timeEnd(label)
// console.timeEnd("Timer"); // Logs the amount of ms since the console.time also ends the console.time of the corresponding label

console.time("Timer");
testTiming(50000000);
console.timeEnd("Timer");

// console.time("Timer");
// testTimingQuad(500000);
// console.timeEnd("Timer");

console.time("Timer");
constTest();
console.timeEnd("Timer");
