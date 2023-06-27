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
		const index = this.hashMod(key);

		const newNode = new KeyValuePair(key, value);

		if (this.data[index]) {
			newNode.next = this.data[index];
		}

		this.data[index] = newNode;
		this.count++;
	}

	insert(key, value) {
		const index = this.hashMod(key);

		const currNode = this.data[index]; // Will either be a KeyValuePair or null

		// If currNode is not null then begin looping through until currNode becomes null or becomes
		// a KeyValuePair that matches our incoming key
		while (currNode && currNode.key !== key) {
			currNode = currNode.next;
		}

		// Check if we found a KeyValue that matches our incoming key
		if (currNode) {
			// Reassign the value of the matching key node
			currNode.value = value;
		} else {
			// Else we perform the insertion from before
			this.insertWithHashCollisions(key, value);
		}
	}
}

// const newTable = new HashTable();
// newTable.insertNoCollisions("key-1", "value-1");
// newTable.insertNoCollisions("key-1234", "value-1");
// newTable.insertNoCollisions("key-124", "value-1");
// console.log(newTable);

module.exports = HashTable;
