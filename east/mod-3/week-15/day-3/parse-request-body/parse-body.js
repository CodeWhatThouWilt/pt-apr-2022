function firstStep(input) {
	console.log(input);
	return input.split("&");
}

function secondStep(input) {
	return input.map((str) => str.split("="));
}

function thirdStep(input) {
	return input.map(([key, value]) => [key, value.replace("+", " ")]);
}

function fourthStep(input) {
	return input.map(([key, value]) => [key, decodeURIComponent(value)]);
}

function fifthStep(input) {
	return input.reduce((obj, [key, value]) => {
		obj[key] = value;
		return obj;
	}, {});

	const obj = {};
	input.forEach(([key, value]) => {
		obj[key] = value;
	});
}

function parseBody(str) {
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
