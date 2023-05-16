// What is a call stack (pop / push)
// • Runs in order
// • Tracks current tasks
// • First in last out (FILO), essentially means first thing called is last to finish
// • Executes one at a time
// • Adding to a call stack is called pushing
// • Removing from our call stack is called popping


// What is a queue (enqueueing / dequeueing)
// • First in first out (FIFO), essentially means first thing called is first to finish
// • Tracks processes that are waiting to be called
// • Adding to the queue is called enqueueing 
// • Removing from the queue is called dequeuing
// • Used for asynchronous events


// What is setTimeout
// • Executes a callback function after a specified amount of time(in milliseconds)
// • setTimeout args: callback, time in ms, arg1, arg2, argX(any amount of arguments to be passed into function)
// • Code structure:
// const delayedFunc = (str, str1) => {
//     console.log('This is delayed');
//     console.log(str);
//     console.log(str1);
// }
// setTimeout(delayedFunc, 2000, "arg 1 here", "hey this is the second");
// setTimeout(() => {
//     console.log('Whats goooood');
// }, 4000);
// Note: Times are not guaranteed it depends if the call stack is free or not



// What is setInterval
// • Executes a callback function every x amount of milliseconds
// • setInterval args: callback, time in ms, arg1, arg2, argX(any amount of arguments to be passed into function)
// • Code structure:
const intervalFunc = (str1, str2) => {
    console.log(str1, str2);
}
const interval = setInterval(intervalFunc, 2000, "This is a string", " || this is the other string");
setTimeout(() => {
    clearInterval(interval);
}, 10000);