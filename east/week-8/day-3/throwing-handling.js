// ! throw new Error() / throwing specific errors
// throw new Error("This is our error message");
// throw new TypeError("This is a TypeError");
// throw new SyntaxError("Dood you have a serious typo issue going on");

// ! try / catch
// try {
// 	throw new TypeError("You can't do that");
// } catch (error) {
// 	console.log("This is from the catch block: ", error);
// }

// ! console.error
// console.error("This is an error");

// ! instanceof (TypeError / SyntaxError)
// try {
// 	throw new SyntaxError("Syntax Error");
// } catch (error) {
// 	if (error instanceof TypeError) {
// 		console.error("You have a type error!");
// 	} else if (error instanceof SyntaxError) {
// 		console.error("You have a typo. Come on now.");
// 	}
// }

// ! finally
try {
	throw new Error("This ran an error");
	console.log("This is the try");
} catch (error) {
	console.error(error);
} finally {
	console.log("I run no matter what. You can't stop me.");
}
