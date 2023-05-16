// Monday - Pair programming
// Driver - person that types needs to know syntax
// Navigator - person that guides the session and provides solutions

// Tuesday - Arrow Functions
const testFunc = (num1, num2) => {
    return num1 + num2;
}

// Implicit return when {} not included
const multiplyNums = (num1, num2) => num1 * num2;


// Wednesday - Objects and iterating objects

// Add values to an object
const obj = {};

obj.name = "name here";
obj["otherName"] = "other name here";

const addThisKey = "otherOtherName";
obj[addThisKey] = "other other name here";
// console.log(obj)

// ! Doing the above assignments will overwrite values if the
// ! key already exists

// Iterating through objects
// ! Cannot iterate through an object with a regular for loop
const obj1 = {
    val: "hey",
    otherVal: "hi",
    otherOtherVal: "hello"
};

for (let key in obj1) {
    // key represents each key in the object
    // grab a value from our object using the key
    const value = obj1[key];
    // console.log(key, " - ", value);
}


// Thursday - Rest, spread, destructuring

// Rest in params
const addNums = (...nums) => {
    // incoming nums will be an array
    let sum = 0;
    // console.log(nums)
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        sum += num;
    }
    return sum;
}

addNums(1,2,3,4,5)

// spread operator arrays
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];
const arr3 = [...arr1, ...arr2]
// console.log(arr3) // [1,2,3,4,5,6,7,8]

// spread operator objects
const object1 = {
    name: "name here"
}

const object2 = {
    otherName: "other name here"
}

const object3 = {...object1, ...object2}

// Destructuring

// Destructure objects using the keys
const yake = {
    name: "yake north",
    age: "30",
    dob: "08/02/1992",
    nestedObj: {
        stuff: "this is stuff"
    }
}

const { name, dob, nestedObj } = yake;
const { stuff } = nestedObj;
// console.log(name, dob) // yake north 08/02/1992
// console.log(nestedObj);


// Destructuring arrays
const array1 = [[1,2,3], "words here", 1,2,3, { stuffInArr: "obj stuff" }];
const [nestedArr, str, one, two, three, objInArr] = array1; 
console.log(objInArr);

