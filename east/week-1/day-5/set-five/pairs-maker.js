// Write a function pairsMaker(arr) that takes in a an array as 
// an argument. The function should return a 2D array where the 
// subarrays represent unique pairs of element from the input array.

// A 2d array is an array with arrays nested inside of it [['a','b'], ['c','d']]

function pairsMaker(arr) {
    // create an array to push our pairs into for tracking / return
    const newArr = [];

    // loop through incoming array
    for (let i = 0; i < arr.length; i++) {
        // select current iteration
        const outerElement = arr[i]

        // begin a second loop on the array that starts one index after i loop
        for (let j = i + 1; j < arr.length; j++) {
            // select current iteration (element after the current iteration of i)
            const innerElement = arr[j]
            // push i iteration(outerElement) and j iteration(innerElement)
            // into our tracking array. They're packaged together in an array.
            const subArr = [outerElement, innerElement]
            newArr.push(subArr)
        }
    }
    return newArr;
}



console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

// console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]