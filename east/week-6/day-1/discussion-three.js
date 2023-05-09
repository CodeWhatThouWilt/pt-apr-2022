// Example 1:
// const funcOne = () => {
//     console.log(1);
// }

// const funcTwo = () => {
//     console.log(2);
// }

// const funcThree = () => {
//     console.log(3);
// }

// setTimeout(funcOne, 2000);
// setTimeout(funcTwo);
// setTimeout(funcThree, 1000);

// Example 2:
// const funcOne = () => {
// 	console.log(1);
// };

// const funcTwo = () => {
// 	console.log(2);
// };

// const funcThree = () => {
// 	console.log(3);
//     setTimeout(funcTwo, 1000);
// };

// setTimeout(funcOne, 2000);
// setTimeout(funcThree, 1000);

// Example 3:
// const funcOne = () => {
// 	console.log(1);
// };

// const funcTwo = () => {
// 	console.log(2);
//     setTimeout(funcThree, 3000);
// };

// const funcThree = () => {
// 	console.log(3);
// };

// setTimeout(funcOne, 2000);
// funcTwo();

const countup = (num1, num2) => {
	const intervalFunc = () => {
		num1++;
		num2++;
		console.log(num1, num2);
        if (num1 === 10 || num2 === 11) {
            clearInterval(interval);
        }
	};
	const interval = setInterval(intervalFunc, 2000);

	return interval;
};

countup(4, 5);
