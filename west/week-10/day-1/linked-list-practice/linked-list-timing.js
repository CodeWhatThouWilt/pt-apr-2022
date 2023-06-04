const LinkedList = require("./linked-list.js");
const DoublyLinkedList = require("./doubly-linked-list.js");

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/
const newList = new LinkedList();

// ! Single linked list

// LinkedList addToHead method
// Time complexity: O(1)
// Space complexity: O(1)
for (let i = 0; i < 100; i++) {
	const start = performance.now();
	newList.addToHead(i);
	const end = performance.now();
	console.log(end - start);
}

// LinkedList addToTail method
// Time complexity: O(n)
// Space complexity: O(1)

// ! Doubly Linked List

// addToHead method
// Time complexity: O(1)
// Space complexity: O(1)

// addToTail method
// Time complexity: O(1)
// Space complexity: O(1)

// ! Classes as a whole
// Space complexity: O(n)

// ! Bonus
// Single linked list with a tail
// addToTail method
// Time complexity: O(1)
