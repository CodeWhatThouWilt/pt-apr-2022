"use strict";

/** @type {import('sequelize-cli').Migration} */

const { Color } = require("../models");
const { Op } = require("sequelize");

const colors = [
	{
		name: "purple",
		createdAt: new Date("11/17/2002"),
		updatedAt: new Date("11/18/2003"),
	},
];

module.exports = {
	async up(queryInterface, Sequelize) {
		await Color.bulkCreate(colors, { validate: true });
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(
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
