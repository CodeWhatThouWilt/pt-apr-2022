// Base ten (10)
// 0,1,2,3,4,5,6,7,8,9
// 01
// 02
// 03
// 04
// 05
// 06
// 07
// 08
// 09
// 10

// Convert base ten into binary (num / 2... num / prevQuotient... track remainders)
// Convert 12 into binary:
// 12 / 2 = 6 r0
// 6 / 2 = 3 r0
// 3 / 2 = 1 r1
// 1 / 2 = 0 r1
// 0b1100
// To convert base ten to binary in JS:
const num = 12;
const binary = num.toString(2);
console.log(`0b${binary}`);

// Convert base ten into hex (num / 16... num / prevQuotient... track remainders)
// ! IMPORTANT: Remainders of 10-15 should be converted to the corresponding letter
// Convert 32 into hexadecimal:
// 32 / 16 = 2 r0
// 2 / 16 = 0 r2
// 20
const numOne = 32;
const hex = numOne.toString(16);
console.log(`0x${hex}`);

// Binary (2)
// 0,1
// 0b00 (0)
// 0b01 (1)
// 0b10 (2)
// 0b11 (3)
// 0b100 (4)
// 0b101 (5)
// 0b110 (6)
// 0b111 (7)
// 0b1000 (8)

// Binary to base 10 (num * 2^position)
// Convert 0b1100 to base 10:
// 0 * 2^0 = 0
// 0 * 2^1 = 0
// 1 * 2^2 = 4
// 1 * 2^3 = 8
// 0 + 0 + 4 + 8 = 12 which is our base 10 number
const binaryOne = "0b1100";
const baseTen = parseInt(binaryOne.slice(2), 2);
console.log(baseTen);

// convert binary to base 16(hex)
// convert binary to base ten then base ten to hex

// Hexadecimal (16) (num * 16^position)
// 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F (A = 10, B = 11, C = 12, D = 13, E = 14, F = 15)
// 0x0
// 0x1
// 0x2
// 0x3
// 0x4
// 0x5
// 0x6
// 0x7
// 0x8
// 0x9
// 0xA
// 0xB
// 0xC
// 0xD
// 0xE
// 0xF
// 0x11
// const num = 17;
// console.log(num.toString(16));

// Hex to base 10
// Convert 0x20 to base 10:
// 0 * 16^0 = 0
// 2 * 16^1 = 32
// 32 + 0 = 32 which is our base 10 num
const numTwo = "0x20";
const otherBaseTen = parseInt(numTwo.slice(2), 16);
console.log(otherBaseTen);

// Hex to binary
// Convert hex to base ten then convert base 10 to hex
