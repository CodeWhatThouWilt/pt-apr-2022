// Importing readline
const readline = require('readline');


// Creating an interface
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Creating questions
// r1.question("Whats goooooood: ", (answer) => {
//     console.log("User input: ",answer);
    
    
//     r1.question("Thats cool. How've you been: ", (secondAnswer) => {
//         console.log("User input: ",secondAnswer);

//         r1.question("Nice. Eat anything good today: ", (thirdAnswer) => {
//             console.log("User input: ",thirdAnswer);
//             r1.close();
//         });
//     });
// });

const handleFirst = (answer) => {
    console.log(answer);
    r1.question("Thats cool. How've you been: ", handleSecond);
};

const handleSecond = (answer) => {
    console.log(answer);
    r1.question("Nice. Eat anything good today: ", handleThird);
}

const handleThird = (answer) => {
    console.log(answer);
    r1.close()
}


r1.question("Whats goooooood: ", handleFirst);

