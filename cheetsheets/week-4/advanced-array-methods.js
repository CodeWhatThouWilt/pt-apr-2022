// There's several use cases for each one of our advanced
// array methods but what you'll find is each is primarily used
// for the following:

// Note: each one of the advanced array methods has 3 parameters
// in their callback function (element, index, array) with 
// the exception of reduce which has (accumulator, element, index, array)

// forEach - used to iterate through each element of an array.
// Can also be used to mutate the original array. Has no return value
// so no reason to assign it to a variable.

// Iterating:
const arr = [1,2,3,4,5];
arr.forEach(num => {
    console.log(num);
});

// Mutating array:
const arrOne = [1,2,3,4,5];
arr.forEach((num, i) => {
    arrOne[i] = num * 2;
});

// map - used when you want to return a new array where each of
// the previous elements have been modified
const arrTwo = [1,2,3,4,5];
const newArr = arrTwo.map((num) => num * 2);

// filter - used when you want return a new array where elements
// have been filtered based on some boolean. Returning true in the
// callback will put the current element into the new array
const arrThree = ['hello', "hi", "whats gooood", "wassssuuupp", "hey"];
const filtered = arrThree.filter((word) => word.length > 3);

// reduce - used for sums, products, creating objects. This method
// differs from the rest due to having the accumulator. Here's some
// key points about the accumulator and inital values: 

// The accumulator takes on whatever value is returned for each iteration
// For example, below it will always be the number 1, except for the 
// first iteration because it's set to 0
const arrFour = [1,2,3,4];
const alwaysOne = arr.reduce((acc, num) => 1, 0);

// If the initial value is not defined the initial value will be set to
// the value at index 0 in the array that reduce is called on and
// the reduce will begin the loop at the index of 1. 
// In this example the accumulator starts at 1 and the first loop runs
// with the ele being 2
const arrFive = [1,2,3,4];
const sum = arrFive((acc, num, i) => {
    console.log(acc); // first log will be 1
    console.log(num, i); // first log will be 2, 1
    return acc + num;
});

// If an initial value is defined then the accumulator will 
// take on that initial value and begin looping at the index 0.
// In the example below acc will start at 1 and begin looping at
// index 0
const arrSix = [6,2,3,4,5];
const product = arrSix((acc, num, i) => {
    console.log(acc); // first log will be 1
    console.log(num, i); // first log will be 6
    return acc * num;
}, 1);
