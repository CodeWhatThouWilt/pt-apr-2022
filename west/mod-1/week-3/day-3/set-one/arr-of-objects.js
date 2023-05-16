// In this practice, you will practice navigating objects that are nested within
// an array. Given the below array, write a function printNames that prints the
// name of every object in the array.

const users = [
    {
        name: "Gerald",
        age: 23,
        height: 68
    },
    {
        name: "Winnie",
        age: 35,
        height: 62
    },
    {
        name: "Peter",
        age: 61,
        height: 72
    }
]

// const printNames = users => {
//     // Write your solution here.
//     let str = "";

//     for (let i = 0; i < users.length; i++) {
//         const obj = users[i];
//         // str += obj.name + " "  // str = str + obj.name
//         str += obj["name"] + " "
//     }
//     console.log(str);
// }

const printNames = (users) => {
	// Write your solution here.
    let str = ""

	for (let index in users) {
        const obj = users[index]
        str += obj.name + " "
    }
    console.log(str);
};

printNames(users)                   // Gerald Winnie Peter