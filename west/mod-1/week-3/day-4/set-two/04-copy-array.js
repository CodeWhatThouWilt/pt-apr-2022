// Given the array, arr, and object, obj, use rest and spread to clone them
// into arrRest/arrSpread and objRest/objSpread respectively.

const arr = [1, "two", "3"];

const obj = {
    red: "circle",
    blue: "square",
    green: "hexagon"
}

// Write your code here.
const [...arrRest] = arr;
const arrSpread = [...arr];

const {...objRest} = obj;
const objSpread = {...obj};

console.log(arrRest);           // [1, "two", "3"]
console.log(arrSpread);         // [1, "two", "3"]

console.log(objRest);           // { red: "circle", blue: "square", green: "hexagon" }
console.log(objSpread);         // { red: "circle", blue: "square", green: "hexagon" }
