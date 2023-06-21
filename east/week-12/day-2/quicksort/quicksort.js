function quicksort(arr) {
	// Check if the input is length 1 or less
	// If so, it's already sorted: return
	if (arr.length <= 1) return arr;
	// Pick the first value as the pivot
	const pivot = arr[0];
	// Orient the pivot so that...
	// every number smaller than the pivot is to the left
	// every number larger (or equal) than the pivot is to the right
	let left = [];
	let right = [];

	for (let i = 1; i < arr.length; i++) {
		const currNum = arr[i];
		// currNum < pivot ? left.push(currNum) : right.push(currNum);
		if (currNum < pivot) {
			left.push(currNum);
		} else {
			right.push(currNum);
		}
	}
	// Recursively sort the left
	left = quicksort(left);
	// Recursively sort the right
	right = quicksort(right);
	// Return the left, pivot and right in sorted order
	return [...left, pivot, ...right];
}

module.exports = [quicksort];
