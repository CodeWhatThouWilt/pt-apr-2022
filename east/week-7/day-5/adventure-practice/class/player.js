const { Food } = require("./food");

class Player {
	constructor(name, startingRoom) {
		this.name = name;
		this.currentRoom = startingRoom; // Instance of the room class (has access to room methods / attributes)
		this.items = [];
	}

	move(direction) {
		const nextRoom = this.currentRoom.getRoomInDirection(direction);

		// If the next room is valid, set the player to be in that room
		if (nextRoom) {
			this.currentRoom = nextRoom;

			nextRoom.printRoom(this);
		} else {
			console.log("You cannot move in that direction");
		}
	}

	printInventory() {
		if (this.items.length === 0) {
			console.log(`${this.name} is not carrying anything.`);
		} else {
			console.log(`${this.name} is carrying:`);
			for (let i = 0; i < this.items.length; i++) {
				console.log(`  ${this.items[i].name}`);
			}
		}
	}

	takeItem(itemName) {
		// Picks up an item from the current room into the player's inventory
		const item = this.currentRoom.getItemByName(itemName);
		this.items.push(item);
		this.currentRoom.removeItem(item);
	}

	dropItem(itemName) {
		// Drops an item the player is holding into their current room
		// Your code here
	}

	eatItem(itemName) {
		// Allow the player to eat food items, but not non-food items
		// Your code here
	}

	getItemByName(name) {
		return this.items.find((item) => item.name === name);
	}
}

module.exports = {
	Player,
};
