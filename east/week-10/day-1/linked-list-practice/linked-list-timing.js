const LinkedList = require("./linked-list.js");
const DoublyLinkedList = require("./doubly-linked-list.js");

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
// Linked List

const linked = new LinkedList();

// for (let i = 0; i < 100; i++) {
// 	const start = performance.now();
// 	linked.addToHead(i);
// 	const end = performance.now();
// 	console.log(end - start);
// }

for (let i = 0; i < 1000; i++) {
	const start = performance.now();
	linked.addToTail(i);
	const end = performance.now();
	console.log(end - start);
}

// Add to head

// Add to tail
