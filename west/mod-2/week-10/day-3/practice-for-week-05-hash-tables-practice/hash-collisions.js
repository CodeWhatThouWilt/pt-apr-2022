const sha256 = require("js-sha256");

class KeyValuePair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.next = null;
	}
}

class HashTable {
	constructor(numBuckets = 4) {
		this.data = new Array(numBuckets).fill(null);
		this.capacity = numBuckets;
		this.count = 0;
	}

	hash(key) {
		const hex = sha256(key).slice(0, 8);
		return parseInt(hex, 16);
	}

	hashMod(key) {
		return this.hash(key) % this.capacity;
	}

	insertNoCollisions(key, value) {
		const index = this.hashMod(key);

		if (this.data[index]) {
			throw new Error("hash collision or same key/value pair already exists!");
		} else {
			this.data[index] = new KeyValuePair(key, value);
			this.count++;
		}
	}

	insertWithHashCollisions(key, value) {
		const newHash = new Array(this.capacity * 2).fill(null);

		// Loop through the elements and copy them over to the new array then reattempt the insertion
	}
}

// Utilizing array resizing
// Time complexity O(n)
// O(1) lookup time afterwards

// Utilizing linked lists
// Time complexity O(1)
// Could potentially cause our data lookup to become O(n) if the linked lists begin to contain too much data(nodes)
