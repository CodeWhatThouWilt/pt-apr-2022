// Write a function myIncludes(arr, target) that accepts an 
// array and a target value as args. The function should return a 
// boolean indicating whether the target is found in the array. 
// ! Solve this without Array.includes or Array.indexOf.

function myIncludes(arr, target) {
    // .includes iterates through the array / string and checks
    // to see if the current iteration matches the argument

    // for loop - start at index 0, while index < array length, increment by 1
    // if statement - see if current iteration of for loop at array[index]
    // matches the target
    // return true if found
    // return false after the loop
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true
        }
        // if (arr[i] === target) return true // returning true will end function immediately
    }
    return false
}

console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false