// Breadth First

function breadthFirstTraversal(start) {
	// Breadth first uses a queue data structure
	const queue = [start];

	// Visited keeps track of visited and soon to be visited nodes. It prevents us from visiting
	// any node more than once
	const visited = new Set(queue);

	// While the queue still has nodes waiting to be traversed
	while (queue.length) {
		// Get a node from the queue
		const currNode = queue.shift();

		// Do the thing (visitation) - here we perform some action while we're at the node
		console.log(currNode);

		// Get the neighbors of the node, when working with an adjacency list you key into the object
		const neighbors = adjList[currNode];

		// Iterate through each one of the neighboring nodes
		neighbors.forEach((neighbor) => {
			// See if we have visited the node before
			if (!visited.has(neighbor)) {
				// Add the node to the queue so we can traverse it later
				queue.push(neighbor);
				// Add the node to the visited so we can't add it to the queue twice incase
				// we run into it twice
				visited.add(neighbor);
			}
		});
	}
}

// Depth First

function depthFirstTraversal(start) {
	// Breadth first uses a stack data structure
	const stack = [start];

	// Visited keeps track of visited and soon to be visited nodes. It prevents us from visiting
	// any node more than once
	const visited = new Set(stack);

	// While the stack still has nodes waiting to be traversed
	while (stack.length) {
		// Get a node from the stack
		const currNode = stack.pop();

		// Do the thing (visitation) - here we perform some action while we're at the node
		console.log(currNode);

		// Get the neighbors of the node, when working with an adjacency list you key into the object
		const neighbors = adjList[currNode];

		// Iterate through each one of the neighboring nodes
		neighbors.forEach((neighbor) => {
			// See if we have visited the node before
			if (!visited.has(neighbor)) {
				// Add the node to the stack so we can traverse it later
				stack.push(neighbor);
				// Add the node to the visited so we can't add it to the stack twice incase
				// we run into it twice
				visited.add(neighbor);
			}
		});
	}
}
