// Given the object below, delete the key-value pair such that "{}" is printed
// when printing the object.

const obj = {
    first: "1"
}

// Write your solution here.
// Do deletion here

// delete obj.first;
delete obj["first"];

console.log(obj);               // {}