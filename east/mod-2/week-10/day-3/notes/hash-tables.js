// When we want to store into an object -
// 1. Perform hash function
// 2. Attempt to insert the hash into a hash table.

const sha256 = require("js-sha256");

class HashTable {
	constructor(hashNums = 4) {
		this.data = new Array(hashNums).fill(null);
		this.capacity = hashNums;
		this.count = 0;
	}

	createHash(key) {
		return parseInt(sha256(key));
	}

	findBucketToFill(str) {
		console.log("Hash return:", this.createHash(str));
		const index = this.createHash(str) % this.capacity;
		this.data[index] = { key: "key-1", value: str };
	}
}

const newTable = new HashTable(10);
newTable.findBucketToFill("password");
newTable.findBucketToFill("other password");
console.log(newTable);
