function getNeighbors(row, col, graph) {
	const neighbors = [];
	// Check top
	if (row > 0 && graph[row - 1][col] === 1) {
		neighbors.push([row - 1, col]);
	}

	// Check bottom
	if (row < graph.length - 1 && graph[row + 1][col] === 1) {
		neighbors.push([row + 1, col]);
	}

	// Check left
	if (col > 0 && graph[row][col - 1] === 1) {
		neighbors.push([row, col - 1]);
	}
	// Check right
	if (col < graph[row].length - 1 && graph[row][col + 1] === 1) {
		neighbors.push([row, col + 1]);
	}
	// Return neighbors
	return neighbors;
	// Your code here
}

function islandSize(row, col, graph) {
	// Create a visited set to store visited nodes
	const visited = new Set();
	// Create a stack, put the starting node in the stack
	const stack = [];
	stack.push([row, col]);
	// Put the stringified starting node in visited
	visited.add(`${row}, ${col}`);
	// Initialize size to 0
	let size = 0;
	// While the stack is not empty,
	while (stack.length) {
		// Pop the first node
		const currNode = stack.pop();
		const currRow = currNode[0];
		const currCol = currNode[1];
		// DO THE THING (increment size by 1)
		if (graph[currRow][currCol] === 1) size++;

		const neighbors = getNeighbors(currRow, currCol, graph);

		neighbors.forEach((neighbor) => {
			const strCoords = `${neighbor[0]}, ${neighbor[1]}`;

			if (!visited.has(strCoords)) {
				visited.add(strCoords);
				stack.push(neighbor);
			}
		});
	}
	return size;
	// Then push all the UNVISITED neighbors on top of the stack
	// and mark them as visited
	// HINT: This is what your helper function `getNeighbors` is for
	// HINT: Remember, you're storing your visited nodes as strings!
	// return size
	// Your code here
}

module.exports = [getNeighbors, islandSize];
