// Write a function rotateRight(array, num) that takes in an array and 
// a number as args. The function should return a new array where the 
// elements of the array are rotated to the right num times. The 
// function should not mutate the original array and instead return a new array. 

// Define this function using function expression syntax. 

// ! HINT: you can use Array's slice() method to create a copy of an array

// const rotateRight = function(arr, num) {
//     // 1. Create a variable that copies the original array using .slice()
//     let copy = arr.slice();

//     // 2. Create a loop - start i at 0; i < num; increment i by one
//     for (let i = 0; i < num; i++) {
//         // 3. For each iteration remove the last element
//         const removedEle = copy.pop();
//         // 4. Take the removed element and add it the front
//         copy.unshift(removedEle);
//     }
//     // 5. When finished with the loop return the array
//     return copy;
// }; 

const rotateRight = function(arr, num) {
    let copy = arr.slice();
    console.log("COPY BEFORE SPLICE: ", copy);
    let removed = copy.splice(-num, num); // 5 + -2 = 3
    console.log("SPLICED ELEMENTS: ", removed);
    console.log("COPY AFTER SPLICE: ", copy)
    copy = removed.concat(copy);
    return copy
}

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]
