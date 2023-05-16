// Example 1
// const countup = (num) => {

// 	const intervalFunc = () => {
// 		console.log(num);
// 		num++;
// 		if (num === 10) {
// 			clearInterval(interval);
// 		}
// 	};

// 	const interval = setInterval(intervalFunc, 2000);

// }

// countup(1);

// Example 2
const funcOne = () => {
	let flag = true;
	console.log(1);
	
	while (flag) {
		setTimeout(() => {
			flag = false;
		}, 5000);
	}
	console.log(2)
};

const funcWith3 = () => {
	console.log(3)
}

setTimeout(funcWith3, 2000);
funcOne();