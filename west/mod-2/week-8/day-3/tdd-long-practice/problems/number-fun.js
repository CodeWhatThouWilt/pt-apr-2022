function returnsThree() {
	return 3;
}

function reciprocal(n) {
	if (n >= 1 && n <= 1000000) {
		return 1 / n;
	} else {
		throw new RangeError("The input number is out of range");
	}
}

module.exports = {
	returnsThree,
	reciprocal,
};
