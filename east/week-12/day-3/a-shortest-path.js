const adjList = {
	1: [2, 5],
	2: [1, 3, 5],
	3: [2, 4],
	4: [3, 5],
	5: [1, 2, 4],
	6: [],
};

const adj2 = {
	1: [2],
	2: [1, 3],
	3: [2],
};

function aShortestPath(start, end) {
	const queue = [];
	queue.push([start]);

	const visited = new Set();
	visited.add(start);

	while (queue.length) {
		const path = queue.shift();
		const currNode = path[path.length - 1];

		if (currNode === end) return path;

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
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
