/***********************************************************************
Write a function, `dynamicIntervalCount`, that accepts a callback, a delay
in milliseconds, and an optional amount as arguments. The function should 
set an interval with the given callback and delay. If an amount argument 
is passed, the interval should be cleared after the callback has been 
called 'amount' number of times. If an amount argument is not passed,
the interval should not be cleared and `dynamicIntervalCount` should instead
return the Timeout object for the interval.

In addition to Mocha, we recommend that you test your code manually using 
node with the examples below.

Examples:

dynamicIntervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times


const timeoutObject = dynamicIntervalCount(function() {
    console.log('hi');
}, 500); // prints 'hi' at 500ms intervals indefinitely

console.log(timeoutObject); // Timeout { ... }
***********************************************************************/

// set an interval using the callback and delay
// In the interval check if we're getting an amount from our params
// If we are getting an amount from our params then we should clear interval
// when it has been called that amount of times
// return the return value from our interval

function dynamicIntervalCount(cb, delay, amount) {
    let count = 0;
    const interval = setInterval(() => {
      cb();
      count++;
      if (amount && amount === count) {
        clearInterval(interval);
      }
    }, delay);
    return interval;
}

// dynamicIntervalCount(function() {
//   console.log('hi');
// }, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicIntervalCount;
} catch {
  module.exports = null;
}