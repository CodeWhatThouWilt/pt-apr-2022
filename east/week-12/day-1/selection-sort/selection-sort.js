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
		// Save and remove the value at the min index
		const index = copy.reduce((acc, num, i) => (num < copy[acc] ? i : acc), 0);
		const smallestNum = copy[index];
		// let idx = 0;
		// let min = copy[0];
		// for (let i = 0; i < copy.length; i++) {
		// 	const num = copy[i];
		// 	if (num < min) {
		// 		idx = i;
		// 		min = num;
		// 	}
		// }

		copy.splice(index, 1);

		// Add the min value to the end of the sorted array
		sorted.push(smallestNum);
	}
	return sorted;
}

function selectionSortInPlace(arr) {
	// Set a pointer at zero dividing the array into sorted and unsorted halves
	let pointer = 0;
	// Repeat while the unsorted half is not empty:
	while (pointer < arr.length) {
		// Do not move this console.log
		console.log(arr.join(","));

		// Find the index of the minimum value in the unsorted half
		let idx = pointer;
		// Save the min value
		let min = arr[pointer];
		for (let i = pointer + 1; i < arr.length; i++) {
			const num = arr[i];
			if (num < min) {
				idx = i;
				min = num;
			}
		}

		// Shift every unsorted value to the left of the min value to the right by 1
		for (let i = idx; i > pointer; i--) {
			arr[i] = arr[i - 1];
		}
		// Put the min value at the divider
		arr[pointer] = min;
		// Increment the divider and repeat
		pointer++;
	}
}

module.exports = [selectionSort, selectionSortInPlace];
