// var (re-assignable / function scope / undefined hoist)
console.log(testVar);

var testVar = 'this will not print'


// const (not re-assignable / block scope)

// let (re-assignable / block scope)
console.log(helloVar);
let helloVar = 'whats goooood'


// const testFunc = () => {
// 	const whatsGood = "hey";

// 	if (true) {
// 		console.log("run some code");
// 	}

// 	const arr = [1, 2, 3, 4, 4, 5];

// 	for (let index = 0; index < array.length; index++) {
// 		const element = array[index];
// 		const arr = [3, 4, 5, 6];

// 	}

// };

// Global variables
// const testFunc = () => {

// 	if (true) {
// 		const array = [1,2,4,5,6]
// 		for (let index = 0; index < array.length; index++) {
// 			const element = array[index];
			
// 			if (true) {
// 				thisIsGlobal = 'GLOBAL VARIABLE'
// 			}
// 		}
// 	}
// }
// testFunc()
// console.log(thisIsGlobal)
