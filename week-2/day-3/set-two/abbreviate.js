// Write a function abbreviate(word) that takes in 
// a string arg. The function should return a new 
// string where all of its vowels are removed.

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

function isVowel(letter) {
    const vowels = "aeiouAEIOU";

    return !vowels.includes(letter)
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'