class Car {
	constructor(speed) {
		this.speed = speed || 0;
	}

	drive(newSpeed) {
		this.speed = newSpeed;
		return this.speed;
	}
}

// let car = new Car();
// car.drive(0); // => returns 0
// console.log(car); // => { speed: 0 }

// car.drive(10); // => returns 10
// console.log(car); // => { speed: 10 }

// car.drive(50); // => returns 50
// console.log(car); // -> { speed: 50 }

// car.drive(160); // => returns 100
// console.log(car); // -> { speed: 100 }

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
