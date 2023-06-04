# JavaScript Arrays Big-O Project

These exercises will help you understand common JavaScript array functions by testing and analyzing their time complexity.

## Learning Goals

- Determine the time and space complexity based on analysis of the function
- Determine the time complexity of some of the built-in Array functions
- Prove your time complexity using timing benchmarks
- Chart timing benchmarks on Google Sheets

## Analyzing Array Functions

In the following exercises, you will analyze the cost of different Array methods: push, pop, shift, unshift, filter, map, reduce, and every.

You may find the following code helpful for testing your code:

```javascript
function randomNumberArr(max) {
const res = new Array();

for (let i = 0; i < max; i++) {
const randomNumber = Math.floor(Math.random() \* Math.floor(max));

    res.push(randomNumber);

}

return res;
}
```

randomNumberArr generates an array of random numbers of size max. For example, you can use max inputs of 1, 10, 100, 1,000, 10,000, and 100,000. If you decide to use inputs of size larger, your terminal may hang while executing. If this happens, press Ctrl + C to stop the execution.

### push

Use the randomNumberArr function and the following pushTest function to test the runtime of JavaScript's push with different array sizes. The pushTest function iterates n number of times where n is the size of an array, and pushes each element into a new array.

```javascript
function pushTest(n) {
	const arr = [];

	for (let i = 0; i < n; i++) {
		arr.push(i);
	}

	return arr;
}
```

Test pushTest with a variety of inputs and run timing benchmarks to identify the runtime.

Here's a sample test that prints the amount of time that it takes to run the pushTest function with an array size of 100000:

```javascript
let n = 100000;
console.time(`pushTest(${n}): `);
pushTest(n);
console.timeEnd(`pushTest(${n}): `);
```

Based on your timing benchmarks, what do you think the time complexity of the push function is?

### pop

Use the popTest function to test the JavaScript Array pop method. Test it the same way as you tested the pushTest method. Play around with different input sizes until you have a good grasp of the time complexity of Array's pop method.

```javascript
function popTest(arr) {
	const n = arr.length;

	for (let i = 0; i < n; i++) {
		arr.pop();
	}

	return arr;
}
```

Based on your timing benchmarks, what do you think the time complexity of the pop function is?

### enumerables

Take a few moments to take a guess at the time complexity of the JS built-in map, filter, reduce, and every functions are.

Next, construct a test function and prove if your guess was correct!

### unshift

Before running the test, what do you think the time complexity of the JavaScript Array unshift is?

Use this function to test. Feel free to play around with the function or test something you would like to try.

```javascript
function unshiftTest(n) {
	const arr = [];

	for (let i = 0; i < n; i++) {
		arr.unshift(i);
	}

	return arr;
}
```

Based on your benchmarks, was your original hypothesis correct? Remember, the unshiftTest function is executing the unshift method n number of times where n is the array size.

### shift

Before running the test, what do you think the time complexity of the JavaScript Array shift is? Take a few moments with your pair and discuss it.

Use this function to test the JavaScript Array shift method. Feel free to play around with the function or test something you and your pair would like to try.

```javascript
function shiftTest(arr) {
	const n = arr.length;

	for (let i = 0; i < n; i++) {
		arr.shift();
	}

	return arr;
}
```

Based on your benchmarks, was your original hypothesis correct?
