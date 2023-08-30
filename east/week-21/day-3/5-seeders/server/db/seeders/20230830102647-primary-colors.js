"use strict";

const { Color } = require("../models");
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */

module.exports = {
	async up(queryInterface, Sequelize) {
		const colors = [{ name: "red" }, { name: "blue" }, { name: "yellow" }];

		await Color.bulkCreate(colors, { validate: true });
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(
			"Colors",
			{
				name: {
					[Op.in]: ["red", "blue", "yellow"],
				},
			},
			{}
		);
	},
};
