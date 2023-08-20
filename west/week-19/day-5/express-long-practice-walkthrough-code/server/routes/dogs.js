// ------------------------------  SERVER DATA ------------------------------

let nextDogId = 1;
function getNewDogId() {
	const newDogId = nextDogId;
	nextDogId++;
	return newDogId;
}

const dogs = [
	{
		dogId: getNewDogId(),
		name: "Fluffy",
	},
	{
		dogId: getNewDogId(),
		name: "Digby",
	},
];

// ------------------------------  MIDDLEWARES ------------------------------

const validateDogInfo = (req, res, next) => {
	if (!req.body || !req.body.name) {
		const err = new Error("Dog must have a name");
		err.statusCode = 400;
		next(err);
	}
	next();
};
const validateDogId = (req, res, next) => {
	const { dogId } = req.params;
	const dog = dogs.find((dog) => dog.dogId == dogId);
	if (!dog) {
		const err = new Error("Couldn't find dog with that dogId");
		err.statusCode = 404;
		throw err;
		// return next(err); // alternative to throwing it
	}
	next();
};

// ------------------------------  ROUTE HANDLERS ------------------------------

// GET /dogs
const getAllDogs = (req, res) => {
	res.json(dogs);
};

// GET /dogs/:dogId
const getDogById = (req, res) => {
	const { dogId } = req.params;
	const dog = dogs.find((dog) => dog.dogId == dogId);
	res.json(dog);
};

// POST /dogs
const createDog = (req, res) => {
	const { name } = req.body;
	const newDog = {
		dogId: getNewDogId(),
		name,
	};
	dogs.push(newDog);
	res.json(newDog);
};

// PUT /dogs/:dogId
const updateDog = (req, res) => {
	const { name } = req.body;
	const { dogId } = req.params;
	const dog = dogs.find((dog) => dog.dogId == dogId);
	dog.name = name;
	res.json(dog);
};

// DELETE /dogs/:dogId
const deleteDog = (req, res) => {
	const { dogId } = req.params;
	const dogIdx = dogs.findIndex((dog) => dog.dogId == dogId);
	dogs.splice(dogIdx, 1);
	res.json({ message: "success" });
};

// ------------------------------  ROUTER ------------------------------

// Method One
// const express = require('express');
// const router = express.Router();

// Method Two
const router = require("express").Router();

// const validateDog = [validateDogId, validateDogInfo];

// router.get("/", getAllDogs);
// router.post("/", createDog);
// router.put("/:dogId", validateDog, updateDog);

// router.route("/")
// .get(getAllDogs)
// .post(createDog);

// ! Be extremely cautious when using validation middleware in a manner
// ! like this. It's an attempt at a one size fits all solution which
// ! can have it's pitfalls.
router.use("/:dogId", validateDogId);
// router.use((req, res, next) => {
// 	if (req.method === "POST" || req.method === "PUT") {
// 		validateDogInfo(req, res, next);
// 	}
// 	next();
// });

router.get("/", getAllDogs);
router.get("/:dogId", getDogById);
router.post("/", validateDogInfo, createDog);
router.put("/:dogId", validateDogInfo, updateDog);
router.delete("/:dogId", deleteDog);

// router.use(validateDogInfo);
// router.post("/", createDog);
// router.put("/:dogId", updateDog);

module.exports = router;
