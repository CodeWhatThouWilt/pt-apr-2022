// Fixed arrays?
// const arr = new Array(5);
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;
// console.log(arr);
// // arr.push(6);

// const newArr = new Array(6);
// for (let i = 0; i < arr.length; i++) {
// 	newArr[i] = arr[i];
// }
// newArr[5] = 6;
// console.log(newArr);

const arr = new Array(8);
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;

// arr.push(6)
arr[5] = 6;
// arr.push(7);
arr[6] = 7;
// arr.push(8);
arr[7] = 8;

console.log(arr);

const newArr = new Array(16);
for (let i = 0; i < arr.length; i++) {
	newArr[i] = arr[i];
}

console.log(newArr);

// Max capacity

// Resizing

// Why resizing is more efficient
