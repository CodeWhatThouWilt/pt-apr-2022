function selectionSort(arr) {
	// Copy the original array
	const copy = [...arr];
	// Create an array to store the sorted values
	const sorted = [];
	// While the array is not empty...
	while (copy.length) {
		// Do not move this console.log
		console.log(sorted.join(","));

		// Find the index of the minimum value in the unsorted half
		// const index = copy.reduce((acc, num, i) => (num < copy[acc] ? i : acc), 0);
		let index = 0;
		for (let i = 0; i < copy.length; i++) {
			if (copy[i] < copy[index]) {
				index = i;
			}
		}
		// Save and remove the value at the min index
		const min = copy[index];
		copy.splice(index, 1);
		// Add the min value to the end of the sorted array
		sorted.push(min);
	}
	return sorted;
}

function selectionSortInPlace(arr) {
	// Set a pointer at zero dividing the array into sorted and unsorted halves
	let divider = 0;
	// Repeat while the unsorted half is not empty:
	while (divider < arr.length) {
		// Do not move this console.log
		console.log(arr.join(","));

		let smallestIdx = divider;
		// Find the index of the minimum value in the unsorted half
		for (let i = divider; i < arr.length; i++) {
			if (arr[i] < arr[smallestIdx]) {
				smallestIdx = i;
			}
		}

		// Save the min value
		const min = arr[smallestIdx];
		// Shift every unsorted value to the left of the min value to the right by 1
		for (let i = smallestIdx; i > divider; i--) {
			arr[i] = arr[i - 1];
		}

		// Put the min value at the divider
		arr[divider] = min;
		// Increment the divider and repeat
		divider++;
	}
	return arr;
}

module.exports = [selectionSort, selectionSortInPlace];
