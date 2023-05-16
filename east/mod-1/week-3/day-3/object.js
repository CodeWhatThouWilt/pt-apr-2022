// Objects

// bracket notation
// console.log(yake["name"]);
// yake["work"] = "App Academy";
// console.log(yake);
// yake["work"] = "App Academy evil twin company";
// console.log(yake);

// bracket notation with variables

// const variableNameThing = "work";
// yake[variableNameThing] = "App Academy";


// dot notation
// const yake = {
// 	name: "yake north",
// 	age: 30,
// 	dob: "08/02/1992",
// 	state: "Florida",
// };
// yake.work = 'App Academy evil twin company';
// console.log(yake);

// dot notation with variables 
// Doesn't exist we have to use bracket notation to use variables as keys


// Operator precedence, chaining methods / variables
// let a = b = 1;
// "hello my name is yake".split(" ").reverse().join(" ")


// for in loops for iterating objects


// for (let key in yake) {
//     const value = yake[key];
//     console.log(value);
//     // console.log(key);
// }


// Object values, object keys, object entries


// const value = Object.values(yake);
// const keys = Object.keys(yake);
// const entries = Object.entries(yake);
// console.log(entries);

// functions vs methods
const closeBreakOutRooms = () => {
	console.log("WHATS GOOOOOD YAAAALLLLL");
};

const yake = {
	name: "yake north",
	age: 30,
	dob: "08/02/1992",
	state: "Florida",
    
};

yake["closeRooms"] = () => {
    console.log("WHATS GOOD")
}

yake.closeRooms()






