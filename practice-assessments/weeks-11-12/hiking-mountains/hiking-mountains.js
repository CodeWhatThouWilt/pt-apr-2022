function findPeak(matrix) {
	let highest = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let k = 0; k < matrix[0].length; k++) {
			if (matrix[i][k] > highest) {
				highest = matrix[i][k];
			}
		}
	}

	return highest;
}

function findStarts(matrix) {
	let starts = [];

	// Top Row
	for (let i = 0; i < matrix[0].length; i++) {
		if (matrix[0][i] == 0) {
			starts.push([0, i]);
		}
	}

	// Bottom Row
	for (let i = 0; i < matrix[matrix.length - 1].length; i++) {
		if (matrix[matrix.length - 1][i] == 0) {
			starts.push([matrix.length - 1, i]);
		}
	}

	// Left except first and last
	for (let i = 1; i < matrix.length - 1; i++) {
		if (matrix[i][0] == 0) {
			starts.push([i, 0]);
		}
	}

	// Right except first and last
	for (let i = 1; i < matrix.length - 1; i++) {
		if (matrix[i][matrix[0].length - 1] == 0) {
			starts.push([i, matrix[0].length - 1]);
		}
	}

	return starts;
}

function heightCheck(currHeight, otherHeight) {
	if (currHeight - otherHeight === -1) {
		return true;
	} else if (currHeight - otherHeight === 0) {
		return true;
	} else if (currHeight - otherHeight === 1) {
		return true;
	} else {
		return false;
	}
}

function findNeighbors(node, matrix) {
	// Don't forget to include diagonal neighbors!!!
	const neighbors = [];

	const row = node[0];
	const col = node[1];

	const currHeight = matrix[row][col];

	const checkTop = row > 0;
	const checkLeft = col > 0;
	const checkRight = col < matrix[row].length - 1;
	const checkBottom = row < matrix.length - 1;

	// Top left
	if (
		checkTop &&
		checkLeft &&
		heightCheck(currHeight, matrix[row - 1][col - 1])
	) {
		neighbors.push([row - 1, col - 1]);
	}
	// Top
	if (checkTop && heightCheck(currHeight, matrix[row - 1][col])) {
		neighbors.push([row - 1, col]);
	}

	// Top right
	if (
		checkTop &&
		checkRight &&
		heightCheck(currHeight, matrix[row - 1][col + 1])
	) {
		neighbors.push([row - 1, col + 1]);
	}

	// bottom left
	if (
		checkBottom &&
		checkLeft &&
		heightCheck(currHeight, matrix[row + 1][col - 1])
	) {
		neighbors.push([row + 1, col - 1]);
	}

	// bottom
	if (checkBottom && heightCheck(currHeight, matrix[row + 1][col])) {
		neighbors.push([row + 1, col]);
	}
	// bottom right
	if (
		checkBottom &&
		checkRight &&
		heightCheck(currHeight, matrix[row + 1][col + 1])
	) {
		neighbors.push([row + 1, col + 1]);
	}
	// left
	if (checkLeft && heightCheck(currHeight, matrix[row][col - 1])) {
		neighbors.push([row, col - 1]);
	}
	// right
	if (checkRight && heightCheck(currHeight, matrix[row][col + 1])) {
		neighbors.push([row, col + 1]);
	}

	return neighbors;
}

function pathTraversal(node, matrix, visited, peak) {
	const stack = [node];
	const startRow = node[0];
	const startCol = node[1];

	visited.add(`${startRow}, ${startCol}`);

	while (stack.length) {
		const currNode = stack.pop();
		const currRow = currNode[0];
		const currCol = currNode[1];

		// Do the thing
		if (matrix[currRow][currCol] === peak) return true;

		const neighbors = findNeighbors(currNode, matrix);

		neighbors.forEach((neighbor) => {
			const strCoords = `${neighbor[0]}, ${neighbor[1]}`;

			if (!visited.has(strCoords)) {
				visited.add(strCoords);
				stack.push(neighbor);
			}
		});
	}
	return false;
}

function identifyPath(mountain) {
	// Find the peak
	const peak = findPeak(mountain);
	// Find the start
	const starts = findStarts(mountain);

	const visited = new Set();

	// Traverse from the starts and try to get to the top
	for (let i = 0; i < starts.length; i++) {
		const start = starts[i];
		const canReachPeak = pathTraversal(start, mountain, visited, peak);

		if (canReachPeak) {
			return start;
		}
	}
	// Your code here
}

// Uncomment for local testing

// // Example 0
// const mountain_0 = [
// 	[1, 2, 4],
// 	[4, 5, 9],
// 	[5, 7, 6],
// ];

// console.log(findNeighbors([2, 0], mountain_0)); // <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'

// // Example 1
// const mountain_1 = [
// 	[1, 0, 1, 1],
// 	[2, 3, 2, 1],
// 	[0, 2, 4, 1],
// 	[3, 2, 3, 1],
// ];

// test_visited = new Set();
// console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- Expect 'true
// console.log(identifyPath(mountain_1)); // <- Expect '[ 0, 1 ]'

// // Example 2
// const mountain_2 = [
//         [0, 2, 1, 1],
//         [2, 2, 3, 1],
//         [1, 1, 1, 1],
//         [1, 0, 1, 1]
// ];

// console.log(identifyPath(mountain_2)) // <- Expect '[ 3, 1 ]'

// // Example 3
// const mountain_3 = [
//         [0, 1, 2, 0],
//         [5, 1, 3, 2],
//         [4, 1, 2, 1],
//         [3, 4, 3, 1]
// ];

// console.log(identifyPath(mountain_3)) // <- Expect '[ 0, 0 ]'

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyPath, findNeighbors, pathTraversal];
