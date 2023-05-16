// Objects
// Arrays

// Primitive data types / cannot be mutated
// Undefined
// Numbers / NaN
// Strings
// Null


// Objects and arrays are references

const arr = [1,2,3];
arr[1] = 5
// console.log(arr)
const str ="hey";
// str[1] = "t";
// console.log(str);

// const obj = {
//     newKey: "hello"
// };
// obj.newKey = "mutated";
// console.log(obj)


// let x = "hey";
// // x = x + 2;
// x + "hello" = x
// const "heyhello" = x

let array1 = [1, 2, 3];

let array2 = array1;

array2.push(4);

console.log(array1); // => ????