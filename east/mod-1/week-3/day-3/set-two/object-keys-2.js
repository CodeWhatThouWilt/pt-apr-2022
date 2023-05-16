// Given the object below, use Object.keys() to iterate through the object and
// print the value if there are 3 or more "e"s shared between the key and value.

// Write your solution here.

// Should print "hexagon"

// 1. Use Object.keys on obj to create an array of keys
// 2. For to loop through each one of those keys
// 3. Create a counter variable to keep track of "e" count
// 4. Loop through each one of the letters in our current key
// 5. Create a variable which selects the value related to current key
// 6. Loop through each one of the letter in our current value
// 7. In both loops check if current letter is e and increment count
// 8. console.log our count if above or equal to 3

// const obj = {
// 	red: "circle",
// 	blue: "square",
// 	green: "hexagon",
// };

// ! Lengthy solution. More simple solution below.
// const arr = Object.keys(obj); // ["red", "blue", "green"];

// for (let i = 0; i< arr.length; i++) {
//     const currKey = arr[i];
//     const value = obj[currKey]
//     let count = 0;

//     for (let j = 0; j < currKey.length; j++) {
//         const currKeyLetter = currKey[j];

//         if(currKeyLetter === 'e') {
//             count++;
//         }
//     }

//     for (let j = 0; j < value.length; j++) {
//         const currValLetter = value[j];

//         if (currValLetter === 'e') {
//             count++;
//         }
//     }

//     if (count >= 3) {
//         console.log(value);
//     }
// }


// To test solution above comment out everything below this line
const obj = {
	red: "circle",
	blue: "square",
	green: "hexagon",
};

const arr = Object.keys(obj); // ["red", "blue", "green"];

for (let i = 0; i < arr.length; i++) {
	const currKey = arr[i];
	const value = obj[currKey];
	const keyValString = currKey + value;
	let count = 0;

	for (let j = 0; j < keyValString.length; j++) {
		const letter = keyValString[j];
        
		if (letter === "e") {
			count++;
		}
	}

	if (count >= 3) {
		console.log(value);
	}
}
