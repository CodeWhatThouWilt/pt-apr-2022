const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
	while (rootNode.left) {
		rootNode = rootNode.left;
	}
	return rootNode.val;
}

function findMaxBST(rootNode) {
	while (rootNode.right) {
		rootNode = rootNode.right;
	}
	return rootNode.val;
}

function findMinBT(rootNode) {
	const stack = [rootNode];

	let small = rootNode.val;

	while (stack.length) {
		const currNode = stack.pop();

		if (currNode.val < small) small = currNode.val;

		if (currNode.left) stack.push(currNode.left);
		if (currNode.right) stack.push(currNode.right);
	}
	return small;
}

function findMaxBT(rootNode) {
	const stack = [rootNode];

	let max = rootNode.val;

	while (stack.length) {
		const currNode = stack.pop();

		if (currNode.val > max) max = currNode.val;

		if (currNode.left) stack.push(currNode.left);
		if (currNode.right) stack.push(currNode.right);
	}
	return max;
}

function getHeight(rootNode) {
	if (!rootNode) return -1;

	let queue = [rootNode];

	let height = -1;

	while (queue.length) {
		let nodeCount = queue.length;
		height++;

		while (nodeCount > 0) {
			let currNode = queue.shift();
			if (currNode.left) queue.push(currNode.left);
			if (currNode.right) queue.push(currNode.right);
			nodeCount--;
		}
	}
	return height;
}

function balancedTree(rootNode) {
	const queue = [rootNode];

	while (queue.length) {
		const currNode = queue.shift();

		const heightDiff = Math.abs(
			getHeight(currNode.left) - getHeight(currNode.right)
		);

		if (heightDiff <= 1) {
			if (currNode.left) queue.push(currNode.left);
			if (currNode.right) queue.push(currNode.right);
		} else {
			return false;
		}
	}
	return true;
}

function countNodes(rootNode) {
	const stack = [rootNode];
	let count = 0;

	while (stack.length) {
		const currNode = stack.pop();

		count++;

		if (currNode.left) stack.push(currNode.left);
		if (currNode.right) stack.push(currNode.right);
	}
	return count;
}

function getParentNode(rootNode, target) {
	if (rootNode.val === target) return null;
	const queue = [rootNode];

	while (queue.length) {
		const currNode = queue.shift();

		if (currNode.left) {
			if (currNode.left.val === target) return currNode;
			queue.push(currNode.left);
		}

		if (currNode.right) {
			if (currNode.right.val === target) return currNode;
			queue.push(currNode.right);
		}
	}
}

function inOrderPredecessor(root, target) {
	let predecessor = null;
	while (root !== null) {
		if (root.val > target) {
			root = root.left;
		} else if (root.val < target) {
			predecessor = root;
			root = root.right;
		} else {
			if (root.left !== null) {
				let temp = root.left;
				while (temp.right !== null) {
					temp = temp.right;
				}
				predecessor = temp;
			}
			break;
		}
	}
	return predecessor !== null ? predecessor.val : null;
}

function deleteNodeBST(rootNode, target) {
	// Do a traversal to find the node. Keep track of the parent
	let parentNode = getParentNode(rootNode, target);

	// Undefined if the target cannot be found
	if (parentNode === undefined) return undefined;

	// Set target based on parent
	let targetNode;
	let isLeftChild = false;
	if (!parentNode) {
		targetNode = rootNode;
	} else if (parentNode.left && parentNode.left.val === target) {
		targetNode = parentNode.left;
		isLeftChild = true;
	} else if (parentNode.right && parentNode.right.val === target) {
		targetNode = parentNode.right;
	} else {
		throw Error("Algorithm Error: This should never happen");
	}

	// Case 0: Zero children and no parent:
	//   return null
	if (!parentNode && !targetNode.left && !targetNode.right) return null;
	// Case 1: Zero children:
	//   set the parent that points to it to null
	else if (!targetNode.left && !targetNode.right) {
		if (isLeftChild) parentNode.left = null;
		else parentNode.right = null;
	}

	// Case 2: Two children:
	//   set the value to its in-order predecessor, then delete the predecessor
	else if (targetNode.left && targetNode.right) {
		let predecessor = inOrderPredecessor(rootNode, target);
		deleteNodeBST(rootNode, predecessor);
		targetNode.val = predecessor;
	}

	// Case 3: One child:
	//   Make the parent point to the child
	else {
		if (targetNode.left) {
			if (isLeftChild) parentNode.left = targetNode.left;
			else parentNode.right = targetNode.left;
		} else {
			if (isLeftChild) parentNode.left = targetNode.right;
			else parentNode.right = targetNode.right;
		}
	}
}

module.exports = {
	findMinBST,
	findMaxBST,
	findMinBT,
	findMaxBT,
	getHeight,
	countNodes,
	balancedTree,
	getParentNode,
	inOrderPredecessor,
	deleteNodeBST,
};
