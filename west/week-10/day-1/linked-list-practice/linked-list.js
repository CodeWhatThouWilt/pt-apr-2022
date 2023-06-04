class LinkedListNode {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	addToHead(val) {
		const newNode = new LinkedListNode(val);

		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}

	addToTail(val) {
		const newNode = new LinkedListNode(val);

		if (!this.head) {
			this.head = newNode;
			this.length++;
			return;
		}

		let currNode = this.head;

		while (currNode.next) {
			currNode = currNode.next;
		}

		currNode.next = newNode;
		this.length++;
	}

	// You can use this function to help debug
	print() {
		let current = this.head;

		while (current) {
			process.stdout.write(`${current.value} -> `);
			current = current.next;
		}

		console.log("NULL");
	}
}

// const newList = new LinkedList();

// newList.addToTail(1);
// newList.addToTail(2);
// newList.addToTail(3);
// newList.addToTail(4);

// newList.print();

module.exports = LinkedList;
