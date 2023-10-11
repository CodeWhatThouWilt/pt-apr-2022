const sha256 = require("sha256");

function hashString(inputString) {
	const salt = "thisPasswordIsNowSalted";
	return sha256(inputString + salt);
}

const password = hashString("password");

console.log(password);
