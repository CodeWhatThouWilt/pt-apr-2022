// First class object
// A first class object has three properties that make it a first
// class object:
// - Can be passed into a function as an argument
// - Can returned from a function
// - Can be assigned to variables

// ** Assigning functions to variables
// const testFunc = () => {
//     console.log("hello world");
// }


// ** Returning functions (higher order functions)
// const testFunc = () => {

//     const interiorFunc = () => {
//         console.log("hello world")
//     }
//     return interiorFunc
// }


// ** Passing in functions as arguments (callbacks)
// const addSums = (num1, num2, cb) => {
//     console.log(cb);
//     const sum = num1 + num2;
//     const res = cb(sum);
//     return res;
// }


// console.log(addSums(5,10, (num) => {
//     return num * 2;
// }))

// const tripler = (num) => {
//     return num * 3;
// };
// Array.forEach((element) => {

// })

const myMap = (arr, cb) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const res = cb(element, i, arr);
        newArr.push(res);
    }
    return newArr;
}


const arr = [1,2,3,4,5];

const callback = (num) => {
    return 10 * num
};

// const mapped = myMap(arr, callback);
// console.log(mapped);

const mapped = arr.map(callback);
// console.log(mapped);