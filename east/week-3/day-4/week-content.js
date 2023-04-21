// Monday - Paired programming
// Driver that types the code
// Navigator that discusses the direction of the code and the ideas to execute

// Tuesday - Arrow functions
const addNums = (num1, num2) => {
    return num1, num2
}
const multiplyNums = (num1, num2) => num1 * num2;



// Wednesday - Objects / object iterations 
const obj = {};
// Add to objects
obj.newKey = "Hey I'm the new key";
obj["otherNewKey"] = "I'm the other new key";

const thirdKey = "thirdKeyHere";
obj[thirdKey] = "I'm the third key" // Add a new key into the object as thirdKeyHere
// console.log(obj)
// ! If the key already exists the above methods will overwrite the current
// ! With the new one

// Delete from object
delete obj.newKey;
delete obj["otherNewKey"];
delete obj[thirdKey];

// console.log(obj)

const yake = {
    name: "yake north",
    age: 30,
    state: "Florida"
}

// ! Cannot iterate through objects with regular for loop because objects have no .length

for (let key in yake) {
    // key will represent each key in our object
    const value = yake[key]; // select a value from the object using our key
    console.log(key, " - ", value);
}

// Thursday Rest / Spread / Destructuring

// Can destructure from an array and assign each index to a variable
const arr = [1,2,3,4];
const [one, two, three, four] = arr;

// Can destructure from an object by grabbing the keys
const newObj = {
    newKey: "new key here",
    otherKey: "other key here"
}

const { newKey, otherKey } = newObj

// Can alias our destructured object variables
const { newKey: notNewKey, otherKey: otherOtherKey } = newObj


// Take in as many parameters to a function as we want using rest
const newFunct = (...nums) => {
    console.log(nums); // an array of all the parameters
}

// We can insert one array into another using spread operator
const arr1 = [1,2,3,4];
const arr2 = [...arr1, 5,6,7,8]
console.log(arr2) // give us an of [1,2,3,4,5,6,7,8]
