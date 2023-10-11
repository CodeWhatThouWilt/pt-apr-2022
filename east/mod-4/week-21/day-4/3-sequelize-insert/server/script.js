const build = async () => {
	const { Puppy } = require("./db/models");
	try {
		/* ====================== STEP 1 ====================== */
		// Using `build` and `save`, insert a record into the Puppies table with the
		// following attributes:
		// name: Trudy
		// ageYrs: 2
		// weightLbs: 38
		// breed: Brittany Spaniel
		// microchipped: false
		// Your code here

		const newPuppy = await Puppy.build({
			name: "Trudy",
			ageYrs: 2,
			weightLbs: 38,
			breed: "Brittany Spaniel",
			microchipped: false,
		});

		await newPuppy.save();
	} catch (err) {
		throw err;
	}
};

const create = async () => {
	const { Puppy } = require("./db/models");
	try {
		/* ====================== STEP 2 ====================== */
		// Using `create`, insert a record into the Puppies table with the following
		// attributes:
		// name: Beans
		// ageYrs: 1.6
		// weightLbs: 42
		// breed: Bulldog
		// microchipped: true

		const newPuppy = await Puppy.create({
			name: "Beans",
			ageYrs: 1.6,
			weightLbs: 42,
			breed: "Bulldog",
			microchipped: true,
		});
	} catch (err) {
		throw err;
	}
};

if (require.main === module) {
	require("dotenv").config();
	const { resetDB, seedAllDB } = require("./test/utils/test-utils");
	(async () => {
		await resetDB("db/dev.db");
		await seedAllDB("db/dev.db");
		try {
			await build();
		} catch (err) {
			console.error("There was an error thrown while building:");
			console.error(err);
		}
		try {
			await create();
		} catch (err) {
			console.error("There was an error thrown while creating:");
			console.error(err);
		}
	})();
} else {
	module.exports = { build, create };
}
