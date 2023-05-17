function userExists(users, username) {
	if (users.includes(username)) {
		console.log(`User ${username} is a valid user`);
	} else {
		console.log(`User ${username} is not a valid user`);
	}
}

function removeUser(users, username) {
	const index = users.indexOf(username);
	users.splice(index, 1);
	console.log(`User ${username} removed`);
}

module.exports = {
	userExists,
	removeUser,
};
