// Importing readline
const readline = require('readline');


// Creating interface
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Utilizing questions / answers
// r1.question("Whats good doooood? ", (answer) => {
//     console.log(answer);

//     r1.question("Thats cool. How ya been? ", (secondAnswer) => {
//         console.log(secondAnswer);
        
//         r1.question("Nice. Eat anything good today? ", (thirdAnswer) => {
//             console.log(thirdAnswer);
//             r1.close();
//         })
//     })
    
// });


const firstAnswer = (first) => {
    console.log(first);
    r1.question("Thats cool. How ya been? ", secondAnswer)
}

const secondAnswer = (second) => {
    console.log(second);
    r1.question("Nice. Eat anything good today? ", thirdAnswer);
}

const thirdAnswer = (third) => {
    console.log(third);
    r1.close();
};

r1.question("Whats good doooood? ", firstAnswer)