// Write a function reverseSentence(sentence) that takes in a 
// sentence as an arg. The function should return a new sentence where 
// the order of the words is reversed. Note that you should reverse the 
// order among words, not the order among characters.

// const reverseSentence = function(str) {
//     // 1. Create a new variable which is the str split into an array
//     // 2. Create a new variable which is an empty array
//     // 3. Push into the empty array in opposite direction: 
//     // backwards for loop and use push / regular loop and unshift into it
//     // 4. Join the array with " " and return it

//     const sentence = str.split(' ');
//     const arr = [];
//     // for (let i = sentence.length - 1; i >= 0; i--) {
//     //     const word = sentence[i];
//     //     arr.push(word);
//     // }
//     for (let i = 0; i < sentence.length; i++) {
//         const word = sentence[i];
//         arr.unshift(word);
//         console.log(arr);
//     }
//     return arr.join(" ")
// }

const reverseSentence = function(str) {
    return str.split(' ').reverse().join(' ')
}


console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'