// Given an array of numbers, find the average of all the numbers

function findAvg(arr) {
    
    const sum = findSum(arr);

    return sum / arr.length;
}

function findSum(arr) {
    let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];
		sum += num;
	}

    return sum
}



console.log(findAvg([1,2,3,4,5]));
console.log(findAvg([4,2,6,4,22,29]))