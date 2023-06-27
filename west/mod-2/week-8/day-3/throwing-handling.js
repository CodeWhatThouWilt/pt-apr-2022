// ! throw new Error() / throwing specific errors
// throw new Error("This is our error message.");
// throw new TypeError("This is a type error");

// ! try / catch
// try {
// 	if (hello) {
// 		console.log(world);
// 	}
// } catch (error) {
// 	console.error("This is the catch running: ", error);
// }

// console.log("This is under the try/catch");

// ! console.error
// console.error("This is an error");

// ! instanceof (TypeError / SyntaxError)
// try {
// 	const hello = "hello";
// 	hello();
// } catch (e) {
// 	if (e instanceof TypeError) {
// 		console.error("You have a TypeError");
// 	} else if (e instanceof ReferenceError) {
// 		console.error("You have a ReferenceError");
// 	} else if (e instanceof SyntaxError) {
// 		console.error("Dood you have a typo. Come on now");
// 	}
// }

// ! finally
// try {
// 	console.log("This is our try block executing");
// 	throw new TypeError("Hey this is our TypeError");
// } catch (e) {
// 	console.error("This is our catch block: ", e);
// } finally {
// 	console.log("I always run no matter what!");
// }
