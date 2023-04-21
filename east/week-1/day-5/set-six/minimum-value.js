// Write a function minValue(nums) that takes in an array of 
// numbers as an arg. The function should return the smallest 
// number of the array. If the array is empty, 
// the function should return null.

const minValue = function(numbers) {
    // check if the array is empty return null if true
    // create variable to keep track of smallest num so far
    // for loop start at index 0, while less than array length, i++
    // if statement to see if current num is less than smallest
    // return smallest num
    if (numbers.length === 0) {
        return null
    }
    let smallest = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        const currNum = numbers[i]

        if (currNum < smallest) {
            smallest = currNum
        }
    }
    return smallest
    // return Math.min(...numbers)
}


console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null