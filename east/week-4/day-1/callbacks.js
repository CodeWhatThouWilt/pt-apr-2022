// First class object
// A first class object has three properties that make it a first
// class object:
// - Can be passed into a function as an argument
// - Can returned from a function
// - Can be assigned to variables

// ** Assigning functions to variables
// const testFunction = () => {
//     console.log('Hello World');
// }


// ** Returning functions (higher order functions)
// const testFunc = () => {
//     const otherFunc = () => {
//         console.log("hello world")
//     }
//     return otherFunc;
// }


// ** Passing in functions as arguments (callbacks)
// const addNums = (num1, num2, cb) => {
//     console.log(cb);
//     const sum = num1 + num2;
//     const res = cb(sum);
//     console.log(res);
// }

// const tripleNums = (num) => {
//     return num *3
// }

// addNums(1,2, (num) => {
//     return num * 3
// });


// Anonymous functions
const myMap = (arr, cb) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const res = cb(element);
        console.log(element, res)
        newArr.push(res);
    }
    console.log(newArr)
}

const arr = [1,2,3,4,5];

myMap(arr, (el) => {
	return el * 5;
})