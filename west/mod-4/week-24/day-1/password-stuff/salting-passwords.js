const bcrypt = require("bcryptjs");

const saltyPassword = bcrypt.hashSync("password");

// console.log(saltyPassword);

const evilShmakeGuess = "password";

const isPassword = bcrypt.compareSync(evilShmakeGuess, saltyPassword);

console.log(isPassword);
