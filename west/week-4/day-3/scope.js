// Global scope
let testVar = "testing...";
const otherVar = "other";
globalVar = 'this is global';


// Local scope (function scope)
const testFunc = () => {
    // Global scope will not have access to this variable
    const newVar = 'this is a var at local scope';
}

const arr = [1,2,3,4,5];
arr.forEach(ele => {
    // Inside callback function is still local scope / function scope
    const testVar = 'this is local / function scope';
});
// forEach, reduce, filter and map, find variables that exist inside callback function
// are function scoped


// Block scope
if (true) {
    const blockScoped = 'this is in block scope';
}

for (let i = 0; i < 20; i++) {
    const otherBlock = 'this is block scoped as well';
}

// for in / for of loops are block scope
// while loops are also block scope


// Combining all scopes

const globalVariable = 'this is a global';

const funcHere = () => {
    // Everything in this scope has access to global variables
    // Global variables do not have access to this scope
    const funcScope = 'this is function scoped';

    if (true) {
        //Everything in this has access to global and function variables
        // Global and function variables do not have access to this scope
        // ^^^ Unless we use var :(
        const blockScoped ='this is block scope'
    }

    for (let i = 0; i < 10; i++) {
        // Has access to all global and function variables does not have 
        // access to our block scope above
        const otherBlockedScope = 'this is a new block scope'
    }
}


// Lexical scope / inner functions
const addFunc = (num) => {

    return (otherNum) => {
        return num + otherNum
    }

};


const func = addFunc(5)
console.log(func(10));
console.log(func(30));