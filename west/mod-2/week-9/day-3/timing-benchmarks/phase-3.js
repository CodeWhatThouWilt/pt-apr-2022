const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
	// console.time("addNums10");
	let arr = [];
	for (let i = 1; i <= 10; i++) {
		const start = Date.now();
		arr.push(addNums(i * increment));
		const end = Date.now();
		console.log(end - start);
	}
	// console.timeEnd("addNums10");
	return arr;
}

function addManyNums10Timing(increment) {
	// console.time("addManyNums10");
	let arr = [];

	for (let i = 1; i <= 10; i++) {
		const start = Date.now();
		arr.push(addManyNums(i * increment));
		const end = Date.now();
		console.log(end - start);
	}
	// console.time("addManyNums10");
	return arr;
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(20000);
