const Dragon = require("./dragon.js");

class EvilDragon extends Dragon {
	constructor(name, color, evilDoings, nemesis) {
		super(name, color);
		this.evilDoings = evilDoings;
		this.nemesis = nemesis;
	}

	dontInviteThemOverForDinner() {
		this.evilDoings.forEach((dastardlyDeed) => {
			console.log(`${this.name} will ${dastardlyDeed}`);
		});
	}

	burnsNemesis() {
		return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
	}
}

module.exports = EvilDragon;
