// ! NOTE: To convert from binary / hex to base 10 use parseInt(str, baseNum)
// ! To convert from base ten to binary or hex use .toString(baseNum)

// Base ten (10)
// 0,1,2,3,4,5,6,7,8,9
// 01
// 02
// 03..
// 09
// 10

// Convert base ten 8 into binary
// 8 / 2 (keep track of remainder) = 4 (remainder is 0)
// 4 / 2 = 2 (remainder is 0)
// 2 / 2 = 1 (remainder is 0)
// 1 / 2 = 0 (remainder is 1)
// 1000
const num = 5000;
const binary = num.toString(2);
console.log(`0b${binary}`);

// Convert base ten 20 into hex
// Same exact process as  binary but divide by 16
// IMPORTANT: Remainders 10-15 will be converted to letters
const numOne = 100;
const hex = numOne.toString(16);
console.log(`0x${hex}`);

// Binary (2)
// 0, 1
// 0b00 (0)
// 0b01 (1)
// 0b10 (2)
// 0b11 (3)
// 0b100 (4)
// 0b101 (5)
// 0b110 (6)
// 0b111 (7)
// 0b1000 (8)

// Binary to base 10
// Start from the right most digit
// Take the digit multiply by 2^position (starts at index 0)
// Take the result from each digit working right to left
// add all results together
const binNum = "0b10101101";
const baseTen = parseInt(binNum.slice(2), 2);
console.log(baseTen);

// convert binary to base 16(hex)
const binNumOne = "0b100101101";
const baseTenOne = parseInt(binNumOne.slice(2), 2);
const hexNum = baseTenOne.toString(16);

// Hexadecimal (16)
// 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
// 0x00
// 0x01
// 0x02
// 0x03
// 0x04
// 0x05
// 0x06..
// 0x09
// 0xA
// 0xB
