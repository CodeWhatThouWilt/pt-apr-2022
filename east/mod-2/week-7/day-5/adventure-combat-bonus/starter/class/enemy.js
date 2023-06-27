const { Character } = require("./character");

class Enemy extends Character {
	constructor(name, description, currentRoom, cooldown) {
		super(name, description, currentRoom);
		this.cooldown = this.cooldown || 3000;
		this.attackTarget = null;
	}

	setPlayer(player) {
		this.player = player;
	}

	randomMove() {
		const potentialDirections = this.currentRoom.getExits();
		const randIdx = Math.floor(Math.random() * potentialDirections.length);
		const direction = potentialDirections[randIdx];
		const nextRoom = this.currentRoom.getRoomInDirection(direction);
		this.currentRoom = nextRoom;
		this.cooldown = 3000;
	}

	takeSandwich() {
		// Fill this in
	}

	// Print the alert only if player is standing in the same room
	alert(message) {
		if (this.player && this.player.currentRoom === this.currentRoom) {
			console.log(message);
		}
	}

	rest() {
		// Wait until cooldown expires, then act
		const resetCooldown = function () {
			this.cooldown = 0;
			this.act();
		};
		setTimeout(resetCooldown, this.cooldown);
	}

	attack() {
		this.attackTarget.applyDamage(this.strength);
		this.cooldown = 3000;
	}

	applyDamage(amount) {
		this.health -= amount;
		this.attackTarget = this.player;
	}

	act() {
		if (this.health <= 0) {
			// Dead, do nothing;
		} else if (this.cooldown > 0) {
			this.rest();
		} else {
			this.scratchNose();
			this.rest();
		}

		// Fill this in
	}

	scratchNose() {
		this.cooldown += 1000;

		this.alert(`${this.name} scratches its nose`);
	}
}

module.exports = {
	Enemy,
};
