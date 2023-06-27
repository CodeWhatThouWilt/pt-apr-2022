// When we want to store into an object -
// 1. Perform hash function
// 2. Attempt to insert the hash into a hash table.

const sha256 = require("js-sha256");

class HashTable {
	constructor(bucketNums = 4) {
		this.data = new Array(bucketNums).fill(null);
		this.capacity = bucketNums;
		this.count = 0;
	}

	hashing(key) {
		const hash = sha256(key).slice(0, 8);
		return parseInt(hash);
	}

	findBucketIndex(key) {
		console.log(this.hashing(key) % this.capacity);
		return this.hashing(key) % this.capacity;
	}
}

const hashTable = new HashTable(2);
hashTable.findBucketIndex("password145");
hashTable.findBucketIndex("passw2345");
hashTable.findBucketIndex("pasord12345");
hashTable.findBucketIndex("psword12345");
hashTable.findBucketIndex("sword12345");
