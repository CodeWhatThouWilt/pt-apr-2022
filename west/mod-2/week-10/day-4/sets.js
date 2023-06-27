// Lookup in a set in O(1)

const arr = [1, 2, 3, 4, 5, 6];
const arrOne = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

const newSet = new Set(arr);

for (let i = 0; i < arr.length; i++) {
	newSet.has(i);
}

for (let i = 0; i < arr.length; i++) {
	arr.includes(i);
}
