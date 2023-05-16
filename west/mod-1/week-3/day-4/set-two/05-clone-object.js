// Given obj below, use a combination of the spread and rest operator in a single
// statement to create a clone objClone that removes the green key-value pair
// and adds a yellow key with value pentagon.



// Hint: As a side effect, you will end up creating a green variable with value
// "hexagon".

const obj = {
    red: "circle",
    blue: "square",
    green: "hexagon"
}

// We spread the obj into a new object and add a new key:value
// pair into that object (yellow: hexagon)
// We then destructure the green value
// Anything left in the new object on the right then 
// gets destructured into objClone
const {green, ...objClone} = {...obj, yellow: "hexagon"}

console.log(objClone);          // { red: "circle", blue: "square", yellow: "pentagon" }
console.log(green);             // hexagon