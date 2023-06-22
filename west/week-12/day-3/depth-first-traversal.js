// Write a function called printDepthFirst that will traverse the given graph depth-first,
// printing each node when visited exactly once, on a newline.

const adjList = {
	1: [2, 5],
	2: [1, 3, 5],
	3: [2, 4],
	4: [3, 5, 6],
	5: [1, 2, 4],
	6: [4],
};

function printDepthFirst(start) {
	const stack = [start]; // Keeps track of nodes to visit

	const visited = new Set(stack); // Keeps track of visited nodes and nodes to be visited

	while (stack.length) {
		const currNode = stack.pop();

		// Do the thing (visitation)
		console.log(currNode);

		const neighbors = adjList[currNode];

		neighbors.forEach((neighbor) => {
			if (!visited.has(neighbor)) {
				stack.push(neighbor);
				visited.add(neighbor);
			}
		});
	}
}

console.log("First Test:");
printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
// One possible solution:  3, 4, 6, 5, 1, 2
console.log("Second Test:");
printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
// One possible solution:  6, 4, 5, 2, 1, 3
console.log("Third Test:");
printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
// One possible solution:  4, 6, 5, 2, 1, 3
