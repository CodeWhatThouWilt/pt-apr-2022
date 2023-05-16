// Write a function removeEWords(sentence) that accepts a sentence string as 
// an arg. The function should return a new string, containing only the words 
// that don't have the letter "e" in them.

const removeEWords = function(str) {
    // 1. Split the string at " " which will give an array of words from the string
    // 2. For loop - start index at 0; run while index < sentence length; increment by one
    // 3. if statement - sentence[i] includes "e" or "E" OR sentence[i].toLowerCase() includes 'e'
    // 4. Splice to remove the word if the above is true
    // 5. Return our array with .join(" ")
    const sentence = str.split(" ");
    const arr = [];

    for (let i = 0; i < sentence.length; i++) {
        const word = sentence[i];
        if (!word.includes('e', 'E')) {
            // sentence.splice(i, 1); can't use splice due to modification of indexes
            arr.push(word);
        }
        // if(!word.toLowerCase().includes('e')) {
        //     arr.push(word);
        // }
    }
    return arr.join(' ')
}

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'