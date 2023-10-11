"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Colors", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: Sequelize.STRING,
			},
		});
	},

	// CREATE TABLE Colors (
	// id PRIMARY KEY AUTOINCREMENT
	// name VARCHAR
	// )

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Colors");
	},
};
