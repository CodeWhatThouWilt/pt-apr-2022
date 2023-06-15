// Do not change this
class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val, currentNode = this.root) {
		const newNode = new TreeNode(val);

		if (!this.root) {
			this.root = newNode;
			return;
		}

		if (val < currentNode.val) {
			if (!currentNode.left) {
				currentNode.left = newNode;
			} else {
				this.insert(val, currentNode.left);
			}
		} else {
			if (!currentNode.right) {
				currentNode.right = newNode;
			} else {
				this.insert(val, currentNode.right);
			}
		}
	}

	search(val) {
		let currNode = this.root;

		while (currNode) {
			if (currNode.val === val) return true;

			if (val < currNode.val) {
				currNode = currNode.left;
			} else if (val > currNode.val) {
				currNode = currNode.right;
			}
		}
		return false;
	}

	preOrderTraversal(currentNode = this.root) {
		// root, left, right
		if (currentNode) {
			console.log(currentNode.val);
			this.preOrderTraversal(currentNode.left);
			this.preOrderTraversal(currentNode.right);
		}
	}

	inOrderTraversal(currentNode = this.root) {
		// left, root, right
		if (currentNode) {
			this.inOrderTraversal(currentNode.left);
			console.log(currentNode.val);
			this.inOrderTraversal(currentNode.right);
		}
	}

	postOrderTraversal(currentNode = this.root) {
		// left, right, root
		if (currentNode) {
			this.postOrderTraversal(currentNode.left);
			this.postOrderTraversal(currentNode.right);
			console.log(currentNode.val);
		}
	}

	// Breadth First Traversal - Iterative
	breadthFirstTraversal() {
		const queue = [this.root];

		while (queue.length) {
			const currNode = queue.shift();

			console.log(currNode.val);

			if (currNode.left) queue.push(currNode.left);
			if (currNode.right) queue.push(currNode.right);
		}
	}

	// Depth First Traversal - Iterative
	depthFirstTraversal() {
		const stack = [this.root];

		while (stack.length) {
			const currNode = stack.pop();

			console.log(currNode.val);

			if (currNode.left) stack.push(currNode.left);
			if (currNode.right) stack.push(currNode.right);
		}
	}
}

module.exports = { BinarySearchTree, TreeNode };
