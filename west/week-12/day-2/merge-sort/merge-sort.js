// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
	// Check if the input is length 1 or less
	// If so, it's already sorted: return
	if (arr.length <= 1) return arr;
	// Divide the array in half
	const half = Math.floor(arr.length / 2);
	// Recursively sort the left half
	const left = mergeSort(arr.slice(0, half));
	// Recursively sort the right half
	const right = mergeSort(arr.slice(half));
	// Merge the halves together and return
	return merge(left, right);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
	// Create an empty return array
	const sorted = [];
	// Point to the first value of each array
	let i = 0;
	let j = 0;
	// While there are still values in each array...
	while (i < arrA.length && j < arrB.length) {
		// Compare the first values of each array
		// Add the smaller value to the return array
		if (arrA[i] < arrB[j]) {
			sorted.push(arrA[i]);
			i++;
		} else {
			sorted.push(arrB[j]);
			j++;
		}
		// Move the pointer to the next value in that array
		// Return the return array
	}

	while (i < arrA.length) {
		sorted.push(arrA[i]);
		i++;
	}

	while (j < arrB.length) {
		sorted.push(arrB[j]);
		j++;
	}

	return sorted;
}

module.exports = [merge, mergeSort];
