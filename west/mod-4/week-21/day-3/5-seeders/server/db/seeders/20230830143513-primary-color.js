"use strict";

const { Color } = require("../models");
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */

const colors = [{ name: "red" }, { name: "blue" }, { name: "yellow" }];

module.exports = {
	async up(queryInterface, Sequelize) {
		await Color.bulkCreate(colors, { validate: true });
	},

	async down(queryInterface, Sequelize) {
		queryInterface.bulkDelete(
			"Colors",
			{
				name: {
					[Op.in]: colors.map((color) => color.name),
				},
			},
			{}
		);
	},
};

// DELETE FROM Colors
// WHERE name IN ('red', 'blue', 'yellow')
