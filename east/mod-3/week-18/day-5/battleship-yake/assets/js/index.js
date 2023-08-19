import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);
console.log(board);

// Your code here
window.onload = () => {
	renderSetup();
	// createTopSection();
	// createBoard();
};

function renderSetup() {
	const form = document.createElement("form");
	document.body.appendChild(form);

	const h2 = document.createElement("h2");
	h2.innerText = "Setup the game board";

	form.appendChild(h2);

	const rowLabel = document.createElement("label");
	rowLabel.innerText = "Rows";

	form.appendChild(rowLabel);

	const colLabel = document.createElement("label");
	colLabel.innerText = "Columns";

	form.appendChild(colLabel);

	const rowsInput = document.createElement("input");
	rowsInput.type = "number";

	rowLabel.appendChild(rowsInput);

	const colInput = document.createElement("input");
	rowsInput.type = "number";

	colLabel.appendChild(colInput);

	const shipsInput = document.createElement("");
}

function resetGame(e) {
	const confirmReset = window.confirm("Are you sure you want to reset?");

	const gameBoard = document.getElementById("game-board");

	if (confirmReset) {
		gameBoard.remove();
		board = new Board();
		createBoard();
	}
}

function handleBoardClick(e) {
	const el = e.target;
	const { row, col, clicked } = el.dataset;

	if (clicked || board.isGameOver()) return;

	const hit = board.makeHit(row, col);

	if (hit) {
		el.classList.add("hit");
		el.innerText = hit;
	} else {
		el.classList.add("miss");
	}
	el.setAttribute("data-clicked", true);

	if (board.isGameOver()) {
		const winStatus = document.getElementById("win-header");
		winStatus.style.visibility = "visible";
	}
}

function createBoard() {
	const gameBoard = document.createElement("section");
	gameBoard.id = "game-board";
	document.body.appendChild(gameBoard);

	board.grid.forEach((row, i) => {
		row.forEach((col, j) => {
			const div = document.createElement("div");
			div.classList.add("square");
			div.setAttribute("data-row", i);
			div.setAttribute("data-col", j);
			gameBoard.appendChild(div);
		});
	});

	gameBoard.addEventListener("click", handleBoardClick);
}

function createTopSection() {
	const winStatus = document.createElement("h2");
	winStatus.id = "win-header";
	winStatus.innerText = "You win!";
	document.body.appendChild(winStatus);

	const resetButton = document.createElement("button");
	resetButton.innerText = "Reset Game";
	document.body.appendChild(resetButton);

	resetButton.addEventListener("click", resetGame);
}
