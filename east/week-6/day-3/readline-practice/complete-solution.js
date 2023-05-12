const { clear } = require("console");
const readline = require("readline");

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let secretNumber;
let numAttempts;

askLimit();

function askLimit() {
	r1.question("How many guesses would you like to have: ", (answer) => {
		if (!validator(Number(answer))) {
			console.log("Invalid input!");
			askLimit();
			return;
		}
		numAttempts = answer;
		askRange();
	});
}

function askRange() {
	r1.question("Enter a max number: ", (max) => {
		if (!validator(Number(max))) {
			console.log("Invalid input!");
			askRange();
			return;
		}
		askMinNumber(max);
	});
}

function askMinNumber(max) {
	r1.question("Enter a min number: ", (min) => {
		if (!validator(Number(min))) {
			console.log("Invalid input!");
			askMinNumber(max);
			return;
		}
		secretNumber = randomInRange(min, max);
		console.log(`Im thinking of a number between ${min} and ${max}`);
		askGuess();
	});
}

function randomInRange(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.ceil(Math.random() * (max - min) + min);
}

function askGuess() {
	r1.question("Guess a number: ", (answer) => {
		const integer = Number(answer);
		if (!validator(integer)) {
			console.log("Input must be a number. Try again!");
			askGuess();
			return;
		}

		const correct = checkGuess(integer);
		if (correct) {
			console.log("You win! :D");
			restart();
		} else {
			numAttempts--;
			if (numAttempts === 0) {
				console.log("You ran out of guesses!");
				restart();
				return;
			}
			askGuess();
		}
	});
}

function checkGuess(num) {
	if (num > secretNumber) {
		console.log("Too high");
		return false;
	} else if (num < secretNumber) {
		console.log("Too low");
		return false;
	} else {
		console.log("Correct!! :D");
		return true;
	}
}

function validator(answer) {
	if (!isNaN(answer)) {
		return true;
	} else {
		return false;
	}
}

function restart() {
	r1.question("Would you like to start a new game(y/n): ", (answer) => {
		const lowerAns = answer.toLowerCase();
		if (lowerAns === "y" || lowerAns === "yes") {
			clear();
			askLimit();
		} else {
			clear();
			console.log("Ending game");
			r1.close();
		}
	});
}
