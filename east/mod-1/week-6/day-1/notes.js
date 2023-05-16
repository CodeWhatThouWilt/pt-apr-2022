// What is a call stack (pop / push)
// • Current task / functions that are in progress
// • First in last out (FILO) essentially first function is last off the stack, one at a time
// • The order in which Javascript resolves functions
// • We call adding to the call stack pushing
// • We call removing from the call stack popping

// What is a queue (enqueueing / dequeueing)
// • Tasks that are waiting to be executed
// • First in first out (FIFO) essentially the first on the queue in the first out
// • We call adding to the queue enqueueing 
// • We call removing from the queue dequeueing
// • Similar to a rollercoaster line the first people in the line are the
// first people to get out of the line and on the ride. The ride is essentially 
// our call stack.


// What is setTimeout
// • Set timeout is essentially a timer that allows us to execute code after a certain delay
// • Args = callback, time in ms, arg1, arg2, argX(infinite amount of arguments)
// • Code structure:
// function delayedFunc(first, second) {
//     console.log("Hey I log after a delay")
//     console.log(`The first params: ${first}`)
//     console.log(`The second params: ${second}`);
// }
// setTimeout(delayedFunc, 5000, "Whats goooood", "second argument");

// • The timer is not guaranteed but rather a minimum amount of time that must pass before
// attempting to execute. The timer can be held up if something is currently on the call stack.


// What is setInterval
// • setInterval executes a callback function every x amount of milliseconds
// • Args = callback, time in ms, arg1, arg2, argX(infinite amount of arguments)
// • Code structure:
function delayedFunc() {
    console.log("I print every 2 seconds!");
}

const interval = setInterval(delayedFunc, 2000);
setTimeout(() => {
    clearInterval(interval);
}, 10000);

// • To get the interval to stop we need to use clearInterval