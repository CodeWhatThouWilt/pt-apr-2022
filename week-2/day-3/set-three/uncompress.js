// Write a function uncompress(str) that takes in a "compressed" string
// as an arg. A compressed string consists of a character immediately
// followed by the number of times it appears in the "uncompressed" form.
// The function should return the uncompressed version of the string.
// See the examples.

// Hint: you can use the built-in Number function should convert a
// numeric string into the number type. For example. Number("4") // => 4

// create a string for tracking letters
// Loop through the incoming str
// Loop through all the even indexes
// When looping through we can select the index + 1 to get our number
// of times we need to duplicate the current letter
// Nested loop that iterates the num of times letter needs to be
// duplicated
// Add each letter to our string for tracking letters

// ======= FOR LOOP ========
const uncompress = function(str) {
    // Create a new string to store all the letters as we uncompress
    let retStr = '';

    // Iterate through the current string skipping indexes by 2
    for (let i = 0; i < str.length; i += 2) {
        // Select each letter which only exists at 0 and even indexes
        const currLetter = str[i];
        // Select the number string which is one index after each letter
        // Also convert that number string to a number for looping
        const currNum = Number(str[i + 1]);

        // Create a loop that runs as many cycles as the currNum above
        for (let j = 0; j < currNum; j++) {
            // Add the currLetter x amount of times to the storage string
            retStr += currLetter;
        }
    }
    // Return the storage string
    return retStr
}

// ======= WHILE LOOP =======
const whileLoopUncompress = function(str) {
    // Create a new string to store all the letters as we uncompress
    let retStr = '';

    // Iterate through the current string skipping indexes by 2
    let i = 0; // <--- This is the index the outer while loop will start at
    while (i < str.length) { // <--- This is the condition that will be checked every time this outer loop is run
        // Select each letter which only exists at 0 and even indexes
        const currLetter = str[i];
        // Select the number string which is one index after each letter
        // Also convert that number string to a number for looping
        const currNum = Number(str[i + 1]);

        // Create a loop that runs as many cycles as the currNum above
        let j = 0; // <--- This is the index the inner while loop will start at
        while (j < currNum) { // <--- This is the condition that will be checked every time this inner loop is run
            // Add the currLetter x amount of times to the storage string
            retStr += currLetter;
            j += 1; // Increment inner loop by one (if we do not increase the index then our condition is never met. Meaning this will run forever!)
        }
        i += 1; // Increment outer loop by one (if we do not increase the index then our condition is never met. Meaning this will run forever!)
    }
    // Return the storage string
    return retStr;
}

// ======= RUN TO TEST FOR LOOP =======
// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'

// ======= RUN TO TEST FOR LOOP =======
console.log(whileLoopUncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(whileLoopUncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(whileLoopUncompress('b1o2t1')); // 'boot'
