const arr = [5, 6, 7, 8, 0, 1, 2, 3, 4];

// Array.prototype.sort((a, b) => sorting stuff here);

console.log(arr);

// Ascending order (A is first)
arr.sort((a, b) => a - b);

console.log(arr);

// Descending order (B is first)

arr.sort((a, b) => b - a);

console.log(arr);
