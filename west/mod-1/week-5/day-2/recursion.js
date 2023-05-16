// Recursion
const countdown = (num) => {
    if (num === 0) return num; // base case - tells the recursion when to stop
    console.log("This is going on the call stack ", num);
    num += countdown(num - 1); // recursive step - inch us closer to our base case
    console.log("This is popping off the call stack ", num);
    return num;
}
console.log(countdown(3));

// Two cases
// base case (when does the function stop?)


// recursive case (what keeps the recursion going)


// recursive step (what keeps us moving toward our base case)


// Recursive / base cases are usually just the opposite of each other
// If base case stops when num turns to 0 then recursive is when num
// isn't 0


// Example:
