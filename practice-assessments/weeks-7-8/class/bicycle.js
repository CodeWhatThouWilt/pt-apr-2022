const Vehicle = require("./vehicle.js");

class Bicycle extends Vehicle {
	constructor(modelName, year, price, style, frameSize, tireSize) {
		super(modelName, year, price);
		this.style = style;
		this.frameSize = frameSize;
		this.tireSize = tireSize;
	}
}

module.exports = Bicycle;
