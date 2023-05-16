// Write a function hasVowel(str) that takes in a string. 
// The function should return a boolean, true if the string contains 
// at least one vowel, false otherwise. 
// Vowels are the letters a, e, i, o, u.

const hasVowel = function(str) {
    // create a variable with vowels string
    // for loop - start index at 0, while index < strings length, index++
    // if - see if vowels includes the current letter (iteration)
    // return true if the above is true
    // return false outside of our loop
    
    // const vowels = 'aeiou';
    for (let i = 0; i < str.length; i++) {
        const currLetter = str[i];
        // if (vowels.includes(currLetter)) {
        //     return true;
        // }
        if ('aeiou'.includes(currLetter)) {
            return true
        }
    }
    return false;
}


console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false