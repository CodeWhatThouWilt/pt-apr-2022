function bubbleSort(arr) {
	let swapped = false;
	// Iterate through the array
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			// If the current value is greater than its neighbor to the right
			// Swap those values
			if (arr[j] > arr[j + 1]) {
				// [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				// Do not move this console.log
				console.log(arr.join(","));
				swapped = true;
			}
		}
		// If you get to the end of the array and no swaps have occurred, return
		if (!swapped) return;
		swapped = false;
		// Otherwise, repeat from the beginning
	}
}

module.exports = bubbleSort;
