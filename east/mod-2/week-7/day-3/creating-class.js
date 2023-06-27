class Car {
	constructor(brand, year) {
		this.brand = brand;
		this.year = year;
	}

	vroom() {
		if (this.year >= 1990) {
			console.log(`The ${this.brand} ${this.year} goes vrooooom`);
		} else {
			this._chug();
		}
	}

	_chug() {
		console.log(`The ${this.brand} ${this.year} chugs along`);
	}
}

// const newCar = new Car("toyota", 1990);
// const otherCar = new Car("oldsmobile", 1985);
// // console.log(newCar);

// newCar.vroom();
// otherCar.vroom();

module.exports = Car;
