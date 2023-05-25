function isFive(num) {
	return num === 5 ? true : false;
}

function isOdd(number) {
	// Your code here
}

function myRange(min, max, step = 1) {
	const arr = [];
	for (let i = min; i <= max; i += step) {
		arr.push(i);
	}
	return arr;
}

module.exports = { isFive, isOdd, myRange };
