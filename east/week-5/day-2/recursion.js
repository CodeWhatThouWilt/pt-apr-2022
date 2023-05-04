// Recursion
let i = 0;
while (i < 10) {
    i++
}

// Two cases
// base case (when does the function stop?)
// const recursiveFunc = (num) => {
//     if (num === 0) return num;
//     console.log(num," going on the call stack")
//     num += recursiveFunc(num - 1);
//     console.log(num, " coming off the call stack")
//     return num;
// }
// recursiveFunc(5);
const countdown = (num) => {
    if (num === 0) return num;
    console.log(num);
    countdown(num - 1);
}
countdown(10);

// recursive case (what keeps the recursion going)


// recursive step (what keeps us moving toward our base case)


// Recursive / base cases are usually just the opposite of each other
// If base case stops when num turns to 0 then recursive is when num
// isn't 0


// Example:
