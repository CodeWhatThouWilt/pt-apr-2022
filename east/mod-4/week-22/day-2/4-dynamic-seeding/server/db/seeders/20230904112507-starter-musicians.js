"use strict";

const { Band, Musician } = require("../models");

const bandMusicians = [
	{
		name: "The Falling Box",
		musicians: [
			{ firstName: "Adam", lastName: "Appleby" },
			{ firstName: "Anton", lastName: "Martinovic" },
			{ firstName: "Wilson", lastName: "Holt" },
		],
	},
	{
		name: "America The Piano",
		musicians: [
			{ firstName: "Marine", lastName: "Sweet" },
			{ firstName: "Georgette", lastName: "Kubo" },
		],
	},
	{
		name: "Loved Autumn",
		musicians: [{ firstName: "Aurora", lastName: "Hase" }],
	},
	{
		name: "Playin Sound",
		musicians: [
			{ firstName: "Trenton", lastName: "Lesley" },
			{ firstName: "Camila", lastName: "Nenci" },
		],
	},
	{
		name: "The King River",
		musicians: [
			{ firstName: "Rosemarie", lastName: "Affini" },
			{ firstName: "Victoria", lastName: "Cremonesi" },
		],
	},
];

module.exports = {
	up: async (queryInterface, Sequelize) => {
		for await (const band of bandMusicians) {
			const { name, musicians } = band;

			const currBand = await Band.findOne({
				where: {
					name,
				},
			});

			for await (const musician of musicians) {
				await currBand.createMusician(musician);
			}
		}
	},

	down: async (queryInterface, Sequelize) => {
		for await (const band of bandMusicians) {
			const { musicians } = band;
			for await (const musician of musicians) {
				await Musician.destroy({
					where: {
						firstName: musician.firstName,
						lastName: musician.lastName,
					},
				});
			}
		}
	},
};
