// Adding to an object
const obj = {};

obj.firstName = 'Yake';
obj["lastName"] = 'North';

// Using variables 
// (the key will be the data value, not the name of the variable)
const num = "age";
obj[num] = 30;

// The above will result in the following object:
// {
//     firstName: 'Yake',
//     lastName: 'North',
//     age: 30
// }


// Deleting from an object
const objOne = {
    this: "is an object",
    removeMe: "delete me",
    doomedKey: "im doomed for deletion"
};

delete objOne.this;
delete objOne["removeMe"];

// Not when using a variable it will attempt to delete the key that
// matches the variable's underlying data and not variable name
const deleteVar = 'doomedKey';
delete obj[deleteVar];

// The above would result in an empty object since we deleted all
// key value pairs


// Overwriting values in an object. This is the same as adding key
// value pairs. So its important to understand that when adding a
// key value pair you could potentially be overwriting a value that
// already exists at that key

// Getting an array of all keys, values and keys / values
const objTwo = {
    keyOne: "valOne",
    keyTwo: "valTwo",
    keyThree: "valThree"
};
const values = Object.values(objTwo); // ["valOne", "valTwo", "valThree"]
const keys = Object.keys(objTwo); // ["keyOne", "keyTwo", "keyThree"]
const entries = Object.entries(objTwo) // [["keyOne", "valOne"], ["keyTwo", "valTwo"], ["keyThree", "valThree"]]


// Looping through objects
const objThree = {
	keyOne: "valOne",
	keyTwo: "valTwo",
	keyThree: "valThree",
};

for (let key in obj) {
    console.log(key) // will log the key for the current iteration
    const value = obj[key] // will give value for each key in object
}