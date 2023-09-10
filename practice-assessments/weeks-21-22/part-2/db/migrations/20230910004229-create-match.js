"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Matches", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			homeTeamId: {
				type: Sequelize.INTEGER,
				references: {
					model: "Teams",
					key: "id",
				},
			},
			awayTeamId: {
				type: Sequelize.INTEGER,
				references: {
					model: "Teams",
					key: "id",
				},
			},
			winnerId: {
				type: Sequelize.INTEGER,
				references: {
					model: "Teams",
					key: "id",
				},
			},
			matchDate: {
				type: Sequelize.DATE,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Matches");
	},
};
