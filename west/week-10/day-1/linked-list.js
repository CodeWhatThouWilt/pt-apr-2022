// Linked list

// Doubly Linked List

// Nodes
class Node {
	constructor(val) {
		this.val = val;
		this.next = null; // Become an instance of the node class
	}
}

class LinkedList {
	constructor() {
		this.head = null; // Should become an instance of the node class
		this.length = 0;
	}

	addToHead(val) {
		const newNode = new Node(val);

		this.head = newNode;
	}

	print() {
		let currNode = this.head;

		while (currNode.next) {
			console.log(currNode);
			currNode = currNode.next;
		}
	}
}

const newList = new LinkedList();

const newNode = new Node(1);
newNode.next;
