function findBiggerNum(num1, num2) {
	return num1 > num2 ? num1 : num2;
}

function multiplyBiggerNumByTwo(num1, num2) {
	// if (num1 > num2) {
	//   return num1 * 2;
	// } else {
	//   return num2 * 2;
	// }
	// return num1 > num2 ? num1 * 2 : num2 * 2;
	return findBiggerNum(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
	// if (num1 > num2) {
	// 	return num1 / 3;
	// } else {
	// 	return num2 / 3;
	// }
	// return num1 > num2 ? num1 / 3 : num2 / 3;
	return findBiggerNum(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
	// let bigNum;
	// if (sum1 > sum2) {
	// 	bigNum = sum1;
	// 	return `I ate ${bigNum} tacos.`;
	// } else {
	// 	bigNum = sum2;
	// 	return `I ate ${bigNum} tacos.`;
	// }
	return `I ate ${findBiggerNum(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
	// let smallDog;
	// if (weight1 < weight2) {
	// 	smallDog = weight1;
	// 	return `I adopted a dog that weighs ${smallDog} pounds.`;
	// } else {
	// 	smallDog = weight2;
	// 	return `I adopted a dog that weighs ${smallDog} pounds.`;
	// }
	return findBiggerNum(weight1, weight2) === weight1 ? weight2 : weight1;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
	multiplyBiggerNumByTwo,
	divideBiggerNumByThree,
	eatMostTacos,
	adoptSmallerDog,
};
