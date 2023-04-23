// Given the nested array of objects below, write a function, 
// getSecondObjValues, that prints the value of the second 
// object within each nested sub-array. If there is no 
// second object, print null.

const nestedArr = [
    [
        { a: 1 },
        { b: 2 }
    ],
    [
        { c: 3 },
        { d: 4 },
        { e: 5 }
    ],
    [
        { f: 6 }
    ],
    [
        { g: 7 },
        { h: 8 }
    ]
];

// const getSecondObjValues = arr => {

//     for (let i = 0; i < arr.length; i++) {
//         const subArr = arr[i];

//         // Check to see if subArr has more than one object
//         if (subArr.length > 1) {
// 			const secondObjKey = Object.keys(subArr[1])[0];
// 			console.log(subArr[1][secondObjKey]);
// 		} else {
// 			console.log(null);
// 		}
//     }
// }

getSecondObjValues(nestedArr);               // 2 4 null 8