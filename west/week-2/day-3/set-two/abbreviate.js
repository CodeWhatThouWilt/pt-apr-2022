// Write a function abbreviate(word) that takes in
// a string arg. The function should return a new
// string where all of its vowels are removed.

// ======= FOR LOOP =======
function abbreviate(str) {
    // 1. create a variable that holds all our vowels aeiou
    // 1 1/2. Create a string to track modifications initialize as an empty string
    // 2. For loop - loop through all characters
    // 3. Check if current letter is a vowel, if so remove from string
    // 4. Return tracker string
    let retStr = '';

    for (let i = 0; i < str.length; i++) {
        const currLetter = str[i];

        if(isVowel(currLetter)) {
            retStr += currLetter;
        }

    }
    return retStr;
}
// For loop helper function
function isVowel(letter) {
    const vowels = "aeiouAEIOU";

    return !vowels.includes(letter)
}


// ======= WHILE LOOP =======
function whileLoopAbbreviate(str) {
    // 1. create a variable that holds all our vowels aeiou
    // 1 1/2. Create a string to track modifications initialize as an empty string
    // 2. While loop - loop through all characters
    // 3. Check if current letter is a vowel, if so remove from string
    // 4. Return tracker string
    let retStr = '';

    let i = 0; // <--- This is the index the while loop will start at
    while (i < str.length) { // <--- This is the condition that will be checked every time this loop is run
        const currLetter = str[i];

        if(isVowel(currLetter)) {
            retStr += currLetter;
        }
        i += 1; // Increment loop by one (if we do not increase the index then our condition is never met. Meaning this will run forever!)
    }
    return retStr;
}

// While loop helper function
function isVowel(letter) {
    const vowels = "aeiouAEIOU";

    return !vowels.includes(letter)
}

// ======= RUN TO TEST FOR LOOP =======
// console.log(abbreviate('wonderful')); // 'wndrfl'
// console.log(abbreviate('mystery')); // 'mystry'
// console.log(abbreviate('Accordian')); // 'ccrdn'

// ======= RUN TO TEST WHILE LOOP =======
console.log(whileLoopAbbreviate('wonderful')); // 'wndrfl'
console.log(whileLoopAbbreviate('mystery')); // 'mystry'
console.log(whileLoopAbbreviate('Accordian')); // 'ccrdn'
