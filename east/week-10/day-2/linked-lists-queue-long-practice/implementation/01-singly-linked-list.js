// Node class is implemented for you, no need to look for bugs here!

// 1. If we have an empty
// 2. If we have a list with a length of 1
// 3. If we have a list with a length > 1

class SinglyLinkedNode {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	addToHead(val) {
		// Add node of val to head of linked list
		// Your code here
		// Write your hypothesis on the time complexity of this method here
	}

	addToTail(val) {
		// There are bugs in this method! Fix them!!!

		// Add node of val to tail of linked list
		let newNode = new SinglyLinkedNode(data);

		if (!head) {
			head = newNode;
			return head;
		}

		let curr = head;
		while (curr) {
			curr = current.next;
		}
		curr.next = newNode;

		return head;

		// Write your hypothesis on the time complexity of this method here
	}

	removeFromHead() {
		// Remove node at head
		// Your code here
		// Write your hypothesis on the time complexity of this method here
	}

	removeFromTail() {
		if (!this.length) return;

		let leadingNode = this.head;
		this.length--;

		if (this.length === 1) {
			this.head = null;
			return leadingNode;
		}

		let trailingNode = null;

		while (leadingNode.next) {
			trailingNode = leadingNode;
			leadingNode = leadingNode.next;
		}

		trailingNode.next = null;

		return leadingNode;
		// Write your hypothesis on the time complexity of this method here
	}

	peekAtHead() {
		// Return the value of head node
		// Your code here
		// Write your hypothesis on the time complexity of this method here
	}

	print() {
		// Print out the linked list
		// Your code here
		// Write your hypothesis on the time complexity of this method here
	}
}

module.exports = {
	SinglyLinkedList,
	SinglyLinkedNode,
};
