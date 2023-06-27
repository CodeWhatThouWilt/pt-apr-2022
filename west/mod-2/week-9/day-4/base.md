# Understanding Base 10, Binary (Base 2), and Hexadecimal (Base 16)

## Base 10 (Decimal)

The most common number system we use in daily life is base 10, also known as the decimal system. This system uses 10 digits: 0-9. When we count in base 10, we start with 0 and go up to 9, then carry over to the next column: 10, 11, 12, and so on.

## Binary (Base 2)

Binary is a base 2 system, using just two digits: 0 and 1. It's commonly used in computing because it's a way of representing data in a system that only recognizes two states: on (1) and off (0).

When we count in binary, we start with 0 and then go to 1. But then, because we've run out of digits, we have to carry over to the next column: so after 1 comes 10 (which is "two" in binary), then 11 ("three"), and then 100 ("four"), and so forth.

## Hexadecimal (Base 16)

Hexadecimal is a base 16 system, and it uses 16 symbols to represent numbers: 0-9 and A-F. A represents 10, B represents 11, C represents 12, D represents 13, E represents 14, and F represents 15.

This system is commonly used in computing and digital systems because it's a convenient way to represent binary data - each hexadecimal digit represents exactly four binary digits (also known as a "nibble"), which makes conversion between the two systems straightforward.

## Conversions

### Base 10 to Binary

To convert a base 10 number to binary, repeatedly divide the number by 2, keeping track of the remainder, until you reach 0. Then, read the remainders in reverse order.

For example, to convert the base 10 number 13 to binary:

1. 13 divided by 2 is 6 remainder 1.
2. 6 divided by 2 is 3 remainder 0.
3. 3 divided by 2 is 1 remainder 1.
4. 1 divided by 2 is 0 remainder 1.

Reading the remainders in reverse order gives: 1101.

### Base 10 to Hexadecimal

To convert a base 10 number to hexadecimal, the process is similar but you divide by 16 instead of 2.

For example, to convert the base 10 number 254 to hexadecimal:

1. 254 divided by 16 is 15 remainder 14.
2. 15 divided by 16 is 0 remainder 15.

Reading the remainders in reverse order (and remembering that 14 is E and 15 is F in hexadecimal) gives: FE.

### Binary to Base 10

To convert a binary number to base 10, you can use the method of considering each digit's place value, which is a power of 2. Starting from the rightmost digit (also known as the least significant bit), consider it as 2 to the power of 0, and then increase the power by 1 as you move to the left.

For example, the binary number 1101 corresponds to:

(1 _ 2^3) + (1 _ 2^2) + (0 _ 2^1) + (1 _ 2^0) = 8 + 4 + 0 + 1 = 13 in base 10.

### Binary to Hexadecimal

The conversion from binary to hexadecimal is straightforward because each hexadecimal digit represents 4 binary digits. Simply group the binary number into sets of four, starting from the right, and then convert each group into its hexadecimal equivalent.

For example, the binary number 11011101 corresponds to:

1 1011 1101

Looking up each group in a conversion table:

1 -> 1
1011 -> B
1101 -> D

So, 11011101 in binary is 1BD in hexadecimal.

### Hexadecimal to Base 10

Just as with binary to base 10, you can convert a hexadecimal number to base 10 by considering each digit's place value. However, in this case the place value is a power of 16.

For example, the hexadecimal number A3 corresponds to:

(10 _ 16^1) + (3 _ 16^0) = 160 + 3 = 163 in base 10.

### Hexadecimal to Binary

Conversion from hexadecimal to binary is also straightforward because each hexadecimal digit can be directly mapped to a 4-digit binary number.

For example, the hexadecimal number B3 corresponds to:

B -> 1011
3 -> 0011

So, B3 in hexadecimal is 10110011 in binary.
