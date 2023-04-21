// Write a function sumArray(array) that takes 
// in an array of numbers and returns the total 
// sum of all the numbers.

function sumArray(arr) {
    // create a sum variable to track addition
    // create a loop, index starts at 0, i < array length, increment i
    // add to our sum variable
    let sum = 0
    for (let i = 0; i <= arr.length; i++) {
        const currNum = arr[i]
        console.log(currNum, "index:", i)
        sum += currNum
    }
    return sum

}

sumArray([5, 6, 4]);
// console.log(sumArray([5, 6, 4])); // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30