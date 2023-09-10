"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addConstraint("Airplanes", {
			fields: ["airlineCode", "flightNumber"],
			type: "UNIQUE",
			name: "yo-that-should-be-unique",
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeConstraint(
			"Airplanes",
			"yo-that-should-be-unique"
		);
	},
};
