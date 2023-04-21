// countVowels(word), that takes in a string word 
// and returns the number of vowels in the word. 
// Vowels are the letters "a", "e", "i", "o", "u".


function countVowels(word) {
    // create variables for vowels
    // create for counting vowels
    // create a for loop, index = 0, while index < word.length, incremenet by one
    // see if vowels .includes our current iteration
    // increment count if in vowels
    // let vowels = 'aeiou'
    let count = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let index = 0; index < word.length; index++) {
        const currLetter = word[index]
        // console.log(currLetter)
        if (vowels.includes(currLetter)) {
            // console.log(currLetter)
            count++
        }
    }
    return count
};

countVowels("bootcamp")
countVowels("apple")
countVowels("pizza")