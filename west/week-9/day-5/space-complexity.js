// Size / growth of our arrays and objects

// O(n) space
function spaceGrowth(arr) {
	return arr.map((el) => el * 2);
}

spaceGrowth([1, 2, 3, 4, 5]);

// O(n^2)
function spaceSquared(num) {
	const arr = [];
	const arrOne = [1, 2, 3, 4, 5, 5, 6];

	for (let i = 0; i < num; i++) {
		for (let j = 0; j < num; j++) {
			arr.push(j);
		}
	}
}

// O(1)
function retSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
