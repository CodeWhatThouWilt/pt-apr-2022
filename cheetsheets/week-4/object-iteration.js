// If you aren't a fan of the for in loop for objects you can
// either convert them to an array with .entries or you can 
// convert the keys to an array and then use them to select
// the values from the object. Here's some examples:

const obj = {
    this: 'is',
    a: "test",
    object: "for",
    an: "example"
};

// With entries
const entries = Object.entries(obj);
// Each key val is a sub array [key, value] of each entry in the object
entries.forEach(keyVal => {
    const key = keyVal[0] // selects the key in the subarray
    const value = keyVal[1] // selects the value in the subarray
});

// With key selection
const keys = Object.keys(obj);
keys.forEach(key => {
    const value = obj[key] // Uses the current key to key into the object and select the value
})
