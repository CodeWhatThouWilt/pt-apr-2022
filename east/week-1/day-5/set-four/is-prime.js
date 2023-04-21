// Define a function isPrime(number) that returns true if 
// number is prime. Otherwise, false.
// ! A number is prime if it is only divisible by 1 and itself.

const isPrime = function(number) {
	// for loop - start with 2, while index <= (number / 2), i++
	// if - see if number % index is 0
	// if the if is true return false
	// return true outside loop
	if (number < 2) {
		return false;
	}

	// works with: i <= math.sqrt(number)
	//  works with: currNum < (number / 2) + 1
	for (let currNum = 2; currNum < number; currNum++) {
        console.log("CURRENT NUM:", currNum);
		if (number % currNum === 0) {
            console.log("FUNCTION ENDING RETURNS:")
			return false;
		}
	}
	return true;
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true