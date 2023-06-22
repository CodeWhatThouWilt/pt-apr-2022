// Implement the SocialNetwork class here
class SocialNetwork {
	constructor() {
		this.users = {};
		this.follows = {};
		this.currentID = 0;
	}

	addUser(name) {
		this.currentID++;
		const nextID = this.currentID;

		this.users[nextID] = { id: nextID, name: name };
		this.follows[nextID] = new Set();

		return nextID;
	}

	getUser(userID) {
		if (this.users[userID]) return this.users[userID];
		else return null;
	}

	follow(userID1, userID2) {
		if (!this.users[userID1] || !this.users[userID2]) {
			return false;
		}

		this.follows[userID1].add(userID2);
		return true;
	}

	getFollows(userID) {
		return this.follows[userID];
	}

	getFollowers(userID) {
		const followers = new Set();

		for (let id in this.follows) {
			if (this.follows[id].has(userID)) followers.add(parseInt(id));
		}

		return followers;
	}

	getRecommendedFollows(userID, degrees) {
		let queue = [[userID]];

		let recommended = [];

		let visited = new Set();
		visited.add(userID);

		while (queue.length > 0) {
			let path = queue.shift();
			let id = path[path.length - 1];

			if (path.length > degrees + 2) break;

			if (path.length > 2) recommended.push(id);

			for (let follow of this.follows[id]) {
				if (!visited.has(follow)) {
					visited.add(follow);
					// Use concat to create a new array
					// DON'T modify the existing path
					queue.push(path.concat([follow]));
				}
			}
		}

		return recommended;
	}
}

module.exports = SocialNetwork;
