// Given a sentence string, sentence, write a function that returns the most
// common character within the sentence. If there are multiple characters that
// appear the most, return the lexicographically smallest one 
// (e.g. if 'a' and 'b' are both the most common, return 'a' because 
// it is closest to the beginning of the alphabet). 

// ! Be sure to exclude spaces when counting characters.

// console.log("a" < "b");

const mostCommonChar = (sentence) => {
    const str = sentence.split(" ").join("").toLowerCase();
    const obj = {};

    for (let i = 0; i < str.length; i++) {
        const letter = str[i];

        if (letter in obj) {
            obj[letter]++
        }  else {
            obj[letter] = 1;
        }
    }
    
    let highestCount = 0;
    let highestCountLetter = '';

    for (let key in obj) {
        const value = obj[key];

        if (value > highestCount) {
            highestCount = value;
            highestCountLetter = key;
        } else if (value === highestCount && key < highestCountLetter) {
            highestCount = value;
            highestCountLetter = key;
        }
    }
    return highestCountLetter
}


const sentence = "What is the most common character in this sentence";
console.log(mostCommonChar(sentence));