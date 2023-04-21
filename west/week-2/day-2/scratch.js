// See if a letter exists in a 2d array

const findLetter= function(arr, letter) {
    for (let i = 0; i < arr.length; i++) {
        currRow = arr[i];

        for (let j = 0; j < currRow.length; j++) {
            currCol = currRow[j];
            if (currCol === letter) {
                return true;
            }
        }
    }
    return false;
}



const arr2d = [
    ['s','e','o'],
    ['f', 'r'],
    ['c','b','t']
]

console.log(findLetter(arr2d, 'o')) // true
console.log(findLetter(arr2d, 'i')) // false