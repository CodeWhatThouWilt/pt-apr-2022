const users = require("./data.js");
const { userExists, removeUser } = require("./user-utils.js");

console.log(users);

userExists(users, "yake");

removeUser(users, "yakeypoo");

console.log(users);
