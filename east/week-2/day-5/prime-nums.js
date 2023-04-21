// Write a function choosePrimes(nums) that takes in an array of 
// numbers as args. The function should return a new array containing 
// the primes from the original array. A prime number is a number that 
// is only divisible by 1 and itself. Hint: consider creating a helper 
// function to check if a number is prime!

const isPrime = function(num) {
    if (num < 2) return false;
    // console.log("Starting new num: ", num)
    for (let i = 2; i < num; i++) {
        // console.log("   NUM HERE: ", i)
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


const choosePrimes = function(arr) {
    const primes = [];

    for (let i = 0; i < arr.length; i++) {
        const currNum = arr[i];
        
        if (isPrime(currNum)) {
            primes.push(currNum);
        }
    }
    return primes;
}


console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]