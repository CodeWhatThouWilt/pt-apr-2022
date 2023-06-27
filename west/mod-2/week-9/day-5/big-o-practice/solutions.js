// Push
// Time complexity: O(1)
// Time reason: It just adds a new element at the end of the array.
// Space complexity: O(1)
// Space reason: It doesn't use additional space proportional to the input array size.

// Pop
// Time complexity: O(1)
// Time reason: It just removes an element from the end of the array.
// Space complexity: O(1)
// Space reason: It doesn't use additional space proportional to the input array size.

// Shift
// Time complexity: O(n)
// Time reason: It removes the first element and shifts all other elements down.
// Space complexity: O(1)
// Space reason: It doesn't use additional space proportional to the input array size.

// Unshift
// Time complexity: O(n)
// Time reason: It adds an element at the beginning and shifts all other elements up.
// Space complexity: O(1)
// Space reason: It doesn't use additional space proportional to the input array size.

// Filter
// Time complexity: O(n)
// Time reason: It iterates over each element in the array.
// Space complexity: O(n)
// Space reason: It creates a new array containing all elements that pass a test implemented by the provided function.

// Map
// Time complexity: O(n)
// Time reason: It iterates over each element in the array.
// Space complexity: O(n)
// Space reason: It creates a new array with the results of calling a provided function on every element in the array.

// Reduce
// Time complexity: O(n)
// Time reason: It applies a function against an accumulator and each element in the array (from left to right).
// Space complexity: O(1)
// Space reason: It doesn't create a new data structure, but reduces the array to a single value.

// Every
// Time complexity: O(n)
// Time reason: It iterates over each element in the array until it finds one that does not meet the condition, or it reaches the end.
// Space complexity: O(1)
// Space reason: It doesn't create a new data structure, but returns a boolean value based on whether every element in the array meets a condition.
