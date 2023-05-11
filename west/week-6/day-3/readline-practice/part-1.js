const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretNumber = 444;

const checkGuess = (num) => {
    if (num > secretNumber) {
        console.log("Too high :(");
        return false;
    } else if (num < secretNumber) {
        console.log("Too low :(");
        return false;
    } else {
        console.log("Correct! :D");
        return true;
    }
}

const askGuess = () => {
    r1.question("Guess a number: ", (answer) => {
        const correct = checkGuess(Number(answer));
        if (correct) {
            console.log("You win! :D");
            r1.close();
        } else {
            askGuess();
        }
    })
}

askGuess();