/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

// Your code here
const squareOne = document.getElementById("problem-one");
// const squareOne = document.querySelector("#problem-one");
squareOne.innerHTML = "";
const btnOne = document.createElement("button");
btnOne.innerText = "1";
squareOne.appendChild(btnOne);

// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

// Your code here
const squareTwo = document.querySelector(".two");
squareTwo.style.backgroundColor = "orange";
squareTwo.style.border = "5px dashed black";
squareTwo.style.color = "white";

// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well.
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.

// Your code here
const plusSquares = document.querySelectorAll(".plus");
console.log(plusSquares);
plusSquares.forEach((square) => {
	square.style.width = "100px";
	square.style.fontSize = "60px";
});

// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

// Your code here
const squareFour = document.querySelector(".four");
// const squareFour = document.getElementsByClassName("four")[0];
squareFour.setAttribute("id", "problem-four");
// squareFour.id = "problem-four";
squareFour.classList.remove("square");
squareFour.classList.add("round");
// squareFour.className = "four round";

// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

// Your code here
// Solution One
// const squares = document.getElementsByClassName("square");
// squares[3].remove();
// squares[3].remove();
// squares[3].remove();

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
	const text = square.innerText;
	if (text == 5 || text == 6 || text == 7) square.remove();
});
