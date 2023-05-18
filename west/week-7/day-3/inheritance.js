const Factory = require("./creating-class.js");

class Car extends Factory {
	constructor(name, brand, model, year) {
		super(name, brand);
		this.model = model;
		this.year = year;
	}

	lunchBreak() {
		console.log("This is a car. It doesnt go on lunch");
	}
}

const newCar = new Car("Cool Factory", "Ford", "Edge", 1990);

console.log(newCar);

newCar.factoryDetails();
newCar.lunchBreak();
