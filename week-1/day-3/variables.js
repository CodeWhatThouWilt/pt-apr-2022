// let name = 'Yake'
// let name is the declaration
// = 'Yake' is the assignment
// declaration + assignment = initialization

// let
// can be reassigned later on
// let name = 'Yake'
// console.log(name);
// name = 'new name'
// console.log(name)

// let num;
// console.log(num)
// num = 30
// console.log(30)

// const
// const cannot be redefined after initialization
// const name = 'Yake'
// console.log(name)
// name = 'new name' // produce an error
// console.log(name)

// const name; // error because we're missing the assignment which = 'Yake'
// console.log(name)

// produces an error:
// let name = 'Yake'
// console.log(name)
// const name = 'new name'
// console.log(name)


// math
// let num = 5
// console.log(num)
// num += 5 // num = num + 5 in this scenario 5 + 5
// console.log(num)

// throws an error due to const reassignment
// const num = 5;
// console.log(num);
// num += 5; // num = num + 5 in this scenario 5 + 5
// console.log(num);

// let num = 5;
// console.log(num);
// num -= 10; // num = num - 10 in this scenario 5 - 10
// console.log(num);

// let num = 100;
// console.log(num);
// num %= 97; // num = num % 97 in this scenario 100 % 97
// console.log(num);

let num = 5;
console.log(num);
num **= 3; // num = num**3 in this scenario 5**3
console.log(num);