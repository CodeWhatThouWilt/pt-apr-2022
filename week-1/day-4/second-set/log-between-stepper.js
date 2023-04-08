// Write a function logBetweenStepper(min, max, step) that takes in 3 
// numbers as parameters. The function should print out numbers 
// between min and max at step intervals. See the following examples. 

// Hint: this function only needs to print using console.log 
// it does not need to return.

function logBetweenStepper(min, max, step) {
    // for loop, start at min, while index <= max, increment by step
    // console log the index
    // for (let index = min; index <= max; index += step) {
    //     console.log(index)
    // }

    // for (let index = min; index <= max; index++) {
    //     if (step % index === 0) {
    //         console.log(index);
    //     }
	// }
}


// Examples:
// logBetweenStepper(5, 9, 1); // prints out:
// 5
// 6
// 7
// 8
// 9


logBetweenStepper(-10, 15, 5)  // prints out:
// -10
// -5
// 0
// 5
// 10
// 15