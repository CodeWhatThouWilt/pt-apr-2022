// arr.push()
// Time complexity: O(1)
// Space complexity: O(1)
// The push() method adds an element to the end of the array, which is a constant time operation.

// arr.pop()
// Time complexity: O(1)
// Space complexity: O(1)
// The pop() method removes an element from the end of an array, which is a constant time operation.

// arr.shift()
// Time complexity: O(n)
// Space complexity: O(1)
// The shift() method removes the first element of an array. All other elements have to be re-indexed which results in a linear time complexity.

// arr.unshift()
// Time complexity: O(n)
// Space complexity: O(1)
// The unshift() method adds an element to the beginning of an array. All other elements have to be re-indexed which results in a linear time complexity.

// arr.splice()
// Time complexity: O(n)
//  Space complexity: O(n)
// The splice() method can add or remove elements from any position in an array, requiring a re-indexing of elements, which results in a linear time complexity. Additionally, it returns a new array containing the removed elements.

// arr.slice()
// Time complexity: O(n)
// Space complexity: O(n)
// The slice() method returns a shallow copy of a portion of the array into a new array object. It has to iterate through the elements from the beginning to the end index which is linear. The space complexity is also linear as a new array is created.

// arr.indexOf()
// Time complexity: O(n)
// Space complexity: O(1)
// The indexOf() method has to scan potentially the entire array to find the specified element, resulting in linear time complexity.

// arr.map()
// Time complexity: O(n)
// Space complexity: O(n)
// The map() method creates a new array with the results of calling a provided function on every element in the array, meaning it iterates over each element once (linear time complexity) and creates a new array (linear space complexity).

// arr.filter()
// Time complexity: O(n)
// Space complexity: O(n)
// The filter() method creates a new array with all elements that pass a test implemented by the provided function. It iterates over each element once (linear time complexity) and potentially creates a new array of the same size (linear space complexity).

// arr.reduce()
// Time complexity: O(n)
// Space complexity: O(1)
// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value, meaning it iterates over each element once (linear time complexity). It does not create a new array (constant space complexity).

// arr.reverse()
// Time complexity: O(n)
// Space complexity: O(1)
// The reverse() method reverses an array in place, meaning it potentially needs to touch each element once (linear time complexity), but does not create a new array (constant space complexity).

// [...arr]
// Time complexity: O(n)
// Space complexity: O(n)
// The spread operator (...) iterates over each element once to create a copy of the array (linear time complexity) and creates a new array of the same size (linear space complexity).
