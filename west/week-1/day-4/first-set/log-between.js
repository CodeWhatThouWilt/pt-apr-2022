// Define a function logBetween(lowNum, highNum) 
// that will print every number from lowNum to highNum, inclusive. 
// Inclusive means that the range includes lowNum and highNum. 

// Hint: this function only needs to print using console.log 
// it does not need to return.
// using for loop
// function logBetween(lowNum, highNum) {
//     // create a loop, start loop at lowNum, go until index <= highNum
//     // increment the index by 1
//     // console.log our numbers
//     for (let index = lowNum; index < highNum; index++) {
//         // index++ is the same as index = index + 1 or index += 1
//         console.log(index)
//     }
// }

function logBetween(lowNum, highNum) {
    // create variable index
    // until index == hightNum
    // create while loop that continues while lowNum <= highNum
    // let index = lowNum

    // while (index <= highNum) {
    //     console.log(index)
    //     // index++
    // }

    while (lowNum <= highNum) {
        console.log(lowNum)
        // lowNum++
        lowNum = lowNum + 1
        // lowNum = lowNum(5) + 1 === 6
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