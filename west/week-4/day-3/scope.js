// Global scope
// const testVar = 'testing...';
// let num = 5;
// str = "string here";


// Local scope (function scope)
// const testFunc = (num) => {
//     const testing = 'testing...';
//     let num = 2;
// }


// Block scope
// if (true) {
//     let num = 20;
// }
// const array = [1,2,3,4,5]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// for (let key in obj) {
//     const value = obj[key];
// }
// while (true) {
//     const varThing = 20;
// }


// Combining all scopes

// let num = 5;

// const testFunc = () => {
//     // everything at this scope has access to global
//     let count;
//     if (true) {
//         // everything in this scope has access to local and global
//         count = 15;
//     }
//     console.log(count);

//     for (let index = 0; index < array.length; index++) {
// 		// everything in this scope has access to local and global but not the other block scope
// 	}
// }

// Lexical scope / inner functions

const testFunc = (num) => {
    let count = num;
    console.log('outer func ran')
    const innerFunc = () => {
        console.log('inner func ran')
        count++;
        return count;
    }
    return innerFunc;
};

const func = testFunc(0)
// console.log(func);
console.log(func());
console.log(func());
console.log(func());
// console.log(func());
// const otherFunc = testFunc(0);
// console.log(otherFunc());
