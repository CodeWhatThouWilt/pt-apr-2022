const users = require("./data.js");
const { userExists, removeUser } = require("./user-utils.js");

userExists(users, "yake");

removeUser(users, "yake");

console.log(users);
