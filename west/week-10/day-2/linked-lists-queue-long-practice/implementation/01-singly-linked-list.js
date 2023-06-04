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
		const newNode = new SinglyLinkedNode(val);

		if (this.head) newNode.next = this.head;

		this.head = newNode;

		this.length++;
		return this;
		// Write your hypothesis on the time complexity of this method here
	}

	addToTail(val) {
		// There are bugs in this method! Fix them!!!

		// Add node of val to tail of linked list
		let newNode = new SinglyLinkedNode(val);

		if (!this.head) {
			this.head = newNode;
			this.length++;
			return this;
		}

		let curr = this.head;
		while (curr.next) {
			curr = curr.next;
		}
		curr.next = newNode;
		this.length++;
		return this;

		// Write your hypothesis on the time complexity of this method here
	}

	removeFromHead() {
		// Remove node at head
		// Your code here
		// Write your hypothesis on the time complexity of this method here
	}

	removeFromTail() {
		if (!this.head) return;

		if (this.length === 1) {
			const removedNode = this.head;
			this.head = null;
			this.length--;
			return removedNode;
		}

		let leadingNode = this.head;
		let trailingNode;

		while (leadingNode.next) {
			trailingNode = leadingNode;
			leadingNode = leadingNode.next;
		}

		trailingNode.next = null;
		this.length--;
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
