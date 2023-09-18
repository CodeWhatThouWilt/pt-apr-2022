const bcrypt = require("bcryptjs");

// Hashes and salts password
const saltyPassword = bcrypt.hashSync("newP@ssword", 16);

// const pwGuess = bcrypt.hashSync("newP@ssword");

// Returns a boolean that says if the plain text when hashed / salted matches the hash
const compare = bcrypt.compareSync("LETSHMAKEHAVEYOURACCOUNT", saltyPassword);

console.log(compare);
