function shiftTest(arr) {
	const n = arr.length;

	for (let i = 0; i < n; i++) {
		arr.shift();
	}

	return arr;
}

for (let i = 20000; i < 21000; i++) {
	let arr = [];

	for (let j = 0; j < i; j++) {
		arr.push(j);
	}

	const start = Date.now();
	shiftTest(arr);
	const end = Date.now();
	console.log(end - start);
}
