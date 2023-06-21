// Write a function called printBreadthFirst that will traverse the given graph breadth-first,
// printing each node when visited exactly once, on a newline.

const adjList = {
	1: [2, 5],
	2: [1, 3, 5],
	3: [2, 4],
	4: [3, 5, 6],
	5: [1, 2, 4],
	6: [4],
};

function printBreadthFirst(start) {
	const queue = []; // queue allows us to do breadth first traversals
	queue.push(start);

	const visited = new Set(); // allows us to keep track of visited / soon to be visited nodes
	visited.add(start);

	while (queue.length) {
		// Select current node from queue
		const currNode = queue.shift();

		// Do the thing (visitation)
		console.log(currNode);

		// Gets the array that corresponds with the current node from the adjacency list
		const neighbors = adjList[currNode];

		neighbors.forEach((neighbor) => {
			if (!visited.has(neighbor)) {
				queue.push(neighbor);
				visited.add(neighbor);
			}
		});
	}
}

console.log("First Test:");
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// One possible solution:  3, 2, 4, 1, 5, 6
console.log("Second Test:");
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// One possible solution:  6, 4, 3, 5, 2, 1
console.log("Third Test:");
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
// One possible solution:  4, 3, 5, 6, 2, 1
