// If the word starts with a vowel remove yay from the end
// Remove ay from the end.

// Regular pig latin - take all cons leading up to a vow move
// that cluster to the back

const undoPigLatin = function(word) {
    const firstCharCode = word.charCodeAt(0);
    
    if (firstCharCode >= 65 && firstCharCode <= 90) {
        return word.slice(0, -3);
    }

    if (!word.endsWith('ay')) {
        return word;
    }

    const newWord = word.slice(0, -2);

    for (let i = newWord.length - 1; i >= 0; i--) {
        const charCode = newWord.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            const first = newWord.slice(i);
            const second = newWord.slice(0, i);
            return first + second;
        }

    }
}


console.log(undoPigLatin("Appleyay")); //=> "apple"
console.log(undoPigLatin("Eatyay")); //=> "dat"
console.log(undoPigLatin("ananaBay")); //=> "banana"
console.log(undoPigLatin("ashTray")); //=> "trash"