// countVowels(word), that takes in a string word 
// and returns the number of vowels in the word. 
// Vowels are the letters "a", "e", "i", "o", "u".

// set an array with our vowels / string
// create a counter variable
// for loop, iterate through our word
// use indexOf / includes to see if it's a vowel
// return count


function countVowels(word) {
    // const vowels = ['a', 'e', 'i', 'o', 'u']
    const vowels = 'aeiou'
    let counter = 0

    for (let i = 0; i < word.length; i++) {
        const checkVowel = vowels.includes(word[i].toLowerCase());
        // console.log('LOWERCASE', word[i].toLowerCase())
        // console.log("UPPERCASE", word[i]);
        if (checkVowel) {
            counter++
        }
        // if (vowels.indexOf(word[i]) !== -1) {
		// 	counter++;
		// }
    }
    return counter
};

countVowels("bOotcAmp");
// console.log(countVowels("bOotcAmp")); // => 3
// console.log(countVowels("bootcamp")); // => 3
// console.log(countVowels("apple")); // => 2
// console.log(countVowels("pizza")); // => 2