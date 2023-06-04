// Node class is implemented for you, no need to look for bugs here!
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

        const newNode = new SinglyLinkedNode(val);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;

        // Write your hypothesis on the time complexity of this method here
            // O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;

        // Write your hypothesis on the time complexity of this method here
            // O(n)
    }

    removeFromHead() {
        // Remove node at head

        if (!this.head) return;

        const oldHead = this.head;
        this.head = oldHead.next;

        this.length--;

        return oldHead;

        // Write your hypothesis on the time complexity of this method here
            // O(1)
    }

    removeFromTail() {
        // Remove node at tail

        if (!this.head) return;

        let curr = this.head;
        let prev;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        if (!prev) this.head = null;
        else prev.next = null;

        this.length--;

        return curr;

        // Write your hypothesis on the time complexity of this method here
            // O(n)
    }

    peekAtHead() {
        // Return the value of head node

        if (!this.head) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
            // O(1)
    }

    print() {
        // Print out the linked list

        if (!this.head) return;

        let curr = this.head;
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }

        // Write your hypothesis on the time complexity of this method here
            // O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}