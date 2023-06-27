const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
	if (rootNode.left) return findMinBST(rootNode.left);
	return rootNode.val;
}

function findMaxBST(rootNode) {
	if (rootNode.right) return findMaxBST(rootNode.right);
	return rootNode.val;
}

function findMinBT(rootNode) {
	let min = rootNode.val;

	if (rootNode.left) min = Math.min(min, findMinBT(rootNode.left));
	if (rootNode.right) min = Math.min(min, findMinBT(rootNode.right));

	return min;
}

function findMaxBT(rootNode) {
	let max = rootNode.val;

	if (rootNode.left) max = Math.max(max, findMaxBT(rootNode.left));
	if (rootNode.right) max = Math.max(max, findMaxBT(rootNode.right));

	return max;
}

function getHeight(rootNode) {
	if (!rootNode) return -1;
	if (!rootNode.left && !rootNode.right) return 0;
	const leftHeight = getHeight(rootNode.left);
	const rightHeight = getHeight(rootNode.right);
	return Math.max(leftHeight, rightHeight) + 1;
}

function balancedTree(rootNode) {
	if (!rootNode) return true;

	const diff = Math.abs(getHeight(rootNode.left) - getHeight(rootNode.right));

	if (diff > 1) return false;

	const left = balancedTree(rootNode.left);
	const right = balancedTree(rootNode.right);

	return left && right;
}

function countNodes(rootNode) {
	if (rootNode) {
		let count = 1;
		count += countNodes(rootNode.left);
		count += countNodes(rootNode.right);
		return count;
	}
	return 0;
}

function getParentNode(rootNode, target) {
	if (!rootNode) return undefined;
	if (rootNode.val === target) return null;

	if (rootNode.left && rootNode.left.val === target) return rootNode;
	if (rootNode.right && rootNode.right.val === target) return rootNode;

	let left = getParentNode(rootNode.left, target);
	if (left) return left;

	let right = getParentNode(rootNode.right, target);
	if (right) return right;

	return undefined;
}

function inOrderPredecessor(root, target) {
	if (!root) return null;

	if (root.val === target) {
		if (root.left) {
			let node = root.left;
			while (node.right) {
				node = node.right;
			}
			return node.val;
		} else {
			return null;
		}
	} else if (target < root.val) {
		return inOrderPredecessor(root.left, target);
	} else {
		let rightPredecessor = inOrderPredecessor(root.right, target);
		return rightPredecessor !== null ? rightPredecessor : root.val;
	}
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
