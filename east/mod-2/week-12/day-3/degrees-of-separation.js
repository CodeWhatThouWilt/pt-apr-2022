const adjList = {
	1: [2, 5],
	2: [1, 3, 5],
	3: [2, 4],
	4: [3, 5],
	5: [1, 2, 4],
	6: [],
};

function degreesOfSeparation(start, end) {
	const queue = [];
	queue.push([start]);

	const visited = new Set();
	visited.add(start);

	while (queue.length) {
		const path = queue.shift();
		const currNode = path[path.length - 1];

		if (currNode === end) return path.length - 1;

		const neighbors = adjList[currNode];

		neighbors.forEach((neighbor) => {
			if (!visited.has(neighbor)) {
				visited.add(neighbor);
				queue.push([...path, neighbor]);
			}
		});
	}
	return false;
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
