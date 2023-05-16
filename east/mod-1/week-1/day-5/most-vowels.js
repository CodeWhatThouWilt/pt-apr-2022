// Write a function mostVowels that takes in a 
// sentence string and returns the word of the sentence 
// that contains the most vowels.

// const obj = { a: 0, e: 0, i: 100}
// console.log(obj.i)

function mostVowels(sentence) {
    let largestCount = 0;
    let largestCountWord = '';
    const splitSent = sentence.split(' ')

    for (let i = 0; i < splitSent.length; i++) {
        const word = splitSent[i]
        const currVowelCount = countVowels(word);

        if (currVowelCount > largestCount) {
            largestCount = currVowelCount;
            largestCountWord = word;
        }
    }
    return largestCountWord
}

function countVowels(word) {
    let count = 0;
    const vowels = "aeiou";

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])){
            count++
        }
    }
    return count;
}




console.log(mostVowels("what a wonderful life")); // "wonderful"