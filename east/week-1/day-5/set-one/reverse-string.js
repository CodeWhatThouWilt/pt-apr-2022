// Write a function reverseString(str) that takes in a string. 
// The function should return a new string where the order of 
// the characters is reversed.

const reverseString = function(str) {
    // create a var which is an empty string
    // create a for loop - i starts a str.length - 1, i >= 0, i--
    // add current iteration to our empty string variable 
    // return newString
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i] // newString = newString + str[i] (current letter)
    }
    return newString
}


console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'