"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Instrument extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Instrument.belongsTo(models.Store);
		}
	}
	Instrument.init(
		{
			name: DataTypes.STRING,
			type: DataTypes.STRING,
			storeId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Instrument",
			defaultScope: {
				// attributes: ["id", "name", "type", "storeId"],
				attributes: {
					exclude: ["createdAt", "updatedAt"],
				},
			},
			scopes: {
				getKeyboards: {
					where: {
						type: "keyboard",
					},
					// attributes: {
					// 	exclude: ["createdAt", "updatedAt"],
					// },
				},
				getStrings: {
					where: {
						type: "string",
					},
					attributes: {
						exclude: ["createdAt", "updatedAt"],
					},
				},
				getWoodwinds: {
					where: {
						type: "woodwind",
					},
				},
				includeStores(storeId) {
					const { Store } = require("../models");

					return {
						order: [["name", "ASC"]],
						where: {
							storeId,
						},
						include: {
							model: Store,
						},
					};
				},
				filterType(type) {
					return {
						where: {
							type,
						},
					};
				},
			},
		}
	);
	return Instrument;
};
