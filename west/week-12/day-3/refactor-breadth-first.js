// The output of your printBreadthFirst function is a bit messy.
// Copy it here, and refactor it so that instead of printing each node on a newline,
// the function adds each node to an array, then prints that array at the end.

const adjList = {
	1: [2, 5],
	2: [1, 3, 5],
	3: [2, 4],
	4: [3, 5, 6],
	5: [1, 2, 4],
	6: [4],
};

function printBreadthFirst(start) {
	const queue = []; // Keeps track of all the nodes we need to visit
	queue.push(start);

	const visited = new Set(); // Keeps track of past visitations / future visitations
	visited.add(start);

	const retArr = [];

	while (queue.length) {
		const currNode = queue.shift(); // Get a node from the front of the queue

		// Do the thing (visitation)
		retArr.push(currNode);

		const neighbors = adjList[currNode];

		neighbors.forEach((neighbor) => {
			if (!visited.has(neighbor)) {
				queue.push(neighbor);
				visited.add(neighbor);
			}
		});
	}
	console.log(retArr);
	// console.log([...visited]);
}

console.log("First Test:");
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// One possible solution:  [ 3, 2, 4, 1, 5, 6 ]
console.log("Second Test:");
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// One possible solution:  [ 6, 4, 3, 5, 2, 1 ]
console.log("Third Test:");
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
// One possible solution:  [ 4, 3, 5, 6, 2, 1 ]
