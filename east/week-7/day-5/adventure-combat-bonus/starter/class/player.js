const { Character } = require("./character");
const { Enemy } = require("./enemy");
const { Food } = require("./food");

class Player extends Character {
	constructor(name, startingRoom) {
		super(name, "main character", startingRoom);
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
		const item = this.currentRoom.getItemByName(itemName);
		this.currentRoom.removeItem(item);
		this.items.push(item);
	}

	dropItem(itemName) {
		const item = this.getItemByName(itemName);
		this.currentRoom.addItem(item);
		this.removeItem(item);
	}

	eatItem(itemName) {
		const item = this.getItemByName(itemName);

		if (item instanceof Food) {
			this.removeItem(item);
		}
	}

	getItemByName(name) {
		return this.items.find((item) => item.name === name);
	}

	hit(name) {
		const enemies = this.currentRoom.getEnemies();
		const target = enemies.find((enemy) => enemy.name === name);
		target.applyDamage(this.strength);
	}

	die() {
		console.log("You are dead!");
		process.exit();
	}

	removeItem(item) {
		const index = this.items.indexOf(item);
		this.items.splice(index, 1);
	}
}

module.exports = {
	Player,
};
