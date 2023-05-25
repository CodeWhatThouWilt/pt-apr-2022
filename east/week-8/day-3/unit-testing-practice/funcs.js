function isFive(num) {
	return num === 5 ? true : false;
}

function isOdd(number) {
	if (number % 2 === 0) {
		return false;
	} else if (number % 1 === 0) {
		return true;
	} else {
		throw new Error();
	}
}

function myRange(min, max, step = 1) {
	const arr = [];
	for (let i = min; i <= max; i += step) {
		arr.push(i);
	}
	return arr;
}

module.exports = { isFive, isOdd, myRange };
