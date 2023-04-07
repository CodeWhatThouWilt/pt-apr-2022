// Define a function logBetween(lowNum, highNum) 
// that will print every number from lowNum to highNum, inclusive. 
// Inclusive means that the range includes lowNum and highNum. 

// Hint: this function only needs to print using console.log 
// it does not need to return.

// using a for loop
// function logBetween(lowNum, highNum) {
//     // create a loop that starts with lowNum
//     // console log each number and increment counter by one
//     // stop at high number
//     for (let index = lowNum; index < highNum; index++) {// i++ is the same as saying i = i + 1
//         console.log(index)
//     }
// }

// using a while loop
function logBetween(lowNum, highNum) {
	// create a counter for where to start at
    // create a while loop and have it quit when counter reaches highNum
    // console.log our number
    // increment
    let i = lowNum
    while (i <= highNum) {
        console.log(i)
        i++
    }
	
}


// Examples:
logBetween(-1, 2); 
// prints out:
// -1
// 0
// 1
// 2

// logBetween(14, 6); 
// => prints nothing

// logBetween(4, 6); 
// prints out:
// 4
// 5
// 6