const sha256 = require("sha256");

// Hashes but does not salt
function hashString(inputString) {
	return sha256(inputString);
}

const userPassword = hashString("newP@ssword");

console.log(userPassword);
