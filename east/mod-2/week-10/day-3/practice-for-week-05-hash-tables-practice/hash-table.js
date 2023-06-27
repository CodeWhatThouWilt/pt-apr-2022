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
		let hash = sha256(key).slice(0, 8);
		return parseInt(hash, 16);
	}

	hashMod(key) {
		// console.log(this.hash(key) % this.capacity);
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
		const kvp = new KeyValuePair(key, value);

		if (this.data[index]) {
			kvp.next = this.data[index];
		}

		this.data[index] = kvp;
		this.count++;
	}

	insert(key, value) {
		const index = this.hashMod(key);

		let currentNode = this.data[index];

		while (currentNode && currentNode.key !== key) {
			currentNode = currentNode.next;
		}

		if (currentNode) {
			currentNode.value = value;
		} else {
			const newNode = new KeyValuePair(key, value);

			if (!this.data[index]) {
				this.data[index] = newNode;
			} else {
				newNode.next = this.data[index];
				this.data[index] = newNode;
			}

			this.count++;
		}
	}
}

module.exports = HashTable;

// Resizing the array
// const hashTable = [1, null, 3];

// const newHashTable = new Array(hashTable.length * 2);

// for (let i = 0; i < hashTable.length; i++) {}

// Using linked lists { key: key, value: value, next: otherNode || null}
