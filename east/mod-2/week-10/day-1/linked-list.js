// Single linked lists

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SingleLinkedList {
	constructor() {
		this.head = null; // Should become an instance of the node class
		this.tail = null; // Should become an instance of the node class
		this.length = 0;
	}

	addToHead(val) {
		const newNode = new Node(val);
		this.head = newNode;
	}

	traverse() {
		if (!this.head) {
			return;
		}

		let currNode = this.head;

		while (currNode.next) {
			currNode = currNode.next;
		}
	}
}
