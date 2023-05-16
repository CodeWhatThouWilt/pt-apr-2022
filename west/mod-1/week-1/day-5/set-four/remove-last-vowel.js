// Write a function removeLastVowel(word) that takes in a string and 
// returns the string with its last vowel removed.

function removeLastVowel(string) {
    const vowels = 'aeiou';

    for (let i = string.length - 1; i >= 0; i--) {
        if (vowels.includes(string[i])) {
            return string.slice(0, i) + string.slice(i + 1)
        }
    }
    return string;
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'