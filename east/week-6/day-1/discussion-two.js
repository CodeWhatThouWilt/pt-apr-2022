// Example one:
// const funcOne = () => {
//     console.log("Hello from function one!");
// }

// const funcTwo = () => {
//     console.log("Hello from function two!");
// }

// setTimeout(funcOne, 2000);
// funcTwo();


// Example two:
// const funcOne = () => {
//     console.log("Hello from function one!");
// }

// const funcTwo = () => {
//     console.log("Hello from function two!");
// }

// setTimeout(funcOne);
// funcTwo();

// Example three:
// let flag = true;

const spam = () => {
    // flag = false;
    console.log("1. Hey there!")
}

const foo = () => {
    console.log("2. Foo first log");
    const eggs = () => {
        setTimeout(spam, 5000);
    }
    eggs();
    // while (flag) {

    // }
}

const monty = () => {
    console.log("3. Monty Python says hello!");
}

foo();
setTimeout(monty, 1000);