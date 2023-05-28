class Vehicle {
	constructor(modelName, year, price) {
		this.modelName = modelName;
		this.year = year;
		this.price = price;
		this.reviews = [];
	}

	validate() {
		const checkData = this.modelName && this.year && this.price;
		const checkYear = this.year >= 1950 && this.year <= 2100;

		if (checkData && checkYear) {
			return true;
		} else {
			return false;
		}
	}

	update(modelName, year, price) {
		const checkPrice = price > 0;
		const checkYear = year >= 1950 && year <= 2100;

		if (!checkYear) {
			throw new Error("Year must be between 1950 and 2100");
		} else if (!checkPrice) {
			throw new Error("Price must be greater than 0");
		} else {
			this.modelName = modelName;
			this.year = year;
			this.price = price;
		}
	}

	getDetails() {
		return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`;
	}

	findReviewByTester(name) {
		return this.reviews.find((review) => review.tester.name === name);
	}
}

module.exports = Vehicle;

// // ** Dynamic validate, once again, not recommended
// validate(year, price, isUpdate) {
// 	const checkData = this.modelName && this.year && this.price;
// 	const checkYear = this.year >= 1950 && this.year <= 2100;

// 	if (isUpdate) {
// 		const checkPrice = price > 0;
// 		const checkYear = year >= 1950 && year <= 2100;

// 		if (!checkPrice) {
// 			throw new Error("Price must be greater than 0");
// 		} else if (!checkYear) {
// 			throw new Error("Year must be between 1950 and 2100");
// 		} else {
// 			return true;
// 		}
// 	} else {
// 		if (checkData && checkYear) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// }

// update(modelName, year, price) {
// 	if (this.validate(year, price, true)) {
// 		this.modelName = modelName;
// 		this.year = year;
// 		this.price = price;
// 	}
// }
