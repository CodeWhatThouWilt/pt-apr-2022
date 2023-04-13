// Create a function that takes in an array of numbers and console
// logs "<number> is even" if a number is even and
// "<number> is odd if a number is odd".

// Bonus: At the end the function
// should return an array with nested arrays where each nested array
// contains a number from the original array and a boolean showing
// true if it is even and false if it is odd.

// ! Use a helper function isEven(num) to identify if a number is even/odd
// ! and then console log it

// ======= FOR LOOP =======
function evenNumsFunc(arr) {
    const retArr = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const bool = isEven(num)
        retArr.push([num, bool]);
    }
    return retArr
}

// For loop helper function
function isEven(number) {

    if (number % 2 === 0) {
        console.log(number + " is even!");
        return true;
    } else {
        console.log(number + " is odd!");
        return false;
    }

    // number % 2 === 0 ? console.log('Num is even') : console.log("num is odd")
}


// ======= WHILE LOOP =======
function whileLoopEvenNumsFunc(arr) {
    const retArr = [];

    let i = 0; // <--- This is the index the while loop will start at
    while (i < arr.length) { // <--- This is the condition that will be checked every time this loop is run
        const num = arr[i];
        const bool = isEven(num)
        retArr.push([num, bool]);
        i += 1; // Increment loop by one (if we do not increase the index then our condition is never met. Meaning this will run forever!)
    }
    return retArr
}

// While loop helper function
function isEven(number) {

    if (number % 2 === 0) {
        console.log(number + " is even!");
        return true;
    } else {
        console.log(number + " is odd!");
        return false;
    }
}

// ======= RUN TO TEST FOR LOOP =======
// console.log(evenNumsFunc([1,2,3,4,5]))
// // [[1, false],
// // [2, true],
// // [3, false],
// // [4, true],
// // [5, false]]

// // console.log(evenNumsFunc([2,4,22,3,47]))
// // [[2, true],
// // [4, true],
// // [22, true],
// // [3, false],
// // [47, false]]

// ======= RUN TO TEST WHILE LOOP =======
console.log(whileLoopEvenNumsFunc([1,2,3,4,5]))
// [[1, false],
// [2, true],
// [3, false],
// [4, true],
// [5, false]]

// console.log(evenNumsFunc([2,4,22,3,47]))
// [[2, true],
// [4, true],
// [22, true],
// [3, false],
// [47, false]]
