// Write a function sameCharCollapse that takes in a string and returns a 
// collapsed version of the string. To collapse the string, we repeatedly 
// delete 2 adjacent characters that are the same until there are no such 
// adjacent characters. If there are multiple pairs that can be collapsed, 
// delete the leftmost pair. For example, we take the following steps to collapse 
// "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy

const sameCharCollapse = function(string) {
    // set flag for while loop
    let looping = true; 
    // create tracking variable for modified string
    let newString = string

    // start while loop continues until all modifications made
    while(looping) {
        // set to false so while loop can end incase no mods need to be made
        looping = false;
        // loop through our string.length - 1 because we track the next letter
        for (let i = 0; i < newString.length - 1; i++) {
            // select curr and next characters
            const currChar = newString[i];
            const nextChar = newString[i + 1];

            // see if curr and next chars are the same
            if (currChar === nextChar) {
                // grab all of the string leading up to current character
                const first = newString.slice(0, i);
                // grab all of the string after next character
                const second = newString.slice(i + 2);
                // change new string so characters are removed
                newString = first + second
                // looping set back to true incase we need to do more mods
                looping = true;
            }
        }
    }
    // finally return new string after mods
    return newString
}


console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv