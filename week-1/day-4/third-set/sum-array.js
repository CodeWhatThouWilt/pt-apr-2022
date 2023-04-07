// Write a function sumArray(array) that takes 
// in an array of numbers and returns the total 
// sum of all the numbers.


function sumArray(array) {
    // define a sum variable that starts at 0
    // for loop, index starts at 0, goes until i is 1 below length, 
    // increments by 1
    // add the current index of the array to the sum
    // console log or return the sum
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        // console.log('Current element', array[i])
        sum += array[i]// sum = sum + array[i]
    }
    console.log(sum)
}

sumArray([5, 6, 4]);
// console.log(sumArray([5, 6, 4])); // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30