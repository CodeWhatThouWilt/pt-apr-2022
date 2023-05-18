const Factory = require("./creating-class.js");

class Car extends Factory {
	constructor(name, brand, model, year) {
		super(name, brand);
		this.model = model;
		this.year = year || 2023;
	}

	lunchBreak() {
		console.log("This is a car. It doesnt go on lunch");
	}
}

const newCar = new Car("Cool Factory", "Ford", "Edge");
console.log(newCar);
