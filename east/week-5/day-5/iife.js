// Immediately-Invoked Function Expression (aka IIFE)

// What is an IIFE
// const arr = [1,2,3,4,5];

// const addNums = (function (arr) {
//     let sum = 0;
//     arr.forEach(num => {
//         sum += num;
//     });
//     return sum;
// })(arr);

// const addNums = ((arr) => {
// 	let sum = 0;
// 	arr.forEach((num) => {
// 		sum += num;
// 	});
// 	return sum;
// })(arr);

// (function() {
//     console.log("Hey Im in an iife")
// })()

// (() => console.log("Hey this is an arrow function iife"))()


// Why use an IIFE
// Primary usage tends to be keeping global variable namespace clean



// Hoisting functions
// Regular function syntax hoists but function expression syntax does not
// testFunc();

// function testFunc() {
//     console.log("This is a test for hoisting")
// }

// testFunc();
// const testFunc = function() {
//     console.log("This is a test for hoisting");
// }


// let hello = 'wassup';
// hello = function() {
//     console.log("Dood Im a function not a variable get outta here with all that")
// }

hello();
function hello() {
    console.log(
		"Dood Im a function not a variable get outta here with all that"
	);
}

function hello() {
	console.log(
		"This is weird"
	);
}