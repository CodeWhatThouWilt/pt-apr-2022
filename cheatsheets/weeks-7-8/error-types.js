// The following are core errors you'll encounter in javascript accompanied by some examples

// SyntaxError - represents an error in the syntax of the code.
function broken () { // Uncaught SyntaxError: Unexpected identifier
    console.log("I'm broke");
}} // Uncaught SyntaxError: Unexpected token '}'


// ReferenceError - represents an error thrown when an invalid reference is made.
function callPuppy() {
    const puppy = "puppy";
    console.log(pupy);
}

callPuppy(); // ReferenceError: pupy is not defined


// TypeError - represents an error when a variable or parameter is not of a valid type.
let dog; // Remember unassigned variables are undefined!

dog(); // TypeError: dog is not a function


// The following are less common but you still could potentially run into them:

// RangeError - representing an error for when a numeric variable or parameter is outside of its valid range.
// InternalError - represents an error in the internal JavaScript engine.
// EvalError - represents an error with the global eval function.
// URIError - represents an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.
