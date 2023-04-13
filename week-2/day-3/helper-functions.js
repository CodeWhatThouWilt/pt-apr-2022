// Given an array of numbers, find the average of all the numbers

// ======= FOR LOOP =======
function findAvg(arr) {

    const sum = findSum(arr);

    return sum / arr.length;
}
// For loop helper function
function findSum(arr) {
    let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];
		sum += num;
	}

    return sum
}

// ======= WHILE LOOP =======
function whileLoopFindAvg(arr) {

    const sum = findSum(arr);

    return sum / arr.length;
}
// While loop helper function
function findSum(arr) {
    let sum = 0;

    let i = 0;
    while (i < arr.length) {
        const num = arr[i];
		sum += num;
        i += 1;
    }
    return sum
}

// ======= RUN TO TEST FOR LOOP =======
// console.log(findAvg([1,2,3,4,5]));
// console.log(findAvg([4,2,6,4,22,29]))

// ======= RUN TO TEST WHILE LOOP =======
console.log(whileLoopFindAvg([1,2,3,4,5]));
console.log(whileLoopFindAvg([4,2,6,4,22,29]))
