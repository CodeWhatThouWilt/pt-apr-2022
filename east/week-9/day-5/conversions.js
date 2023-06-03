// ! Base 10 (decimal)

// ** decimal to binary (in js we use toString(2))
// num / 2... quotient/2 ... prevQuotient / 2
// Keep track of remainders they'll be used to get the binary num
// Convert 30 to binary:
// 30 / 2 = 15 r0
// 15 / 2 = 7 r1
// 7 / 2 = 3 r1
// 3 / 2 = 1 r1
// 1 / 2 = 0 r1

// 0b11110

// ** decimal to hexadecimal
// num / 16... quotient/16 ... prevQuotient / 16
// Keep track of remainders they'll be used to get the binary num
// Make sure to convert 10-15 to the correct letters
// Convert 44 from decimal to hex:
// 44 / 16 = 2 r12 (12 is C in hex)
// 2 / 16 = 0 r2

// 0x2C

// ! Base 16 (Hexadecimal) (A=10, B=11, C=12, D=13, E=14, F=15)

// ** Hexadecimal to decimal
// num * 16^position then add all together
// 0x2C to decimal:
// 12(C) * 16^0 = 12
// 2 * 16^1 = 32
// 12 + 32 = 44

// ** Hexadecimal to binary
// Convert from hex to decimal then to binary

// ! Base 2 (Binary)

// ** Binary to decimal
// num * 2^position then add all together
// 0b11110 to a decimal number:
// 0 * 2^0 = 0
// 1 * 2^1 = 2
// 1 * 2^2 = 4
// 1 * 2^3 = 8
// 1 * 2^4 = 16

// 0 + 2 + 4 + 8 + 16 = 30

// ** Binary to hexadecimal
// Convert from binary to hex to decimal
