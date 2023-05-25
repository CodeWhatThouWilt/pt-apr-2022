// Callbacks are a function that is passed into another function.
// Some of the best examples of callbacks is our advanced array
// methods (forEach, map, reduce, filter). Here's some examples
// below where we convert advanced array methods into callbacks.
// In our examples we'll create a callback function above then pass
// it into both the regular array methods and the reworked ones.

// forEach
const logElements = (ele) => console.log(ele);
const arr = [1, 2, 3, 4, 5];
arr.forEach(ele);

// forEach reworked
const myForEach = (arr, cb) => {
	for (let i = 0; i < arr.length; i++) {
		const ele = arr[i];
		cb(ele);
	}
};
myForEach(arr, logElements);

// map
const addFive = (ele) => ele + 5;
const arrOne = [1, 2, 3, 4, 5];
const mapped = arrOne.map(addFive);

// map reworked
const myMap = (arr, cb) => {
	const mapped = [];

	for (let i = 0; i < arr.length; i++) {
		const ele = arr[i];
		mapped.push(cb(ele));
	}
	return mapped;
};
myMap(arrOne, addFive);

// filter
const longerThanThree = (ele) => ele.length > 3;
const arrTwo = ["hey", "hello", "hi", "howdy"];
const filtered = arrTwo.filter(longerThanThree);

// filter reworked
const myFilter = (arr, cb) => {
	const filtered = [];

	for (let i = 0; i < arr.length; i++) {
		const ele = arr[i];
		const isTrue = cb(ele);
		if (isTrue) {
			filtered.push(ele);
		}
	}
	return filtered;
};
myFilter(arrOne);

// reduce
const addNums = (acc, num) => acc + num;
const arrThree = [1, 2, 3, 4, 5];
const sum = arrThree.reduce(addNums);

// reduce reworked
const myReduce = (arr, cb) => {
	let acc = arr[0];

	for (let i = 1; i < arr.length; i++) {
		const ele = arr[i];
		acc = cb(ele);
	}
	return acc;
};
myReduce(arrThree, addNums);
