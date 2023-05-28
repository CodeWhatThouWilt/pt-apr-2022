const Review = require("./review.js");
const Bicycle = require("./bicycle.js");
const ElectricBicycle = require("./electric-bicycle.js");

class Tester {
	constructor(name) {
		this.name = name;
		this.reviews = [];
		this.bikeTester;
		this.eBikeTester;
	}

	submitReview(vehicle, starRating, text) {
		if (vehicle.validate()) {
			const newReview = new Review(vehicle, this, starRating, text);
			newReview.addReview();
			if (vehicle instanceof ElectricBicycle) {
				this.eBikeTester = true;
			} else if (vehicle instanceof Bicycle) {
				this.bikeTester = true;
			}
			return newReview;
		} else {
			throw new Error("Cannot submit review for invalid vehicle.");
		}
	}
}
module.exports = Tester;
