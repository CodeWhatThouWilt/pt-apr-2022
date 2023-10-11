"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn("Musicians", "bandId", {
			type: Sequelize.INTEGER,
			references: {
				model: "Bands",
				key: "id",
			},
			onDelete: "CASCADE",
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn("Musicians", "bandId");
	},
};
