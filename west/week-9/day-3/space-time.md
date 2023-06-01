# Space Time Complexity and Big O Notation

## Introduction to Space-Time Complexity

Space-time complexity refers to the computational complexity that describes the amount of computer memory (space) and time it takes for an algorithm to process data.

In computer science, it's crucial to understand the efficiency of an algorithm as it gives us insights into how our program will perform under different circumstances.

## Big O Notation

Big O notation is a way to express the time complexity or space complexity of an algorithm. It provides an upper bound on the time or space required, which means it gives a worst-case scenario.

Big O notation is usually expressed like this: `O(n)`, where `n` is the size of the input. Here are some common Big O notations:

- `O(1)`: Constant time complexity. No matter how large the input, the time taken remains the same.
- `O(n)`: Linear time complexity. As the input size grows, the time taken grows linearly.
- `O(n²)`: Quadratic time complexity. As the input size grows, the time taken grows quadratically.

## Examples in JavaScript

Here are some examples of functions with different time complexities in JavaScript:

```javascript
// Constant Time Complexity O(1)
function getFirstElement(array) {
	return array[0];
}

// Linear Time Complexity O(n)
function findElement(array, element) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === element) {
			return i;
		}
	}
	return -1;
}

// Quadratic Time Complexity O(n²)
function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}
```
