class Car {
	constructor(speed) {
		this.speed = speed || 0;
	}

	drive(newSpeed) {
		this.speed = newSpeed;
		return this.speed;
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
