/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
reverseString("Jump,-jump-for-joy") => "joy-for-jump-Jump,"
*******************************************************************************/

function reverseString(string) {
  // Your code here
    const strSplit = string.split('-');
    const reversed = strSplit.reverse();
    return reversed.join("-");
}

// One liner solution
// const reverseString = (string) => string.split('-').reverse().join("-")


/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = reverseString;