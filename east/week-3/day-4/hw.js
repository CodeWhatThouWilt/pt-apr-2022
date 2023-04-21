// Rest / accepting unlimited params
// const addAllNums = (...nums) => {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//     }
//     return sum;
//     // return num1 + num2 + num3 + num4;
// };
// console.log(addAllNums(1,2));

// Spread operators with arrays
// const arr = [1,2,3,4];
// const arr1 = [5,6,7,8];
// const arr2 = [...arr, ...arr1];
// console.log(arr2);

// const arr = [1,2,3,4];
// const arr1 = [...arr, 5,6,7,8];
// console.log(arr1);

// Spread operators with objects

// const yakeBio = {
//     name: "yake north",
//     age: "30",
//     state: "Florida"
// }

// const yakeWork = {
//     company: "App Academy",
//     position: "Cohort Instructor"
// }

// const yake = {...yakeBio, ...yakeWork}
// console.log(yake);


// Destructuring
// const arr = ["yake", "app academy", "30"];
// // age name work
// const [name, work, age] = arr;
// console.log(work, name, age);

const yake = {
    name: "yake north",
    age: "30",
    state: "Florida",
    company: "App Academy",
    position: "Cohort Instructor"
}

// const logObject = ({ name, position}) => {
//     console.log(name, position)
// }

// logObject(yake);

// const { age: thirty } = yake;
// console.log(thirty);