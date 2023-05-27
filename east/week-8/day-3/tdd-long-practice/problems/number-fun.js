function returnsThree() {
	return 3;
}

function reciprocal(n) {
	if (n >= 1 && n <= 1000000) {
		return 1 / n;
	} else {
		throw new RangeError("Input number must be between 1-1,000,000");
	}
}

module.exports = {
	returnsThree,
	reciprocal,
};
