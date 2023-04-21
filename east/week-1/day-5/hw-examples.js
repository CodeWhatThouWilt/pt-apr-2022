// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(str) {
    // - declare string with vowels
    // - if str starts with vowel add yay to the end of the word
    // - iterate through each letter of str
    // - have an if statement to see if letter is a vowel
    //  - find a way to select all letters that come before the first vowel
    // - move that chunk to the end of the word
    // add 'ay'
    const vowels = 'aeiou';
    if (vowels.includes(str[0])) {
        return str + 'yay';
    }

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            const first = str.slice(0, i);
            const second = str.slice(i);
            return second + first + 'ay'
        }
    }
    return str
}

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
console.log(pigLatinWord('why'))