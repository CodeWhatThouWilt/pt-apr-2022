// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
	constructor(val) {
		this.value = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(test) {
		if (!test) {
			this.head = null;
			this.tail = null;
			this.length = 0;
		} else {
			this.head = new DoublyLinkedNode(1);
			this.tail = new DoublyLinkedNode(1);
			this.length = 2;
		}
	}

	addToHead(val) {
		// There are bugs in this method! Fix them!!!

		// Add node of val to head of linked list
		let newNode = new DoublyLinkedNode(val);

		if (this.length > 0) {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		} else {
			this.head = newNode;
			this.tail = newNode;
		}

		this.length++;

		// Write your hypothesis on the time complexity of this method here
	}

	addToTail(val) {
		const newNode = new DoublyLinkedNode(val);

		if (!this.head) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
		}

		this.tail = newNode;
		this.length++;
		return this.head;

		// Write your hypothesis on the time complexity of this method here
	}

	removeFromHead() {
		// if (!this.head) return;
		// const removedNode = this.head;
		// if (this.length === 1) {
		// 	this.head = null;
		// 	this.tail = null;
		// } else {
		// 	const newHead = this.head.next;
		// 	newHead.prev = null;
		// 	this.head = newHead;
		// }
		// this.length--;
		// return removedNode.value;
		// Write your hypothesis on the time complexity of this method here
	}

	removeFromTail() {
		if (!this.head) return;

		const removedNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			const newTail = this.tail.prev;
			newTail.next = null;
			this.tail = newTail;
		}

		this.length--;
		return removedNode.value;

		// Write your hypothesis on the time complexity of this method here
	}

	peekAtHead() {
		// Return value of head node
		// Your code here
		// Write your hypothesis on the time complexity of this method here
	}

	peekAtTail() {
		// Return value of tail node
		// Your code here
		// Write your hypothesis on the time complexity of this method here
	}
}

const newList = new DoublyLinkedList(true);

module.exports = {
	DoublyLinkedList,
	DoublyLinkedNode,
};
