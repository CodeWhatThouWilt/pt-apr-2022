// Given a sequence, seq, write a function that returns true 
// if the sentence can be rearranged into a palindrome and false 
// if not. Ignore whitespace and assume all characters are lowercase.

// Note: A palindrome is a sequence that reads the same 
// backwards as is does forward.

const sequence = "pop";
const sequence1 = "kayak";
const sequence2 = "yo banana boy";
const sequence3 = "this is the truth";
const sequence4 = "abab";

const isPalindrome = seq => {
    // Create object for storing how often a letter appears
    const obj = {};
    // Line below removes spaces from incoming string
    const str = seq.split(" ").join("")

    for (let i = 0; i < str.length; i++) {
        const letter = str[i];

        // If letter exists as a key in obj increase value by one
        if (letter in obj) {
            obj[letter]++
        } else {
            // If letter is not a key in obj add it as a key with value = 1
            obj[letter] = 1
        }
    }

    // Keep track of how many letters appear an odd number of times
    // For the sequence to be rearranged into a palindrome we can't
    // have more than one odd letter
    let oddCount = 0;

    // Loop through the object with our letter counts
    for (let key in obj) {
        const value = obj[key];

        // If letter appears an odd amount of times increment oddCount
        if (value % 2 !== 0) {
            oddCount++
        }
        // If oddCount is higher than one it cannot be rearranged into
        // a palindrome
        if (oddCount > 1) {
            return false;
        }
    }
    return true
}

console.log(isPalindrome(sequence));             // true;
console.log(isPalindrome(sequence1));            // true
console.log(isPalindrome(sequence2));            // true
console.log(isPalindrome(sequence3));            // false
console.log(isPalindrome(sequence4));            // true
// because "abab" can be rearranged into a palindrome, "abba"