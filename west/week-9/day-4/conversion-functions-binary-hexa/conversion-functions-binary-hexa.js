/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
*/

/* Base 10 to base 2 */
function decimalToBinary(blob) {
	return `0b${blob.toString(2)}`;
}

/* Base 10 to base 16 */
function decimalToHexadecimal(blob) {
	return `0x${blob.toString(16)}`;
}

/* Base 2 to base 10 */
function binaryToDecimal(blob) {
	return parseInt(blob.slice(2), 2);
}

/* Base 16 to base 10 */
function hexadecimalToDecimal(blob) {
	// return parseInt(blob.slice(2), 16);
	// We can just pass in blob since parseInt allows you to pass a hexadecimal string as
	// long as it includes the 0x at the start of it
	return parseInt(blob);
}

// console.log('Decimal to binary:')
// console.log(decimalToBinary(13))  // '0b1101'
// console.log(decimalToBinary(72))  // '0b1001000'
// console.log('')

// console.log('Decimal to hexadecimal:')
// console.log(decimalToHexadecimal(9))   // '0x9'
// console.log(decimalToHexadecimal(32))  // '0x20'
// console.log('')

// console.log('Binary to decimal:')
// console.log(binaryToDecimal('0b0101'))      // 5
// console.log(binaryToDecimal('0b10001000'))  // 136
// console.log('')

// console.log('Hexadecimal to decimal:')
// console.log(hexadecimalToDecimal('0x51'))    // 81
// console.log(hexadecimalToDecimal('0x10ff'))  // 4351

module.exports = {
	decimalToBinary,
	decimalToHexadecimal,
	binaryToDecimal,
	hexadecimalToDecimal,
};
