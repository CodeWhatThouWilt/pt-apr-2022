// Example one:
// const funcOne = () => {
//     console.log(1);
// }

// const funcTwo = () => {
//     console.log(2);
// }

// const funcThree = () => {
//     console.log(3);
// }

// setTimeout(funcOne, 1000);
// funcTwo();
// setTimeout(funcThree, 2000);

// Example two:
// const funcOne = () => {
//     console.log(1);
// }

// const funcTwo = () => {
//     console.log(2);
//     setTimeout(funcThree, 2000);
// }

// const funcThree = () => {
//     console.log(3);
// }

// setTimeout(funcOne, 3000);
// setTimeout(funcTwo, 2000); // by the time func two is started. func one has 1 second left

// Example three:
// const funcOne = () => {
// 	console.log(1);
// };

// const funcTwo = () => {
// 	console.log(2);
// };

// const funcThree = () => {
// 	console.log(3);
// };

// setTimeout(funcOne, 1000);
// setTimeout(funcTwo);
// funcThree();

// Example four:
const funcOne = () => {
	console.log(1);
};

const funcTwo = () => {
	console.log(2);
};

const funcThree = () => {
	console.log(3);
};

setTimeout(funcOne, 1000);
setTimeout(funcTwo, 1000);
setTimeout(funcThree, 2000);
