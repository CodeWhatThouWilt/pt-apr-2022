// Write a function breakDownObj(obj) that takes in an object as a parameter
// and returns an array containing:  all the keys from the object and all the
// values of the object.

let object1 = { name: "Rupert", age: 5, speak: "Meow" };
let object2 = { location: "NY", borough: "Brooklyn" };

const breakDownObj = (obj) => {
	// Your code here
	const keys = Object.keys(obj);
    const values = Object.values(obj);
    return [...keys, ...values];
};

console.log(breakDownObj(object1)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]
console.log(breakDownObj(object2)); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
