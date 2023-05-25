// Closures are when a function is returned inside another
// function. By doing this our inner function has access
// to the lexical scope. Values in the outer function
// including parameters are essentially saved and can be
// used / modified when the inner function is called
// afterward

// Counter closure
const outerFunc = () => {
	let count = 0;

	return () => {
		count++;
		return count;
	};
};

const couner = outerFunc();
// counter becomes the inner function and has access to the
// count variable still.
console.log(counter());
// will return 1 since count is at 0, then the inner function
// is ran and increments the count variable then returns it

// Add users
const userRecords = (initialUsers) => {
	const usernames = initialUsers;

	return (username) => {
		usernames.push(username);
		console.log(username + " has been added!");
		return usernames;
	};
};
const arr = ["demo", "yake"];
const addUser = userRecords(arr);
console.log(addUser("yakeHere"));
console.log(addUser("demoUser"));