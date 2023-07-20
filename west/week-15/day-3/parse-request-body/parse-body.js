function firstStep(input) {
	// Your code here
	return input.split("&");
}

function secondStep(input) {
	//your code here
	return input.map((str) => str.split("="));
}

function thirdStep(input) {
	// Your code here
	return input.map(([key, value]) => [key, value.replace("+", " ")]);
}

function fourthStep(input) {
	// Your code here
	return input.map(([key, value]) => [key, decodeURIComponent(value)]);
}

function fifthStep(input) {
	// Your code here
	const obj = {};
	input.forEach(([key, value]) => {
		obj[key] = value;
	});
	return obj;

	return input.reduce((obj, [key, value]) => {
		obj[key] = value;
		return obj;
	}, {});
}

function parseBody(str) {
	// Your code here
	const resOne = firstStep(str);
	const resTwo = secondStep(resOne);
	const resThree = thirdStep(resTwo);
	const resFour = fourthStep(resThree);
	return fifthStep(resFour);
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
	firstStep,
	secondStep,
	thirdStep,
	fourthStep,
	fifthStep,
	parseBody,
};
