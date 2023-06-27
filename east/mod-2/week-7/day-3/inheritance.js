const Car = require("./creating-class.js");

class Vintage extends Car {
	constructor(brand, year, model) {
		super(brand, year);
		this.model = model;
	}
}

const oldCar = new Vintage("Ford", 1960, "edge");

console.log(oldCar);

oldCar.vroom();
